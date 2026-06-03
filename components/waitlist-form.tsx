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
import { Sparkles, Loader2 } from "lucide-react";

const baseFormSchema = z.object({
  email: z.string().email("Inserisci un indirizzo email valido"),
  name: z.string(),
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
        body: JSON.stringify({ ...values, source }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Impossibile unirsi alla lista d\'attesa. Riprova.');
        return;
      }

      setIsSuccess(true);
      form.reset();

      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setError('Si è verificato un errore imprevisto. Riprova.');
    } finally {
      setIsSubmitting(false);
    }
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

          {isSuccess && (
            <div className="p-4 rounded-lg bg-primary/10 border border-primary/30 text-center">
              <p className="text-primary font-semibold">
                🎉 Successo! Sei nella lista d&apos;attesa!
              </p>
              <p className="text-sm text-gray-400 mt-1">
                Ti avviseremo quando lanceremo.
              </p>
            </div>
          )}
        </form>
      </Form>
    </div>
  );
}
