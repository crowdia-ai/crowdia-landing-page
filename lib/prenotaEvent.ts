import { supabase } from "@/lib/supabase";

// Evento di una pagina crowdia.ai/prenota/<slug>: lo usano la pagina e la sua anteprima per i
// link (opengraph-image.tsx), cosi' la card su WhatsApp dice le stesse cose della pagina.
export interface PrenotaEvent {
  id: string;
  title: string;
  description: string | null;
  cover_image_url: string | null;
  event_start_time: string;
  price_free: boolean | null;
  price_from: number | null;
  locationName: string | null;
  locationAddress: string | null;
  listName: string | null;
  /** false = slug automatico, nessuna lista: il sito porta all'evento nell'app (Mattia, 19/10). */
  prenotaAttiva: boolean;
}

interface RawEventRow {
  id: string;
  title: string;
  description: string | null;
  cover_image_url: string | null;
  event_start_time: string;
  price_free: boolean | null;
  price_from: number | null;
  prenota_attiva: boolean | null;
  locations: { name: string | null; address: string | null } | { name: string | null; address: string | null }[] | null;
  organizers: { organization_name: string | null } | { organization_name: string | null }[] | null;
}

export async function getEventBySlug(slug: string): Promise<PrenotaEvent | null> {
  const { data, error } = await supabase
    .from("events")
    .select(
      "id, title, description, cover_image_url, event_start_time, price_free, price_from, prenota_attiva, " +
        "locations(name, address), organizers!events_organizer_id_fkey(organization_name)"
    )
    .eq("prenota_slug", slug)
    .maybeSingle()
    .returns<RawEventRow>();

  if (error || !data) return null;

  const location = Array.isArray(data.locations) ? data.locations[0] : data.locations;
  const organizer = Array.isArray(data.organizers) ? data.organizers[0] : data.organizers;

  return {
    id: data.id,
    title: data.title,
    description: data.description,
    cover_image_url: data.cover_image_url,
    event_start_time: data.event_start_time,
    price_free: data.price_free,
    price_from: data.price_from,
    locationName: location?.name ?? null,
    locationAddress: location?.address ?? null,
    listName: organizer?.organization_name ?? null,
    prenotaAttiva: !!data.prenota_attiva,
  };
}

const ROME = "Europe/Rome";

/** «sab 31 ott · 23:00», ora di Palermo (il server gira in UTC). */
export function prenotaWhen(iso: string): string {
  const d = new Date(iso);
  const day = new Intl.DateTimeFormat("it-IT", { weekday: "short", day: "numeric", month: "short", timeZone: ROME })
    .format(d)
    .replace(/\./g, "");
  const time = new Intl.DateTimeFormat("it-IT", { hour: "2-digit", minute: "2-digit", timeZone: ROME }).format(d);
  return `${day} · ${time}`;
}

/** «Camillo Restaurant · da 20€» (solo le parti che ci sono). */
export function prenotaWhere(e: PrenotaEvent): string {
  const price = e.price_free ? "Ingresso gratuito" : e.price_from ? `da ${e.price_from}€` : null;
  return [e.locationName, price].filter(Boolean).join(" · ");
}
