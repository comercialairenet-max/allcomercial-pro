// app/components/WhatsAppQuote.tsx
export function WhatsAppQuote({ product }) {
  const message = encodeURIComponent(
    `Hola, me interesa cotizar:\n` +
    `Producto: ${product.name}\n` +
    `Código: ${product.code}\n` +
    `Cantidad: [especificar]\n` +
    `Consulta adicional: [tu consulta]`
  )
  
  return (
    <a
      href={`https://wa.me/521234567890?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition"
    >
      Cotizar por WhatsApp
    </a>
  )
}