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
          </div>

          <div className="flex flex-1 flex-col p-6">
            <h3 className="text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-orange-400">
              {cat.title}
            </h3>

            <p className="mt-3 min-h-[56px] text-sm leading-7 text-neutral-300">
              {cat.subtitle}
            </p>

            <div className="mt-auto pt-5">
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
        </Link>
      ))}
    </div>
  )
}