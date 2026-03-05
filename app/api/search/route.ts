import { NextResponse } from 'next/server'
import { products, Product } from '@/data/catalog'

export async function POST(req: Request) {
  try {
    const { query } = await req.json()
    
    if (!query || query.length < 2) {
      return NextResponse.json({ results: [] })
    }

    const searchTerms = query.toLowerCase()
      .split(' ')
      .filter(term => term.length > 1)

    // Búsqueda inteligente: puntúa productos según relevancia
    const scoredResults = products.map(product => {
      let score = 0
      const searchableText = `
        ${product.name} 
        ${product.description} 
        ${product.category} 
        ${product.tags.join(' ')} 
        ${product.applications.join(' ')}
      `.toLowerCase()

      // Palabras exactas tienen más peso
      searchTerms.forEach(term => {
        // En nombre
        if (product.name.toLowerCase().includes(term)) score += 10
        // En tags
        if (product.tags.some(t => t.includes(term))) score += 8
        // En descripción
        if (product.description.toLowerCase().includes(term)) score += 5
        // En aplicaciones
        if (product.applications.some(a => a.toLowerCase().includes(term))) score += 3
        // Coincidencia parcial en texto completo
        if (searchableText.includes(term)) score += 1
      })

      return { ...product, score }
    })

    // Filtrar y ordenar resultados
    const results = scoredResults
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 20) // Top 20 resultados

    return NextResponse.json({ results })
  } catch (error) {
    console.error('Error en búsqueda:', error)
    return NextResponse.json(
      { error: 'Error en búsqueda' },
      { status: 500 }
    )
  }
}