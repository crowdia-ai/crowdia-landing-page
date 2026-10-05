// Colore del tasto e della barra di scorrimento per ogni pagina crowdia.ai/prenota/<slug>, preso dalla
// locandina (Mattia 05/10: THE OPENING «dello stesso colore del titolo del locale CitySea» = bianco).
// Senza voce si usa il rosso di Southern, la prima pagina.
export interface PrenotaTheme { cta: string; ctaText: string }

const DEFAULT: PrenotaTheme = { cta: "#E30B0B", ctaText: "#FFFFFF" };

const THEMES: Record<string, PrenotaTheme> = {
  "the-opening-10-10": { cta: "#FFFFFF", ctaText: "#0A090C" },
};

export const prenotaTheme = (slug: string): PrenotaTheme => THEMES[slug] ?? DEFAULT;
