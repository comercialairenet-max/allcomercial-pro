// app/sitemap.ts
import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import {
  getCategoriasConProductos,
  getProductosPorCategoria,
} from "@/data/productos";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE.url.replace(/\/+$/, "");
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/catalogo`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/soluciones`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/asesoria`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contacto`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const categoriasData = getCategoriasConProductos();

  const categorias = categoriasData.map((categoria) => ({
    url: `${baseUrl}/catalogo/${categoria.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  const productos = categoriasData.flatMap((categoria) =>
    getProductosPorCategoria(
      categoria.slug as Parameters<typeof getProductosPorCategoria>[0]
    ).map((producto) => ({
      url: `${baseUrl}/catalogo/${producto.categoria}/${producto.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.75,
    }))
  );

  return [...staticRoutes, ...categorias, ...productos];
}