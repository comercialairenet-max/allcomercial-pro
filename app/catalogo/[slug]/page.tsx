import { productos } from '@/data/productos'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

// Función para obtener especificaciones de ejemplo (ajústalas según tus datos)
const getEspecificacionesEjemplo = (producto: any) => {
  // Si el producto ya tiene especificaciones, úsalas
  if (producto.especificaciones && Object.keys(producto.especificaciones).length > 0) {
    return producto.especificaciones
  }
  
  // Si no, genera algunas basadas en el nombre
  return {
    'Tipo': producto.categoria.split('-').pop() || 'Industrial',
    'Material': 'Consultar',
    'Aplicación': 'Industrial'
  }
}

export default async function CategoriaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  
  const productosCategoria = productos.filter(p => p.categoria === slug)
  
  if (productosCategoria.length === 0) {
    notFound()
  }

  const nombreCategoria = slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  // Calcular stats para filtros
  const totalStock = productosCategoria.reduce((acc, p) => acc + (p.stock || 0), 0)
  const productosEnStock = productosCategoria.filter(p => (p.stock || 0) > 0).length

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb mejorado */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-blue-600 transition-colors">
            Inicio
          </Link>
          <span className="text-gray-300">/</span>
          <Link href="/catalogo" className="hover:text-blue-600 transition-colors">
            Catálogo
          </Link>
          <span className="text-gray-300">/</span>
          <span className="text-gray-700 font-medium">{nombreCategoria}</span>
        </nav>

        {/* Header de categoría con stats */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
              {nombreCategoria}
            </h1>
            <span className="px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
              {productosCategoria.length} productos
            </span>
          </div>
          
          <div className="flex flex-wrap items-center gap-6 text-gray-600">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>{productosEnStock} productos en stock</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
              <span>{totalStock} unidades disponibles</span>
            </div>
          </div>
        </div>

        {/* Layout con filtros y productos */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar de filtros */}
          <aside className="lg:w-80 flex-shrink-0">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-semibold text-gray-900 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                  Filtros
                </h2>
                <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                  Limpiar
                </button>
              </div>

              {/* Filtro por disponibilidad */}
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-gray-700 mb-3">Disponibilidad</h3>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded border-gray-300" />
                    <span className="text-sm text-gray-600">En stock ({productosEnStock})</span>
                  </label>
                  <label className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 rounded border-gray-300" />
                    <span className="text-sm text-gray-600">Destacados</span>
                  </label>
                </div>
              </div>

              {/* Filtro por precio (placeholder - descomenta si tienes precios) */}
              {/* <div className="mb-8">
                <h3 className="text-sm font-semibold text-gray-700 mb-3">Rango de precio</h3>
                <div className="space-y-4">
                  <div className="flex gap-2">
                    <input 
                      type="number" 
                      placeholder="Mín" 
                      className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <input 
                      type="number" 
                      placeholder="Máx" 
                      className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <button className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium">
                    Aplicar
                  </button>
                </div>
              </div> */}

              {/* Filtro por características comunes */}
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-3">Características</h3>
                <div className="space-y-2 max-h-60 overflow-y-auto pr-2">
                  {Array.from(new Set(productosCategoria.flatMap(p => 
                    Object.keys(getEspecificacionesEjemplo(p))
                  ))).slice(0, 5).map((key) => (
                    <label key={key} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 text-blue-600 rounded border-gray-300" />
                      <span className="text-sm text-gray-600 capitalize">{key}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Grid de productos */}
          <div className="flex-1">
            {productosCategoria.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-gray-500">No hay productos en esta categoría</p>
              </div>
            ) : (
              <>
                {/* Vista compacta del grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {productosCategoria.map((producto) => {
                    const especificaciones = getEspecificacionesEjemplo(producto)
                    
                    return (
                      <Link href={`/producto/${producto.id}`} key={producto.id} className="group">
                        <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200 h-full flex flex-col">
                          
                          {/* Contenedor de imagen con overlay */}
                          <div className="relative h-56 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                            {producto.imagen ? (
                              <>
                                <Image
                                  src={producto.imagen}
                                  alt={producto.nombre}
                                  fill
                                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                
                                {/* Badge de categoría */}
                                <div className="absolute top-3 left-3">
                                  <span className="px-3 py-1 text-xs font-medium bg-white/90 backdrop-blur-sm rounded-full text-gray-700 shadow-sm">
                                    {producto.categoria.split('-').pop()}
                                  </span>
                                </div>

                                {/* Badge de stock */}
                                {(producto.stock || 0) <= 3 && (
                                  <div className="absolute top-3 right-3">
                                    <span className="px-3 py-1 text-xs font-medium bg-orange-500 text-white rounded-full shadow-sm">
                                      Últimas {(producto.stock || 0)} unidades
                                    </span>
                                  </div>
                                )}
                              </>
                            ) : (
                              <div className="w-full h-full flex items-center justify-center text-gray-400">
                                <div className="text-center">
                                  <svg className="w-12 h-12 mx-auto mb-2 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                  </svg>
                                  <span className="text-sm">Sin imagen</span>
                                </div>
                              </div>
                            )}
                          </div>

                          {/* Contenido del producto */}
                          <div className="p-5 flex-1 flex flex-col">
                            <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                              {producto.nombre}
                            </h3>
                            
                            <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                              {producto.descripcion}
                            </p>

                            {/* Especificaciones rápidas */}
                            {especificaciones && (
                              <div className="mb-4 flex flex-wrap gap-2">
                                {Object.entries(especificaciones).slice(0, 3).map(([key, value]) => (
                                  <span 
                                    key={key} 
                                    className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-md"
                                    title={`${key}: ${value}`}
                                  >
                                    {key}: {value}
                                  </span>
                                ))}
                              </div>
                            )}

                            {/* Tags si existen */}
                            {producto.tags && producto.tags.length > 0 && (
                              <div className="mb-4 flex flex-wrap gap-1">
                                {producto.tags.slice(0, 3).map(tag => (
                                  <span key={tag} className="text-xs text-gray-400">
                                    #{tag}
                                  </span>
                                ))}
                              </div>
                            )}

                            {/* Footer con stock y acción */}
                            <div className="mt-auto pt-4 border-t border-gray-100">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  <span className="text-sm text-gray-500">Stock:</span>
                                  <span className={`text-sm font-medium ${
                                    (producto.stock || 0) > 5 ? 'text-green-600' : 
                                    (producto.stock || 0) > 0 ? 'text-orange-500' : 'text-red-500'
                                  }`}>
                                    {producto.stock || 0} {producto.stock === 1 ? 'unidad' : 'unidades'}
                                  </span>
                                </div>
                                
                                <span className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 group-hover:gap-2 transition-all">
                                  Ver ficha
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                  </svg>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    )
                  })}
                </div>

                {/* Estadísticas de productos */}
                <div className="mt-12 text-sm text-gray-500 border-t border-gray-200 pt-8 text-center">
                  Mostrando {productosCategoria.length} de {productosCategoria.length} productos en {nombreCategoria}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}