import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getCategoriaBySlug } from "@/lib/catalogo";
import { SITE } from "@/lib/site";
import { getProductoById } from "@/data/productos";
import ProductGallery from "./ProductGallery";

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
  const { slug, id } = await params

  const categoria = getCategoriaBySlug(slug)
  const item = getProductoById(id)

  if (!categoria || !item || item.categoria !== slug) {
    return {
      title: 'Producto no encontrado',
    }
  }

  const title = `${item.nombre} | ${categoria.title}`
  const description =
    item.descripcion ||
    `Consulta ${item.nombre} en la categoría ${categoria.title}. Ficha técnica, imágenes y cotización.`

  const image = item.imagen || categoria.heroImage || '/productos/placeholder.jpeg'

  return {
    title,
    description,
    alternates: {
      canonical: `/catalogo/${slug}/${id}`,
    },
    openGraph: {
      title,
      description,
      url: `/catalogo/${slug}/${id}`,
      images: image
        ? [
            {
              url: image,
              alt: item.nombre,
            },
          ]
        : [],
    },
  }
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
      : principal
        ? [principal]
        : ["/productos/placeholder.jpeg"];

  const uniqueGallery = Array.from(new Set(gallery.filter(Boolean)));

  const msg = `Hola, quiero cotizar: ${item.nombre} (${categoria.title}).`;

  const relacionados = (categoria.items || [])
    .filter((x) => x.id !== item.id)
    .slice(0, 4);

  return (
    <main className="min-h-screen bg-neutral-100 text-neutral-900">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="text-sm text-neutral-500">
          <Link href="/catalogo" className="hover:text-neutral-900">
            Catálogo
          </Link>
          <span className="mx-2">/</span>
          <Link
            href={`/catalogo/${categoria.slug}`}
            className="hover:text-neutral-900"
          >
            {categoria.title}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-neutral-800">{item.nombre}</span>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <ProductGallery images={uniqueGallery} alt={item.nombre} />

          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-medium text-orange-700">
              <span className="h-2 w-2 rounded-full bg-orange-500" />
              Ficha técnica
            </div>

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">
              {item.nombre}
            </h1>

            <p className="mt-4 text-base leading-7 text-neutral-600">
              {item.descripcion ||
                "Producto industrial con soporte técnico y cotización inmediata."}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-sm text-neutral-700">
                Categoría: {categoria.title}
              </span>

              {item.codigo && (
                <span className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-sm text-neutral-700">
                  Código: {item.codigo}
                </span>
              )}

              {item.marca && (
                <span className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-sm text-neutral-700">
                  Marca: {item.marca}
                </span>
              )}

              <span className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-sm text-neutral-700">
                Stock: {item.stock}
              </span>
            </div>

            {typeof item.precio === "number" && (
              <div className="mt-6">
                <div className="text-sm text-neutral-500">
                  Precio de referencia
                </div>
                <div className="mt-1 text-3xl font-bold text-neutral-900">
                  ${item.precio.toLocaleString("es-CO")}
                </div>
              </div>
            )}

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={waLink(msg)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-2xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
              >
                Cotizar por WhatsApp
              </a>

              <a
                href={waLink(
                  `Hola, quiero ficha técnica completa de: ${item.nombre} (${categoria.title}).`
                )}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-2xl border border-neutral-300 bg-white px-6 py-3 font-medium text-neutral-800 transition hover:bg-neutral-50"
              >
                Solicitar ficha
              </a>
            </div>

            {item.especificaciones &&
              Object.keys(item.especificaciones).length > 0 && (
                <div className="mt-8 overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm">
                  <div className="border-b border-neutral-200 bg-neutral-50 px-5 py-4">
                    <h2 className="text-base font-semibold text-neutral-900">
                      Especificaciones técnicas
                    </h2>
                  </div>

                  <div className="divide-y divide-neutral-200">
                    {Object.entries(item.especificaciones).map(
                      ([key, value]) => (
                        <div
                          key={key}
                          className="grid grid-cols-1 gap-2 px-5 py-4 sm:grid-cols-2"
                        >
                          <div className="text-sm font-medium text-neutral-500">
                            {key}
                          </div>
                          <div className="text-sm text-neutral-900">
                            {String(value)}
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              )}

            <div className="mt-8 rounded-3xl border border-orange-200 bg-orange-50 p-5">
              <div className="text-sm font-semibold text-orange-700">
                Nota comercial
              </div>
              <p className="mt-2 text-sm leading-6 text-orange-900">
                Si necesitas medidas especiales, voltaje, caudal, presión,
                material o compatibilidad con tu proceso, escríbenos y te
                asesoramos con la mejor opción.
              </p>
            </div>
          </div>
        </div>

        {relacionados.length > 0 && (
          <section className="mt-14">
            <div className="flex items-end justify-between gap-4">
              <div>
                <div className="text-sm text-neutral-500">Relacionados</div>
                <h2 className="mt-1 text-2xl font-bold text-neutral-900">
                  Más en {categoria.title}
                </h2>
              </div>

              <Link
                href={`/catalogo/${categoria.slug}`}
                className="rounded-2xl border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-800 hover:bg-neutral-50"
              >
                Ver categoría →
              </Link>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {relacionados.map((r) => {
                const rimg = r.imagen || catFallback;
                return (
                  <Link
                    key={r.id}
                    href={`/catalogo/${categoria.slug}/${r.id}`}
                    className="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm transition hover:shadow-md"
                  >
                    <div className="relative aspect-[4/3] w-full bg-neutral-100">
                      <Image
                        src={rimg}
                        alt={r.nombre}
                        fill
                        className="object-contain p-3"
                        sizes="(max-width: 1024px) 100vw, 25vw"
                      />
                    </div>

                    <div className="p-4">
                      <div className="font-semibold text-neutral-900">
                        {r.nombre}
                      </div>
                      <div className="mt-2 line-clamp-2 text-sm text-neutral-600">
                        {r.descripcion || "Cotización y soporte técnico."}
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