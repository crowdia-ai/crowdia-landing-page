import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import Script from "next/script";
import { ThemeProvider } from "@/components/providers/theme-provider";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://crowdia.app'),
  title: "CROWDIA - Scopri la Scena Sociale della Tua Città",
  description:
    "Trasforma il modo in cui scopri e vivi gli eventi nella tua città. CROWDIA è il tuo concierge sociale per la vita notturna, l'intrattenimento e il networking. Unisciti alla lista d'attesa ora.",
  keywords: [
    "eventi",
    "vita notturna",
    "sociale",
    "intrattenimento",
    "scopri eventi",
    "vita cittadina",
    "scoperta eventi",
    "Palermo",
    "Italia",
    "piattaforma sociale",
    "app eventi",
  ],
  authors: [{ name: "CROWDIA" }],
  creator: "CROWDIA",
  publisher: "CROWDIA",
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "https://crowdia.app",
    title: "CROWDIA - Scopri la Scena Sociale della Tua Città",
    description:
      "Il tuo concierge sociale per la vita notturna, l'intrattenimento e il networking. In arrivo presto a Palermo.",
    siteName: "CROWDIA",
    images: [
      {
        url: "/crowdia-logo-icon-transparent.png",
        width: 1200,
        height: 630,
        alt: "CROWDIA Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CROWDIA - Scopri la Scena Sociale della Tua Città",
    description:
      "Il tuo concierge sociale per la vita notturna, l'intrattenimento e il networking. In arrivo presto.",
    images: ["/crowdia-logo-icon-transparent.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/android-chrome-512x512.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" suppressHydrationWarning>
      <body
        className={`${montserrat.variable} ${inter.variable} font-inter antialiased`}
      >
        <ThemeProvider defaultTheme="dark">
          {children}
        </ThemeProvider>
        {process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID && (
          <Script
            src={`${process.env.NEXT_PUBLIC_UMAMI_HOST ?? 'https://media-server.tail0af452.ts.net:10000'}/script.js`}
            data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  );
}
