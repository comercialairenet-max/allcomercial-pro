// app/manifest.ts

import type { MetadataRoute } from "next";
import { SITE, getSiteUrl } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  const siteUrl = getSiteUrl();

  return {
    name: SITE.name,
    short_name: SITE.shortName,
    description: SITE.description,
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    icons: [
      {
        src: SITE.branding.favicon,
        sizes: "48x48",
        type: "image/x-icon",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    screenshots: [
      {
        src: `${siteUrl}${SITE.branding.ogImage}`,
        sizes: "1200x630",
        type: "image/png",
        form_factor: "wide",
      },
    ],
  };
}