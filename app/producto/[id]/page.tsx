import { getProductoById } from "@/data/productos"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

type Props = {
  params?: {
    id: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {

  const id = params?.id || ""

  const producto = getProductoById(id)

  if (!producto) {
    return {
      title: "Producto no encontrado"
    }
  }

  const titulo = `${producto.nombre} | RPM Industrial`

  const descripcion =
    producto.descripcion ||
    `Venta de ${producto.nombre} en Bogotá Colombia. Equipos industriales RPM.`

  return {
    title: titulo,
    description: descripcion,

    openGraph: {
      title: titulo,
      description: descripcion,
      images: producto.imagen ? [producto.imagen] : [],
      type: "website"
    }
  }

}

export default function ProductoPage({ params }: Props) {

  const id = params?.id || ""

  const producto = getProductoById(id)

  if (!producto) return notFound()

  return (

    <div>

      {/* tu layout existente */}

    </div>

  )

}