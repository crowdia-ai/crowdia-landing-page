import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eventi a Palermo stasera: cosa fare e dove andare | Crowdia",
  description: "Scopri in tempo reale eventi, locali e serate a Palermo e provincia. Crowdia ti consiglia cosa fare stasera in base ai tuoi gusti. Accesso anticipato aperto.",
};

export default function SocialLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
