'use client'

import { useMemo, useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { productos } from '@/data/productos'
import { getCategoriaBySlug } from '@/lib/catalogo'

type ProductoIndexado = {
  id: string
  categoria: string
  categoriaNombre: string
  nombre: string
  descripcion?: string
  searchable: string
}

function normalizarTexto(texto: string): string {
  return texto
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, ' ')
}

function expandirBusqueda(texto: string): string {

  let t = normalizarTexto(texto)

  t = t
    .replace(/"/g, ' pulgadas ')
    .replace(/\bhp\b/g, ' hp potencia ')
    .replace(/\bpsi\b/g, ' psi presion ')
    .replace(/\bir\b/g, ' infrarroja infrarrojo ir ')
    .replace(/\bhvlp\b/g, ' hvlp gravedad pintura ')
    .replace(/\bg4\b/g, ' g4 filtro eficiencia ')
    .replace(/\bf7\b/g, ' f7 filtro eficiencia ')
    .replace(/\bmm\b/g, ' mm milimetros ')
    .replace(/\bton\b/g, ' ton tonelada toneladas ')

  return normalizarTexto(t)
}

export function SearchIA() {

  const router = useRouter()

  const [query, setQuery] = useState('')
  const [focused, setFocused] = useState(false)
  const [debouncedQuery, setDebouncedQuery] = useState('')

  useEffect(() => {

    const t = setTimeout(() => setDebouncedQuery(query), 150)

    return () => clearTimeout(t)

  }, [query])

  const index = useMemo<ProductoIndexado[]>(() => {

    return productos.map((item) => {

      const categoriaNombre =
        getCategoriaBySlug(item.categoria)?.title || item.categoria

      const specs = item.especificaciones
        ? Object.entries(item.especificaciones)
            .map(([k, v]) => `${k} ${v}`)
            .join(' ')
        : ''

      const searchable = expandirBusqueda(
        `${item.nombre} ${item.descripcion || ''} ${item.codigo || ''} ${categoriaNombre} ${specs}`
      )

      return {
        id: item.id,
        categoria: item.categoria,
        categoriaNombre,
        nombre: item.nombre,
        descripcion: item.descripcion,
        searchable,
      }

    })

  }, [])

  const resultados = useMemo(() => {

    const q = expandirBusqueda(debouncedQuery)

    if (!q) return []

    const palabras = q.split(' ').filter(Boolean)

    return index
      .map((item) => {

        let score = 0

        if (item.searchable.includes(q)) score += 15

        const coincidencias = palabras.filter((palabra) =>
          item.searchable.includes(palabra)
        ).length

        score += coincidencias * 3

        if (coincidencias === palabras.length) score += 6

        return {
          ...item,
          score,
        }

      })
      .filter((x) => x.score > 0)
      .sort((a, b) => b.score - a.score || a.nombre.localeCompare(b.nombre))
      .slice(0, 8)

  }, [debouncedQuery, index])

  const goToProduct = useCallback((categoria: string, id: string) => {

    setQuery('')
    setFocused(false)

    router.push(`/catalogo/${categoria}/${id}`)

  }, [router])

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {

    e.preventDefault()

    if (!query.trim()) return

    if (resultados.length === 1) {

      goToProduct(resultados[0].categoria, resultados[0].id)
      return

    }

    router.push(`/buscar?q=${encodeURIComponent(query)}`)

  }

  return (

    <div className="relative w-full max-w-3xl">

      <form onSubmit={onSubmit} className="relative">

        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setTimeout(() => setFocused(false), 150)}
          placeholder='Busca extractor, compresor, filtro G4, HVLP...'
          className="w-full rounded-2xl border border-white/20 bg-white px-5 py-4 pr-36 text-gray-900 shadow-lg outline-none transition placeholder:text-gray-400 focus:border-orange-300 focus:ring-4 focus:ring-orange-200"
        />

        <button
          type="submit"
          className="absolute right-2 top-2 inline-flex h-[calc(100%-1rem)] items-center justify-center rounded-xl bg-orange-600 px-5 font-semibold text-white transition hover:bg-orange-700"
        >
          Buscar
        </button>

      </form>

      {focused && query.trim() && (

        <div className="absolute z-50 mt-3 w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl">

          {resultados.length > 0 ? (

            <div className="max-h-[420px] overflow-y-auto py-2">

              {resultados.map((item) => (

                <button
                  key={item.id}
                  onMouseDown={() => goToProduct(item.categoria, item.id)}
                  className="flex w-full items-start gap-3 px-4 py-3 text-left hover:bg-gray-50"
                >

                  <div className="mt-1 h-2.5 w-2.5 rounded-full bg-orange-500" />

                  <div className="min-w-0 flex-1">

                    <div className="truncate font-semibold text-gray-900">
                      {item.nombre}
                    </div>

                    <div className="mt-1 text-sm text-gray-500">
                      {item.descripcion || 'Producto industrial disponible'}
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
              No encontré coincidencias.
            </div>

          )}

        </div>

      )}

    </div>

  )

}