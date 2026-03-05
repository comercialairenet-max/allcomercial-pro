'use client'

export function CategoriesIA() {
  const categories = [
    {
      name: 'Filtración Industrial',
      description: 'Filtros y soluciones para procesos industriales exigentes.',
      count: 22,
      icon: '🔧'
    },
    {
      name: 'Sistemas de Aire Comprimido',
      description: 'Compresores, accesorios y soluciones integrales.',
      count: 22,
      icon: '⚙️'
    },
    {
      name: 'Ventilación Industrial',
      description: 'Extracción, inyección, turbinas y soluciones a medida.',
      count: 22,
      icon: '💨'
    },
    {
      name: 'Cabinas de Pintura',
      description: 'Control de ventilación y filtrado para acabados profesionales.',
      count: 22,
      icon: '🎨'
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {categories.map((cat) => (
        <div
          key={cat.name}
          className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all cursor-pointer group"
        >
          <div className="text-4xl mb-4">{cat.icon}</div>
          <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition">
            {cat.name}
          </h3>
          <p className="text-gray-600 mt-2 text-sm">{cat.description}</p>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-sm text-gray-500">{cat.count} productos</span>
            <span className="text-blue-600 group-hover:translate-x-2 transition-transform">
              →
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}
