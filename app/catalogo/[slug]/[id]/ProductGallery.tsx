'use client'

import { useEffect, useMemo, useState } from 'react'
import Image from 'next/image'

type ProductGalleryProps = {
  images: string[]
  alt: string
}

export default function ProductGallery({
  images,
  alt,
}: ProductGalleryProps) {
  const safeImages = useMemo(() => {
    const cleaned = Array.from(new Set(images.filter(Boolean)))
    return cleaned.length ? cleaned : ['/productos/placeholder.jpeg']
  }, [images])

  const [selected, setSelected] = useState(0)

  useEffect(() => {
    if (selected > safeImages.length - 1) {
      setSelected(0)
    }
  }, [safeImages, selected])

  const currentImage = safeImages[selected] || safeImages[0]

  return (
    <div className="space-y-4">
      <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm">
        <div className="flex items-center justify-between border-b border-neutral-200 bg-neutral-50 px-4 py-3">
          <div className="text-sm font-semibold text-neutral-700">
            Vista principal
          </div>

          <div className="text-xs font-medium text-neutral-500">
            {selected + 1} / {safeImages.length}
          </div>
        </div>

        <div className="relative aspect-[4/3] w-full bg-neutral-100">
          <Image
            src={currentImage}
            alt={alt}
            fill
            className="object-contain p-4"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>
      </div>

      {safeImages.length > 1 && (
        <div>
          <div className="mb-3 flex items-center justify-between gap-3">
            <div className="text-sm font-semibold text-neutral-700">
              Galería
            </div>

            <div className="text-xs text-neutral-500">
              Selecciona una imagen
            </div>
          </div>

          <div className="flex gap-3 overflow-x-auto pb-2">
            {safeImages.map((foto, index) => {
              const isActive = index === selected

              return (
                <button
                  key={`${foto}-${index}`}
                  type="button"
                  onClick={() => setSelected(index)}
                  className={`group relative min-w-[140px] overflow-hidden rounded-2xl border bg-white shadow-sm transition sm:min-w-[160px] ${
                    isActive
                      ? 'border-orange-400 ring-2 ring-orange-200'
                      : 'border-neutral-200 hover:border-orange-300'
                  }`}
                  aria-label={`Ver imagen ${index + 1} de ${alt}`}
                >
                  <div className="relative aspect-[4/3] w-[140px] bg-neutral-100 sm:w-[160px]">
                    <Image
                      src={foto}
                      alt={`${alt} ${index + 1}`}
                      fill
                      className="object-contain p-3 transition-transform duration-300 group-hover:scale-[1.03]"
                      sizes="160px"
                    />
                  </div>

                  <div
                    className={`absolute inset-x-0 bottom-0 px-3 py-2 text-left text-[11px] font-medium ${
                      isActive
                        ? 'bg-orange-500 text-white'
                        : 'bg-white/90 text-neutral-600'
                    }`}
                  >
                    Imagen {index + 1}
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}