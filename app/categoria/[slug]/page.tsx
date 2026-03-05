import { getProductosPorCategoria } from '@/data/productos'
import ProductCard from '@/app/components/ProductCard'

export default function CategoriaPage({ params }: { params: { slug: string } }) {
  const categoria = params.slug === 'filtracion-industrial' ? 'filtracion' 
                  : params.slug === 'ventilacion-industrial' ? 'ventilacion'
                  : params.slug === 'aire-comprimido' ? 'aire'
                  : 'cabinas'
  
  const productos = getProductosPorCategoria(categoria)

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 capitalize">
          {params.slug.replace(/-/g, ' ')}
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productos.map(producto => (
            <ProductCard key={producto.id} producto={producto} />
          ))}
        </div>
      </div>
    </div>
  )
}