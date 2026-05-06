import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  ArrowLeft,
  BadgeCheck,
  Sparkles,
  Lock,
} from "lucide-react";

export default function VoicesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 dark:from-zinc-950 dark:via-zinc-900 dark:to-black text-slate-900 dark:text-slate-100 selection:bg-magenta-100 selection:text-magenta-700 dark:selection:bg-magenta-500/30 dark:selection:text-magenta-100">
      {/* ================================================================
          NAVIGATION BAR
      ================================================================ */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 dark:bg-zinc-950/70 backdrop-blur-md border-b border-slate-200/60 dark:border-zinc-800/60">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-inter text-sm">Home</span>
          </Link>

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
              className="font-montserrat text-lg font-bold group-hover:text-magenta-500 transition-colors"
              translate="no"
            >
              CROWDIA
            </span>
          </Link>
        </div>
      </nav>

      {/* ================================================================
          HERO — La tua influenza ha un nuovo centro.
      ================================================================ */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20">
        {/* Neutral gradient surface (placeholder until video-loop / wallpaper lands) */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-white to-zinc-100 dark:from-zinc-900 dark:via-black dark:to-zinc-950" />

        {/* TODO: drop video loop or wallpaper image when available */}
        {/* <video className="absolute inset-0 w-full h-full object-cover opacity-40" autoPlay muted loop playsInline preload="auto" aria-hidden="true"><source src="/vid-bckgrnd-voices.mp4" type="video/mp4" /></video> */}

        {/* Subtle dotted texture */}
        <div
          className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />

        {/* Magenta accent glows */}
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-magenta-500/10 rounded-full blur-[140px]" />
        <div className="absolute -bottom-48 -left-48 w-[500px] h-[500px] bg-magenta-500/5 rounded-full blur-[150px]" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-20">
          <h1 className="font-montserrat text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-8">
            La tua influenza ha
            <br />
            <span className="relative inline-block">
              <span className="relative z-10 text-magenta-500">
                un nuovo centro.
              </span>
              <span className="absolute bottom-1 left-0 right-0 h-3 bg-magenta-500/10 -z-0 rounded" />
            </span>
          </h1>

          <p className="font-inter text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed mb-12">
            Unisciti a Voices, il programma esclusivo di Crowdia dedicato ai
            Creators che definiscono la scena di Palermo. Trasforma il tuo
            impatto in autorit&agrave; urbana.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/voices/apply"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-magenta-500 text-white font-inter font-semibold rounded-xl hover:bg-magenta-600 transition-all duration-300 shadow-lg shadow-magenta-500/25 hover:shadow-xl hover:shadow-magenta-500/30 hover:-translate-y-0.5"
            >
              Candidati per Voices
              <ChevronRight className="w-4 h-4" />
            </Link>
            <a
              href="#problem"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900/5 dark:bg-white/5 text-slate-900 dark:text-slate-100 font-inter font-medium rounded-xl hover:bg-slate-900/10 dark:hover:bg-white/10 transition-all duration-300 border border-slate-900/10 dark:border-white/10"
            >
              Scopri di Pi&ugrave;
            </a>
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 1 — THE PROBLEM
      ================================================================ */}
      <section id="problem" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Smetti di essere{" "}
            <span className="text-magenta-500">invisibile.</span>
          </h2>

          <p className="font-inter text-lg text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
            Oggi i tuoi contenuti combattono contro algoritmi ostili che
            decidono chi pu&ograve; vederti. La tua influenza merita un canale
            diretto, dove il tuo gusto e la tua conoscenza della
            citt&agrave; non vengono filtrati, ma amplificati.
          </p>
        </div>
      </section>

      {/* ================================================================
          SECTION 2 — THE PROGRAM (Voices)
      ================================================================ */}
      <section className="py-24 px-6 bg-slate-100/60 dark:bg-zinc-900/40">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Voices: Pi&ugrave; di un programma,
            <br />
            <span className="text-magenta-500">un&apos;identit&agrave;.</span>
          </h2>

          <p className="font-inter text-lg text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
            Voices &egrave; il network d&apos;&eacute;lite dei Creators di
            Crowdia. Non siamo un&apos;agenzia di influencer: siamo
            un&apos;infrastruttura tecnologica che mette i tuoi consigli e le
            tue scoperte al centro della Social Discovery Map. Come Creator,
            sarai la guida che accende i riflettori sui luoghi e gli eventi
            pi&ugrave; rilevanti di Palermo.
          </p>
        </div>
      </section>

      {/* ================================================================
          SECTION 3 — THE ADVANTAGE (3 items)
      ================================================================ */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-bold mb-16 leading-tight">
            Diventa il volto della
            <br />
            <span className="text-magenta-500">
              nuova esplorazione urbana.
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Status & Badge */}
            <div className="group relative p-8 rounded-2xl bg-white dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800 hover:border-magenta-300 dark:hover:border-magenta-500/40 transition-all duration-500 hover:shadow-lg hover:shadow-magenta-500/5">
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-magenta-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-12 h-12 rounded-xl bg-magenta-50 dark:bg-magenta-500/10 flex items-center justify-center mb-6">
                <BadgeCheck className="w-6 h-6 text-magenta-500" />
              </div>
              <h3 className="font-montserrat text-lg font-bold mb-3">
                Status &amp; Badge
              </h3>
              <p className="font-inter text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Un profilo certificato che ti distingue come autorit&agrave;
                della citt&agrave; e membro del nucleo fondatore.
              </p>
            </div>

            {/* Lumio Integration */}
            <div className="group relative p-8 rounded-2xl bg-white dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800 hover:border-magenta-300 dark:hover:border-magenta-500/40 transition-all duration-500 hover:shadow-lg hover:shadow-magenta-500/5">
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-magenta-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-12 h-12 rounded-xl bg-magenta-50 dark:bg-magenta-500/10 flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6 text-magenta-500" />
              </div>
              <h3 className="font-montserrat text-lg font-bold mb-3">
                Lumio Integration
              </h3>
              <p className="font-inter text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                I tuoi contenuti e i tuoi suggerimenti istruiranno la nostra
                AI, rendendo la tua &quot;voce&quot; la fonte primaria per
                migliaia di utenti.
              </p>
            </div>

            {/* Early Access */}
            <div className="group relative p-8 rounded-2xl bg-white dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800 hover:border-magenta-300 dark:hover:border-magenta-500/40 transition-all duration-500 hover:shadow-lg hover:shadow-magenta-500/5">
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-magenta-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-12 h-12 rounded-xl bg-magenta-50 dark:bg-magenta-500/10 flex items-center justify-center mb-6">
                <Lock className="w-6 h-6 text-magenta-500" />
              </div>
              <h3 className="font-montserrat text-lg font-bold mb-3">
                Early Access
              </h3>
              <p className="font-inter text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Accedi in anteprima alle funzioni PRO dell&apos;app e agli
                eventi pi&ugrave; esclusivi del Circuito.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 4 — THE CALL (Apply Now)
      ================================================================ */}
      <section className="py-24 px-6 bg-zinc-950 text-white relative overflow-hidden">
        <div className="absolute -top-32 right-0 w-80 h-80 bg-magenta-500/15 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 -left-32 w-64 h-64 bg-magenta-500/10 rounded-full blur-[80px]" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Prendi il comando della{" "}
            <span className="text-magenta-400">citt&agrave;.</span>
          </h2>
          <p className="font-inter text-lg text-white/70 mb-12 leading-relaxed">
            Stiamo cercando Creators, PR e connettori sociali che non si
            accontentano di postare, ma vogliono guidare. Se hai una visione
            unica su Palermo, il tuo posto &egrave; nel programma Voices.
          </p>

          <div className="flex justify-center">
            <Link
              href="/voices/apply"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-magenta-500 text-white font-inter font-semibold rounded-xl hover:bg-magenta-400 transition-all duration-300 shadow-lg shadow-magenta-500/30 hover:shadow-xl hover:shadow-magenta-500/40 hover:-translate-y-0.5"
            >
              Invia la tua candidatura
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ================================================================
          FOOTER
      ================================================================ */}
      <footer className="py-8 px-6 bg-zinc-900 text-center">
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
  );
}
