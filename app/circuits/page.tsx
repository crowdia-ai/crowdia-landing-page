import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SubpageNav } from "@/components/ui/subpage-nav";

export default function Home() {
  return (
    <div className="light" data-theme="light">
      <main className="min-h-screen bg-white text-charcoal-500 selection:bg-magenta-100 selection:text-magenta-700 overflow-x-hidden">
        <SubpageNav theme="light" ctaLabel="Entra nel Circuito" ctaHref="/circuits/join" />

        {/* ================================================================
            HERO SECTION — Accendiamo la città.
        ================================================================ */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20">
          {/* Hero photo background */}
          <Image
            src="/circuits-hero-new.jpg"
            alt=""
            fill
            className="object-cover"
            priority
            aria-hidden="true"
          />
          {/* Dark overlay for text legibility */}
          <div className="absolute inset-0 bg-black/65 md:bg-black/70 lg:bg-black/75" />

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

          <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-white">
            <h1 className="font-montserrat text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-8">
              Accendiamo{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-magenta-500">la città.</span>
                <span className="absolute bottom-1 left-0 right-0 h-3 bg-magenta-500/10 -z-0 rounded" />
              </span>
            </h1>

            <p className="font-inter text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed mb-12">
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
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-inter font-medium rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20"
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
            SECTION 2 — PLATFORM UTILITY (3-row alternating stack)
        ================================================================ */}
        <section className="py-24 px-6 bg-gray-50/50">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal-500 mb-16 leading-tight">
              Pi&ugrave; di una vetrina.{" "}
              <span className="text-magenta-500">Un&apos;infrastruttura.</span>
            </h2>

            <div className="flex flex-col gap-16">
              {/* Row 1 — Text Left / Image Right */}
              <div className="flex flex-col md:flex-row gap-10 md:gap-14 items-center">
                <div className="flex-1">
                  <p className="font-inter text-xs font-bold uppercase tracking-widest text-magenta-500 mb-3">
                    01
                  </p>
                  <h3 className="font-montserrat text-2xl md:text-3xl font-bold text-charcoal-500 mb-3 leading-tight">
                    Il canale per il turismo incoming
                  </h3>
                  <p className="font-inter text-base text-magenta-500/80 mb-4 leading-relaxed">
                    Raggiungi i turisti prima che pianifichino la serata.
                  </p>
                  <p className="font-inter text-base text-charcoal-300 leading-relaxed">
                    Tramite l&apos;ecosistema Nexus, colleghiamo la tua
                    programmazione con i concierge digitali di hotel, BnB e
                    vettori di mobilit&agrave; partner sul territorio. Ottieni
                    cos&igrave; pubblico extra internazionale, ad alta
                    capacit&agrave; di spesa, a tariffa intera.
                  </p>
                </div>
                <div className="flex-1 relative aspect-video rounded-2xl overflow-hidden border border-[#2E2E2E]">
                  <Image
                    src="/circuits-row1.jpeg"
                    alt="Turismo incoming"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Row 2 — Image Left / Text Right */}
              <div className="flex flex-col md:flex-row-reverse gap-10 md:gap-14 items-center">
                <div className="flex-1">
                  <p className="font-inter text-xs font-bold uppercase tracking-widest text-magenta-500 mb-3">
                    02
                  </p>
                  <h3 className="font-montserrat text-2xl md:text-3xl font-bold text-charcoal-500 mb-3 leading-tight">
                    I migliori creator ai tuoi eventi
                  </h3>
                  <p className="font-inter text-base text-magenta-500/80 mb-4 leading-relaxed">
                    Porta i creator della citt&agrave; sul campo per attivare
                    una visibilit&agrave; organica e autentica.
                  </p>
                  <p className="font-inter text-base text-charcoal-300 leading-relaxed">
                    Attraverso il programma Voices, colleghiamo i tuoi eventi a
                    una squadra selezionata di creator locali. Raccontando
                    l&apos;esperienza dal vivo, le nostre Voices iniettano
                    autenticit&agrave; nel racconto culturale, spingendo la
                    community a partecipare.
                  </p>
                </div>
                <div className="flex-1 relative aspect-video rounded-2xl overflow-hidden border border-[#2E2E2E]">
                  <Image
                    src="/circuits-row2.jpeg"
                    alt="Creator network"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Row 3 — Text Left / Image Right */}
              <div className="flex flex-col md:flex-row gap-10 md:gap-14 items-center">
                <div className="flex-1">
                  <p className="font-inter text-xs font-bold uppercase tracking-widest text-magenta-500 mb-3">
                    03
                  </p>
                  <h3 className="font-montserrat text-2xl md:text-3xl font-bold text-charcoal-500 mb-3 leading-tight">
                    Tutta la citt&agrave; in un unico ecosistema
                  </h3>
                  <p className="font-inter text-base text-magenta-500/80 mb-4 leading-relaxed">
                    Basta con gli eventi dispersi. Unifica la tua offerta dove
                    le persone la stanno cercando.
                  </p>
                  <p className="font-inter text-base text-charcoal-300 leading-relaxed">
                    Centralizziamo l&apos;intera offerta dentro
                    un&apos;unica infrastruttura intelligente. Unendo
                    l&apos;intelligenza artificiale alla curatela umana,
                    azzeriamo il caos informativo causato dai silos informatici e
                    mettiamo la tua programmazione a disposizione immediata
                    dell&apos;utente.
                  </p>
                </div>
                <div className="flex-1 relative aspect-video rounded-2xl overflow-hidden border border-[#2E2E2E]">
                  <Image
                    src="/circuits-row3.jpeg"
                    alt="Ecosistema urbano"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================
            SECTION 3 — SOCIAL PROOF (circuit stats + overlapping logo stack)
        ================================================================ */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            {/* Circuit stats */}
            <div className="grid grid-cols-3 gap-6 mb-14 text-center">
              <div>
                <div className="font-montserrat text-4xl md:text-5xl font-bold text-charcoal-500 mb-1">
                  23
                </div>
                <div className="font-inter text-xs text-charcoal-300 uppercase tracking-widest">
                  Spazi Convenzionati
                </div>
              </div>
              <div>
                <div className="font-montserrat text-4xl md:text-5xl font-bold text-charcoal-500 mb-1">
                  16
                </div>
                <div className="font-inter text-xs text-charcoal-300 uppercase tracking-widest">
                  Organizzazioni Attive
                </div>
              </div>
              <div>
                <div className="font-montserrat text-4xl md:text-5xl font-bold text-charcoal-500 mb-1">
                  2.417
                </div>
                <div className="font-inter text-xs text-charcoal-300 uppercase tracking-widest">
                  Utenti in lista d&apos;attesa
                </div>
              </div>
            </div>

            {/* Avatar-group logo stack + label */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5">
              {/* Overlapping circles */}
              <div className="flex items-center flex-shrink-0">
                {[1, 2, 3, 4, 5, 6].map((n, i) => (
                  <div
                    key={n}
                    className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-md grayscale hover:grayscale-0 transition-all duration-300 shrink-0"
                    style={{ marginLeft: i === 0 ? 0 : -14, zIndex: 6 - i }}
                  >
                    <Image
                      src={`/circuits-logo-${n}.jpg`}
                      alt={`Partner ${n}`}
                      fill
                      className="object-cover"
                      sizes="56px"
                    />
                  </div>
                ))}
                {/* +17 magenta circle */}
                <div
                  className="relative w-14 h-14 rounded-full bg-magenta-500 border-2 border-white shadow-md flex items-center justify-center shrink-0"
                  style={{ marginLeft: -14, zIndex: 0 }}
                >
                  <span className="font-montserrat text-xs font-bold text-white">
                    +17
                  </span>
                </div>
              </div>

              {/* Label */}
              <p className="font-inter text-base font-semibold text-charcoal-500 leading-snug">
                16+ Spazi ed Organizzazioni gi&agrave; nel Circuito.
              </p>
            </div>
          </div>
        </section>

        {/* ================================================================
            SECTION 4 — THE CALL (The Circuit)
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
