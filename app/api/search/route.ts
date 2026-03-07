import { NextResponse } from 'next/server'
import { productos, Producto } from '@/data/productos'

export async function POST(req: Request) {
  try {
    const { query } = await req.json()

    if (!query || typeof query !== 'string' || query.trim().length < 2) {
      return NextResponse.json({ results: [] })
    }

    const searchTerms = query
      .toLowerCase()
      .trim()
      .split(/\s+/)
      .filter((term) => term.length > 1)

    const scoredResults = productos.map((producto: Producto) => {
      let score = 0

      const nombre = producto.nombre?.toLowerCase() || ''
      const descripcion = producto.descripcion?.toLowerCase() || ''
      const categoria = producto.categoria?.toLowerCase() || ''
      const codigo = producto.codigo?.toLowerCase() || ''
      const marca = producto.marca?.toLowerCase() || ''
      const tags = producto.tags?.map((t) => t.toLowerCase()) || []
      const especificacionesTexto = producto.especificaciones
        ? Object.entries(producto.especificaciones)
            .map(([k, v]) => `${k} ${String(v)}`)
            .join(' ')
            .toLowerCase()
        : ''

      const searchableText = `
        ${nombre}
        ${descripcion}
        ${categoria}
        ${codigo}
        ${marca}
        ${tags.join(' ')}
        ${especificacionesTexto}
      `

      searchTerms.forEach((term) => {
        if (nombre.includes(term)) score += 10
        if (codigo.includes(term)) score += 9
        if (tags.some((t) => t.includes(term))) score += 8
        if (marca.includes(term)) score += 6
        if (descripcion.includes(term)) score += 5
        if (categoria.includes(term)) score += 4
        if (especificacionesTexto.includes(term)) score += 3
        if (searchableText.includes(term)) score += 1
      })

      return { ...producto, score }
    })

    const results = scoredResults
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score || a.nombre.localeCompare(b.nombre))
      .slice(0, 20)

    return NextResponse.json({ results })
  } catch (error) {
    console.error('Error en búsqueda:', error)
    return NextResponse.json(
      { error: 'Error en búsqueda' },
      { status: 500 }
    )
  }
}