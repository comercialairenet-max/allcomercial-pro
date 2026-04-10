// data/productos/productos.types.ts

export type ProductoCategoriaSlug =
  | "filtracion-industrial"
  | "ventilacion-industrial"
  | "sistemas-de-aire-comprimido"
  | "cabinas-de-pintura"
  | "equipos-para-lavaderos"
  | "equipos-para-reparacion-de-carrocerias"
  | "lamparas-de-secado-ir"
  | "pistolas-de-gravedad";

export type ProductoSpecValue = string | number;

export interface ProductoRaw {
  id: string;
  codigo?: string;
  categoria: ProductoCategoriaSlug;
  nombre: string;
  descripcion: string;
  imagen: string;
  gallery?: string[];
  especificaciones?: Record<string, ProductoSpecValue>;
  stock?: number;
  precio?: number;
  marca?: string;
  destacado?: boolean;
  tags?: string[];
}

export interface ProductoSEO {
  title: string;
  description: string;
  keywords: string[];
}

export interface ProductoCTA {
  primaryLabel: string;
  primaryMessage: string;
  secondaryLabel?: string;
  secondaryMessage?: string;
}

export interface Producto {
  id: string;
  slug: string;
  codigo?: string;
  categoria: ProductoCategoriaSlug;

  nombre: string;
  nombreCorto?: string;
  descripcion: string;

  imagen: string;
  gallery: string[];

  especificaciones: Record<string, ProductoSpecValue>;
  stock: number;
  precio?: number;
  marca?: string;
  destacado: boolean;
  tags: string[];

  disponible: boolean;

  seo: ProductoSEO;
  cta: ProductoCTA;
}