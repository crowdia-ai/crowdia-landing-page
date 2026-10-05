// Liste del sito chiuse per sold-out (crowdia.ai/prenota/<slug>): la pagina resta visibile,
// il tasto diventa «Sold out» e non si clicca, e l'API rifiuta nuove iscrizioni.
// Southern 02/10: sold-out chiesto da Mattia per Nino (Palermo's Calling), 02/10 sera.
export const SOLD_OUT_SLUGS = new Set<string>(["southern-02-10"]);

export const isSoldOut = (slug: string) => SOLD_OUT_SLUGS.has(slug);

// Chiusura a orario (Mattia per Nino, 05/10): dopo questo istante la pagina mostra «Iscrizioni chiuse»
// e l'API rifiuta. Orari in UTC: 18:00Z = 20:00 ora di Roma (ora legale).
export const CLOSES_AT: Record<string, string> = {
  "the-opening-10-10": "2026-10-10T18:00:00Z",
};

export const isClosedByTime = (slug: string, now = new Date()) =>
  !!CLOSES_AT[slug] && now >= new Date(CLOSES_AT[slug]);
