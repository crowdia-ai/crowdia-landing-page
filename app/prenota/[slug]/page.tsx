import { supabase } from "@/lib/supabase";
import { PrenotaFlow } from "./prenota-flow";
import { isSoldOut } from "@/lib/soldOut";

export const dynamic = "force-dynamic";

interface PrenotaEvent {
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
}

interface RawEventRow {
  id: string;
  title: string;
  description: string | null;
  cover_image_url: string | null;
  event_start_time: string;
  price_free: boolean | null;
  price_from: number | null;
  locations: { name: string | null; address: string | null } | { name: string | null; address: string | null }[] | null;
  organizers: { organization_name: string | null } | { organization_name: string | null }[] | null;
}

async function getEventBySlug(slug: string): Promise<PrenotaEvent | null> {
  const { data, error } = await supabase
    .from("events")
    .select(
      "id, title, description, cover_image_url, event_start_time, price_free, price_from, " +
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
  };
}

export default async function PrenotaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = await getEventBySlug(slug);

  if (!event) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#0a090c] px-6 text-center text-white">
        <div>
          <div className="text-5xl">🔎</div>
          <h1 className="mt-4 text-2xl font-extrabold">Lista non trovata</h1>
          <p className="mt-2 text-white/60">
            Il link che hai aperto non corrisponde a nessuna lista attiva.
          </p>
        </div>
      </main>
    );
  }

  return <PrenotaFlow event={event} slug={slug} soldOut={isSoldOut(slug)} />;
}
