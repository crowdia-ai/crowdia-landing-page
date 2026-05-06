import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  // Italian is the canonical language across all routes. Sending Content-Language: it
  // (combined with <html lang="it"> in app/layout.tsx) tells Chrome's auto-translate
  // to offer translation for non-Italian-speaking visitors on every page.
  headers: async () => [
    {
      source: "/:path*",
      headers: [{ key: "Content-Language", value: "it" }],
    },
  ],
};

export default nextConfig;
