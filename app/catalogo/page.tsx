import Image from "next/image";
import Link from "next/link";
import { CATEGORIES } from "@/lib/catalogo";
import { SITE } from "@/lib/site";

const WA = SITE?.whatsapp?.phoneE164 || "573053644307";

function waLink(text: string) {
  return `https://wa.me/${WA}?text=${encodeURIComponent(text)}`;
}

function norm(s: string) {
  return (s || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

type SP = { q?: string; cat?: string };

export default async function CatalogoIndex(props: {
  searchParams?: Promise<SP> | SP;
}) {
  const resolved =
    typeof (props.searchParams as any)?.then === "function"
      ? await (props.searchParams as Promise<SP>)
      : (props.searchParams as SP | undefined);

  const q = (resolved?.q || "").toString();
  const nq = norm(q);

  // Categorías (siempre visibles arriba)
  const cats = CATEGORIES;

  // Index global SOLO cuando hay búsqueda
  const items = !nq
    ? []
    : cats.flatMap((c) =>
        (c.items || []).map((it) => ({
          ...it,
          _catSlug: c.slug,
          _catTitle: c.title,
          _heroImage: c.heroImage || "",
        }))
      );

  const filteredItems = !nq
    ? []
    : items.filter((it) => {
        const blob = norm(
          [it.name, it.brand, it.ref, it.short, it._catTitle, it._catSlug].join(
            " "
          )
        );
        return blob.includes(nq);
      });

  const showResults = nq.length > 0;

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-10">
        {/* Header compacto */}
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
              <span
                className="h-2 w-2 rounded-full"
                style={{ background: "var(--brand)" }}
              />
              Catálogo Industrial
            </div>

            <h1 className="text-3xl md:text-4xl font-semibold mt-3">
              Catálogo profesional
            </h1>
            <p className="text-zinc-300 mt-2">
              Categorías arriba · busca rápido · cotiza por WhatsApp.
            </p>
          </div>

          <a
            href={waLink("Hola, quiero asesoría industrial. ¿Me apoyas por favor?")}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-xl text-black font-semibold px-4 py-2 text-sm"
            style={{ background: "var(--brand)" }}
          >
            WhatsApp
          </a>
        </div>

        {/* Buscador compacto */}
        <form action="/catalogo" method="get" className="mt-7">
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="flex-1">
              <input
                name="q"
                defaultValue={q}
                placeholder='Buscar: "filtro", "extractor", "IR", "Prona"...'
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-zinc-500 outline-none focus:border-white/20"
              />
            </div>

            <button
              type="submit"
              className="rounded-xl px-5 py-3 text-sm font-semibold text-black"
              style={{ background: "var(--brand)" }}
            >
              Buscar
            </button>

            {q ? (
              <Link
                href="/catalogo"
                className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm hover:bg-white/10 text-center"
              >
                Limpiar
              </Link>
            ) : null}
          </div>

          <div className="mt-2 text-xs text-zinc-400">
            Tip: escribe 2–3 palabras (ej: “axial 16”, “hepa”, “cabina pintura”)
          </div>
        </form>

        {/* Categorías arriba */}
        <div className="mt-10">
          <div className="text-sm text-zinc-400">Categorías</div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            {cats.map((c) => (
              <a
                key={c.slug}
                href={`/catalogo/${c.slug}`}
                className="group rounded-2xl border border-white/10 bg-white/5 overflow-hidden hover:bg-white/10 transition"
              >
                <div className="relative w-full aspect-[16/7] bg-black/30">
                  {c.heroImage ? (
                    <Image
                      src={c.heroImage}
                      alt={c.title}
                      fill
                      className="object-cover opacity-85 group-hover:opacity-95 transition"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  ) : (
                    <div className="absolute inset-0 grid place-items-center text-zinc-400 text-sm">
                      Imagen de categoría en proceso
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  <div className="absolute left-5 bottom-5 right-5 flex items-end justify-between gap-4">
                    <div>
                      <div className="text-xl font-semibold">{c.title}</div>
                      <p className="text-sm text-zinc-200/90 mt-1">
                        {c.subtitle}
                      </p>
                      <div className="mt-2 text-xs text-zinc-300">
                        Items: {(c.items || []).length}
                      </div>
                    </div>

                    <div
                      className="h-10 w-10 shrink-0 rounded-xl grid place-items-center text-black font-black"
                      style={{ background: "var(--brand)" }}
                    >
                      →
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Resultados SOLO cuando buscas */}
        {showResults ? (
          <div className="mt-12">
            <div className="flex items-end justify-between gap-4 flex-wrap">
              <div>
                <div className="text-sm text-zinc-400">Resultados</div>
                <h2 className="text-2xl font-semibold mt-1">
                  Búsqueda: “{q}”
                </h2>
                <p className="text-sm text-zinc-300 mt-2">
                  {filteredItems.length} resultado(s)
                </p>
              </div>

              <a
                href={waLink(`Hola, estoy buscando: ${q}. ¿Me ayudas a cotizar?`)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm hover:bg-white/10"
              >
                Pedir ayuda
              </a>
            </div>

            {filteredItems.length === 0 ? (
              <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
                <div
                  className="text-lg font-semibold"
                  style={{ color: "var(--brand)" }}
                >
                  No encontramos resultados
                </div>
                <p className="text-zinc-300 mt-2">
                  Escríbenos por WhatsApp y te ayudamos con alternativas o ficha
                  técnica.
                </p>
                <a
                  href={waLink(
                    `Hola, no encontré en el catálogo: "${q}". ¿Me ayudas a cotizar?`
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center justify-center rounded-xl text-black font-semibold px-5 py-3"
                  style={{ background: "var(--brand)" }}
                >
                  Cotizar por WhatsApp
                </a>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {filteredItems.map((item) => {
                  const msg =
                    item.waMessage ||
                    `Hola, quiero cotizar: ${item.name} (${item._catTitle}).`;

                  // Fallback de imagen: item.image -> hero de categoría
                  const img = item.image || item._heroImage || "";

                  return (
                    <article
                      key={`${item._catSlug}-${item.id}`}
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
                          {item._catTitle}
                        </div>
                      </div>

                      <div className="p-5">
                        <h3 className="text-lg font-semibold">{item.name}</h3>
                        <p className="text-sm text-zinc-300 mt-2">
                          {item.short || "Cotización y soporte técnico."}
                        </p>

                        <div className="mt-4 flex gap-2">
                          <a
                            className="inline-flex items-center justify-center w-full rounded-xl text-black font-semibold py-3"
                            target="_blank"
                            rel="noreferrer"
                            href={waLink(msg)}
                            style={{ background: "var(--brand)" }}
                          >
                            Cotizar
                          </a>
                          <a
                            className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm hover:bg-white/10"
                            href={`/catalogo/${item._catSlug}`}
                          >
                            Ver cat.
                          </a>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            )}
          </div>
        ) : null}
      </div>
    </main>
  );
}