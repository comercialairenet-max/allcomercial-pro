import Link from 'next/link'
import Image from 'next/image'
import { CATEGORIES } from '@/lib/catalogo'

export function CategoriesGrid() {
  return (
    <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      {CATEGORIES.map((cat) => (
        <Link
          key={cat.slug}
          href={`/catalogo/${cat.slug}`}
          className="group block overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:border-orange-200 hover:shadow-xl"
        >
          <div className="relative h-48 w-full bg-gradient-to-br from-gray-50 to-gray-100">
            {cat.heroImage ? (
              <Image
                src={cat.heroImage}
                alt={cat.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
            ) : (
              <div className="flex h-full items-center justify-center text-gray-400">
                <span>Imagen en proceso</span>
              </div>
            )}
          </div>

          <div className="p-5">
            <h3 className="text-xl font-semibold text-gray-800 transition-colors group-hover:text-orange-600">
              {cat.title}
            </h3>

            <p className="mt-2 line-clamp-2 text-sm text-gray-600">
              {cat.subtitle}
            </p>

            <p className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-orange-600 transition-all group-hover:gap-2">
              {cat.items.length} productos
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </p>
          </div>
        </Link>
      ))}
    </div>
  )
}