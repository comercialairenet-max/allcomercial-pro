import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { CATEGORIES } from "@/lib/catalogo";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = (SITE?.url || "https://example.com").replace(/\/$/, "");
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${base}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/catalogo`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  const categoryRoutes: MetadataRoute.Sitemap = (CATEGORIES || []).map((c) => ({
    url: `${base}/catalogo/${c.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...categoryRoutes];
}