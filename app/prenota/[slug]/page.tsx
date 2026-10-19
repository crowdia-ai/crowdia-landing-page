import type { Metadata } from "next";
import { PrenotaFlow } from "./prenota-flow";
import { isSoldOut, isClosedByTime } from "@/lib/soldOut";
import { prenotaTheme } from "@/lib/prenotaTheme";
import { getEventBySlug, prenotaWhen, prenotaWhere } from "@/lib/prenotaEvent";

export const dynamic = "force-dynamic";

// Anteprima del link (WhatsApp, Telegram, iMessage): titolo, data e luogo dell'evento al posto
// della card generica del sito (Mattia, 19/10). L'immagine e' opengraph-image.tsx qui accanto.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const event = await getEventBySlug(slug);
  if (!event) return { title: "Lista non trovata · Crowdia" };
  const title = `${event.title} · ${prenotaWhen(event.event_start_time)}`;
  const description = [prenotaWhere(event), "Riserva il tuo ingresso su Crowdia"].filter(Boolean).join(" · ");
  return {
    title,
    description,
    openGraph: { type: "website", locale: "it_IT", siteName: "Crowdia", url: `/prenota/${slug}`, title, description },
    twitter: { card: "summary_large_image", title, description },
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

  // Slug automatico senza lista (Mattia, 19/10): niente modulo, si va all'evento nell'app (o nella web
  // app). Il rimando e' nella pagina e non un redirect del server, cosi' WhatsApp legge ancora titolo e
  // locandina dai meta tag qui sopra e l'anteprima resta quella dell'evento.
  if (!event.prenotaAttiva) {
    const target = `https://app.crowdia.ai/event/${event.id}`;
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#0a090c] px-6 text-center text-white">
        <meta httpEquiv="refresh" content={`0;url=${target}`} />
        <div>
          <h1 className="text-2xl font-extrabold">{event.title}</h1>
          <p className="mt-2 text-white/60">Ti portiamo all&apos;evento su Crowdia…</p>
          <a href={target} className="mt-6 inline-block rounded-full bg-white px-6 py-3 font-bold text-black">
            Apri l&apos;evento
          </a>
        </div>
      </main>
    );
  }

  return <PrenotaFlow event={event} slug={slug} soldOut={isSoldOut(slug) || isClosedByTime(slug)} closedLabel={isSoldOut(slug) ? "Sold out" : "Iscrizioni chiuse"} theme={prenotaTheme(slug)} />;
}
