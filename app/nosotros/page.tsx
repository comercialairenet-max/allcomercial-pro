// app/nosotros/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Factory,
  Layers3,
  MessageCircle,
  ShieldCheck,
  Users,
  Wrench,
} from "lucide-react";

import { SITE, getWhatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: `Nosotros | ${SITE.name}`,
  description:
    "Conoce la propuesta comercial y técnica de Allcomercial Online para soluciones industriales, consulta de portafolio, validación de referencias y atención orientada a cotización.",
  alternates: {
    canonical: "/nosotros",
  },
  openGraph: {
    title: `Nosotros | ${SITE.name}`,
    description:
      "Una propuesta orientada a soluciones industriales, consulta clara del portafolio y atención comercial directa.",
    url: "/nosotros",
  },
};

const pilares = [
  {
    title: "Portafolio técnico-comercial",
    text: "Una estructura pensada para presentar categorías, referencias y líneas de solución de una manera más clara para el cliente.",
    icon: Layers3,
  },
  {
    title: "Atención directa",
    text: "Canales comerciales enfocados en responder mejor, orientar la consulta y avanzar más rápido hacia cotización.",
    icon: MessageCircle,
  },
  {
    title: "Confianza y claridad",
    text: "Una presentación ordenada del portafolio ayuda a transmitir respaldo, enfoque técnico y una relación comercial más sólida.",
    icon: ShieldCheck,
  },
];

const capacidades = [
  {
    title: "Soluciones para industria y operación",
    text: "Líneas orientadas a filtración, ventilación, aire comprimido y aplicaciones técnicas para distintos entornos de trabajo.",
    icon: Factory,
  },
  {
    title: "Apoyo a procesos y mantenimiento",
    text: "Referencias útiles para operación, soporte técnico, revisión de necesidad y mejora de procesos comerciales y técnicos.",
    icon: Wrench,
  },
  {
    title: "Acompañamiento comercial",
    text: "Una atención orientada a ayudar a identificar la categoría, la línea o la referencia adecuada según el requerimiento.",
    icon: Users,
  },
];

export default function NosotrosPage() {
  const whatsappGeneralHref = getWhatsappUrl(
    "Hola, quiero conocer más sobre Allcomercial Online y su portafolio de soluciones industriales."
  );

  const whatsappPortafolioHref = getWhatsappUrl(
    "Hola, quiero orientación sobre el portafolio y sus categorías."
  );

  const whatsappCotizacionHref = getWhatsappUrl(
    "Hola, quiero avanzar hacia una cotización."
  );

  const valores = [
    {
      label: "Presentación clara del portafolio",
      href: "/catalogo",
      external: false,
    },
    {
      label: "Enfoque comercial y técnico",
      href: "/soluciones",
      external: false,
    },
    {
      label: "Atención directa por WhatsApp",
      href: whatsappGeneralHref,
      external: true,
    },
    {
      label: "Consulta orientada a necesidad real",
      href: whatsappPortafolioHref,
      external: true,
    },
  ];

  return (
    <main className="bg-white text-slate-900">
      {/* HERO PREMIUM */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0">
          <div className="absolute right-0 top-0 h-[520px] w-[52%] bg-[linear-gradient(135deg,#0B3F86_0%,#0E56B5_58%,#19B5F1_100%)]" />
          <div className="absolute right-[8%] top-[90px] h-[340px] w-[340px] rounded-full bg-white/8 blur-3xl" />
          <div className="absolute left-0 top-0 h-full w-full bg-[linear-gradient(to_right,white_0%,white_48%,transparent_48%,transparent_100%)]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center rounded-full border border-[#BFE8FB] bg-[#EAF6FE] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#0E56B5]">
                Nosotros
              </div>

              <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-950 md:text-5xl xl:text-6xl">
                Una propuesta orientada a soluciones industriales y atención comercial clara
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                Allcomercial Online busca presentar de forma más sólida un
                portafolio industrial con enfoque técnico y comercial, ayudando a
                que el cliente consulte mejor las categorías, comprenda las líneas
                de solución y avance con más claridad hacia información o cotización.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={whatsappGeneralHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl bg-[#25D366] px-6 py-4 text-base font-semibold text-white shadow-lg shadow-[#25D366]/30 transition hover:-translate-y-0.5 hover:bg-[#1EBE5D]"
                >
                  Contactar por WhatsApp
                  <MessageCircle className="ml-2 h-5 w-5" />
                </a>

                <Link
                  href="/catalogo"
                  className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-6 py-4 text-base font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
                >
                  Ver catálogo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {valores.map((item) =>
                  item.external ? (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm transition hover:-translate-y-0.5 hover:border-[#BFE8FB] hover:bg-[#F8FAFC]"
                    >
                      <CheckCircle2 className="h-5 w-5 flex-none text-[#19B5F1]" />
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
                      <CheckCircle2 className="h-5 w-5 flex-none text-[#19B5F1]" />
                      <span className="text-sm font-medium text-slate-700">
                        {item.label}
                      </span>
                    </Link>
                  )
                )}
              </div>
            </div>

            <div className="relative">
              <div className="ml-auto max-w-[640px] overflow-hidden rounded-[34px] border border-white/10 bg-white shadow-2xl shadow-slate-300/40">
                <div className="grid min-h-[520px] lg:grid-cols-[1fr_0.9fr]">
                  <div className="flex flex-col justify-between bg-[#F8FAFC] p-8 md:p-10">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0E56B5]">
                        Identidad comercial
                      </p>
                      <h2 className="mt-4 text-3xl font-black leading-tight text-slate-950">
                        Una base más profesional para presentar el portafolio
                      </h2>
                      <p className="mt-4 text-sm leading-7 text-slate-600">
                        La propuesta combina estructura, claridad y enfoque comercial
                        para mostrar soluciones industriales con una lectura más
                        corporativa y más útil para el cliente.
                      </p>
                    </div>

                    <div className="grid gap-4">
                      <div className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm">
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                          Enfoque
                        </p>
                        <p className="mt-2 text-xl font-bold text-slate-950">
                          Industrial · Técnico · Comercial
                        </p>
                      </div>

                      <div className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm">
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                          Relación con el cliente
                        </p>
                        <p className="mt-2 text-xl font-bold text-slate-950">
                          Consulta clara y orientación directa
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="relative overflow-hidden bg-[linear-gradient(180deg,#0B3F86_0%,#0E56B5_55%,#19B5F1_100%)] p-8 md:p-10">
                    <div className="absolute right-[-40px] top-[-40px] h-40 w-40 rounded-full bg-white/10" />
                    <div className="absolute bottom-[-50px] left-[-50px] h-48 w-48 rounded-full bg-white/10" />

                    <div className="relative z-10 flex h-full flex-col justify-between">
                      <div>
                        <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                          Enfoque corporativo
                        </div>

                        <h3 className="mt-6 text-3xl font-black leading-tight text-white">
                          Presentación clara del portafolio y atención comercial directa
                        </h3>

                        <p className="mt-4 text-sm leading-7 text-white/90">
                          El sitio, el catálogo y la estructura general están
                          pensados para facilitar una consulta más ordenada, una
                          mejor lectura del portafolio y una comunicación comercial
                          más útil.
                        </p>
                      </div>

                      <div className="space-y-3">
                        <Link
                          href="/soluciones"
                          className="block rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white backdrop-blur-sm transition hover:bg-white/20"
                        >
                          Portafolio por líneas de solución
                        </Link>

                        <a
                          href={whatsappGeneralHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white backdrop-blur-sm transition hover:bg-white/20"
                        >
                          Atención directa por WhatsApp
                        </a>

                        <a
                          href={whatsappCotizacionHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white backdrop-blur-sm transition hover:bg-white/20"
                        >
                          Apoyo a consulta y cotización
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-2 hidden rounded-[24px] border border-slate-200 bg-white px-5 py-4 shadow-xl md:block">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Nosotros
                </p>
                <p className="mt-1 text-sm font-bold text-slate-950">
                  Marca · Portafolio · Atención
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PILARES */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full bg-[#EAF6FE] px-4 py-2 text-sm font-semibold text-[#0E56B5]">
              Pilares
            </span>
            <h2 className="mt-5 text-3xl font-extrabold text-slate-950 md:text-4xl">
              Una base más sólida para una relación comercial más clara
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              La propuesta de {SITE.name} se apoya en una mejor presentación del
              portafolio, una navegación más útil y una ruta directa hacia el
              contacto comercial.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {pilares.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
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

      {/* CAPACIDADES */}
      <section className="bg-[#F4F7FB] py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <div>
              <span className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#0E56B5] shadow-sm">
                Capacidades
              </span>

              <h2 className="mt-5 text-3xl font-extrabold text-slate-950 md:text-4xl">
                Una propuesta orientada a consulta, selección y acompañamiento
              </h2>

              <p className="mt-4 text-lg leading-8 text-slate-600">
                El objetivo no es solo mostrar referencias. Es ayudar a que el
                cliente entienda mejor el portafolio y encuentre una ruta clara
                hacia la información o la cotización.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Consulta del portafolio por categorías",
                  "Presentación más clara de líneas y productos",
                  "Atención comercial más directa",
                  "Mejor base para el proceso de cotización",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#19B5F1]" />
                    <p className="text-sm leading-6 text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {capacidades.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
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
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="overflow-hidden rounded-[36px] bg-[linear-gradient(135deg,#0B3F86_0%,#0E56B5_58%,#19B5F1_100%)] px-8 py-12 text-white shadow-2xl shadow-blue-950/20 md:px-12 md:py-16">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
                  Contacto comercial
                </p>
                <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
                  Hablemos sobre tu requerimiento o la línea de solución que necesitas
                </h2>
                <p className="mt-4 text-lg leading-8 text-white/90">
                  Una atención orientada a ayudarte a identificar la categoría, el
                  producto o la información comercial adecuada.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row lg:flex-col xl:flex-row">
                <a
                  href={whatsappGeneralHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl bg-[#25D366] px-6 py-4 font-semibold text-white shadow-lg shadow-[#25D366]/30 transition hover:-translate-y-0.5 hover:bg-[#1EBE5D]"
                >
                  Escribir por WhatsApp
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