import { productos, Producto } from '@/data/productos'

export type CategoriaSlug =
  | 'filtracion-industrial'
  | 'ventilacion-industrial'
  | 'sistemas-de-aire-comprimido'
  | 'cabinas-de-pintura'
  | 'equipos-para-lavaderos'
  | 'equipos-para-reparacion-de-carrocerias'
  | 'lamparas-de-secado-ir'
  | 'pistolas-de-gravedad'

export type Categoria = {
  slug: CategoriaSlug
  title: string
  subtitle: string
  heroImage: string
  items: Producto[]
}

const productosPorCategoria = productos.reduce((acc, prod) => {
  const categoria = prod.categoria as CategoriaSlug
  if (!acc[categoria]) acc[categoria] = []
  acc[categoria].push(prod)
  return acc
}, {} as Record<CategoriaSlug, Producto[]>)

function getFirstImage(categoria: CategoriaSlug): string {
  const prods = productosPorCategoria[categoria]
  return prods?.find((p) => p.imagen)?.imagen || ''
}

export const CATEGORIES: Categoria[] = [
  {
    slug: 'filtracion-industrial',
    title: 'Filtración Industrial',
    subtitle: 'Filtros y soluciones para procesos industriales exigentes.',
    heroImage: getFirstImage('filtracion-industrial'),
    items: productosPorCategoria['filtracion-industrial'] || [],
  },
  {
    slug: 'ventilacion-industrial',
    title: 'Ventilación Industrial',
    subtitle: 'Extracción, inyección, turbinas y soluciones a medida.',
    heroImage: getFirstImage('ventilacion-industrial'),
    items: productosPorCategoria['ventilacion-industrial'] || [],
  },
  {
    slug: 'sistemas-de-aire-comprimido',
    title: 'Sistemas de Aire Comprimido',
    subtitle: 'Compresores, accesorios y soluciones integrales.',
    heroImage: getFirstImage('sistemas-de-aire-comprimido'),
    items: productosPorCategoria['sistemas-de-aire-comprimido'] || [],
  },
  {
    slug: 'cabinas-de-pintura',
    title: 'Cabinas de Pintura',
    subtitle: 'Control de ventilación y filtrado para acabados profesionales.',
    heroImage: getFirstImage('cabinas-de-pintura'),
    items: productosPorCategoria['cabinas-de-pintura'] || [],
  },
  {
    slug: 'equipos-para-lavaderos',
    title: 'Equipos para Lavaderos',
    subtitle: 'Soluciones profesionales para lavaderos y túneles de lavado.',
    heroImage: getFirstImage('equipos-para-lavaderos'),
    items: productosPorCategoria['equipos-para-lavaderos'] || [],
  },
  {
    slug: 'equipos-para-reparacion-de-carrocerias',
    title: 'Equipos para Reparación de Carrocerías',
    subtitle: 'Herramientas y equipos para talleres de carrocería y pintura.',
    heroImage: getFirstImage('equipos-para-reparacion-de-carrocerias'),
    items: productosPorCategoria['equipos-para-reparacion-de-carrocerias'] || [],
  },
  {
    slug: 'lamparas-de-secado-ir',
    title: 'Lámparas de Secado IR',
    subtitle: 'Tecnología infrarroja para secado rápido en cabinas y talleres.',
    heroImage: getFirstImage('lamparas-de-secado-ir'),
    items: productosPorCategoria['lamparas-de-secado-ir'] || [],
  },
  {
    slug: 'pistolas-de-gravedad',
    title: 'Pistolas de Gravedad',
    subtitle: 'Pistolas profesionales para acabados de alta calidad.',
    heroImage: getFirstImage('pistolas-de-gravedad'),
    items: productosPorCategoria['pistolas-de-gravedad'] || [],
  },
]

export function getCategoriaBySlug(slug: string): Categoria | undefined {
  return CATEGORIES.find((c) => c.slug === slug)
}

export function getAllCategorias(): Categoria[] {
  return CATEGORIES
}

export function getProductosDeCategoria(slug: string): Producto[] {
  return getCategoriaBySlug(slug)?.items || []
}

export function categoriaExiste(slug: string): boolean {
  return CATEGORIES.some((c) => c.slug === slug)
}