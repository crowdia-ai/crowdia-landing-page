import type { MetadataRoute } from "next";

const BASE = "https://crowdia.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "/", priority: 1.0 },
    { path: "/social", priority: 0.9 },
    { path: "/circuits", priority: 0.9 },
    { path: "/nexus", priority: 0.8 },
    { path: "/istituzionale", priority: 0.8 },
    { path: "/voices", priority: 0.7 },
    { path: "/circuits/join", priority: 0.6 },
    { path: "/voices/apply", priority: 0.6 },
    { path: "/privacy", priority: 0.3 },
  ];
  return routes.map((r) => ({
    url: `${BASE}${r.path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: r.priority,
  }));
}
