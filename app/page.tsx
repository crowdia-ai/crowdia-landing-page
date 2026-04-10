"use client";

import { VideoHero } from "@/components/video-hero";
import { SparkleButton } from "@/components/ui/sparkle-button";
import Image from "next/image";
import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function Home() {
  const scrollToCTA = () => {
    const cta = document.getElementById('cta-section');
    cta?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section with Video Background */}
      <VideoHero>
        {/* Logo and Brand in Top Left */}
        <Link href="/" className="absolute top-8 left-8 flex items-center gap-1 z-20 group">
          {/* Logo with permanent glow */}
          <div className="relative w-10 h-10 md:w-12 md:h-12">
            <div className="absolute inset-0.5 rounded-full bg-primary/8 blur-xl animate-glow" style={{ animationDelay: '1s' }} />

            {/* Logo image */}
            <div className="relative w-full h-full transition-all duration-500 group-hover:scale-110">
              <Image
                src="/crowdia-logo-icon-transparent.png"
                alt="CROWDIA Logo"
                fill
                className="object-contain drop-shadow-[0_0_15px_hsl(var(--primary)/0.6)] group-hover:drop-shadow-[0_0_25px_hsl(var(--primary)/0.9)]"
                priority
                sizes="(max-width: 768px) 40px, 48px"
              />
            </div>
          </div>

          {/* Title with permanent glow */}
          <h1 className="font-montserrat text-2xl md:text-3xl lg:text-4xl font-bold relative">
            <span className="absolute -inset-0.5 bg-primary/4 blur-xl rounded-lg animate-glow" style={{ animationDelay: '1s' }} />

            <span className="text-white relative inline-block">
              <span className="relative z-10 drop-shadow-[0_0_8px_hsl(var(--primary)/0.4)] group-hover:drop-shadow-[0_0_15px_hsl(var(--primary)/0.7)] group-hover:scale-110 transition-all duration-500" translate="no">
                CROWDIA
              </span>
            </span>
          </h1>
        </Link>

        <div className="max-w-5xl mx-auto space-y-8">
          {/* Main Heading */}
          <h2 className="font-montserrat text-5xl md:text-7xl lg:text-8xl font-bold mb-6 mt-20 uppercase tracking-wider">
            <span className="text-white">PALERMO.</span>{" "}
            <span className="text-primary">ORA.</span>
          </h2>

          {/* Subheading */}
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-3xl mx-auto">
            L&apos;unica piattaforma che premia la tua vita sociale. Non guardare gli eventi, vivili.
          </p>

          {/* Single CTA Button - Scrolls to choice section */}
          <div className="flex justify-center items-center mt-8">
            <SparkleButton variant="primary" size="lg" onClick={scrollToCTA}>
              <Sparkles className="w-5 h-5" />
              Scopri di più
            </SparkleButton>
          </div>
        </div>
      </VideoHero>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-card">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-center mb-4">
            Come <span className="text-primary">Funziona</span>
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Iniziare è semplice. Ecco come <span translate="no">CROWDIA</span> trasforma la tua
            esperienza sociale.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connector lines between steps (desktop only) */}
            <div className="hidden md:block absolute top-10 left-[calc(16.67%+40px)] right-[calc(16.67%+40px)] h-px bg-gradient-to-r from-primary/50 via-primary/20 to-primary/50" />

            {/* Step 1 */}
            <div className="text-center relative">
              <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_hsl(var(--primary)/0.5)] ring-4 ring-primary/20">
                <span className="font-montserrat text-3xl font-bold">1</span>
              </div>
              <h3 className="font-montserrat text-2xl font-bold mb-3">
                Scopri
              </h3>
              <p className="text-muted-foreground">
                Apri l&apos;app e guarda cosa sta succedendo intorno a te in questo momento. Filtra
                per atmosfera, locale o amici.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center relative">
              <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_hsl(var(--primary)/0.5)] ring-4 ring-primary/20">
                <span className="font-montserrat text-3xl font-bold">2</span>
              </div>
              <h3 className="font-montserrat text-2xl font-bold mb-3">
                Connetti
              </h3>
              <p className="text-muted-foreground">
                Conferma la partecipazione o invita amici. Fai check-in quando arrivi e
                condividi la tua esperienza.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center relative">
              <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_hsl(var(--primary)/0.5)] ring-4 ring-primary/20">
                <span className="font-montserrat text-3xl font-bold">3</span>
              </div>
              <h3 className="font-montserrat text-2xl font-bold mb-3">Guadagna</h3>
              <p className="text-muted-foreground">
                Vieni premiato con punti per partecipare, condividere e invitare
                amici. Porta al prossimo livello il tuo gioco sociale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Choice Buttons */}
      <section id="cta-section" className="py-20 px-4 bg-background border-t-2 border-primary/20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <Link href="/" className="relative w-16 h-16 mx-auto group block">
            {/* Animated glow background */}
            <div className="absolute inset-0.5 rounded-full bg-primary/8 blur-xl animate-glow" style={{ animationDelay: '1s' }} />

            <Image
              src="/crowdia-logo-icon-transparent.png"
              alt="CROWDIA Logo"
              fill
              className="object-contain drop-shadow-[0_0_15px_hsl(var(--primary)/0.6)] group-hover:drop-shadow-[0_0_25px_hsl(var(--primary)/0.9)] transition-all duration-500 group-hover:scale-110"
            />
          </Link>
          <h3 className="font-montserrat text-3xl md:text-4xl font-bold">
            Chi sei?
          </h3>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Scegli il tuo percorso e unisciti alla rivoluzione della vita sociale a Palermo.
          </p>

          {/* Choice Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link href="/social">
              <SparkleButton variant="primary" size="lg">
                <Sparkles className="w-5 h-5" />
                Cerco Eventi
              </SparkleButton>
            </Link>
            <Link href="/partners">
              <SparkleButton variant="secondary" size="lg">
                Organizzo Eventi
              </SparkleButton>
            </Link>
            <Link href="/voices">
              <SparkleButton variant="secondary" size="lg">
                Voglio collaborare
              </SparkleButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-background border-t border-primary/10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} <span translate="no">CROWDIA</span>. Tutti i diritti riservati.
          </p>
        </div>
      </footer>
    </main>
  );
}
