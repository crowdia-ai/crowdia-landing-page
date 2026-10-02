// Liste del sito chiuse per sold-out (crowdia.ai/prenota/<slug>): la pagina resta visibile,
// il tasto diventa «Sold out» e non si clicca, e l'API rifiuta nuove iscrizioni.
// Southern 02/10: sold-out chiesto da Mattia per Nino (Palermo's Calling), 02/10 sera.
export const SOLD_OUT_SLUGS = new Set<string>(["southern-02-10"]);

export const isSoldOut = (slug: string) => SOLD_OUT_SLUGS.has(slug);
