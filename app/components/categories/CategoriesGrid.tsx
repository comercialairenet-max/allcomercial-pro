import Link from 'next/link'
import Image from 'next/image'
import { CATEGORIES } from '@/lib/catalogo'

export function CategoriesGrid() {
  return (
    <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      {CATEGORIES.map((cat) => (
        <Link
          key={cat.slug}
          href={`/catalogo/${cat.slug}`}
          className="group flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-400 hover:shadow-2xl"
        >
          <div className="relative flex h-72 w-full items-center justify-center overflow-hidden bg-neutral-100">
            {cat.heroImage ? (
              <Image
                src={cat.heroImage}
                alt={cat.title}
                fill
                className="object-contain p-3 transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-sm text-neutral-400">
                Imagen en proceso
              </div>
            )}

            <div className="absolute left-4 top-4">
              <span className="inline-flex items-center rounded-full border border-orange-400/30 bg-orange-500/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-white shadow-lg">
                {cat.items.length} producto{cat.items.length !== 1 ? 's' : ''}
              </span>
            </div>
          </div>

          <div className="flex flex-1 flex-col p-6">
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-orange-400">
                {cat.title}
              </h3>
            </div>

            <p className="mt-3 min-h-[84px] text-sm leading-7 text-neutral-300">
              {cat.subtitle}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300">
                Catálogo técnico
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300">
                Fichas por producto
              </span>
            </div>

            <div className="mt-auto pt-6">
              <div className="flex items-center justify-between border-t border-neutral-800 pt-4">
                <span className="text-sm text-neutral-400">
                  Explorar categoría
                </span>

                <span className="inline-flex items-center gap-2 text-sm font-semibold text-orange-400 transition-all duration-300 group-hover:gap-3">
                  Ver categoría
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}