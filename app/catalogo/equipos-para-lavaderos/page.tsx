import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Droplets,
  Factory,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Wrench,
  Wind,
  Settings,
} from "lucide-react";

import { getWhatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title:
    "Equipos para lavaderos | Soluciones para lavado automotriz e industrial",
  description:
    "Consulta equipos para lavaderos orientados a procesos de limpieza automotriz e industrial. Soluciones para operación, mantenimiento y apoyo comercial en Colombia.",
  alternates: {
    canonical: "/catalogo/equipos-para-lavaderos",
  },
  openGraph: {
    title:
      "Equipos para lavaderos | Soluciones para lavado automotriz e industrial",
    description:
      "Portafolio técnico de equipos para lavaderos y procesos de limpieza automotriz e industrial en Colombia.",
    url: "/catalogo/equipos-para-lavaderos",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Equipos para lavaderos | Soluciones para lavado automotriz e industrial",
    description:
      "Consulta equipos para lavaderos y aplicaciones de limpieza técnica y automotriz.",
  },
  keywords: [
    "equipos para lavaderos",
    "lavaderos automotrices",
    "equipos de lavado industrial",
    "lavado automotriz industrial",
    "soluciones para lavaderos",
    "equipos para limpieza automotriz",
    "lavaderos Colombia",
    "equipos para lavaderos Bogotá",
  ],
};

export default function EquiposLavaderosPage() {
  const whatsappGeneralHref = getWhatsappUrl(
    "Hola, quiero información sobre equipos para lavaderos."
  );

  const whatsappAplicacionHref = getWhatsappUrl(
    "Hola, quiero validar una aplicación para equipos de lavadero en mi operación."
  );

  const whatsappCotizacionHref = getWhatsappUrl(
    "Hola, quiero solicitar una cotización de equipos para lavaderos."
  );

  const aplicaciones = [
    "Lavaderos automotrices",
    "Zonas de limpieza de vehículos",
    "Procesos de lavado y mantenimiento",
    "Operaciones con necesidad de limpieza técnica",
    "Ambientes de servicio automotor",
    "Procesos donde se requiere apoyo para lavado y acondicionamiento",
  ];

  const beneficios = [
    {
      title: "Mejor apoyo a la operación",
      text: "Una línea adecuada de equipos para lavaderos ayuda a organizar mejor el proceso de limpieza y soporte al servicio.",
      icon: Droplets,
    },
    {
      title: "Aplicación más clara",
      text: "La categoría ayuda a relacionar la necesidad con la línea correcta antes de llegar a una referencia puntual.",
      icon: Settings,
    },
    {
      title: "Ruta comercial más directa",
      text: "Permite pasar de la necesidad operativa a la consulta técnica y de ahí a una cotización más precisa.",
      icon: ShieldCheck,
    },
  ];

  return (
    <main className="bg-white text-slate-900">
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0">
          <div className="absolute right-0 top-0 h-[520px] w-[52%] bg-[linear-gradient(135deg,#093A7A_0%,#0E56B5_58%,#19B5F1_100%)]" />
          <div className="absolute right-[10%] top-[70px] h-[320px] w-[320px] rounded-full bg-white/8 blur-3xl" />
          <div className="absolute left-0 top-0 h-full w-full bg-[linear-gradient(to_right,white_0%,white_48%,transparent_48%,transparent_100%)]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center rounded-full border border-[#BFE8FB] bg-[#EAF6FE] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#0E56B5]">
                Categoría técnica
              </div>

              <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-950 md:text-5xl xl:text-6xl">
                Equipos para lavaderos automotrices e industriales
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                Esta categoría reúne soluciones en <strong>equipos para lavaderos</strong>
                orientadas a operaciones de limpieza, mantenimiento automotriz y
                procesos donde se requiere una línea más clara para lavado y soporte técnico.
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
                  href="/catalogo"
                  className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-6 py-4 text-base font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
                >
                  Volver al catálogo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {[
                  "Consulta por tipo de operación",
                  "Apoyo para validar la línea adecuada",
                  "Salida directa a cotización",
                  "Categoría orientada a consulta comercial y técnica",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm"
                  >
                    <ShieldCheck className="h-5 w-5 flex-none text-[#19B5F1]" />
                    <span className="text-sm font-medium text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="ml-auto max-w-[680px] overflow-hidden rounded-[34px] border border-white/10 bg-white shadow-2xl shadow-slate-300/40">
                <div className="grid min-h-[520px] lg:grid-cols-[1fr_0.92fr]">
                  <div className="flex flex-col justify-between bg-[#F8FAFC] p-8 md:p-10">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0E56B5]">
                        Enfoque de la categoría
                      </p>
                      <h2 className="mt-4 text-3xl font-black leading-tight text-slate-950">
                        Una categoría pensada para orientar mejor la consulta
                      </h2>
                      <p className="mt-4 text-sm leading-7 text-slate-600">
                        Cuando el cliente sabe que necesita una solución para lavado
                        o soporte operativo, esta sección ayuda a ubicar mejor la
                        línea, la aplicación y el siguiente paso comercial.
                      </p>
                    </div>

                    <div className="grid gap-4">
                      <div className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm">
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                          Uso principal
                        </p>
                        <p className="mt-2 text-lg font-bold text-slate-950">
                          Lavado, limpieza y apoyo a operación
                        </p>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm">
                          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                            Ruta comercial
                          </p>
                          <p className="mt-2 text-lg font-bold text-slate-950">
                            Consulta
                          </p>
                        </div>

                        <div className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm">
                          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                            Siguiente paso
                          </p>
                          <p className="mt-2 text-lg font-bold text-slate-950">
                            Cotización
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
                          Aplicaciones frecuentes
                        </div>

                        <h3 className="mt-6 text-3xl font-black leading-tight text-white">
                          Equipos para lavaderos en operación automotriz e industrial
                        </h3>

                        <p className="mt-4 text-sm leading-7 text-white/90">
                          Útil para procesos de limpieza, mantenimiento y soporte
                          operativo donde se busca una línea más clara para lavaderos.
                        </p>
                      </div>

                      <div className="space-y-3">
                        {aplicaciones.slice(0, 4).map((item) => (
                          <div
                            key={item}
                            className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white backdrop-blur-sm"
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-2 hidden rounded-[24px] border border-slate-200 bg-white px-5 py-4 shadow-xl md:block">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Categoría
                </p>
                <p className="mt-1 text-sm font-bold text-slate-950">
                  Equipos para lavaderos
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <span className="inline-flex rounded-full bg-[#EAF6FE] px-4 py-2 text-sm font-semibold text-[#0E56B5]">
                Soluciones para lavaderos
              </span>

              <h2 className="mt-5 text-3xl font-extrabold text-slate-950 md:text-4xl">
                Equipos para lavaderos orientados a limpieza, servicio y operación
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Los <strong>equipos para lavaderos</strong> ayudan a organizar y
                fortalecer procesos de limpieza en entornos automotrices y de
                servicio donde la operación requiere soluciones más específicas.
              </p>

              <p className="mt-4 text-base leading-8 text-slate-600">
                Esta categoría funciona como punto de entrada para clientes que
                buscan una línea orientada a lavado, limpieza técnica, soporte a
                mantenimiento y procesos operativos relacionados con vehículos o
                áreas de servicio.
              </p>
            </div>

            <div className="rounded-[30px] border border-slate-200 bg-[#F8FAFC] p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0E56B5]">
                Aplicaciones frecuentes
              </p>

              <div className="mt-5 space-y-3">
                {aplicaciones.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-[22px] border border-slate-200 bg-white p-4"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-[#19B5F1]" />
                    <p className="text-sm leading-7 text-slate-600">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F4F7FB] py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#0E56B5] shadow-sm">
              Beneficios de la categoría
            </span>
            <h2 className="mt-5 text-3xl font-extrabold text-slate-950 md:text-4xl">
              ¿Por qué empezar por equipos para lavaderos?
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Esta categoría ayuda a ordenar mejor la consulta cuando la necesidad
              está relacionada con lavado, limpieza y apoyo operativo.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {beneficios.map((item) => {
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

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0E56B5]">
                Cómo avanzar
              </p>
              <h2 className="mt-3 text-2xl font-black text-slate-950">
                Una ruta más clara para consulta, validación y cotización
              </h2>

              <div className="mt-6 space-y-4">
                {[
                  "Empieza por la categoría si ya sabes que necesitas una solución para lavadero.",
                  "Valida la aplicación si no tienes clara la línea exacta.",
                  "Revisa el catálogo general si quieres comparar otras categorías.",
                  "Avanza a cotización cuando ya tengas una necesidad definida.",
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
                Si necesitas validar tu aplicación, también podemos orientarte
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Si todavía no sabes cuál referencia puede ajustarse mejor a tu
                necesidad, podemos ayudarte a revisar la aplicación y orientarte
                hacia la línea o el siguiente paso comercial.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <a
                  href={whatsappAplicacionHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1EBE5D]"
                >
                  Validar aplicación
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

                <Link
                  href="/catalogo"
                  className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
                >
                  Ver catálogo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>

                <Link
                  href="/soluciones"
                  className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
                >
                  Ver soluciones
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F4F7FB] py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-extrabold text-slate-950 md:text-4xl">
              Equipos para lavaderos para una operación más ordenada y funcional
            </h2>

            <div className="mt-6 grid gap-8 lg:grid-cols-2">
              <div className="space-y-4 text-base leading-8 text-slate-600">
                <p>
                  Los equipos para lavaderos cumplen un papel importante en procesos
                  de limpieza donde la operación requiere mayor orden, continuidad
                  y soporte técnico para el servicio.
                </p>
                <p>
                  Esta categoría ayuda a encontrar una entrada más clara para
                  aplicaciones relacionadas con lavado automotriz, limpieza de
                  vehículos y procesos de acondicionamiento.
                </p>
              </div>

              <div className="space-y-4 text-base leading-8 text-slate-600">
                <p>
                  En lugar de empezar por una referencia aislada, aquí el cliente
                  puede entender primero la lógica de la categoría y luego pasar
                  a productos o consultas más precisas.
                </p>
                <p>
                  Si buscas equipos para lavaderos en Colombia, este punto de entrada
                  facilita una conversación comercial más clara y una mejor identificación
                  de la necesidad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="overflow-hidden rounded-[36px] bg-[linear-gradient(135deg,#093A7A_0%,#0E56B5_58%,#19B5F1_100%)] px-8 py-12 text-white shadow-2xl shadow-blue-950/20 md:px-12 md:py-16">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
                  Equipos para lavaderos
                </p>
                <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
                  Si necesitas una solución para lavadero, empecemos por tu aplicación
                </h2>
                <p className="mt-4 text-lg leading-8 text-white/90">
                  Podemos ayudarte a revisar la necesidad, validar la línea y
                  orientar el paso hacia información o cotización.
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
                  Volver al catálogo
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