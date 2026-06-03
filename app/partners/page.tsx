"use client";

import { useState } from "react";
import { VideoHero } from "@/components/video-hero";
import { SparkleButton } from "@/components/ui/sparkle-button";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle, Loader2 } from "lucide-react";

export default function PartnersPage() {
  const [formData, setFormData] = useState({
    organizationName: "",
    instagramLink: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "PARTNERS",
          metadata: {
            organizationName: formData.organizationName,
            instagramLink: formData.instagramLink,
            phone: formData.phone,
          },
        }),
      });

      if (!response.ok) throw new Error("Submission failed");
      setIsSuccess(true);
    } catch {
      setError("Si è verificato un errore. Riprova.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen">
      <VideoHero allowOverflow>
        {/* Back Button */}
        <Link
          href="/"
          className="absolute top-8 left-8 flex items-center gap-2 text-white/80 hover:text-white transition-colors z-20"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-inter">Indietro</span>
        </Link>

        {/* Logo in Top Right */}
        <div className="absolute top-8 right-8 flex items-center gap-1 z-20 group cursor-pointer">
          <Link href="/" className="flex items-center gap-1">
            <div className="relative w-10 h-10 md:w-12 md:h-12">
              <div className="absolute inset-0.5 rounded-full bg-primary/8 blur-xl animate-glow" style={{ animationDelay: '1s' }} />
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
            <span className="font-montserrat text-2xl md:text-3xl font-bold text-white drop-shadow-[0_0_8px_hsl(var(--primary)/0.4)]" translate="no">
              CROWDIA
            </span>
          </Link>
        </div>

        <div className="max-w-4xl mx-auto space-y-8 px-4">
          {/* Main Heading */}
          <h1 className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold mb-6 mt-20">
            <span className="text-white">Tu crei l&apos;evento.</span>
            <br />
            <span className="text-primary">Noi portiamo la folla.</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
            Fai parte della rivoluzione. Ottieni il badge &quot;Founding Partner&quot; e garantisciti la priorità su tutti gli eventi futuri.
          </p>

          {/* Form Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-10 border border-white/20 max-w-xl mx-auto">
            {isSuccess ? (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h3 className="font-montserrat text-2xl font-bold text-white mb-2">
                  Richiesta Inviata!
                </h3>
                <p className="text-gray-300">
                  Ti contatteremo presto per discutere la partnership.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="organizationName" className="block text-left font-inter font-medium text-white mb-2">
                    Nome Organizzazione*
                  </label>
                  <input
                    type="text"
                    id="organizationName"
                    required
                    value={formData.organizationName}
                    onChange={(e) => setFormData({ ...formData, organizationName: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-white/30 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-white bg-white/10 backdrop-blur-sm placeholder:text-gray-400"
                    placeholder="Il tuo nome o brand"
                  />
                </div>

                <div>
                  <label htmlFor="instagramLink" className="block text-left font-inter font-medium text-white mb-2">
                    Link Instagram *
                  </label>
                  <input
                    type="url"
                    id="instagramLink"
                    required
                    value={formData.instagramLink}
                    onChange={(e) => setFormData({ ...formData, instagramLink: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-white/30 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-white bg-white/10 backdrop-blur-sm placeholder:text-gray-400"
                    placeholder="https://instagram.com/..."
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-left font-inter font-medium text-white mb-2">
                    Telefono / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-white/30 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-white bg-white/10 backdrop-blur-sm placeholder:text-gray-400"
                    placeholder="+39 ..."
                  />
                </div>

                {error && (
                  <p className="text-red-400 text-sm">{error}</p>
                )}

                <SparkleButton
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Invio in corso...
                    </>
                  ) : (
                    "Richiedi Accesso Partner"
                  )}
                </SparkleButton>
              </form>
            )}
          </div>
        </div>
      </VideoHero>
    </main>
  );
}
