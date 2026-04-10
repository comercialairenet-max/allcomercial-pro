// lib/product-content.ts

type NullableString = string | null | undefined;

export type ProductContentInput = {
  nombre: string;
  categoria?: NullableString;
  linea?: NullableString;
  codigo?: NullableString;
  descripcion?: NullableString;
  uso?: NullableString;
  material?: NullableString;
  aplicacion?: NullableString;
  beneficio?: NullableString;
  caracteristicas?: string[];
  especificaciones?: Record<string, string | number>;
};

function hasText(value?: NullableString): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function clean(value?: NullableString): string {
  return hasText(value) ? value.trim() : "";
}

function joinParts(parts: Array<string | undefined | null>, separator = " "): string {
  return parts
    .map((part) => (part ?? "").trim())
    .filter(Boolean)
    .join(separator)
    .replace(/\s+/g, " ")
    .trim();
}

function categoryContext(categoria?: NullableString): string {
  const value = clean(categoria).toLowerCase();

  if (value.includes("filtr")) {
    return "control de partículas, tratamiento de aire y aplicaciones industriales";
  }
  if (value.includes("ventil")) {
    return "extracción, renovación y movimiento de aire";
  }
  if (value.includes("aire comprim")) {
    return "redes, operación técnica y aplicaciones productivas";
  }
  if (value.includes("cabinas")) {
    return "procesos de pintura y control del entorno";
  }
  if (value.includes("lavaderos")) {
    return "operación, servicio y productividad";
  }
  if (value.includes("carrocer")) {
    return "procesos automotrices y reparación especializada";
  }
  if (value.includes("lamparas") || value.includes("secado")) {
    return "secado y apoyo a procesos de pintura";
  }

  return "aplicaciones técnicas y comerciales";
}

function generateShortDescription(input: ProductContentInput): string {
  const nombre = clean(input.nombre);
  const uso = clean(input.uso);
  const aplicacion = clean(input.aplicacion);
  const beneficio = clean(input.beneficio);
  const categoria = clean(input.categoria);

  const context = categoryContext(categoria);

  if (uso && aplicacion && beneficio) {
    return `${nombre} orientado a ${uso}, con aplicación en ${aplicacion} y enfoque en ${beneficio}.`;
  }

  if (uso && aplicacion) {
    return `${nombre} orientado a ${uso}, con aplicación en ${aplicacion}.`;
  }

  if (aplicacion && beneficio) {
    return `${nombre} para ${aplicacion}, presentado con enfoque en ${beneficio}.`;
  }

  if (uso) {
    return `${nombre} orientado a ${uso}, dentro de una línea de solución para ${context}.`;
  }

  if (aplicacion) {
    return `${nombre} presentado para ${aplicacion}, dentro de una línea de solución para ${context}.`;
  }

  if (beneficio) {
    return `${nombre} presentado con enfoque en ${beneficio}, dentro de una línea de solución para ${context}.`;
  }

  return `${nombre} dentro de una línea de solución orientada a ${context}.`;
}

function generateLongDescription(input: ProductContentInput): string {
  const nombre = clean(input.nombre);
  const categoria = clean(input.categoria);
  const linea = clean(input.linea);
  const uso = clean(input.uso);
  const material = clean(input.material);
  const aplicacion = clean(input.aplicacion);
  const beneficio = clean(input.beneficio);

  const context = categoryContext(categoria);

  const firstSentence = generateShortDescription(input);

  const secondSentence = joinParts([
    hasText(linea) ? `Hace parte de la línea ${linea}.` : "",
    hasText(material) ? `Puede integrarse en soluciones donde se requiere ${material}.` : "",
    hasText(context) ? `Su contexto de uso se relaciona con ${context}.` : "",
  ]);

  const thirdSentence = joinParts([
    hasText(uso) ? `Se recomienda revisar su selección según el uso previsto.` : "",
    hasText(aplicacion) ? `La aplicación debe validarse de acuerdo con el proceso o entorno de trabajo.` : "",
    hasText(beneficio) ? `Su presentación está orientada a facilitar una consulta más clara antes de cotización.` : "",
  ]);

  return [firstSentence, secondSentence, thirdSentence]
    .filter(Boolean)
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
}

function generateBenefits(input: ProductContentInput): string[] {
  const benefits = new Set<string>();
  const categoria = clean(input.categoria).toLowerCase();
  const uso = clean(input.uso);
  const aplicacion = clean(input.aplicacion);
  const beneficio = clean(input.beneficio);
  const material = clean(input.material);

  benefits.add("Presentación clara de la referencia dentro del portafolio.");

  if (uso) {
    benefits.add(`Orientación hacia ${uso}.`);
  }

  if (aplicacion) {
    benefits.add(`Aplicación relacionada con ${aplicacion}.`);
  }

  if (beneficio) {
    benefits.add(`${beneficio}.`);
  }

  if (material) {
    benefits.add(`Información útil para validar selección según material o construcción.`);
  }

  if (categoria.includes("filtr")) {
    benefits.add("Consulta útil para procesos de tratamiento de aire y control de partículas.");
  }
  if (categoria.includes("ventil")) {
    benefits.add("Soporte para consulta en soluciones de extracción y renovación de aire.");
  }
  if (categoria.includes("aire comprim")) {
    benefits.add("Enfoque en selección para redes y aplicaciones de aire comprimido.");
  }
  if (categoria.includes("cabinas")) {
    benefits.add("Orientación para procesos de pintura y control del entorno.");
  }

  return Array.from(benefits).slice(0, 5);
}

function generateCommercialCta(input: ProductContentInput): string {
  const nombre = clean(input.nombre);
  const categoria = clean(input.categoria);

  if (categoria) {
    return `Hola, quiero información y cotización de la referencia ${nombre} dentro de la categoría ${categoria}.`;
  }

  return `Hola, quiero información y cotización de la referencia ${nombre}.`;
}

function generateTechnicalPrompt(input: ProductContentInput): string {
  const nombre = clean(input.nombre);
  const uso = clean(input.uso);
  const aplicacion = clean(input.aplicacion);

  if (uso && aplicacion) {
    return `Hola, quiero validar si la referencia ${nombre} es adecuada para ${uso} en ${aplicacion}.`;
  }

  if (uso) {
    return `Hola, quiero validar si la referencia ${nombre} es adecuada para ${uso}.`;
  }

  return `Hola, quiero validar características y aplicación de la referencia ${nombre}.`;
}

export function buildProductContent(input: ProductContentInput) {
  return {
    shortDescription: generateShortDescription(input),
    longDescription: generateLongDescription(input),
    benefits: generateBenefits(input),
    cta: {
      primaryLabel: "Solicitar información",
      primaryMessage: generateCommercialCta(input),
      technicalLabel: "Validar aplicación",
      technicalMessage: generateTechnicalPrompt(input),
    },
  };
}

/*
EJEMPLO DE USO:

const content = buildProductContent({
  nombre: "Extractor axial industrial 16\"",
  categoria: "ventilacion-industrial",
  linea: "Extractores axiales",
  uso: "extracción de aire",
  aplicacion: "talleres, bodegas y áreas de servicio",
  beneficio: "facilitar la renovación de aire y la consulta comercial",
  material: "estructura metálica",
});

content.shortDescription
content.longDescription
content.benefits
content.cta.primaryMessage
*/