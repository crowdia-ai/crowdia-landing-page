"use client";

import { WaitlistForm } from "@/components/waitlist-form";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Compass,
  Users,
  Activity,
  Trophy,
  ChevronRight,
} from "lucide-react";

export default function SocialPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 dark:from-zinc-950 dark:via-zinc-900 dark:to-black text-slate-900 dark:text-slate-100">
      {/* ================================================================
          NAVIGATION BAR
      ================================================================ */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 dark:bg-zinc-950/70 backdrop-blur-md border-b border-slate-200/60 dark:border-zinc-800/60">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-center">
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
          HERO — Accendi Palermo.
      ================================================================ */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20 bg-zinc-950">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: "32px 32px",
            color: "white",
          }}
        />
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-magenta-500/10 rounded-full blur-[140px]" />
        <div className="absolute -bottom-48 -left-48 w-[500px] h-[500px] bg-magenta-500/8 rounded-full blur-[150px]" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-white">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-magenta-500/10 border border-magenta-500/20 text-magenta-400 text-sm font-inter font-medium mb-8">
            <Sparkles className="w-4 h-4" />
            La prima Social-Smart City App
          </div>

          <h1 className="font-montserrat text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] mb-8">
            Accendi{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-magenta-500">Palermo.</span>
              <span className="absolute bottom-1 left-0 right-0 h-3 bg-magenta-500/10 -z-0 rounded" />
            </span>
          </h1>

          <p className="font-inter text-lg md:text-xl text-white/80 max-w-3xl leading-relaxed mb-12">
            La prima <strong className="text-white">Social-Smart City App</strong>.
            Scopri cosa succede intorno a te, dal centro alle coste, guidato
            dall&apos;intelligenza artificiale che impara dai tuoi gusti.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#waitlist"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-magenta-500 text-white font-inter font-semibold rounded-xl hover:bg-magenta-600 transition-all duration-300 shadow-lg shadow-magenta-500/25 hover:-translate-y-0.5"
            >
              Ottieni l&apos;accesso anticipato
              <ChevronRight className="w-4 h-4" />
            </a>
            <a
              href="#smart-discovery"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 text-white font-inter font-medium rounded-xl hover:bg-white/10 transition-all duration-300 border border-white/10"
            >
              Come funziona
            </a>
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 1 — IL PROBLEMA
      ================================================================ */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Smetti di cercare,{" "}
            <span className="text-magenta-500">inizia a vivere.</span>
          </h2>
          <p className="font-inter text-lg text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
            Basta scoprire gli eventi migliori il giorno dopo. Rompi la bolla
            dei soliti posti e dei feed social ingolfati: la città è finalmente
            a portata di mano, in tempo reale.
          </p>
        </div>
      </section>

      {/* ================================================================
          SECTION 2 — LA SOLUZIONE
      ================================================================ */}
      <section className="py-24 px-6 bg-slate-100/60 dark:bg-zinc-900/40">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Il layer digitale{" "}
            <span className="text-magenta-500">della città.</span>
          </h2>
          <p className="font-inter text-lg text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
            Crowdia mappa concept, atmosfere ed eventi eliminando i confini tra
            centro e provincia. È l&apos;infrastruttura intelligente dove
            l&apos;informazione trova te nel momento esatto in cui vuoi uscire.
          </p>
        </div>
      </section>

      {/* ================================================================
          SECTION 3 — SMART DISCOVERY
      ================================================================ */}
      <section id="smart-discovery" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-bold mb-16 leading-tight">
            Smart{" "}
            <span className="text-magenta-500">Discovery.</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Lumio AI */}
            <div className="group relative p-8 rounded-2xl bg-white dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800 hover:border-magenta-300 dark:hover:border-magenta-500/40 transition-all duration-500 hover:shadow-lg hover:shadow-magenta-500/5">
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-magenta-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-12 h-12 rounded-xl bg-magenta-50 dark:bg-magenta-500/10 flex items-center justify-center mb-6">
                <Compass className="w-6 h-6 text-magenta-500" />
              </div>
              <h3 className="font-montserrat text-xl font-bold mb-3" translate="no">
                Lumio AI
              </h3>
              <p className="font-inter text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                La tua bussola urbana che trova l&apos;atmosfera perfetta per
                il tuo &quot;vibe&quot; attuale.
              </p>
            </div>

            {/* Voices */}
            <div className="group relative p-8 rounded-2xl bg-white dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800 hover:border-magenta-300 dark:hover:border-magenta-500/40 transition-all duration-500 hover:shadow-lg hover:shadow-magenta-500/5">
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-magenta-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-12 h-12 rounded-xl bg-magenta-50 dark:bg-magenta-500/10 flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-magenta-500" />
              </div>
              <h3 className="font-montserrat text-xl font-bold mb-3" translate="no">
                Voices
              </h3>
              <p className="font-inter text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                I consigli dei KOL che creano la scena locale. Persone reali,
                non algoritmi.
              </p>
            </div>

            {/* Real-Time */}
            <div className="group relative p-8 rounded-2xl bg-white dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800 hover:border-magenta-300 dark:hover:border-magenta-500/40 transition-all duration-500 hover:shadow-lg hover:shadow-magenta-500/5">
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-magenta-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-12 h-12 rounded-xl bg-magenta-50 dark:bg-magenta-500/10 flex items-center justify-center mb-6">
                <Activity className="w-6 h-6 text-magenta-500" />
              </div>
              <h3 className="font-montserrat text-xl font-bold mb-3">
                Real-Time
              </h3>
              <p className="font-inter text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Una mappa dinamica che ti mostra cosa pulsa{" "}
                <em>ora</em> in tutto il territorio.
              </p>
            </div>

            {/* Rewards */}
            <div className="group relative p-8 rounded-2xl bg-white dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800 hover:border-magenta-300 dark:hover:border-magenta-500/40 transition-all duration-500 hover:shadow-lg hover:shadow-magenta-500/5">
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-magenta-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-12 h-12 rounded-xl bg-magenta-50 dark:bg-magenta-500/10 flex items-center justify-center mb-6">
                <Trophy className="w-6 h-6 text-magenta-500" />
              </div>
              <h3 className="font-montserrat text-xl font-bold mb-3">
                Rewards
              </h3>
              <p className="font-inter text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Premiamo la tua curiosità. Guadagna punti esplorando nuovi
                posti e sblocca accessi esclusivi nel circuito.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 4 — L'ESPERIENZA
      ================================================================ */}
      <section className="py-24 px-6 bg-slate-100/60 dark:bg-zinc-900/40">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Palermo come non{" "}
            <span className="text-magenta-500">l&apos;hai mai vista.</span>
          </h2>
          <p className="font-inter text-lg text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
            Dai vicoli storici ai litorali, riprenditi la scena. Naviga il
            territorio con una consapevolezza nuova e scopri il potenziale
            nascosto intorno a te.
          </p>
        </div>
      </section>

      {/* ================================================================
          SECTION 5 — SOCIAL PROOF
      ================================================================ */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-bold mb-12 leading-tight">
            La community sta{" "}
            <span className="text-magenta-500">sbloccando Palermo.</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-8 rounded-2xl bg-white dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800">
              <div className="font-montserrat text-4xl md:text-5xl font-bold text-magenta-500 mb-2">
                2.417
              </div>
              <div className="font-montserrat text-sm font-bold text-charcoal-500 dark:text-white/90 mb-2 uppercase tracking-wide">
                Primi Utenti
              </div>
              <p className="font-inter text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Già in lista per l&apos;accesso prioritario.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800">
              <div className="font-montserrat text-4xl md:text-5xl font-bold text-magenta-500 mb-2">
                +142
              </div>
              <div className="font-montserrat text-sm font-bold text-charcoal-500 dark:text-white/90 mb-2 uppercase tracking-wide">
                Nuovi iscritti
              </div>
              <p className="font-inter text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Persone unite alla waitlist nell&apos;ultima settimana.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800">
              <div className="font-montserrat text-4xl md:text-5xl font-bold text-magenta-500 mb-2">
                Top 5%
              </div>
              <div className="font-montserrat text-sm font-bold text-charcoal-500 dark:text-white/90 mb-2 uppercase tracking-wide">
                La tua posizione
              </div>
              <p className="font-inter text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                La tua posizione attuale se ti iscrivi ora.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 6 — IL CONTATTO (Waitlist)
      ================================================================ */}
      <section id="waitlist" className="py-24 px-6 bg-zinc-950 text-white relative overflow-hidden">
        <div className="absolute -top-32 right-0 w-80 h-80 bg-magenta-500/15 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 -left-32 w-64 h-64 bg-magenta-500/10 rounded-full blur-[80px]" />

        <div className="relative z-10 max-w-xl mx-auto text-center">
          <h2 className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            Prendi le chiavi{" "}
            <span className="text-magenta-400">della città.</span>
          </h2>
          <p className="font-inter text-lg text-white/70 mb-10 leading-relaxed">
            Assicurati il tuo accesso anticipato per l&apos;apertura del
            circuito. Non restare fuori dalla mappa.
          </p>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <WaitlistForm
              buttonText="Ottieni l'accesso"
              source="social"
              glowButton={true}
              emailOnly={true}
            />
          </div>

          <p className="font-inter text-xs text-white/30 mt-6">
            Nessuno spam. Puoi cancellarti in qualsiasi momento.
          </p>
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
          &copy; {new Date().getFullYear()} Crowdia. Tutti i diritti riservati.
        </p>
      </footer>
    </main>
  );
}
