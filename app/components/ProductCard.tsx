import Image from 'next/image'
import Link from 'next/link'

export default function ProductCard({ producto }: { producto: any }) {
  return (
    <Link href={`/producto/${producto.id}`}>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all cursor-pointer">
        <div className="relative h-48 bg-gray-100">
          {producto.imagen ? (
            <Image
              src={producto.imagen}
              alt={producto.nombre}
              fill
              className="object-contain"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              Imagen en proceso
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-2">{producto.nombre}</h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{producto.descripcion}</p>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">Stock: {producto.stock}</span>
            <span className="text-blue-600">Ver detalles →</span>
          </div>
        </div>
      </div>
    </Link>
  )
}