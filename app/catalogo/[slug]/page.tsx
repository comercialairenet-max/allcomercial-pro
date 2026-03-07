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
    <main className="min-h-screen bg-neutral-950 py-12 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-sm text-neutral-400">
          <Link href="/catalogo" className="transition-colors hover:text-orange-400">
            Catálogo
          </Link>
          <span className="mx-2">&gt;</span>
          <span className="text-neutral-200">{nombreCategoria}</span>
        </div>

        <h1 className="mb-4 text-4xl font-bold text-white">{nombreCategoria}</h1>

        <p className="mb-8 text-neutral-300">
          {productosCategoria.length} producto{productosCategoria.length !== 1 ? 's' : ''} disponible
          {productosCategoria.length !== 1 ? 's' : ''}
        </p>

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
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="mb-2 line-clamp-2 text-xl font-semibold text-white transition-colors group-hover:text-orange-400">
                      {producto.nombre}
                    </h3>

                    <p className="mb-4 min-h-[48px] text-sm leading-6 text-neutral-300">
                      {producto.descripcion || 'Producto industrial con cotización y soporte técnico.'}
                    </p>

                    {producto.especificaciones && (
                      <div className="mb-4 flex flex-wrap gap-2">
                        {Object.entries(producto.especificaciones)
                          .slice(0, 2)
                          .map(([key, value]) => (
                            <span
                              key={key}
                              className="rounded-md bg-neutral-800 px-2 py-1 text-xs text-neutral-200"
                            >
                              {key}: {String(value)}
                            </span>
                          ))}
                      </div>
                    )}

                    <div className="mt-auto flex items-center justify-between border-t border-neutral-800 pt-4">
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
                </article>
              </Link>
            )
          })}
        </div>
      </div>
    </main>
  )
}