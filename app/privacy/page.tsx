import Link from "next/link";
import { SubpageNav } from "@/components/ui/subpage-nav";

const LAST_UPDATED = "21 agosto 2026";

const SECTIONS = [
  {
    title: "1. Introduzione",
    body: `Crowdia ("noi", "nostro") rispetta la tua privacy. Questa Informativa sulla Privacy spiega come raccogliamo, utilizziamo, condividiamo e proteggiamo i tuoi dati quando visiti crowdia.ai o utilizzi l'app Crowdia.\n\nUtilizzando il sito o l'app accetti la raccolta e l'utilizzo delle informazioni secondo questa informativa.`,
  },
  {
    title: "2. Dati che raccogliamo",
    body: `Possiamo raccogliere le seguenti categorie di dati:\n\n• Dati di contatto: nome ed indirizzo email, quando ti iscrivi alla waitlist o crei un account.\n• Dati di utilizzo: come interagisci con il sito e con l'app, inclusi eventi visualizzati, ricerche effettuate e funzionalità usate.\n• Dati del dispositivo: tipo di dispositivo, sistema operativo, identificatori univoci.\n• Dati di localizzazione: se autorizzata, la posizione approssimativa per mostrarti eventi nelle vicinanze. Puoi disattivare questo permesso in qualsiasi momento.\n• Comunicazioni: se ci contatti, possiamo conservare traccia della corrispondenza.`,
  },
  {
    title: "3. Come utilizziamo i tuoi dati",
    body: `Utilizziamo i dati raccolti per:\n\n• Fornire, mantenere e migliorare il servizio\n• Personalizzare la scoperta di eventi\n• Inviarti comunicazioni relative a eventi e aggiornamenti (previo consenso)\n• Rispondere a richieste e commenti\n• Analizzare l'utilizzo per migliorare il servizio\n• Prevenire attività fraudolente e risolvere problemi tecnici\n• Adempiere a obblighi di legge`,
  },
  {
    title: "4. Condivisione dei dati",
    body: `Non vendiamo né affittiamo i tuoi dati personali a terzi. Possiamo condividere dati nei seguenti casi:\n\n• Fornitori di servizi: forniture terze che erogano servizi per nostro conto (es. hosting, invio email, analytics), vincolati da obblighi di riservatezza.\n• Obblighi di legge: se richiesto dalla legge o da un procedimento legale valido.\n• Operazioni societarie: in caso di fusione, acquisizione o cessione di attività, i tuoi dati potrebbero essere trasferiti come parte dell'operazione.\n• Con il tuo consenso: per qualsiasi altro scopo, previo consenso esplicito.`,
  },
  {
    title: "5. Conservazione dei dati",
    body: `Conserviamo i tuoi dati personali finché il tuo account resta attivo o finché necessario per fornire il servizio. Puoi richiedere la cancellazione del tuo account e dei dati associati in qualsiasi momento scrivendo a legal@crowdia.ai.`,
  },
  {
    title: "6. Sicurezza",
    body: `Adottiamo misure tecniche e organizzative ragionevoli per proteggere i tuoi dati da accessi non autorizzati, alterazione, divulgazione o distruzione. Nessun metodo di trasmissione via internet è tuttavia sicuro al 100%.`,
  },
  {
    title: "7. Minori",
    body: `Il servizio non è rivolto a minori di 13 anni. Non raccogliamo consapevolmente dati personali da minori di 13 anni. Se ritieni che ciò sia avvenuto, contattaci per la cancellazione immediata dei dati.`,
  },
  {
    title: "8. Servizi di terze parti",
    body: `Il sito e l'app utilizzano servizi di terze parti che possono raccogliere informazioni, tra cui Supabase (autenticazione e archiviazione dati), Resend (invio email) e, per le campagne pubblicitarie, Meta (Facebook/Instagram). Questi servizi hanno una propria informativa sulla privacy.`,
  },
  {
    title: "9. I tuoi diritti",
    body: `In base alla normativa applicabile (incluso il GDPR per i residenti nell'Unione Europea), hai diritto a:\n\n• Accesso: richiedere una copia dei dati che conserviamo su di te\n• Rettifica: richiedere la correzione di dati inesatti o incompleti\n• Cancellazione: richiedere la cancellazione dei tuoi dati personali\n• Opposizione/Revoca: opporti al trattamento o revocare il consenso in qualsiasi momento, incluso il consenso prestato tramite un modulo Meta\n\nPer esercitare questi diritti scrivi a legal@crowdia.ai.`,
  },
  {
    title: "10. Modifiche a questa informativa",
    body: `Possiamo aggiornare questa Informativa periodicamente. Le modifiche saranno segnalate aggiornando la data "Ultimo aggiornamento" in cima a questa pagina.`,
  },
  {
    title: "11. Contatti",
    body: `Per qualsiasi domanda su questa Informativa sulla Privacy:\n\nEmail: legal@crowdia.ai`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <SubpageNav theme="dark" ctaLabel="Richiedi Accesso" ctaHref="/social#waitlist" />

      <div className="max-w-3xl mx-auto px-6 pt-32 pb-24">
        <h1 className="font-montserrat text-3xl md:text-4xl font-bold mb-2">
          Privacy Policy
        </h1>
        <p className="font-inter text-xs text-white/60 mb-10">
          Ultimo aggiornamento: {LAST_UPDATED}
        </p>

        <p className="font-inter text-sm text-white/70 leading-relaxed mb-12">
          Leggi con attenzione questa informativa per capire come trattiamo i tuoi dati
          personali.
        </p>

        <div className="space-y-10">
          {SECTIONS.map((section) => (
            <section key={section.title}>
              <h2 className="font-montserrat text-lg font-bold mb-3">
                {section.title}
              </h2>
              <p className="font-inter text-sm text-white/70 leading-relaxed whitespace-pre-line">
                {section.body}
              </p>
            </section>
          ))}
        </div>

        <p className="font-inter text-xs text-white/50 mt-16">
          Vedi anche{" "}
          <Link href="/" className="underline hover:text-white/60">
            crowdia.ai
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
