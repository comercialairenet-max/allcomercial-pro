// app/components/SearchIA.tsx
'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'

export function SearchIA() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Aquí conectaremos con la API de búsqueda
    const response = await fetch('/api/search', {
      method: 'POST',
      body: JSON.stringify({ query })
    })
    
    const data = await response.json()
    setResults(data)
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSearch} className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ej: 'filtro axial 16', 'cabina pintura', 'compresor industrial'..."
          className="w-full p-4 pr-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
        />
        <button type="submit" className="absolute right-3 top-3">
          <Search className="text-gray-500" />
        </button>
      </form>
      
      {results.length > 0 && (
        <div className="mt-4 bg-white rounded-lg shadow-lg">
          {/* Resultados de búsqueda */}
        </div>
      )}
    </div>
  )
}