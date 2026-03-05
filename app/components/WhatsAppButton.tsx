'use client'

interface Props {
  producto: string
  id: string
}

export function WhatsAppButton({ producto, id }: Props) {
  const mensaje = encodeURIComponent(
    `Hola, me interesa cotizar el producto:\n` +
    `*${producto}*\n` +
    `Código: ${id}\n` +
    `Por favor, envíenme ficha técnica y disponibilidad.`
  )

  return (
    <a
      href={`https://wa.me/573053644307?text=${mensaje}`}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-xl transition-all transform hover:scale-105"
    >
      <span className="mr-2">📱</span>
      Solicitar cotización por WhatsApp
    </a>
  )
}