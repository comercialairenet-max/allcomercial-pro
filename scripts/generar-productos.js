const fs = require('fs')
const path = require('path')

const categorias = {
  'filtracion-industrial': 'Filtración Industrial',
  'ventilacion-industrial': 'Ventilación Industrial', 
  'sistemas-de-aire-comprimido': 'Aire Comprimido',
  'cabinas-de-pintura': 'Cabinas de Pintura',
  'equipos-para-lavaderos': 'Equipos para Lavaderos',
  'equipos-para-reparacion-de-carrocerias': 'Equipos para Carrocerías',
  'lamparas-de-secado-ir': 'Lámparas IR',
  'pistolas-de-gravedad': 'Pistolas de Gravedad'
}

const productos = []

// Recorrer cada categoría
Object.keys(categorias).forEach(categoriaDir => {
  const rutaCategoria = path.join('public', 'catalogo', categoriaDir)
  
  if (fs.existsSync(rutaCategoria)) {
    const archivos = fs.readdirSync(rutaCategoria)
    
    archivos.forEach(archivo => {
      // Extraer ID del nombre del archivo (primeros caracteres)
      const idMatch = archivo.match(/^p(\d+)/)
      const id = idMatch ? `p${idMatch[1]}` : `prod-${Date.now()}-${Math.random()}`
      
      // Crear nombre legible a partir del archivo
      const nombreTemp = archivo
        .replace(/\.[^/.]+$/, '') // quitar extensión
        .replace(/-/g, ' ')
        .replace(/\b\w/g, l => l.toUpperCase())
      
      productos.push({
        id,
        nombre: nombreTemp,
        descripcion: `Producto de ${categorias[categoriaDir]}. Cotización y soporte técnico disponible.`,
        categoria: categoriaDir,
        imagen: `/imagenes/${categoriaDir}/${archivo}`,
        especificaciones: {
          "Tipo": categorias[categoriaDir],
          "Material": "Consultar",
          "Aplicación": "Industrial"
        },
        aplicaciones: ["Industrial", "Comercial"],
        stock: 10,
        destacado: true,
        tags: nombreTemp.toLowerCase().split(' ')
      })
    })
  }
})

// Guardar el archivo
const output = `export interface Producto {
  id: string
  nombre: string
  descripcion: string
  categoria: string
  imagen: string
  especificaciones: Record<string, string>
  aplicaciones: string[]
  stock: number
  destacado: boolean
  tags: string[]
}

export const productos: Producto[] = ${JSON.stringify(productos, null, 2)}
`

fs.writeFileSync('data/productos.ts', output)
console.log(`✅ Generados ${productos.length} productos`)