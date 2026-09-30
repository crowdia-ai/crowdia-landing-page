"use client";

import { useState } from "react";

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

export function PrenotaFlow({ event, slug }: { event: PrenotaEvent; slug: string }) {
  const [step, setStep] = useState<Step>("intro");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isAdult, setIsAdult] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const canSubmit = firstName.trim().length > 1 && lastName.trim().length > 1 && isAdult;

  async function handleSubmit() {
    if (!canSubmit || submitting) return;
    setSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch("/api/prenota", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug, firstName: firstName.trim(), lastName: lastName.trim(), isAdult }),
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
      {event.cover_image_url && (
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
                  label="Lista"
                  value={event.listName}
                  sub="All'ingresso basta dire il nome della lista"
                />
              )}
              <InfoLine label="Ingresso" value={priceLabel(event)} sub="Nessun pagamento su Crowdia." />
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
              <span className="text-[15px] font-bold">Ho 18 anni o più</span>
            </label>
            {submitError && <p className="mt-3 text-sm text-red-400">{submitError}</p>}
          </StepShell>
        )}

        {step === "done" && (
          <section className="pt-2.5 text-center">
            <div className="mx-auto mt-2.5 mb-1.5 grid h-[74px] w-[74px] place-items-center rounded-full border border-white/40 bg-white/[0.08] text-3xl">
              ✓
            </div>
            <div className="text-[24px] font-black">Ci sei, {firstName.trim()}!</div>
            <p className="mt-1 text-white/80">Ti abbiamo inserito in lista.</p>
            {event.listName && (
              <div className="mt-4 rounded-[22px] border border-white/15 bg-white/[0.06] p-4 text-left backdrop-blur-xl">
                <div className="text-[11.5px] font-extrabold tracking-wider text-white/60">
                  ALL&apos;INGRESSO RICORDATI DI DIRE
                </div>
                <div className="mt-1 text-[24px] font-black">«Lista {event.listName}»</div>
              </div>
            )}
            <div className="mt-4 rounded-[22px] border border-white/15 bg-white/[0.06] p-4 text-left backdrop-blur-xl">
              <div className="text-[11.5px] font-extrabold tracking-wider text-white/60">INGRESSO</div>
              <div className="mt-1 text-[17px] font-extrabold">{priceLabel(event)}</div>
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
            <p className="mt-5 text-left text-[13px] leading-relaxed text-white/60">
              L&apos;inserimento in lista non garantisce l&apos;accesso al locale. La proprietà si riserva il
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
            className="h-[54px] w-full rounded-full font-extrabold text-white disabled:opacity-45"
            style={{ backgroundColor: CTA_COLOR }}
            disabled={step === "name" && (!canSubmit || submitting)}
            onClick={() => {
              if (step === "intro") setStep("name");
              else if (step === "name") handleSubmit();
            }}
          >
            {step === "intro"
              ? "Mettiti in lista"
              : submitting
                ? "Un attimo…"
                : "Inseriscimi in lista"}
          </button>
        </div>
      )}

      {event.listName && (
        <footer className="relative z-10 mx-auto max-w-[480px] px-[18px] pb-10 text-center text-[11.5px] leading-relaxed text-white/45">
          I dati che inserisci servono solo per la lista di questo evento, gestita da {event.listName}, e non
          vengono usati per altro.
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
