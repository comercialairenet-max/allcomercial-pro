export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="text-center text-white">
        <h1 className="text-5xl font-bold mb-4">All Comercial Online</h1>
        <p className="text-xl">Transformando negocios con tecnología IA</p>
        <a 
          href="#contacto" 
          className="inline-block mt-8 px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-opacity-90 transition"
        >
          Comenzamos
        </a>
      </div>
    </div>
  )
}