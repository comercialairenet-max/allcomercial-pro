// app/sitemap.ts

import type { MetadataRoute } from "next";

import {
  categoriasMeta,
  getProductosPorCategoria,
} from "@/data/productos";
import { getSiteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/catalogo`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${siteUrl}/buscar`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/filtracion-industrial`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/asesoria`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/contacto`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const categoryRoutes: MetadataRoute.Sitemap = Object.keys(categoriasMeta).map(
    (slug) => ({
      url: `${siteUrl}/catalogo/${slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    })
  );

  const productRoutes: MetadataRoute.Sitemap = Object.keys(categoriasMeta).flatMap(
    (slug) =>
      getProductosPorCategoria(slug as keyof typeof categoriasMeta).map(
        (producto) => ({
          url: `${siteUrl}/catalogo/${slug}/${producto.id}`,
          lastModified: now,
          changeFrequency: "monthly" as const,
          priority: producto.destacado ? 0.85 : 0.75,
        })
      )
  );

  return [...staticRoutes, ...categoryRoutes, ...productRoutes];
}