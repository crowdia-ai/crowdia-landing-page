"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Instagram,
  Linkedin,
  Menu,
  X,
} from "lucide-react";

function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (ref.current) {
        ref.current.style.left = `${e.clientX}px`;
        ref.current.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return (
    <div
      ref={ref}
      className="pointer-events-none fixed z-[9999] -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full"
      style={{
        background:
          "radial-gradient(circle, rgba(255,0,255,0.26) 0%, transparent 70%)",
        transition: "left 0.08s ease, top 0.08s ease",
      }}
    />
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <main className="min-h-screen bg-zinc-950 text-white overflow-x-hidden">
      <CursorGlow />

      {/* ================================================================
          MODULE A — NAVIGATION
      ================================================================ */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollTo("home")}
            className="flex items-center gap-2 group"
          >
            <div className="relative w-7 h-7">
              <Image
                src="/crowdia-logo-icon-transparent.png"
                alt="CROWDIA"
                fill
                className="object-contain"
                sizes="28px"
                priority
              />
            </div>
            <span
              className="font-montserrat text-base font-bold group-hover:text-magenta-500 transition-colors"
              translate="no"
            >
              CROWDIA
            </span>
          </button>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            <button
              onClick={() => scrollTo("home")}
              className="text-xs font-inter font-semibold tracking-widest uppercase text-white/50 hover:text-white transition-colors duration-200"
            >
              Home
            </button>
            <Link
              href="/social"
              className="text-xs font-inter font-semibold tracking-widest uppercase text-white/50 hover:text-white transition-colors duration-200"
            >
              Esplora
            </Link>
            <Link
              href="/circuits"
              className="text-xs font-inter font-semibold tracking-widest uppercase text-white/50 hover:text-white transition-colors duration-200"
            >
              Circuito
            </Link>
            <button
              onClick={() => scrollTo("vision")}
              className="text-xs font-inter font-semibold tracking-widest uppercase text-white/50 hover:text-white transition-colors duration-200"
            >
              Visione
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="text-xs font-inter font-semibold tracking-widest uppercase text-magenta-500/80 hover:text-magenta-400 transition-colors duration-200"
            >
              Contatti
            </button>
          </div>

          {/* Mobile burger */}
          <button
            className="lg:hidden text-white/60 hover:text-white transition-colors"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden bg-zinc-950/95 border-t border-white/5 px-6 py-6 flex flex-col gap-5">
            <Link href="/social" className="text-xs font-inter font-semibold tracking-widest uppercase text-white/50">Esplora</Link>
            <Link href="/circuits" className="text-xs font-inter font-semibold tracking-widest uppercase text-white/50">Circuito</Link>
            <button onClick={() => scrollTo("vision")} className="text-left text-xs font-inter font-semibold tracking-widest uppercase text-white/50">Visione</button>
            <button onClick={() => scrollTo("contact")} className="text-left text-xs font-inter font-semibold tracking-widest uppercase text-magenta-500/80">Contatti</button>
          </div>
        )}
      </nav>

      {/* ================================================================
          MODULE B — HERO
      ================================================================ */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        >
          <source src="/home-hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/25 via-zinc-950/15 to-zinc-950/75" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "36px 36px",
          }}
        />
        <div className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-magenta-500/8 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-magenta-500/5 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-32 text-center">
          <h1 className="font-montserrat text-[clamp(4rem,12vw,9rem)] font-black leading-none tracking-tighter mb-4">
            CROWDIA
          </h1>

          <h2 className="font-montserrat text-xl md:text-2xl lg:text-3xl font-bold text-white/80 mb-3">
            La Piattaforma con Intelligenza Urbana
          </h2>

          <h3 className="font-montserrat text-lg md:text-xl font-semibold text-magenta-500 tracking-widest uppercase mb-10">
            ACCENDI LA CITTÀ.
          </h3>

          <p className="font-inter text-base md:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed mb-12">
            Crowdia è il sistema operativo urbano. Un ecosistema in cui
            l&apos;energia umana e la solidità degli spazi fisici si fondono in
            un circuito digitale integrato. Uniamo persone, creatività e
            governance per evolvere Palermo in una Città Social-Smart.
          </p>

          <a
            href="https://app.crowdia.ai"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-magenta-500 hover:bg-magenta-400 text-white font-inter font-bold text-sm tracking-widest uppercase transition-all duration-200 hover:shadow-[0_0_30px_rgba(255,0,255,0.3)]"
          >
            SCOPRI GLI EVENTI
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* MODULE C (la griglia «Gateway di Selezione» con Esplora, Voices, Circuito, Nexus, Istituzionale)
          TOLTA il 26/10 (Mattia: portava a pagine gia' tolte dalla barra). */}

      {/* ================================================================
          MODULE D — THE VISION (Social-Smart Manifesto)
      ================================================================ */}
      <section id="vision" className="py-24 px-6 border-t border-white/[0.06]">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-inter font-semibold tracking-[0.3em] uppercase text-magenta-500 mb-6">
                La nostra visione
              </p>
              <h2 className="font-montserrat text-3xl md:text-4xl font-bold leading-tight mb-8">
                Infrastruttura
                <br />
                <span className="text-magenta-500">Social-Smart City.</span>
              </h2>
              <p className="font-inter text-base text-white/60 leading-relaxed">
                Crowdia è l&apos;intersezione tra innovazione tecnologica e
                tessuto umano del territorio. Trasformiamo la provincia di
                Palermo in una Social-Smart City: un ecosistema in cui ogni
                interazione genera valore e ogni spazio fisico diventa un nodo
                intelligente. Non costruiamo solo software; costruiamo
                l&apos;infrastruttura della città del futuro.
              </p>
            </div>

            <div className="relative h-64 lg:h-80 flex items-center justify-center">
              <div className="absolute inset-0 rounded-2xl border border-white/[0.06] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-magenta-500/5 via-transparent to-transparent" />
                <svg
                  viewBox="0 0 400 320"
                  className="w-full h-full opacity-30"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1="200" y1="160" x2="80" y2="80" stroke="#FF00FF" strokeWidth="0.5" strokeDasharray="4 4" />
                  <line x1="200" y1="160" x2="320" y2="80" stroke="#FF00FF" strokeWidth="0.5" strokeDasharray="4 4" />
                  <line x1="200" y1="160" x2="80" y2="240" stroke="#FF00FF" strokeWidth="0.5" strokeDasharray="4 4" />
                  <line x1="200" y1="160" x2="320" y2="240" stroke="#FF00FF" strokeWidth="0.5" strokeDasharray="4 4" />
                  <line x1="200" y1="160" x2="200" y2="40" stroke="#FF00FF" strokeWidth="0.5" strokeDasharray="4 4" />
                  <line x1="80" y1="80" x2="320" y2="80" stroke="white" strokeWidth="0.3" strokeDasharray="2 6" />
                  <line x1="80" y1="240" x2="320" y2="240" stroke="white" strokeWidth="0.3" strokeDasharray="2 6" />
                  <circle cx="200" cy="160" r="18" fill="#FF00FF" fillOpacity="0.15" stroke="#FF00FF" strokeWidth="1" />
                  <circle cx="200" cy="160" r="6" fill="#FF00FF" fillOpacity="0.8" />
                  <circle cx="80" cy="80" r="8" fill="white" fillOpacity="0.08" stroke="white" strokeWidth="0.5" />
                  <circle cx="80" cy="80" r="3" fill="white" fillOpacity="0.4" />
                  <circle cx="320" cy="80" r="8" fill="white" fillOpacity="0.08" stroke="white" strokeWidth="0.5" />
                  <circle cx="320" cy="80" r="3" fill="white" fillOpacity="0.4" />
                  <circle cx="80" cy="240" r="8" fill="white" fillOpacity="0.08" stroke="white" strokeWidth="0.5" />
                  <circle cx="80" cy="240" r="3" fill="white" fillOpacity="0.4" />
                  <circle cx="320" cy="240" r="8" fill="white" fillOpacity="0.08" stroke="white" strokeWidth="0.5" />
                  <circle cx="320" cy="240" r="3" fill="white" fillOpacity="0.4" />
                  <circle cx="200" cy="40" r="6" fill="white" fillOpacity="0.08" stroke="white" strokeWidth="0.5" />
                  <circle cx="200" cy="40" r="2.5" fill="white" fillOpacity="0.4" />
                  <text x="50" y="76" fill="white" fillOpacity="0.3" fontSize="8" fontFamily="monospace">EXPLORE</text>
                  <text x="325" y="76" fill="white" fillOpacity="0.3" fontSize="8" fontFamily="monospace">VOICES</text>
                  <text x="46" y="256" fill="white" fillOpacity="0.3" fontSize="8" fontFamily="monospace">CIRCUITS</text>
                  <text x="322" y="256" fill="white" fillOpacity="0.3" fontSize="8" fontFamily="monospace">NEXUS</text>
                  <text x="175" y="32" fill="white" fillOpacity="0.3" fontSize="8" fontFamily="monospace">INST.</text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          MODULE E — THE PULSE (Social Proof & Network Status)
      ================================================================ */}
      <section className="py-20 px-6 bg-white/[0.015] border-y border-white/[0.06]">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-inter font-semibold tracking-[0.3em] uppercase text-magenta-500 text-center mb-12">
            The Pulse — Stato della Rete
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: "🌍", label: "Territorio Palermitano" },
              { icon: "🎭", label: "Scene Culturali" },
              { icon: "🤝", label: "Network Attivo" },
              { icon: "🚀", label: "Movimento Vivo" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-montserrat text-5xl md:text-6xl font-black text-white mb-3">
                  {stat.icon}
                </div>
                <div className="font-inter text-xs text-white/40 uppercase tracking-widest leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          MODULE F — CONTACT & FINAL CONVERSION HUB
      ================================================================ */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-inter font-semibold tracking-[0.3em] uppercase text-magenta-500 mb-6">
            Entra nel Circuito
          </p>
          <h2 className="font-montserrat text-4xl md:text-5xl font-bold mb-6">
            Il tuo nodo nella rete{" "}
            <span className="text-magenta-500">è pronto.</span>
          </h2>
          <p className="font-inter text-base text-white/55 max-w-2xl mx-auto leading-relaxed mb-10">
            Che tu sia un&apos;istituzione, un&apos;organizzazione o un creator,
            il tuo posto nella rete è pronto. Contattaci per attivare il tuo
            nodo e accendere la città.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="mailto:info@crowdia.ai"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 hover:border-white/30 text-white/70 hover:text-white font-inter text-sm font-medium transition-all duration-200"
            >
              info@crowdia.ai
            </a>
            <a
              href="https://app.crowdia.ai"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-magenta-500 hover:bg-magenta-400 text-white font-inter font-bold text-sm tracking-widest uppercase transition-all duration-200 hover:shadow-[0_0_20px_rgba(255,0,255,0.25)]"
            >
              SCOPRI GLI EVENTI
            </a>
          </div>

          <div className="flex items-center justify-center gap-6">
            <a
              href="https://instagram.com/crowdia.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-white/70 transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/company/crowdia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-white/70 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* ================================================================
          MODULE G — INSTITUTIONAL FOOTER
      ================================================================ */}
      <footer className="py-10 px-6 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
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
          <p className="font-inter text-xs text-white/25 text-center">
            CROWDIA: Urban Intelligence Layer per lo sviluppo di Palermo e della
            sua Area Metropolitana.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy"
              className="font-inter text-xs text-white/25 hover:text-white/50 transition-colors"
            >
              Privacy Policy
            </Link>
            <p className="font-inter text-xs text-white/20">
              &copy; {new Date().getFullYear()} Crowdia. Tutti i diritti riservati.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
