import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Factory,
  Fan,
  Filter,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Wind,
} from "lucide-react";

import { soluciones } from "@/data/soluciones";
import { getWhatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title:
    "Soluciones industriales | Ventilación, filtración, aire limpio y pintura",
  description:
    "Explora soluciones industriales organizadas por necesidad: cabinas de pintura, HVAC y ventilación, aire limpio, control de olores y control de polvo. Consulta técnica y apoyo comercial en Colombia.",
  alternates: {
    canonical: "/soluciones",
  },
  openGraph: {
    title:
      "Soluciones industriales | Ventilación, filtración, aire limpio y pintura",
    description:
      "Encuentra soluciones industriales por aplicación y necesidad, con una ruta más clara hacia categorías, productos y cotización.",
    url: "/soluciones",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Soluciones industriales | Ventilación, filtración, aire limpio y pintura",
    description:
      "Soluciones industriales organizadas por aplicación para una consulta más clara y una mejor orientación comercial.",
  },
  keywords: [
    "soluciones industriales",
    "ventilación industrial",
    "filtración industrial",
    "aire limpio",
    "control de olores",
    "control de polvo",
    "cabinas de pintura",
    "soluciones industriales Colombia",
    "soluciones industriales Bogotá",
  ],
};

function getIcon(icono: string) {
  switch (icono) {
    case "paint":
      return Sparkles;
    case "air":
      return Fan;
    case "clean":
      return ShieldCheck;
    case "odor":
      return Wind;
    case "dust":
      return Factory;
    default:
      return Building2;
  }
}

export default function SolucionesPage() {
  const whatsappGeneralHref = getWhatsappUrl(
    "Hola, quiero orientación sobre una solución industrial para mi necesidad."
  );

  const whatsappAplicacionHref = getWhatsappUrl(
    "Hola, quiero validar qué solución industrial se ajusta mejor a mi aplicación."
  );

  const whatsappCotizacionHref = getWhatsappUrl(
    "Hola, quiero avanzar a cotización de una solución industrial."
  );

  const ventajas = [
    {
      title: "Entrada por necesidad real",
      text: "La página permite empezar por el problema o aplicación, no solamente por una referencia técnica.",
      icon: CheckCircle2,
    },
    {
      title: "Consulta más clara",
      text: "Ayuda a orientar al cliente cuando aún no conoce el código, la línea o la categoría exacta.",
      icon: ShieldCheck,
    },
    {
      title: "Conexión al catálogo",
      text: "Cada solución puede dirigir a categorías y productos relacionados para profundizar en la búsqueda.",
      icon: Filter,
    },
  ];

  const tiposDeNecesidad = [
    "Cabinas y procesos de pintura",
    "Ventilación y renovación de aire",
    "Ambientes con necesidad de aire limpio",
    "Control de olores en procesos o espacios",
    "Control de polvo y partículas",
    "Aplicaciones donde primero importa la necesidad y luego la referencia",
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
                Soluciones industriales organizadas por necesidad y aplicación
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                Esta sección está pensada para clientes que aún no tienen una
                referencia exacta, pero sí conocen el problema que quieren
                resolver. Aquí la consulta empieza por la aplicación y luego se
                conecta con la categoría, el producto y la cotización.
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
                  Ir al catálogo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {[
                  "Entrada comercial por aplicación",
                  "Ruta más clara para clientes sin referencia",
                  "Conexión directa a WhatsApp",
                  "Paso posterior a categorías y productos",
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
              <div className="ml-auto max-w-[700px] overflow-hidden rounded-[34px] border border-white/10 bg-white shadow-2xl shadow-slate-300/40">
                <div className="grid min-h-[560px] lg:grid-cols-[1fr_0.92fr]">
                  <div className="flex flex-col justify-between bg-[#F8FAFC] p-8 md:p-10">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0E56B5]">
                        Método comercial
                      </p>
                      <h2 className="mt-4 text-3xl font-black leading-tight text-slate-950">
                        Primero el problema, luego la línea o la referencia
                      </h2>
                      <p className="mt-4 text-sm leading-7 text-slate-600">
                        Esta estructura permite que el cliente inicie por su
                        necesidad real y no dependa de conocer un código exacto
                        desde el principio.
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
                            Inicio ideal
                          </p>
                          <p className="mt-2 text-lg font-bold text-slate-950">
                            Necesidad
                          </p>
                        </div>

                        <div className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm">
                          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                            Siguiente paso
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
                          Aplicaciones frecuentes
                        </div>

                        <h3 className="mt-6 text-3xl font-black leading-tight text-white">
                          Una ruta más útil para la consulta comercial
                        </h3>

                        <p className="mt-4 text-sm leading-7 text-white/90">
                          Ideal para clientes que saben qué quieren resolver,
                          pero todavía no identifican una línea técnica o una
                          referencia concreta.
                        </p>
                      </div>

                      <div className="space-y-3">
                        {tiposDeNecesidad.slice(0, 4).map((item) => (
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
                  Soluciones
                </p>
                <p className="mt-1 text-sm font-bold text-slate-950">
                  Aplicación · Categoría · Producto
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOQUE SEO */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <span className="inline-flex rounded-full bg-[#EAF6FE] px-4 py-2 text-sm font-semibold text-[#0E56B5]">
                Consulta por necesidad
              </span>

              <h2 className="mt-5 text-3xl font-extrabold text-slate-950 md:text-4xl">
                Soluciones industriales para ventilación, filtración, aire limpio y procesos técnicos
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Esta sección organiza el portafolio por aplicación para facilitar
                la consulta de clientes que necesitan una solución industrial,
                pero aún no conocen la categoría exacta, la línea o la referencia.
              </p>

              <p className="mt-4 text-base leading-8 text-slate-600">
                Aquí puedes empezar por necesidades relacionadas con
                <strong> cabinas de pintura</strong>,
                <strong> ventilación industrial</strong>,
                <strong> aire limpio</strong>,
                <strong> control de olores</strong> y
                <strong> control de polvo</strong>, y luego avanzar hacia
                categorías y productos del catálogo técnico.
              </p>
            </div>

            <div className="rounded-[30px] border border-slate-200 bg-[#F8FAFC] p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0E56B5]">
                Tipos de necesidad
              </p>

              <div className="mt-5 space-y-3">
                {tiposDeNecesidad.map((item) => (
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

      {/* SOLUCIONES */}
      <section className="bg-[#F4F7FB] py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#0E56B5] shadow-sm">
              Soluciones disponibles
            </span>
            <h2 className="mt-5 text-3xl font-extrabold text-slate-950 md:text-4xl">
              Empieza por la aplicación o necesidad que quieres resolver
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Esta arquitectura está pensada para una lectura comercial más clara
              y una transición más ordenada hacia categorías, productos y cotización.
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

      {/* BENEFICIOS */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full bg-[#EAF6FE] px-4 py-2 text-sm font-semibold text-[#0E56B5]">
              Ventajas de esta ruta
            </span>
            <h2 className="mt-5 text-3xl font-extrabold text-slate-950 md:text-4xl">
              ¿Por qué empezar por soluciones industriales?
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Esta página facilita el proceso comercial cuando la necesidad está
              clara, pero aún no existe una referencia técnica identificada.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {ventajas.map((item) => {
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

      {/* APOYO COMERCIAL */}
      <section className="bg-[#F4F7FB] py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0E56B5]">
                Cómo usar esta sección
              </p>
              <h2 className="mt-3 text-2xl font-black text-slate-950">
                Una ruta más clara para consulta, orientación y cotización
              </h2>

              <div className="mt-6 space-y-4">
                {[
                  "Empieza por la aplicación si aún no conoces la referencia exacta.",
                  "Entra a la solución que mejor se relacione con tu necesidad.",
                  "Desde ahí avanza al catálogo o a la línea técnica correspondiente.",
                  "Solicita apoyo comercial cuando ya quieras validar o cotizar.",
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
                Si todavía no tienes clara la línea, también podemos orientarte
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Si sabes qué problema quieres resolver, pero aún no identificas
                la categoría o referencia adecuada, podemos ayudarte a ordenar la
                consulta y llevarte al siguiente paso comercial.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <a
                  href={whatsappAplicacionHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1EBE5D]"
                >
                  Validar necesidad
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
                  Ir al catálogo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>

                <a
                  href={whatsappGeneralHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
                >
                  Hablar por WhatsApp
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
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
              Soluciones industriales para una consulta comercial más útil y más enfocada
            </h2>

            <div className="mt-6 grid gap-8 lg:grid-cols-2">
              <div className="space-y-4 text-base leading-8 text-slate-600">
                <p>
                  Muchas consultas empiezan por una necesidad concreta y no por
                  un código. Por eso esta página funciona como entrada natural
                  para clientes que buscan resolver un problema antes de llegar a
                  una línea o referencia específica.
                </p>
                <p>
                  La estructura por soluciones ayuda a mejorar la lectura del
                  portafolio y hace más fácil conectar necesidades como
                  ventilación, filtración, aire limpio, control de olores o
                  cabinas de pintura con categorías reales del catálogo.
                </p>
              </div>

              <div className="space-y-4 text-base leading-8 text-slate-600">
                <p>
                  En lugar de obligar al usuario a empezar por una categoría
                  técnica, aquí se prioriza la aplicación. Eso mejora la
                  experiencia, la orientación comercial y la posibilidad de
                  avanzar hacia una cotización más clara.
                </p>
                <p>
                  Si buscas soluciones industriales en Colombia para tu empresa,
                  taller o proceso, esta sección te ayuda a empezar mejor y a
                  encontrar un camino más directo hacia la opción adecuada.
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
                  Soluciones industriales
                </p>
                <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
                  Si quieres empezar por la necesidad, esta es la mejor ruta
                </h2>
                <p className="mt-4 text-lg leading-8 text-white/90">
                  Podemos ayudarte a identificar la solución adecuada, conectarla
                  con el catálogo y orientar el paso hacia información o cotización.
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