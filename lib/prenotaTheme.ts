// Colore del tasto e della barra di scorrimento per ogni pagina crowdia.ai/prenota/<slug>, preso dalla
// locandina (Mattia 05/10: THE OPENING «dello stesso colore del titolo del locale CitySea» = bianco).
// Senza voce si usa il rosso di Southern, la prima pagina.
// `ingresso`: testo dell'ingresso scritto dall'organizzatore; se c'è, sostituisce quello calcolato dal
// prezzo e toglie «Nessun pagamento su Crowdia» (Mattia per Nino, 05/10).
export interface PrenotaTheme { cta: string; ctaText: string; ingresso?: string }

const DEFAULT: PrenotaTheme = { cta: "#E30B0B", ctaText: "#FFFFFF" };

const THEMES: Record<string, PrenotaTheme> = {
  "the-opening-10-10": { cta: "#FFFFFF", ctaText: "#0A090C", ingresso: "Ingresso in Lista - da 15€ con drink incluso" },
  // ATTIQUE afternoon: il blu della locandina (#0B71EF, campionato sul titolo) — Mattia 11/10
  "attique-afternoon-11-10": { cta: "#0B71EF", ctaText: "#FFFFFF" },
};

export const prenotaTheme = (slug: string): PrenotaTheme => THEMES[slug] ?? DEFAULT;
