"use client";

import { WaitlistForm } from "@/components/waitlist-form";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Search,
  Star,
  Heart,
  Sparkles,
  BadgeCheck,
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
          HERO — Minimal dark gradient, no video
      ================================================================ */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20 bg-zinc-950">
        {/* Subtle dotted texture */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: "32px 32px",
            color: "white",
          }}
        />

        {/* Magenta accent glows */}
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-magenta-500/10 rounded-full blur-[140px]" />
        <div className="absolute -bottom-48 -left-48 w-[500px] h-[500px] bg-magenta-500/8 rounded-full blur-[150px]" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-white">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-magenta-500/10 border border-magenta-500/20 text-magenta-400 text-sm font-inter font-medium mb-8">
            <Sparkles className="w-4 h-4" />
            Palermo&apos;s social discovery app
          </div>

          <h1 className="font-montserrat text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-8">
            La tua vita sociale
            <br />
            <span className="relative inline-block">
              <span className="relative z-10 text-magenta-500">
                merita un upgrade.
              </span>
              <span className="absolute bottom-1 left-0 right-0 h-3 bg-magenta-500/10 -z-0 rounded" />
            </span>
          </h1>

          <p className="font-inter text-lg md:text-xl text-white/75 max-w-2xl leading-relaxed mb-12">
            Basta screenshot persi nelle chat. Scopri eventi, luoghi e persone
            con una mappa intelligente che impara i tuoi gusti.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#waitlist"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-magenta-500 text-white font-inter font-semibold rounded-xl hover:bg-magenta-600 transition-all duration-300 shadow-lg shadow-magenta-500/25 hover:-translate-y-0.5"
            >
              Entra in Lista d&apos;Attesa
              <ChevronRight className="w-4 h-4" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 text-white font-inter font-medium rounded-xl hover:bg-white/10 transition-all duration-300 border border-white/10"
            >
              Scopri le funzionalit&agrave;
            </a>
          </div>
        </div>
      </section>

      {/* ================================================================
          PROBLEM — The old way doesn't work
      ================================================================ */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Trovare eventi a Palermo{" "}
            <span className="text-magenta-500">non dovrebbe essere un lavoro.</span>
          </h2>
          <p className="font-inter text-lg text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
            Locandine sparse su Instagram, link scaduti, chat di gruppo infinite:
            la vita notturna di Palermo esiste, ma nessuno la centralizzava.
            Fino ad ora.
          </p>
        </div>
      </section>

      {/* ================================================================
          FEATURES — New capabilities since early version
      ================================================================ */}
      <section id="features" className="py-24 px-6 bg-slate-100/60 dark:bg-zinc-900/40">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            Tutto quello che ti serve,
            <br />
            <span className="text-magenta-500">in un unico posto.</span>
          </h2>
          <p className="font-inter text-lg text-slate-600 dark:text-slate-400 mb-16 max-w-2xl">
            Abbiamo costruito la piattaforma di social discovery che Palermo
            meritava da sempre.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Map Discovery */}
            <div className="group relative p-8 rounded-2xl bg-white dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800 hover:border-magenta-300 dark:hover:border-magenta-500/40 transition-all duration-500 hover:shadow-lg hover:shadow-magenta-500/5">
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-magenta-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-12 h-12 rounded-xl bg-magenta-50 dark:bg-magenta-500/10 flex items-center justify-center mb-6">
                <MapPin className="w-6 h-6 text-magenta-500" />
              </div>
              <h3 className="font-montserrat text-xl font-bold mb-3">
                Social Discovery Map
              </h3>
              <p className="font-inter text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Una mappa in tempo reale di tutti gli eventi attivi. Vedi cosa
                sta succedendo intorno a te adesso, filtra per atmosfera o
                categoria, e scopri posti nuovi.
              </p>
            </div>

            {/* Smart Search */}
            <div className="group relative p-8 rounded-2xl bg-white dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800 hover:border-magenta-300 dark:hover:border-magenta-500/40 transition-all duration-500 hover:shadow-lg hover:shadow-magenta-500/5">
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-magenta-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-12 h-12 rounded-xl bg-magenta-50 dark:bg-magenta-500/10 flex items-center justify-center mb-6">
                <Search className="w-6 h-6 text-magenta-500" />
              </div>
              <h3 className="font-montserrat text-xl font-bold mb-3">
                Ricerca Intelligente
              </h3>
              <p className="font-inter text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Cerca per atmosfera, non solo per parola chiave. La nostra AI
                capisce &quot;serata tranquilla con amici&quot; e ti mostra
                esattamente quello che stai cercando.
              </p>
            </div>

            {/* Points & Rewards */}
            <div className="group relative p-8 rounded-2xl bg-white dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800 hover:border-magenta-300 dark:hover:border-magenta-500/40 transition-all duration-500 hover:shadow-lg hover:shadow-magenta-500/5">
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-magenta-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-12 h-12 rounded-xl bg-magenta-50 dark:bg-magenta-500/10 flex items-center justify-center mb-6">
                <Star className="w-6 h-6 text-magenta-500" />
              </div>
              <h3 className="font-montserrat text-xl font-bold mb-3">
                Punti e Ricompense
              </h3>
              <p className="font-inter text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Ogni check-in, ogni invito e ogni partecipazione ti guadagna
                punti. Sali di livello, sblocca badge esclusivi e diventa un
                punto di riferimento della scena.
              </p>
            </div>

            {/* Voices Creators */}
            <div className="group relative p-8 rounded-2xl bg-white dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800 hover:border-magenta-300 dark:hover:border-magenta-500/40 transition-all duration-500 hover:shadow-lg hover:shadow-magenta-500/5">
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-magenta-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-12 h-12 rounded-xl bg-magenta-50 dark:bg-magenta-500/10 flex items-center justify-center mb-6">
                <BadgeCheck className="w-6 h-6 text-magenta-500" />
              </div>
              <h3 className="font-montserrat text-xl font-bold mb-3">
                Voices Creators
              </h3>
              <p className="font-inter text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                I creator verificati di Palermo condividono le loro scoperte
                direttamente nell&apos;app. Segui i Voices e lascia che siano
                loro a guidarti.
              </p>
            </div>

            {/* Saved Events */}
            <div className="group relative p-8 rounded-2xl bg-white dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800 hover:border-magenta-300 dark:hover:border-magenta-500/40 transition-all duration-500 hover:shadow-lg hover:shadow-magenta-500/5">
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-magenta-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-12 h-12 rounded-xl bg-magenta-50 dark:bg-magenta-500/10 flex items-center justify-center mb-6">
                <Heart className="w-6 h-6 text-magenta-500" />
              </div>
              <h3 className="font-montserrat text-xl font-bold mb-3">
                La Tua Lista Personale
              </h3>
              <p className="font-inter text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Salva gli eventi che ti interessano e accedili in un click.
                Il tuo feed si adatta ai tuoi gusti nel tempo.
              </p>
            </div>

            {/* Organizer Profiles */}
            <div className="group relative p-8 rounded-2xl bg-white dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800 hover:border-magenta-300 dark:hover:border-magenta-500/40 transition-all duration-500 hover:shadow-lg hover:shadow-magenta-500/5">
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-magenta-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-12 h-12 rounded-xl bg-magenta-50 dark:bg-magenta-500/10 flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6 text-magenta-500" />
              </div>
              <h3 className="font-montserrat text-xl font-bold mb-3">
                Profili Organizzatori
              </h3>
              <p className="font-inter text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Ogni locale e organizzatore ha il suo profilo pubblico.
                Scopri la storia di un posto, i suoi eventi passati e
                futuri, tutto in un&apos;unica pagina.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          CTA — Waitlist Section
      ================================================================ */}
      <section id="waitlist" className="py-24 px-6 bg-zinc-950 text-white relative overflow-hidden">
        <div className="absolute -top-32 right-0 w-80 h-80 bg-magenta-500/15 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 -left-32 w-64 h-64 bg-magenta-500/10 rounded-full blur-[80px]" />

        <div className="relative z-10 max-w-xl mx-auto text-center">
          <h2 className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            Pronto a vivere{" "}
            <span className="text-magenta-400">Palermo?</span>
          </h2>
          <p className="font-inter text-lg text-white/70 mb-10 leading-relaxed">
            Iscriviti alla beta. Posti limitati, accesso prioritario per i
            primi iscritti.
          </p>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <WaitlistForm
              buttonText="Entra in Lista d'Attesa"
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
