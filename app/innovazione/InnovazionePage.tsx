"use client";

import { VideoHero } from "@/components/video-hero";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Brain,
  Users,
  Globe,
  BarChart3,
  Lightbulb,
  Network,
  Database,
  Zap,
} from "lucide-react";

export default function InnovazionePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <VideoHero>
        {/* Back Button */}
        <Link
          href="/"
          className="absolute top-8 left-8 flex items-center gap-2 text-white/80 hover:text-white transition-colors z-20"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-inter">Home</span>
        </Link>

        {/* Logo in Top Right */}
        <div className="absolute top-8 right-8 flex items-center gap-1 z-20 group cursor-pointer">
          <Link href="/" className="flex items-center gap-1">
            <div className="relative w-10 h-10 md:w-12 md:h-12">
              <div
                className="absolute inset-0.5 rounded-full bg-primary/8 blur-xl animate-glow"
                style={{ animationDelay: "1s" }}
              />
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
            <span
              className="font-montserrat text-2xl md:text-3xl font-bold text-white drop-shadow-[0_0_8px_hsl(var(--primary)/0.4)]"
              translate="no"
            >
              CROWDIA
            </span>
          </Link>
        </div>

        <div className="max-w-4xl mx-auto space-y-8 px-4">
          <h1 className="font-montserrat text-4xl md:text-5xl lg:text-7xl font-bold mb-6 mt-20 leading-tight">
            <span className="text-white">Intelligenza Artificiale</span>
            <br />
            <span className="text-primary">per l&apos;Innovazione Sociale</span>
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Uniamo tecnologia avanzata e comprensione culturale per trasformare
            il modo in cui le persone vivono e si connettono negli spazi urbani
            del Mediterraneo.
          </p>
        </div>
      </VideoHero>

      {/* Mission Section */}
      <section className="py-20 px-4 bg-card">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-8">
              La Nostra <span className="text-primary">Visione</span>
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed border-l-2 border-primary/20 pl-6">
              <p>
                <span translate="no">CROWDIA</span> nasce dall&apos;osservazione
                di un problema reale: nelle città del Sud Europa, la ricchezza
                culturale e sociale è enorme, ma frammentata. Eventi, comunità e
                opportunità di connessione restano invisibili alla maggior parte
                delle persone.
              </p>
              <p>
                La nostra piattaforma applica{" "}
                <strong className="text-foreground">
                  intelligenza artificiale e analisi dei dati
                </strong>{" "}
                per mappare, comprendere e valorizzare gli ecosistemi culturali
                urbani — creando un ponte tra innovazione tecnologica e dinamiche
                sociali reali.
              </p>
              <p>
                Non si tratta solo di tecnologia: il nostro approccio integra{" "}
                <strong className="text-foreground">
                  scienze sociali, studi culturali e behavioral science
                </strong>{" "}
                con machine learning e data analytics, perché crediamo che
                l&apos;innovazione più significativa nasca all&apos;intersezione
                tra discipline.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Traction Section */}
      <section className="py-12 px-4 bg-background border-y border-primary/10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="md:border-r md:border-white/10">
              <div className="font-montserrat text-4xl md:text-5xl font-bold text-primary mb-2 drop-shadow-[0_0_20px_hsl(var(--primary)/0.3)]">1.000+</div>
              <div className="text-muted-foreground text-sm uppercase tracking-wider">eventi mappati</div>
            </div>
            <div className="md:border-r md:border-white/10">
              <div className="font-montserrat text-4xl md:text-5xl font-bold text-primary mb-2 drop-shadow-[0_0_20px_hsl(var(--primary)/0.3)]">77+</div>
              <div className="text-muted-foreground text-sm uppercase tracking-wider">fonti monitorate</div>
            </div>
            <div>
              <div className="font-montserrat text-4xl md:text-5xl font-bold text-primary mb-2 drop-shadow-[0_0_20px_hsl(var(--primary)/0.3)]">Palermo</div>
              <div className="text-muted-foreground text-sm uppercase tracking-wider">città pilota</div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Pillars - Split into Today and Roadmap */}
      <section className="py-20 px-4 bg-card">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-center mb-4">
            Cosa Abbiamo <span className="text-primary">Costruito</span>
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            La tecnologia operativa oggi sulla piattaforma.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <TechCard
              icon={<Zap className="w-8 h-8" />}
              title="Pipeline AI di Estrazione"
              description="Sistema automatizzato di scraping e analisi che processa 77+ fonti Instagram e web usando Apify e OpenRouter. Oltre 1.000 eventi catalogati con estrazione automatica quotidiana e discovery settimanale di nuove fonti."
            />
            <TechCard
              icon={<Globe className="w-8 h-8" />}
              title="NLP Multilingue"
              description="Elaborazione del linguaggio naturale ottimizzata per italiano, dialetto siciliano e inglese. Estrae dettagli di eventi da post social non strutturati, comprende riferimenti culturali locali e slang."
            />
            <TechCard
              icon={<Database className="w-8 h-8" />}
              title="Discovery Automatizzata"
              description="Algoritmi per la scoperta automatica di nuove fonti di eventi nelle città target. Database Supabase PostgreSQL con storage media integrato e pipeline di matching qualitativo delle immagini."
            />
          </div>

          <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-center mb-4 mt-16">
            Cosa Stiamo <span className="text-primary">Sviluppando</span>
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            La nostra roadmap include funzionalità che portano la piattaforma al livello successivo.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TechCard
              icon={<Brain className="w-8 h-8" />}
              title="Recommendation Engine"
              description="Stiamo sviluppando algoritmi di raccomandazione che combinano collaborative filtering e context-awareness per suggerire esperienze culturali personalizzate basate su preferenze e pattern sociali."
              dashed
            />
            <TechCard
              icon={<Network className="w-8 h-8" />}
              title="Social Graph Analysis"
              description="La nostra roadmap include l'analisi delle reti sociali urbane per comprendere come le comunità si formano attorno a eventi e spazi, identificando dinamiche di aggregazione."
              dashed
            />
            <TechCard
              icon={<BarChart3 className="w-8 h-8" />}
              title="Cultural Analytics"
              description="Modelli predittivi in sviluppo per analizzare trend culturali e di partecipazione, offrendo insight sulle dinamiche dell'ecosistema sociale urbano in tempo reale."
              dashed
            />
            <TechCard
              icon={<Users className="w-8 h-8" />}
              title="Behavioral Insights"
              description="Applicazione di principi di behavioral science e gamification informata dalla ricerca per incentivare la partecipazione sociale e rafforzare il senso di comunità."
              dashed
            />
            <TechCard
              icon={<Lightbulb className="w-8 h-8" />}
              title="AI Concierge"
              description="Chatbot conversazionale per la scoperta di eventi tramite linguaggio naturale, con comprensione del contesto culturale e delle preferenze individuali."
              dashed
            />
            <TechCard
              icon={<Globe className="w-8 h-8" />}
              title="Espansione Geografica"
              description="Da Palermo verso altre città siciliane e italiane, poi nel Mediterraneo ed Europa, portando il modello di mappatura culturale AI-driven in nuovi territori."
              dashed
            />
          </div>
        </div>
      </section>

      {/* Interdisciplinary Section */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-8">
                Dove la Tecnologia Incontra{" "}
                <span className="text-primary">le Scienze Sociali</span>
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  <span translate="no">CROWDIA</span> nasce dall&apos;intersezione tra ingegneria software, intelligenza artificiale e passione per la cultura mediterranea. Non siamo solo una tech company — siamo un progetto che crede nell&apos;innovazione multidisciplinare.
                </p>
                <p>
                  L&apos;innovazione più impattante nell&apos;ambito
                  dell&apos;intelligenza artificiale avviene quando i modelli computazionali si integrano con la comprensione profonda dei comportamenti umani e delle dinamiche sociali.
                </p>
                <p>
                  Integriamo competenze in{" "}
                  <strong className="text-foreground">
                    computer science, data science, sociologia urbana e studi
                    culturali
                  </strong>
                  . Questa convergenza ci permette di sviluppare soluzioni che
                  non sono solo tecnicamente avanzate, ma culturalmente
                  consapevoli e socialmente rilevanti.
                </p>
                <p>
                  Crediamo nell&apos;approccio{" "}
                  <strong className="text-foreground">SSH-STEM</strong>: le
                  Social Sciences &amp; Humanities non sono un complemento alla
                  tecnologia, ma una componente essenziale dell&apos;innovazione
                  che genera valore reale per le comunità.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <InterCard
                label="Sociologia Urbana"
                desc="Comprensione delle dinamiche di aggregazione e coesione sociale"
              />
              <InterCard
                label="Cultural Studies"
                desc="Analisi dei pattern culturali e delle identità locali"
              />
              <InterCard
                label="Behavioral Science"
                desc="Modelli di incentivazione e decision-making sociale"
              />
              <InterCard
                label="Data Science & ML"
                desc="Algoritmi predittivi e sistemi di raccomandazione"
              />
              <InterCard
                label="Human-Computer Interaction"
                desc="Design centrato sull'utente e accessibilità digitale"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 px-4 bg-card">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-center mb-4">
            L&apos;Impatto che{" "}
            <span className="text-primary">Vogliamo Creare</span>
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Crediamo in un&apos;innovazione che generi valore reale per persone e comunità.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ImpactCard
              title="Smart Cities & Comunità"
              description="Vogliamo contribuire alla trasformazione digitale delle città, partendo dal Mediterraneo. I dati e gli insight che generiamo possono aiutare urbanisti, amministrazioni e policy maker a comprendere meglio la vita culturale dei territori."
            />
            <ImpactCard
              title="Inclusione Digitale"
              description="La tecnologia deve essere accessibile a tutti. Lavoriamo per abbattere le barriere tra il digitale e la vita reale, con attenzione particolare alle comunità meno rappresentate nell'ecosistema tech."
            />
            <ImpactCard
              title="Innovazione Mediterranea"
              description="Il Mediterraneo ha una tradizione unica di socialità e cultura. Crediamo che questa ricchezza possa diventare un modello di innovazione esportabile, dimostrando che il Sud Europa può guidare la rivoluzione tecnologica."
            />
            <ImpactCard
              title="Ricerca Collaborativa"
              description="Siamo aperti a partnership con università e centri di ricerca. Crediamo nella ricerca applicata che unisce rigore accademico e impatto concreto, contribuendo alla costruzione di uno spazio europeo dell'innovazione."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-background border-t border-primary/20">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold">
            Costruiamo Insieme il{" "}
            <span className="text-primary">Futuro</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Cerchiamo persone e organizzazioni che condividono la nostra visione: università, centri di ricerca, istituzioni culturali, amministrazioni locali, investitori e partner che credono in un&apos;innovazione tecnologica al servizio delle comunità. Se ti riconosci in questo progetto, parliamone.
          </p>
          <div className="pt-4">
            <a
              href="mailto:info@crowdia.ai"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-inter font-semibold rounded-lg hover:bg-primary/90 hover:shadow-[0_0_25px_hsl(var(--primary)/0.4)] transition-all duration-300 text-lg"
            >
              Contattaci
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-card border-t border-primary/10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-gray-500">
            &copy; 2026 <span translate="no">CROWDIA</span>. All rights
            reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}

function TechCard({
  icon,
  title,
  description,
  dashed,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  dashed?: boolean;
}) {
  return (
    <div className={`p-6 rounded-xl border bg-white/5 transition-all duration-300 ${dashed ? "border-dashed border-white/15 hover:border-primary/30" : "border-white/10 hover:border-primary/40 hover:shadow-[0_0_20px_hsl(var(--primary)/0.08)]"}`}>
      <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-5 text-primary">
        {icon}
      </div>
      <h3 className="font-montserrat text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed text-sm">
        {description}
      </p>
    </div>
  );
}

function InterCard({ label, desc }: { label: string; desc: string }) {
  return (
    <div className="flex items-start gap-4 p-4 rounded-lg border border-white/10 bg-white/5 border-l-2 border-l-primary/50 hover:border-l-primary transition-colors">
      <div>
        <p className="font-inter font-semibold text-foreground">{label}</p>
        <p className="text-sm text-muted-foreground">{desc}</p>
      </div>
    </div>
  );
}

function ImpactCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="p-8 rounded-xl border border-white/10 bg-white/5 border-t-2 border-t-primary/30 hover:border-t-primary/60 transition-colors">
      <h3 className="font-montserrat text-xl font-bold mb-4">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}
