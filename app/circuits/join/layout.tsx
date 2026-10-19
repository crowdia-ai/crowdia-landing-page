import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Entra nel Circuito Crowdia | Candidatura per locali e organizzatori",
  description: "Compila la candidatura per portare il tuo spazio o i tuoi eventi dentro Crowdia, la piattaforma di scoperta eventi di Palermo.",
};

export default function CircuitsJoinLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
