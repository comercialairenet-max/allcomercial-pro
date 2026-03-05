import type { Metadata } from 'next'
import './globals.css'

const siteUrl = (SITE?.url || "https://example.com").replace(/\/$/, "");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "AllComercial Online | Soluciones Industriales",
    template: `%s | AllComercial Online`,
  },

  description:
    "Catálogo industrial profesional: ventilación, filtración, aire comprimido, cabinas de pintura y equipos especializados. Cotiza directo por WhatsApp.",

  applicationName: SITE?.name || "AllComercial Online",

  keywords: [
    "ventilación industrial",
    "filtración industrial",
    "aire comprimido",
    "cabinas de pintura",
    "lámparas infrarrojas",
    "equipos industriales",
    "Bogotá",
    "cotización WhatsApp",
    "AllComercial",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: "/",
    title: "AllComercial Online | Soluciones Industriales",
    description:
      "Catálogo industrial profesional. Cotiza por WhatsApp. Atención técnica y soporte comercial.",
    siteName: SITE?.name || "AllComercial Online",
    locale: "es_CO",
  },

  twitter: {
    card: "summary_large_image",
    title: "AllComercial Online | Soluciones Industriales",
    description:
      "Catálogo industrial profesional. Cotiza por WhatsApp. Atención técnica y soporte comercial.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const WA = SITE?.whatsapp?.phoneE164 || "573053644307";
  const waText = encodeURIComponent(
    SITE?.whatsapp?.defaultMessage ||
      "Hola, quiero una cotización. ¿Me apoyas por favor?"
  );

  return (
    <html lang="es">
      <body className="min-h-screen bg-zinc-950 text-white">
        {/* Brand tokens */}
        <style>{`
          :root {
            --brand: #FF7A00;
          }
        `}</style>

        {/* TOP BAR */}
        <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/80 backdrop-blur">
          <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between gap-4">
            {/* Brand */}
            <a href="/" className="flex items-center gap-3">
              <span
                className="h-10 w-10 rounded-xl grid place-items-center font-black text-black"
                style={{ background: "var(--brand)" }}
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

            {/* Nav */}
            <nav className="hidden md:flex items-center gap-2 text-sm">
              <a
                href="/catalogo"
                className="rounded-xl px-3 py-2 text-zinc-200 hover:bg-white/10"
              >
                Catálogo
              </a>
              <a
                href={`https://wa.me/${WA}?text=${encodeURIComponent(
                  "Hola, quiero asesoría comercial. ¿Me ayudas por favor?"
                )}`}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl px-3 py-2 text-zinc-200 hover:bg-white/10"
              >
                Asesoría
              </a>
            </nav>

            {/* CTA */}
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
                className="inline-flex items-center justify-center rounded-xl text-black font-semibold px-4 py-2 text-sm"
                style={{ background: "var(--brand)" }}
              >
                WhatsApp
              </a>
            </div>
          </div>
        </header>

        {/* CONTENT */}
        <main>{children}</main>

        {/* FOOTER */}
        <footer className="border-t border-white/10 bg-black/40">
          <div className="mx-auto max-w-6xl px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-lg font-semibold">AllComercial Online</div>
              <p className="text-sm text-zinc-300 mt-2">
                Catálogo industrial profesional. Cotizaciones rápidas y asesoría
                técnica para proyectos exigentes.
              </p>

              <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ background: "var(--brand)" }}
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
                      "Hola, quiero información de productos y disponibilidad."
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
              <div className="mt-3 text-sm text-zinc-300 space-y-2">
                <div>
                  WhatsApp:{" "}
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
                    className="inline-flex items-center justify-center rounded-xl text-black font-semibold px-4 py-2 text-sm"
                    style={{ background: "var(--brand)" }}
                    href={`https://wa.me/${WA}?text=${encodeURIComponent(
                      "Hola, quiero una cotización formal (empresa/industria)."
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
            <div className="mx-auto max-w-6xl px-6 py-4 text-xs text-zinc-400 flex flex-wrap items-center justify-between gap-2">
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

        {/* FLOATING WHATSAPP BUTTON */}
        <a
          href={`https://wa.me/${WA}?text=${waText}`}
          target="_blank"
          rel="noreferrer"
          className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full px-4 py-3 shadow-lg border border-white/10 bg-black/60 backdrop-blur hover:bg-black/80"
        >
          <span
            className="h-10 w-10 rounded-full grid place-items-center text-black font-black"
            style={{ background: "var(--brand)" }}
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