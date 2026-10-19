// Colore del tasto e della barra di scorrimento per ogni pagina crowdia.ai/prenota/<slug>, preso dalla
// locandina (Mattia 05/10: THE OPENING «dello stesso colore del titolo del locale CitySea» = bianco).
// Senza voce si usa il rosso di Southern, la prima pagina.
// `ingresso`: testo dell'ingresso scritto dall'organizzatore; se c'è, sostituisce quello calcolato dal
// prezzo e toglie «Nessun pagamento su Crowdia» (Mattia per Nino, 05/10).
// `eta`/`minAge`: riga «Età» nella scheda e soglia della spunta d'età (Mattia, ATTIQUE 11/10).
// `ctaLabel`: testo del tasto al primo passo (Nino 18/10: «Riserva il tuo ingresso»).
// `pagamentoOrganizzatore`: l'organizzatore chiede il pagamento in privato DOPO l'iscrizione. Crowdia non
// mostra mai IBAN, PayPal o istruzioni di pagamento (Mattia 18/10, scelta «lista-poi-lui»: i soldi non
// passano dalla nostra pagina). `whatsapp`: numero dell'organizzatore, in formato internazionale senza +.
// `telefono`: al passo 2 si chiede anche il numero WhatsApp, obbligatorio; Crowdia gira la lista con i contatti
// agli organizzatori, che scrivono loro per il pagamento (Mattia per Nino, THE OTHER SIDE 19/10).
// `riserva`: parole «riserva» al posto di «lista», perché l'ingresso si paga prima (Mattia 19/10, scelta A:
// «Riserva il tuo ingresso» / «Conferma» / «Ingresso riservato», riga «Organizza» invece di «Lista»).
// `sfondo`: sfondo CSS al posto della locandina sfocata (THE OTHER SIDE: rosso scuro che sfuma al nero).
export interface PrenotaTheme {
  cta: string;
  ctaText: string;
  ingresso?: string;
  eta?: string;
  minAge?: number;
  ctaLabel?: string;
  pagamentoOrganizzatore?: boolean;
  whatsapp?: string;
  telefono?: boolean;
  sfondo?: string;
  riserva?: boolean;
}

const DEFAULT: PrenotaTheme = { cta: "#E30B0B", ctaText: "#FFFFFF" };

const THEMES: Record<string, PrenotaTheme> = {
  "the-opening-10-10": { cta: "#FFFFFF", ctaText: "#0A090C", ingresso: "Ingresso in Lista - da 15€ con drink incluso" },
  // ATTIQUE afternoon: il blu della locandina (#0B71EF, campionato sul titolo) — Mattia 11/10
  "attique-afternoon-11-10": { cta: "#0B71EF", ctaText: "#FFFFFF", ingresso: "Entrata in lista • 10€ con drink incluso", eta: "+24", minAge: 24 },
  // THE OTHER SIDE, Halloween da Camillo: il rosso del neon della locandina, sfondo thriller — Mattia per Nino 19/10
  "the-other-side-31-10": {
    cta: "#E3201B",
    ctaText: "#FFFFFF",
    ingresso: "20€ con drink incluso",
    eta: "18+",
    minAge: 18,
    ctaLabel: "Riserva il tuo ingresso",
    riserva: true,
    pagamentoOrganizzatore: true,
    telefono: true,
    sfondo: "radial-gradient(120% 70% at 50% 0%, #6B0A0E 0%, #3A0508 38%, #170204 70%, #050001 100%)",
  },
};

export const prenotaTheme = (slug: string): PrenotaTheme => THEMES[slug] ?? DEFAULT;
