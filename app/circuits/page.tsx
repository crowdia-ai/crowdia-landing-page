import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Upload,
  ExternalLink,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export default function Home() {
  return (
    <div className="light" data-theme="light">
      <main className="min-h-screen bg-white text-charcoal-500 selection:bg-magenta-100 selection:text-magenta-700">
        {/* ================================================================
            NAVIGATION BAR
        ================================================================ */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative w-8 h-8">
                <Image
                  src="/crowdia-logo-icon-transparent.png"
                  alt="CROWDIA Logo"
                  fill
                  className="object-contain"
                  sizes="32px"
                  priority
                />
              </div>
              <span
                className="font-montserrat text-lg font-bold text-charcoal-500 group-hover:text-magenta-500 transition-colors"
                translate="no"
              >
                CROWDIA
              </span>
            </Link>

            <Link
              href="/circuits/join"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-magenta-500 text-white font-inter text-sm font-semibold rounded-lg hover:bg-magenta-600 transition-colors"
            >
              Entra nel Circuito
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </nav>

        {/* ================================================================
            HERO SECTION — Accendiamo la città.
        ================================================================ */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20">
          {/* Warm gradient fallback evoking Sicilian sunlight (visible state until video file lands) */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-50/80 via-white to-rose-50/60" />

          {/* TODO: drop in /vid-bckgrnd-orgs.mp4 when available; commented element below is a placeholder. */}
          {/* <video className="absolute inset-0 w-full h-full object-cover opacity-40" autoPlay muted loop playsInline preload="auto" aria-hidden="true"><source src="/vid-bckgrnd-orgs.mp4" type="video/mp4" /></video> */}

          {/* Light-mode legibility overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/60 to-amber-50/70" />

          {/* Subtle dotted texture */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #2E2E2E 1px, transparent 0)`,
              backgroundSize: "32px 32px",
            }}
          />

          {/* Magenta accent glow */}
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-magenta-500/8 rounded-full blur-[120px]" />
          <div className="absolute -bottom-48 -left-48 w-[500px] h-[500px] bg-amber-200/20 rounded-full blur-[150px]" />

          <div className="relative z-10 max-w-5xl mx-auto px-6 py-20">
            <h1 className="font-montserrat text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-8 text-charcoal-500">
              Accendiamo{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-magenta-500">la città.</span>
                <span className="absolute bottom-1 left-0 right-0 h-3 bg-magenta-500/10 -z-0 rounded" />
              </span>
            </h1>

            <p className="font-inter text-lg md:text-xl text-charcoal-300 max-w-2xl leading-relaxed mb-12">
              Crowdia &egrave; l&apos;AI Social Discovery App che connette i tuoi
              eventi e il tuo spazio con il pubblico giusto. Illumina la tua
              offerta e raggiungi chi vive Palermo ogni giorno.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/circuits/join"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-magenta-500 text-white font-inter font-semibold rounded-xl hover:bg-magenta-600 transition-all duration-300 shadow-lg shadow-magenta-500/25 hover:shadow-xl hover:shadow-magenta-500/30 hover:-translate-y-0.5"
              >
                Inizia a pubblicare
                <ChevronRight className="w-4 h-4" />
              </Link>
              <a
                href="#problem"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-charcoal-500/5 text-charcoal-500 font-inter font-medium rounded-xl hover:bg-charcoal-500/10 transition-all duration-300 border border-charcoal-500/10"
              >
                Scopri di Pi&ugrave;
              </a>
            </div>
          </div>
        </section>

        {/* ================================================================
            SECTION 1 — THE PROBLEM
        ================================================================ */}
        <section id="problem" className="py-24 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal-500 mb-6 leading-tight">
              Smetti di rincorrere{" "}
              <span className="text-magenta-500">l&apos;algoritmo.</span>
            </h2>

            <p className="font-inter text-lg text-charcoal-300 max-w-3xl leading-relaxed">
              Sui social network tradizionali, il tuo evento &egrave; solo
              rumore di fondo. L&apos;algoritmo decide chi ti vede e quando. Su
              Crowdia, la visibilit&agrave; &egrave; guidata dalla pertinenza:
              portiamo i tuoi contenuti davanti a chi &egrave; gi&agrave; fuori
              casa o sta decidendo attivamente dove andare.
            </p>
          </div>
        </section>

        {/* ================================================================
            SECTION 2 — THE SOLUTION
        ================================================================ */}
        <section className="py-24 px-6 bg-gray-50/50">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal-500 mb-6 leading-tight">
              Un layer informativo
              <br />
              <span className="text-magenta-500">per la citt&agrave;.</span>
            </h2>

            <p className="font-inter text-lg text-charcoal-300 max-w-3xl leading-relaxed">
              Crowdia non &egrave; un altro social network da gestire, ma
              un&apos;infrastruttura intelligente che intercetta l&apos;utente
              nel momento della scoperta. Funzioniamo come un layer informativo
              sopra i canali che gi&agrave; usi, ottimizzando il percorso che
              porta il pubblico dalla mappa al tuo evento.
            </p>
          </div>
        </section>

        {/* ================================================================
            SECTION 3 — THE ADVANTAGE (4 numbered cards)
        ================================================================ */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal-500 mb-16 leading-tight">
              Piattaforma di promozione
              <br />
              <span className="text-magenta-500">social smart.</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* 01 — Autonomia di Caricamento */}
              <div className="group relative p-8 rounded-2xl border border-gray-100 bg-gradient-to-br from-white to-gray-50/50 hover:border-magenta-200 hover:shadow-lg hover:shadow-magenta-500/5 transition-all duration-500">
                <div className="text-5xl font-montserrat font-bold text-magenta-500/10 mb-4">
                  01
                </div>
                <div className="w-12 h-12 rounded-xl bg-magenta-50 flex items-center justify-center mb-6 group-hover:bg-magenta-100 transition-colors duration-500">
                  <Upload className="w-6 h-6 text-magenta-500" />
                </div>
                <h3 className="font-montserrat text-xl font-bold text-charcoal-500 mb-3">
                  Autonomia di Caricamento
                </h3>
                <p className="font-inter text-charcoal-300 leading-relaxed">
                  Gestisci la tua programmazione in tempo reale con uno
                  strumento professionale pensato per la dinamicit&agrave;
                  urbana.
                </p>
              </div>

              {/* 02 — Traffico Diretto */}
              <div className="group relative p-8 rounded-2xl border border-gray-100 bg-gradient-to-br from-white to-gray-50/50 hover:border-magenta-200 hover:shadow-lg hover:shadow-magenta-500/5 transition-all duration-500">
                <div className="text-5xl font-montserrat font-bold text-magenta-500/10 mb-4">
                  02
                </div>
                <div className="w-12 h-12 rounded-xl bg-magenta-50 flex items-center justify-center mb-6 group-hover:bg-magenta-100 transition-colors duration-500">
                  <ExternalLink className="w-6 h-6 text-magenta-500" />
                </div>
                <h3 className="font-montserrat text-xl font-bold text-charcoal-500 mb-3">
                  Traffico Diretto
                </h3>
                <p className="font-inter text-charcoal-300 leading-relaxed">
                  Non tratteniamo gli utenti in un &quot;walled garden&quot;.
                  Portiamo il pubblico direttamente ai tuoi canali ufficiali o
                  ai tuoi sistemi di ticketing.
                </p>
              </div>

              {/* 03 — Piattaforma Transaction-Free */}
              <div className="group relative p-8 rounded-2xl border border-gray-100 bg-gradient-to-br from-white to-gray-50/50 hover:border-magenta-200 hover:shadow-lg hover:shadow-magenta-500/5 transition-all duration-500">
                <div className="text-5xl font-montserrat font-bold text-magenta-500/10 mb-4">
                  03
                </div>
                <div className="w-12 h-12 rounded-xl bg-magenta-50 flex items-center justify-center mb-6 group-hover:bg-magenta-100 transition-colors duration-500">
                  <ShieldCheck className="w-6 h-6 text-magenta-500" />
                </div>
                <h3 className="font-montserrat text-xl font-bold text-charcoal-500 mb-3">
                  Piattaforma Transaction-Free
                </h3>
                <p className="font-inter text-charcoal-300 leading-relaxed">
                  Non siamo un gatekeeper. Il nostro valore &egrave; la
                  scoperta dell&apos;evento, non la vendita del titolo
                  d&apos;ingresso. Per questo il nostro ecosistema si integra
                  sinergicamente con i tuoi strumenti senza trattenere alcuna
                  percentuale sulle tue vendite.
                </p>
              </div>

              {/* 04 — Experience Soul */}
              <div className="group relative p-8 rounded-2xl border border-gray-100 bg-gradient-to-br from-white to-gray-50/50 hover:border-magenta-200 hover:shadow-lg hover:shadow-magenta-500/5 transition-all duration-500">
                <div className="text-5xl font-montserrat font-bold text-magenta-500/10 mb-4">
                  04
                </div>
                <div className="w-12 h-12 rounded-xl bg-magenta-50 flex items-center justify-center mb-6 group-hover:bg-magenta-100 transition-colors duration-500">
                  <Sparkles className="w-6 h-6 text-magenta-500" />
                </div>
                <h3 className="font-montserrat text-xl font-bold text-charcoal-500 mb-3">
                  Experience Soul
                </h3>
                <p className="font-inter text-charcoal-300 leading-relaxed">
                  Diamo modo agli utenti di comprendere a fondo l&apos;essenza
                  del tuo concept e l&apos;unicit&agrave; dell&apos;esperienza
                  che proponi. Trasformiamo la tua visione in una percezione
                  immediata per il pubblico, assicurandoci che l&apos;anima
                  della tua realt&agrave; venga trasmessa in ogni dettaglio,
                  ben oltre le semplici informazioni tecniche.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================
            SECTION 4 — THE SCENE (The Board)
        ================================================================ */}
        <section className="py-24 px-6 bg-gray-50/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal-500 mb-6 leading-tight">
              Chi sta gi&agrave; accendendo{" "}
              <span className="text-magenta-500">la citt&agrave;.</span>
            </h2>
            <p className="font-inter text-lg text-charcoal-300 max-w-3xl leading-relaxed mb-12">
              [Bacheca loghi/card delle realt&agrave; gi&agrave; attive nel
              Circuito]
            </p>

            {/* TODO: populate with logo/card grid for active venues & organizers in the Circuito */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-xl border border-dashed border-charcoal-500/15 bg-white/60 flex items-center justify-center"
                >
                  <span className="font-inter text-xs text-charcoal-500/30">
                    Logo
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================
            SECTION 5 — THE CALL (The Circuit)
        ================================================================ */}
        <section className="py-24 px-6 bg-charcoal-500 text-white relative overflow-hidden">
          {/* Magenta accent glow */}
          <div className="absolute -top-32 right-0 w-80 h-80 bg-magenta-500/15 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 -left-32 w-64 h-64 bg-magenta-500/10 rounded-full blur-[80px]" />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Entra nel Circuito di{" "}
              <span className="text-magenta-400" translate="no">
                Crowdia.
              </span>
            </h2>
            <p className="font-inter text-lg text-white/70 mb-12 leading-relaxed">
              Unisciti agli organizzatori, agli spazi e ai locali che hanno
              gi&agrave; deciso di accendere Palermo. Non restare fuori dalla
              mappa: porta la tua realt&agrave; al centro della scena urbana
              digitale.
            </p>

            <div className="flex justify-center">
              <Link
                href="/circuits/join"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-magenta-500 text-white font-inter font-semibold rounded-xl hover:bg-magenta-400 transition-all duration-300 shadow-lg shadow-magenta-500/30 hover:shadow-xl hover:shadow-magenta-500/40 hover:-translate-y-0.5"
              >
                Entra nel Circuito
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* ================================================================
            FOOTER
        ================================================================ */}
        <footer className="py-8 px-6 bg-charcoal-600 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="relative w-6 h-6">
              <Image
                src="/crowdia-logo-icon-transparent.png"
                alt="CROWDIA"
                fill
                className="object-contain"
                sizes="24px"
              />
            </div>
            <span
              className="font-montserrat text-sm font-bold text-white/60"
              translate="no"
            >
              CROWDIA
            </span>
          </div>
          <p className="font-inter text-xs text-white/30">
            &copy; {new Date().getFullYear()} Crowdia. Tutti i diritti
            riservati.
          </p>
        </footer>
      </main>
    </div>
  );
}
