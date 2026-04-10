import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  headers: async () => [
    {
      source: "/istituzionale",
      headers: [
        { key: "Content-Language", value: "it" },
      ],
    },
  ],
};

export default nextConfig;
