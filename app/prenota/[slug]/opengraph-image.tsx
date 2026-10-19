import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { getEventBySlug, prenotaWhen, prenotaWhere } from "@/lib/prenotaEvent";

// Card 1200×630 per i link di crowdia.ai/prenota/<slug> su WhatsApp e simili (Mattia, 19/10,
// mockup projects/crowdia/mockups/anteprime-link-2026-10-19): locandina a sinistra, la stessa
// locandina scurita come sfondo, titolo, data e ora di Palermo, luogo e prezzo.
// Satori non fa filter: blur, quindi lo sfondo e' la locandina sotto un velo nero.
export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Evento su Crowdia";

const font = (f: string) => readFile(join(process.cwd(), "assets/og", f));

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const [event, syne, interBold, inter, logo] = await Promise.all([
    getEventBySlug(slug),
    font("Syne_700Bold.ttf"),
    font("inter_bold.ttf"),
    font("inter_regular.ttf"),
    readFile(join(process.cwd(), "assets/og/logo.png")),
  ]);
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;
  const fonts = [
    { name: "Syne", data: syne, weight: 700 as const },
    { name: "Inter", data: interBold, weight: 700 as const },
    { name: "Inter", data: inter, weight: 400 as const },
  ];

  if (!event) {
    return new ImageResponse(
      (
        <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 28, background: "#0B0B0E", color: "#fff", fontFamily: "Syne", fontSize: 96 }}>
          <img src={logoSrc} height={150} />
          CROWDIA
        </div>
      ),
      { ...size, fonts }
    );
  }

  const title = event.title.length > 40 ? `${event.title.slice(0, 38)}…` : event.title;
  const titleSize = title.length > 24 ? 64 : 84;
  const where = prenotaWhere(event);

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", background: "#000", color: "#fff", fontFamily: "Inter" }}>
        {event.cover_image_url ? (
          <img src={event.cover_image_url} width={1200} height={630} style={{ position: "absolute", left: 0, top: 0, objectFit: "cover" }} />
        ) : null}
        <div style={{ position: "absolute", left: 0, top: 0, width: 1200, height: 630, display: "flex", background: "linear-gradient(90deg, rgba(0,0,0,0.86), rgba(0,0,0,0.93) 45%, rgba(0,0,0,0.95))" }} />
        {event.cover_image_url ? (
          <img src={event.cover_image_url} width={384} height={550} style={{ position: "absolute", left: 60, top: 40, objectFit: "cover", borderRadius: 22 }} />
        ) : null}
        <div style={{ position: "absolute", left: event.cover_image_url ? 500 : 90, right: 60, top: 0, bottom: 0, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ fontFamily: "Syne", fontSize: titleSize, lineHeight: 1, letterSpacing: -2 }}>{title}</div>
          <div style={{ fontSize: 38, fontWeight: 700, marginTop: 26 }}>{prenotaWhen(event.event_start_time)}</div>
          {where ? <div style={{ fontSize: 34, color: "#D8D8DE", marginTop: 18 }}>{where}</div> : null}
        </div>
        <div style={{ position: "absolute", left: event.cover_image_url ? 500 : 90, bottom: 48, display: "flex", alignItems: "center", gap: 14, fontFamily: "Syne", fontSize: 30 }}>
          <img src={logoSrc} height={46} />
          CROWDIA
        </div>
      </div>
    ),
    { ...size, fonts }
  );
}
