import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Sparkles, Zap, Mic2, Building2 } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      {/* ================================================================
          NAVIGATION
      ================================================================ */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-center">
          <div className="flex items-center gap-2">
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
              className="font-montserrat text-lg font-bold"
              translate="no"
            >
              CROWDIA
            </span>
          </div>
        </div>
      </nav>

      {/* ================================================================
          HERO — L'ecosistema della città viva.
      ================================================================ */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden pt-20">
        <Image
          src="/circuits-hero-bg.jpg"
          alt=""
          fill
          className="object-cover"
          priority
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/78" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-magenta-500/10 rounded-full blur-[120px]" />
        <div className="absolute -bottom-48 -left-48 w-[500px] h-[500px] bg-magenta-500/6 rounded-full blur-[150px]" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-magenta-500/10 border border-magenta-500/20 text-magenta-400 text-sm font-inter font-medium mb-8">
            <Sparkles className="w-4 h-4" />
            Palermo, viva e connessa.
          </div>

          <h1 className="font-montserrat text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">
            L&apos;ecosistema della{" "}
            <span className="text-magenta-500">città viva.</span>
          </h1>

          <p className="font-inter text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Crowdia connette chi vive la città, chi la anima e chi
            l&apos;accoglie. Scegli il tuo accesso.
          </p>
        </div>
      </section>

      {/* ================================================================
          HUB — Scegli il tuo punto di accesso
      ================================================================ */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-montserrat text-2xl md:text-3xl font-bold text-center mb-3">
            Scegli il tuo punto di accesso
          </h2>
          <p className="font-inter text-white/50 text-center mb-16 text-sm">
            Ogni parte dell&apos;ecosistema ha la sua porta.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* CROWDIA APP — for users */}
            <Link
              href="/social"
              className="group relative p-8 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-magenta-500/40 hover:bg-white/[0.06] transition-all duration-300"
            >
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-magenta-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-magenta-500/10 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-magenta-400" />
                </div>
                <span className="text-xs font-inter font-medium text-white/30 uppercase tracking-widest">
                  Per gli utenti
                </span>
              </div>
              <h3 className="font-montserrat text-2xl font-bold mb-3">
                Crowdia App
              </h3>
              <p className="font-inter text-sm text-white/60 leading-relaxed mb-6">
                Scopri eventi, nightlife e cultura a Palermo guidato
                dall&apos;AI. La città al tuo ritmo.
              </p>
              <div className="flex items-center gap-2 text-magenta-400 text-sm font-inter font-medium">
                Scopri la città
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* CIRCUITS — for organizers */}
            <Link
              href="/circuits"
              className="group relative p-8 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-magenta-500/40 hover:bg-white/[0.06] transition-all duration-300"
            >
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-magenta-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-magenta-500/10 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-magenta-400" />
                </div>
                <span className="text-xs font-inter font-medium text-white/30 uppercase tracking-widest">
                  Per gli organizzatori
                </span>
              </div>
              <h3 className="font-montserrat text-2xl font-bold mb-3">
                Circuits
              </h3>
              <p className="font-inter text-sm text-white/60 leading-relaxed mb-6">
                Porta il tuo locale o evento sulla mappa. Distribuisci la tua
                agenda a migliaia di persone.
              </p>
              <div className="flex items-center gap-2 text-magenta-400 text-sm font-inter font-medium">
                Entra nel circuito
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* VOICES — for creators */}
            <Link
              href="/voices"
              className="group relative p-8 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-magenta-500/40 hover:bg-white/[0.06] transition-all duration-300"
            >
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-magenta-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-magenta-500/10 flex items-center justify-center">
                  <Mic2 className="w-6 h-6 text-magenta-400" />
                </div>
                <span className="text-xs font-inter font-medium text-white/30 uppercase tracking-widest">
                  Per i creators
                </span>
              </div>
              <h3 className="font-montserrat text-2xl font-bold mb-3">
                Voices
              </h3>
              <p className="font-inter text-sm text-white/60 leading-relaxed mb-6">
                Diventa il punto di riferimento della scena locale. La tua
                influenza ha un nuovo centro.
              </p>
              <div className="flex items-center gap-2 text-magenta-400 text-sm font-inter font-medium">
                Amplifica la tua voce
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* NEXUS — for hospitality */}
            <Link
              href="/nexus"
              className="group relative p-8 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-magenta-500/40 hover:bg-white/[0.06] transition-all duration-300"
            >
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-magenta-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-magenta-500/10 flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-magenta-400" />
                </div>
                <span className="text-xs font-inter font-medium text-white/30 uppercase tracking-widest">
                  Per l&apos;hospitality
                </span>
              </div>
              <h3 className="font-montserrat text-2xl font-bold mb-3">
                Nexus
              </h3>
              <p className="font-inter text-sm text-white/60 leading-relaxed mb-6">
                AI al servizio dell&apos;accoglienza. Per hotel, taxi e tour
                operator che vogliono connettere i loro ospiti alla città.
              </p>
              <div className="flex items-center gap-2 text-magenta-400 text-sm font-inter font-medium">
                Connetti i tuoi ospiti
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ================================================================
          FOOTER
      ================================================================ */}
      <footer className="py-8 px-6 border-t border-white/5 text-center">
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
            className="font-montserrat text-sm font-bold text-white/50"
            translate="no"
          >
            CROWDIA
          </span>
        </div>
        <p className="font-inter text-xs text-white/25">
          &copy; {new Date().getFullYear()} Crowdia. Tutti i diritti riservati.
        </p>
      </footer>
    </main>
  );
}
