import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { getCategoriaBySlug } from "@/lib/catalogo";
import { SITE } from "@/lib/site";
import { getProductoById } from "@/data/productos";

import GaleriaProducto from "@/components/catalogo/GaleriaProducto";

type ProductoPageProps = {
  params: Promise<{
    slug: string;
    id: string;
  }>;
};

const WA = SITE?.whatsapp?.phoneE164 || "573053644307";

function waLink(text: string) {
  return `https://wa.me/${WA}?text=${encodeURIComponent(text)}`;
}

function bestCategoryFallbackImage(cat: {
  heroImage?: string;
  items?: Array<{ imagen?: string }>;
}) {
  if (cat?.heroImage) return cat.heroImage;
  const first = (cat?.items || []).find((x) => x?.imagen)?.imagen;
  return first || "/productos/placeholder.jpeg";
}

export async function generateMetadata({
  params,
}: ProductoPageProps): Promise<Metadata> {

  const { slug, id } = await params;

  const categoria = getCategoriaBySlug(slug);
  const item = getProductoById(id);

  if (!categoria || !item || item.categoria !== slug) {
    return { title: "Producto no encontrado" };
  }

  const title = `${item.nombre} | ${categoria.title}`;

  const description =
    item.descripcion ||
    `Consulta ${item.nombre} en la categoría ${categoria.title}.`;

  const image =
    item.imagen || categoria.heroImage || "/productos/placeholder.jpeg";

  return {
    title,
    description,
    keywords: [
      item.nombre,
      categoria.title,
      "equipos industriales",
      "ventilación industrial",
      "filtración industrial",
      "aire comprimido",
    ],
    alternates: {
      canonical: `/catalogo/${slug}/${id}`,
    },
    openGraph: {
      title,
      description,
      url: `/catalogo/${slug}/${id}`,
      images: [
        {
          url: image,
          alt: item.nombre,
        },
      ],
    },
  };
}

export default async function ProductoPage({ params }: ProductoPageProps) {

  const { slug, id } = await params;

  const categoria = getCategoriaBySlug(slug);
  if (!categoria) notFound();

  const item = getProductoById(id);
  if (!item) notFound();

  if (item.categoria !== slug) notFound();

  const catFallback = bestCategoryFallbackImage(categoria);
  const principal = item.imagen || catFallback;

  const gallery =
    item.gallery && item.gallery.length > 0
      ? item.gallery
      : [principal];

  const uniqueGallery = Array.from(new Set(gallery.filter(Boolean)));

  const msg = `Hola, quiero cotizar: ${item.nombre} (${categoria.title}).`;
  const msgFicha = `Hola, quiero ficha técnica completa de: ${item.nombre} (${categoria.title}).`;
  const msgAsesoria = `Hola, necesito asesoría para elegir la referencia adecuada de ${item.nombre}.`;

  const relacionados = (categoria.items || [])
    .filter((x) => x.id !== item.id)
    .slice(0, 4);

  const siteUrl = (
    SITE?.url || "https://allcomercial-pro.vercel.app"
  ).replace(/\/$/, "");

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",

    "@id": `${siteUrl}/catalogo/${slug}/${id}#product`,

    name: item.nombre,

    image: uniqueGallery.map((img) =>
      img.startsWith("http") ? img : `${siteUrl}${img}`
    ),

    description:
      item.descripcion ||
      `Producto industrial ${item.nombre} de la categoría ${categoria.title}.`,

    sku: item.codigo || item.id,

    brand: {
      "@type": "Brand",
      name: item.marca || SITE?.name || "Comercializadora Airenet Industrial",
    },

    category: categoria.title,

    url: `${siteUrl}/catalogo/${slug}/${id}`,

    offers: {
      "@type": "Offer",

      url: `${siteUrl}/catalogo/${slug}/${id}`,

      priceCurrency: "COP",

      availability:
        item.stock > 0
          ? "https://schema.org/InStock"
          : "https://schema.org/OutOfStock",

      seller: {
        "@type": "Organization",
        name: SITE?.company?.legalName || SITE?.name,
      },
    },
  };

  return (
    <main className="min-h-screen bg-neutral-100 text-neutral-900">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd),
        }}
      />

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">

        {/* Breadcrumb */}
        <div className="text-sm text-neutral-500">

          <Link href="/catalogo">Catálogo</Link>
          <span className="mx-2">/</span>

          <Link href={`/catalogo/${categoria.slug}`}>
            {categoria.title}
          </Link>

          <span className="mx-2">/</span>

          <span className="text-neutral-800">
            {item.nombre}
          </span>

        </div>

        <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-2">

          {/* GALERIA */}
          <GaleriaProducto
            imagenes={uniqueGallery}
            nombre={item.nombre}
          />

          {/* INFORMACION */}
          <div>

            <h1 className="text-3xl font-bold md:text-4xl">
              {item.nombre}
            </h1>

            <p className="mt-4 text-neutral-600">
              {item.descripcion || "Producto industrial con soporte técnico."}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">

              <span className="tag">Categoría: {categoria.title}</span>

              {item.codigo && (
                <span className="tag">Código: {item.codigo}</span>
              )}

              {item.marca && (
                <span className="tag">Marca: {item.marca}</span>
              )}

              <span className="tag">Stock: {item.stock}</span>

            </div>

            <div className="mt-6 rounded-3xl border border-neutral-200 bg-white p-5">

              <h2 className="font-semibold">
                Precio y disponibilidad
              </h2>

              <p className="mt-2 text-sm text-neutral-600">
                Cotización personalizada según referencia.
              </p>

            </div>

            <div className="mt-6 flex flex-wrap gap-3">

              <a href={waLink(msg)} target="_blank" className="btn-orange">
                Cotizar por WhatsApp
              </a>

              <a href={waLink(msgFicha)} target="_blank" className="btn-outline">
                Solicitar ficha técnica
              </a>

              <a href={waLink(msgAsesoria)} target="_blank" className="btn-light">
                Asesoría técnica
              </a>

            </div>

          </div>

        </div>

        {/* RELACIONADOS */}

        {relacionados.length > 0 && (

          <section className="mt-14">

            <h2 className="text-2xl font-bold">
              Más en {categoria.title}
            </h2>

            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

              {relacionados.map((r) => {

                const rimg = r.imagen || catFallback;

                return (

                  <Link
                    key={r.id}
                    href={`/catalogo/${categoria.slug}/${r.id}`}
                    className="product-card"
                  >

                    <div className="relative aspect-[4/3] bg-neutral-100">

                      <Image
                        src={rimg}
                        alt={r.nombre}
                        fill
                        className="object-contain p-3"
                      />

                    </div>

                    <div className="p-4">

                      <div className="font-semibold">
                        {r.nombre}
                      </div>

                      <div className="text-sm text-neutral-600">
                        {r.descripcion || "Cotización inmediata."}
                      </div>

                    </div>

                  </Link>

                );

              })}

            </div>

          </section>

        )}

      </div>

    </main>
  );
}