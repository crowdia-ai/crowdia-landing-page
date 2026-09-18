import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Crowdia",
  description: "Come Crowdia raccoglie, utilizza e protegge i tuoi dati personali. Informativa ai sensi del GDPR.",
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
