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
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
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

      {/* Technology Pillars */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-center mb-4">
            Pilastri <span className="text-primary">Tecnologici</span>
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Le tecnologie chiave alla base della nostra piattaforma.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TechCard
              icon={<Brain className="w-8 h-8" />}
              title="Recommendation Engine"
              description="Algoritmi di raccomandazione che apprendono dalle preferenze individuali e dai pattern sociali, combinando collaborative filtering e context-awareness per suggerire esperienze culturali personalizzate."
            />
            <TechCard
              icon={<Network className="w-8 h-8" />}
              title="Social Graph Analysis"
              description="Analisi delle reti sociali urbane per comprendere come le comunità si formano attorno a eventi e spazi culturali, identificando dinamiche di aggregazione e influenza sociale."
            />
            <TechCard
              icon={<BarChart3 className="w-8 h-8" />}
              title="Cultural Analytics"
              description="Modelli predittivi che analizzano trend culturali e di partecipazione, offrendo insight sulle dinamiche dell'ecosistema sociale urbano in tempo reale."
            />
            <TechCard
              icon={<Users className="w-8 h-8" />}
              title="Behavioral Insights"
              description="Applicazione di principi di behavioral science e gamification informata dalla ricerca per incentivare la partecipazione sociale e il senso di comunità."
            />
            <TechCard
              icon={<Globe className="w-8 h-8" />}
              title="NLP Multilingue"
              description="Elaborazione del linguaggio naturale ottimizzata per il contesto culturale mediterraneo, con comprensione di dialetti, slang e riferimenti culturali locali."
            />
            <TechCard
              icon={<Lightbulb className="w-8 h-8" />}
              title="Responsible AI"
              description="Design etico e trasparente, con attenzione alla privacy, all'equità algoritmica e all'impatto sociale positivo. Tecnologia al servizio delle persone, non il contrario."
            />
          </div>
        </div>
      </section>

      {/* Interdisciplinary Section */}
      <section className="py-20 px-4 bg-card">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-8">
                Dove la Tecnologia Incontra{" "}
                <span className="text-primary">le Scienze Sociali</span>
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  L&apos;innovazione più impattante nell&apos;ambito
                  dell&apos;intelligenza artificiale non avviene in isolamento
                  tecnologico, ma quando i modelli computazionali si integrano
                  con la comprensione profonda dei comportamenti umani e delle
                  dinamiche sociali.
                </p>
                <p>
                  Il nostro team combina competenze in{" "}
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
      <section className="py-20 px-4 bg-background">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-center mb-4">
            Impatto e{" "}
            <span className="text-primary">Contesto Europeo</span>
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            La nostra visione si inserisce nelle sfide chiave
            dell&apos;innovazione europea.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ImpactCard
              title="Smart Cities & Comunità"
              description="Contribuire alla trasformazione digitale delle città europee, partendo dal Mediterraneo. La nostra piattaforma genera dati e insight utili per policy maker, urbanisti e amministrazioni locali che vogliono comprendere e valorizzare la vita culturale dei territori."
            />
            <ImpactCard
              title="Inclusione Digitale"
              description="Rendere la tecnologia accessibile e utile per tutti, abbattendo le barriere tra il digitale e la vita reale. Un'attenzione particolare alle comunità meno rappresentate nell'ecosistema tecnologico europeo."
            />
            <ImpactCard
              title="Innovazione Mediterranea"
              description="Il Mediterraneo ha una tradizione unica di socialità, cultura e comunità. La nostra missione è trasformare questa ricchezza in un modello di innovazione esportabile, dimostrando che il Sud Europa può essere protagonista dell'innovazione tecnologica."
            />
            <ImpactCard
              title="Ricerca Collaborativa"
              description="Siamo aperti a collaborazioni con università, centri di ricerca e partner europei. Crediamo nella ricerca applicata che unisce rigore accademico e impatto concreto, contribuendo alla costruzione dello Spazio Europeo della Ricerca."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-card border-t border-primary/20">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold">
            Costruiamo Insieme il{" "}
            <span className="text-primary">Futuro</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Siamo alla ricerca di partner strategici, istituzioni di ricerca e
            organizzazioni che condividono la nostra visione di un&apos;innovazione
            tecnologica al servizio della coesione sociale e culturale. Se sei
            interessato a collaborare, ci piacerebbe parlarne.
          </p>
          <div className="pt-4">
            <a
              href="mailto:info@crowdia.app"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-inter font-semibold rounded-lg hover:bg-primary/90 transition-colors text-lg"
            >
              Contattaci
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-background border-t border-primary/10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-gray-500">
            &copy; 2025 <span translate="no">CROWDIA</span>. All rights
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
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/[0.07] transition-colors">
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
    <div className="flex items-start gap-4 p-4 rounded-lg border border-white/10 bg-white/5">
      <div className="w-2 h-2 rounded-full bg-primary mt-2.5 shrink-0" />
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
    <div className="p-8 rounded-xl border border-white/10 bg-white/5">
      <h3 className="font-montserrat text-xl font-bold mb-4">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}
