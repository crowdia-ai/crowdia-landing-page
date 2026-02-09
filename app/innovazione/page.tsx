import type { Metadata } from "next";
import InnovazionePage from "./InnovazionePage";

export const metadata: Metadata = {
  title: "CROWDIA - Innovazione | AI e Innovazione Sociale",
  description:
    "CROWDIA unisce intelligenza artificiale e scienze sociali per trasformare la scoperta culturale urbana. Tecnologia al servizio dell'innovazione sociale nel Mediterraneo.",
  keywords: [
    "intelligenza artificiale",
    "innovazione sociale",
    "smart city",
    "Horizon Europe",
    "SSH STEM",
    "cultural analytics",
    "social innovation",
    "AI",
    "Palermo",
    "Mediterraneo",
  ],
  openGraph: {
    title: "CROWDIA - AI e Innovazione Sociale",
    description:
      "Tecnologia e scienze sociali per trasformare gli ecosistemi culturali urbani.",
    type: "website",
  },
};

export default function Page() {
  return <InnovazionePage />;
}
