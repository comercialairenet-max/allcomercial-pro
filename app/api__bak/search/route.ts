import { NextResponse } from "next/server"
import { productos, Producto } from "@/data/productos"

/**
 * Normaliza texto:
 * - minúsculas
 * - elimina acentos
 * - elimina caracteres extraños
 */
function normalizar(texto: string) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
}

export async function POST(req: Request) {

  try {

    const { query } = await req.json()

    if (!query || typeof query !== "string" || query.trim().length < 2) {
      return NextResponse.json({ results: [] })
    }

    const queryNormalizada = normalizar(query)

    const searchTerms = queryNormalizada
      .split(/\s+/)
      .filter((term) => term.length > 1)

    const scoredResults = productos.map((producto: Producto) => {

      let score = 0

      const nombre = normalizar(producto.nombre || "")
      const descripcion = normalizar(producto.descripcion || "")
      const categoria = normalizar(producto.categoria || "")
      const codigo = normalizar(producto.codigo || "")
      const marca = normalizar(producto.marca || "")

      const tags = (producto.tags || []).map((t) => normalizar(t))

      const especificacionesTexto = producto.especificaciones
        ? normalizar(
            Object.entries(producto.especificaciones)
              .map(([k, v]) => `${k} ${String(v)}`)
              .join(" ")
          )
        : ""

      const searchableText = `
        ${nombre}
        ${descripcion}
        ${categoria}
        ${codigo}
        ${marca}
        ${tags.join(" ")}
        ${especificacionesTexto}
      `

      searchTerms.forEach((term) => {

        // coincidencia exacta
        if (nombre === term) score += 20

        // nombre
        if (nombre.includes(term)) score += 10

        // codigo
        if (codigo.includes(term)) score += 9

        // tags
        if (tags.some((t) => t.includes(term))) score += 8

        // marca
        if (marca.includes(term)) score += 6

        // descripcion
        if (descripcion.includes(term)) score += 5

        // categoria
        if (categoria.includes(term)) score += 4

        // especificaciones
        if (especificacionesTexto.includes(term)) score += 3

        // coincidencia general
        if (searchableText.includes(term)) score += 1

      })

      return { ...producto, score }

    })

    const results = scoredResults
      .filter((item) => item.score > 0)
      .sort(
        (a, b) =>
          b.score - a.score ||
          a.nombre.localeCompare(b.nombre)
      )
      .slice(0, 20)

    return NextResponse.json({ results })

  } catch (error) {

    console.error("Error en búsqueda:", error)

    return NextResponse.json(
      { error: "Error en búsqueda" },
      { status: 500 }
    )

  }

}