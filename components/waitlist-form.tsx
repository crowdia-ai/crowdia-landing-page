"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import Link from "next/link";
import { Sparkles, Loader2, MessageCircle } from "lucide-react";

const WHATSAPP_LINK = process.env.NEXT_PUBLIC_WHATSAPP_LINK;

const baseFormSchema = z.object({
  email: z.string().email("Inserisci un indirizzo email valido"),
  name: z.string(),
  consent: z.boolean().refine((v) => v === true, {
    message: "Devi accettare la Privacy Policy per continuare",
  }),
});

type FormData = z.infer<typeof baseFormSchema>;

const getFormSchema = (emailOnly: boolean) => {
  if (emailOnly) {
    return baseFormSchema;
  }
  return baseFormSchema.extend({
    name: z.string().min(2, "Il nome deve contenere almeno 2 caratteri"),
  });
};

interface WaitlistFormProps {
  buttonText?: string;
  source?: string;
  glowButton?: boolean;
  emailOnly?: boolean;
}

export function WaitlistForm({ buttonText = "Unisciti alla Lista d'Attesa", source = "USERS", glowButton = false, emailOnly = false }: WaitlistFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const formSchema = getFormSchema(emailOnly);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name: "",
      consent: false,
    },
  });

  async function onSubmit(values: FormData) {
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: values.email,
          name: values.name,
          source,
          metadata: { consent: values.consent },
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Impossibile unirsi alla lista d\'attesa. Riprova.');
        return;
      }

      setIsSuccess(true);
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      setError('Si è verificato un errore imprevisto. Riprova.');
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSuccess) {
    return (
      <div className="w-full max-w-md mx-auto text-center">
        <p className="font-inter text-white/70 mb-6">
          🎉 Sei nella lista d&apos;attesa! Un ultimo passo per non perderti nulla:
        </p>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-3 bg-magenta-500 hover:bg-magenta-600 text-white font-inter font-bold uppercase tracking-widest py-6 px-8 rounded-xl text-lg transition-all duration-300 shadow-lg shadow-magenta-500/25 hover:shadow-xl hover:shadow-magenta-500/40"
        >
          <MessageCircle className="w-6 h-6" />
          Unisciti al canale WhatsApp
        </a>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {!emailOnly && (
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Nome</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Il tuo nome"
                      className="bg-input border-primary/30 text-foreground placeholder:text-muted-foreground focus:border-primary"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="tua@email.com"
                    className="bg-input border-primary/30 text-foreground placeholder:text-muted-foreground focus:border-primary"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="consent"
            render={({ field }) => (
              <FormItem>
                <label className="flex items-start gap-3 cursor-pointer">
                  <FormControl>
                    <input
                      type="checkbox"
                      checked={field.value}
                      onChange={(e) => field.onChange(e.target.checked)}
                      className="mt-1 h-4 w-4 accent-magenta-500"
                    />
                  </FormControl>
                  <span className="font-inter text-xs text-white/60 leading-relaxed">
                    Ho letto e accetto la{" "}
                    <Link
                      href="/privacy"
                      target="_blank"
                      className="underline hover:text-white"
                    >
                      Privacy Policy
                    </Link>{" "}
                    e acconsento al trattamento dei miei dati.
                  </span>
                </label>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-primary hover:bg-primary/90 text-white font-semibold py-6 text-lg transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] ${glowButton ? 'animate-pulse-glow shadow-[0_0_20px_hsl(var(--primary)/0.6)]' : ''}`}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Iscrizione in corso...
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5 mr-2" />
                {buttonText}
              </>
            )}
          </Button>

          {error && (
            <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-center">
              <p className="text-red-400 font-semibold">{error}</p>
            </div>
          )}
        </form>
      </Form>
    </div>
  );
}
