import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Candidati a Voices | Programma creator di Crowdia a Palermo",
  description: "Invia la tua candidatura al programma Voices di Crowdia: per creator, PR e connettori sociali che raccontano Palermo.",
};

export default function VoicesApplyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
