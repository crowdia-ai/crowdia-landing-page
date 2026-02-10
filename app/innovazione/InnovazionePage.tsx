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
            <span className="text-white">Urban Social Discovery</span>
            <br />
            <span className="text-primary">Ecosystem</span>
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Breaking heterogeneous data silos to unlock urban cultural intelligence across Mediterranean cities through AI-powered semantic aggregation.
          </p>
        </div>
      </VideoHero>

      {/* Mission Section */}
      <section className="py-20 px-4 bg-card">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-8">
              Our <span className="text-primary">Vision</span>
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed border-l-2 border-primary/20 pl-6">
              <p>
                <span translate="no">CROWDIA</span> addresses a critical challenge in Southern European urban ecosystems: cultural and social richness exists in abundance, but remains trapped in heterogeneous data silos. Events, communities, and opportunities for social connection stay invisible to most citizens due to fragmented information landscapes.
              </p>
              <p>
                Our platform applies{" "}
                <strong className="text-foreground">
                  AI-powered semantic data aggregation
                </strong>{" "}
                to map, analyze, and unlock urban cultural ecosystems — creating a foundational infrastructure layer that bridges technological innovation with real-world social dynamics.
              </p>
              <p>
                This is not purely a technology challenge: our approach integrates{" "}
                <strong className="text-foreground">
                  social sciences, cultural studies, and behavioral science
                </strong>{" "}
                with machine learning and data analytics, because we believe the most impactful innovation emerges at disciplinary intersections.
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
              <div className="font-montserrat text-4xl md:text-5xl font-bold text-primary mb-2 drop-shadow-[0_0_20px_hsl(var(--primary)/0.3)]">1,000+</div>
              <div className="text-muted-foreground text-sm uppercase tracking-wider">events catalogued</div>
            </div>
            <div className="md:border-r md:border-white/10">
              <div className="font-montserrat text-4xl md:text-5xl font-bold text-primary mb-2 drop-shadow-[0_0_20px_hsl(var(--primary)/0.3)]">70+</div>
              <div className="text-muted-foreground text-sm uppercase tracking-wider">Diversified Urban Data Sources</div>
            </div>
            <div>
              <div className="font-montserrat text-4xl md:text-5xl font-bold text-primary mb-2 drop-shadow-[0_0_20px_hsl(var(--primary)/0.3)]">Palermo</div>
              <div className="text-muted-foreground text-sm uppercase tracking-wider">pilot city</div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Pillars - Split into Today and Roadmap */}
      <section className="py-20 px-4 bg-card">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-center mb-4">
            Core Technology <span className="text-primary">Stack</span>
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Operational infrastructure deployed and validated in production.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <TechCard
              icon={<Zap className="w-8 h-8" />}
              title="Urban Intelligence Engine"
              description="Automated AI-powered semantic data aggregation system processing 70+ diversified urban data sources (Instagram, web platforms). Over 1,000 events catalogued with daily automated extraction and weekly discovery of new heterogeneous sources."
            />
            <TechCard
              icon={<Globe className="w-8 h-8" />}
              title="Multilingual NLP Pipeline"
              description="Natural language processing optimized for Italian, Sicilian dialect, and English. Extracts structured event metadata from unstructured social posts, understands local cultural references and regional linguistic nuances."
            />
            <TechCard
              icon={<Database className="w-8 h-8" />}
              title="Automated Source Discovery"
              description="Algorithms for autonomous discovery of new urban data sources in target cities. Supabase PostgreSQL database with integrated media storage and qualitative image matching pipeline for data validation."
            />
          </div>

          <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-center mb-4 mt-16">
            R&D Roadmap: <span className="text-primary">Predictive Social Dynamics</span>
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Advanced capabilities under development for next-generation urban intelligence.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TechCard
              icon={<Brain className="w-8 h-8" />}
              title="Context-Aware Recommendation Engine"
              description="Developing recommendation algorithms combining collaborative filtering with context-awareness to suggest personalized cultural experiences based on user preferences and social patterns."
              dashed
            />
            <TechCard
              icon={<Network className="w-8 h-8" />}
              title="Urban Social Graph Analysis"
              description="Research roadmap includes analysis of urban social networks to understand how communities form around events and spaces, identifying aggregation dynamics and social cohesion patterns."
              dashed
            />
            <TechCard
              icon={<BarChart3 className="w-8 h-8" />}
              title="Cultural Analytics & Forecasting"
              description="Predictive models under development to analyze cultural trends and participation patterns, offering real-time insights into urban social ecosystem dynamics for policy-making support."
              dashed
            />
            <TechCard
              icon={<Users className="w-8 h-8" />}
              title="Behavioral Insights Framework"
              description="Application of behavioral science principles and research-informed gamification to incentivize social participation and strengthen community cohesion in urban environments."
              dashed
            />
            <TechCard
              icon={<Lightbulb className="w-8 h-8" />}
              title="AI Cultural Concierge"
              description="Conversational chatbot for event discovery via natural language, with deep understanding of cultural context and individual preferences for hyper-personalized recommendations."
              dashed
            />
            <TechCard
              icon={<Globe className="w-8 h-8" />}
              title="Geographic Expansion Framework"
              description="From Palermo to other Sicilian and Italian cities, then across Mediterranean and European urban centers — scaling our AI-driven cultural mapping model to new territories."
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
                Where Technology Meets{" "}
                <span className="text-primary">Social Sciences</span>
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  <span translate="no">CROWDIA</span> emerges at the intersection of software engineering, artificial intelligence, and deep understanding of Mediterranean cultural dynamics. We are not just a tech company — we are an interdisciplinary innovation project designed for European research collaboration.
                </p>
                <p>
                  The most impactful innovation in artificial intelligence happens when computational models integrate with profound understanding of human behavior and social dynamics — the core principle of SSH-STEM convergence.
                </p>
                <p>
                  Our team integrates expertise in{" "}
                  <strong className="text-foreground">
                    computer science, data science, urban sociology, and cultural studies
                  </strong>
                  . This convergence enables us to develop solutions that are not only technically advanced but culturally aware and socially relevant — perfectly aligned with Horizon Europe Cluster 2 priorities.
                </p>
                <p>
                  We embrace the{" "}
                  <strong className="text-foreground">SSH-STEM</strong> framework: Social Sciences &amp; Humanities are not a complement to technology, but an essential component of innovation that generates real value for communities and municipal authorities.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <InterCard
                label="Urban Sociology"
                desc="Understanding social aggregation and community cohesion dynamics"
              />
              <InterCard
                label="Cultural Studies"
                desc="Analysis of cultural patterns and local identity formation"
              />
              <InterCard
                label="Behavioral Science"
                desc="Incentive models and social decision-making frameworks"
              />
              <InterCard
                label="Data Science & ML"
                desc="Predictive algorithms and semantic recommendation systems"
              />
              <InterCard
                label="Human-Computer Interaction"
                desc="User-centered design and digital accessibility"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 px-4 bg-card">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-center mb-4">
            Impact <span className="text-primary">&amp; Alignment</span>
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Aligned with Horizon Europe priorities and Smart Cities initiatives.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ImpactCard
              title="Smart Cities & Municipal Authorities"
              description="Contributing to digital transformation of European cities, starting from the Mediterranean. Our data and insights support urban planners, municipal authorities, and policy makers in understanding cultural life dynamics for evidence-based governance."
            />
            <ImpactCard
              title="Digital Inclusion & Accessibility"
              description="Technology must be accessible to all citizens. We work to break barriers between digital infrastructure and real-world social life, with particular attention to underrepresented communities in the European tech ecosystem."
            />
            <ImpactCard
              title="Mediterranean Innovation Model"
              description="The Mediterranean has a unique tradition of sociality and cultural vitality. We demonstrate that this richness can become an exportable innovation model, positioning Southern Europe as a leader in SSH-STEM technological transformation."
            />
            <ImpactCard
              title="Collaborative Research & Consortia"
              description="Open to partnerships with universities, research centers, and Horizon Europe consortia. We believe in applied research that combines academic rigor with concrete societal impact, contributing to the European Research Area."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-background border-t border-primary/20">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold">
            Available for <span className="text-primary">Consortium Partnership</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We are seeking research coordinators, municipal authorities, universities, and European innovation partners who share our vision. <span translate="no">CROWDIA</span> operates as an SME ready for consortium integration in Horizon Europe proposals (Cluster 2: Culture, Creativity &amp; Inclusive Society). If you recognize the value of breaking heterogeneous data silos for smarter cities, let&apos;s collaborate.
          </p>
          <div className="pt-4">
            <a
              href="mailto:info@crowdia.ai"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-inter font-semibold rounded-lg hover:bg-primary/90 hover:shadow-[0_0_25px_hsl(var(--primary)/0.4)] transition-all duration-300 text-lg"
            >
              Contact Us for Partnership
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
