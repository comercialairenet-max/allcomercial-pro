import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },

  reactStrictMode: true,

  poweredByHeader: false,

  async redirects() {
    return [
      // URLs antiguas HTML
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/contact.html',
        destination: '/asesoria',
        permanent: true,
      },
      {
        source: '/maquinaria-equipos.html',
        destination: '/catalogo',
        permanent: true,
      },
      {
        source: '/filtracion_industrial.html',
        destination: '/catalogo/filtracion-industrial',
        permanent: true,
      },

      // URLs antiguas /es/ IMPORTANTES
      {
        source: '/es',
        destination: '/',
        permanent: true,
      },
      {
        source: '/es/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/es/catalogo',
        destination: '/catalogo',
        permanent: true,
      },
      {
        source: '/es/catalogo/',
        destination: '/catalogo',
        permanent: true,
      },
      {
        source: '/es/filtracion-industrial',
        destination: '/catalogo/filtracion-industrial',
        permanent: true,
      },
      {
        source: '/es/filtracion-industrial/',
        destination: '/catalogo/filtracion-industrial',
        permanent: true,
      },
      {
        source: '/es/pistolas-de-gravedad',
        destination: '/catalogo/pistolas-de-gravedad',
        permanent: true,
      },
      {
        source: '/es/pistolas-de-gravedad/',
        destination: '/catalogo/pistolas-de-gravedad',
        permanent: true,
      },
      {
        source: '/es/sistemas-de-aire-comprimido',
        destination: '/catalogo/sistemas-de-aire-comprimido',
        permanent: true,
      },
      {
        source: '/es/sistemas-de-aire-comprimido/',
        destination: '/catalogo/sistemas-de-aire-comprimido',
        permanent: true,
      },
      {
        source: '/es/equipos-para-lavaderos',
        destination: '/catalogo/equipos-para-lavaderos',
        permanent: true,
      },
      {
        source: '/es/equipos-para-lavaderos/',
        destination: '/catalogo/equipos-para-lavaderos',
        permanent: true,
      },
      {
        source: '/es/sobre-nosotros',
        destination: '/nosotros',
        permanent: true,
      },
      {
        source: '/es/sobre-nosotros/',
        destination: '/nosotros',
        permanent: true,
      },
      {
        source: '/es/contacto-2',
        destination: '/contacto',
        permanent: true,
      },
      {
        source: '/es/contacto-2/',
        destination: '/contacto',
        permanent: true,
      },

      // Solo deja estas dos si de verdad existe /aviso-legal
      {
        source: '/es/aviso-legal',
        destination: '/aviso-legal',
        permanent: true,
      },
      {
        source: '/es/aviso-legal/',
        destination: '/aviso-legal',
        permanent: true,
      },

      // Feed viejo
      {
        source: '/es/feed',
        destination: '/',
        permanent: true,
      },
      {
        source: '/es/feed/',
        destination: '/',
        permanent: true,
      },

      // Blog / feeds / tags / categorías viejas que ya no deben existir
      {
        source: '/es/blog/:path*',
        destination: '/',
        permanent: true,
      },

      // Fallback general de /es/
      {
        source: '/es/:path*',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

export default nextConfig