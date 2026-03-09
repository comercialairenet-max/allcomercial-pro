// lib/filtros.ts
import { productos } from '@/data/productos'
import { getCategoriaBySlug } from '@/lib/catalogo'

type FiltroValor = { label: string; value: string }

export type FiltrosDisponibles = {
  categorias: FiltroValor[]
  marcas: FiltroValor[]
  specs: Record<string, FiltroValor[]> // ej: { hp: [{label:'5 HP', value:'5 hp'}], psi: [...] }
}

function normalizar(texto: string) {
  return texto
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
}

export function construirFiltros(): FiltrosDisponibles {
  const setCategorias = new Map<string, string>()
  const setMarcas = new Map<string, string>()
  const specs: Record<string, Set<string>> = {}

  for (const p of productos) {
    const catTitle = getCategoriaBySlug(p.categoria)?.title || p.categoria
    setCategorias.set(p.categoria, catTitle)

    if ((p as any).marca) {
      const m = String((p as any).marca)
      setMarcas.set(normalizar(m), m)
    }

    const e = (p as any).especificaciones || {}
    Object.entries(e).forEach(([k, v]) => {
      const key = normalizar(k)
      const val = String(v)
      if (!specs[key]) specs[key] = new Set()
      specs[key].add(val)
    })
  }

  const categorias = Array.from(setCategorias.entries()).map(([value, label]) => ({
    value,
    label,
  }))

  const marcas = Array.from(setMarcas.entries()).map(([value, label]) => ({
    value,
    label,
  }))

  const specsOut: Record<string, FiltroValor[]> = {}
  Object.entries(specs).forEach(([k, set]) => {
    specsOut[k] = Array.from(set.values())
      .sort((a, b) => a.localeCompare(b))
      .map((v) => ({ label: v, value: normalizar(v) }))
  })

  return { categorias, marcas, specs: specsOut }
}