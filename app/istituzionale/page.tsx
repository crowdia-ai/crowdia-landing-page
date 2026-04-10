import type { Metadata } from "next";
import { IstituzionalePage } from "./IstituzionalePage";

export const metadata: Metadata = {
  title: "CROWDIA - Infrastruttura Digitale per il Territorio",
  description:
    "Crowdia porta la vita sociale dei Comuni siciliani nelle mani delle nuove generazioni e dei visitatori internazionali. Una sinergia a costo zero per l'amministrazione.",
  keywords: [
    "comuni",
    "amministrazione",
    "territorio",
    "Sicilia",
    "eventi",
    "turismo",
    "intelligenza artificiale",
    "Lumio",
    "digitalizzazione",
    "smart city",
  ],
  openGraph: {
    title: "CROWDIA - Infrastruttura Digitale per il Territorio",
    description:
      "L'infrastruttura digitale per la rinascita del territorio siciliano. Collaborazione strategica a costo zero.",
    type: "website",
    locale: "it_IT",
  },
};

export default function Page() {
  return <IstituzionalePage />;
}
