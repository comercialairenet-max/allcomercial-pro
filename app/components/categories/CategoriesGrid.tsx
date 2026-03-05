// app/components/categories/CategoriesGrid.tsx
'use client'

import { motion } from 'framer-motion'

export function CategoriesGrid() {
  const categories = [
    {
      name: 'Filtración Industrial',
      icon: '🔧',
      count: 22,
      color: 'from-blue-500 to-blue-600',
      products: ['Filtros HEPA', 'Carbón Activado', 'Bolsa']
    },
    {
      name: 'Ventilación Industrial',
      icon: '💨',
      count: 22,
      color: 'from-cyan-500 to-cyan-600',
      products: ['Extractores', 'Inyectores', 'Turbinas']
    },
    {
      name: 'Aire Comprimido',
      icon: '⚙️',
      count: 22,
      color: 'from-amber-500 to-amber-600',
      products: ['Compresores', 'Secadores', 'Pulmones']
    },
    {
      name: 'Cabinas de Pintura',
      icon: '🎨',
      count: 22,
      color: 'from-purple-500 to-purple-600',
      products: ['Filtros Techo', 'Iluminación', 'Ventilación']
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {categories.map((cat, i) => (
        <motion.div
          key={cat.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all cursor-pointer group"
        >
          <div className={`h-2 bg-gradient-to-r ${cat.color}`} />
          <div className="p-6">
            <div className="text-4xl mb-4">{cat.icon}</div>
            <h3 className="text-xl font-bold mb-2">{cat.name}</h3>
            <p className="text-sm text-gray-600 mb-4">{cat.count} productos</p>
            
            {/* Subcategorías */}
            <div className="space-y-2">
              {cat.products.map(p => (
                <div key={p} className="text-sm text-gray-500 hover:text-blue-600">
                  {p}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}