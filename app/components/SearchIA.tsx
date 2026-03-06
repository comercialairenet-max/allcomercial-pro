'use client'

import { useState, useEffect, useRef } from 'react'
import { Search, X, Loader2 } from 'lucide-react'
import Fuse from 'fuse.js'
import { productos } from '@/data/productos'
import Link from 'next/link'

export function SearchIA() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const searchRef = useRef(null)

  // Configuración de Fuse.js
  const fuse = new Fuse(productos, {
    keys: [
      { name: 'nombre', weight: 0.5 },
      { name: 'descripcion', weight: 0.3 },
      { name: 'tags', weight: 0.2 },
      { name: 'categoria', weight: 0.1 }
    ],
    threshold: 0.4, // Qué tan permisiva es la búsqueda (0 = exacta, 1 = muy difusa)
    includeScore: true
  })

  useEffect(() => {
    if (query.length < 2) {
      setResults([])
      setShowResults(false)
      return
    }

    setIsLoading(true)
    const timer = setTimeout(() => {
      const fuseResults = fuse.search(query)
      setResults(fuseResults.slice(0, 8).map(r => r.item)) // Top 8 resultados
      setShowResults(true)
      setIsLoading(false)
    }, 300)

    return () => clearTimeout(timer)
  }, [query])

  // Cerrar resultados al hacer clic fuera
  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowResults(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

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

      {showResults && results.length > 0 && (
        <div className="absolute z-50 w-full mt-2 bg-white rounded-xl shadow-xl border border-gray-200 max-h-96 overflow-y-auto">
          {results.map((producto) => (
            <Link
              key={producto.id}
              href={`/producto/${producto.id}`}
              className="block p-4 hover:bg-gray-50 border-b last:border-b-0"
              onClick={() => setShowResults(false)}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-semibold text-gray-800">{producto.nombre}</h4>
                  <p className="text-sm text-gray-600 mt-1 line-clamp-2">{producto.descripcion}</p>
                  <div className="flex gap-2 mt-2">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                      {producto.categoria}
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">
                      Stock: {producto.stock}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {showResults && query.length >= 2 && results.length === 0 && (
        <div className="absolute z-50 w-full mt-2 bg-white rounded-xl shadow-xl border border-gray-200 p-8 text-center">
          <p className="text-gray-500">No encontramos productos para "{query}"</p>
          <p className="text-sm text-gray-400 mt-2">Prueba con otras palabras o menos específicas</p>
        </div>
      )}
    </div>
  )
}