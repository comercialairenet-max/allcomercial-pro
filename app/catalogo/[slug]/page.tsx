import { productos } from '@/data/productos'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

// ✅ Cambiar a async y unwrap params con await
export default async function CategoriaPage({ params }: { params: Promise<{ slug: string }> }) {
  // ✅ Unwrap the params Promise
  const { slug } = await params
  
  const productosCategoria = productos.filter(p => p.categoria === slug)
  
  if (productosCategoria.length === 0) {
    notFound()
  }

  const nombreCategoria = slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-8">
          <Link href="/catalogo" className="hover:text-blue-600">Catálogo</Link> &gt; 
          <span className="text-gray-700"> {nombreCategoria}</span>
        </div>

        <h1 className="text-3xl font-bold mb-8">{nombreCategoria}</h1>
        <p className="text-gray-600 mb-8">{productosCategoria.length} productos disponibles</p>

        {/* Grid de productos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {productosCategoria.map((producto) => (
            <Link href={`/producto/${producto.id}`} key={producto.id}>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
                <div className="relative h-48 bg-gray-100">
                  {producto.imagen && (
                    <Image
                      src={producto.imagen}
                      alt={producto.nombre}
                      fill
                      className="object-contain p-2"
                    />
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2">{producto.nombre}</h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">{producto.descripcion}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Stock: {producto.stock}</span>
                    <span className="text-blue-600">Ver más →</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}