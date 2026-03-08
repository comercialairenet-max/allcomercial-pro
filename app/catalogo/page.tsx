import Link from 'next/link'
import { CategoriesGrid } from '@/app/components/categories/CategoriesGrid'

const WA_LINK =
  'https://wa.me/573053644307?text=Hola,%20quiero%20asesor%C3%ADa%20sobre%20el%20cat%C3%A1logo%20industrial.'

export default function CatalogoPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(249,115,22,0.14),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.10),_transparent_28%)]" />

        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-4xl">
            <span className="inline-flex items-center rounded-full border border-orange-400/30 bg-orange-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-orange-400">
              Catálogo industrial
            </span>

            <h1 className="mt-5 text-4xl font-bold tracking-tight text-white md:text-5xl">
              Soluciones industriales por categoría
            </h1>

            <p className="mt-4 max-w-3xl text-base leading-7 text-neutral-300 md:text-lg">
              Explora nuestras líneas de producto y accede a fichas técnicas,
              imágenes, especificaciones comerciales y opciones de cotización
              directa para ventilación, filtración, aire comprimido, pintura,
              lavaderos y reparación automotriz.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-2xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
              >
                Solicitar asesoría
              </a>

              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-2xl border border-neutral-700 bg-neutral-900 px-6 py-3 font-medium text-white transition hover:border-neutral-500 hover:bg-neutral-800"
              >
                Volver al inicio
              </Link>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/70 p-4">
              <div className="text-sm font-semibold text-orange-400">
                Fichas técnicas
              </div>
              <p className="mt-2 text-sm leading-6 text-neutral-300">
                Revisa imágenes, datos técnicos y referencias por categoría.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/70 p-4">
              <div className="text-sm font-semibold text-orange-400">
                Cotización directa
              </div>
              <p className="mt-2 text-sm leading-6 text-neutral-300">
                Acceso rápido a cotización y atención comercial por WhatsApp.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/70 p-4">
              <div className="text-sm font-semibold text-orange-400">
                Portafolio especializado
              </div>
              <p className="mt-2 text-sm leading-6 text-neutral-300">
                Soluciones para industria, automotriz, ventilación y procesos técnicos.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
              Categorías disponibles
            </h2>
            <p className="mt-3 text-sm leading-7 text-neutral-300 md:text-base">
              Selecciona la categoría que más se ajuste a tu necesidad y navega
              por sus productos para ver fichas completas, imágenes y datos
              comerciales.
            </p>
          </div>

          <a
            href={WA_LINK}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-2xl border border-neutral-700 bg-neutral-900 px-5 py-3 text-sm font-medium text-white transition hover:border-neutral-500 hover:bg-neutral-800"
          >
            ¿No sabes cuál elegir?
          </a>
        </div>

        <CategoriesGrid />
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-orange-400/20 bg-gradient-to-br from-orange-500/10 via-neutral-900 to-neutral-950 p-8 shadow-2xl md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.5fr_0.9fr] lg:items-center">
            <div>
              <span className="inline-flex items-center rounded-full border border-orange-400/30 bg-orange-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-orange-400">
                Atención comercial
              </span>

              <h3 className="mt-5 text-2xl font-bold tracking-tight text-white md:text-3xl">
                Te ayudamos a elegir la categoría y el producto correcto
              </h3>

              <p className="mt-4 max-w-2xl text-base leading-8 text-neutral-300">
                Si necesitas orientación según caudal, presión, eficiencia,
                aplicación, potencia, espacio disponible o requerimiento del
                proceso, te guiamos para que encuentres la referencia más adecuada.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
                >
                  Hablar por WhatsApp
                </a>

                <Link
                  href="/"
                  className="inline-flex items-center justify-center rounded-2xl border border-neutral-700 bg-neutral-900 px-6 py-3 font-medium text-white transition hover:border-neutral-500 hover:bg-neutral-800"
                >
                  Ir al inicio
                </Link>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="text-sm font-semibold text-orange-400">
                  Respuesta rápida
                </div>
                <p className="mt-2 text-sm leading-7 text-neutral-300">
                  Atención ágil para resolver dudas sobre productos, stock y cotización.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="text-sm font-semibold text-orange-400">
                  Soporte técnico comercial
                </div>
                <p className="mt-2 text-sm leading-7 text-neutral-300">
                  Te acompañamos en la selección del producto según la aplicación real.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="text-sm font-semibold text-orange-400">
                  Portafolio organizado
                </div>
                <p className="mt-2 text-sm leading-7 text-neutral-300">
                  Navegación clara por categorías para encontrar más rápido cada solución.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}