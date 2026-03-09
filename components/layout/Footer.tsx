import Link from "next/link";
import Image from "next/image";

export default function Footer() {

  const year = new Date().getFullYear();

  return (
    <footer className="bg-neutral-950 text-neutral-300 border-t border-neutral-800">

      <div className="mx-auto max-w-7xl px-6 py-12">

        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">

          {/* LOGO + DESCRIPCION */}

          <div>

            <div className="flex items-center gap-3">

              <Image
                src="/logo-airenet.png"
                alt="Comercializadora Airenet Industrial"
                width={140}
                height={40}
              />

            </div>

            <p className="mt-4 text-sm text-neutral-400">

              Comercialización de equipos industriales,
              ventilación, filtración, aire comprimido y
              soluciones para procesos industriales.

            </p>

          </div>

          {/* NAVEGACION */}

          <div>

            <h3 className="text-white font-semibold mb-4">
              Navegación
            </h3>

            <ul className="space-y-2 text-sm">

              <li>
                <Link href="/" className="hover:text-orange-400">
                  Inicio
                </Link>
              </li>

              <li>
                <Link href="/catalogo" className="hover:text-orange-400">
                  Catálogo
                </Link>
              </li>

              <li>
                <Link href="/asesoria" className="hover:text-orange-400">
                  Asesoría técnica
                </Link>
              </li>

            </ul>

          </div>

          {/* CATEGORIAS */}

          <div>

            <h3 className="text-white font-semibold mb-4">
              Categorías
            </h3>

            <ul className="space-y-2 text-sm">

              <li>
                <Link
                  href="/catalogo/filtracion-industrial"
                  className="hover:text-orange-400"
                >
                  Filtración industrial
                </Link>
              </li>

              <li>
                <Link
                  href="/catalogo/ventilacion-industrial"
                  className="hover:text-orange-400"
                >
                  Ventilación industrial
                </Link>
              </li>

              <li>
                <Link
                  href="/catalogo/sistemas-de-aire-comprimido"
                  className="hover:text-orange-400"
                >
                  Aire comprimido
                </Link>
              </li>

              <li>
                <Link
                  href="/catalogo/cabinas-de-pintura"
                  className="hover:text-orange-400"
                >
                  Cabinas de pintura
                </Link>
              </li>

            </ul>

          </div>

          {/* CONTACTO */}

          <div>

            <h3 className="text-white font-semibold mb-4">
              Contacto
            </h3>

            <ul className="space-y-2 text-sm">

              <li>
                WhatsApp:
                <a
                  href="https://wa.me/573053644307"
                  target="_blank"
                  className="ml-2 hover:text-orange-400"
                >
                  +57 305 364 4307
                </a>
              </li>

              <li>
                Colombia
              </li>

              <li>
                Soporte técnico industrial
              </li>

            </ul>

          </div>

        </div>

        {/* LINEA */}

        <div className="mt-10 border-t border-neutral-800 pt-6">

          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

            {/* COPYRIGHT */}

            <p className="text-sm text-neutral-500">

              © {year} Comercializadora Airenet Industrial.
              Todos los derechos reservados.

            </p>

            {/* LINKS LEGALES */}

            <div className="flex flex-wrap gap-4 text-sm">

              <Link
                href="/privacidad"
                className="hover:text-orange-400"
              >
                Política de Privacidad
              </Link>

              <Link
                href="/cookies"
                className="hover:text-orange-400"
              >
                Política de Cookies
              </Link>

              <Link
                href="/terminos"
                className="hover:text-orange-400"
              >
                Términos y Condiciones
              </Link>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}