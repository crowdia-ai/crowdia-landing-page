import { isSoldOut, isClosedByTime } from '@/lib/soldOut';
import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { createHash } from 'crypto';
import { z } from 'zod';

// Reservation lists on the marketing site (crowdia.ai/prenota/<slug>).
// Plan: projects/crowdia/docs/PRENOTA-SITO-MARKETING-2026-09-28.md (meeting 44, 2026-09-28)
// Anonymous signup, no account. Uses the service role key -- list_reservations has NO
// anon/authenticated write policy at all (see supabase/migrations in crowdia-app,
// 20260928190000_prenota_lista_sito_marketing.sql), so this route is the only writer.

const bodySchema = z.object({
  slug: z.string().min(1).max(200),
  firstName: z.string().trim().min(2).max(80),
  lastName: z.string().trim().min(2).max(80),
  isAdult: z.literal(true),
});

const RATE_LIMIT_MAX = 8;
const RATE_LIMIT_WINDOW_MINUTES = 10;

function getSupabaseAdmin() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { persistSession: false } }
  );
}

function hashIp(ip: string) {
  const salt = process.env.RESERVATION_IP_SALT || 'crowdia-prenota-default-salt';
  return createHash('sha256').update(`${salt}:${ip}`).digest('hex');
}

function getClientIp(request: NextRequest): string {
  const forwardedFor = request.headers.get('x-forwarded-for');
  if (forwardedFor) return forwardedFor.split(',')[0].trim();
  return request.headers.get('x-real-ip') || 'unknown';
}

export async function POST(request: NextRequest) {
  let body: z.infer<typeof bodySchema>;
  try {
    body = bodySchema.parse(await request.json());
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Dati non validi', details: error.issues },
        { status: 400 }
      );
    }
    return NextResponse.json({ error: 'Richiesta non valida' }, { status: 400 });
  }

  const supabaseAdmin = getSupabaseAdmin();
  const ipHash = hashIp(getClientIp(request));

  try {
    const { count: recentCount, error: rateLimitError } = await supabaseAdmin
      .from('list_reservations')
      .select('id', { count: 'exact', head: true })
      .eq('ip_hash', ipHash)
      .gte('created_at', new Date(Date.now() - RATE_LIMIT_WINDOW_MINUTES * 60_000).toISOString());

    if (rateLimitError) {
      console.error('[prenota] rate limit check failed:', rateLimitError);
    } else if ((recentCount || 0) >= RATE_LIMIT_MAX) {
      return NextResponse.json(
        { error: 'Troppe richieste. Riprova tra qualche minuto.' },
        { status: 429 }
      );
    }

    const { data: event, error: eventError } = await supabaseAdmin
      .from('events')
      .select('id')
      .eq('prenota_slug', body.slug)
      .maybeSingle();

    if (eventError) {
      console.error('[prenota] event lookup failed:', eventError);
      return NextResponse.json({ error: 'Si è verificato un errore' }, { status: 500 });
    }
    if (!event) {
      return NextResponse.json({ error: 'Lista non trovata' }, { status: 404 });
    }

    if (isSoldOut(body.slug)) {
      return NextResponse.json({ error: 'Sold out: la lista è chiusa' }, { status: 409 });
    }
    if (isClosedByTime(body.slug)) {
      return NextResponse.json({ error: 'Iscrizioni chiuse' }, { status: 409 });
    }

    // Dedup name+event: a double-tap or reload doesn't create a second row for the
    // same person; two different real guests who share a name still both get on the list.
    const { data: existing, error: dedupError } = await supabaseAdmin
      .from('list_reservations')
      .select('id')
      .eq('event_id', event.id)
      .ilike('first_name', body.firstName)
      .ilike('last_name', body.lastName)
      .maybeSingle();

    if (dedupError) {
      console.error('[prenota] dedup check failed:', dedupError);
    }

    if (!existing) {
      const { error: insertError } = await supabaseAdmin.from('list_reservations').insert({
        event_id: event.id,
        first_name: body.firstName,
        last_name: body.lastName,
        ip_hash: ipHash,
      });

      if (insertError) {
        console.error('[prenota] insert failed:', insertError);
        return NextResponse.json({ error: 'Si è verificato un errore' }, { status: 500 });
      }
    }

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error('[prenota] unexpected error:', error);
    return NextResponse.json({ error: 'Si è verificato un errore' }, { status: 500 });
  }
}
