export function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-blue-600">All Comercial</span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="/" className="text-gray-700 hover:text-blue-600">Inicio</a>
            <a href="#servicios" className="text-gray-700 hover:text-blue-600">Servicios</a>
            <a href="#contacto" className="text-gray-700 hover:text-blue-600">Contacto</a>
          </div>
        </div>
      </div>
    </nav>
  )
}