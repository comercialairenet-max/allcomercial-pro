import Link from 'next/link'
import { CATEGORIES } from '@/lib/catalogo'
import Image from 'next/image'

export default function Home() {
  const destacadas = CATEGORIES.slice(0, 3)

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(249,115,22,0.18),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.14),_transparent_30%)]" />

        <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 py-20 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full border border-orange-400/30 bg-orange-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-orange-400">
              Soluciones industriales
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-6xl">
              Equipos industriales, ventilación, filtración y soluciones para pintura
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-neutral-300 md:text-lg">
              En All Comercial encuentras equipos y soluciones para ventilación
              industrial, filtración, aire comprimido, cabinas de pintura,
              secado IR, lavaderos y reparación de carrocerías, con atención
              técnica y cotización directa.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/catalogo"
                className="inline-flex items-center justify-center rounded-2xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
              >
                Ver catálogo
              </Link>

              <a
                href="https://wa.me/573053644307?text=Hola,%20quiero%20informaci%C3%B3n%20sobre%20sus%20productos."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-2xl border border-neutral-700 bg-neutral-900 px-6 py-3 font-medium text-white transition hover:border-neutral-500 hover:bg-neutral-800"
              >
                Cotizar por WhatsApp
              </a>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-neutral-800 bg-neutral-900/70 p-4">
                <div className="text-2xl font-bold text-orange-400">7+</div>
                <div className="mt-1 text-sm text-neutral-300">
                  Categorías industriales
                </div>
              </div>

              <div className="rounded-2xl border border-neutral-800 bg-neutral-900/70 p-4">
                <div className="text-2xl font-bold text-orange-400">Soporte</div>
                <div className="mt-1 text-sm text-neutral-300">
                  Asesoría técnica comercial
                </div>
              </div>

              <div className="rounded-2xl border border-neutral-800 bg-neutral-900/70 p-4">
                <div className="text-2xl font-bold text-orange-400">Directo</div>
                <div className="mt-1 text-sm text-neutral-300">
                  Cotización rápida por WhatsApp
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 sm:px-8 lg:px-10">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-300">
              Categorías destacadas
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white">
              Explora nuestras líneas principales
            </h2>
            <p className="mt-3 max-w-2xl text-neutral-300">
              Accede rápidamente a las categorías más consultadas y revisa sus fichas.
            </p>
          </div>

          <Link
            href="/catalogo"
            className="hidden rounded-2xl border border-neutral-700 bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition hover:border-neutral-500 hover:bg-neutral-800 md:inline-flex"
          >
            Ver todo el catálogo
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {destacadas.map((cat) => (
            <Link
              key={cat.slug}
              href={`/catalogo/${cat.slug}`}
              className="group overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 transition-all duration-300 hover:-translate-y-1 hover:border-orange-400 hover:shadow-2xl"
            >
              <div className="relative flex h-72 items-center justify-center overflow-hidden bg-neutral-100">
                {cat.heroImage ? (
                  <Image
                    src={cat.heroImage}
                    alt={cat.title}
                    fill
                    className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                ) : (
                  <div className="text-sm text-neutral-400">Imagen en proceso</div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white transition-colors group-hover:text-orange-400">
                  {cat.title}
                </h3>

                <p className="mt-3 min-h-[56px] text-sm leading-7 text-neutral-300">
                  {cat.subtitle}
                </p>

                <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-orange-400 transition-all group-hover:gap-3">
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
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 md:hidden">
          <Link
            href="/catalogo"
            className="inline-flex rounded-2xl border border-neutral-700 bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition hover:border-neutral-500 hover:bg-neutral-800"
          >
            Ver todo el catálogo
          </Link>
        </div>
      </section>
    </main>
  )
}