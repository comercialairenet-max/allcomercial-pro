import Link from "next/link";
import Image from "next/image";
import { CATEGORIES } from "@/lib/catalogo";

export default function CatalogoPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-7xl px-6 py-12 md:px-8 lg:px-10">
        <div className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            Catálogo
          </h1>
          <p className="mt-3 max-w-2xl text-white/70">
            Explora nuestras líneas de producto y accede a cada ficha por categoría.
          </p>
        </div>

        {CATEGORIES.length === 0 ? (
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/70">
            No hay categorías disponibles.
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={`/catalogo/${cat.slug}`}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-white/5">
                  <Image
                    src={cat.heroImage || "/productos/placeholder.jpeg"}
                    alt={cat.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition duration-300 group-hover:scale-[1.02]"
                  />
                </div>

                <div className="p-6">
                  <h2 className="text-xl font-semibold">{cat.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-white/70">
                    {cat.subtitle}
                  </p>
                  <div className="mt-4 text-sm font-medium text-orange-400">
                    Ver categoría →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}