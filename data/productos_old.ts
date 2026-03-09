import productosData from './productos.json'
import type { Producto } from './productos.types'

export type { Producto } from './productos.types'

export const productos: Producto[] = productosData as Producto[]

/* ========================================
HELPERS PRINCIPALES
======================================== */

export function getProductoById(id: string): Producto | undefined {
  return productos.find((producto) => producto.id === id)
}

export function getProductosByCategoria(categoria: string): Producto[] {
  return productos.filter((producto) => producto.categoria === categoria)
}

export function getProductosDestacados(): Producto[] {
  return productos.filter((producto) => producto.destacado)
}

/* ========================================
CACHE DE BUSQUEDA (MEJORA PRODUCCION)
======================================== */

const cacheBusqueda = new Map<string, Producto[]>()

export function buscarProductos(query: string): Producto[] {
  const q = normalizarTexto(query)

  if (!q || q.length < 2) return []

  if (cacheBusqueda.has(q)) {
    return cacheBusqueda.get(q)!
  }

  const resultados = productos
    .map((producto) => {
      const textoBusqueda = construirTextoBusqueda(producto)

      let score = 0

      if (producto.codigo && normalizarTexto(producto.codigo) === q) score += 50
      if (normalizarTexto(producto.nombre).includes(q)) score += 10
      if (normalizarTexto(producto.categoria).includes(q)) score += 5
      if (
        (producto.descripcion
          ? normalizarTexto(producto.descripcion)
          : '').includes(q)
      ) {
        score += 4
      }

      if (textoBusqueda.includes(q)) score += 3

      const palabras = q.split(' ').filter(Boolean)
      const coincidencias = palabras.filter((p) =>
        textoBusqueda.includes(p)
      ).length

      score += coincidencias * 2

      return { producto, score }
    })
    .filter((item) => item.score > 0)
    .sort(
      (a, b) =>
        b.score - a.score ||
        a.producto.nombre.localeCompare(b.producto.nombre)
    )
    .map((item) => item.producto)

  cacheBusqueda.set(q, resultados)

  return resultados
}

function construirTextoBusqueda(producto: Producto): string {
  const nombre = normalizarTexto(producto.nombre)
  const descripcion = producto.descripcion
    ? normalizarTexto(producto.descripcion)
    : ''
  const categoria = normalizarTexto(producto.categoria)
  const codigo = producto.codigo ? normalizarTexto(producto.codigo) : ''
  const marca = producto.marca ? normalizarTexto(producto.marca) : ''
  const tags = producto.tags?.map(normalizarTexto).join(' ') || ''

  const specs = producto.especificaciones
    ? Object.entries(producto.especificaciones)
        .map(([k, v]) => `${k} ${String(v)}`)
        .join(' ')
    : ''

  return expandirBusqueda(
    `${nombre} ${descripcion} ${categoria} ${codigo} ${marca} ${tags} ${specs}`
  )
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
  return normalizarTexto(texto)
    .replace(/"/g, ' pulgadas ')
    .replace(/\bhp\b/g, ' hp potencia ')
    .replace(/\bpsi\b/g, ' psi presion ')
    .replace(/\bir\b/g, ' infrarroja infrarrojo ir ')
    .replace(/\bg4\b/g, ' g4 filtro eficiencia ')
    .replace(/\bf7\b/g, ' f7 filtro eficiencia ')
    .replace(/\bhvac\b/g, ' hvac ventilacion aire filtracion ')
    .replace(/\bhepa\b/g, ' hepa alta eficiencia aire limpio ')
    .replace(/\bmerv\b/g, ' merv eficiencia filtracion ')
    .replace(/\bpocket\b/g, ' pocket bolsa filtro ')
    .replace(/\bmm\b/g, ' mm milimetros ')
    .replace(/\bton\b/g, ' ton tonelada toneladas ')
}