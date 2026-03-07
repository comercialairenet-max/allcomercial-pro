import { CategoriesGrid } from '@/app/components/categories/CategoriesGrid'

export default function CatalogoPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-full border border-orange-400/30 bg-orange-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-orange-400">
            Catálogo industrial
          </span>

          <h1 className="mt-5 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Soluciones industriales por categoría
          </h1>

          <p className="mt-4 text-base leading-7 text-neutral-300 md:text-lg">
            Explora nuestras líneas de producto y accede a cada ficha técnica,
            imágenes, especificaciones y opciones de cotización directa.
          </p>
        </div>

        <div className="mt-10">
          <CategoriesGrid />
        </div>
      </section>
    </main>
  )
}