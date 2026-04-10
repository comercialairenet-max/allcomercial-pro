// components/catalogo/BuscadorProductos.tsx

"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Layers3,
  MessageCircle,
  Search,
  ShieldCheck,
  X,
} from "lucide-react";

import {
  buscarProductos,
  categoriasMeta,
  productos,
  type Producto,
  type ProductoCategoriaSlug,
} from "@/data/productos";
import {
  getWhatsappCatalogUrl,
  getWhatsappUrl,
} from "@/lib/site";

type CategoriaOption = {
  slug: "todas" | ProductoCategoriaSlug;
  nombre: string;
};

function normalizarTexto(texto: string) {
  return String(texto ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function getCategoriaNombre(categoria: ProductoCategoriaSlug) {
  return categoriasMeta[categoria]?.nombre ?? categoria;
}

function getProductoWhatsappUrl(producto: Producto) {
  return getWhatsappUrl(
    producto.cta?.primaryMessage ??
      `Hola, quiero información sobre ${producto.nombre}${
        producto.codigo ? ` (${producto.codigo})` : ""
      }.`
  );
}

export default function BuscadorProductos() {
  const [query, setQuery] = useState("");
  const [selectedCategoria, setSelectedCategoria] = useState<
    "todas" | ProductoCategoriaSlug
  >("todas");
  const [isOpen, setIsOpen] = useState(false);

  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const categoriasDisponibles = useMemo<CategoriaOption[]>(() => {
    const items = Object.entries(categoriasMeta).map(([slug, meta]) => ({
      slug: slug as ProductoCategoriaSlug,
      nombre: meta.nombre,
    }));

    return [{ slug: "todas", nombre: "Todas las categorías" }, ...items];
  }, []);

  const resultados = useMemo(() => {
    const queryNormalizada = normalizarTexto(query);

    let base: Producto[] = [];

    if (queryNormalizada.length >= 2) {
      base = buscarProductos(queryNormalizada);
    } else if (selectedCategoria !== "todas") {
      base = productos.filter((producto) => producto.categoria === selectedCategoria);
    } else {
      base = [];
    }

    if (selectedCategoria !== "todas") {
      base = base.filter((producto) => producto.categoria === selectedCategoria);
    }

    return base.slice(0, 8);
  }, [query, selectedCategoria]);

  const totalResultados = useMemo(() => {
    const queryNormalizada = normalizarTexto(query);

    let base: Producto[] = [];

    if (queryNormalizada.length >= 2) {
      base = buscarProductos(queryNormalizada);
    } else if (selectedCategoria !== "todas") {
      base = productos.filter((producto) => producto.categoria === selectedCategoria);
    } else {
      base = [];
    }

    if (selectedCategoria !== "todas") {
      base = base.filter((producto) => producto.categoria === selectedCategoria);
    }

    return base.length;
  }, [query, selectedCategoria]);

  const showDropdown =
    isOpen && (normalizarTexto(query).length >= 2 || selectedCategoria !== "todas");

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!wrapperRef.current) return;
      if (!wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function limpiarBusqueda() {
    setQuery("");
    setSelectedCategoria("todas");
    setIsOpen(false);
    inputRef.current?.focus();
  }

  return (
    <div ref={wrapperRef} className="relative z-50 w-full">
      <div className="overflow-visible rounded-[30px] border border-slate-200 bg-white p-4 shadow-xl shadow-slate-200/60 md:p-5">
        <div className="grid gap-4 lg:grid-cols-[1fr_auto]">
          <div className="flex items-center gap-3 rounded-[22px] border border-slate-200 bg-[#F8FAFC] px-4 py-3 shadow-sm">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[#BFE8FB] bg-[#EAF6FE] text-[#0E56B5]">
              <Search className="h-5 w-5" />
            </div>

            <div className="min-w-0 flex-1">
              <label
                htmlFor="buscador-productos"
                className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500"
              >
                Buscar dentro del catálogo
              </label>

              <div className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  id="buscador-productos"
                  type="text"
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setIsOpen(true);
                  }}
                  onFocus={() => setIsOpen(true)}
                  placeholder="Buscar por producto, código o categoría"
                  className="w-full border-0 bg-transparent p-0 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
                />

                {query || selectedCategoria !== "todas" ? (
                  <button
                    type="button"
                    onClick={limpiarBusqueda}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-200/60 hover:text-slate-700"
                    aria-label="Limpiar búsqueda"
                  >
                    <X className="h-4 w-4" />
                  </button>
                ) : null}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="rounded-[22px] border border-slate-200 bg-white px-4 py-3 shadow-sm">
              <label className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                Categoría
              </label>

              <select
                value={selectedCategoria}
                onChange={(e) => {
                  setSelectedCategoria(
                    e.target.value as "todas" | ProductoCategoriaSlug
                  );
                  setIsOpen(true);
                }}
                className="min-w-[220px] border-0 bg-transparent p-0 text-sm font-medium text-slate-900 focus:outline-none"
              >
                {categoriasDisponibles.map((item) => (
                  <option key={item.slug} value={item.slug}>
                    {item.nombre}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center justify-center rounded-[22px] border border-[#BFE8FB] bg-[#EAF6FE] px-5 py-3 text-sm font-semibold text-[#0E56B5] shadow-sm">
              <Layers3 className="mr-2 h-4 w-4" />
              {totalResultados} coincidencia{totalResultados === 1 ? "" : "s"}
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href={getWhatsappCatalogUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-2xl bg-[#25D366] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#1EBE5D]"
          >
            Consultar por WhatsApp
            <MessageCircle className="ml-2 h-4 w-4" />
          </a>

          <Link
            href="/soluciones"
            className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
          >
            Ver soluciones
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>

      {showDropdown ? (
        <div className="absolute left-0 right-0 top-[calc(100%+14px)] z-[80] overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-2xl shadow-slate-300/80">
          <div className="flex items-center justify-between border-b border-slate-200 bg-[#F8FAFC] px-5 py-4">
            <div>
              <p className="text-sm font-bold text-slate-950">
                Resultados de búsqueda
              </p>
              <p className="mt-1 text-xs text-slate-500">
                {totalResultados} coincidencia{totalResultados === 1 ? "" : "s"} encontrada
              </p>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-200/60 hover:text-slate-700"
              aria-label="Cerrar resultados"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {resultados.length > 0 ? (
            <div className="max-h-[560px] overflow-y-auto p-4 md:p-5">
              <div className="grid gap-4">
                {resultados.map((producto) => {
                  const categoriaNombre = getCategoriaNombre(producto.categoria);
                  const whatsappHref = getProductoWhatsappUrl(producto);

                  return (
                    <article
                      key={`${producto.categoria}-${producto.id}`}
                      className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
                    >
                      <div className="grid gap-4 md:grid-cols-[96px_1fr]">
                        <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-[18px] border border-slate-200 bg-slate-50 p-2">
                          <img
                            src={producto.imagen}
                            alt={producto.nombre}
                            className="h-full w-full object-contain"
                          />
                        </div>

                        <div className="min-w-0">
                          <div className="flex flex-wrap gap-2">
                            <span className="rounded-full border border-[#BFE8FB] bg-[#EAF6FE] px-3 py-1 text-xs text-[#0E56B5]">
                              {categoriaNombre}
                            </span>

                            {producto.codigo ? (
                              <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-600">
                                {producto.codigo}
                              </span>
                            ) : null}

                            {producto.destacado ? (
                              <span className="rounded-full border border-[#19B5F1]/20 bg-[#19B5F1]/10 px-3 py-1 text-xs font-semibold text-[#0E56B5]">
                                Destacado
                              </span>
                            ) : null}
                          </div>

                          <div className="mt-3">
                            <h3 className="text-lg font-bold text-slate-950">
                              {producto.nombre}
                            </h3>
                          </div>

                          <p className="mt-3 text-sm leading-7 text-slate-600">
                            {producto.descripcion}
                          </p>

                          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                            <Link
                              href={`/catalogo/${producto.categoria}/${producto.slug}`}
                              onClick={() => setIsOpen(false)}
                              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#BFE8FB] bg-[#EAF6FE] px-4 py-3 text-sm font-semibold text-[#0E56B5]"
                            >
                              Ver producto
                              <ArrowRight className="h-4 w-4" />
                            </Link>

                            <a
                              href={whatsappHref}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#1EBE5D]"
                            >
                              <MessageCircle className="h-4 w-4" />
                              {producto.cta?.primaryLabel ?? "Consultar por WhatsApp"}
                            </a>
                          </div>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="p-8 text-center">
              <div className="mx-auto flex max-w-md flex-col items-center">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-[#F8FAFC] text-[#0E56B5]">
                  <ShieldCheck className="h-6 w-6" />
                </div>

                <h3 className="mt-4 text-xl font-bold text-slate-950">
                  No se encontraron productos
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Prueba con otro nombre, código, categoría o escríbenos por WhatsApp
                  para ayudarte a ubicar la referencia adecuada.
                </p>

                <a
                  href={getWhatsappCatalogUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center justify-center rounded-2xl bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1EBE5D]"
                >
                  Consultar por WhatsApp
                  <MessageCircle className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
}