import fs from 'fs'
import path from 'path'
import vm from 'vm'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const rootDir = path.resolve(__dirname, '..')
const sourcePath = path.join(rootDir, 'data', 'productos.ts')
const outputPath = path.join(rootDir, 'data', 'productos.json')

const source = fs.readFileSync(sourcePath, 'utf8')

const exportMarker = 'export const productos'
const exportIndex = source.indexOf(exportMarker)

if (exportIndex === -1) {
  throw new Error(
    'No pude encontrar "export const productos" en data/productos.ts'
  )
}

const equalIndex = source.indexOf('=', exportIndex)

if (equalIndex === -1) {
  throw new Error(
    'No pude encontrar el signo "=" después de "export const productos"'
  )
}

const arrayStart = source.indexOf('[', equalIndex)

if (arrayStart === -1) {
  throw new Error(
    'No pude encontrar el inicio real del array de productos "["'
  )
}

let inSingleQuote = false
let inDoubleQuote = false
let inTemplate = false
let escaped = false
let bracketDepth = 0
let arrayEnd = -1

for (let i = arrayStart; i < source.length; i++) {
  const ch = source[i]

  if (escaped) {
    escaped = false
    continue
  }

  if (ch === '\\') {
    escaped = true
    continue
  }

  if (!inDoubleQuote && !inTemplate && ch === "'") {
    inSingleQuote = !inSingleQuote
    continue
  }

  if (!inSingleQuote && !inTemplate && ch === '"') {
    inDoubleQuote = !inDoubleQuote
    continue
  }

  if (!inSingleQuote && !inDoubleQuote && ch === '`') {
    inTemplate = !inTemplate
    continue
  }

  if (inSingleQuote || inDoubleQuote || inTemplate) {
    continue
  }

  if (ch === '[') {
    bracketDepth++
  } else if (ch === ']') {
    bracketDepth--
    if (bracketDepth === 0) {
      arrayEnd = i
      break
    }
  }
}

if (arrayEnd === -1) {
  throw new Error(
    'No pude encontrar el cierre del array de productos "]"'
  )
}

const arrayLiteral = source.slice(arrayStart, arrayEnd + 1)

let productos
try {
  productos = vm.runInNewContext(`(${arrayLiteral})`, {}, { timeout: 5000 })
} catch (error) {
  throw new Error(
    `No pude convertir el array de productos a JSON válido.\n\nDetalle: ${error.message}`
  )
}

if (!Array.isArray(productos)) {
  throw new Error('El contenido extraído no produjo un array válido.')
}

fs.writeFileSync(outputPath, JSON.stringify(productos, null, 2), 'utf8')

console.log('✅ productos.json generado correctamente en:')
console.log(outputPath)
console.log(`📦 Total productos: ${productos.length}`)