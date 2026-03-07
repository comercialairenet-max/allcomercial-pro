'use client'

import { useMemo, useState } from 'react'
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
    const cleaned = images.filter(Boolean)
    return cleaned.length ? cleaned : ['/productos/placeholder.jpeg']
  }, [images])

  const [selected, setSelected] = useState(0)

  const currentImage = safeImages[selected] || safeImages[0]

  return (
    <div className="space-y-4">
      <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm">
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
          <div className="mb-3 text-sm font-semibold text-neutral-700">
            Galería
          </div>

          <div className="flex gap-3 overflow-x-auto pb-2">
            {safeImages.map((foto, index) => {
              const isActive = index === selected

              return (
                <button
                  key={`${foto}-${index}`}
                  type="button"
                  onClick={() => setSelected(index)}
                  className={`min-w-[140px] overflow-hidden rounded-2xl border bg-white shadow-sm transition sm:min-w-[160px] ${
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
                      className="object-contain p-3"
                      sizes="160px"
                    />
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