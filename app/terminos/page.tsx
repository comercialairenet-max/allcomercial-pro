import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description:
    "Condiciones de uso del sitio web y de los servicios ofrecidos.",
}

export default function TerminosPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 text-zinc-300">
      <h1 className="text-3xl font-bold text-white mb-8">
        Términos y Condiciones
      </h1>

      <p className="mb-6">
        Al acceder y utilizar este sitio web, el usuario acepta cumplir los
        siguientes términos y condiciones.
      </p>

      <h2 className="text-xl font-semibold text-white mt-8 mb-3">
        Uso del sitio
      </h2>

      <p className="mb-6">
        El contenido de este sitio tiene fines informativos y comerciales. El
        usuario se compromete a utilizar el sitio de manera legal y respetuosa.
      </p>

      <h2 className="text-xl font-semibold text-white mt-8 mb-3">
        Propiedad intelectual
      </h2>

      <p className="mb-6">
        Todos los contenidos, imágenes, textos y materiales del sitio están
        protegidos por derechos de propiedad intelectual.
      </p>

      <h2 className="text-xl font-semibold text-white mt-8 mb-3">
        Limitación de responsabilidad
      </h2>

      <p className="mb-6">
        No garantizamos que el sitio esté libre de errores o interrupciones,
        aunque trabajamos continuamente para mantener su funcionamiento.
      </p>

      <h2 className="text-xl font-semibold text-white mt-8 mb-3">
        Modificaciones
      </h2>

      <p className="mb-6">
        Nos reservamos el derecho de actualizar estos términos en cualquier
        momento sin previo aviso.
      </p>

      <p className="mt-10 text-sm text-zinc-500">
        Última actualización: {new Date().getFullYear()}
      </p>
    </main>
  )
}