import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const rootDir = path.resolve(__dirname, '..')
const filePath = path.join(rootDir, 'data', 'productos.json')

const categoriasValidas = new Set([
  'filtracion-industrial',
  'ventilacion-industrial',
  'sistemas-de-aire-comprimido',
  'cabinas-de-pintura',
  'equipos-para-lavaderos',
  'equipos-para-reparacion-de-carrocerias',
  'lamparas-de-secado-ir',
  'pistolas-de-gravedad',
])

function isNonEmptyString(value) {
  return typeof value === 'string' && value.trim().length > 0
}

function isOptionalString(value) {
  return value === undefined || typeof value === 'string'
}

function isOptionalNumber(value) {
  return value === undefined || typeof value === 'number'
}

function isOptionalBoolean(value) {
  return value === undefined || typeof value === 'boolean'
}

function isStringArray(value) {
  return Array.isArray(value) && value.every((item) => typeof item === 'string')
}

function isSpecsObject(value) {
  if (value === undefined) return true
  if (typeof value !== 'object' || value === null || Array.isArray(value)) return false

  return Object.values(value).every(
    (v) => typeof v === 'string' || typeof v === 'number'
  )
}

function fail(errors) {
  console.error('\n❌ Validación fallida en productos.json\n')
  for (const error of errors) {
    console.error(`- ${error}`)
  }
  console.error(`\nTotal errores: ${errors.length}\n`)
  process.exit(1)
}

function ok(total) {
  console.log('\n✅ productos.json válido')
  console.log(`📦 Total productos validados: ${total}\n`)
  process.exit(0)
}

if (!fs.existsSync(filePath)) {
  fail([`No existe el archivo: ${filePath}`])
}

let productos
try {
  const raw = fs.readFileSync(filePath, 'utf8')
  productos = JSON.parse(raw)
} catch (error) {
  fail([`No se pudo leer o parsear productos.json: ${error.message}`])
}

if (!Array.isArray(productos)) {
  fail(['El archivo productos.json debe contener un array de productos.'])
}

const errors = []
const ids = new Map()

productos.forEach((producto, index) => {
  const ref = `producto #${index + 1}`

  if (typeof producto !== 'object' || producto === null || Array.isArray(producto)) {
    errors.push(`${ref}: debe ser un objeto válido.`)
    return
  }

  if (!isNonEmptyString(producto.id)) {
    errors.push(`${ref}: "id" es obligatorio y debe ser texto no vacío.`)
  } else {
    if (ids.has(producto.id)) {
      errors.push(
        `${ref}: "id" duplicado "${producto.id}" (también aparece en producto #${ids.get(producto.id)}).`
      )
    } else {
      ids.set(producto.id, index + 1)
    }
  }

  if (!isNonEmptyString(producto.categoria)) {
    errors.push(`${ref}: "categoria" es obligatoria y debe ser texto no vacío.`)
  } else if (!categoriasValidas.has(producto.categoria)) {
    errors.push(
      `${ref}: "categoria" inválida "${producto.categoria}".`
    )
  }

  if (!isNonEmptyString(producto.nombre)) {
    errors.push(`${ref}: "nombre" es obligatorio y debe ser texto no vacío.`)
  }

  if (!isOptionalString(producto.descripcion)) {
    errors.push(`${ref}: "descripcion" debe ser texto si existe.`)
  }

  if (!isOptionalString(producto.imagen)) {
    errors.push(`${ref}: "imagen" debe ser texto si existe.`)
  }

  if (producto.gallery !== undefined && !isStringArray(producto.gallery)) {
    errors.push(`${ref}: "gallery" debe ser un array de textos.`)
  }

  if (!isSpecsObject(producto.especificaciones)) {
    errors.push(
      `${ref}: "especificaciones" debe ser un objeto con valores string o number.`
    )
  }

  if (typeof producto.stock !== 'number' || Number.isNaN(producto.stock)) {
    errors.push(`${ref}: "stock" es obligatorio y debe ser numérico.`)
  } else if (producto.stock < 0) {
    errors.push(`${ref}: "stock" no puede ser negativo.`)
  }

  if (!isOptionalString(producto.codigo)) {
    errors.push(`${ref}: "codigo" debe ser texto si existe.`)
  }

  if (!isOptionalString(producto.marca)) {
    errors.push(`${ref}: "marca" debe ser texto si existe.`)
  }

  if (!isOptionalNumber(producto.precio)) {
    errors.push(`${ref}: "precio" debe ser numérico si existe.`)
  } else if (typeof producto.precio === 'number' && producto.precio < 0) {
    errors.push(`${ref}: "precio" no puede ser negativo.`)
  }

  if (!isOptionalBoolean(producto.destacado)) {
    errors.push(`${ref}: "destacado" debe ser booleano si existe.`)
  }

  if (producto.tags !== undefined && !isStringArray(producto.tags)) {
    errors.push(`${ref}: "tags" debe ser un array de textos.`)
  }
})

if (errors.length > 0) {
  fail(errors)
}

ok(productos.length)