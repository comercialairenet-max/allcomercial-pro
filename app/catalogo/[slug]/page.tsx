import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getCategoriaBySlug } from '@/lib/catalogo'

type CategoriaPageProps = {
  params: Promise<{
    slug: string
  }>
}

const WA_LINK =
  'https://wa.me/573053644307?text=Hola,%20quiero%20asesor%C3%ADa%20sobre%20esta%20categor%C3%ADa%20del%20cat%C3%A1logo.'

export async function generateMetadata({
  params,
}: CategoriaPageProps): Promise<Metadata> {
  const { slug } = await params
  const categoria = getCategoriaBySlug(slug)

  if (!categoria) {
    return {
      title: 'Categoría no encontrada',
    }
  }

  const title = `${categoria.title} | Catálogo Industrial`
  const description =
    categoria.subtitle ||
    `Explora ${categoria.title} en nuestro catálogo industrial. Fichas, imágenes y cotización directa.`

  return {
    title,
    description,
    alternates: {
      canonical: `/catalogo/${categoria.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `/catalogo/${categoria.slug}`,
      images: categoria.heroImage
        ? [
            {
              url: categoria.heroImage,
              alt: categoria.title,
            },
          ]
        : [],
    },
  }
}

export default async function CategoriaPage({ params }: CategoriaPageProps) {
  const { slug } = await params

  const categoria = getCategoriaBySlug(slug)
  if (!categoria) notFound()

  const productosCategoria = categoria.items || []
  if (!productosCategoria.length) notFound()

  const nombreCategoria = categoria.title
  const heroFallback = categoria.heroImage || '/productos/placeholder.jpeg'

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(249,115,22,0.14),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.10),_transparent_28%)]" />

        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="mb-8 text-sm text-neutral-400">
            <Link href="/" className="transition-colors hover:text-orange-400">
              Inicio
            </Link>
            <span className="mx-2">&gt;</span>
            <Link href="/catalogo" className="transition-colors hover:text-orange-400">
              Catálogo
            </Link>
            <span className="mx-2">&gt;</span>
            <span className="text-neutral-200">{nombreCategoria}</span>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <span className="inline-flex items-center rounded-full border border-orange-400/30 bg-orange-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-orange-400">
                Categoría industrial
              </span>

              <h1 className="mt-5 text-4xl font-bold tracking-tight text-white md:text-5xl">
                {nombreCategoria}
              </h1>

              <p className="mt-4 max-w-3xl text-base leading-7 text-neutral-300 md:text-lg">
                {categoria.subtitle ||
                  'Explora las referencias disponibles de esta categoría y consulta fichas, imágenes, especificaciones y cotización directa.'}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <div className="inline-flex items-center rounded-2xl border border-neutral-700 bg-neutral-900 px-5 py-3 text-sm font-medium text-white">
                  {productosCategoria.length} producto
                  {productosCategoria.length !== 1 ? 's' : ''} disponible
                  {productosCategoria.length !== 1 ? 's' : ''}
                </div>

                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
                >
                  Solicitar asesoría
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900 shadow-2xl">
              <div className="relative flex h-72 items-center justify-center overflow-hidden bg-neutral-100">
                <Image
                  src={heroFallback}
                  alt={nombreCategoria}
                  fill
                  className="object-contain p-5"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
              Productos de {nombreCategoria}
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-neutral-300 md:text-base">
              Selecciona una referencia para ver su ficha, imágenes, detalles técnicos
              y opciones de cotización directa.
            </p>
          </div>

          <a
            href={WA_LINK}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-2xl border border-neutral-700 bg-neutral-900 px-5 py-3 text-sm font-medium text-white transition hover:border-neutral-500 hover:bg-neutral-800"
          >
            ¿Necesitas ayuda para elegir?
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {productosCategoria.map((producto) => {
            const imagen = producto.imagen || heroFallback

            return (
              <Link
                href={`/catalogo/${slug}/${producto.id}`}
                key={producto.id}
                className="group h-full"
              >
                <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-400 hover:shadow-2xl">
                  <div className="relative flex h-72 items-center justify-center overflow-hidden bg-neutral-100">
                    <Image
                      src={imagen}
                      alt={producto.nombre}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                    />

                    {producto.destacado && (
                      <div className="absolute left-4 top-4">
                        <span className="inline-flex items-center rounded-full border border-orange-400/30 bg-orange-500/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-white shadow-lg">
                          Destacado
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="line-clamp-2 text-xl font-semibold text-white transition-colors group-hover:text-orange-400">
                        {producto.nombre}
                      </h3>
                    </div>

                    <p className="mt-3 min-h-[72px] text-sm leading-6 text-neutral-300">
                      {producto.descripcion ||
                        'Producto industrial con cotización y soporte técnico.'}
                    </p>

                    {producto.especificaciones && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {Object.entries(producto.especificaciones)
                          .slice(0, 2)
                          .map(([key, value]) => (
                            <span
                              key={key}
                              className="rounded-md border border-neutral-700 bg-neutral-800 px-2 py-1 text-xs text-neutral-200"
                            >
                              {key}: {String(value)}
                            </span>
                          ))}
                      </div>
                    )}

                    <div className="mt-auto pt-5">
                      <div className="flex items-center justify-between border-t border-neutral-800 pt-4">
                        <span className="text-sm font-medium text-neutral-400">
                          Stock: {producto.stock}
                        </span>

                        <span className="inline-flex items-center gap-1 text-sm font-medium text-orange-400 transition-all group-hover:gap-2">
                          Ver ficha
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
                </article>
              </Link>
            )
          })}
        </div>
      </section>
    </main>
  )
}