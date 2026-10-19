"use client";

import { useState } from "react";
import type { PrenotaTheme } from "@/lib/prenotaTheme";

interface PrenotaEvent {
  id: string;
  title: string;
  description: string | null;
  cover_image_url: string | null;
  event_start_time: string;
  price_free: boolean | null;
  price_from: number | null;
  locationName: string | null;
  locationAddress: string | null;
  listName: string | null;
}

type Step = "intro" | "name" | "done";

const CTA_COLOR = "#E30B0B";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("it-IT", {
    weekday: "long",
    day: "numeric",
    month: "long",
    timeZone: "Europe/Rome",
  });
}

function formatTime(iso: string) {
  return new Date(iso).toLocaleTimeString("it-IT", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Europe/Rome",
  });
}

function priceLabel(event: PrenotaEvent) {
  if (event.price_free) return "Ingresso gratuito";
  if (event.price_from != null) return `Ingresso · ${event.price_from} € · in lista, si paga all'ingresso`;
  return "In lista, si paga all'ingresso";
}

export function PrenotaFlow({ event, slug, soldOut = false, closedLabel = "Sold out", theme = { cta: CTA_COLOR, ctaText: "#FFFFFF" } }: { event: PrenotaEvent; slug: string; soldOut?: boolean; closedLabel?: string; theme?: PrenotaTheme }) {
  const [step, setStep] = useState<Step>("intro");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isAdult, setIsAdult] = useState(false);
  const [phone, setPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const phoneDigits = phone.replace(/\D/g, "");
  const phoneOk = !theme.telefono || (phoneDigits.length >= 8 && phoneDigits.length <= 15);
  const canSubmit = firstName.trim().length > 1 && lastName.trim().length > 1 && isAdult && phoneOk;

  async function handleSubmit() {
    if (!canSubmit || submitting) return;
    setSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch("/api/prenota", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          slug,
          firstName: firstName.trim(),
          lastName: lastName.trim(),
          isAdult,
          ...(theme.telefono ? { phone: phone.trim() } : {}),
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setSubmitError(data.error || "Si è verificato un errore. Riprova.");
        setSubmitting(false);
        return;
      }
      setStep("done");
    } catch {
      setSubmitError("Connessione assente. Riprova.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="relative min-h-screen bg-[#0a090c] text-white">
      {/* Barra di scorrimento dello stesso colore del tasto (Mattia 05/10). */}
      <style>{`::-webkit-scrollbar-thumb{background:${theme.cta}}html{scrollbar-color:${theme.cta} transparent}`}</style>
      {theme.sfondo ? (
        <div className="fixed inset-0 z-0" style={{ background: theme.sfondo }} />
      ) : event.cover_image_url && (
        <>
          <div
            className="fixed inset-[-60px] z-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${event.cover_image_url})`,
              filter: "blur(36px) saturate(1.4) brightness(.38)",
              transform: "scale(1.15)",
            }}
          />
          <div
            className="fixed inset-0 z-0"
            style={{ background: "linear-gradient(rgba(10,10,10,.25),rgba(10,10,10,.7))" }}
          />
        </>
      )}

      <div className="relative z-10 mx-auto max-w-[480px] px-[18px] pb-40 pt-8">
        {step === "intro" && (
          <section>
            {event.cover_image_url && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={event.cover_image_url}
                alt={`Locandina ${event.title}`}
                className="mx-auto mt-1 block w-[78%] max-w-[340px] rounded-2xl shadow-2xl"
              />
            )}
            <h1 className="mt-6 text-4xl font-black tracking-tight">{event.title}</h1>
            {event.description && (
              <p className="mt-1 text-[15px] leading-relaxed text-white/80 line-clamp-3">
                {event.description}
              </p>
            )}

            <div className="mt-6 border-t border-white/10">
              <InfoLine label="Quando" value={`${formatDate(event.event_start_time)} · ${formatTime(event.event_start_time)}`} />
              {event.locationName && (
                <InfoLine
                  label="Dove"
                  value={event.locationName}
                  sub={event.locationAddress || undefined}
                />
              )}
              {event.listName && (
                <InfoLine
                  label={theme.riserva ? "PR" : "Lista"}
                  value={event.listName}
                  // Contattati dagli organizzatori: non si entra dicendo il nome della lista (Mattia, 19/10).
                  sub={theme.telefono ? undefined : "All'ingresso basta dire il nome della lista"}
                />
              )}
              <InfoLine label="Ingresso" value={theme.ingresso ?? priceLabel(event)} sub={theme.ingresso ? undefined : "Nessun pagamento su Crowdia."} />
              {theme.eta && <InfoLine label="Età" value={theme.eta} />}
            </div>
          </section>
        )}

        {step === "name" && (
          <StepShell onBack={() => setStep("intro")}>
            <div className="text-[26px] font-black leading-tight tracking-tight">Come ti chiami?</div>
            <p className="mt-1.5 text-[13px] leading-relaxed text-white/60">
              Nome e cognome, come sul documento.
            </p>
            <input
              className="mt-3 h-[54px] w-full rounded-2xl border border-white/15 bg-black/35 px-4 text-[17px] outline-none focus:border-white/60"
              placeholder="Nome"
              autoComplete="given-name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              className="mt-3 h-[54px] w-full rounded-2xl border border-white/15 bg-black/35 px-4 text-[17px] outline-none focus:border-white/60"
              placeholder="Cognome"
              autoComplete="family-name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label className="mt-4 flex cursor-pointer items-center gap-3 rounded-2xl border border-white/15 bg-black/35 px-4 py-3.5">
              <input
                type="checkbox"
                className="h-5 w-5 shrink-0 accent-white"
                checked={isAdult}
                onChange={(e) => setIsAdult(e.target.checked)}
              />
              <span className="text-[15px] font-bold">Ho {theme.minAge ?? 18} anni o più</span>
            </label>
            {theme.telefono && (
              <>
                <input
                  className="mt-4 h-[54px] w-full rounded-2xl border border-white/15 bg-black/35 px-4 text-[17px] outline-none focus:border-white/60"
                  placeholder="Numero WhatsApp"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <p className="mt-1.5 text-[13px] leading-relaxed text-white/60">
                  Gli organizzatori ti contatteranno qui per darti le modalità di ingresso.
                </p>
              </>
            )}
            {submitError && <p className="mt-3 text-sm text-red-400">{submitError}</p>}
          </StepShell>
        )}

        {step === "done" && (
          <section className="pt-2.5 text-center">
            <div className="mx-auto mt-2.5 mb-1.5 grid h-[74px] w-[74px] place-items-center rounded-full border border-white/40 bg-white/[0.08] text-3xl">
              ✓
            </div>
            <div className="text-[24px] font-black">
              {theme.riserva ? `Ingresso riservato, ${firstName.trim()}!` : `Ci sei, ${firstName.trim()}!`}
            </div>
            <p className="mt-1 text-white/80">
              {theme.riserva ? "Abbiamo ricevuto la tua richiesta." : "Ti abbiamo inserito in lista."}
            </p>
            {event.listName && !theme.telefono && (
              <div className="mt-4 rounded-[22px] border border-white/15 bg-white/[0.06] p-4 text-left backdrop-blur-xl">
                <div className="text-[11.5px] font-extrabold tracking-wider text-white/60">
                  ALL&apos;INGRESSO RICORDATI DI DIRE
                </div>
                <div className="mt-1 text-[24px] font-black">«Lista {event.listName}»</div>
              </div>
            )}
            <div className="mt-4 rounded-[22px] border border-white/15 bg-white/[0.06] p-4 text-left backdrop-blur-xl">
              <div className="text-[11.5px] font-extrabold tracking-wider text-white/60">INGRESSO</div>
              <div className="mt-1 text-[17px] font-extrabold">{theme.ingresso ?? priceLabel(event)}</div>
            </div>
            <div className="mt-4 rounded-[22px] border border-white/15 bg-white/[0.06] p-4 text-left backdrop-blur-xl">
              <div className="text-[11.5px] font-extrabold tracking-wider text-white/60">{event.title}</div>
              <div className="mt-1 text-[17px] font-extrabold">
                {formatDate(event.event_start_time)} · dalle {formatTime(event.event_start_time)}
              </div>
              {event.locationName && (
                <div className="mt-0.5 text-[13.5px] text-white/60">
                  {event.locationName}
                  {event.locationAddress ? ` · ${event.locationAddress}` : ""}
                </div>
              )}
            </div>
            {theme.pagamentoOrganizzatore && (
              <div className="mt-4 rounded-[22px] border border-white/15 bg-white/[0.06] p-4 text-left backdrop-blur-xl">
                <div className="text-[11.5px] font-extrabold tracking-wider text-white/60">
                  {theme.telefono ? "COME ENTRARE" : "PAGAMENTO"}
                </div>
                <div className="mt-1 text-[15px] font-bold leading-snug">
                  {theme.telefono
                    ? "Gli organizzatori ti contatteranno su WhatsApp per darti le modalità di ingresso."
                    : `${event.listName ? `${event.listName} ti contatterà` : "L'organizzatore ti contatterà"} per completare il pagamento e ricevere il tuo ingresso.`}
                </div>
                <p className="mt-2 text-[12.5px] leading-relaxed text-white/60">
                  Il pagamento va direttamente all&apos;organizzatore: Crowdia non vende biglietti e non gestisce
                  pagamenti o rimborsi.
                </p>
                {theme.whatsapp && (
                  <a
                    className="mt-3 flex h-[46px] w-full items-center justify-center rounded-full font-extrabold"
                    style={{ backgroundColor: "#25D366", color: "#0A090C" }}
                    href={`https://wa.me/${theme.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Scrivi su WhatsApp
                  </a>
                )}
              </div>
            )}
            <p className="mt-5 text-left text-[13px] leading-relaxed text-white/60">
              {theme.riserva ? "La prenotazione" : "L'inserimento in lista"} non garantisce l&apos;accesso al locale. La proprietà si riserva il
              diritto di effettuare una selezione all&apos;ingresso.
            </p>
            <p className="mt-3 text-left text-[13px] leading-relaxed text-white/60">
              È richiesto un abbigliamento consono e adeguato al contesto del locale. Non saranno ammessi
              pantaloncini, canottiere, jeans strappati, barbe lunghe o borselli.
            </p>
          </section>
        )}

      </div>

      {(step === "intro" || step === "name") && (
        <div className="fixed inset-x-[10px] bottom-[10px] z-20 mx-auto max-w-[460px] rounded-[26px] border border-white/15 bg-[rgba(15,15,20,.72)] p-3 backdrop-blur-xl">
          <button
            className={`h-[54px] w-full rounded-full font-extrabold text-white ${soldOut ? "cursor-not-allowed tracking-wide uppercase" : "disabled:opacity-45"}`}
            style={{ backgroundColor: soldOut ? "rgba(255,255,255,.14)" : theme.cta, color: soldOut ? "#FFFFFF" : theme.ctaText }}
            disabled={soldOut || (step === "name" && (!canSubmit || submitting))}
            aria-disabled={soldOut}
            onClick={() => {
              if (soldOut) return;
              if (step === "intro") setStep("name");
              else if (step === "name") handleSubmit();
            }}
          >
            {soldOut
              ? closedLabel
              : step === "intro"
              ? (theme.ctaLabel ?? "Mettiti in lista")
              : submitting
                ? "Un attimo…"
                : theme.riserva
                  ? "Conferma"
                  : "Inseriscimi in lista"}
          </button>
        </div>
      )}

      {event.listName && (
        <footer className="relative z-10 mx-auto max-w-[480px] px-[18px] pb-10 text-center text-[11.5px] leading-relaxed text-white/45">
          {theme.riserva
            ? `I dati che inserisci servono solo per la prenotazione di questo evento: li passiamo al PR (${event.listName}) e agli organizzatori, e non vengono usati per altro.`
            : `I dati che inserisci servono solo per la lista di questo evento, gestita da ${event.listName}, e non vengono usati per altro.`}
        </footer>
      )}
    </main>
  );
}

function InfoLine({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div className="flex items-baseline gap-3.5 border-b border-white/10 py-3.5">
      <span className="w-[74px] shrink-0 text-[12px] font-extrabold uppercase tracking-wide text-white/55">
        {label}
      </span>
      <span className="text-[17px] font-bold leading-tight">
        {value}
        {sub && <span className="mt-0.5 block text-[13.5px] font-normal text-white/60">{sub}</span>}
      </span>
    </div>
  );
}

function StepShell({
  children,
  onBack,
}: {
  children: React.ReactNode;
  onBack: () => void;
}) {
  return (
    <section>
      <button className="py-1.5 text-sm font-bold text-white/70" onClick={onBack}>
        ‹ Indietro
      </button>
      {children}
    </section>
  );
}
