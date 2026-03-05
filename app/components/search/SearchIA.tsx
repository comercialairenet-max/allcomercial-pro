'use client'

import { useState, useEffect, useRef } from 'react'
import { Search, X, Loader2 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface SearchResult {
  id: string
  name: string
  description: string
  category: string
  score: number
}

export function SearchIA() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)

  // Cerrar resultados al hacer clic fuera
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Búsqueda con debounce
  useEffect(() => {
    const timer = setTimeout(async () => {
      if (query.length >= 2) {
        setIsLoading(true)
        try {
          const response = await fetch('/api/search', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query })
          })
          const data = await response.json()
          setResults(data.results)
          setShowResults(true)
        } catch (error) {
          console.error('Error:', error)
        } finally {
          setIsLoading(false)
        }
      } else {
        setResults([])
        setShowResults(false)
      }
    }, 300) // Debounce de 300ms

    return () => clearTimeout(timer)
  }, [query])

  return (
    <div ref={searchRef} className="w-full max-w-3xl mx-auto relative">
      <form onSubmit={(e) => e.preventDefault()} className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar: 'filtro axial', 'compresor 15hp', 'cabina pintura'..."
          className="w-full p-5 pl-6 pr-14 text-lg rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none shadow-lg"
        />
        
        <div className="absolute right-4 top-1/2 -translate-y-1/2">
          {isLoading ? (
            <Loader2 className="w-6 h-6 text-gray-400 animate-spin" />
          ) : query ? (
            <button onClick={() => setQuery('')} className="text-gray-400 hover:text-gray-600">
              <X className="w-6 h-6" />
            </button>
          ) : (
            <Search className="w-6 h-6 text-gray-400" />
          )}
        </div>
      </form>

      {/* Resultados de búsqueda */}
      <AnimatePresence>
        {showResults && results.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute z-50 w-full mt-2 bg-white rounded-xl shadow-xl border border-gray-200 max-h-96 overflow-y-auto"
          >
            {results.map((result) => (
              <motion.div
                key={result.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-4 hover:bg-gray-50 cursor-pointer border-b last:border-b-0"
                onClick={() => {
                  window.location.href = `/producto/${result.id}`
                }}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold text-lg">{result.name}</h4>
                    <p className="text-sm text-gray-600 mt-1">{result.description}</p>
                    <div className="flex gap-2 mt-2">
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                        {result.category}
                      </span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">
                        Relevancia: {Math.round(result.score * 10)}%
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {showResults && query.length >= 2 && results.length === 0 && !isLoading && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute z-50 w-full mt-2 bg-white rounded-xl shadow-xl border border-gray-200 p-8 text-center"
          >
            <p className="text-gray-500">No encontramos productos para "{query}"</p>
            <p className="text-sm text-gray-400 mt-2">Sugerencias: prueba con términos más generales</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sugerencias rápidas */}
      {!query && (
        <div className="mt-3 text-sm text-gray-500 text-center">
          <span className="font-medium">Ejemplos:</span>{' '}
          <button onClick={() => setQuery('filtro axial')} className="text-blue-600 hover:underline mx-1">
            filtro axial
          </button>
          <button onClick={() => setQuery('compresor industrial')} className="text-blue-600 hover:underline mx-1">
            compresor industrial
          </button>
          <button onClick={() => setQuery('cabina pintura')} className="text-blue-600 hover:underline mx-1">
            cabina pintura
          </button>
        </div>
      )}
    </div>
  )
}