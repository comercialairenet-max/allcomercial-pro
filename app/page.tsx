import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Fan,
  Factory,
  FolderKanban,
  MessageCircle,
  PaintBucket,
  ShieldCheck,
  Sparkles,
  Wind,
} from "lucide-react";

import { soluciones } from "@/data/soluciones";
import { getProductosDestacados } from "@/data/productos";
import { SITE, getWhatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title:
    "AllComercial | Soluciones industriales en ventilación, filtración y aire comprimido",
  description:
    "Venta de equipos industriales en Colombia: ventilación industrial, filtración industrial, aire comprimido, cabinas de pintura y soluciones técnicas con asesoría especializada.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "AllComercial | Soluciones industriales en ventilación, filtración y aire comprimido",
    description:
      "Venta de equipos industriales en Colombia: ventilación industrial, filtración industrial, aire comprimido, cabinas de pintura y soluciones técnicas con asesoría especializada.",
    url: "/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AllComercial | Soluciones industriales en ventilación, filtración y aire comprimido",
    description:
      "Equipos y soluciones industriales para ventilación, filtración, aire comprimido y pintura.",
  },
  keywords: [
    "ventilación industrial",
    "filtración industrial",
    "aire comprimido",
    "extractores industriales",
    "cabinas de pintura",
    "pistolas de gravedad",
    "equipos industriales Colombia",
    "soluciones industriales Bogotá",
  ],
};

function getIcon(icono: string) {
  switch (icono) {
    case "paint":
      return PaintBucket;
    case "air":
      return Fan;
    case "clean":
      return Sparkles;
    case "odor":
      return Wind;
    case "dust":
      return Factory;
    default:
      return Building2;
  }
}

export default function HomePage() {
  const destacados = getProductosDestacados().slice(0, 9);

  const whatsappGeneralHref = getWhatsappUrl(
    "Hola, quiero orientación sobre sus soluciones industriales."
  );

  const whatsappCategoriasHref = getWhatsappUrl(
    "Hola, quiero ayuda para identificar una categoría o línea de solución."
  );

  const whatsappReferenciaHref = getWhatsappUrl(
    "Hola, quiero validar una referencia o producto del catálogo."
  );

  const whatsappCotizacionHref = getWhatsappUrl(
    "Hola, quiero solicitar una cotización."
  );

  const heroBullets = [
    {
      label: "Entrada comercial por aplicación",
      href: "/soluciones",
      external: false,
    },
    {
      label: "Catálogo técnico como respaldo",
      href: "/catalogo",
      external: false,
    },
    {
      label: "Ruta directa a WhatsApp",
      href: whatsappGeneralHref,
      external: true,
    },
    {
      label: "Consulta más clara para el cliente",
      href: whatsappCategoriasHref,
      external: true,
    },
  ];

  const categoriasPrincipales = [
    {
      titulo: "Ventilación industrial",
      descripcion:
        "Soluciones para extracción de aire, renovación de ambientes y control térmico en procesos industriales.",
      href: "/catalogo/ventilacion-industrial",
    },
    {
      titulo: "Filtración industrial",
      descripcion:
        "Sistemas y componentes para mejorar la calidad del aire y proteger procesos productivos.",
      href: "/catalogo/filtracion-industrial",
    },
    {
      titulo: "Aire comprimido",
      descripcion:
        "Equipos y soluciones para aplicaciones industriales que requieren presión constante y eficiencia.",
      href: "/catalogo/sistemas-de-aire-comprimido",
    },
    {
      titulo: "Pintura industrial",
      descripcion:
        "Equipos para cabinas, aplicación de pintura y acabados técnicos en entornos industriales.",
      href: "/catalogo/pistolas-de-gravedad",
    },
  ];

  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0">
          <div className="absolute right-0 top-0 h-[560px] w-[54%] bg-[linear-gradient(135deg,#093A7A_0%,#0E56B5_58%,#19B5F1_100%)]" />
          <div className="absolute right-[8%] top-[70px] h-[360px] w-[360px] rounded-full bg-white/8 blur-3xl" />
          <div className="absolute left-0 top-0 h-full w-full bg-[linear-gradient(to_right,white_0%,white_46%,transparent_46%,transparent_100%)]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center rounded-full border border-[#BFE8FB] bg-[#EAF6FE] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#0E56B5]">
                {SITE.name}
              </div>

              <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-950 md:text-5xl xl:text-6xl">
                Soluciones industriales en ventilación, filtración, aire comprimido y pintura
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                Ayudamos a identificar la solución adecuada según la necesidad:
                cabinas de pintura, HVAC, aire limpio, control de olores,
                control de polvo y aplicaciones industriales específicas. Luego
                conectamos esa necesidad con el producto, la categoría o la
                referencia correcta del catálogo.
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
                  Explorar soluciones
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
                        Estructura comercial
                      </p>
                      <h2 className="mt-4 text-3xl font-black leading-tight text-slate-950">
                        Primero la necesidad. Después la categoría o la referencia.
                      </h2>
                      <p className="mt-4 text-sm leading-7 text-slate-600">
                        El sitio está pensado para que el cliente pueda empezar
                        por la aplicación o el problema que quiere resolver y,
                        desde ahí, avanzar hacia el catálogo, la referencia o la
                        cotización.
                      </p>
                    </div>

                    <div className="grid gap-4">
                      <div className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm">
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                          Soluciones activas
                        </p>
                        <p className="mt-2 text-2xl font-bold text-slate-950">
                          {soluciones.length}
                        </p>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm">
                          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                            Ruta principal
                          </p>
                          <p className="mt-2 text-lg font-bold text-slate-950">
                            Soluciones
                          </p>
                        </div>

                        <div className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm">
                          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                            Respaldo técnico
                          </p>
                          <p className="mt-2 text-lg font-bold text-slate-950">
                            Catálogo
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative overflow-hidden bg-[linear-gradient(180deg,#093A7A_0%,#0E56B5_55%,#19B5F1_100%)] p-8 md:p-10">
                    <div className="absolute right-[-40px] top-[-40px] h-40 w-40 rounded-full bg-white/10" />
                    <div className="absolute bottom-[-50px] left-[-50px] h-48 w-48 rounded-full bg-white/10" />

                    <div className="relative z-10 flex h-full flex-col justify-between">
                      <div>
                        <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                          Método comercial
                        </div>

                        <h3 className="mt-6 text-3xl font-black leading-tight text-white">
                          Problema, solución, producto y cotización
                        </h3>

                        <p className="mt-4 text-sm leading-7 text-white/90">
                          Un flujo más útil para clientes que todavía no tienen la
                          referencia exacta, pero sí conocen su necesidad o aplicación.
                        </p>
                      </div>

                      <div className="space-y-3">
                        <Link
                          href="/soluciones/cabinas-de-pintura"
                          className="block rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white backdrop-blur-sm transition hover:bg-white/20"
                        >
                          Cabinas de pintura
                        </Link>

                        <Link
                          href="/soluciones/hvac-ventilacion"
                          className="block rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white backdrop-blur-sm transition hover:bg-white/20"
                        >
                          HVAC y ventilación
                        </Link>

                        <Link
                          href="/soluciones/aire-limpio-hospitalario"
                          className="block rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white backdrop-blur-sm transition hover:bg-white/20"
                        >
                          Aire limpio
                        </Link>

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
                  Home
                </p>
                <p className="mt-1 text-sm font-bold text-slate-950">
                  Soluciones · Catálogo · WhatsApp
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO INTRO */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <span className="inline-flex rounded-full bg-[#EAF6FE] px-4 py-2 text-sm font-semibold text-[#0E56B5]">
                Soluciones industriales en Colombia
              </span>

              <h2 className="mt-5 text-3xl font-extrabold text-slate-950 md:text-4xl">
                Equipos industriales para ventilación, filtración, aire comprimido y pintura
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                En <strong>AllComercial</strong> ofrecemos soluciones
                industriales para aplicaciones que requieren extracción de aire,
                control de partículas, aire comprimido, cabinas de pintura y
                equipos técnicos para procesos productivos.
              </p>

              <p className="mt-4 text-base leading-8 text-slate-600">
                Nuestro enfoque combina <strong>asesoría técnica</strong>,
                organización comercial del portafolio y acceso rápido al
                <strong> catálogo técnico</strong> para ayudar a empresas,
                talleres e industria a identificar la opción más adecuada según
                su necesidad.
              </p>
            </div>

            <div className="rounded-[30px] border border-slate-200 bg-[#F8FAFC] p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0E56B5]">
                Categorías principales
              </p>

              <div className="mt-5 space-y-4">
                {categoriasPrincipales.map((item) => (
                  <Link
                    key={item.titulo}
                    href={item.href}
                    className="block rounded-[22px] border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-[#BFE8FB] hover:shadow-md"
                  >
                    <h3 className="text-lg font-bold text-slate-950">
                      {item.titulo}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {item.descripcion}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUCIONES */}
      <section className="bg-[#F4F7FB] py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#0E56B5] shadow-sm">
              Soluciones por aplicación
            </span>
            <h2 className="mt-5 text-3xl font-extrabold text-slate-950 md:text-4xl">
              Empieza por la aplicación o necesidad que quieres resolver
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Esta entrada organiza el portafolio de una forma más útil para el
              cliente, especialmente cuando todavía no tiene el código o la referencia exacta.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {soluciones.map((solucion) => {
              const Icon = getIcon(solucion.icono);

              return (
                <Link
                  key={solucion.slug}
                  href={`/soluciones/${solucion.slug}`}
                  className="group rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="inline-flex rounded-2xl border border-[#BFE8FB] bg-[#EAF6FE] p-3 text-[#0E56B5]">
                    <Icon className="h-6 w-6" />
                  </div>

                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#0E56B5]">
                    {solucion.subtitulo}
                  </p>

                  <h3 className="mt-3 text-2xl font-black text-slate-950">
                    {solucion.nombre}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {solucion.descripcion}
                  </p>

                  <div className="mt-6 inline-flex items-center font-semibold text-[#0E56B5]">
                    Ver solución
                    <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* DESTACADOS */}
      {destacados.length > 0 ? (
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <div className="max-w-3xl">
              <span className="inline-flex rounded-full bg-[#EAF6FE] px-4 py-2 text-sm font-semibold text-[#0E56B5]">
                Destacados del portafolio
              </span>
              <h2 className="mt-5 text-3xl font-extrabold text-slate-950 md:text-4xl">
                Productos con mayor peso técnico y comercial
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Estas referencias ayudan a presentar mejor el portafolio y sirven
                como punto de entrada cuando el cliente ya tiene una línea o producto en mente.
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

      {/* BENEFICIOS SEO / COMERCIALES */}
      <section className="bg-[#F4F7FB] py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="inline-flex rounded-2xl border border-[#BFE8FB] bg-[#EAF6FE] p-3 text-[#0E56B5]">
                <Factory className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-slate-950">
                Soluciones por aplicación industrial
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Organizamos el portafolio por necesidad real: ventilación,
                filtración, cabinas de pintura, aire limpio, control de olores y polvo.
              </p>
            </div>

            <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="inline-flex rounded-2xl border border-[#BFE8FB] bg-[#EAF6FE] p-3 text-[#0E56B5]">
                <FolderKanban className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-slate-950">
                Catálogo técnico como respaldo
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                El cliente puede pasar de la aplicación a la categoría técnica,
                y de ahí a productos concretos para información o cotización.
              </p>
            </div>

            <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="inline-flex rounded-2xl border border-[#BFE8FB] bg-[#EAF6FE] p-3 text-[#0E56B5]">
                <MessageCircle className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-slate-950">
                Asesoría comercial y técnica
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Si aún no tienes la referencia exacta, podemos ayudarte a
                identificar una categoría, una línea o una solución adecuada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0E56B5]">
                Cómo empezar
              </p>
              <h2 className="mt-3 text-2xl font-black text-slate-950">
                Una ruta más clara para consultar el portafolio
              </h2>

              <div className="mt-6 space-y-4">
                {[
                  "Empieza por soluciones si conoces la aplicación o el problema.",
                  "Ve al catálogo si ya sabes la categoría, la línea o la referencia.",
                  "Usa WhatsApp si necesitas validar una opción antes de cotizar.",
                  "Avanza a cotización cuando ya tengas una línea o producto identificado.",
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
                Si todavía no tienes la referencia exacta, también podemos orientarte
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                No es necesario llegar con el código exacto. Si conoces la
                necesidad, la aplicación o el tipo de problema que quieres resolver,
                podemos ayudarte a ubicar una categoría, una línea o una referencia.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <a
                  href={whatsappCategoriasHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1EBE5D]"
                >
                  Consultar necesidad
                  <MessageCircle className="ml-2 h-4 w-4" />
                </a>

                <a
                  href={whatsappReferenciaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
                >
                  Validar referencia
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>

                <Link
                  href="/soluciones"
                  className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
                >
                  Ir a soluciones
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>

                <Link
                  href="/catalogo"
                  className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
                >
                  Ver catálogo
                  <FolderKanban className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEXTO SEO ADICIONAL */}
      <section className="bg-[#F4F7FB] py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-extrabold text-slate-950 md:text-4xl">
              Equipos industriales para proyectos, mantenimiento y operación
            </h2>

            <div className="mt-6 grid gap-8 lg:grid-cols-2">
              <div className="space-y-4 text-base leading-8 text-slate-600">
                <p>
                  Nuestro portafolio integra soluciones para empresas que buscan
                  mejorar procesos de ventilación industrial, filtración de aire,
                  aire comprimido y aplicación de pintura en diferentes entornos.
                </p>
                <p>
                  Atendemos necesidades en talleres, cabinas de pintura, procesos
                  automotrices, industria metalmecánica y aplicaciones técnicas
                  donde la confiabilidad del equipo es clave.
                </p>
              </div>

              <div className="space-y-4 text-base leading-8 text-slate-600">
                <p>
                  En <strong>AllComercial</strong> trabajamos para que la consulta
                  sea más clara desde el inicio: necesidad, aplicación, solución
                  y producto. Así facilitamos la conversación comercial y
                  aceleramos el paso hacia información técnica o cotización.
                </p>
                <p>
                  Si buscas extractores industriales, sistemas de filtración,
                  compresores, equipos para cabinas de pintura o líneas técnicas
                  asociadas, puedes empezar por nuestras soluciones o por el
                  catálogo técnico.
                </p>
              </div>
            </div>
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
                  Consulta comercial
                </p>
                <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
                  Hablemos sobre tu necesidad, tu aplicación o la referencia que quieres validar
                </h2>
                <p className="mt-4 text-lg leading-8 text-white/90">
                  Podemos ayudarte a identificar la solución adecuada, revisar el
                  catálogo técnico y orientar el siguiente paso hacia información o cotización.
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
                  href="/catalogo"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/30 px-6 py-4 font-semibold text-white transition hover:bg-white/10"
                >
                  Ir al catálogo
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