import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',

  images: {
    unoptimized: true,
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
      {
        source: '/es/blog/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/es/:path*',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

export default nextConfig