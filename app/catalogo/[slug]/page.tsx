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
    `Explora ${categoria.title} en nuestro catálogo industrial.`

  return {
    title,
    description,
    keywords: [
      categoria.title,
      `${categoria.title} industrial`,
      'equipos industriales',
      'ventilación industrial',
      'filtración industrial',
      'aire comprimido',
      'cabinas de pintura',
    ],
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

  const nombreCategoria = categoria.title

  const heroFallback =
    categoria.heroImage || '/productos/placeholder.jpeg'

  return (
    <main className="min-h-screen bg-neutral-950 text-white">

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(249,115,22,0.14),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.10),_transparent_28%)]" />

        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">

          {/* breadcrumb */}
          <div className="mb-8 text-sm text-neutral-400">

            <Link href="/" className="hover:text-orange-400">
              Inicio
            </Link>

            <span className="mx-2">&gt;</span>

            <Link href="/catalogo" className="hover:text-orange-400">
              Catálogo
            </Link>

            <span className="mx-2">&gt;</span>

            <span className="text-neutral-200">
              {nombreCategoria}
            </span>

          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">

            {/* TEXTO */}
            <div>

              <span className="inline-flex items-center rounded-full border border-orange-400/30 bg-orange-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-orange-400">
                Categoría industrial
              </span>

              <h1 className="mt-5 text-4xl font-bold md:text-5xl">
                {nombreCategoria}
              </h1>

              <p className="mt-4 max-w-3xl text-neutral-300 md:text-lg">
                {categoria.subtitle ||
                  'Explora las referencias disponibles en esta categoría.'}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">

                <div className="rounded-2xl border border-neutral-700 bg-neutral-900 px-5 py-3 text-sm">

                  {productosCategoria.length} producto
                  {productosCategoria.length !== 1 ? 's' : ''}

                </div>

                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl bg-orange-500 px-6 py-3 font-semibold hover:bg-orange-600"
                >
                  Solicitar asesoría
                </a>

              </div>

            </div>

            {/* IMAGEN */}
            <div className="overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900">

              <div className="relative flex h-72 items-center justify-center bg-neutral-100">

                <Image
                  src={heroFallback}
                  alt={nombreCategoria}
                  fill
                  className="object-contain p-5"
                  sizes="(max-width:1024px) 100vw, 40vw"
                  priority
                />

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* PRODUCTOS */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

        <div className="mb-8">

          <h2 className="text-2xl font-bold md:text-3xl">
            Productos de {nombreCategoria}
          </h2>

          <p className="mt-3 text-neutral-300">
            Selecciona un producto para ver ficha completa.
          </p>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">

          {productosCategoria.map((producto) => {

            const imagen = producto.imagen || heroFallback

            return (

              <Link
                key={producto.id}
                href={`/catalogo/${slug}/${producto.id}`}
                className="group"
              >

                <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 hover:border-orange-400 transition">

                  <div className="relative h-72 bg-neutral-100">

                    <Image
                      src={imagen}
                      alt={producto.nombre}
                      fill
                      className="object-contain p-4 group-hover:scale-105 transition"
                    />

                  </div>

                  <div className="flex flex-1 flex-col p-5">

                    <h3 className="text-xl font-semibold group-hover:text-orange-400">
                      {producto.nombre}
                    </h3>

                    <p className="mt-3 text-sm text-neutral-300">
                      {producto.descripcion ||
                        'Producto industrial con cotización directa.'}
                    </p>

                    <div className="mt-auto pt-4 border-t border-neutral-800 flex justify-between">

                      <span className="text-sm text-neutral-400">
                        Stock: {producto.stock ?? 'Disponible'}
                      </span>

                      <span className="text-orange-400 text-sm">
                        Ver ficha →
                      </span>

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