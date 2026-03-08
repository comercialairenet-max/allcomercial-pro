export const SITE = {
  name: 'Comercializadora Airenet Industrial',
  shortName: 'Airenet',
  url: 'https://allcomercial-pro.vercel.app',
  domain: 'allcomercial-pro.vercel.app',

  titleDefault: 'Comercializadora Airenet Industrial | Soluciones Industriales',
  description:
    'Catálogo industrial profesional con soluciones en ventilación, filtración, aire comprimido, cabinas de pintura, lámparas infrarrojas y equipos especializados. Cotiza directo por WhatsApp.',

  keywords: [
    'ventilación industrial',
    'filtración industrial',
    'aire comprimido',
    'cabinas de pintura',
    'lámparas infrarrojas',
    'equipos industriales',
    'extractores industriales',
    'filtros industriales',
    'pistolas de pintura',
    'equipos para lavaderos',
    'reparación de carrocerías',
    'Bogotá',
    'Colombia',
    'cotización por WhatsApp',
    'Comercializadora Airenet Industrial',
    'Airenet Industrial',
  ],

  company: {
    legalName: 'Comercializadora Airenet Industrial',
    city: 'Bogotá',
    country: 'Colombia',
  },

  whatsapp: {
    phoneE164: '573053644307',
    phoneDisplay: '+57 305 364 4307',
    defaultMessage: 'Hola, quiero una cotización. ¿Me apoyas por favor?',
    salesMessage: 'Hola, quiero asesoría comercial sobre sus productos.',
    catalogMessage: 'Hola, quiero información sobre el catálogo industrial.',
  },

  branding: {
    primaryColor: '#f97316',
    darkBg: '#0a0a0a',
    logoPath: '/catalogo/logo/logo-airenet-industrial.png',
    ogImage: '/opengraph-image',
    favicon: '/favicon.ico',
  },

  social: {
    whatsapp: 'https://wa.me/573053644307',
  },
} as const

export function getSiteUrl() {
  return SITE.url.replace(/\/$/, '')
}

export function getWhatsappBaseUrl() {
  return `https://wa.me/${SITE.whatsapp.phoneE164}`
}

export function getWhatsappUrl(message?: string) {
  const text = encodeURIComponent(message || SITE.whatsapp.defaultMessage)
  return `${getWhatsappBaseUrl()}?text=${text}`
}