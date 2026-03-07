export type Producto = {
  id: string
  categoria: string
  nombre: string
  descripcion?: string
  imagen?: string
  gallery?: string[]
  especificaciones?: Record<string, string | number>
  stock: number
  codigo?: string
  marca?: string
  precio?: number
  destacado?: boolean
  tags?: string[]
}

export const productos: Producto[] = [
  {
    id: 'filtro-panel-g4-595x595',
    codigo: 'FPG4-595',
    categoria: 'filtracion-industrial',
    nombre: 'Filtro Panel G4 595x595',
    descripcion:
      'Filtro de alta eficiencia para sistemas de ventilación y prefiltrado industrial.',
    imagen:
      '/productos/filtracion-industrial/manta-filtrante-g4-fibra-sintetica-hvac-bogota-colombia.jpeg',
    gallery: [
      '/productos/filtracion-industrial/manta-filtrante-g4-fibra-sintetica-hvac-bogota-colombia.jpeg',
      '/productos/filtracion-industrial/manta-filtrante-lavable-g4-verde-hvac-bogota-colombia.jpeg',
      '/productos/filtracion-industrial/media-filtrante-g1-fibra-sintetica-prefiltro-bogota-colombia.jpeg',
    ],
    especificaciones: {
      Medida: '595x595 mm',
      Eficiencia: 'G4',
      Material: 'Fibra sintética',
      Aplicacion: 'Prefiltrado industrial',
    },
    stock: 12,
    precio: 95000,
    marca: 'RPM Industrial',
    destacado: true,
    tags: ['filtro', 'panel', 'g4', '595x595', 'prefiltro', 'hvac'],
  },
  {
    id: 'filtro-bolsa-f7-592x592',
    codigo: 'FBF7-592',
    categoria: 'filtracion-industrial',
    nombre: 'Filtro Bolsa F7 592x592',
    descripcion:
      'Filtro de bolsa para sistemas HVAC y aplicaciones de filtración industrial.',
    imagen:
      '/productos/filtracion-industrial/filtro-pocket-f7-hvac-bogota-colombia.jpeg',
    gallery: [
      '/productos/filtracion-industrial/filtro-pocket-f6-hvac-bogota-colombia.jpeg',
      '/productos/filtracion-industrial/filtro-pocket-f7-hvac-bogota-colombia.jpeg',
      '/productos/filtracion-industrial/filtro-pocket-f8-hvac-bogota-colombia.jpeg',
      '/productos/filtracion-industrial/filtro-v-bank-merv14-hvac-bogota-colombia.jpeg',
    ],
    especificaciones: {
      Medida: '592x592 mm',
      Eficiencia: 'F7',
      Bolsas: 6,
      Aplicacion: 'HVAC industrial',
    },
    stock: 8,
    precio: 185000,
    marca: 'RPM Industrial',
    destacado: true,
    tags: ['filtro', 'bolsa', 'f7', '592x592', 'hvac', 'filtracion'],
  },
  {
    id: 'extractor-axial-18p',
    codigo: 'EXTA-18',
    categoria: 'ventilacion-industrial',
    nombre: 'Extractor Axial Industrial 18"',
    descripcion:
      'Equipo de ventilación para extracción de aire en procesos industriales.',
    imagen:
      '/productos/ventilacion-industrial/extractor-axial-metalico-18-pulgadas-bogota-colombia.jpeg',
    gallery: [
      '/productos/ventilacion-industrial/extractor-axial-metalico-14-pulgadas-bogota-colombia.jpeg',
      '/productos/ventilacion-industrial/extractor-axial-metalico-16-pulgadas-bogota-colombia.jpeg',
      '/productos/ventilacion-industrial/extractor-axial-metalico-18-pulgadas-bogota-colombia.jpeg',
    ],
    especificaciones: {
      Diametro: '18 pulgadas',
      Voltaje: '110/220V',
      Aplicacion: 'Extracción',
      Tipo: 'Axial',
    },
    stock: 5,
    precio: 780000,
    marca: 'RPM Industrial',
    destacado: true,
    tags: ['extractor', 'axial', '18 pulgadas', 'ventilacion', 'industrial'],
  },
  {
    id: 'turbina-centrifuga-15hp',
    codigo: 'TURC-15HP',
    categoria: 'ventilacion-industrial',
    nombre: 'Turbina Centrífuga 1.5 HP',
    descripcion:
      'Turbina para inyección y extracción en sistemas de ventilación industrial.',
    imagen:
      '/productos/ventilacion-industrial/turbina-tipo-siroco-1hp-alta-presion-bogota-colombia.jpeg',
    gallery: [
      '/productos/ventilacion-industrial/turbina-tipo-siroco-0-5hp-alta-presion-bogota-colombia.jpeg',
      '/productos/ventilacion-industrial/turbina-tipo-siroco-1hp-alta-presion-bogota-colombia.jpeg',
      '/productos/ventilacion-industrial/turbina-2hp-presion-transporte-bogota-colombia.jpeg',
      '/productos/ventilacion-industrial/turbina-3hp-presion-transporte-bogota-colombia.jpeg',
    ],
    especificaciones: {
      Potencia: '1.5 HP',
      Material: 'Acero',
      Uso: 'Industrial',
      Tipo: 'Centrífuga',
    },
    stock: 3,
    precio: 1650000,
    marca: 'RPM Industrial',
    destacado: true,
    tags: ['turbina', 'centrifuga', '1.5 hp', 'inyeccion', 'extraccion'],
  },
  {
    id: 'compresor-tornillo-10hp',
    codigo: 'COMP-T10',
    categoria: 'sistemas-de-aire-comprimido',
    nombre: 'Compresor de Tornillo 10 HP',
    descripcion:
      'Solución eficiente para suministro continuo de aire comprimido.',
    imagen:
      '/productos/sistemas-de-aire-comprimido/compresor-aire-industrial.jpeg',
    gallery: [
      '/productos/sistemas-de-aire-comprimido/compresor-aire-industrial.jpeg',
      '/productos/sistemas-de-aire-comprimido/tanque-pulmon-aire-comprimido.jpeg',
      '/productos/sistemas-de-aire-comprimido/espumadora-industrial.jpeg',
      '/productos/sistemas-de-aire-comprimido/tolva-sandblasting-movil.jpeg',
    ],
    especificaciones: {
      Potencia: '10 HP',
      Presion: '145 PSI',
      Tipo: 'Tornillo',
      Aplicacion: 'Aire comprimido continuo',
    },
    stock: 2,
    precio: 9850000,
    marca: 'RPM Industrial',
    destacado: true,
    tags: ['compresor', 'tornillo', '10 hp', '145 psi', 'aire comprimido'],
  },
  {
    id: 'secador-aire-frigorifico',
    codigo: 'SEC-FRIG',
    categoria: 'sistemas-de-aire-comprimido',
    nombre: 'Secador de Aire Frigorífico',
    descripcion:
      'Equipo para tratamiento y secado de aire comprimido en procesos industriales.',
    imagen:
      '/productos/sistemas-de-aire-comprimido/tanque-pulmon-aire-comprimido.jpeg',
    gallery: [
      '/productos/sistemas-de-aire-comprimido/tanque-pulmon-aire-comprimido.jpeg',
      '/productos/sistemas-de-aire-comprimido/compresor-aire-industrial.jpeg',
      '/productos/sistemas-de-aire-comprimido/espumadora-industrial.jpeg',
    ],
    especificaciones: {
      Conexion: '1/2"',
      Presion: '150 PSI',
      Tipo: 'Frigorífico',
      Aplicacion: 'Tratamiento de aire',
    },
    stock: 4,
    precio: 2350000,
    marca: 'RPM Industrial',
    destacado: false,
    tags: ['secador', 'aire', 'frigorifico', '150 psi', 'tratamiento'],
  },
  {
    id: 'cabina-pintura-semiindustrial',
    codigo: 'CAB-SEMIPRO',
    categoria: 'cabinas-de-pintura',
    nombre: 'Cabina de Pintura Semiindustrial',
    descripcion:
      'Cabina diseñada para acabados profesionales con control de flujo de aire.',
    imagen:
      '/productos/cabinas-de-pintura/cabina-pintura-automotriz-paneles-bogota-colombia.jpeg',
    gallery: [
      '/productos/cabinas-de-pintura/cabina-pintura-automotriz-paneles-bogota-colombia.jpeg',
      '/productos/cabinas-de-pintura/cabina-pintura-cortinas-poliuretano-bogota-colombia.jpeg',
      '/productos/cabinas-de-pintura/interior-cabina-pintura-iluminacion-extraccion-bogota-colombia.jpeg',
      '/productos/cabinas-de-pintura/cabina-pintura-automotriz-vehiculo-bogota-colombia.jpeg',
    ],
    especificaciones: {
      Tipo: 'Semiindustrial',
      Iluminacion: 'LED',
      Flujo: 'Horizontal',
      Aplicacion: 'Pintura automotriz',
    },
    stock: 1,
    precio: 18500000,
    marca: 'RPM Industrial',
    destacado: true,
    tags: ['cabina', 'pintura', 'semiindustrial', 'automotriz', 'flujo horizontal'],
  },
  {
    id: 'lavadora-alta-presion-pro',
    codigo: 'LAV-2200PRO',
    categoria: 'equipos-para-lavaderos',
    nombre: 'Lavadora de Alta Presión PRO',
    descripcion:
      'Equipo profesional para lavaderos, detailing y aplicaciones de limpieza intensiva.',
    imagen:
      '/productos/equipos-para-lavaderos/elevador-hidraulico-un-poste-carro-bogota-colombia.jpeg',
    gallery: [
      '/productos/equipos-para-lavaderos/elevador-hidraulico-un-poste-carro-bogota-colombia.jpeg',
      '/productos/equipos-para-lavaderos/elevador-hidraulico-un-poste-vehiculo-elevado-bogota-colombia.jpeg',
      '/productos/equipos-para-lavaderos/plataforma-elevadora-para-moto-bogota-colombia.jpeg',
      '/productos/equipos-para-lavaderos/plataforma-elevadora-moto-en-uso-bogota-colombia.jpeg',
      '/productos/equipos-para-lavaderos/bomba-hidraulica-elevador-automotriz-naranja-bogota-colombia.jpeg',
      '/productos/equipos-para-lavaderos/bomba-hidraulica-elevador-automotriz-verde-bogota-colombia.jpeg',
    ],
    especificaciones: {
      Presion: '2200 PSI',
      Caudal: '8 L/min',
      Uso: 'Profesional',
      Aplicacion: 'Lavado intensivo',
    },
    stock: 6,
    precio: 1450000,
    marca: 'RPM Industrial',
    destacado: true,
    tags: ['lavadora', 'alta presion', '2200 psi', 'lavadero', 'detailing'],
  },
  {
    id: 'banco-estiraje-carroceria',
    codigo: 'BEC-3T',
    categoria: 'equipos-para-reparacion-de-carrocerias',
    nombre: 'Banco de Estiraje para Carrocería',
    descripcion:
      'Equipo de soporte para reparación estructural de carrocerías.',
    imagen:
      '/productos/equipos-para-reparacion-de-carrocerias/maquina-desabolladora-spotter-fy-6000-bogota-colombia.jpg',
    gallery: [
      '/productos/equipos-para-reparacion-de-carrocerias/maquina-desabolladora-spotter-fy-6000-bogota-colombia.jpg',
      '/productos/equipos-para-reparacion-de-carrocerias/soldadora-por-puntos-automotriz-220v-bogota-colombia.jpg',
    ],
    especificaciones: {
      Capacidad: '3 Ton',
      Uso: 'Carrocería',
      Material: 'Acero reforzado',
      Aplicacion: 'Reparación estructural',
    },
    stock: 1,
    precio: 12800000,
    marca: 'RPM Industrial',
    destacado: false,
    tags: ['banco', 'estiraje', 'carroceria', '3 ton', 'reparacion'],
  },
  {
    id: 'lampara-infrarroja-2-paneles',
    codigo: 'LIR-2P',
    categoria: 'lamparas-de-secado-ir',
    nombre: 'Lámpara IR de 2 Paneles',
    descripcion:
      'Lámpara infrarroja para secado rápido de pintura automotriz.',
    imagen:
      '/productos/lamparas-de-secado-ir/lampara-infrarroja-secado-2-paneles-bogota-colombia.jpg',
    gallery: [
      '/productos/lamparas-de-secado-ir/lampara-infrarroja-ir-1w-bogota-colombia.jpg',
      '/productos/lamparas-de-secado-ir/lampara-infrarroja-secado-1-panel-bogota-colombia.jpg',
      '/productos/lamparas-de-secado-ir/lampara-infrarroja-secado-2-paneles-bogota-colombia.jpg',
      '/productos/lamparas-de-secado-ir/lampara-infrarroja-onda-corta-2-paneles-bogota-colombia.jpg',
      '/productos/lamparas-de-secado-ir/lampara-infrarroja-secado-2-paneles-telescopica-bogota-colombia.jpg',
      '/productos/lamparas-de-secado-ir/lampara-infrarroja-secado-3-paneles-bogota-colombia.jpg',
      '/productos/lamparas-de-secado-ir/lampara-infrarroja-secado-6-paneles-bogota-colombia.jpg',
      '/productos/lamparas-de-secado-ir/lampara-infrarroja-fy-3wh-bogota-colombia.jpg',
      '/productos/lamparas-de-secado-ir/lampara-infrarroja-fy-6dh-bogota-colombia.jpg',
    ],
    especificaciones: {
      Paneles: 2,
      Tecnologia: 'Infrarroja',
      Uso: 'Secado',
      Aplicacion: 'Pintura automotriz',
    },
    stock: 7,
    precio: 2100000,
    marca: 'RPM Industrial',
    destacado: true,
    tags: ['lampara', 'ir', 'infrarroja', '2 paneles', 'secado'],
  },
  {
    id: 'pistola-gravedad-hvlp-pro',
    codigo: 'PG-HVLP',
    categoria: 'pistolas-de-gravedad',
    nombre: 'Pistola de Gravedad HVLP PRO',
    descripcion:
      'Pistola profesional para aplicación uniforme de pintura y acabados finos.',
    imagen:
      '/productos/pistolas-de-gravedad/pistola-gravedad-r-21x-prona-bogota-colombia.jpg',
    gallery: [
      '/productos/pistolas-de-gravedad/pistola-gravedad-r-21x-prona-bogota-colombia.jpg',
      '/productos/pistolas-de-gravedad/pistola-gravedad-r-71-prona-bogota-colombia.jpg',
      '/productos/pistolas-de-gravedad/pistola-gravedad-r-77-prona-bogota-colombia.jpg',
      '/productos/pistolas-de-gravedad/pistola-gravedad-r-310-prona-bogota-colombia.jpg',
      '/productos/pistolas-de-gravedad/pistola-gravedad-r-400-prona-bogota-colombia.jpg',
      '/productos/pistolas-de-gravedad/pistola-gravedad-r-410-prona-bogota-colombia.jpg',
      '/productos/pistolas-de-gravedad/pistola-presurizada-r-410-ip-prona-bogota-colombia.jpg',
      '/productos/pistolas-de-gravedad/pistola-gravedad-r-413-prona-bogota-colombia.jpg',
      '/productos/pistolas-de-gravedad/pistola-agitadora-r-413-b-prona-bogota-colombia.jpg',
      '/productos/pistolas-de-gravedad/pistola-gravedad-r-715-prona-bogota-colombia.jpg',
      '/productos/pistolas-de-gravedad/pistola-baja-presion-r-4303-prona-bogota-colombia.jpg',
    ],
    especificaciones: {
      Sistema: 'HVLP',
      Boquilla: '1.4 mm',
      Deposito: '600 ml',
      Aplicacion: 'Acabado fino',
    },
    stock: 10,
    precio: 420000,
    marca: 'RPM Industrial',
    destacado: true,
    tags: ['pistola', 'gravedad', 'hvlp', '1.4 mm', 'pintura'],
  },
]

export function getProductoById(id: string): Producto | undefined {
  return productos.find((producto) => producto.id === id)
}

export function getProductosByCategoria(categoria: string): Producto[] {
  return productos.filter((producto) => producto.categoria === categoria)
}

export function getProductosDestacados(): Producto[] {
  return productos.filter((producto) => producto.destacado)
}

export function buscarProductos(query: string): Producto[] {
  const q = normalizarTexto(query)
  if (!q) return []

  return productos
    .map((producto) => {
      const textoBusqueda = construirTextoBusqueda(producto)
      let score = 0

      if (normalizarTexto(producto.nombre).includes(q)) score += 10
      if (normalizarTexto(producto.categoria).includes(q)) score += 5
      if ((producto.descripcion ? normalizarTexto(producto.descripcion) : '').includes(q)) score += 4
      if (textoBusqueda.includes(q)) score += 3

      const palabras = q.split(' ').filter(Boolean)
      const coincidencias = palabras.filter((p) => textoBusqueda.includes(p)).length
      score += coincidencias * 2

      return { producto, score }
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.producto.nombre.localeCompare(b.producto.nombre))
    .map((item) => item.producto)
}

function construirTextoBusqueda(producto: Producto): string {
  const nombre = normalizarTexto(producto.nombre)
  const descripcion = producto.descripcion ? normalizarTexto(producto.descripcion) : ''
  const categoria = normalizarTexto(producto.categoria)
  const codigo = producto.codigo ? normalizarTexto(producto.codigo) : ''
  const marca = producto.marca ? normalizarTexto(producto.marca) : ''
  const tags = producto.tags?.map(normalizarTexto).join(' ') || ''
  const specs = producto.especificaciones
    ? Object.entries(producto.especificaciones)
        .map(([k, v]) => `${k} ${String(v)}`)
        .join(' ')
    : ''

  return expandirBusqueda(`${nombre} ${descripcion} ${categoria} ${codigo} ${marca} ${tags} ${specs}`)
}

function normalizarTexto(texto: string): string {
  return texto
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, ' ')
}

function expandirBusqueda(texto: string): string {
  return normalizarTexto(texto)
    .replace(/"/g, ' pulgadas ')
    .replace(/\bhp\b/g, ' hp potencia ')
    .replace(/\bpsi\b/g, ' psi presion ')
    .replace(/\bir\b/g, ' infrarroja infrarrojo ir ')
    .replace(/\bhvlp\b/g, ' hvlp gravedad pintura ')
    .replace(/\bg4\b/g, ' g4 filtro eficiencia ')
    .replace(/\bf7\b/g, ' f7 filtro eficiencia ')
    .replace(/\bmm\b/g, ' mm milimetros ')
    .replace(/\bton\b/g, ' ton tonelada toneladas ')
}