import Link from "next/link";
import Image from "next/image";
import { SITE, getEmailUrl, getPhoneUrl, getWhatsappUrl } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-800 bg-neutral-950 text-neutral-300">
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
              Comercialización de equipos industriales, ventilación,
              filtración, aire comprimido y soluciones para procesos
              industriales.
            </p>
          </div>

          {/* NAVEGACION */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Navegación</h3>

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
            <h3 className="mb-4 font-semibold text-white">Categorías</h3>

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
            <h3 className="mb-4 font-semibold text-white">Contacto</h3>

            <ul className="space-y-3 text-sm">
              <li>
                <span className="text-neutral-400">WhatsApp:</span>
                <a
                  href={getWhatsappUrl(SITE.whatsapp.salesMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 hover:text-orange-400"
                >
                  {SITE.whatsapp.phoneDisplay}
                </a>
              </li>

              <li>
                <span className="text-neutral-400">Teléfono:</span>
                <a
                  href={getPhoneUrl()}
                  className="ml-2 hover:text-orange-400"
                >
                  {SITE.company.phoneDisplay}
                </a>
              </li>

              <li>
                <span className="text-neutral-400">Correo:</span>
                <a
                  href={getEmailUrl()}
                  className="ml-2 break-all hover:text-orange-400"
                >
                  {SITE.company.email}
                </a>
              </li>

              <li>Bogotá, Colombia</li>
              <li>Soporte técnico industrial</li>
            </ul>
          </div>
        </div>

        {/* LINEA */}
        <div className="mt-10 border-t border-neutral-800 pt-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            {/* COPYRIGHT */}
            <p className="text-sm text-neutral-500">
              © {year} Comercializadora Airenet Industrial. Todos los derechos
              reservados.
            </p>

            {/* LINKS LEGALES */}
            <div className="flex flex-wrap gap-4 text-sm">
              <Link href="/privacidad" className="hover:text-orange-400">
                Política de Privacidad
              </Link>

              <Link href="/cookies" className="hover:text-orange-400">
                Política de Cookies
              </Link>

              <Link href="/terminos" className="hover:text-orange-400">
                Términos y Condiciones
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}