import type { Metadata } from 'next'
import './globals.css'

const SITE = {
  name: 'AllComercial Online',
  url: 'https://allcomercial-pro.vercel.app',
  description:
    'Catálogo industrial profesional: ventilación, filtración, aire comprimido, cabinas de pintura y equipos especializados. Cotiza directo por WhatsApp.',
  whatsapp: {
    phoneE164: '573053644307',
    defaultMessage: 'Hola, quiero una cotización. ¿Me apoyas por favor?',
  },
}

const siteUrl = SITE.url.replace(/\/$/, '')

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: 'AllComercial Online | Soluciones Industriales',
    template: '%s | AllComercial Online',
  },

  description: SITE.description,

  applicationName: SITE.name,

  keywords: [
    'ventilación industrial',
    'filtración industrial',
    'aire comprimido',
    'cabinas de pintura',
    'lámparas infrarrojas',
    'equipos industriales',
    'Bogotá',
    'cotización WhatsApp',
    'AllComercial',
  ],

  alternates: {
    canonical: '/',
  },

  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'AllComercial Online | Soluciones Industriales',
    description: SITE.description,
    siteName: SITE.name,
    locale: 'es_CO',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'AllComercial Online | Soluciones Industriales',
    description: SITE.description,
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
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const WA = SITE.whatsapp.phoneE164
  const waText = encodeURIComponent(SITE.whatsapp.defaultMessage)

  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE.name,
    url: siteUrl,
    description: SITE.description,
    logo: `${siteUrl}/catalogo/logo/comercializadoraindustrialairenet-2-png.png`,
    sameAs: [`https://wa.me/${WA}`],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: `+${WA}`,
        contactType: 'customer service',
        areaServed: 'CO',
        availableLanguage: ['Spanish'],
      },
    ],
  }

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE.name,
    url: siteUrl,
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
            --brand: #FF7A00;
          }
        `}</style>

        <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/80 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
            <a href="/" className="flex items-center gap-3">
              <span
                className="grid h-10 w-10 place-items-center rounded-xl font-black text-black"
                style={{ background: 'var(--brand)' }}
                aria-label="AllComercial"
              >
                AC
              </span>
              <div className="leading-tight">
                <div className="text-base font-semibold">AllComercial Online</div>
                <div className="text-xs text-zinc-300">
                  Soluciones Industriales · Bogotá
                </div>
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
                href={`https://wa.me/${WA}?text=${encodeURIComponent(
                  'Hola, quiero asesoría comercial. ¿Me ayudas por favor?'
                )}`}
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
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm hover:bg-white/10"
              >
                Ver catálogo
              </a>

              <a
                href={`https://wa.me/${WA}?text=${waText}`}
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
              <div className="text-lg font-semibold">AllComercial Online</div>
              <p className="mt-2 text-sm text-zinc-300">
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
                    href={`https://wa.me/${WA}?text=${encodeURIComponent(
                      'Hola, quiero información de productos y disponibilidad.'
                    )}`}
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
                    href={`https://wa.me/${WA}?text=${waText}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    +57 305 364 4307
                  </a>
                </div>
                <div>Bogotá, Colombia</div>

                <div className="pt-2">
                  <a
                    className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold text-black"
                    style={{ background: 'var(--brand)' }}
                    href={`https://wa.me/${WA}?text=${encodeURIComponent(
                      'Hola, quiero una cotización formal (empresa/industria).'
                    )}`}
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
                © {new Date().getFullYear()} AllComercial Online. Todos los
                derechos reservados.
              </div>
              <div className="flex gap-3">
                <span className="text-zinc-500">Industrial · Pro</span>
              </div>
            </div>
          </div>
        </footer>

        <a
          href={`https://wa.me/${WA}?text=${waText}`}
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