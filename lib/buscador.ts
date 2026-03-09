import Fuse from "fuse.js"
import { productos } from "@/data/productos"

const fuse = new Fuse(productos, {
  threshold: 0.35,
  includeScore: true,
  keys: [
    "nombre",
    "descripcion",
    "codigo",
    "marca",
    "categoria"
  ]
})

export function buscarProductos(query: string) {

  if (!query || query.length < 2) return productos

  const results = fuse.search(query)

  return results.map(r => r.item)

}