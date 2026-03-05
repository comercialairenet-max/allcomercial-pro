import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE?.name || "AllComercial Online",
    short_name: "AllComercial",
    description:
      "Catálogo industrial profesional: ventilación, filtración, aire comprimido, cabinas de pintura y equipos especializados.",
    start_url: "/",
    display: "standalone",
    background_color: "#09090b", // zinc-950
    theme_color: "#FF7A00",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}