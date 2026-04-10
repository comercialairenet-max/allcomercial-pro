// app/buscar/BuscadorCliente.tsx
"use client";

import Link from "next/link";
import { useMemo, useState, useEffect } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { Search, ArrowRight } from "lucide-react";

import { getCategoriasConProductos, getProductosPorCategoria } from "@/data/productos";

type Producto = {
  id: string | number;
  slug: string;
  categoria: string;
  nombre: string;
  descripcion?: string;
  codigo?: string;
  imagen?: string;
};

function normalizar(texto: string) {
  return texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function obtenerTodosLosProductos(): Producto[] {
  const categorias = getCategoriasConProductos();

  return categorias.flatMap((categoria) =>
    getProductosPorCategoria(
      categoria.slug as Parameters<typeof getProductosPorCategoria>[0]
    )
  );
}

export default function BuscadorCliente() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const qActual = searchParams.get("q") ?? "";
  const [valor, setValor] = useState(qActual);

  useEffect(() => {
    setValor(qActual);
  }, [qActual]);

  const productos = useMemo(() => obtenerTodosLosProductos(), []);

  const resultados = useMemo(() => {
    const termino = normalizar(qActual);

    if (!termino) return [];

    return productos.filter((producto) => {
      const texto = normalizar(
        [
          producto.nombre ?? "",
          producto.descripcion ?? "",
          producto.codigo ?? "",
          producto.categoria ?? "",
        ].join(" ")
      );

      return texto.includes(termino);
    });
  }, [productos, qActual]);

  function manejarBusqueda(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const params = new URLSearchParams(searchParams.toString());

    if (valor.trim()) {
      params.set("q", valor.trim());
    } else {
      params.delete("q");
    }

    const query = params.toString();
    router.push(query ? `${pathname}?${query}` : pathname);
  }

  return (
    <div className="mt-10">
      <form
        onSubmit={manejarBusqueda}
        className="rounded-[28px] border border-slate-200 bg-white p-4 shadow-sm"
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={valor}
              onChange={(e) => setValor(e.target.value)}
              placeholder="Buscar por nombre, código o categoría"
              className="h-14 w-full rounded-2xl border border-slate-300 bg-white pl-12 pr-4 text-sm text-slate-900 outline-none transition focus:border-[#0E56B5]"
            />
          </div>

          <button
            type="submit"
            className="inline-flex h-14 items-center justify-center rounded-2xl bg-[#0E56B5] px-6 text-sm font-semibold text-white transition hover:bg-[#093A7A]"
          >
            Buscar
          </button>
        </div>
      </form>

      {!qActual ? (
        <div className="mt-8 rounded-[28px] border border-slate-200 bg-[#F8FAFC] p-6">
          <p className="text-sm leading-7 text-slate-600">
            Escribe un término para buscar productos dentro del catálogo.
          </p>
        </div>
      ) : resultados.length > 0 ? (
        <div className="mt-8">
          <p className="mb-5 text-sm text-slate-600">
            Resultados para <span className="font-semibold text-slate-900">"{qActual}"</span>:{" "}
            {resultados.length}
          </p>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {resultados.map((producto) => (
              <Link
                key={`${producto.categoria}-${producto.slug}-${producto.id}`}
                href={`/catalogo/${producto.categoria}/${producto.slug}`}
                className="group rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex flex-wrap gap-2">
                  {producto.codigo ? (
                    <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-600">
                      {producto.codigo}
                    </span>
                  ) : null}

                  <span className="rounded-full border border-[#19B5F1]/20 bg-[#19B5F1]/10 px-3 py-1 text-xs font-semibold text-[#0E56B5]">
                    {producto.categoria}
                  </span>
                </div>

                <h2 className="mt-4 text-xl font-bold text-slate-950">
                  {producto.nombre}
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {producto.descripcion ?? "Producto disponible en el catálogo."}
                </p>

                <div className="mt-6 inline-flex items-center font-semibold text-[#0E56B5]">
                  Ver producto
                  <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <div className="mt-8 rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm leading-7 text-slate-600">
            No encontramos resultados para{" "}
            <span className="font-semibold text-slate-900">"{qActual}"</span>.
          </p>
        </div>
      )}
    </div>
  );
}