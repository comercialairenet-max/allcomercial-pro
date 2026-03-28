import type { Metadata, Viewport } from "next";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

import {
  SITE,
  getSiteUrl,
  getWhatsappUrl,
  getEmailUrl,
  getPhoneUrl,
} from "@/lib/site";

import Footer from "@/components/layout/Footer";
import BuscadorProductos from "@/components/catalogo/BuscadorProductos";

const siteUrl = getSiteUrl();

export const viewport: Viewport = {
  themeColor: SITE.branding.primaryColor,
};

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
    canonical: siteUrl,
  },

  manifest: "/manifest.webmanifest",

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    type: "website",
    url: siteUrl,
    title: SITE.titleDefault,
    description: SITE.description,
    siteName: SITE.name,
    locale: "es_CO",
    images: [
      {
        url: `${siteUrl}/openGraph-image.jpg`,
        width: 1200,
        height: 630,
        alt: SITE.name,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: SITE.titleDefault,
    description: SITE.description,
    images: [`${siteUrl}/openGraph-image.jpg`],
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const WA = SITE.whatsapp.phoneE164;

  const waDefault = getWhatsappUrl(SITE.whatsapp.defaultMessage);
  const waSales = getWhatsappUrl(SITE.whatsapp.salesMessage);

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.company.legalName,
    url: siteUrl,
    description: SITE.description,
    logo: `${siteUrl}${SITE.branding.logoPath}`,
    sameAs: [SITE.social.whatsapp],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: `+${WA}`,
        contactType: "customer service",
        areaServed: "CO",
        availableLanguage: ["Spanish"],
        email: SITE.company.email,
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.company.city,
      addressCountry: SITE.company.country,
    },
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: siteUrl,
    description: SITE.description,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/buscar?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

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

        <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/90 backdrop-blur">
          <div className="hidden border-b border-white/10 bg-black/30 md:block">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs text-zinc-300">
              <div className="flex items-center gap-4">
                <a href={getPhoneUrl()} className="hover:text-orange-400">
                  Tel: {SITE.company.phoneDisplay}
                </a>

                <a href={getEmailUrl()} className="hover:text-orange-400">
                  {SITE.company.email}
                </a>
              </div>

              <div className="text-zinc-400">Bogotá, Colombia</div>
            </div>
          </div>

          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-12 w-[150px] sm:h-14 sm:w-[220px]">
                <Image
                  src={SITE.branding.logoPath}
                  alt={SITE.name}
                  fill
                  priority
                  sizes="(max-width: 640px) 150px, 220px"
                  className="object-contain object-left"
                />
              </div>
            </Link>

            <nav className="hidden items-center gap-2 text-sm md:flex">
              <Link
                href="/catalogo"
                className="rounded-xl px-3 py-2 text-zinc-200 hover:bg-white/10"
              >
                Catálogo
              </Link>

              <Link
                href="/asesoria"
                className="rounded-xl px-3 py-2 text-zinc-200 hover:bg-white/10"
              >
                Asesoría
              </Link>
            </nav>

            <div className="flex items-center gap-2">
              <Link
                href="/catalogo"
                className="hidden items-center justify-center rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm hover:bg-white/10 sm:inline-flex"
              >
                Ver catálogo
              </Link>

              <a
                href={waDefault}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold text-black"
                style={{ background: "var(--brand)" }}
              >
                WhatsApp
              </a>
            </div>
          </div>

          <div className="border-t border-white/10 bg-black/30 md:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3 text-xs text-zinc-300">
              <a href={getPhoneUrl()} className="hover:text-orange-400">
                Tel: {SITE.company.phoneDisplay}
              </a>

              <a href={getEmailUrl()} className="break-all hover:text-orange-400">
                {SITE.company.email}
              </a>
            </div>
          </div>

          <div className="border-t border-white/10 bg-black/40">
            <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
              <BuscadorProductos />
            </div>
          </div>
        </header>

        <main className="min-h-[60vh]">{children}</main>

        <Footer />

        <a
          href={waDefault}
          target="_blank"
          rel="noreferrer"
          className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/60 px-4 py-3 shadow-lg backdrop-blur hover:bg-black/80"
        >
          <span
            className="grid h-10 w-10 place-items-center rounded-full font-black text-black"
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
  );
}