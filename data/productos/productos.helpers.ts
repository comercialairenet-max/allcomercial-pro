// data/productos/productos.helpers.ts

import { productos } from "./productos.data";
import { categoriasMeta } from "./productos.meta";
import type {
  Producto,
  ProductoCategoriaSlug,
} from "./productos.types";

/* =============================================================================
   HELPERS PRINCIPALES
============================================================================= */

export function getProductoPorSlug(
  categoria: ProductoCategoriaSlug,
  slug: string
): Producto | undefined {
  return productos.find(
    (producto) => producto.categoria === categoria && producto.slug === slug
  );
}

export function getProductoPorId(id: string): Producto | undefined {
  return productos.find((producto) => producto.id === id);
}

export function getProductosPorCategoria(
  categoria: ProductoCategoriaSlug
): Producto[] {
  return productos
    .filter((producto) => producto.categoria === categoria)
    .sort((a, b) => a.nombre.localeCompare(b.nombre));
}

export function getProductosDestacados(
  categoria?: ProductoCategoriaSlug
): Producto[] {
  return productos
    .filter((producto) => (categoria ? producto.categoria === categoria : true))
    .filter((producto) => Boolean(producto.destacado))
    .sort((a, b) => a.nombre.localeCompare(b.nombre));
}

export function getRelacionados(ids?: string[]): Producto[] {
  if (!ids?.length) return [];

  return ids
    .map((id) => productos.find((producto) => producto.id === id))
    .filter((producto): producto is Producto => Boolean(producto));
}

export function getProductosDisponibles(
  categoria?: ProductoCategoriaSlug
): Producto[] {
  return productos
    .filter((producto) => (categoria ? producto.categoria === categoria : true))
    .filter((producto) => producto.disponible !== false)
    .sort((a, b) => a.nombre.localeCompare(b.nombre));
}

export function getCategoriasConProductos(): Array<{
  slug: ProductoCategoriaSlug;
  nombre: string;
  descripcion: string;
  total: number;
}> {
  return (Object.keys(categoriasMeta) as ProductoCategoriaSlug[])
    .map((slug) => ({
      slug,
      nombre: categoriasMeta[slug].nombre,
      descripcion: categoriasMeta[slug].descripcion,
      total: productos.filter((producto) => producto.categoria === slug).length,
    }))
    .filter((item) => item.total > 0)
    .sort((a, b) => a.nombre.localeCompare(b.nombre));
}

/* =============================================================================
   BUSCADOR
============================================================================= */

const cacheBusqueda = new Map<string, Producto[]>();

export function buscarProductos(query: string): Producto[] {
  const q = normalizarTexto(query);

  if (!q || q.length < 2) return [];

  if (cacheBusqueda.has(q)) {
    return cacheBusqueda.get(q) ?? [];
  }

  const resultados = productos
    .map((producto) => {
      const textoBusqueda = construirTextoBusqueda(producto);
      let score = 0;

      if (producto.codigo && normalizarTexto(producto.codigo) === q) score += 50;
      if (normalizarTexto(producto.nombre).includes(q)) score += 15;
      if (normalizarTexto(producto.slug).includes(q)) score += 10;
      if (normalizarTexto(producto.categoria).includes(q)) score += 5;
      if (textoBusqueda.includes(q)) score += 3;

      const palabras = q.split(" ").filter(Boolean);
      const coincidencias = palabras.filter((p) =>
        textoBusqueda.includes(p)
      ).length;

      score += coincidencias * 2;

      return { producto, score };
    })
    .filter((item) => item.score > 0)
    .sort(
      (a, b) =>
        b.score - a.score || a.producto.nombre.localeCompare(b.producto.nombre)
    )
    .map((item) => item.producto);

  cacheBusqueda.set(q, resultados);

  return resultados;
}

/* =============================================================================
   UTILIDADES INTERNAS
============================================================================= */

function construirTextoBusqueda(producto: Producto): string {
  const specs = Object.entries(producto.especificaciones ?? {})
    .map(([k, v]) => `${k} ${String(v)}`)
    .join(" ");

  const tags = Array.isArray(producto.tags) ? producto.tags : [];

  const searchable = [
    producto.nombre ?? "",
    producto.nombreCorto ?? "",
    producto.slug ?? "",
    producto.codigo ?? "",
    producto.marca ?? "",
    producto.descripcion ?? "",
    producto.categoria ?? "",
    categoriasMeta[producto.categoria]?.nombre ?? "",
    categoriasMeta[producto.categoria]?.descripcion ?? "",
    ...tags,
    specs,
  ].join(" ");

  return expandirBusqueda(searchable);
}

function normalizarTexto(texto: string): string {
  return String(texto ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, " ");
}

function expandirBusqueda(texto: string): string {
  return normalizarTexto(texto)
    .replace(/"/g, " pulgadas ")
    .replace(/\bhp\b/g, " hp potencia ")
    .replace(/\bpsi\b/g, " psi presion ")
    .replace(/\bir\b/g, " infrarroja infrarrojo ir ")
    .replace(/\bg1\b/g, " g1 prefiltro ")
    .replace(/\bg2\b/g, " g2 prefiltro ")
    .replace(/\bg4\b/g, " g4 prefiltro ")
    .replace(/\bf5\b/g, " f5 filtracion ")
    .replace(/\bf6\b/g, " f6 filtracion ")
    .replace(/\bf7\b/g, " f7 filtracion ")
    .replace(/\bf8\b/g, " f8 filtracion ")
    .replace(/\bmerv8\b/g, " merv8 prefiltro hvac ")
    .replace(/\bmerv11\b/g, " merv11 filtracion intermedia ")
    .replace(/\bmerv14\b/g, " merv14 alta eficiencia ")
    .replace(/\bmerv15\b/g, " merv15 alta eficiencia ")
    .replace(/\bhepa\b/g, " hepa alta eficiencia aire limpio ")
    .replace(/\bhvac\b/g, " hvac ventilacion aire filtracion ")
    .replace(/\bpocket\b/g, " pocket bolsillo filtro ")
    .replace(/\bmm\b/g, " mm milimetros ")
    .replace(/\bpa\b/g, " pa presion ");
}