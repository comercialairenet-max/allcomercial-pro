// app/manifest.ts
import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "AllComercial Online",
    short_name: "AllComercial",
    description: "Catálogo técnico industrial de ventilación, filtración y soluciones industriales.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#093A7A",
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}