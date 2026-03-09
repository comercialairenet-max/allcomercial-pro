import { productos } from "@/data/productos"
import { getCategoriaBySlug } from "@/lib/catalogo"
import { construirFiltros } from "@/lib/filtros"
import FiltrosCatalogo from "@/components/catalogo/FiltrosCatalogo"
import FiltrosBarra from "@/components/catalogo/FiltrosBarra"
import Image from "next/image"
import Link from "next/link"

function normalizar(texto: string) {
  return texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
}

function arr(v?: string | string[]) {
  if (!v) return []
  return Array.isArray(v) ? v : [v]
}

type Props = {
  searchParams?: Record<string, string | string[] | undefined>
}

export default function BuscarPage({ searchParams }: Props) {

  const params = searchParams ?? {}

  const query = String(params.q || "")
  const q = normalizar(query)

  const filtros = construirFiltros()

  const cats = arr(params.cat)
  const marcas = arr(params.marca)

  const resultados = productos.filter((p) => {

    const categoriaNombre =
      getCategoriaBySlug(p.categoria)?.title || p.categoria

    const texto = normalizar(
      `${p.nombre} ${p.descripcion || ""} ${p.codigo || ""} ${categoriaNombre}`
    )

    if (q && !texto.includes(q)) return false

    if (cats.length && !cats.includes(p.categoria)) return false

    if (marcas.length) {

      const marca = String((p as any).marca || "").toLowerCase()

      if (!marcas.some((m) => marca.includes(String(m).toLowerCase()))) return false

    }

    const specs = (p as any).especificaciones || {}

    for (const [k, v] of Object.entries(params)) {

      if (["q", "cat", "marca"].includes(k)) continue

      const values = arr(v)

      const val = String(specs[k] || "").toLowerCase()

      if (!values.some((x) => val.includes(String(x).toLowerCase()))) return false

    }

    return true

  })

  return (

    <main className="mx-auto max-w-7xl px-4 py-10">

      <h1 className="text-3xl font-bold">
        Resultados de búsqueda
      </h1>

      <p className="mt-2 text-gray-600">
        {resultados.length} resultados para: <b>{query}</b>
      </p>

      {/* BARRA DE FILTROS */}

      <div className="mt-6">
        <FiltrosBarra filtros={filtros} />
      </div>

      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[260px,1fr]">

        {/* FILTROS LATERALES */}

        <FiltrosCatalogo filtros={filtros} />

        {/* RESULTADOS */}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 xl:grid-cols-4">

          {resultados.map((producto) => {

            const categoria = getCategoriaBySlug(producto.categoria)

            const img = producto.imagen || "/placeholder.jpeg"

            return (

              <Link
                key={producto.id}
                href={`/catalogo/${producto.categoria}/${producto.id}`}
                className="group rounded-2xl border bg-white p-4 shadow-sm transition hover:shadow-lg"
              >

                <div className="relative h-52 w-full">

                  <Image
                    src={img}
                    alt={producto.nombre}
                    fill
                    sizes="(max-width:768px) 100vw, 300px"
                    className="object-contain"
                  />

                </div>

                <h3 className="mt-4 font-semibold">
                  {producto.nombre}
                </h3>

                <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                  {producto.descripcion || "Producto industrial disponible"}
                </p>

                <div className="mt-3 text-xs font-semibold text-orange-600">
                  {categoria?.title}
                </div>

              </Link>

            )

          })}

        </div>

      </div>

      {resultados.length === 0 && (

        <div className="mt-16 text-center text-gray-500">
          No encontramos productos para <b>{query}</b>
        </div>

      )}

    </main>

  )

}