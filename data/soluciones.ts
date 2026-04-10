// data/soluciones.ts

import { getProductoPorId, type Producto, type ProductoCategoriaSlug } from "@/data/productos";

export interface Solucion {
  slug: string;
  nombre: string;
  subtitulo: string;
  descripcion: string;
  problema: string;
  beneficio: string;
  enfoque: string;
  categorias: ProductoCategoriaSlug[];
  icono: "paint" | "air" | "clean" | "odor" | "dust";
  productoIds: string[];
  bullets: string[];
}

export const soluciones: Solucion[] = [
  {
    slug: "cabinas-de-pintura",
    nombre: "Cabinas de pintura",
    subtitulo: "Control del overspray y calidad del acabado",
    descripcion:
      "Soluciones de filtración para cabinas de pintura orientadas a controlar niebla de pintura, mejorar limpieza del aire y proteger la calidad del proceso.",
    problema:
      "Overspray, contaminación del entorno, defectos de acabado y saturación prematura del sistema de extracción.",
    beneficio:
      "Mejor control del proceso, reducción de reprocesos y mejor presentación final del acabado.",
    enfoque:
      "Filtración especializada para extracción, suministro de aire y captura de partículas húmedas en cabinas de pintura.",
    categorias: ["filtracion-industrial"],
    icono: "paint",
    productoIds: [
      "paint-stop-ipf-03",
      "filtro-techo-f5-ipf-05",
      "carton-plegado-cabina-pintura-ipf-09",
      "andreae-af113",
    ],
    bullets: [
      "Control de overspray y niebla de pintura",
      "Mejora de la calidad del acabado",
      "Protección del sistema de extracción",
      "Soluciones para cabinas automotrices e industriales",
    ],
  },
  {
    slug: "hvac-ventilacion",
    nombre: "HVAC y ventilación industrial",
    subtitulo: "Protección del sistema y calidad del aire",
    descripcion:
      "Soluciones para prefiltración, filtración intermedia y protección de sistemas HVAC, ventilación y tratamiento de aire.",
    problema:
      "Acumulación de partículas, pérdida de eficiencia energética, contaminación del sistema y reducción de vida útil de componentes.",
    beneficio:
      "Mayor estabilidad operativa, mejor desempeño del sistema y reducción del impacto sobre filtros posteriores.",
    enfoque:
      "Etapas de filtración para entrada, protección y optimización del flujo de aire en sistemas HVAC industriales y comerciales.",
    categorias: ["filtracion-industrial", "ventilacion-industrial"],
    icono: "air",
    productoIds: [
      "manta-sintetica-g1-ipf-01",
      "manta-sintetica-g4-ipf-04",
      "merv8-ipf-30",
      "pocket-f6-ipf-45-6f6",
      "pocket-f7-ipf-80-6f7",
    ],
    bullets: [
      "Prefiltración para sistemas HVAC",
      "Protección de etapas posteriores",
      "Mejora del flujo de aire",
      "Soluciones para climatización y ventilación",
    ],
  },
  {
    slug: "aire-limpio-hospitalario",
    nombre: "Aire limpio y ambientes controlados",
    subtitulo: "Filtración avanzada para procesos críticos",
    descripcion:
      "Soluciones para aplicaciones con mayor exigencia de limpieza del aire, incluyendo hospitales, farmacéutica, laboratorios y ambientes controlados.",
    problema:
      "Presencia de partículas finas y contaminantes en aplicaciones donde la calidad del aire afecta directamente el proceso.",
    beneficio:
      "Mayor control del ambiente, mejor nivel de limpieza y soporte para aplicaciones críticas.",
    enfoque:
      "Etapas de filtración intermedia-alta y alta eficiencia para proyectos con necesidad de mayor control de partículas.",
    categorias: ["filtracion-industrial"],
    icono: "clean",
    productoIds: [
      "mini-pleat-merv14-ipf-34",
      "mini-pleat-merv15-ipf-35",
      "v-bank-merv14-ipf-95",
      "mini-pleat-hepa-h13-ipf-99",
      "hepa-box-header-ipf-100",
    ],
    bullets: [
      "Aplicaciones hospitalarias y farmacéuticas",
      "Mayor eficiencia de filtración",
      "Etapas intermedias y HEPA",
      "Soporte para ambientes controlados",
    ],
  },
  {
    slug: "control-olores-gases",
    nombre: "Control de olores y gases",
    subtitulo: "Tratamiento del aire más allá del polvo",
    descripcion:
      "Soluciones orientadas a captación de olores y ciertos gases en procesos donde el reto no es solo la partícula sólida.",
    problema:
      "Olores molestos, vapores y presencia de compuestos gaseosos que afectan ambiente, proceso o confort operacional.",
    beneficio:
      "Mejor ambiente de trabajo y una solución más enfocada al tratamiento del aire gaseoso.",
    enfoque:
      "Medios filtrantes de carbón activado para aplicaciones industriales, hospitalarias, químicas y de procesamiento.",
    categorias: ["filtracion-industrial"],
    icono: "odor",
    productoIds: [
      "carbon-activado-ipf-07",
      "carbon-activado-plegado-ipf-22",
    ],
    bullets: [
      "Control de olores",
      "Captación de ciertos gases",
      "Aplicaciones hospitalarias, químicas y alimentos",
      "Opciones en rollo y panel",
    ],
  },
  {
    slug: "control-polvo-industrial",
    nombre: "Control de polvo industrial",
    subtitulo: "Captura de partículas para procesos productivos",
    descripcion:
      "Soluciones para captación de polvo en procesos industriales, apoyo a colectores y control de partículas sólidas.",
    problema:
      "Polvo suspendido que afecta equipos, ambiente de trabajo, producto final y desempeño del sistema.",
    beneficio:
      "Procesos más limpios, mejor protección del sistema y soporte a líneas con carga de partículas.",
    enfoque:
      "Elementos filtrantes para procesos de captación y control de polvo en industrias con mayor exigencia operativa.",
    categorias: ["filtracion-industrial"],
    icono: "dust",
    productoIds: [
      "dust-collector-ipf-98",
      "merv8-ipf-30",
      "pocket-f7-ipf-80-6f7",
    ],
    bullets: [
      "Captura de partículas sólidas",
      "Apoyo a colectores y procesos",
      "Protección de equipos y ambiente",
      "Aplicaciones en múltiples industrias",
    ],
  },
];

export function getSolucionPorSlug(slug: string): Solucion | undefined {
  return soluciones.find((solucion) => solucion.slug === slug);
}

export function getProductosPorSolucion(slug: string): Producto[] {
  const solucion = getSolucionPorSlug(slug);
  if (!solucion) return [];

  return solucion.productoIds
    .map((id) => getProductoPorId(id))
    .filter((producto): producto is Producto => Boolean(producto));
}