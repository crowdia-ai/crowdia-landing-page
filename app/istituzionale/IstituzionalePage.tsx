"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Globe,
  Compass,
  CalendarCheck,
  Mail,
  ChevronRight,
} from "lucide-react";
import { SubpageNav } from "@/components/ui/subpage-nav";

export function IstituzionalePage() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const playVideo = () => {
      videoRef.current?.play().catch(() => {});
    };
    playVideo();
    document.addEventListener("touchstart", playVideo, { once: true });
    document.addEventListener("click", playVideo, { once: true });
    return () => {
      document.removeEventListener("touchstart", playVideo);
      document.removeEventListener("click", playVideo);
    };
  }, []);

  return (
    <div className="light" data-theme="light">
      <main className="min-h-screen bg-white text-charcoal-500 selection:bg-magenta-100 selection:text-magenta-700">
        <SubpageNav theme="light" ctaLabel="Richiedi Accesso" ctaHref="#contatti" />

        {/* ================================================================
            HERO SECTION - L'Impatto
        ================================================================ */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20">
          {/* Warm gradient fallback evoking Sicilian sunlight */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-50/80 via-white to-rose-50/60" />

          {/* Video background - Sicilian urban scene with magenta aura */}
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover opacity-40"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
          >
            <source src="/vid-bckgrnd-istituzionale.mp4" type="video/mp4" />
          </video>

          {/* Light-mode legibility overlay over the video */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/60 to-amber-50/70" />

          {/* Subtle geometric pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #2E2E2E 1px, transparent 0)`,
              backgroundSize: "32px 32px",
            }}
          />

          {/* Magenta accent glow - top right */}
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-magenta-500/8 rounded-full blur-[120px]" />
          {/* Warm glow - bottom left */}
          <div className="absolute -bottom-48 -left-48 w-[500px] h-[500px] bg-amber-200/20 rounded-full blur-[150px]" />

          <div className="relative z-10 max-w-5xl mx-auto px-6 py-20">
            <h1 className="font-montserrat text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-8 text-charcoal-500">
              L&apos;Infrastruttura di{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-magenta-500">
                  Urban Intelligence
                </span>
                <span className="absolute bottom-1 left-0 right-0 h-3 bg-magenta-500/10 -z-0 rounded" />
              </span>
              <br />
              per il Territorio
            </h1>

            <p className="font-inter text-lg md:text-xl text-charcoal-300 max-w-2xl leading-relaxed mb-12">
              Abilitiamo un ecosistema cooperativo dove organizzatori e
              istituzioni pubblicano nativamente la propria programmazione.
              Lumio AI interviene come layer di armonizzazione semantica,
              azzerando la frammentazione dei dati per connettere le persone
              alla vita reale della citt&agrave;.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contatti"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-magenta-500 text-white font-inter font-semibold rounded-xl hover:bg-magenta-600 transition-all duration-300 shadow-lg shadow-magenta-500/25 hover:shadow-xl hover:shadow-magenta-500/30 hover:-translate-y-0.5"
              >
                Richiedi un Incontro Strategico
                <ChevronRight className="w-4 h-4" />
              </a>
              <a
                href="#missione"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-charcoal-500/5 text-charcoal-500 font-inter font-medium rounded-xl hover:bg-charcoal-500/10 transition-all duration-300 border border-charcoal-500/10"
              >
                Scopri di Pi&ugrave;
              </a>
            </div>
          </div>
        </section>

        {/* ================================================================
            MISSION SECTION - Socialit&agrave; e Territorio
        ================================================================ */}
        <section id="missione" className="py-24 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal-500 mb-6 leading-tight">
              Combattere l&apos;Isolamento,
              <br />
              <span className="text-magenta-500">Riscoprire le Piazze.</span>
            </h2>

            <p className="font-inter text-lg text-charcoal-300 max-w-3xl leading-relaxed mb-20">
              Lo stile di vita moderno e l&apos;eredit&agrave; del periodo
              post-covid hanno frammentato i legami fisici, trasformando le
              nostre citt&agrave; in spazi spesso silenziosi. Crowdia inverte
              questa rotta.
            </p>

            {/* Row 1: Text Left | Image Right */}
            <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
              <div className="w-full md:w-1/2">
                <p className="font-inter text-xs font-semibold text-magenta-500 tracking-widest uppercase mb-2">
                  01 / Riconnessione Sociale
                </p>
                <p className="font-inter text-xs text-charcoal-300/60 uppercase tracking-widest mb-5">
                  Urban Vitality
                </p>
                <p className="font-inter text-charcoal-300 text-lg leading-relaxed">
                  La frammentazione dei legami post-COVID richiede
                  risposte infrastrutturali. Crowdia canalizza
                  l&apos;attenzione dei giovani verso il territorio,
                  trasformando la scoperta degli eventi in aggregazione
                  spontanea per ripopolare lo spazio pubblico e le piazze
                  della citt&agrave;.
                </p>
              </div>
              <div className="w-full md:w-1/2">
                <div className="relative aspect-video rounded-2xl overflow-hidden border border-[#2E2E2E]">
                  <Image
                    src="/istituzionale-row1.jpeg"
                    alt="Riconnessione Sociale"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>

            {/* Row 2: Image Left | Text Right */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-12 mb-20">
              <div className="w-full md:w-1/2">
                <p className="font-inter text-xs font-semibold text-magenta-500 tracking-widest uppercase mb-2">
                  02 / Voce ai Piccoli Centri
                </p>
                <p className="font-inter text-xs text-charcoal-300/60 uppercase tracking-widest mb-5">
                  Territorial Equity
                </p>
                <p className="font-inter text-charcoal-300 text-lg leading-relaxed">
                  Abbattiamo l&apos;isolamento informativo delle aree
                  decentrate democratizzando la visibilit&agrave;. Grazie
                  all&apos;Urban Intelligence Engine, ogni borgo e sagra
                  locale ottiene la stessa dignit&agrave; visiva dei grandi
                  eventi, valorizzando l&apos;economia e il turismo di
                  prossimit&agrave;.
                </p>
              </div>
              <div className="w-full md:w-1/2">
                <div className="relative aspect-video rounded-2xl overflow-hidden border border-[#2E2E2E]">
                  <Image
                    src="/istituzionale-row2.jpeg"
                    alt="Voce ai Piccoli Centri"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>

            {/* Row 3: Text Left | Image Right */}
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/2">
                <p className="font-inter text-xs font-semibold text-magenta-500 tracking-widest uppercase mb-2">
                  03 / Intelligence Territoriale
                </p>
                <p className="font-inter text-xs text-charcoal-300/60 uppercase tracking-widest mb-5">
                  Data-as-a-Service
                </p>
                <p className="font-inter text-charcoal-300 text-lg leading-relaxed">
                  Convertiamo la partecipazione urbana in dati
                  aggregati e anonimi per la pubblica amministrazione.
                  L&apos;Engine fornisce uno strumento di governance
                  predittiva per monitorare l&apos;impatto delle iniziative
                  culturali e pianificare lo sviluppo locale su evidenze
                  reali.
                </p>
              </div>
              <div className="w-full md:w-1/2">
                <div className="relative aspect-video rounded-2xl overflow-hidden border border-[#2E2E2E]">
                  <Image
                    src="/istituzionale-row3.jpeg"
                    alt="Intelligence Territoriale"
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
            LUMIO AI SECTION
        ================================================================ */}
        <section className="py-24 px-6 bg-gray-50/50">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal-500 mb-6 leading-tight">
              Lumio: Molto pi&ugrave; di
              <br />
              un&apos;
              <span className="text-magenta-500">
                Intelligenza Artificiale.
              </span>
            </h2>

            <p className="font-inter text-lg text-charcoal-300 max-w-3xl leading-relaxed mb-16">
              Lumio &egrave; l&apos;anima tecnologica di Crowdia, un assistente
              che non si limita a fornire informazioni, ma educa e guida alla
              scoperta.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Guida alla Diversit&agrave; */}
              <div className="group relative p-8 rounded-2xl bg-white border border-gray-100 hover:border-magenta-200 transition-all duration-500 hover:shadow-lg hover:shadow-magenta-500/5">
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-magenta-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-magenta-50 to-rose-50 flex items-center justify-center mb-6">
                  <Compass className="w-6 h-6 text-magenta-500" />
                </div>
                <h3 className="font-montserrat text-lg font-bold text-charcoal-500 mb-3">
                  Guida alla Diversit&agrave;
                </h3>
                <p className="font-inter text-sm text-charcoal-300 leading-relaxed">
                  Lumio non asseconda solo i gusti dell&apos;utente; lo stimola
                  a provare attivit&agrave; nuove, diversificando
                  l&apos;esperienza sociale e portando pubblico anche verso
                  iniziative meno note ma di alto valore culturale.
                </p>
              </div>

              {/* Infopoint Universale 24/7 */}
              <div className="group relative p-8 rounded-2xl bg-white border border-gray-100 hover:border-magenta-200 transition-all duration-500 hover:shadow-lg hover:shadow-magenta-500/5">
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-magenta-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-magenta-50 to-rose-50 flex items-center justify-center mb-6">
                  <Globe className="w-6 h-6 text-magenta-500" />
                </div>
                <h3 className="font-montserrat text-lg font-bold text-charcoal-500 mb-3">
                  Infopoint Universale 24/7
                </h3>
                <p className="font-inter text-sm text-charcoal-300 leading-relaxed">
                  Per i turisti che visitano la nostra terra, Lumio &egrave; il
                  punto di riferimento costante. Un concierge multilingue
                  (Programma Nexus) che traduce e armonizza l&apos;offerta del
                  Comune, rendendola accessibile a chiunque, in qualunque
                  momento.
                </p>
              </div>

              {/* Valorizzazione Continua */}
              <div className="group relative p-8 rounded-2xl bg-white border border-gray-100 hover:border-magenta-200 transition-all duration-500 hover:shadow-lg hover:shadow-magenta-500/5">
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-magenta-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-magenta-50 to-rose-50 flex items-center justify-center mb-6">
                  <CalendarCheck className="w-6 h-6 text-magenta-500" />
                </div>
                <h3 className="font-montserrat text-lg font-bold text-charcoal-500 mb-3">
                  Valorizzazione Continua
                </h3>
                <p className="font-inter text-sm text-charcoal-300 leading-relaxed">
                  Lumio indicizza e propone il palinsesto urbano in modo
                  dinamico e prestigioso, elevando la percezione della
                  qualit&agrave; della vita cittadina.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================
            PARTNERSHIP SECTION - Collaborazione Strategica
        ================================================================ */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal-500 mb-6 leading-tight">
              Collaborazione Strategica
              <br />
              <span className="text-magenta-500">a Costo Zero.</span>
            </h2>

            <p className="font-inter text-lg text-charcoal-300 max-w-3xl leading-relaxed mb-16">
              Proponiamo un modello di collaborazione basato sulla
              semplicit&agrave; operativa.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Zero Oneri */}
              <div className="relative">
                <div className="text-6xl font-montserrat font-bold text-magenta-500/10 mb-4">
                  01
                </div>
                <h3 className="font-montserrat text-xl font-bold text-charcoal-500 mb-3 -mt-2">
                  Zero Oneri
                </h3>
                <p className="font-inter text-charcoal-300 leading-relaxed">
                  Crowdia non richiede investimenti finanziari n&eacute;
                  gestione tecnica da parte degli uffici comunali.
                </p>
              </div>

              {/* Nessun Vincolo Formale */}
              <div className="relative">
                <div className="text-6xl font-montserrat font-bold text-magenta-500/10 mb-4">
                  02
                </div>
                <h3 className="font-montserrat text-xl font-bold text-charcoal-500 mb-3 -mt-2">
                  Nessun Vincolo Formale
                </h3>
                <p className="font-inter text-charcoal-300 leading-relaxed">
                  Non chiediamo delibere n&eacute; protocolli. Un solo
                  referente interno per la segnalazione degli eventi: &egrave;
                  tutto quello che serve per portare il Comune su Crowdia.
                </p>
              </div>

              {/* Team Dedicato */}
              <div className="relative">
                <div className="text-6xl font-montserrat font-bold text-magenta-500/10 mb-4">
                  03
                </div>
                <h3 className="font-montserrat text-xl font-bold text-charcoal-500 mb-3 -mt-2">
                  Team Dedicato
                </h3>
                <p className="font-inter text-charcoal-300 leading-relaxed">
                  Il nostro team si occupa di garantire che ogni contenuto sia
                  presentato con standard estetici d&apos;eccellenza, curando
                  ogni dettaglio della presenza digitale del territorio.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================
            CTA / CONTACT SECTION
        ================================================================ */}
        <section
          id="contatti"
          className="py-24 px-6 bg-charcoal-500 text-white relative overflow-hidden"
        >
          {/* Magenta accent glow */}
          <div className="absolute -top-32 right-0 w-80 h-80 bg-magenta-500/15 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 -left-32 w-64 h-64 bg-magenta-500/10 rounded-full blur-[80px]" />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Iniziamo il Dialogo.
            </h2>
            <p className="font-inter text-lg text-white/70 mb-12 leading-relaxed">
              Siamo pronti a presentare il progetto Crowdia alla Vostra
              amministrazione. Contattateci per un incontro strategico senza
              impegno.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <a
                href="mailto:info@crowdia.ai?subject=Richiesta%20Incontro%20Strategico%20-%20Crowdia"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-magenta-500 text-white font-inter font-semibold rounded-xl hover:bg-magenta-400 transition-all duration-300 shadow-lg shadow-magenta-500/30 hover:shadow-xl hover:shadow-magenta-500/40 hover:-translate-y-0.5"
              >
                <Mail className="w-5 h-5" />
                Richiedi un Incontro Strategico
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 justify-center text-sm text-white/50">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span className="font-inter">info@crowdia.ai</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                <span className="font-inter">crowdia.ai</span>
              </div>
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
