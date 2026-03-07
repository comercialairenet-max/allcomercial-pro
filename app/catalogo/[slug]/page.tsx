import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getCategoriaBySlug } from '@/lib/catalogo'

type CategoriaPageProps = {
  params: Promise<{
    slug: string
  }>
}

export default async function CategoriaPage({ params }: CategoriaPageProps) {
  const { slug } = await params

  const categoria = getCategoriaBySlug(slug)
  if (!categoria) notFound()

  const productosCategoria = categoria.items
  if (!productosCategoria.length) notFound()

  const nombreCategoria = categoria.title

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8 text-sm text-gray-500">
          <Link href="/catalogo" className="transition-colors hover:text-orange-600">
            Catálogo
          </Link>
          <span className="mx-2">&gt;</span>
          <span className="text-gray-700">{nombreCategoria}</span>
        </div>

        <h1 className="mb-4 text-4xl font-bold text-gray-900">{nombreCategoria}</h1>

        <p className="mb-8 text-gray-600">
          {productosCategoria.length} productos disponibles
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {productosCategoria.map((producto) => (
            <Link
              href={`/catalogo/${slug}/${producto.id}`}
              key={producto.id}
              className="group h-full"
            >
              <article className="flex h-full flex-col rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:border-orange-200 hover:shadow-xl">
                <div className="relative h-56 bg-gradient-to-br from-gray-50 to-gray-100 p-4">
                  {producto.imagen ? (
                    <Image
                      src={producto.imagen}
                      alt={producto.nombre}
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-gray-400">
                      Sin imagen
                    </div>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="mb-2 line-clamp-2 font-semibold text-gray-800 transition-colors group-hover:text-orange-600">
                    {producto.nombre}
                  </h3>

                  <p className="mb-4 line-clamp-2 text-sm text-gray-600">
                    {producto.descripcion}
                  </p>

                  {producto.especificaciones && (
                    <div className="mb-4 flex flex-wrap gap-2">
                      {Object.entries(producto.especificaciones)
                        .slice(0, 2)
                        .map(([key, value]) => (
                          <span
                            key={key}
                            className="rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-700"
                          >
                            {key}: {String(value)}
                          </span>
                        ))}
                    </div>
                  )}

                  <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-3">
                    <span className="text-sm font-medium text-gray-500">
                      Stock: {producto.stock}
                    </span>

                    <span className="inline-flex items-center gap-1 text-sm font-medium text-orange-600 transition-all group-hover:gap-2">
                      Ver detalles
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
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}