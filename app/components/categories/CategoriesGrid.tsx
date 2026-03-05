'use client'

import { motion } from 'framer-motion'
import { productos } from '@/data/productos'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export function CategoriesGrid() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    // Calcular contadores reales
    const counts = {
      'Filtración Industrial': productos.filter(p => p.categoria === 'filtracion-industrial').length,
      'Ventilación Industrial': productos.filter(p => p.categoria === 'ventilacion-industrial').length,
      'Aire Comprimido': productos.filter(p => p.categoria === 'sistemas-de-aire-comprimido').length,
      'Cabinas de Pintura': productos.filter(p => p.categoria === 'cabinas-de-pintura').length
    }

    setCategories([
      {
        name: 'Filtración Industrial',
        icon: '🔧',
        count: counts['Filtración Industrial'],
        color: 'from-blue-500 to-blue-600',
        slug: 'filtracion-industrial',  // ← Este slug debe coincidir con tu carpeta
        products: ['Filtros HEPA', 'Carbón Activado', 'Bolsa']
      },
      {
        name: 'Ventilación Industrial',
        icon: '💨',
        count: counts['Ventilación Industrial'],
        color: 'from-cyan-500 to-cyan-600',
        slug: 'ventilacion-industrial',
        products: ['Extractores', 'Inyectores', 'Turbinas']
      },
      {
        name: 'Aire Comprimido',
        icon: '⚙️',
        count: counts['Aire Comprimido'],
        color: 'from-amber-500 to-amber-600',
        slug: 'sistemas-de-aire-comprimido',
        products: ['Compresores', 'Secadores', 'Pulmones']
      },
      {
        name: 'Cabinas de Pintura',
        icon: '🎨',
        count: counts['Cabinas de Pintura'],
        color: 'from-purple-500 to-purple-600',
        slug: 'cabinas-de-pintura',
        products: ['Filtros Techo', 'Iluminación', 'Ventilación']
      }
    ])
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {categories.map((cat, i) => (
        <Link href={`/catalogo/${cat.slug}`} key={cat.name}>  {/* ← Apunta a [slug] */}
          <motion.div
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
              
              <div className="space-y-2">
                {cat.products.map(p => (
                  <div key={p} className="text-sm text-gray-500 hover:text-blue-600">
                    {p}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </Link>
      ))}
    </div>
  )
}