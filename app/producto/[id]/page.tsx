import { getProductoById } from '@/data/productos'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { WhatsAppButton } from '@/app/components/WhatsAppButton'

interface Props {
  params: {
    id: string
  }
}

export default async function ProductoPage({ params }: Props) {
  const producto = getProductoById(params.id)
  
  if (!producto) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-8">
          <a href="/catalogo" className="hover:text-blue-600">Catálogo</a> &gt; 
          <span className="text-gray-700"> {producto.nombre}</span>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            {/* Imagen del producto */}
            <div className="relative h-96 bg-gray-100 rounded-xl overflow-hidden">
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

            {/* Información del producto */}
            <div>
              <h1 className="text-3xl font-bold mb-4">{producto.nombre}</h1>
              <p className="text-gray-600 mb-6">{producto.descripcion}</p>
              
              <div className="mb-6">
                <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  Stock: {producto.stock} unidades
                </span>
              </div>

              {/* Especificaciones técnicas */}
              <div className="border-t border-b py-6 my-6">
                <h2 className="text-xl font-semibold mb-4">Especificaciones técnicas</h2>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(producto.especificaciones).map(([key, value]) => (
                    <div key={key}>
                      <span className="text-sm text-gray-500">{key}:</span>
                      <p className="font-medium">{value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Aplicaciones */}
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-4">Aplicaciones</h2>
                <div className="flex flex-wrap gap-2">
                  {producto.aplicaciones.map((app) => (
                    <span key={app} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              {/* Botón WhatsApp */}
              <WhatsAppButton 
                producto={producto.nombre}
                id={producto.id}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}