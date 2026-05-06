import type { Metadata } from "next";
import NexusPage from "./NexusPage";

export const metadata: Metadata = {
  title: "CROWDIA Nexus - Per Hotel, Taxi e Tour Operator | Connetti i tuoi ospiti",
  description:
    "Crowdia Nexus mette l'AI al servizio dell'accoglienza turistica. Per Hotel, BnB, Taxi, NCC, Tour Operator e Guide: offri ai tuoi ospiti una guida intelligente alla vita della città.",
  keywords: [
    "Crowdia Nexus",
    "hospitality AI",
    "turismo intelligente",
    "hotel Palermo",
    "tour operator",
    "accoglienza turistica",
    "AI concierge",
    "eventi Palermo",
    "NCC taxi Palermo",
    "smart tourism",
  ],
  openGraph: {
    title: "CROWDIA Nexus - Connetti i tuoi ospiti al battito della città",
    description:
      "Intelligenza artificiale al servizio dell'accoglienza. Per Hotel, Taxi e Tour Operator: trasforma ogni ospite in un esploratore locale.",
    type: "website",
  },
};

export default function Page() {
  return <NexusPage />;
}
