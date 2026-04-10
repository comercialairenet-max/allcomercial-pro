// data/productos/productos.data.ts

import productosJson from "./productos.json";
import type { Producto, ProductoRaw } from "./productos.types";

function slugify(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/["']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// 🔥 NUEVO: normalizador seguro de números
function parseNumber(value: unknown): number | undefined {
  if (typeof value === "number") {
    return Number.isFinite(value) ? value : undefined;
  }

  if (typeof value === "string") {
    const cleaned = value
      .trim()
      .replace(/\s+/g, "")
      .replace(/[^\d,.-]/g, "");

    if (!cleaned) return undefined;

    const normalized = cleaned.includes(",") && cleaned.includes(".")
      ? cleaned.replace(/\./g, "").replace(",", ".")
      : cleaned.includes(",")
      ? cleaned.replace(",", ".")
      : cleaned;

    const parsed = Number(normalized);
    return Number.isFinite(parsed) ? parsed : undefined;
  }

  return undefined;
}

function parseInteger(value: unknown): number | undefined {
  const parsed = parseNumber(value);
  return typeof parsed === "number" ? Math.trunc(parsed) : undefined;
}

function buildSEO(producto: ProductoRaw) {
  const title = `${producto.nombre} | ${producto.marca ?? "RPM Industrial"}`;
  const description =
    producto.descripcion.length > 160
      ? `${producto.descripcion.slice(0, 157)}...`
      : producto.descripcion;

  const keywords = Array.from(
    new Set([
      producto.nombre,
      producto.codigo ?? "",
      producto.categoria,
      producto.marca ?? "",
      ...(producto.tags ?? []),
    ].filter(Boolean))
  );

  return {
    title,
    description,
    keywords,
  };
}

function buildCTA(producto: ProductoRaw) {
  const nombre = producto.nombre;
  const codigo = producto.codigo ? ` (${producto.codigo})` : "";

  return {
    primaryLabel: "Solicitar cotización",
    primaryMessage: `Hola, quiero cotizar ${nombre}${codigo}.`,
    secondaryLabel: "Solicitar información",
    secondaryMessage: `Hola, quiero más información sobre ${nombre}${codigo}.`,
  };
}

// 🔥 IMPORTANTE: cast seguro
const productosRaw = productosJson as unknown as ProductoRaw[];

export const productos: Producto[] = productosRaw
  .map((producto) => ({
    id: producto.id,
    slug: slugify(producto.id || producto.nombre),
    codigo: producto.codigo,
    categoria: producto.categoria,

    nombre: producto.nombre,
    nombreCorto: producto.nombre,
    descripcion: producto.descripcion,

    imagen: producto.imagen,
    gallery: producto.gallery?.length ? producto.gallery : [producto.imagen],

    especificaciones: producto.especificaciones ?? {},

    // 🔥 CORREGIDO
    stock: parseInteger(producto.stock) ?? 0,
    precio: parseNumber(producto.precio),

    marca: producto.marca,
    destacado: Boolean(producto.destacado),
    tags: producto.tags ?? [],

    disponible: (parseInteger(producto.stock) ?? 0) > 0,

    seo: buildSEO(producto),
    cta: buildCTA(producto),
  }))
  .sort((a, b) => {
    if (a.destacado && !b.destacado) return -1;
    if (!a.destacado && b.destacado) return 1;
    return a.nombre.localeCompare(b.nombre);
  });