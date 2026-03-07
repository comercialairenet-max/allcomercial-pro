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
      '/catalogo/filtracion-industrial/pl148425168-manta-filtrante-aire-fibra-sintetica-g4-pintura-hvac-bogota-colombia-jpeg.jpg',
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
      '/catalogo/filtracion-industrial/pl148425182-filtro-pocket-bolsillo-f7-hvac-industria-bogota-colombia-jpeg.jpg',
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
      '/catalogo/ventilacion-industrial/pl148425200-extractor-axial-metalico-18-pulgadas-bogota-colombia-jpeg.jpg',
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
      '/catalogo/ventilacion-industrial/pl148425237-turbina-tipo-siroco-1hp-alta-presion-bogota-colombia1-jpeg.jpg',
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
      '/catalogo/sistemas-de-aire-comprimido/pl148425244-compresor-aire-bogota-colombia-jpeg.jpg',
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
      '/catalogo/sistemas-de-aire-comprimido/pl148425242-pulmon-aire-comprimido-bogota-colombia-jpeg.jpg',
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
      '/catalogo/cabinas-de-pintura/Cabina_Pintura_Automotriz_Sistema_Extraccion_Cortinas_Poliuretano_Bogota_Colombia.jpg',
    gallery: [
      '/catalogo/cabinas-de-pintura/Cabina_Pintura_Automotriz_Paneles_Instalacion_Montaje_Bogota_Colombia.jpg',
      '/catalogo/cabinas-de-pintura/Cabina_Pintura_Automotriz_Sistema_Extraccion_Cortinas_Poliuretano_Bogota_Colombia.jpg',
      '/catalogo/cabinas-de-pintura/Fabricacion_Instalacion_Montaje_Cabina_Pintura_Automotriz_Bogota_Colombia.jpg',
      '/catalogo/cabinas-de-pintura/Fabricacion_Instalacion_Montaje_Cabinas_Poliur.jpg'
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
      '/catalogo/equipos-para-lavaderos/equipos-para-lavaderos-1-1-jpeg.jpg',
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
      '/catalogo/equipos-para-reparacion-de-carrocerias/pl148425272-maquina-desabolladora-multifuncional-fy-6000-bogota-colombia-jpg.jpg',
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
      '/catalogo/lamparas-de-secado-ir/tk-2a.jpg',
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
      '/catalogo/pistolas-de-gravedad/PL148425261_Pistola_de_Gravedad_Universal_R-21X_Prona_Bogota_Colombia.jpg',
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