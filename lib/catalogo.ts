import { productos, Producto } from "@/data/productos";

// Agrupar productos por categoría
const productosPorCategoria = productos.reduce((acc, prod) => {
  if (!acc[prod.categoria]) {
    acc[prod.categoria] = []
  }
  acc[prod.categoria].push(prod)
  return acc
}, {} as Record<string, Producto[]>)

// Función para transformar producto al formato que espera el componente
function transformarProducto(prod: Producto) {
  return {
    id: prod.id,
    name: prod.nombre,
    short: prod.descripcion,
    brand: "Industrial",
    ref: prod.id.split('-')[0] || prod.id,
    image: prod.imagen,
    waMessage: `Hola, quiero cotizar: ${prod.nombre}.`
  }
}

export const CATEGORIES = [
  {
    slug: "filtracion-industrial",
    title: "Filtración Industrial",
    subtitle: "Filtros y soluciones para procesos industriales exigentes.",
    heroImage: "/imagenes/filtracion-industrial/hero.jpg", // ← Imagen destacada
    items: productosPorCategoria["filtracion-industrial"] || [],
  },
  {
    slug: "ventilacion-industrial",
    title: "Ventilación Industrial",
    subtitle: "Extracción, inyección, turbinas y soluciones a medida.",
    heroImage: "/catalogo/ventilacion-industrial/hero.jpg",
    items: (productosPorCategoria["ventilacion-industrial"] || []).map(transformarProducto),
  },
  {
    slug: "sistemas-de-aire-comprimido",
    title: "Sistemas de Aire Comprimido",
    subtitle: "Compresores, accesorios y soluciones integrales.",
    heroImage: "/catalogo/sistemas-de-aire-comprimido/hero.jpg",
    items: (productosPorCategoria["sistemas-de-aire-comprimido"] || []).map(transformarProducto),
  },
  {
    slug: "cabinas-de-pintura",
    title: "Cabinas de Pintura",
    subtitle: "Control de ventilación y filtrado para acabados profesionales.",
    heroImage: "/catalogo/cabinas-de-pintura/hero.jpg",
    items: (productosPorCategoria["cabinas-de-pintura"] || []).map(transformarProducto),
  },
  {
    slug: "equipos-para-lavaderos",
    title: "Equipos para Lavaderos",
    subtitle: "Soluciones profesionales para lavaderos y túneles de lavado.",
    heroImage: "/catalogo/equipos-para-lavaderos/hero.jpg",
    items: (productosPorCategoria["equipos-para-lavaderos"] || []).map(transformarProducto),
  },
  {
    slug: "equipos-para-reparacion-de-carrocerias",
    title: "Equipos para Reparación de Carrocerías",
    subtitle: "Herramientas y equipos para talleres de carrocería y pintura.",
    heroImage: "/catalogo/equipos-para-reparacion-de-carrocerias/hero.jpg",
    items: (productosPorCategoria["equipos-para-reparacion-de-carrocerias"] || []).map(transformarProducto),
  },
  {
    slug: "lamparas-de-secado-ir",
    title: "Lámparas de Secado IR",
    subtitle: "Tecnología infrarroja para secado rápido en cabinas y talleres.",
    heroImage: "/catalogo/lamparas-de-secado-ir/hero.jpg",
    items: (productosPorCategoria["lamparas-de-secado-ir"] || []).map(transformarProducto),
  },
  {
    slug: "pistolas-de-gravedad",
    title: "Pistolas de Gravedad",
    subtitle: "Pistolas profesionales para acabados de alta calidad.",
    heroImage: "/catalogo/pistolas-de-gravedad/hero.jpg",
    items: (productosPorCategoria["pistolas-de-gravedad"] || []).map(transformarProducto),
  }
]

// Función auxiliar para obtener categoría por slug
export function getCategoriaBySlug(slug: string) {
  return CATEGORIES.find(c => c.slug === slug)
}