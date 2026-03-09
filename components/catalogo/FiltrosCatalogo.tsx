// components/catalogo/FiltrosCatalogo.tsx
'use client'

import { useMemo } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import type { FiltrosDisponibles } from '@/lib/filtros'

type Props = {
  filtros: FiltrosDisponibles
}

export default function FiltrosCatalogo({ filtros }: Props) {
  const router = useRouter()
  const params = useSearchParams()

  const current = useMemo(() => new URLSearchParams(params.toString()), [params])

  function toggleParam(key: string, value: string) {
    const p = new URLSearchParams(current.toString())
    const existing = p.getAll(key)

    if (existing.includes(value)) {
      // quitar
      const next = existing.filter((v) => v !== value)
      p.delete(key)
      next.forEach((v) => p.append(key, v))
    } else {
      p.append(key, value)
    }

    router.push(`/buscar?${p.toString()}`)
  }

  function isActive(key: string, value: string) {
    return params.getAll(key).includes(value)
  }

  return (
    <aside className="w-full max-w-xs space-y-6">

      {/* Categorías */}
      <div>
        <h3 className="mb-2 font-semibold">Categoría</h3>
        <div className="space-y-1">
          {filtros.categorias.map((c) => (
            <button
              key={c.value}
              onClick={() => toggleParam('cat', c.value)}
              className={`block w-full rounded-lg px-3 py-2 text-left text-sm ${
                isActive('cat', c.value)
                  ? 'bg-orange-100 text-orange-700'
                  : 'hover:bg-gray-100'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* Marcas */}
      {filtros.marcas.length > 0 && (
        <div>
          <h3 className="mb-2 font-semibold">Marca</h3>
          <div className="space-y-1">
            {filtros.marcas.map((m) => (
              <button
                key={m.value}
                onClick={() => toggleParam('marca', m.value)}
                className={`block w-full rounded-lg px-3 py-2 text-left text-sm ${
                  isActive('marca', m.value)
                    ? 'bg-orange-100 text-orange-700'
                    : 'hover:bg-gray-100'
                }`}
              >
                {m.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Specs dinámicas */}
      {Object.entries(filtros.specs).map(([key, values]) => (
        <div key={key}>
          <h3 className="mb-2 font-semibold uppercase">{key}</h3>
          <div className="space-y-1">
            {values.slice(0, 12).map((v) => (
              <button
                key={v.value}
                onClick={() => toggleParam(key, v.value)}
                className={`block w-full rounded-lg px-3 py-2 text-left text-sm ${
                  isActive(key, v.value)
                    ? 'bg-orange-100 text-orange-700'
                    : 'hover:bg-gray-100'
                }`}
              >
                {v.label}
              </button>
            ))}
          </div>
        </div>
      ))}
    </aside>
  )
}