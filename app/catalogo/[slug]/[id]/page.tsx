import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { getCategoriaBySlug } from '@/lib/catalogo'
import { SITE } from '@/lib/site'
import { getProductoById } from '@/data/productos'

type ProductoPageProps = {
  params: Promise<{
    slug: string
    id: string
  }>
}

const WA = SITE?.whatsapp?.phoneE164 || '573053644307'

function waLink(text: string) {
  return `https://wa.me/${WA}?text=${encodeURIComponent(text)}`
}

function bestCategoryFallbackImage(cat: any) {
  if (cat?.heroImage) return cat.heroImage
  const first = (cat?.items || []).find((x: any) => x?.imagen)?.imagen
  return first || ''
}

export default async function ProductoPage({ params }: ProductoPageProps) {
  const { slug, id } = await params

  const categoria = getCategoriaBySlug(slug)
  if (!categoria) notFound()

  const item = getProductoById(id)
  if (!item) notFound()

  if (item.categoria !== slug) notFound()

  const catFallback = bestCategoryFallbackImage(categoria)
  const img = item.imagen || catFallback || ''
  const gallery = item.gallery || []

  const msg = `Hola, quiero cotizar: ${item.nombre} (${categoria.title}).`

  const relacionados = (categoria.items || [])
    .filter((x) => x.id !== item.id)
    .slice(0, 6)

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-10">
        {/* Breadcrumb */}
        <div className="text-sm text-zinc-400">
          <Link href="/catalogo" className="hover:text-white">
            Catálogo
          </Link>
          <span className="mx-2">/</span>
          <Link href={`/catalogo/${categoria.slug}`} className="hover:text-white">
            {categoria.title}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-zinc-200">{item.nombre}</span>
        </div>

        {/* Hero producto */}
        <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            {/* Imagen principal */}
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className="relative aspect-[4/3] w-full bg-black/30">
                {img ? (
                  <Image
                    src={img}
                    alt={item.nombre}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                ) : (
                  <div className="absolute inset-0 grid place-items-center text-sm text-zinc-400">
                    Imagen en proceso
                  </div>
                )}
              </div>
            </div>

            {/* Galería de 4 fotos */}
            {gallery.length > 0 && (
              <div>
                <div className="mb-3 text-sm font-semibold text-zinc-300">
                  Galería del producto
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {gallery.slice(0, 4).map((foto, index) => (
                    <div
                      key={index}
                      className="overflow-hidden rounded-xl border border-white/10 bg-white/5"
                    >
                      <div className="relative aspect-[4/3] w-full bg-black/30">
                        <Image
                          src={foto}
                          alt={`${item.nombre} ${index + 1}`}
                          fill
                          className="object-cover transition duration-300 hover:scale-105"
                          sizes="(max-width: 1024px) 50vw, 25vw"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
              <span
                className="h-2 w-2 rounded-full"
                style={{ background: 'var(--brand)' }}
              />
              Ficha técnica
            </div>

            <h1 className="mt-3 text-3xl font-semibold md:text-4xl">
              {item.nombre}
            </h1>

            <div className="mt-3 text-zinc-300">
              {item.descripcion || 'Equipo industrial · Cotización y soporte técnico.'}
            </div>

            <div className="mt-4 flex flex-wrap gap-2 text-xs">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                Categoría: {categoria.title}
              </span>

              {item.codigo && (
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                  Código: {item.codigo}
                </span>
              )}

              {item.marca && (
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                  Marca: {item.marca}
                </span>
              )}
            </div>

            {/* Especificaciones */}
            {item.especificaciones && (
              <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="text-sm font-semibold text-zinc-200">
                  Especificaciones
                </div>

                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {Object.entries(item.especificaciones).map(([key, value]) => (
                    <div
                      key={key}
                      className="rounded-xl border border-white/10 bg-black/20 px-4 py-3"
                    >
                      <div className="text-xs uppercase tracking-wide text-zinc-400">
                        {key}
                      </div>
                      <div className="mt-1 text-sm font-medium text-zinc-100">
                        {String(value)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="mt-6 flex flex-wrap gap-2">
              <a
                href={waLink(msg)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold text-black"
                style={{ background: 'var(--brand)' }}
              >
                Cotizar por WhatsApp
              </a>

              <a
                href={waLink(
                  `Hola, quiero ficha técnica completa de: ${item.nombre} (${categoria.title}).`
                )}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 hover:bg-white/10"
              >
                Pedir ficha
              </a>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-zinc-300">
              <div className="font-semibold" style={{ color: 'var(--brand)' }}>
                Nota PRO
              </div>
              <div className="mt-2">
                Si necesitas medidas exactas, caudal, presión, potencia, material o
                compatibilidad, escríbenos y te asesoramos con la mejor opción.
              </div>
            </div>
          </div>
        </div>

        {/* Relacionados */}
        {relacionados.length > 0 && (
          <div className="mt-12">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <div className="text-sm text-zinc-400">Relacionados</div>
                <h2 className="mt-1 text-2xl font-semibold">
                  Más en {categoria.title}
                </h2>
              </div>

              <Link
                href={`/catalogo/${categoria.slug}`}
                className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm hover:bg-white/10"
              >
                Ver categoría →
              </Link>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relacionados.map((r) => {
                const rimg = r.imagen || catFallback || ''
                return (
                  <Link
                    key={r.id}
                    href={`/catalogo/${categoria.slug}/${r.id}`}
                    className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:bg-white/10"
                  >
                    <div className="relative aspect-[4/3] w-full bg-black/30">
                      {rimg ? (
                        <Image
                          src={rimg}
                          alt={r.nombre}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 33vw"
                        />
                      ) : (
                        <div className="absolute inset-0 grid place-items-center text-sm text-zinc-400">
                          Imagen en proceso
                        </div>
                      )}
                    </div>

                    <div className="p-5">
                      <div className="font-semibold">{r.nombre}</div>
                      <div className="mt-2 text-sm text-zinc-300">
                        {r.descripcion || 'Cotización y soporte técnico.'}
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </main>
  )
}