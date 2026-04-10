// data/productos/productos.meta.ts

import type { ProductoCategoriaSlug } from "./productos.types";

export interface CategoriaMeta {
  nombre: string;
  descripcion: string;
  whatsappMessage: string;
}

export const categoriasMeta: Record<ProductoCategoriaSlug, CategoriaMeta> = {
  "filtracion-industrial": {
    nombre: "Filtración industrial",
    descripcion:
      "Soluciones para prefiltrado, filtración media, alta eficiencia, control de olores y cabinas de pintura.",
    whatsappMessage:
      "Hola, quiero información sobre productos de filtración industrial.",
  },
  "ventilacion-industrial": {
    nombre: "Ventilación industrial",
    descripcion:
      "Equipos para extracción, renovación, inyección y movimiento de aire en aplicaciones industriales y comerciales.",
    whatsappMessage:
      "Hola, quiero información sobre productos de ventilación industrial.",
  },
  "sistemas-de-aire-comprimido": {
    nombre: "Sistemas de aire comprimido",
    descripcion:
      "Equipos y accesorios para generación, conducción y aplicación de aire comprimido.",
    whatsappMessage:
      "Hola, quiero información sobre sistemas de aire comprimido.",
  },
  "cabinas-de-pintura": {
    nombre: "Cabinas de pintura",
    descripcion:
      "Cabinas y soluciones para procesos de pintura, secado y control del entorno de trabajo.",
    whatsappMessage:
      "Hola, quiero información sobre cabinas de pintura.",
  },
  "equipos-para-lavaderos": {
    nombre: "Equipos para lavaderos",
    descripcion:
      "Equipos para lavaderos, detailing y servicio automotriz.",
    whatsappMessage:
      "Hola, quiero información sobre equipos para lavaderos.",
  },
  "equipos-para-reparacion-de-carrocerias": {
    nombre: "Equipos para reparación de carrocerías",
    descripcion:
      "Equipos para latonería, reparación automotriz y procesos de taller.",
    whatsappMessage:
      "Hola, quiero información sobre equipos para reparación de carrocerías.",
  },
  "lamparas-de-secado-ir": {
    nombre: "Lámparas de secado IR",
    descripcion:
      "Lámparas infrarrojas para secado rápido en pintura automotriz y procesos técnicos.",
    whatsappMessage:
      "Hola, quiero información sobre lámparas de secado IR.",
  },
  "pistolas-de-gravedad": {
    nombre: "Pistolas de gravedad",
    descripcion:
      "Pistolas para aplicación de pintura y acabados con enfoque profesional.",
    whatsappMessage:
      "Hola, quiero información sobre pistolas de gravedad.",
  },
};