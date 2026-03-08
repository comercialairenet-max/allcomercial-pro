import type { Metadata } from 'next'
import Image from 'next/image'
import './globals.css'
import { SITE, getSiteUrl, getWhatsappUrl } from '@/lib/site'

const siteUrl = getSiteUrl()

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: SITE.titleDefault,
    template: `%s | ${SITE.name}`,
  },

  description: SITE.description,

  applicationName: SITE.name,

  keywords: [...SITE.keywords],

  alternates: {
    canonical: '/',
  },

  openGraph: {
    type: 'website',
    url: siteUrl,
    title: SITE.titleDefault,
    description: SITE.description,
    siteName: SITE.name,
    locale: 'es_CO',
    images: SITE.branding.ogImage
      ? [
          {
            url: SITE.branding.ogImage,
            alt: SITE.name,
          },
        ]
      : [],
  },

  twitter: {
    card: 'summary_large_image',
    title: SITE.titleDefault,
    description: SITE.description,
    images: SITE.branding.ogImage ? [SITE.branding.ogImage] : [],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  icons: {
    icon: SITE.branding.favicon,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const WA = SITE.whatsapp.phoneE164
  const waDefault = getWhatsappUrl(SITE.whatsapp.defaultMessage)
  const waSales = getWhatsappUrl(SITE.whatsapp.salesMessage)
  const waSupport = getWhatsappUrl(
    'Hola, quiero información de productos y disponibilidad.'
  )
  const waFormal = getWhatsappUrl(
    'Hola, quiero una cotización formal (empresa/industria).'
  )

  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE.company.legalName,
    url: siteUrl,
    description: SITE.description,
    logo: `${siteUrl}${SITE.branding.logoPath}`,
    sameAs: [SITE.social.whatsapp],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: `+${WA}`,
        contactType: 'customer service',
        areaServed: 'CO',
        availableLanguage: ['Spanish'],
      },
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: SITE.company.city,
      addressCountry: SITE.company.country,
    },
  }

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE.name,
    url: siteUrl,
    description: SITE.description,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteUrl}/catalogo?query={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <html lang="es">
      <body className="min-h-screen bg-zinc-950 text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />

        <style>{`
          :root {
            --brand: ${SITE.branding.primaryColor};
          }
        `}</style>

        <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/80 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
            <a href="/" className="flex items-center gap-3">
              <div className="relative h-12 w-[190px] sm:h-14 sm:w-[240px]">
                <Image
                  src={SITE.branding.logoPath}
                  alt={SITE.name}
                  fill
                  priority
                  className="object-contain object-left"
                  sizes="240px"
                />
              </div>
            </a>

            <nav className="hidden items-center gap-2 text-sm md:flex">
              <a
                href="/catalogo"
                className="rounded-xl px-3 py-2 text-zinc-200 hover:bg-white/10"
              >
                Catálogo
              </a>

              <a
                href={waSales}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl px-3 py-2 text-zinc-200 hover:bg-white/10"
              >
                Asesoría
              </a>
            </nav>

            <div className="flex items-center gap-2">
              <a
                href="/catalogo"
                className="hidden items-center justify-center rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm hover:bg-white/10 sm:inline-flex"
              >
                Ver catálogo
              </a>

              <a
                href={waDefault}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold text-black"
                style={{ background: 'var(--brand)' }}
              >
                WhatsApp
              </a>
            </div>
          </div>
        </header>

        <main>{children}</main>

        <footer className="border-t border-white/10 bg-black/40">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 py-10 md:grid-cols-3">
            <div>
              <div className="relative h-14 w-[220px]">
                <Image
                  src={SITE.branding.logoPath}
                  alt={SITE.name}
                  fill
                  className="object-contain object-left"
                  sizes="220px"
                />
              </div>

              <p className="mt-3 text-sm text-zinc-300">
                Catálogo industrial profesional. Cotizaciones rápidas y asesoría
                técnica para proyectos exigentes.
              </p>

              <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ background: 'var(--brand)' }}
                />
                Respuesta rápida por WhatsApp
              </div>
            </div>

            <div>
              <div className="text-sm font-semibold text-zinc-200">Secciones</div>

              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a className="text-zinc-300 hover:text-white" href="/catalogo">
                    Catálogo
                  </a>
                </li>
                <li>
                  <a
                    className="text-zinc-300 hover:text-white"
                    href={waSupport}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Soporte y asesoría
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <div className="text-sm font-semibold text-zinc-200">Contacto</div>

              <div className="mt-3 space-y-2 text-sm text-zinc-300">
                <div>
                  WhatsApp:{' '}
                  <a
                    className="text-white hover:underline"
                    href={waDefault}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {SITE.whatsapp.phoneDisplay}
                  </a>
                </div>

                <div>
                  {SITE.company.city}, {SITE.company.country}
                </div>

                <div className="pt-2">
                  <a
                    className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold text-black"
                    style={{ background: 'var(--brand)' }}
                    href={waFormal}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Solicitar cotización
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10">
            <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-6 py-4 text-xs text-zinc-400">
              <div>
                © {new Date().getFullYear()} {SITE.name}. Todos los derechos
                reservados.
              </div>

              <div className="flex gap-3">
                <span className="text-zinc-500">Industrial · Pro</span>
              </div>
            </div>
          </div>
        </footer>

        <a
          href={waDefault}
          target="_blank"
          rel="noreferrer"
          className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/60 px-4 py-3 shadow-lg backdrop-blur hover:bg-black/80"
        >
          <span
            className="grid h-10 w-10 place-items-center rounded-full font-black text-black"
            style={{ background: 'var(--brand)' }}
          >
            WA
          </span>

          <div className="leading-tight">
            <div className="text-sm font-semibold">WhatsApp</div>
            <div className="text-xs text-zinc-300">Cotiza en 1 minuto</div>
          </div>
        </a>
      </body>
    </html>
  )
}