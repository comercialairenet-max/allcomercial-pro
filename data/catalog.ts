export interface Product {
  id: string
  name: string
  description: string
  category: string
  subcategory?: string
  tags: string[]
  price?: number
  image?: string
  features: string[]
  applications: string[]
}

export const products: Product[] = [
  // Filtración Industrial
  {
    id: "filtro-axial-16",
    name: "Filtro Axial 16\"",
    description: "Filtro de alta eficiencia para sistemas de ventilación industrial",
    category: "Filtración Industrial",
    tags: ["axial", "filtro", "16", "industrial", "ventilación"],
    features: ["Alta eficiencia", "Fácil instalación", "Larga vida útil"],
    applications: ["Industria química", "Farmacéutica", "Alimenticia"]
  },
  {
    id: "filtro-hepa-14",
    name: "Filtro HEPA H14",
    description: "Filtro de alta eficiencia para partículas submicrónicas",
    category: "Filtración Industrial",
    tags: ["hepa", "h14", "alta eficiencia", "partículas", "limpio"],
    features: ["Eficiencia 99.99%", "Marco de acero", "Junta de sellado"],
    applications: ["Salas limpias", "Hospitales", "Laboratorios"]
  },
  {
    id: "filtro-carbon-activado",
    name: "Filtro Carbón Activado",
    description: "Eliminación de olores y compuestos orgánicos volátiles",
    category: "Filtración Industrial",
    tags: ["carbón", "activado", "olores", "cov", "químicos"],
    features: ["Alta adsorción", "Larga duración", "Regenerable"],
    applications: ["Tratamiento de aire", "Industria química", "Laboratorios"]
  },
  
  // Sistemas de Aire Comprimido
  {
    id: "compresor-tornillo-15hp",
    name: "Compresor Tornillo 15HP",
    description: "Compresor industrial de tornillo con secador integrado",
    category: "Sistemas de Aire Comprimido",
    tags: ["compresor", "tornillo", "15hp", "industrial", "secador"],
    features: ["Bajo ruido", "Eficiencia energética", "Mantenimiento sencillo"],
    applications: ["Talleres", "Industria ligera", "Automotriz"]
  },
  {
    id: "secador-frigorifico-50hp",
    name: "Secador Frigorífico 50HP",
    description: "Secador de aire comprimido por refrigeración",
    category: "Sistemas de Aire Comprimido",
    tags: ["secador", "frigorífico", "50hp", "refrigeración"],
    features: ["Punto de rocío estable", "Bajo consumo", "Filtro incluido"],
    applications: ["Industria pesada", "Textil", "Alimenticia"]
  },
  
  // Ventilación Industrial
  {
    id: "extractor-axial-24",
    name: "Extractor Axial 24\"",
    description: "Extractor de aire industrial de alta capacidad",
    category: "Ventilación Industrial",
    tags: ["extractor", "axial", "24", "ventilación", "industrial"],
    features: ["Alto caudal", "Motor eficiente", "Protección intemperie"],
    applications: ["Naves industriales", "Almacenes", "Talleres"]
  },
  {
    id: "inyector-centrifugo-12",
    name: "Inyector Centrífugo 12\"",
    description: "Inyector de aire para sistemas de ventilación",
    category: "Ventilación Industrial",
    tags: ["inyector", "centrífugo", "12", "ventilación"],
    features: ["Alta presión", "Bajo ruido", "Transmisión por poleas"],
    applications: ["Ductos largos", "Extracción localizada", "Sistemas HV DS"]
  },
  
  // Cabinas de Pintura
  {
    id: "cabina-pintura-automotriz",
    name: "Cabina de Pintura Automotriz",
    description: "Cabina completa para pintura de vehículos",
    category: "Cabinas de Pintura",
    tags: ["cabina", "pintura", "automotriz", "vehículos", "filtros"],
    features: ["Iluminación LED", "Filtros de techo", "Extracción inferior"],
    applications: ["Talleres automotrices", "Carrocería", "Restauración"]
  },
  {
    id: "filtro-techo-cabina",
    name: "Filtro Techo para Cabina",
    description: "Filtro de techo para cabinas de pintura",
    category: "Cabinas de Pintura",
    tags: ["filtro", "techo", "cabina", "pintura", "plenum"],
    features: ["Distribución uniforme", "Alta retención", "Fácil cambio"],
    applications: ["Cabinas de pintura", "Salas limpias", "Laboratorios"]
  }
]

// Función para obtener todas las categorías
export function getCategories() {
  const categories = new Map()
  
  products.forEach(product => {
    if (!categories.has(product.category)) {
      categories.set(product.category, {
        name: product.category,
        count: 0,
        subcategories: new Set()
      })
    }
    const cat = categories.get(product.category)
    cat.count++
    if (product.subcategory) {
      cat.subcategories.add(product.subcategory)
    }
  })
  
  return Array.from(categories.values()).map(cat => ({
    ...cat,
    subcategories: Array.from(cat.subcategories)
  }))
}

// Función para obtener productos por categoría
export function getProductsByCategory(category: string) {
  return products.filter(p => p.category === category)
}