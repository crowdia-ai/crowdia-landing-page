"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  ArrowLeft,
  Sparkles,
  Brain,
  Bot,
  Zap,
  Building2,
  Car,
  Plane,
  Eye,
  CheckCircle2,
  ChevronRight,
  Loader2,
} from "lucide-react";

const formSchema = z.object({
  fullName: z.string().min(2, "Inserisci nome e cognome"),
  company: z.string().min(2, "Inserisci il nome della tua azienda"),
  sector: z.enum(["Stay", "Move", "Travel"], {
    message: "Seleziona un settore",
  }),
  email: z.string().email("Inserisci un'email valida"),
  phone: z.string().min(6, "Inserisci un numero di telefono valido"),
});

type FormData = z.infer<typeof formSchema>;

export default function NexusPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

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

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: data.email,
          name: data.fullName,
          source: "nexus-funnel",
          metadata: {
            company: data.company,
            sector: data.sector,
            phone: data.phone,
          },
        }),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || "Invio non riuscito");
      }
      setIsSuccess(true);
    } catch (e) {
      setSubmitError(e instanceof Error ? e.message : "Invio non riuscito");
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToForm = () => {
    document
      .getElementById("nexus-form")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="light" data-theme="light">
      <main className="min-h-screen bg-white text-charcoal-500 selection:bg-magenta-100 selection:text-magenta-700">
        {/* NAV */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2 text-charcoal-300 hover:text-charcoal-500 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="font-inter text-sm">Home</span>
            </Link>
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
                className="font-montserrat text-lg font-bold text-charcoal-500 group-hover:text-magenta-500 transition-colors"
                translate="no"
              >
                CROWDIA
              </span>
            </Link>
            <button
              onClick={scrollToForm}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-magenta-500 text-white text-sm font-inter font-semibold rounded-lg hover:bg-magenta-600 transition-colors"
            >
              Richiedi Accesso
            </button>
          </div>
        </nav>

        {/* HERO */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-50/80 via-white to-rose-50/60" />
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
            <source src="/vid-bckgrnd-nexus.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/60 to-amber-50/70" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #2E2E2E 1px, transparent 0)`,
              backgroundSize: "32px 32px",
            }}
          />
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-magenta-500/8 rounded-full blur-[120px]" />
          <div className="absolute -bottom-48 -left-48 w-[500px] h-[500px] bg-amber-200/20 rounded-full blur-[150px]" />

          <div className="relative z-10 max-w-5xl mx-auto px-6 py-20">
            <h1 className="font-montserrat text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-8 text-charcoal-500">
              Connetti i tuoi ospiti
              <br />
              al{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-magenta-500">
                  battito della citt&agrave;
                </span>
                <span className="absolute bottom-1 left-0 right-0 h-3 bg-magenta-500/10 -z-0 rounded" />
              </span>
              .
            </h1>

            <p className="font-inter text-lg md:text-xl text-charcoal-300 max-w-2xl leading-relaxed mb-12">
              <span translate="no">Crowdia Nexus</span> mette
              l&apos;intelligenza artificiale al servizio del turista,
              eliminando il caos informativo e trasformando l&apos;accoglienza
              in un&apos;esperienza &quot;local&quot; immediata e senza attriti.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToForm}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-magenta-500 text-white font-inter font-semibold rounded-xl hover:bg-magenta-600 transition-all duration-300 shadow-lg shadow-magenta-500/25 hover:shadow-xl hover:shadow-magenta-500/30 hover:-translate-y-0.5"
              >
                Entra nel Programma Nexus
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        {/* MISSION - Universal Value */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal-500 mb-6 leading-tight">
              Oltre la{" "}
              <span className="text-magenta-500">frammentazione</span>.
            </h2>
            <p className="font-inter text-lg text-charcoal-300 max-w-3xl leading-relaxed">
              Oggi il turista &egrave; sommerso da informazioni disorganizzate
              e dispersive. Che la tua attivit&agrave; riguardi
              l&apos;ospitalit&agrave;, il trasporto o l&apos;organizzazione di
              viaggi, il tuo obiettivo non cambia: offrire una guida chiara.
              Abbiamo creato un layer tecnologico che armonizza la citt&agrave;
              e la mette nelle mani dei tuoi clienti, elevando istantaneamente
              il valore del tuo servizio.
            </p>
          </div>
        </section>

        {/* TECHNOLOGY - AI for Tourists */}
        <section className="py-24 px-6 bg-gradient-to-b from-white to-amber-50/30">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal-500 mb-6 leading-tight">
              L&apos;Intelligenza Artificiale al servizio
              <br />
              dell&apos;<span className="text-magenta-500">accoglienza</span>.
            </h2>
            <p className="font-inter text-lg text-charcoal-300 max-w-3xl leading-relaxed mb-16">
              Tre capacit&agrave; che trasformano i dati grezzi della
              citt&agrave; in raccomandazioni rilevanti per ogni ospite.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="group p-8 rounded-2xl border border-gray-100 bg-white hover:border-magenta-200 hover:shadow-lg hover:shadow-magenta-500/5 transition-all duration-500">
                <div className="w-12 h-12 rounded-xl bg-magenta-50 flex items-center justify-center mb-6 group-hover:bg-magenta-100 transition-colors duration-500">
                  <Brain className="w-6 h-6 text-magenta-500" />
                </div>
                <h3 className="font-montserrat text-xl font-bold text-charcoal-500 mb-3">
                  Analisi Semantica
                </h3>
                <p className="font-inter text-charcoal-300 leading-relaxed">
                  La nostra AI interpreta la citt&agrave; in tempo reale,
                  selezionando solo ci&ograve; che &egrave; pertinente per il
                  profilo del tuo ospite.
                </p>
              </div>

              <div className="group p-8 rounded-2xl border border-gray-100 bg-white hover:border-magenta-200 hover:shadow-lg hover:shadow-magenta-500/5 transition-all duration-500">
                <div className="w-12 h-12 rounded-xl bg-magenta-50 flex items-center justify-center mb-6 group-hover:bg-magenta-100 transition-colors duration-500">
                  <Bot className="w-6 h-6 text-magenta-500" />
                </div>
                <h3 className="font-montserrat text-xl font-bold text-charcoal-500 mb-3">
                  <span translate="no">Lumio AI Concierge</span>
                </h3>
                <p className="font-inter text-charcoal-300 leading-relaxed">
                  Un assistente virtuale multilingue che risponde alle
                  necessit&agrave; del turista, agendo come un mediatore
                  culturale digitale.
                </p>
              </div>

              <div className="group p-8 rounded-2xl border border-gray-100 bg-white hover:border-magenta-200 hover:shadow-lg hover:shadow-magenta-500/5 transition-all duration-500">
                <div className="w-12 h-12 rounded-xl bg-magenta-50 flex items-center justify-center mb-6 group-hover:bg-magenta-100 transition-colors duration-500">
                  <Zap className="w-6 h-6 text-magenta-500" />
                </div>
                <h3 className="font-montserrat text-xl font-bold text-charcoal-500 mb-3">
                  <span translate="no">Day Zero</span> Utility
                </h3>
                <p className="font-inter text-charcoal-300 leading-relaxed">
                  Un sistema gi&agrave; pronto e popolato. Nessuna attesa,
                  nessun inserimento dati manuale: la citt&agrave; &egrave;
                  gi&agrave; dentro <span translate="no">Crowdia</span>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* NEXUS BRANCHES */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal-500 mb-16 leading-tight">
              I tre rami del{" "}
              <span className="text-magenta-500" translate="no">
                Programma Nexus
              </span>
              .
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="relative p-8 rounded-2xl border border-gray-100 bg-gradient-to-br from-white to-amber-50/40 hover:border-magenta-200 hover:shadow-xl hover:shadow-magenta-500/10 transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-magenta-500/5 rounded-full blur-3xl" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-magenta-50 flex items-center justify-center mb-6">
                    <Building2 className="w-7 h-7 text-magenta-500" />
                  </div>
                  <div className="font-montserrat text-xs font-bold tracking-widest uppercase text-magenta-500 mb-2" translate="no">
                    Nexus Stay
                  </div>
                  <h3 className="font-montserrat text-xl font-bold text-charcoal-500 mb-4">
                    Accommodation
                  </h3>
                  <p className="font-inter text-charcoal-300 leading-relaxed">
                    Per Hotel e <span translate="no">BnB</span>. Offri una
                    bussola digitale h24 che guida i tuoi ospiti verso le
                    esperienze pi&ugrave; autentiche di Palermo.
                  </p>
                </div>
              </div>

              <div className="relative p-8 rounded-2xl border border-gray-100 bg-gradient-to-br from-white to-amber-50/40 hover:border-magenta-200 hover:shadow-xl hover:shadow-magenta-500/10 transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-magenta-500/5 rounded-full blur-3xl" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-magenta-50 flex items-center justify-center mb-6">
                    <Car className="w-7 h-7 text-magenta-500" />
                  </div>
                  <div className="font-montserrat text-xs font-bold tracking-widest uppercase text-magenta-500 mb-2" translate="no">
                    Nexus Move
                  </div>
                  <h3 className="font-montserrat text-xl font-bold text-charcoal-500 mb-4">
                    Transport
                  </h3>
                  <p className="font-inter text-charcoal-300 leading-relaxed">
                    Per Taxi e <span translate="no">NCC</span>. Trasforma ogni
                    spostamento in un&apos;opportunit&agrave; di scoperta,
                    diventando il primo punto di contatto con la vita sociale
                    urbana.
                  </p>
                </div>
              </div>

              <div className="relative p-8 rounded-2xl border border-gray-100 bg-gradient-to-br from-white to-amber-50/40 hover:border-magenta-200 hover:shadow-xl hover:shadow-magenta-500/10 transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-magenta-500/5 rounded-full blur-3xl" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-magenta-50 flex items-center justify-center mb-6">
                    <Plane className="w-7 h-7 text-magenta-500" />
                  </div>
                  <div className="font-montserrat text-xs font-bold tracking-widest uppercase text-magenta-500 mb-2" translate="no">
                    Nexus Travel
                  </div>
                  <h3 className="font-montserrat text-xl font-bold text-charcoal-500 mb-4">
                    Agencies &amp; Operators
                  </h3>
                  <p className="font-inter text-charcoal-300 leading-relaxed">
                    Per Tour Operator e Guide. Arricchisci i tuoi pacchetti con
                    un servizio digitale che accompagna il cliente anche dopo
                    le attivit&agrave; programmate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CURIOSITY GAP */}
        <section className="py-24 px-6 bg-gradient-to-b from-amber-50/30 to-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal-500 mb-6 leading-tight">
              Quello che non vedi{" "}
              <span className="text-magenta-500">qui</span>.
            </h2>
            <p className="font-inter text-lg text-charcoal-300 max-w-3xl leading-relaxed mb-12">
              La landing page &egrave; solo l&apos;inizio. Durante il nostro
              incontro tecnico di 15 minuti ti mostreremo:
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex gap-4 p-6 rounded-xl bg-white border border-gray-100">
                <Eye className="w-6 h-6 text-magenta-500 flex-shrink-0 mt-0.5" />
                <p className="font-inter text-charcoal-300 leading-relaxed">
                  La <strong className="text-charcoal-500">Dashboard Business</strong> per il
                  monitoraggio dei flussi dei tuoi clienti.
                </p>
              </div>
              <div className="flex gap-4 p-6 rounded-xl bg-white border border-gray-100">
                <Sparkles className="w-6 h-6 text-magenta-500 flex-shrink-0 mt-0.5" />
                <p className="font-inter text-charcoal-300 leading-relaxed">
                  Il sistema di accesso esclusivo tramite{" "}
                  <strong className="text-charcoal-500" translate="no">Nexus Pass</strong>.
                </p>
              </div>
              <div className="flex gap-4 p-6 rounded-xl bg-white border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-magenta-500 flex-shrink-0 mt-0.5" />
                <p className="font-inter text-charcoal-300 leading-relaxed">
                  I vantaggi strategici riservati ai{" "}
                  <strong className="text-charcoal-500">primi partner</strong> della fase pilota.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* LEAD GENERATION FUNNEL */}
        <section
          id="nexus-form"
          className="py-24 px-6 bg-white border-t border-gray-100"
        >
          <div className="max-w-2xl mx-auto">
            <h2 className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal-500 mb-6 leading-tight">
              Richiedi la tua{" "}
              <span className="text-magenta-500">demo tecnica</span>.
            </h2>
            <p className="font-inter text-lg text-charcoal-300 leading-relaxed mb-10">
              Compila il modulo: il team Crowdia ti ricontatter&agrave; entro
              24 ore per fissare un appuntamento.
            </p>

            {isSuccess ? (
              <div className="rounded-2xl bg-white border border-magenta-200 p-10 text-center shadow-lg shadow-magenta-500/5">
                <CheckCircle2 className="w-14 h-14 text-magenta-500 mx-auto mb-4" />
                <h3 className="font-montserrat text-2xl font-bold mb-3 text-charcoal-500">
                  Candidatura ricevuta
                </h3>
                <p className="font-inter text-charcoal-300 mb-2">
                  Ti ricontatteremo entro 24 ore per organizzare
                  l&apos;appuntamento.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="rounded-2xl bg-white border border-gray-100 p-8 md:p-10 shadow-sm space-y-6"
              >
                <div>
                  <label className="block font-inter text-sm font-medium text-charcoal-500 mb-2">
                    Nome e Cognome
                  </label>
                  <input
                    type="text"
                    {...register("fullName")}
                    placeholder="Mario Rossi"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl font-inter text-charcoal-500 focus:outline-none focus:border-magenta-500 focus:ring-2 focus:ring-magenta-500/20 transition-all"
                  />
                  {errors.fullName && (
                    <p className="font-inter text-sm text-red-500 mt-2">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block font-inter text-sm font-medium text-charcoal-500 mb-2">
                    Nome Azienda / Attivit&agrave;
                  </label>
                  <input
                    type="text"
                    {...register("company")}
                    placeholder="Es: Hotel Centrale, Taxi Palermo, Sicily Tours..."
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl font-inter text-charcoal-500 focus:outline-none focus:border-magenta-500 focus:ring-2 focus:ring-magenta-500/20 transition-all"
                  />
                  {errors.company && (
                    <p className="font-inter text-sm text-red-500 mt-2">
                      {errors.company.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block font-inter text-sm font-medium text-charcoal-500 mb-2">
                    Settore
                  </label>
                  <select
                    {...register("sector")}
                    defaultValue=""
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl font-inter text-charcoal-500 bg-white focus:outline-none focus:border-magenta-500 focus:ring-2 focus:ring-magenta-500/20 transition-all"
                  >
                    <option value="" disabled>
                      Seleziona il tuo settore
                    </option>
                    <option value="Stay">Stay (Hotel, BnB, Accommodation)</option>
                    <option value="Move">Move (Taxi, NCC, Trasporti)</option>
                    <option value="Travel">
                      Travel (Tour Operator, Guide, Agenzie)
                    </option>
                  </select>
                  {errors.sector && (
                    <p className="font-inter text-sm text-red-500 mt-2">
                      {errors.sector.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block font-inter text-sm font-medium text-charcoal-500 mb-2">
                    Email Professionale
                  </label>
                  <input
                    type="email"
                    {...register("email")}
                    placeholder="nome@azienda.it"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl font-inter text-charcoal-500 focus:outline-none focus:border-magenta-500 focus:ring-2 focus:ring-magenta-500/20 transition-all"
                  />
                  {errors.email && (
                    <p className="font-inter text-sm text-red-500 mt-2">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block font-inter text-sm font-medium text-charcoal-500 mb-2">
                    Numero di Telefono
                  </label>
                  <input
                    type="tel"
                    {...register("phone")}
                    placeholder="+39 3XX XXXXXXX"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl font-inter text-charcoal-500 focus:outline-none focus:border-magenta-500 focus:ring-2 focus:ring-magenta-500/20 transition-all"
                  />
                  {errors.phone && (
                    <p className="font-inter text-sm text-red-500 mt-2">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                {submitError && (
                  <div className="rounded-xl border border-red-200 bg-red-50 p-4 font-inter text-sm text-red-600">
                    {submitError}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-magenta-500 text-white font-inter font-semibold rounded-xl hover:bg-magenta-600 transition-all duration-300 shadow-lg shadow-magenta-500/25 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Invio in corso...
                    </>
                  ) : (
                    <>
                      Organizza Appuntamento
                      <ChevronRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-10 px-6 bg-white border-t border-gray-100">
          <div className="max-w-6xl mx-auto text-center">
            <p className="font-inter text-sm text-charcoal-300">
              &copy; {new Date().getFullYear()}{" "}
              <span translate="no">CROWDIA</span>. Tutti i diritti riservati.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
