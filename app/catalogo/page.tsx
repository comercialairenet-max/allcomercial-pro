import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  FolderKanban,
  Layers3,
  LibraryBig,
  MessageCircle,
  ShieldCheck,
  Wrench,
  CheckCircle2,
  Factory,
  Search,
  Boxes,
} from "lucide-react";

import {
  getCategoriasConProductos,
  getProductosDestacados,
} from "@/data/productos";
import { soluciones } from "@/data/soluciones";
import { SITE, getWhatsappUrl } from "@/lib/site";
import BuscadorProductos from "@/components/catalogo/BuscadorProductos";

export const metadata: Metadata = {
  title:
    "Catálogo industrial | Equipos de ventilación, filtración, aire comprimido y pintura",
  description:
    "Catálogo técnico industrial con categorías, productos destacados y buscador por nombre, código o aplicación. Consulta equipos de ventilación, filtración, aire comprimido y pintura en Colombia.",
  alternates: {
    canonical: "/catalogo",
  },
  openGraph: {
    title:
      "Catálogo industrial | Equipos de ventilación, filtración, aire comprimido y pintura",
    description:
      "Consulta el catálogo técnico industrial con categorías, referencias y productos destacados para aplicaciones de ventilación, filtración, aire comprimido y pintura.",
    url: "/catalogo",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Catálogo industrial | Equipos de ventilación, filtración, aire comprimido y pintura",
    description:
      "Biblioteca técnica del portafolio industrial con categorías, referencias y buscador centralizado.",
  },
  keywords: [
    "catálogo industrial",
    "equipos industriales",
    "ventilación industrial",
    "filtración industrial",
    "aire comprimido",
    "pintura industrial",
    "extractores industriales",
    "compresores industriales",
    "cabinas de pintura",
    "pistolas de gravedad",
    "catálogo técnico industrial Colombia",
  ],
};

export default function CatalogoPage() {
  const categorias = getCategoriasConProductos();
  const destacados = getProductosDestacados().slice(0, 6);

  const whatsappGeneralHref = getWhatsappUrl(
    "Hola, quiero ayuda para identificar una referencia dentro del catálogo técnico."
  );

  const whatsappCategoriasHref = getWhatsappUrl(
    "Hola, quiero orientación sobre una categoría o línea del catálogo."
  );

  const whatsappReferenciaHref = getWhatsappUrl(
    "Hola, quiero validar una referencia o código del catálogo."
  );

  const whatsappCotizacionHref = getWhatsappUrl(
    "Hola, quiero cotizar una referencia del catálogo."
  );

  const heroBullets = [
    {
      label: "Búsqueda por nombre, código o categoría",
      href: "/catalogo",
      external: false,
    },
    {
      label: "Acceso técnico a referencias",
      href: whatsappReferenciaHref,
      external: true,
    },
    {
      label: "Conectado a soluciones por aplicación",
      href: "/soluciones",
      external: false,
    },
    {
      label: "Ruta directa a consulta comercial",
      href: whatsappGeneralHref,
      external: true,
    },
  ];

  const categoriasSeo = [
    {
      titulo: "Ventilación industrial",
      descripcion:
        "Extractores, ventiladores y soluciones para renovación y extracción de aire en procesos industriales.",
      href: "/catalogo/ventilacion-industrial",
      icon: Factory,
    },
    {
      titulo: "Filtración industrial",
      descripcion:
        "Sistemas y componentes para mejorar calidad del aire, retención de partículas y procesos de filtración técnica.",
      href: "/catalogo/filtracion-industrial",
      icon: Layers3,
    },
    {
      titulo: "Aire comprimido",
      descripcion:
        "Líneas y equipos para aplicaciones industriales que requieren presión constante y rendimiento operativo.",
      href: "/catalogo/sistemas-de-aire-comprimido",
      icon: Boxes,
    },
    {
      titulo: "Pintura industrial",
      descripcion:
        "Equipos y referencias para cabinas de pintura, acabados técnicos y aplicación industrial.",
      href: "/catalogo/pistolas-de-gravedad",
      icon: Wrench,
    },
  ];

  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="relative bg-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-0 top-0 h-[560px] w-[54%] bg-[linear-gradient(135deg,#093A7A_0%,#0E56B5_58%,#19B5F1_100%)]" />
          <div className="absolute right-[8%] top-[70px] h-[360px] w-[360px] rounded-full bg-white/8 blur-3xl" />
          <div className="absolute left-0 top-0 h-full w-full bg-[linear-gradient(to_right,white_0%,white_46%,transparent_46%,transparent_100%)]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pt-16 md:px-8 lg:pt-24">
          <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center rounded-full border border-[#BFE8FB] bg-[#EAF6FE] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#0E56B5]">
                Catálogo técnico industrial
              </div>

              <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-950 md:text-5xl xl:text-6xl">
                Catálogo industrial con categorías, referencias y productos destacados
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                Esta sección reúne las categorías y referencias del portafolio
                industrial en una lógica más técnica. Si ya conoces la línea, el
                código o la categoría, aquí puedes avanzar más rápido hacia la
                información, la validación técnica o la cotización.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={whatsappGeneralHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl bg-[#25D366] px-6 py-4 text-base font-semibold text-white shadow-lg shadow-[#25D366]/30 transition hover:-translate-y-0.5 hover:bg-[#1EBE5D]"
                >
                  Hablar por WhatsApp
                  <MessageCircle className="ml-2 h-5 w-5" />
                </a>

                <Link
                  href="/soluciones"
                  className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-6 py-4 text-base font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
                >
                  Empezar por soluciones
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {heroBullets.map((item) =>
                  item.external ? (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm transition hover:-translate-y-0.5 hover:border-[#BFE8FB] hover:bg-[#F8FAFC]"
                    >
                      <ShieldCheck className="h-5 w-5 flex-none text-[#19B5F1]" />
                      <span className="text-sm font-medium text-slate-700">
                        {item.label}
                      </span>
                    </a>
                  ) : (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm transition hover:-translate-y-0.5 hover:border-[#BFE8FB] hover:bg-[#F8FAFC]"
                    >
                      <ShieldCheck className="h-5 w-5 flex-none text-[#19B5F1]" />
                      <span className="text-sm font-medium text-slate-700">
                        {item.label}
                      </span>
                    </Link>
                  )
                )}
              </div>
            </div>

            <div className="relative">
              <div className="ml-auto max-w-[700px] overflow-hidden rounded-[34px] border border-white/10 bg-white shadow-2xl shadow-slate-300/40">
                <div className="grid min-h-[560px] lg:grid-cols-[1fr_0.92fr]">
                  <div className="flex flex-col justify-between bg-[#F8FAFC] p-8 md:p-10">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0E56B5]">
                        Estructura del catálogo
                      </p>
                      <h2 className="mt-4 text-3xl font-black leading-tight text-slate-950">
                        Una base técnica más clara y mejor organizada
                      </h2>
                      <p className="mt-4 text-sm leading-7 text-slate-600">
                        El catálogo funciona como biblioteca de consulta para
                        quienes ya buscan una categoría, una referencia o una
                        línea específica del portafolio.
                      </p>
                    </div>

                    <div className="grid gap-4">
                      <div className="grid gap-4 sm:grid-cols-3">
                        <div className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm">
                          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                            Categorías
                          </p>
                          <p className="mt-2 text-2xl font-bold text-slate-950">
                            {categorias.length}
                          </p>
                        </div>

                        <div className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm">
                          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                            Destacados
                          </p>
                          <p className="mt-2 text-2xl font-bold text-slate-950">
                            {destacados.length}
                          </p>
                        </div>

                        <div className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm">
                          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                            Soluciones
                          </p>
                          <p className="mt-2 text-2xl font-bold text-slate-950">
                            {soluciones.length}
                          </p>
                        </div>
                      </div>

                      <div className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm">
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                          Rol del catálogo
                        </p>
                        <p className="mt-2 text-lg font-bold text-slate-950">
                          Consulta técnica y búsqueda de referencias
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="relative overflow-hidden bg-[linear-gradient(180deg,#093A7A_0%,#0E56B5_55%,#19B5F1_100%)] p-8 md:p-10">
                    <div className="absolute right-[-40px] top-[-40px] h-40 w-40 rounded-full bg-white/10" />
                    <div className="absolute bottom-[-50px] left-[-50px] h-48 w-48 rounded-full bg-white/10" />

                    <div className="relative z-10 flex h-full flex-col justify-between">
                      <div>
                        <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                          Biblioteca técnica
                        </div>

                        <h3 className="mt-6 text-3xl font-black leading-tight text-white">
                          Categorías, códigos y productos destacados
                        </h3>

                        <p className="mt-4 text-sm leading-7 text-white/90">
                          Una arquitectura pensada para clientes técnicos,
                          compras, mantenimiento o usuarios que ya necesitan una
                          referencia concreta.
                        </p>
                      </div>

                      <div className="space-y-3">
                        <a
                          href={whatsappReferenciaHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white backdrop-blur-sm transition hover:bg-white/20"
                        >
                          Buscar por código
                        </a>

                        <Link
                          href="/catalogo"
                          className="block rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white backdrop-blur-sm transition hover:bg-white/20"
                        >
                          Explorar por categoría
                        </Link>

                        <a
                          href={whatsappCategoriasHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white backdrop-blur-sm transition hover:bg-white/20"
                        >
                          Validar referencia
                        </a>

                        <a
                          href={whatsappCotizacionHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white backdrop-blur-sm transition hover:bg-white/20"
                        >
                          Ir a cotización
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-2 hidden rounded-[24px] border border-slate-200 bg-white px-5 py-4 shadow-xl md:block">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Catálogo
                </p>
                <p className="mt-1 text-sm font-bold text-slate-950">
                  Técnico · Preciso · Navegable
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOQUE SEO SUPERIOR */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <span className="inline-flex rounded-full bg-[#EAF6FE] px-4 py-2 text-sm font-semibold text-[#0E56B5]">
                Portafolio técnico industrial
              </span>

              <h2 className="mt-5 text-3xl font-extrabold text-slate-950 md:text-4xl">
                Consulta categorías y referencias para ventilación, filtración, aire comprimido y pintura
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Este catálogo técnico industrial está organizado para facilitar
                la búsqueda de productos por categoría, nombre, referencia o
                código. Es un punto de apoyo para clientes que ya identificaron
                una línea o requieren validar una opción concreta.
              </p>

              <p className="mt-4 text-base leading-8 text-slate-600">
                Aquí puedes explorar referencias para aplicaciones de
                <strong> ventilación industrial</strong>,
                <strong> filtración industrial</strong>,
                <strong> aire comprimido</strong> y
                <strong> pintura industrial</strong>, con una estructura más
                clara para consulta comercial y técnica.
              </p>
            </div>

            <div className="rounded-[30px] border border-slate-200 bg-[#F8FAFC] p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0E56B5]">
                Categorías estratégicas
              </p>

              <div className="mt-5 space-y-4">
                {categoriasSeo.map((item) => {
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.titulo}
                      href={item.href}
                      className="block rounded-[22px] border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-[#BFE8FB] hover:shadow-md"
                    >
                      <div className="flex items-start gap-4">
                        <div className="inline-flex rounded-2xl border border-[#BFE8FB] bg-[#EAF6FE] p-3 text-[#0E56B5]">
                          <Icon className="h-5 w-5" />
                        </div>

                        <div>
                          <h3 className="text-lg font-bold text-slate-950">
                            {item.titulo}
                          </h3>
                          <p className="mt-2 text-sm leading-7 text-slate-600">
                            {item.descripcion}
                          </p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BUSCADOR */}
      <section className="relative z-30 bg-white pb-8 pt-12">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <BuscadorProductos />
        </div>
      </section>

      {/* CATEGORÍAS */}
      <section className="relative z-10 bg-[#F4F7FB] py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#0E56B5] shadow-sm">
              Categorías del catálogo
            </span>
            <h2 className="mt-5 text-3xl font-extrabold text-slate-950 md:text-4xl">
              Explora las líneas técnicas del portafolio
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Cada categoría agrupa referencias relacionadas para facilitar una
              consulta más ordenada, comparativa y útil para el proceso comercial.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {categorias.map((categoria) => (
              <Link
                key={categoria.slug}
                href={`/catalogo/${categoria.slug}`}
                className="group rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="inline-flex rounded-2xl border border-[#BFE8FB] bg-[#EAF6FE] p-3 text-[#0E56B5]">
                  <LibraryBig className="h-6 w-6" />
                </div>

                <h3 className="mt-5 text-2xl font-black text-slate-950">
                  {categoria.nombre}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {categoria.descripcion}
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-600">
                    {categoria.total} producto{categoria.total === 1 ? "" : "s"}
                  </span>

                  <span className="inline-flex items-center font-semibold text-[#0E56B5]">
                    Ver categoría
                    <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* DESTACADOS */}
      {destacados.length > 0 ? (
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <div className="max-w-3xl">
              <span className="inline-flex rounded-full bg-[#EAF6FE] px-4 py-2 text-sm font-semibold text-[#0E56B5]">
                Referencias destacadas
              </span>
              <h2 className="mt-5 text-3xl font-extrabold text-slate-950 md:text-4xl">
                Productos con mayor peso técnico y comercial
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Estas referencias ayudan a presentar mejor la línea, facilitar
                la consulta inicial y acelerar el paso hacia información o cotización.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {destacados.map((producto) => (
                <Link
                  key={producto.id}
                  href={`/catalogo/${producto.categoria}/${producto.slug}`}
                  className="group rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="rounded-[22px] border border-slate-200 bg-slate-50 p-4">
                    <img
                      src={producto.imagen}
                      alt={producto.nombre}
                      className="h-48 w-full object-contain"
                    />
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {producto.codigo ? (
                      <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-600">
                        {producto.codigo}
                      </span>
                    ) : null}

                    <span className="rounded-full border border-[#19B5F1]/20 bg-[#19B5F1]/10 px-3 py-1 text-xs font-semibold text-[#0E56B5]">
                      Destacado
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl font-bold text-slate-950">
                    {producto.nombre}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {producto.descripcion}
                  </p>

                  <div className="mt-6 inline-flex items-center font-semibold text-[#0E56B5]">
                    Ver producto
                    <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* APOYO COMERCIAL */}
      <section className="bg-[#F4F7FB] py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0E56B5]">
                Consulta técnica
              </p>
              <h2 className="mt-3 text-2xl font-black text-slate-950">
                ¿Cómo usar mejor esta sección?
              </h2>

              <div className="mt-6 space-y-4">
                {[
                  "Busca por nombre, referencia, código o categoría.",
                  "Usa esta sección cuando ya tengas una línea técnica identificada.",
                  "Revisa productos destacados si quieres empezar por referencias con más peso comercial.",
                  "Si no tienes claro qué solución necesitas, puedes ir primero a la sección de soluciones.",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-[20px] border border-slate-200 bg-[#F8FAFC] p-4"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-[#19B5F1]" />
                    <p className="text-sm leading-6 text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0E56B5]">
                Apoyo comercial
              </p>
              <h2 className="mt-3 text-2xl font-black text-slate-950">
                Si necesitas validar una referencia, también puedes apoyarte en WhatsApp
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                El catálogo te ayuda a consultar líneas y referencias, pero si
                necesitas validar aplicación, revisar una categoría o avanzar a
                cotización, puedes hacerlo directamente por el canal comercial.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <a
                  href={whatsappReferenciaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1EBE5D]"
                >
                  Validar referencia
                  <MessageCircle className="ml-2 h-4 w-4" />
                </a>

                <a
                  href={whatsappCotizacionHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
                >
                  Solicitar cotización
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>

                <a
                  href={whatsappCategoriasHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
                >
                  Consultar categoría
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>

                <Link
                  href="/soluciones"
                  className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
                >
                  Ir a soluciones
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOQUE SEO ADICIONAL */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="rounded-[30px] border border-slate-200 bg-[#F8FAFC] p-8 shadow-sm">
            <h2 className="text-3xl font-extrabold text-slate-950 md:text-4xl">
              Un catálogo industrial pensado para consulta, comparación y avance comercial
            </h2>

            <div className="mt-6 grid gap-8 lg:grid-cols-2">
              <div className="space-y-4 text-base leading-8 text-slate-600">
                <p>
                  Este catálogo técnico está diseñado para facilitar la
                  navegación de clientes que ya conocen una categoría,
                  una aplicación, una referencia o una línea de producto.
                </p>
                <p>
                  Aquí puedes revisar equipos relacionados con ventilación
                  industrial, filtración de aire, sistemas de aire comprimido,
                  pintura industrial y otras líneas que forman parte del
                  portafolio técnico.
                </p>
              </div>

              <div className="space-y-4 text-base leading-8 text-slate-600">
                <p>
                  El objetivo es hacer más clara la transición entre la necesidad,
                  la categoría y el producto, para que la consulta sea más útil y
                  el paso hacia la cotización sea más rápido.
                </p>
                <p>
                  Si todavía no tienes claro qué línea necesitas, puedes empezar
                  por la sección de soluciones y luego volver al catálogo para
                  profundizar en categorías y referencias específicas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOQUE DE LÓGICA */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Catálogo como respaldo técnico",
                text: "La entrada comercial del sitio está en Soluciones, mientras el catálogo queda como soporte para consultas más precisas.",
                icon: Layers3,
              },
              {
                title: "Mejor lectura para compras y mantenimiento",
                text: "Esta estructura ayuda más a usuarios que buscan una categoría, una referencia o una ficha puntual.",
                icon: Wrench,
              },
              {
                title: "Conexión directa a solución y cotización",
                text: "El usuario puede entrar desde Soluciones y luego profundizar aquí, sin perder la salida comercial por WhatsApp.",
                icon: MessageCircle,
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="inline-flex rounded-2xl border border-[#BFE8FB] bg-[#EAF6FE] p-3 text-[#0E56B5]">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="overflow-hidden rounded-[36px] bg-[linear-gradient(135deg,#093A7A_0%,#0E56B5_58%,#19B5F1_100%)] px-8 py-12 text-white shadow-2xl shadow-blue-950/20 md:px-12 md:py-16">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
                  Catálogo técnico
                </p>
                <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
                  Consulta categorías, valida referencias y avanza con más claridad
                </h2>
                <p className="mt-4 text-lg leading-8 text-white/90">
                  Si ya tienes una línea técnica en mente, este catálogo te ayuda
                  a revisar mejor las opciones. Y si necesitas apoyo, el canal
                  comercial está listo para orientarte.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row lg:flex-col xl:flex-row">
                <a
                  href={whatsappGeneralHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl bg-[#25D366] px-6 py-4 font-semibold text-white shadow-lg shadow-[#25D366]/30 transition hover:-translate-y-0.5 hover:bg-[#1EBE5D]"
                >
                  Hablar por WhatsApp
                  <MessageCircle className="ml-2 h-5 w-5" />
                </a>

                <Link
                  href="/soluciones"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/30 px-6 py-4 font-semibold text-white transition hover:bg-white/10"
                >
                  Ver soluciones
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}