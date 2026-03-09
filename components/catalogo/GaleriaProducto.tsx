'use client'

import { useState } from "react"
import Image from "next/image"

type Props = {
  imagenes: string[]
  nombre: string
}

export default function GaleriaProducto({ imagenes, nombre }: Props) {

  const [imagenActual, setImagenActual] = useState(imagenes?.[0])
  const [zoom, setZoom] = useState(false)
  const [pos, setPos] = useState({ x: 50, y: 50 })

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {

    const rect = e.currentTarget.getBoundingClientRect()

    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100

    setPos({ x, y })
  }

  return (

    <div className="space-y-5">

      {/* imagen principal */}

      <div
        className="relative w-full h-[420px] bg-white rounded-xl border overflow-hidden cursor-zoom-in"
        onMouseEnter={() => setZoom(true)}
        onMouseLeave={() => setZoom(false)}
        onMouseMove={handleMove}
      >

        <Image
          src={imagenActual}
          alt={nombre}
          fill
          priority
          sizes="(max-width:768px) 100vw, 600px"
          className={`object-contain transition-transform duration-200 ${
            zoom ? "scale-150" : "scale-100"
          }`}
          style={
            zoom
              ? {
                  transformOrigin: `${pos.x}% ${pos.y}%`
                }
              : undefined
          }
        />

      </div>

      {/* miniaturas */}

      <div className="flex gap-4 overflow-x-auto pb-2">

        {imagenes.map((img, i) => (

          <button
            key={i}
            onClick={() => setImagenActual(img)}
            className={`relative w-28 h-24 rounded-lg overflow-hidden border transition ${
              imagenActual === img
                ? "border-orange-500 ring-2 ring-orange-400"
                : "border-gray-200 hover:border-gray-400"
            }`}
          >

            <Image
              src={img}
              alt={`${nombre} vista ${i + 1}`}
              fill
              sizes="112px"
              className="object-contain"
            />

          </button>

        ))}

      </div>

    </div>

  )
}