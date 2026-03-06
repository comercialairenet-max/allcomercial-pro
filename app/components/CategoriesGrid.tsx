import Link from "next/link";
import Image from "next/image";

export function CategoriesGrid() {
  // Importamos las categorías desde el archivo lib
  const { CATEGORIES } = require("@/lib/catalogo");

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
      {CATEGORIES.map((cat) => (
        <Link
          key={cat.slug}
          href={`/catalogo/${cat.slug}`}
          className="group block bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
        >
          <div className="relative h-48 w-full bg-gray-100">
            {cat.heroImage && cat.heroImage !== "/placeholder-categoria.jpg" ? (
              <Image
                src={cat.heroImage}
                alt={cat.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
            ) : (
              <div className="flex items-center justify-center h-full text-gray-400">
                <span>Imagen en proceso</span>
              </div>
            )}
          </div>
          <div className="p-5">
            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition">
              {cat.title}
            </h3>
            <p className="text-gray-600 mt-2 text-sm line-clamp-2">
              {cat.subtitle}
            </p>
            <p className="text-sm text-blue-600 mt-3 font-medium">
              {cat.items.length} productos →
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}