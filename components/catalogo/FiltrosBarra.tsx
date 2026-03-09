'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import type { FiltrosDisponibles } from '@/lib/filtros'

type Props = {
  filtros: FiltrosDisponibles
}

export default function FiltrosBarra({ filtros }: Props) {

  const router = useRouter()
  const params = useSearchParams()

  function toggle(key: string, value: string) {

    const p = new URLSearchParams(params.toString())
    const values = p.getAll(key)

    if (values.includes(value)) {

      const next = values.filter(v => v !== value)
      p.delete(key)
      next.forEach(v => p.append(key, v))

    } else {

      p.append(key, value)

    }

    router.push(`/buscar?${p.toString()}`)
  }

  function active(key: string, value: string) {
    return params.getAll(key).includes(value)
  }

  return (

    <div className="flex flex-wrap gap-2">

      {/* Categorías */}
      {filtros.categorias.slice(0,6).map(c => (

        <button
          key={c.value}
          onClick={() => toggle("cat", c.value)}
          className={`px-3 py-1.5 rounded-full text-sm border transition
          ${active("cat", c.value)
            ? "bg-orange-600 text-white border-orange-600"
            : "bg-white hover:bg-gray-100"
          }`}
        >
          {c.label}
        </button>

      ))}

      {/* Marcas */}
      {filtros.marcas.slice(0,6).map(m => (

        <button
          key={m.value}
          onClick={() => toggle("marca", m.value)}
          className={`px-3 py-1.5 rounded-full text-sm border transition
          ${active("marca", m.value)
            ? "bg-orange-600 text-white border-orange-600"
            : "bg-white hover:bg-gray-100"
          }`}
        >
          {m.label}
        </button>

      ))}

    </div>

  )
}