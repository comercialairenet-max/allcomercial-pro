// app/soluciones/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Fan,
  Factory,
  MessageCircle,
  PaintBucket,
  ShieldCheck,
  Sparkles,
  Wind,
} from "lucide-react";

import { soluciones } from "@/data/soluciones";
import { SITE, getWhatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: `Soluciones industriales | ${SITE.name}`,
  description:
    "Explora soluciones industriales por aplicación para consultar mejor el portafolio, validar referencias y avanzar hacia cotización.",
  alternates: {
    canonical: "/soluciones",
  },
  openGraph: {
    title: `Soluciones industriales | ${SITE.name}`,
    description:
      "Soluciones industriales por aplicación para orientar la consulta y facilitar la cotización.",
    url: "/soluciones",
  },
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

export default function SolucionesPage() {
  const whatsappHref = getWhatsappUrl(
    "Hola, quiero orientación sobre sus soluciones industriales por aplicación."
  );

  const whatsappCategoriasHref = getWhatsappUrl(
    "Hola, quiero ayuda para identificar la solución o categoría adecuada."
  );

  const whatsappReferenciaHref = getWhatsappUrl(
    "Hola, quiero validar una referencia o línea de solución."
  );

  const whatsappCotizacionHref = getWhatsappUrl(
    "Hola, quiero avanzar hacia una cotización."
  );

  const heroBullets = [
    {
      label: "Entrada comercial por necesidad real",
      href: "/soluciones",
      external: false,
    },
    {
      label: "Conexión directa con productos",
      href: "/catalogo",
      external: false,
    },
    {
      label: "Mejor lectura para clientes no técnicos",
      href: whatsappCategoriasHref,
      external: true,
    },
    {
      label: "Ruta clara hacia WhatsApp",
      href: whatsappHref,
      external: true,
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
                Soluciones por aplicación
              </div>

              <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-950 md:text-5xl xl:text-6xl">
                Soluciones industriales organizadas por necesidad real
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                En lugar de empezar por una referencia técnica, aquí puedes
                comenzar por la necesidad que quieres resolver. Esta estructura
                facilita la consulta, orienta mejor la selección y ayuda a avanzar
                con más claridad hacia información o cotización.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl bg-[#25D366] px-6 py-4 text-base font-semibold text-white shadow-lg shadow-[#25D366]/30 transition hover:-translate-y-0.5 hover:bg-[#1EBE5D]"
                >
                  Hablar por WhatsApp
                  <MessageCircle className="ml-2 h-5 w-5" />
                </a>

                <Link
                  href="/catalogo"
                  className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-6 py-4 text-base font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
                >
                  Ver catálogo técnico
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
                        Arquitectura comercial
                      </p>
                      <h2 className="mt-4 text-3xl font-black leading-tight text-slate-950">
                        Una forma más clara de presentar el portafolio
                      </h2>
                      <p className="mt-4 text-sm leading-7 text-slate-600">
                        La navegación por aplicación funciona mejor para clientes
                        que buscan resolver una necesidad concreta: cabinas,
                        HVAC, aire limpio, control de olores o control de polvo.
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
                            Enfoque
                          </p>
                          <p className="mt-2 text-lg font-bold text-slate-950">
                            Aplicación real
                          </p>
                        </div>

                        <div className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm">
                          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                            Resultado
                          </p>
                          <p className="mt-2 text-lg font-bold text-slate-950">
                            Consulta mejor orientada
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
                          Solución primero
                        </div>

                        <h3 className="mt-6 text-3xl font-black leading-tight text-white">
                          Del problema al producto, no al revés
                        </h3>

                        <p className="mt-4 text-sm leading-7 text-white/90">
                          Esta lógica reduce fricción comercial y ayuda mejor al
                          cliente que todavía no domina la especificación técnica.
                        </p>
                      </div>

                      <div className="space-y-3">
                        <a
                          href={whatsappCategoriasHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white backdrop-blur-sm transition hover:bg-white/20"
                        >
                          Problema del cliente
                        </a>

                        <Link
                          href="/soluciones"
                          className="block rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white backdrop-blur-sm transition hover:bg-white/20"
                        >
                          Ruta por aplicación
                        </Link>

                        <a
                          href={whatsappReferenciaHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white backdrop-blur-sm transition hover:bg-white/20"
                        >
                          Producto recomendado
                        </a>

                        <a
                          href={whatsappCotizacionHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white backdrop-blur-sm transition hover:bg-white/20"
                        >
                          Salida comercial
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-2 hidden rounded-[24px] border border-slate-200 bg-white px-5 py-4 shadow-xl md:block">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Soluciones
                </p>
                <p className="mt-1 text-sm font-bold text-slate-950">
                  Aplicación · Beneficio · Producto
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GRID DE SOLUCIONES */}
      <section className="bg-[#F4F7FB] py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#0E56B5] shadow-sm">
              Líneas de solución
            </span>
            <h2 className="mt-5 text-3xl font-extrabold text-slate-950 md:text-4xl">
              Explora el portafolio desde la necesidad operativa
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Cada solución agrupa productos y líneas que tienen más sentido para
              un contexto de uso específico y los presenta con una narrativa más
              clara para la consulta comercial.
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

                  <div className="mt-6 space-y-2">
                    {solucion.bullets.slice(0, 3).map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-600"
                      >
                        {item}
                      </div>
                    ))}
                  </div>

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

      {/* BLOQUE DE APOYO */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0E56B5]">
                Consulta orientada
              </p>
              <h2 className="mt-3 text-2xl font-black text-slate-950">
                ¿Cómo usar esta sección?
              </h2>

              <div className="mt-6 space-y-4">
                {[
                  "Empieza por la necesidad o aplicación que quieres resolver.",
                  "Explora la solución relacionada con ese contexto de uso.",
                  "Revisa los productos conectados a esa línea de solución.",
                  "Avanza a WhatsApp si necesitas validar referencia o cotización.",
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
                Una ruta más útil para clientes que aún no tienen la referencia exacta
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Esta sección está pensada para quienes todavía no saben el código,
                la especificación o la referencia puntual, pero sí conocen el
                problema, la aplicación o el tipo de necesidad.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <a
                  href={whatsappCategoriasHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1EBE5D]"
                >
                  Validar necesidad por WhatsApp
                  <MessageCircle className="ml-2 h-4 w-4" />
                </a>

                <Link
                  href="/catalogo"
                  className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
                >
                  Ir al catálogo técnico
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="overflow-hidden rounded-[36px] bg-[linear-gradient(135deg,#0B3F86_0%,#0E56B5_58%,#19B5F1_100%)] px-8 py-12 text-white shadow-2xl shadow-blue-950/20 md:px-12 md:py-16">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
                  Soluciones industriales
                </p>
                <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
                  Empecemos por la aplicación o necesidad que quieres resolver
                </h2>
                <p className="mt-4 text-lg leading-8 text-white/90">
                  Podemos ayudarte a identificar la línea de solución, revisar la
                  categoría más adecuada y orientar el siguiente paso hacia información
                  o cotización.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row lg:flex-col xl:flex-row">
                <a
                  href={whatsappHref}
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
                  Explorar catálogo
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