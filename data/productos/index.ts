// data/productos/index.ts

export type {
  Producto,
  ProductoCategoriaSlug,
  ProductoCTA,
  ProductoRaw,
  ProductoSEO,
  ProductoSpecValue,
} from "./productos.types";

export { categoriasMeta } from "./productos.meta";
export { productos } from "./productos.data";

export {
  buscarProductos,
  getCategoriasConProductos,
  getProductoPorId,
  getProductoPorSlug,
  getProductosDestacados,
  getProductosDisponibles,
  getProductosPorCategoria,
  getRelacionados,
} from "./productos.helpers";