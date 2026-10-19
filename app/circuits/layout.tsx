import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pubblica i tuoi eventi a Palermo | Il Circuito Crowdia per locali e organizzatori",
  description: "Porta il tuo locale, il tuo spazio o i tuoi eventi davanti a chi sta decidendo dove andare stasera a Palermo. Entra nel Circuito Crowdia.",
};

export default function CircuitsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
