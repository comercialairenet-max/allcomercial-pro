// app/components/search/SearchIA.tsx
'use client'

import { useState } from 'react'
import { Search, X } from 'lucide-react'

export function SearchIA() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  // Productos de ejemplo (después los conectaremos con tu catálogo real)
  const products = [
    { name: 'Filtro Axial 16"', category: 'Filtración', tags: ['axial', 'filtro'] },
    { name: 'Cabina de Pintura Automotriz', category: 'Cabinas', tags: ['cabina', 'pintura'] },
    { name: 'Compresor Tornillo 15HP', category: 'Aire Comprimido', tags: ['compresor'] },
  ]

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.length < 2) return
    
    // Búsqueda simple (mejoraremos después)
    const filtered = products.filter(p => 
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.tags.some(t => t.includes(query.toLowerCase()))
    )
    setResults(filtered)
    setIsOpen(true)
  }

  return (
    <div className="relative w-full max-w-2xl">
      <form onSubmit={handleSearch} className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar: 'filtro axial', 'cabina', 'compresor'..."
          className="w-full p-4 pr-12 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
        />
        <button
          type="submit"
          className="absolute right-3 top-1/2 -translate-y-1/2 p-2 hover:bg-gray-100 rounded-full"
        >
          <Search className="w-5 h-5 text-gray-500" />
        </button>
      </form>

      {/* Resultados */}
      {isOpen && results.length > 0 && (
        <div className="absolute z-50 w-full mt-2 bg-white rounded-xl shadow-xl border max-h-96 overflow-y-auto">
          {results.map((product, i) => (
            <div key={i} className="p-4 hover:bg-gray-50 cursor-pointer border-b">
              <h4 className="font-semibold">{product.name}</h4>
              <p className="text-sm text-gray-600">{product.category}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}