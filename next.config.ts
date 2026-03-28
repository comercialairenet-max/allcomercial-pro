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
    ]
  },
}

export default nextConfig