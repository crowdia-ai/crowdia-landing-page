"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Image from "next/image";
import Link from "next/link";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  ArrowLeft,
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  Loader2,
} from "lucide-react";

const ACTIVITY_OPTIONS = [
  "Organizzatore di Eventi",
  "Spazio Fisso/ Locale che ospita eventi di terze parti (Bar, Club, Teatro, ecc.)",
  "Entrambi (Locale con programmazione eventi propria o ibrida)",
] as const;

const step1Schema = z.object({
  nomeRealta: z.string().min(1, "Inserisci il nome della tua realtà"),
  instagram: z
    .string()
    .min(1, "Inserisci il link al tuo profilo Instagram"),
});

const step2Schema = z.object({
  type: z.string().min(1, "Seleziona un'opzione"),
  email: z.string().email("Inserisci un indirizzo email valido"),
  whatsapp: z.string().min(6, "Inserisci un numero WhatsApp valido"),
});

const fullSchema = step1Schema.merge(step2Schema);
type FormData = z.infer<typeof fullSchema>;

export default function CircuitsJoinPage() {
  const [step, setStep] = useState<1 | 2>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(fullSchema),
    mode: "onTouched",
    defaultValues: {
      nomeRealta: "",
      instagram: "",
      type: "",
      email: "",
      whatsapp: "",
    },
  });

  async function handleContinue() {
    const valid = await form.trigger(["nomeRealta", "instagram"]);
    if (valid) setStep(2);
  }

  async function onSubmit(values: FormData) {
    setIsSubmitting(true);
    setError(null);
    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: values.email,
          name: values.nomeRealta,
          source: "orgs-funnel",
          metadata: {
            instagram: values.instagram,
            type: values.type,
            whatsapp: values.whatsapp,
          },
        }),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        setError(
          data?.error ||
            "Impossibile inviare la richiesta. Riprova tra qualche istante."
        );
        return;
      }
      setIsSuccess(true);
      form.reset();
    } catch (e) {
      console.error(e);
      setError("Si è verificato un errore imprevisto. Riprova.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="light" data-theme="light">
      <main className="min-h-screen bg-white text-charcoal-500 selection:bg-magenta-100 selection:text-magenta-700">
        {/* NAV */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link
              href="/circuits"
              className="flex items-center gap-2 text-charcoal-300 hover:text-charcoal-500 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="font-inter text-sm">Indietro</span>
            </Link>
            <Link href="/circuits" className="flex items-center gap-2 group">
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
          </div>
        </nav>

        <section className="relative pt-32 pb-24 px-6 overflow-hidden">
          {/* Match the ORGs LP palette: warm gradient + magenta accents */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-50/60 via-white to-rose-50/40 pointer-events-none" />
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-magenta-500/8 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute -bottom-48 -left-48 w-[500px] h-[500px] bg-amber-200/20 rounded-full blur-[150px] pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            {/* HEADER */}
            <h1 className="font-montserrat text-4xl md:text-5xl font-bold leading-[1.1] mb-4 text-charcoal-500">
              Entra nel Circuito di{" "}
              <span className="text-magenta-500" translate="no">
                Crowdia.
              </span>
            </h1>
            <p className="font-inter text-lg text-charcoal-300 leading-relaxed mb-10">
              Pochi campi, due passaggi. Il team Crowdia ti contatter&agrave;
              a breve.
            </p>

            {isSuccess ? (
              <div className="rounded-2xl bg-white border border-magenta-200 p-10 text-center shadow-lg shadow-magenta-500/5">
                <CheckCircle2 className="w-14 h-14 text-magenta-500 mx-auto mb-4" />
                <h2 className="font-montserrat text-2xl font-bold mb-3 text-charcoal-500">
                  Richiesta ricevuta
                </h2>
                <p className="font-inter text-charcoal-300 mb-8">
                  Il team Crowdia ti contatter&agrave; a breve.
                </p>
                <Link
                  href="/circuits"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-magenta-500 text-white font-inter font-semibold rounded-xl hover:bg-magenta-600 transition-colors"
                >
                  Torna a Crowdia per Organizzatori
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            ) : (
              <div className="rounded-2xl bg-white border border-gray-100 p-8 md:p-10 shadow-sm">
                {/* Step indicator */}
                <div className="flex items-center gap-3 mb-8">
                  <div
                    className={`flex items-center gap-2 ${
                      step === 1 ? "text-magenta-500" : "text-charcoal-300"
                    }`}
                  >
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center font-montserrat text-sm font-bold ${
                        step === 1
                          ? "bg-magenta-500 text-white"
                          : "bg-magenta-50 text-magenta-500"
                      }`}
                    >
                      1
                    </div>
                    <span className="font-inter text-sm">
                      Identit&agrave;
                    </span>
                  </div>
                  <div className="flex-1 h-px bg-charcoal-500/10" />
                  <div
                    className={`flex items-center gap-2 ${
                      step === 2 ? "text-magenta-500" : "text-charcoal-300"
                    }`}
                  >
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center font-montserrat text-sm font-bold ${
                        step === 2
                          ? "bg-magenta-500 text-white"
                          : "bg-charcoal-500/5 text-charcoal-300"
                      }`}
                    >
                      2
                    </div>
                    <span className="font-inter text-sm">Contatto</span>
                  </div>
                </div>

                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8"
                  >
                    {step === 1 && (
                      <>
                        <FormField
                          control={form.control}
                          name="nomeRealta"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>
                                Nome della tua Realt&agrave;
                                <span className="text-magenta-500"> *</span>
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Es: Teatro Massimo, Club 01, Nome Promoter..."
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="instagram"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>
                                Link Instagram
                                <span className="text-magenta-500"> *</span>
                              </FormLabel>
                              <FormControl>
                                <Input
                                  type="url"
                                  inputMode="url"
                                  placeholder="instagram.com/tuonome"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <button
                          type="button"
                          onClick={handleContinue}
                          className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-magenta-500 text-white font-inter font-semibold rounded-xl hover:bg-magenta-600 transition-all duration-300 shadow-lg shadow-magenta-500/25 hover:shadow-xl hover:shadow-magenta-500/30"
                        >
                          Continua
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      </>
                    )}

                    {step === 2 && (
                      <>
                        <FormField
                          control={form.control}
                          name="type"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>
                                Cosa definisce meglio la tua attivit&agrave;?
                                <span className="text-magenta-500"> *</span>
                              </FormLabel>
                              <FormControl>
                                <select
                                  className="flex h-10 w-full rounded-md border border-charcoal-500/20 bg-transparent px-3 py-2 text-base shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-magenta-500/40 focus-visible:border-magenta-500 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                                  {...field}
                                >
                                  <option value="" disabled>
                                    Seleziona...
                                  </option>
                                  {ACTIVITY_OPTIONS.map((option) => (
                                    <option key={option} value={option}>
                                      {option}
                                    </option>
                                  ))}
                                </select>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>
                                Contatto E-mail
                                <span className="text-magenta-500"> *</span>
                              </FormLabel>
                              <FormControl>
                                <Input
                                  type="email"
                                  placeholder="nome@email.it"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="whatsapp"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>
                                WhatsApp (Contatto Rapido)
                                <span className="text-magenta-500"> *</span>
                              </FormLabel>
                              <FormControl>
                                <Input
                                  type="tel"
                                  placeholder="+39 3XX XXXXXXX"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        {error && (
                          <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
                            {error}
                          </div>
                        )}

                        <div className="flex flex-col sm:flex-row gap-3">
                          <button
                            type="button"
                            onClick={() => setStep(1)}
                            disabled={isSubmitting}
                            className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-charcoal-500/5 text-charcoal-500 font-inter font-medium rounded-xl hover:bg-charcoal-500/10 transition-all duration-300 border border-charcoal-500/10 disabled:opacity-60"
                          >
                            <ChevronLeft className="w-4 h-4" />
                            Indietro
                          </button>
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 bg-magenta-500 text-white font-inter font-semibold rounded-xl hover:bg-magenta-600 transition-all duration-300 shadow-lg shadow-magenta-500/25 hover:shadow-xl hover:shadow-magenta-500/30 disabled:opacity-60 disabled:cursor-not-allowed"
                          >
                            {isSubmitting ? (
                              <>
                                <Loader2 className="w-5 h-5 animate-spin" />
                                Invio in corso...
                              </>
                            ) : (
                              <>
                                Entra nel Circuito
                                <ChevronRight className="w-5 h-5" />
                              </>
                            )}
                          </button>
                        </div>
                      </>
                    )}
                  </form>
                </Form>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
