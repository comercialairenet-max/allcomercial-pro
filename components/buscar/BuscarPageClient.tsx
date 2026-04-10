"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Layers3,
  MessageCircle,
  Search,
  SlidersHorizontal,
  Sparkles,
  X,
} from "lucide-react";

import { categoriasMeta, getProductosPorCategoria } from "@/data/productos";
import { getWhatsappUrl } from "@/lib/site";

type BuscarPageClientProps = {
  initialQuery?: string;
};

function formatLabel(text: string) {
  return text
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function getCategoryLabel(slug: string) {
  return (
    categoriasMeta[slug as keyof typeof categoriasMeta]?.nombre ??
    formatLabel(slug)
  );
}

function buildAllProducts() {
  const slugs = Object.keys(categoriasMeta) as Array<keyof typeof categoriasMeta>;

  return slugs.flatMap((slug) =>
    getProductosPorCategoria(slug).map((producto) => ({
      ...producto,
      _categoriaLabel: getCategoryLabel(producto.categoria),

      // 🔥 TEXTO LIMPIO SOLO CON CAMPOS SEGUROS
      _searchText: [
        producto.nombre,
        producto.descripcion,
        producto.codigo,
        producto.marca,
        producto.categoria,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase(),
    }))
  );
}

export default function BuscarPageClient({
  initialQuery = "",
}: BuscarPageClientProps) {
  const [query, setQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState<string>("todas");

  const allProducts = useMemo(() => buildAllProducts(), []);

  const categories = useMemo(() => {
    return Object.keys(categoriasMeta).map((slug) => ({
      slug,
      nombre: getCategoryLabel(slug),
    }));
  }, []);

  const filteredResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    const tokens = q.split(/\s+/).filter(Boolean);

    return allProducts
      .filter((item) =>
        selectedCategory === "todas" ? true : item.categoria === selectedCategory
      )
      .map((item) => {
        let score = 0;

        if (!q) {
          score = item.destacado ? 100 : 1;
        } else {
          for (const token of tokens) {
            if (item.nombre.toLowerCase().includes(token)) score += 10;
            if ((item.codigo ?? "").toLowerCase().includes(token)) score += 12;
            if ((item.marca ?? "").toLowerCase().includes(token)) score += 4;
            if ((item._categoriaLabel ?? "").toLowerCase().includes(token)) score += 5;
            if (item._searchText.includes(token)) score += 2;
          }
        }

        return { ...item, _score: score };
      })
      .filter((item) => item._score > 0)
      .sort((a, b) => {
        if (b._score !== a._score) return b._score - a._score;
        return a.nombre.localeCompare(b.nombre);
      });
  }, [allProducts, query, selectedCategory]);

  const whatsappHelp = getWhatsappUrl(
    query.trim()
      ? `Hola, estoy buscando "${query}" dentro del catálogo y quiero ayuda para encontrar la mejor opción.`
      : "Hola, quiero ayuda para encontrar un producto dentro del catálogo."
  );

  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="relative isolate overflow-hidden border-b border-slate-200 bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(29,78,216,0.10),transparent_24%),radial-gradient(circle_at_left,rgba(249,115,22,0.08),transparent_24%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-8 lg:py-24">
          <h1 className="text-4xl font-black">Busca en todo el catálogo</h1>

          <div className="mt-6 flex gap-4">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar producto..."
              className="w-full rounded-xl border p-3"
            />

            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="rounded-xl border p-3"
            >
              <option value="todas">Todas</option>
              {categories.map((c) => (
                <option key={c.slug} value={c.slug}>
                  {c.nombre}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* RESULTADOS */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        {filteredResults.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-6">
            {filteredResults.map((item) => (
              <div key={item.id} className="border p-6 rounded-2xl">
                <h3 className="font-bold text-lg">{item.nombre}</h3>

                <p className="text-sm mt-2 text-slate-600">
                  {item.descripcion}
                </p>

                <div className="mt-4 flex flex-col gap-2">
                  <Link
                    href={`/catalogo/${item.categoria}/${item.slug}`}
                    className="btn-outline"
                  >
                    Ver producto
                  </Link>

                  <a
                    href={getWhatsappUrl(
                      `Hola, quiero cotizar ${item.nombre}`
                    )}
                    className="btn-primary"
                    target="_blank"
                  >
                    Cotizar
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center">
            <p>No hay resultados</p>

            <a href={whatsappHelp} className="btn-primary mt-4 inline-block">
              Pedir ayuda
            </a>
          </div>
        )}
      </section>
    </main>
  );
}