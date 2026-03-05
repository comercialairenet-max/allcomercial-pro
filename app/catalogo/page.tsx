import { SearchIA } from '@/app/components/search/SearchIA'
import { CategoriesIA } from '@/app/components/categories/CategoriesIA'

export default function CatalogoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero con buscador */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Catálogo Profesional
          </h1>
          <p className="text-xl mb-12 text-blue-100">
            Busca inteligentemente entre cientos de productos industriales
          </p>
          <SearchIA />
        </div>
      </section>

      {/* Categorías dinámicas */}
      <section className="py-16">
        <CategoriesIA />
      </section>
    </div>
  )
}