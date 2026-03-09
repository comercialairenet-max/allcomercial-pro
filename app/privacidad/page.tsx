import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Política de privacidad y protección de datos personales conforme a la legislación colombiana.",
}

export default function PrivacidadPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 text-zinc-300">
      <h1 className="text-3xl font-bold text-white mb-8">
        Política de Privacidad
      </h1>

      <p className="mb-6">
        En nuestro sitio web valoramos y respetamos la privacidad de nuestros
        usuarios. Esta política describe cómo recopilamos, utilizamos y
        protegemos la información personal de quienes interactúan con nuestro
        sitio.
      </p>

      <h2 className="text-xl font-semibold text-white mt-8 mb-3">
        Información que recopilamos
      </h2>

      <p className="mb-6">
        Podemos recopilar información como nombre, número telefónico, correo
        electrónico o mensajes enviados a través de nuestros canales de
        contacto, incluyendo WhatsApp.
      </p>

      <h2 className="text-xl font-semibold text-white mt-8 mb-3">
        Uso de la información
      </h2>

      <p className="mb-6">
        La información se utiliza exclusivamente para responder consultas,
        enviar cotizaciones, brindar soporte técnico o mejorar nuestros
        servicios.
      </p>

      <h2 className="text-xl font-semibold text-white mt-8 mb-3">
        Protección de datos
      </h2>

      <p className="mb-6">
        Implementamos medidas de seguridad razonables para proteger la
        información personal contra accesos no autorizados o uso indebido.
      </p>

      <h2 className="text-xl font-semibold text-white mt-8 mb-3">
        Derechos del usuario
      </h2>

      <p className="mb-6">
        Los usuarios pueden solicitar actualización, corrección o eliminación de
        sus datos personales contactándonos a través de nuestros canales de
        comunicación.
      </p>

      <p className="mt-10 text-sm text-zinc-500">
        Última actualización: {new Date().getFullYear()}
      </p>
    </main>
  )
}