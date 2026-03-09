import type { MetadataRoute } from "next"
import { getSiteUrl } from "@/lib/site"

const SITE_URL = getSiteUrl()

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: [
          "/",
          "/catalogo",
          "/catalogo/*",
          "/producto/*",
        ],
        disallow: [
          "/api/",
          "/_next/",
          "/admin/",
          "/private/",
        ],
      },
    ],

    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}