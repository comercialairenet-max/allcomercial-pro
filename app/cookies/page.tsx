import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Política de Cookies",
  description:
    "Información sobre el uso de cookies y tecnologías similares en nuestro sitio web.",
}

export default function CookiesPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 text-zinc-300">
      <h1 className="text-3xl font-bold text-white mb-8">
        Política de Cookies
      </h1>

      <p className="mb-6">
        Este sitio web utiliza cookies y tecnologías similares para mejorar la
        experiencia del usuario, analizar el tráfico del sitio y optimizar el
        funcionamiento de la plataforma.
      </p>

      <h2 className="text-xl font-semibold text-white mt-8 mb-3">
        ¿Qué son las cookies?
      </h2>

      <p className="mb-6">
        Las cookies son pequeños archivos de texto que se almacenan en el
        dispositivo del usuario cuando visita un sitio web.
      </p>

      <h2 className="text-xl font-semibold text-white mt-8 mb-3">
        Tipos de cookies que utilizamos
      </h2>

      <ul className="list-disc pl-6 mb-6">
        <li>Cookies necesarias para el funcionamiento del sitio</li>
        <li>Cookies de análisis para mejorar el rendimiento</li>
        <li>Cookies de terceros en servicios integrados</li>
      </ul>

      <h2 className="text-xl font-semibold text-white mt-8 mb-3">
        Gestión de cookies
      </h2>

      <p className="mb-6">
        Los usuarios pueden configurar su navegador para bloquear o eliminar
        cookies en cualquier momento.
      </p>

      <p className="mt-10 text-sm text-zinc-500">
        Última actualización: {new Date().getFullYear()}
      </p>
    </main>
  )
}