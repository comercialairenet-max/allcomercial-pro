import { productos } from '@/data/productos'
import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    total: productos.length,
    porCategoria: {
      filtracion: productos.filter(p => p.categoria === 'filtracion-industrial').length,
      ventilacion: productos.filter(p => p.categoria === 'ventilacion-industrial').length,
      aire: productos.filter(p => p.categoria === 'sistemas-de-aire-comprimido').length,
      cabinas: productos.filter(p => p.categoria === 'cabinas-de-pintura').length,
      otros: productos.length - productos.filter(p => 
        ['filtracion-industrial', 'ventilacion-industrial', 'sistemas-de-aire-comprimido', 'cabinas-de-pintura']
        .includes(p.categoria)).length
    }
  })
}