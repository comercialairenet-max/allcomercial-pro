// lib/site.ts

export const SITE = {
  name: "Allcomercial Online",
  shortName: "Allcomercial",

  url: "https://www.allcomercialonline.com",
  domain: "allcomercialonline.com",

  titleDefault: "Allcomercial Online | Soluciones Industriales",
  description:
    "Portafolio industrial orientado a soluciones en filtración, ventilación, aire comprimido, cabinas de pintura y aplicaciones técnicas. Consulta categorías, valida referencias y cotiza por WhatsApp.",

  keywords: [
    "soluciones industriales",
    "ventilación industrial",
    "filtración industrial",
    "aire comprimido",
    "cabinas de pintura",
    "lámparas infrarrojas",
    "equipos industriales",
    "extractores industriales",
    "filtros industriales",
    "pistolas de pintura",
    "equipos para lavaderos",
    "reparación de carrocerías",
    "cotizar ventilación industrial",
    "cotizar filtros industriales",
    "proveedor de filtración industrial",
    "proveedor de ventilación industrial",
    "catálogo industrial",
    "referencias industriales",
    "cotización por WhatsApp",
    "Bogotá",
    "Colombia",
    "Allcomercial Online",
    "Comercializadora Airenet Industrial",
    "Airenet Industrial",
    "cabinas de pintura bogotá",
    "filtros industriales bogotá",
    "ventilación industrial bogotá",
    "proveedor industrial colombia",
  ],

  company: {
    brandName: "Allcomercial Online",
    legalName: "Comercializadora Airenet Industrial",
    city: "Bogotá",
    country: "Colombia",
    email: "comercial.airenet@gmail.com",
    phoneDisplay: "+57 305 364 4307",
    phoneRaw: "3053644307",
    phoneE164: "573053644307",
  },

  whatsapp: {
    phoneE164: "573053644307",
    phoneDisplay: "+57 305 364 4307",

    defaultMessage:
      "Hola, quiero información y cotización sobre sus soluciones industriales.",

    salesMessage:
      "Hola, quiero asesoría comercial sobre sus productos.",

    catalogMessage:
      "Hola, quiero información sobre el catálogo industrial.",

    solutionsMessage:
      "Hola, quiero ayuda para identificar la solución industrial adecuada.",

    quotationMessage:
      "Hola, quiero solicitar una cotización.",

    referenceValidationMessage:
      "Hola, quiero validar una referencia o código del catálogo.",

    categoryHelpMessage:
      "Hola, quiero orientación sobre una categoría o línea del catálogo.",
  },

  cta: {
    primary: "Consultar por WhatsApp",
    secondary: "Ver catálogo",
    solutions: "Explorar soluciones",
    quotation: "Solicitar cotización",
  },

  branding: {
    primaryColor: "#0E56B5",
    secondaryColor: "#19B5F1",
    softBlue: "#EAF6FE",
    borderSoft: "#BFE8FB",

    whatsappColor: "#25D366",
    whatsappHover: "#1EBE5D",

    darkBg: "#07142F",
    darkPanel: "#0B4A9A",
    textDark: "#1F2D3D",

    logoPath: "/logo-airenet.png",
    ogImage: "/openGraph-image.jpg",
    favicon: "/favicon.ico",
  },

  social: {
    whatsapp: "https://wa.me/573053644307",
    email: "mailto:comercial.airenet@gmail.com",
  },

  navigation: {
    main: [
      { href: "/", label: "Inicio" },
      { href: "/soluciones", label: "Soluciones" },
      { href: "/catalogo", label: "Catálogo" },
      { href: "/nosotros", label: "Nosotros" },
      { href: "/contacto", label: "Contacto" },
    ],
    solutions: [
      {
        href: "/soluciones/cabinas-de-pintura",
        label: "Cabinas de pintura",
      },
      {
        href: "/soluciones/hvac-ventilacion",
        label: "HVAC y ventilación",
      },
      {
        href: "/soluciones/aire-limpio-hospitalario",
        label: "Aire limpio",
      },
      {
        href: "/soluciones/control-olores-gases",
        label: "Olores y gases",
      },
      {
        href: "/soluciones/control-polvo-industrial",
        label: "Control de polvo",
      },
    ],
  },
} as const;

/* ============================================================================
   URL HELPERS
============================================================================ */

export function getSiteUrl() {
  return SITE.url.replace(/\/$/, "");
}

export function getCanonicalUrl(path = "/") {
  const base = getSiteUrl();
  const safePath = path.startsWith("/") ? path : `/${path}`;
  return `${base}${safePath}`;
}

export function getWhatsappBaseUrl() {
  return `https://wa.me/${SITE.whatsapp.phoneE164}`;
}

export function getWhatsappUrl(message?: string) {
  const text = encodeURIComponent(message || SITE.whatsapp.defaultMessage);
  return `${getWhatsappBaseUrl()}?text=${text}`;
}

export function getWhatsappSalesUrl() {
  return getWhatsappUrl(SITE.whatsapp.salesMessage);
}

export function getWhatsappCatalogUrl() {
  return getWhatsappUrl(SITE.whatsapp.catalogMessage);
}

export function getWhatsappSolutionsUrl() {
  return getWhatsappUrl(SITE.whatsapp.solutionsMessage);
}

export function getWhatsappQuotationUrl() {
  return getWhatsappUrl(SITE.whatsapp.quotationMessage);
}

export function getWhatsappReferenceValidationUrl() {
  return getWhatsappUrl(SITE.whatsapp.referenceValidationMessage);
}

export function getWhatsappCategoryHelpUrl() {
  return getWhatsappUrl(SITE.whatsapp.categoryHelpMessage);
}

export function getEmailUrl() {
  return `mailto:${SITE.company.email}`;
}

export function getPhoneUrl() {
  return `tel:+57${SITE.company.phoneRaw}`;
}

/* ============================================================================
   DISPLAY HELPERS
============================================================================ */

export function getBrandName() {
  return SITE.company.brandName;
}

export function getLegalName() {
  return SITE.company.legalName;
}

export function getLocationLabel() {
  return `${SITE.company.city}, ${SITE.company.country}`;
}

/* ============================================================================
   SEO / OG HELPERS
============================================================================ */

export function getOgImageUrl() {
  return getCanonicalUrl(SITE.branding.ogImage);
}

export function getFaviconUrl() {
  return getCanonicalUrl(SITE.branding.favicon);
}