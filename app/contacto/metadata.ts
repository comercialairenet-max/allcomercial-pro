// app/contacto/metadata.ts

import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: `Contacto | ${SITE.name}`,
  description:
    "Canal de contacto comercial para consultas, orientación sobre categorías, validación de referencias y solicitud de cotización.",
  alternates: {
    canonical: "/contacto",
  },
  openGraph: {
    title: `Contacto | ${SITE.name}`,
    description:
      "Contacto comercial para consulta de portafolio, orientación técnica y solicitud de cotización.",
    url: "/contacto",
  },
};