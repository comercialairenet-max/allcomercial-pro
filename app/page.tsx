import Link from 'next/link'

export default function Home() {
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
    </main>
  )
}