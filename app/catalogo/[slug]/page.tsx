// app/catalogo/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { CATEGORIES } from "@/lib/catalogo";
import { SITE } from "@/lib/site";

type ParamsLike = Promise<{ slug: string }> | { slug: string };

function bestCategoryFallbackImage(cat: any) {
  if (cat?.heroImage) return cat.heroImage;
  const first = (cat?.items || []).find((x: any) => x?.image)?.image;
  return first || "";
}

// ✅ SEO PRO por categoría
export async function generateMetadata(props: {
  params: ParamsLike;
}): Promise<Metadata> {
  const resolvedParams =
    typeof (props.params as any)?.then === "function"
      ? await (props.params as Promise<{ slug: string }>)
      : (props.params as { slug: string });

  const slug = (resolvedParams.slug || "").toLowerCase().trim();
  const categoria = CATEGORIES.find((c) => c.slug.toLowerCase() === slug);
  if (!categoria) return {};

  const base = (SITE as any)?.url
    ? String((SITE as any).url).replace(/\/$/, "")
    : "https://allcomercialonline.com";

  const url = `${base}/catalogo/${categoria.slug}`;
  const title = `${categoria.title} | AllComercial Online`;
  const description =
    categoria.subtitle ||
    `Catálogo industrial de ${categoria.title}. Cotiza por WhatsApp y recibe asesoría técnica en Bogotá.`;

  const ogImage = bestCategoryFallbackImage(categoria);
  const ogImages = ogImage
    ? [
        {
          // Si ya viene como "/catalogo/..", queda bien con base + path
          url: ogImage.startsWith("http") ? ogImage : `${base}${ogImage}`,
          width: 1200,
          height: 630,
          alt: categoria.title,
        },
      ]
    : undefined;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE?.name || "AllComercial Online",
      locale: "es_CO",
      type: "website",
      images: ogImages,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ogImages?.map((x) => x.url),
    },
  };
}

export default async function CatalogoCategoria(props: { params: ParamsLike }) {
  const resolvedParams =
    typeof (props.params as any)?.then === "function"
      ? await (props.params as Promise<{ slug: string }>)
      : (props.params as { slug: string });

  const slug = (resolvedParams.slug || "").toLowerCase().trim();
  const categoria = CATEGORIES.find((c) => c.slug.toLowerCase() === slug);
  if (!categoria) return notFound();

  const WA = SITE?.whatsapp?.phoneE164 || "573053644307";
  const catFallback = bestCategoryFallbackImage(categoria);

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
              <span
                className="h-2 w-2 rounded-full"
                style={{ background: "var(--brand)" }}
              />
              Categoría
            </div>

            <h1 className="text-3xl md:text-4xl font-semibold mt-3">
              {categoria.title}
            </h1>
            <p className="text-zinc-300 mt-2">{categoria.subtitle}</p>
          </div>

          <div className="flex gap-2">
            <a
              href="/catalogo"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm hover:bg-white/10"
            >
              ← Volver
            </a>

            <a
              href={`https://wa.me/${WA}?text=${encodeURIComponent(
                `Hola, necesito asesoría para ${categoria.title}.`
              )}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl text-black font-semibold px-4 py-2 text-sm"
              style={{ background: "var(--brand)" }}
            >
              Asesoría
            </a>
          </div>
        </div>

        {categoria.items.length === 0 ? (
          <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
            <div
              className="text-lg font-semibold"
              style={{ color: "var(--brand)" }}
            >
              Catálogo en construcción
            </div>
            <p className="text-zinc-300 mt-2">
              Estamos cargando productos y fichas. Escríbenos y te cotizamos por
              WhatsApp.
            </p>

            <a
              href={`https://wa.me/${WA}?text=${encodeURIComponent(
                `Hola, quiero cotizar productos de ${categoria.title}.`
              )}`}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center justify-center rounded-xl text-black font-semibold px-5 py-3"
              style={{ background: "var(--brand)" }}
            >
              Cotizar por WhatsApp
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {categoria.items.map((item) => {
              const msg =
                item.waMessage ||
                `Hola, quiero cotizar: ${item.name} (${categoria.title}).`;

              // ✅ Imagen obligatoria: item.image -> catFallback
              const img = item.image || catFallback || "";

              return (
                <article
                  key={item.id}
                  className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden hover:bg-white/10 transition"
                >
                  <div className="relative w-full aspect-[4/3] bg-black/30">
                    {img ? (
                      <Image
                        src={img}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 33vw"
                      />
                    ) : (
                      <div className="absolute inset-0 grid place-items-center text-zinc-400 text-sm">
                        Imagen en proceso
                      </div>
                    )}

                    <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-zinc-200">
                      {item.brand || "Industrial"}
                      {item.ref ? ` · ${item.ref}` : ""}
                    </div>
                  </div>

                  <div className="p-5">
                    <h2 className="text-lg font-semibold">{item.name}</h2>

                    <p className="text-sm text-zinc-300 mt-2">
                      {item.short || "Cotización y soporte técnico."}
                    </p>

                    <div className="mt-4 flex gap-2">
                      <a
                        className="inline-flex items-center justify-center w-full rounded-xl text-black font-semibold py-3"
                        target="_blank"
                        rel="noreferrer"
                        href={`https://wa.me/${WA}?text=${encodeURIComponent(
                          msg
                        )}`}
                        style={{ background: "var(--brand)" }}
                      >
                        Cotizar
                      </a>

                      {/* ⚠️ OJO: esta ruta SOLO sirve si tú creas la página:
                          app/catalogo/[slug]/[id]/page.tsx
                          Si no existe, va a dar 404.
                       */}
                      <a
                        className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm hover:bg-white/10"
                        target="_blank"
                        rel="noreferrer"
                        href={`https://wa.me/${WA}?text=${encodeURIComponent(
                          `Hola, quiero ficha técnica de: ${item.name} (${categoria.title}).`
                        )}`}
                      >
                        Pedir ficha
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}