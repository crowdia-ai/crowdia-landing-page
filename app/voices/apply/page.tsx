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
import { ArrowLeft, ChevronRight, CheckCircle2, Loader2 } from "lucide-react";

const ROLE_OPTIONS = [
  "PR / Connector (Organizzo e sposto persone)",
  "Creator / Influencer (Creo contenuti e tendenze)",
  "Community Lead (Gestisco gruppi, collettivi o community)",
  "Altro",
] as const;

const formSchema = z.object({
  socials: z
    .string()
    .min(1, "Inserisci almeno un link ai tuoi profili"),
  roles: z
    .array(z.string())
    .min(1, "Seleziona almeno un'opzione"),
  community: z
    .string()
    .min(1, "Raccontaci della tua community"),
  email: z.string().email("Inserisci un indirizzo email valido"),
  whatsapp: z
    .string()
    .min(6, "Inserisci un numero WhatsApp valido"),
});

type FormData = z.infer<typeof formSchema>;

export default function VoicesApplyPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      socials: "",
      roles: [],
      community: "",
      email: "",
      whatsapp: "",
    },
  });

  async function onSubmit(values: FormData) {
    setIsSubmitting(true);
    setError(null);
    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: values.email,
          name: null,
          source: "voices-funnel",
          metadata: {
            socials: values.socials,
            roles: values.roles,
            community: values.community,
            whatsapp: values.whatsapp,
          },
        }),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        setError(
          data?.error ||
            "Impossibile inviare la candidatura. Riprova tra qualche istante."
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
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 dark:from-zinc-950 dark:via-zinc-900 dark:to-black text-slate-900 dark:text-slate-100 selection:bg-magenta-100 selection:text-magenta-700 dark:selection:bg-magenta-500/30 dark:selection:text-magenta-100">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 dark:bg-zinc-950/70 backdrop-blur-md border-b border-slate-200/60 dark:border-zinc-800/60">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/voices"
            className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-inter text-sm">Voices</span>
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
              className="font-montserrat text-lg font-bold group-hover:text-magenta-500 transition-colors"
              translate="no"
            >
              CROWDIA
            </span>
          </Link>
        </div>
      </nav>

      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        {/* magenta accent glow */}
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-magenta-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute -bottom-48 -left-48 w-[500px] h-[500px] bg-magenta-500/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto">
          {/* HEADER */}
          <h1 className="font-montserrat text-4xl md:text-5xl font-bold leading-[1.1] mb-4">
            La tua voce muove{" "}
            <span className="text-magenta-500">Palermo.</span>
          </h1>
          <p className="font-inter text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-12">
            Non cerchiamo semplici utenti. Cerchiamo le Voci che accenderanno
            la citt&agrave;.
          </p>

          {isSuccess ? (
            <div className="rounded-2xl bg-white dark:bg-zinc-900/60 border border-magenta-200 dark:border-magenta-500/30 p-10 text-center shadow-lg shadow-magenta-500/5">
              <CheckCircle2 className="w-14 h-14 text-magenta-500 mx-auto mb-4" />
              <h2 className="font-montserrat text-2xl font-bold mb-3">
                Candidatura ricevuta
              </h2>
              <p className="font-inter text-slate-600 dark:text-slate-400 mb-8">
                Ti ricontatteremo entro 24 ore.
              </p>
              <Link
                href="/voices"
                className="inline-flex items-center gap-2 px-6 py-3 bg-magenta-500 text-white font-inter font-semibold rounded-xl hover:bg-magenta-600 transition-colors"
              >
                Torna a Voices
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          ) : (
            <div className="rounded-2xl bg-white dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800 p-8 md:p-10 shadow-sm">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-8"
                >
                  {/* FIELD 1 — Socials */}
                  <FormField
                    control={form.control}
                    name="socials"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          I tuoi profili Social (Instagram, TikTok, Facebook)
                          <span className="text-magenta-500"> *</span>
                        </FormLabel>
                        <FormControl>
                          <textarea
                            rows={4}
                            placeholder="Incolla qui i link ai tuoi profili principali (uno per riga)..."
                            className="flex min-h-[100px] w-full rounded-md border border-slate-300 dark:border-zinc-700 bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-slate-400 dark:placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-magenta-500/40 focus-visible:border-magenta-500 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* FIELD 2 — Roles (multi-select checkboxes) */}
                  <FormField
                    control={form.control}
                    name="roles"
                    render={() => (
                      <FormItem>
                        <FormLabel>
                          Cosa ti definisce meglio?
                          <span className="text-magenta-500"> *</span>
                          <span className="ml-1 font-normal text-slate-500 dark:text-slate-400 text-xs">
                            (Scegli una o pi&ugrave; opzioni)
                          </span>
                        </FormLabel>
                        <div className="space-y-2">
                          {ROLE_OPTIONS.map((option) => (
                            <FormField
                              key={option}
                              control={form.control}
                              name="roles"
                              render={({ field }) => {
                                const checked = field.value?.includes(option);
                                return (
                                  <label
                                    className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                                      checked
                                        ? "border-magenta-500 bg-magenta-50 dark:bg-magenta-500/10"
                                        : "border-slate-200 dark:border-zinc-700 hover:border-magenta-300 dark:hover:border-magenta-500/40"
                                    }`}
                                  >
                                    <input
                                      type="checkbox"
                                      checked={checked}
                                      onChange={(e) => {
                                        const next = e.target.checked
                                          ? [...(field.value ?? []), option]
                                          : (field.value ?? []).filter(
                                              (v: string) => v !== option
                                            );
                                        field.onChange(next);
                                      }}
                                      className="mt-1 h-4 w-4 accent-magenta-500"
                                    />
                                    <span className="font-inter text-sm">
                                      {option}
                                    </span>
                                  </label>
                                );
                              }}
                            />
                          ))}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* FIELD 3 — Community */}
                  <FormField
                    control={form.control}
                    name="community"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Parlaci della tua community
                          <span className="text-magenta-500"> *</span>
                        </FormLabel>
                        <FormControl>
                          <textarea
                            rows={4}
                            placeholder="Chi ti segue? Che tipo di impatto hai sulla scena di Palermo? (es. lifestyle, nightlife, food, eventi culturali...)"
                            className="flex min-h-[100px] w-full rounded-md border border-slate-300 dark:border-zinc-700 bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-slate-400 dark:placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-magenta-500/40 focus-visible:border-magenta-500 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* FIELD 4 — Email */}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          E-mail professionale
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

                  {/* FIELD 5 — WhatsApp */}
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
                    <div className="rounded-lg border border-red-200 bg-red-50 dark:bg-red-500/10 dark:border-red-500/30 p-3 text-sm text-red-700 dark:text-red-300">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-magenta-500 text-white font-inter font-semibold rounded-xl hover:bg-magenta-600 transition-all duration-300 shadow-lg shadow-magenta-500/25 hover:shadow-xl hover:shadow-magenta-500/30 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Invio in corso...
                      </>
                    ) : (
                      <>
                        Candidati come Creator
                        <ChevronRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              </Form>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
