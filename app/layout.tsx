// app/layout.tsx

import type { Metadata } from "next";
import "./globals.css";

import { SITE } from "@/lib/site";
import SiteShell from "@/components/layout/SiteShell";

export const metadata: Metadata = {
  title: SITE.titleDefault,
  description: SITE.description,
  keywords: [...SITE.keywords],
  metadataBase: new URL(SITE.url),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: SITE.titleDefault,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: SITE.branding.ogImage,
      },
    ],
  },
  icons: {
    icon: SITE.branding.favicon,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="bg-white text-slate-900 antialiased">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}