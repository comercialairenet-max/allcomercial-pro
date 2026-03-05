// lib/catalogoImages.ts
import fs from "fs";
import path from "path";

const EXCLUDE_RE =
  /(background|cropped|logo|icon|manifest|match_report)/i;

const IMG_EXT_RE = /\.(png|jpe?g|webp)$/i;

function safeListDir(dir: string): string[] {
  try {
    return fs.readdirSync(dir);
  } catch {
    return [];
  }
}

export function getCategoryImagePool(slug: string) {
  const dir = path.join(process.cwd(), "public", "catalogo", slug);
  const files = safeListDir(dir)
    .filter((f) => IMG_EXT_RE.test(f))
    .filter((f) => !EXCLUDE_RE.test(f));

  // Orden estable (para que no “salten” imágenes)
  files.sort((a, b) => a.localeCompare(b, "es"));

  // devuelve rutas públicas
  return files.map((f) => `/catalogo/${slug}/${f}`);
}

/**
 * Devuelve una imagen para un item, SIEMPRE de la misma categoría.
 * 1) match exacto por id (id.jpg / id.jpeg / id.png / id.webp)
 * 2) si no existe, asigna por index dentro del pool (estable)
 */
export function resolveItemImage(opts: {
  slug: string;
  itemId: string;
  index: number;
  explicit?: string;
}) {
  const { slug, itemId, index, explicit } = opts;

  if (explicit && typeof explicit === "string" && explicit.trim()) {
    return explicit;
  }

  const pool = getCategoryImagePool(slug);
  if (pool.length === 0) return "";

  // 1) intento por id exacto (tk-1w.jpg etc)
  const idNorm = (itemId || "").trim();
  if (idNorm) {
    const byId = pool.find((p) => {
      const file = p.split("/").pop() || "";
      return file.startsWith(idNorm + ".") || file.startsWith(idNorm + "-");
    });
    if (byId) return byId;
  }

  // 2) fallback por índice (estable)
  return pool[index % pool.length] || pool[0];
}