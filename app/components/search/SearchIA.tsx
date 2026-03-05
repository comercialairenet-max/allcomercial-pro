'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'

export function SearchIA() {
  const [query, setQuery] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Buscando:', query)
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSearch} className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar: 'filtro axial', 'compresor', 'cabina pintura'..."
          className="w-full p-4 pr-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
        />
        <button
          type="submit"
          className="absolute right-3 top-1/2 -translate-y-1/2"
        >
          <Search className="w-5 h-5 text-gray-400 hover:text-blue-500" />
        </button>
      </form>
      
      <div className="mt-2 text-sm text-gray-500">
        <span className="font-medium">Sugerencias:</span>{' '}
        <button className="text-blue-600 hover:underline mx-1">filtro axial</button>
        <button className="text-blue-600 hover:underline mx-1">compresor</button>
        <button className="text-blue-600 hover:underline mx-1">cabina pintura</button>
      </div>
    </div>
  )
}
