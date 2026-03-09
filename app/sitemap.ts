import type { MetadataRoute } from "next"
import { CATEGORIES } from "@/lib/catalogo"
import { productos } from "@/data/productos"
import { getSiteUrl } from "@/lib/site"

const SITE_URL = getSiteUrl()

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  /* =========================
     RUTAS ESTÁTICAS
  ========================= */

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/catalogo`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ]

  /* =========================
     CATEGORÍAS
  ========================= */

  const categoryRoutes: MetadataRoute.Sitemap = CATEGORIES.map((category) => ({
    url: `${SITE_URL}/catalogo/${category.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }))

  /* =========================
     PRODUCTOS
  ========================= */

  const productRoutes: MetadataRoute.Sitemap = productos.map((producto) => ({
    url: `${SITE_URL}/catalogo/${producto.categoria}/${producto.id}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: producto.destacado ? 0.85 : 0.7,

    images: producto.imagen
      ? [`${SITE_URL}${producto.imagen}`]
      : [],
  }))

  /* =========================
     ELIMINAR DUPLICADOS
  ========================= */

  const routes = [
    ...staticRoutes,
    ...categoryRoutes,
    ...productRoutes,
  ]

  const unique = Array.from(
    new Map(routes.map((r) => [r.url, r])).values()
  )

  return unique
}