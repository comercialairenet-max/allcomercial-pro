// app/catalogo/page.tsx
import { SearchIA } from '@/app/components/search/SearchIA'
import { CategoriesGrid } from '@/app/components/categories/CategoriesGrid'

export default function CatalogoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero con buscador */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Catálogo Profesional
          </h1>
          <p className="text-xl mb-8 text-blue-100">
            Filtración, ventilación, aire comprimido, cabinas de pintura y equipos para operación.
            Cotiza por WhatsApp en 1 clic.
          </p>
          <SearchIA />
        </div>
      </section>

      {/* Categorías */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Explora por línea</h2>
          <button className="text-blue-600 hover:underline">Ver todas →</button>
        </div>
        <CategoriesGrid />
      </section>

      {/* Asesoría rápida */}
      <section className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Asesoría inmediata</h3>
          <p className="text-gray-600 mb-6">
            Cotiza en minutos. Envíanos el producto o referencia. 
            Te ayudamos con ficha técnica y disponibilidad.
          </p>
          <a
            href="https://wa.me/573053644307"
            className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-xl hover:bg-green-600 transition"
          >
            <span>📱</span>
            Asesoría por WhatsApp
          </a>
        </div>
      </section>
    </div>
  )
}