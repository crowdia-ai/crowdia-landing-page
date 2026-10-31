// Liste del sito chiuse per sold-out (crowdia.ai/prenota/<slug>): la pagina resta visibile,
// il tasto diventa «Sold out» e non si clicca, e l'API rifiuta nuove iscrizioni.
// Southern 02/10: sold-out chiesto da Mattia per Nino (Palermo's Calling), 02/10 sera.
export const SOLD_OUT_SLUGS = new Set<string>(["southern-02-10"]);

// Sold out a orario (Mattia per Nino, 31/10): da questo istante la pagina dice «Sold out» (non «Iscrizioni chiuse»)
// e l'API rifiuta. Orari in UTC: 17:00Z = 18:00 ora di Roma (ora solare dal 25/10).
export const SOLD_OUT_AT: Record<string, string> = {
  // THE OTHER SIDE (Camillo, 31/10): sold out alle 18:00, chiesto da Nino (Palermo's Calling)
  "the-other-side-31-10": "2026-10-31T17:00:00Z",
};

export const isSoldOut = (slug: string, now = new Date()) =>
  SOLD_OUT_SLUGS.has(slug) || (!!SOLD_OUT_AT[slug] && now >= new Date(SOLD_OUT_AT[slug]));

// Chiusura a orario (Mattia per Nino, 05/10): dopo questo istante la pagina mostra «Iscrizioni chiuse»
// e l'API rifiuta. Orari in UTC: 18:00Z = 20:00 ora di Roma (ora legale).
export const CLOSES_AT: Record<string, string> = {
  "the-opening-10-10": "2026-10-10T18:00:00Z",
  // ATTIQUE afternoon (Camillo, 11/10 17:00): chiude all'inizio dell'evento (Mattia, 10/10)
  "attique-afternoon-11-10": "2026-10-11T15:00:00Z",
  // THE OTHER SIDE: chiude all'inizio dell'evento, 31/10 23:00 ora italiana
  "the-other-side-31-10": "2026-10-31T22:00:00Z",
};

export const isClosedByTime = (slug: string, now = new Date()) =>
  !!CLOSES_AT[slug] && now >= new Date(CLOSES_AT[slug]);
