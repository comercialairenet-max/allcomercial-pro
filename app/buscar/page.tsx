// app/buscar/page.tsx

import type { Metadata } from "next";

import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import BuscarPageClient from "@/components/buscar/BuscarPageClient";

type BuscarPageProps = {
  searchParams?: Promise<{
    q?: string;
  }>;
};

export const metadata: Metadata = {
  title: "Buscar productos",
  description:
    "Busca productos dentro de todo el catálogo industrial por nombre, código, línea, categoría o aplicación.",
  alternates: {
    canonical: "/buscar",
  },
  openGraph: {
    title: "Buscar productos",
    description:
      "Explora el catálogo industrial con una búsqueda global por nombre, código, línea, categoría o aplicación.",
    url: "/buscar",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function BuscarPage({ searchParams }: BuscarPageProps) {
  const params = (await searchParams) ?? {};
  const initialQuery = typeof params.q === "string" ? params.q : "";

  return (
    <>
      <SiteHeader />
      <BuscarPageClient initialQuery={initialQuery} />
      <SiteFooter />
    </>
  );
}