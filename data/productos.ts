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
    id: 'media-filtrante-g1',
    codigo: 'FIL-G1-MF',
    categoria: 'filtracion-industrial',
    nombre: 'Media Filtrante G1 Fibra Sintética',
    descripcion:
      'Media filtrante para prefiltro en sistemas HVAC y procesos industriales con retención inicial de partículas.',
    imagen:
      '/productos/filtracion-industrial/media-filtrante-g1-fibra-sintetica-prefiltro-bogota-colombia.jpeg',
    especificaciones: {
      Eficiencia: 'G1',
      Material: 'Fibra sintética',
      Aplicacion: 'Prefiltro industrial',
    },
    stock: 15,
    precio: 65000,
    marca: 'RPM Industrial',
    destacado: false,
    tags: ['media filtrante', 'g1', 'prefiltro', 'fibra sintetica', 'hvac'],
  },
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
    id: 'filtro-paint-stop-fibra-vidrio',
    codigo: 'FIL-PS-FV',
    categoria: 'filtracion-industrial',
    nombre: 'Filtro Paint Stop Fibra de Vidrio',
    descripcion:
      'Filtro para cabinas de pintura que captura neblina y partículas de pintura en procesos de extracción.',
    imagen:
      '/productos/filtracion-industrial/filtro-paint-stop-fibra-vidrio-cabina-pintura-bogota-colombia.jpeg',
    especificaciones: {
      Material: 'Fibra de vidrio',
      Uso: 'Cabina de pintura',
      Aplicacion: 'Captura de overspray',
    },
    stock: 10,
    precio: 120000,
    marca: 'RPM Industrial',
    destacado: true,
    tags: ['paint stop', 'fibra de vidrio', 'cabina de pintura', 'overspray'],
  },
  {
    id: 'filtro-techo-f5-cabina-pintura',
    codigo: 'FIL-F5-TECHO',
    categoria: 'filtracion-industrial',
    nombre: 'Filtro Techo F5 para Cabina de Pintura',
    descripcion:
      'Filtro de suministro de aire para techo de cabinas de pintura con alta uniformidad de flujo.',
    imagen:
      '/productos/filtracion-industrial/filtro-techo-f5-cabina-pintura-bogota-colombia.jpeg',
    especificaciones: {
      Eficiencia: 'F5',
      Uso: 'Suministro de aire',
      Aplicacion: 'Cabinas de pintura',
    },
    stock: 8,
    precio: 145000,
    marca: 'RPM Industrial',
    destacado: false,
    tags: ['filtro techo', 'f5', 'cabina de pintura', 'suministro de aire'],
  },
  {
    id: 'filtro-carbon-activado-industrial',
    codigo: 'FIL-CA-IND',
    categoria: 'filtracion-industrial',
    nombre: 'Filtro Carbón Activado Industrial',
    descripcion:
      'Filtro para control de olores y compuestos volátiles en ambientes industriales y HVAC.',
    imagen:
      '/productos/filtracion-industrial/filtro-carbon-activado-control-olores-industrial-bogota-colombia.jpeg',
    especificaciones: {
      Material: 'Carbón activado',
      Uso: 'Control de olores',
      Aplicacion: 'Industrial y HVAC',
    },
    stock: 6,
    precio: 185000,
    marca: 'RPM Industrial',
    destacado: true,
    tags: ['carbon activado', 'control de olores', 'hvac', 'industrial'],
  },
  {
    id: 'filtro-carton-plegado-cabina-pintura',
    codigo: 'FIL-CP-CP',
    categoria: 'filtracion-industrial',
    nombre: 'Filtro Cartón Plegado para Cabina de Pintura',
    descripcion:
      'Filtro de cartón plegado para extracción de aire y retención de partículas en cabinas de pintura.',
    imagen:
      '/productos/filtracion-industrial/filtro-carton-plegado-cabina-pintura-bogota-colombia.jpeg',
    especificaciones: {
      Tipo: 'Cartón plegado',
      Uso: 'Extracción',
      Aplicacion: 'Cabina de pintura',
    },
    stock: 10,
    precio: 98000,
    marca: 'RPM Industrial',
    destacado: false,
    tags: ['carton plegado', 'cabina pintura', 'extraccion', 'filtro'],
  },
  {
    id: 'manta-filtrante-lavable-g4-verde',
    codigo: 'FIL-G4-LAV',
    categoria: 'filtracion-industrial',
    nombre: 'Manta Filtrante Lavable G4 Verde',
    descripcion:
      'Manta lavable G4 para prefiltrado y ventilación industrial con buena durabilidad.',
    imagen:
      '/productos/filtracion-industrial/manta-filtrante-lavable-g4-verde-hvac-bogota-colombia.jpeg',
    especificaciones: {
      Eficiencia: 'G4',
      Caracteristica: 'Lavable',
      Color: 'Verde',
    },
    stock: 9,
    precio: 110000,
    marca: 'RPM Industrial',
    destacado: false,
    tags: ['manta lavable', 'g4', 'verde', 'hvac'],
  },
  {
    id: 'manta-filtrante-lavable-g2-azul',
    codigo: 'FIL-G2-LAV',
    categoria: 'filtracion-industrial',
    nombre: 'Manta Filtrante Lavable G2 Azul',
    descripcion:
      'Manta filtrante lavable G2 para prefiltro y aplicaciones HVAC de baja restricción.',
    imagen:
      '/productos/filtracion-industrial/manta-filtrante-lavable-g2-azul-hvac-bogota-colombia.jpeg',
    especificaciones: {
      Eficiencia: 'G2',
      Caracteristica: 'Lavable',
      Color: 'Azul',
    },
    stock: 9,
    precio: 89000,
    marca: 'RPM Industrial',
    destacado: false,
    tags: ['manta lavable', 'g2', 'azul', 'prefiltro', 'hvac'],
  },
  {
    id: 'filtro-plegado-carbon-activado',
    codigo: 'FIL-PL-CA',
    categoria: 'filtracion-industrial',
    nombre: 'Filtro Plegado Carbón Activado HVAC',
    descripcion:
      'Filtro plegado con carbón activado para control de olores y recirculación de aire.',
    imagen:
      '/productos/filtracion-industrial/filtro-plegado-carbon-activado-hvac-bogota-colombia.jpeg',
    especificaciones: {
      Tipo: 'Plegado',
      Material: 'Carbón activado',
      Aplicacion: 'HVAC',
    },
    stock: 6,
    precio: 175000,
    marca: 'RPM Industrial',
    destacado: false,
    tags: ['filtro plegado', 'carbon activado', 'hvac', 'olores'],
  },
  {
    id: 'filtro-lavable-fibra-poliester',
    codigo: 'FIL-LAV-POL',
    categoria: 'filtracion-industrial',
    nombre: 'Filtro Lavable Fibra Poliéster HVAC',
    descripcion:
      'Filtro lavable de fibra poliéster para sistemas de ventilación y aire acondicionado.',
    imagen:
      '/productos/filtracion-industrial/filtro-lavable-fibra-poliester-hvac-bogota-colombia.jpeg',
    especificaciones: {
      Material: 'Fibra poliéster',
      Caracteristica: 'Lavable',
      Aplicacion: 'HVAC',
    },
    stock: 7,
    precio: 99000,
    marca: 'RPM Industrial',
    destacado: false,
    tags: ['filtro lavable', 'poliester', 'hvac', 'ventilacion'],
  },
  {
    id: 'filtro-plisado-merv8',
    codigo: 'FIL-M8-PL',
    categoria: 'filtracion-industrial',
    nombre: 'Filtro Plisado MERV 8',
    descripcion:
      'Filtro plisado para sistemas de ventilación y manejo de aire con eficiencia MERV 8.',
    imagen:
      '/productos/filtracion-industrial/filtro-plisado-merv8-hvac-bogota-colombia.jpeg',
    especificaciones: {
      Eficiencia: 'MERV 8',
      Tipo: 'Plisado',
      Aplicacion: 'HVAC',
    },
    stock: 10,
    precio: 105000,
    marca: 'RPM Industrial',
    destacado: false,
    tags: ['plisado', 'merv8', 'hvac', 'filtro aire'],
  },
  {
    id: 'mini-pleat-merv11',
    codigo: 'FIL-MP-M11',
    categoria: 'filtracion-industrial',
    nombre: 'Mini Pleat MERV 11',
    descripcion:
      'Filtro mini pleat MERV 11 para mejor calidad de aire en aplicaciones HVAC e industriales.',
    imagen:
      '/productos/filtracion-industrial/mini-pleat-merv11-calidad-aire-bogota-colombia.jpeg',
    especificaciones: {
      Eficiencia: 'MERV 11',
      Tipo: 'Mini Pleat',
      Aplicacion: 'Calidad de aire',
    },
    stock: 5,
    precio: 210000,
    marca: 'RPM Industrial',
    destacado: false,
    tags: ['mini pleat', 'merv11', 'calidad de aire', 'hvac'],
  },
  {
    id: 'mini-pleat-merv14',
    codigo: 'FIL-MP-M14',
    categoria: 'filtracion-industrial',
    nombre: 'Mini Pleat MERV 14',
    descripcion:
      'Filtro mini pleat de alta eficiencia para sistemas de aire de mayor exigencia.',
    imagen:
      '/productos/filtracion-industrial/mini-pleat-merv14-alta-eficiencia-bogota-colombia.jpeg',
    especificaciones: {
      Eficiencia: 'MERV 14',
      Tipo: 'Mini Pleat',
      Aplicacion: 'Alta eficiencia',
    },
    stock: 5,
    precio: 245000,
    marca: 'RPM Industrial',
    destacado: true,
    tags: ['mini pleat', 'merv14', 'alta eficiencia', 'hvac'],
  },
  {
    id: 'mini-pleat-merv15',
    codigo: 'FIL-MP-M15',
    categoria: 'filtracion-industrial',
    nombre: 'Mini Pleat MERV 15',
    descripcion:
      'Filtro mini pleat MERV 15 para aplicaciones que exigen filtración de alta eficiencia.',
    imagen:
      '/productos/filtracion-industrial/mini-pleat-merv15-alta-eficiencia-bogota-colombia.jpeg',
    especificaciones: {
      Eficiencia: 'MERV 15',
      Tipo: 'Mini Pleat',
      Aplicacion: 'Alta eficiencia',
    },
    stock: 4,
    precio: 280000,
    marca: 'RPM Industrial',
    destacado: true,
    tags: ['mini pleat', 'merv15', 'alta eficiencia', 'filtracion avanzada'],
  },
  {
    id: 'filtro-pocket-f6',
    codigo: 'FIL-PKT-F6',
    categoria: 'filtracion-industrial',
    nombre: 'Filtro Pocket F6',
    descripcion:
      'Filtro de bolsa tipo pocket F6 para sistemas HVAC y filtración de aire industrial.',
    imagen:
      '/productos/filtracion-industrial/filtro-pocket-f6-hvac-bogota-colombia.jpeg',
    especificaciones: {
      Eficiencia: 'F6',
      Tipo: 'Pocket',
      Aplicacion: 'HVAC',
    },
    stock: 8,
    precio: 165000,
    marca: 'RPM Industrial',
    destacado: false,
    tags: ['pocket', 'f6', 'filtro bolsa', 'hvac'],
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
    id: 'filtro-pocket-f8',
    codigo: 'FIL-PKT-F8',
    categoria: 'filtracion-industrial',
    nombre: 'Filtro Pocket F8',
    descripcion:
      'Filtro pocket F8 para aplicaciones de aire con exigencia superior de eficiencia.',
    imagen:
      '/productos/filtracion-industrial/filtro-pocket-f8-hvac-bogota-colombia.jpeg',
    especificaciones: {
      Eficiencia: 'F8',
      Tipo: 'Pocket',
      Aplicacion: 'HVAC',
    },
    stock: 6,
    precio: 210000,
    marca: 'RPM Industrial',
    destacado: false,
    tags: ['pocket', 'f8', 'hvac', 'filtro bolsa'],
  },
  {
    id: 'filtro-v-bank-merv14',
    codigo: 'FIL-VB-M14',
    categoria: 'filtracion-industrial',
    nombre: 'Filtro V-Bank MERV 14',
    descripcion:
      'Filtro V-Bank de alta capacidad para calidad de aire y sistemas HVAC de alto caudal.',
    imagen:
      '/productos/filtracion-industrial/filtro-v-bank-merv14-hvac-bogota-colombia.jpeg',
    especificaciones: {
      Eficiencia: 'MERV 14',
      Tipo: 'V-Bank',
      Aplicacion: 'HVAC alto caudal',
    },
    stock: 4,
    precio: 320000,
    marca: 'RPM Industrial',
    destacado: true,
    tags: ['v-bank', 'merv14', 'alta capacidad', 'hvac'],
  },
  {
    id: 'filtro-cartucho-colector-polvo',
    codigo: 'FIL-CCP',
    categoria: 'filtracion-industrial',
    nombre: 'Filtro Cartucho Colector de Polvo',
    descripcion:
      'Cartucho para sistemas dust collector y control de material particulado en industria.',
    imagen:
      '/productos/filtracion-industrial/filtro-cartucho-colector-polvo-bogota-colombia.jpeg',
    especificaciones: {
      Tipo: 'Cartucho',
      Uso: 'Control de polvo',
      Aplicacion: 'Dust collector',
    },
    stock: 5,
    precio: 260000,
    marca: 'RPM Industrial',
    destacado: false,
    tags: ['cartucho', 'colector de polvo', 'dust collector', 'industrial'],
  },
  {
    id: 'mini-pleat-hepa-h13',
    codigo: 'FIL-HEPA-H13-MP',
    categoria: 'filtracion-industrial',
    nombre: 'Mini Pleat HEPA H13',
    descripcion:
      'Filtro HEPA H13 tipo mini pleat para aplicaciones de alta pureza y control fino de partículas.',
    imagen:
      '/productos/filtracion-industrial/mini-pleat-hepa-h13-bogota-colombia.jpeg',
    especificaciones: {
      Eficiencia: 'H13',
      Tipo: 'Mini Pleat HEPA',
      Aplicacion: 'Alta eficiencia',
    },
    stock: 4,
    precio: 390000,
    marca: 'RPM Industrial',
    destacado: true,
    tags: ['hepa', 'h13', 'mini pleat', 'alta eficiencia'],
  },
  {
    id: 'filtro-hepa-box-header-h13',
    codigo: 'FIL-HEPA-BH13',
    categoria: 'filtracion-industrial',
    nombre: 'Filtro HEPA Box Header H13',
    descripcion:
      'Filtro HEPA box header para aplicaciones críticas de aire limpio y alta eficiencia.',
    imagen:
      '/productos/filtracion-industrial/filtro-hepa-box-header-h13-bogota-colombia.jpeg',
    especificaciones: {
      Eficiencia: 'H13',
      Tipo: 'Box Header',
      Aplicacion: 'Aire limpio',
    },
    stock: 3,
    precio: 450000,
    marca: 'RPM Industrial',
    destacado: true,
    tags: ['hepa', 'box header', 'h13', 'aire limpio'],
  },
  {
    id: 'filtro-andreae-azul',
    codigo: 'FIL-AND-AZ',
    categoria: 'filtracion-industrial',
    nombre: 'Filtro Andreae Azul para Cabina de Pintura',
    descripcion:
      'Filtro Andreae azul de alta eficiencia para retención de partículas de pintura en cabinas.',
    imagen:
      '/productos/filtracion-industrial/filtro-andreae-azul-cabina-pintura-bogota-colombia.jpeg',
    especificaciones: {
      Tipo: 'Andreae',
      Color: 'Azul',
      Aplicacion: 'Cabina de pintura',
    },
    stock: 5,
    precio: 135000,
    marca: 'RPM Industrial',
    destacado: false,
    tags: ['andreae', 'cabina de pintura', 'filtro azul', 'pintura'],
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