import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Voices: il programma creator di Crowdia a Palermo",
  description: "Voices è il network di creator che racconta la scena di Palermo dentro Crowdia: profilo verificato, accesso anticipato alle funzioni PRO e i tuoi consigli al centro della mappa.",
};

export default function VoicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
