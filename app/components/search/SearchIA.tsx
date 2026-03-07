'use client'

import { useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import { productos } from '@/data/productos'
import { getCategoriaBySlug } from '@/lib/catalogo'

function normalizarTexto(texto: string): string {
  return texto
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, ' ')
}

export function SearchIA() {
  const router = useRouter()
  const [query, setQuery] = useState('')
  const [focused, setFocused] = useState(false)

  const resultados = useMemo(() => {
    const q = normalizarTexto(query)
    if (!q) return []

    return productos
      .map((item) => {
        const nombre = normalizarTexto(item.nombre || '')
        const descripcion = normalizarTexto(item.descripcion || '')
        const categoria = normalizarTexto(item.categoria || '')
        const categoriaNombre = normalizarTexto(
          getCategoriaBySlug(item.categoria)?.title || item.categoria || ''
        )
        const specs = item.especificaciones
          ? normalizarTexto(
              Object.entries(item.especificaciones)
                .map(([k, v]) => `${k} ${String(v)}`)
                .join(' ')
            )
          : ''

        const searchable = `${nombre} ${descripcion} ${categoria} ${categoriaNombre} ${specs}`

        let score = 0

        if (nombre.includes(q)) score += 5
        if (categoriaNombre.includes(q)) score += 4
        if (categoria.includes(q)) score += 3
        if (descripcion.includes(q)) score += 2
        if (specs.includes(q)) score += 2

        const palabras = q.split(' ').filter(Boolean)
        const todasCoinciden = palabras.every((palabra) => searchable.includes(palabra))
        if (todasCoinciden) score += 3

        return {
          ...item,
          categoriaNombre: getCategoriaBySlug(item.categoria)?.title || item.categoria,
          score,
        }
      })
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score || a.nombre.localeCompare(b.nombre))
      .slice(0, 8)
  }, [query])

  function goToProduct(categoria: string, id: string) {
    setQuery('')
    setFocused(false)
    router.push(`/catalogo/${categoria}/${id}`)
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const q = query.trim()
    if (!q) return

    if (resultados.length === 1) {
      goToProduct(resultados[0].categoria, resultados[0].id)
      return
    }

    if (resultados.length > 1) {
      router.push(`/catalogo/${resultados[0].categoria}`)
      return
    }

    router.push('/catalogo')
  }

  return (
    <div className="relative w-full max-w-3xl">
      <form onSubmit={onSubmit} className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => {
            setTimeout(() => setFocused(false), 150)
          }}
          placeholder="Busca por producto, referencia, categoría o especificación..."
          className="w-full rounded-2xl border border-white/20 bg-white px-5 py-4 pr-36 text-gray-900 shadow-lg outline-none transition placeholder:text-gray-400 focus:border-orange-300 focus:ring-4 focus:ring-orange-200"
        />

        <button
          type="submit"
          className="absolute right-2 top-2 inline-flex h-[calc(100%-1rem)] items-center justify-center rounded-xl bg-orange-600 px-5 font-semibold text-white transition hover:bg-orange-700"
        >
          Buscar
        </button>
      </form>

      {focused && query.trim().length > 0 && (
        <div className="absolute z-50 mt-3 w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl">
          {resultados.length > 0 ? (
            <div className="max-h-[420px] overflow-y-auto py-2">
              {resultados.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onMouseDown={() => goToProduct(item.categoria, item.id)}
                  className="flex w-full items-start gap-3 px-4 py-3 text-left transition hover:bg-gray-50"
                >
                  <div className="mt-1 h-2.5 w-2.5 rounded-full bg-orange-500" />

                  <div className="min-w-0 flex-1">
                    <div className="truncate font-semibold text-gray-900">
                      {item.nombre}
                    </div>

                    <div className="mt-1 text-sm text-gray-500">
                      {item.descripcion || 'Producto industrial disponible para cotización'}
                    </div>

                    <div className="mt-2 text-xs font-medium text-orange-600">
                      {item.categoriaNombre}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="px-4 py-5 text-sm text-gray-500">
              No encontré coincidencias. Intenta con otra referencia o categoría.
            </div>
          )}
        </div>
      )}
    </div>
  )
}