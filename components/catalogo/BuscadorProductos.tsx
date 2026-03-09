'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { productos } from '@/data/productos'

function normalizar(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
}

export default function BuscadorProductos() {

  const [query, setQuery] = useState("")
  const [results, setResults] = useState<any[]>([])
  const [visible, setVisible] = useState(false)

  useEffect(() => {

    if (!query) {
      setResults([])
      return
    }

    const q = normalizar(query)

    const encontrados = productos
      .map((p) => {

        const nombre = normalizar(p.nombre)
        const categoria = normalizar(p.categoria || "")
        const descripcion = normalizar(p.descripcion || "")

        let score = 0

        if (nombre.includes(q)) score += 5
        if (categoria.includes(q)) score += 3
        if (descripcion.includes(q)) score += 2

        if (p.codigo && normalizar(p.codigo).includes(q)) score += 6

        if (p.tags) {
          for (const t of p.tags) {
            if (normalizar(t).includes(q)) score += 2
          }
        }

        return { producto: p, score }

      })
      .filter(x => x.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 8)

    setResults(encontrados.map(x => x.producto))

  }, [query])

  return (

    <div className="relative w-full">

      <input
        type="text"
        placeholder="Buscar extractores, cabinas, filtros..."
        value={query}
        onFocus={() => setVisible(true)}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full rounded-xl border border-white/20 bg-zinc-900 px-4 py-3 text-sm outline-none focus:border-white/40"
      />

      {visible && results.length > 0 && (

        <div className="absolute top-full mt-2 w-full overflow-hidden rounded-xl border border-white/10 bg-zinc-900 shadow-xl">

          {results.map((p) => (

            <Link
              key={p.id}
              href={`/catalogo/${p.categoria}/${p.id}`}
              className="flex items-center gap-3 border-b border-white/5 px-4 py-3 hover:bg-white/5"
              onClick={() => setVisible(false)}
            >

              <div className="relative h-12 w-12 overflow-hidden rounded-lg bg-zinc-800">

                <Image
                  src={p.imagen || "/placeholder-producto.webp"}
                  alt={p.nombre}
                  fill
                  sizes="48px"
                  className="object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = "/placeholder-producto.webp"
                  }}
                />
              </div>
              <div className="flex flex-col">

                <span className="text-sm font-semibold">
                  {p.nombre}
                </span>

                <span className="text-xs text-zinc-400">
                  {p.categoria}
                </span>

              </div>

            </Link>

          ))}

        </div>

      )}

    </div>
  )
}