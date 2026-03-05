'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { getCategories, getProductsByCategory } from '@/data/catalog'
import { TrendingUp, Filter, ChevronRight } from 'lucide-react'

export function CategoriesIA() {
  const [categories, setCategories] = useState<any[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [categoryProducts, setCategoryProducts] = useState<any[]>([])
  const [popularTags, setPopularTags] = useState<string[]>([])

  useEffect(() => {
    // Cargar categorías
    const cats = getCategories()
    setCategories(cats)

    // Calcular tags populares (simulado con IA)
    const allTags = cats.flatMap(cat => {
      const products = getProductsByCategory(cat.name)
      return products.flatMap(p => p.tags)
    })
    
    // Contar frecuencia de tags
    const tagCount = new Map()
    allTags.forEach(tag => {
      tagCount.set(tag, (tagCount.get(tag) || 0) + 1)
    })
    
    // Top 10 tags más populares
    const topTags = Array.from(tagCount.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10)
      .map(([tag]) => tag)
    
    setPopularTags(topTags)
  }, [])

  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(categoryName)
    const products = getProductsByCategory(categoryName)
    setCategoryProducts(products)
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      {/* Tags populares (tendencias) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="w-5 h-5 text-blue-600" />
          <h3 className="font-semibold text-lg">Tendencias de búsqueda</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {popularTags.map((tag, index) => (
            <motion.button
              key={tag}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => window.location.href = `/buscar?tag=${tag}`}
              className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 
                       hover:from-blue-100 hover:to-purple-100 
                       text-blue-700 rounded-full text-sm font-medium
                       border border-blue-200 transition-all transform hover:scale-105"
            >
              {tag}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Categorías dinámicas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden 
                     hover:shadow-xl transition-all cursor-pointer group"
            onClick={() => handleCategoryClick(category.name)}
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition">
                  {category.name}
                </h3>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                  {category.count} items
                </span>
              </div>
              
              <p className="text-gray-600 text-sm mb-4">
                {getCategoryDescription(category.name)}
              </p>

              {/* Subcategorías (si existen) */}
              {category.subcategories.length > 0 && (
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {category.subcategories.slice(0, 3).map((sub: string) => (
                      <span key={sub} className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Tags relacionados */}
              <div className="flex flex-wrap gap-1 mt-3">
                {getCategoryTags(category.name).slice(0, 3).map(tag => (
                  <span key={tag} className="text-xs text-gray-500">
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex items-center text-blue-600 font-medium text-sm group-hover:gap-2 transition-all">
                Ver productos <ChevronRight className="w-4 h-4" />
              </div>
            </div>

            {/* Imagen de categoría (placeholder) */}
            <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-600 transform 
                          scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
          </motion.div>
        ))}
      </div>

      {/* Modal de productos de categoría (opcional) */}
      {selectedCategory && (
        <CategoryModal
          category={selectedCategory}
          products={categoryProducts}
          onClose={() => setSelectedCategory(null)}
        />
      )}
    </div>
  )
}

// Funciones auxiliares
function getCategoryDescription(category: string): string {
  const descriptions: Record<string, string> = {
    'Filtración Industrial': 'Filtros y soluciones para procesos industriales exigentes.',
    'Sistemas de Aire Comprimido': 'Compresores, accesorios y soluciones integrales.',
    'Ventilación Industrial': 'Extracción, inyección, turbinas y soluciones a medida.',
    'Cabinas de Pintura': 'Control de ventilación y filtrado para acabados profesionales.'
  }
  return descriptions[category] || 'Productos especializados para industria.'
}

function getCategoryTags(category: string): string[] {
  const tags: Record<string, string[]> = {
    'Filtración Industrial': ['filtros', 'industrial', 'hepa', 'carbón'],
    'Sistemas de Aire Comprimido': ['compresores', 'secadores', 'tanques'],
    'Ventilación Industrial': ['extractores', 'inyectores', 'turbinas'],
    'Cabinas de Pintura': ['pintura', 'filtros', 'iluminación']
  }
  return tags[category] || []
}

// Modal simple para ver productos
function CategoryModal({ category, products, onClose }: any) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        className="bg-white rounded-2xl p-8 max-w-4xl max-h-[80vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold mb-6">{category}</h2>
        <div className="grid grid-cols-2 gap-4">
          {products.map((product: any) => (
            <div key={product.id} className="border rounded-lg p-4 hover:shadow-md transition">
              <h3 className="font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-600 mt-1">{product.description}</p>
              <div className="flex gap-2 mt-2">
                {product.tags.slice(0, 2).map((tag: string) => (
                  <span key={tag} className="text-xs bg-gray-100 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={onClose}
          className="mt-6 px-6 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
        >
          Cerrar
        </button>
      </motion.div>
    </motion.div>
  )
}