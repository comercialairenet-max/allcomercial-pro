export type Producto = {
  id: string
  categoria: string
  nombre: string
  descripcion?: string
  imagen?: string
  gallery?: string[]
  especificaciones?: Record<string, string | number>
  stock: number
  codigo?: string
  marca?: string
  precio?: number
  destacado?: boolean
  tags?: string[]
}