'use client'

import { useState } from 'react'
import { Search, X } from 'lucide-react'

export function SearchBar() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    if (query.length < 2) return
    
    // Aquí iría la lógica de búsqueda
    console.log('Buscando:', query)
  }

  return (
    <div className="relative w-full max-w-2xl">
      <form onSubmit={handleSearch} className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar productos..."
          className="w-full px-5 py-3 pr-12 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2">
          <Search className="w-5 h-5 text-gray-400 hover:text-blue-500" />
        </button>
      </form>
    </div>
  )
}