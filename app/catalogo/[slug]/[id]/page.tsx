import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CATEGORIES } from "@/lib/catalogo";
import { SITE } from "@/lib/site";

const WA = SITE?.whatsapp?.phoneE164 || "573053644307";

function waLink(text: string) {
  return `https://wa.me/${WA}?text=${encodeURIComponent(text)}`;
}

function bestCategoryFallbackImage(cat: any) {
  if (cat?.heroImage) return cat.heroImage;
  const first = (cat?.items || []).find((x: any) => x?.image)?.image;
  return first || "";
}

export default async function ProductoPage(props: {
  params: Promise<{ slug: string; id: string }> | { slug: string; id: string };
}) {
  const resolvedParams =
    typeof (props.params as any)?.then === "function"
      ? await (props.params as Promise<{ slug: string; id: string }>)
      : (props.params as { slug: string; id: string });

  const slug = (resolvedParams.slug || "").toLowerCase().trim();
  const id = (resolvedParams.id || "").toLowerCase().trim();

  const categoria = CATEGORIES.find((c) => c.slug.toLowerCase() === slug);
  if (!categoria) return notFound();

  const item = (categoria.items || []).find(
    (x) => (x.id || "").toLowerCase() === id
  );
  if (!item) return notFound();

  const catFallback = bestCategoryFallbackImage(categoria);
  const img = item.image || catFallback || "";

  const msg =
    item.waMessage ||
    `Hola, quiero cotizar: ${item.name} (${categoria.title}).`;

  const relacionados = (categoria.items || [])
    .filter((x) => x.id !== item.id)
    .slice(0, 6);

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-10">
        {/* Breadcrumb */}
        <div className="text-sm text-zinc-400">
          <Link href="/catalogo" className="hover:text-white">
            Catálogo
          </Link>{" "}
          <span className="mx-2">/</span>
          <Link href={`/catalogo/${categoria.slug}`} className="hover:text-white">
            {categoria.title}
          </Link>{" "}
          <span className="mx-2">/</span>
          <span className="text-zinc-200">{item.name}</span>
        </div>

        {/* Hero producto */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
            <div className="relative w-full aspect-[4/3] bg-black/30">
              {img ? (
                <Image
                  src={img}
                  alt={item.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              ) : (
                <div className="absolute inset-0 grid place-items-center text-zinc-400 text-sm">
                  Imagen en proceso
                </div>
              )}
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
              <span
                className="h-2 w-2 rounded-full"
                style={{ background: "var(--brand)" }}
              />
              Ficha técnica
            </div>

            <h1 className="text-3xl md:text-4xl font-semibold mt-3">
              {item.name}
            </h1>

            <div className="mt-3 text-zinc-300">
              {item.short || "Equipo industrial · Cotización y soporte técnico."}
            </div>

            <div className="mt-4 flex flex-wrap gap-2 text-xs">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                Categoría: {categoria.title}
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                Marca: {item.brand || "Industrial"}
              </span>
              {item.ref ? (
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                  Ref: {item.ref}
                </span>
              ) : null}
            </div>

            {/* CTA */}
            <div className="mt-6 flex gap-2">
              <a
                href={waLink(msg)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl text-black font-semibold px-5 py-3"
                style={{ background: "var(--brand)" }}
              >
                Cotizar por WhatsApp
              </a>

              <a
                href={waLink(
                  `Hola, quiero ficha técnica completa de: ${item.name} (${categoria.title}).`
                )}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 hover:bg-white/10"
              >
                Pedir ficha
              </a>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-zinc-300">
              <div className="font-semibold" style={{ color: "var(--brand)" }}>
                Nota PRO
              </div>
              <div className="mt-2">
                Si necesitas medidas exactas, caudal, presión, potencia, material o
                compatibilidad, escríbenos y te asesoramos con la mejor opción.
              </div>
            </div>
          </div>
        </div>

        {/* Relacionados */}
        {relacionados.length ? (
          <div className="mt-12">
            <div className="flex items-end justify-between gap-4 flex-wrap">
              <div>
                <div className="text-sm text-zinc-400">Relacionados</div>
                <h2 className="text-2xl font-semibold mt-1">
                  Más en {categoria.title}
                </h2>
              </div>

              <Link
                href={`/catalogo/${categoria.slug}`}
                className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm hover:bg-white/10"
              >
                Ver categoría →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {relacionados.map((r) => {
                const rimg = r.image || catFallback || "";
                return (
                  <Link
                    key={r.id}
                    href={`/catalogo/${categoria.slug}/${r.id}`}
                    className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden hover:bg-white/10 transition"
                  >
                    <div className="relative w-full aspect-[4/3] bg-black/30">
                      {rimg ? (
                        <Image
                          src={rimg}
                          alt={r.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 33vw"
                        />
                      ) : (
                        <div className="absolute inset-0 grid place-items-center text-zinc-400 text-sm">
                          Imagen en proceso
                        </div>
                      )}
                    </div>
                    <div className="p-5">
                      <div className="font-semibold">{r.name}</div>
                      <div className="text-sm text-zinc-300 mt-2">
                        {r.short || "Cotización y soporte técnico."}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        ) : null}
      </div>
    </main>
  );
}