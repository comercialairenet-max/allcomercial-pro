// app/contacto/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Layers3,
  Building2,
} from "lucide-react";

import { SITE, getWhatsappUrl, getEmailUrl, getPhoneUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: `Contacto | ${SITE.name}`,
  description:
    "Canal comercial para consultas, validación de referencias, orientación sobre aplicaciones y solicitud de cotización.",
  alternates: {
    canonical: "/contacto",
  },
  openGraph: {
    title: `Contacto | ${SITE.name}`,
    description:
      "Contacto comercial para consulta de portafolio, validación de referencias y solicitud de cotización.",
    url: "/contacto",
  },
};

const supportCards = [
  {
    title: "Consulta del portafolio",
    text: "Apoyo para ubicar la categoría, línea o referencia más adecuada según el requerimiento del cliente.",
    icon: Layers3,
  },
  {
    title: "Orientación comercial y técnica inicial",
    text: "Acompañamiento para revisar aplicaciones, validar opciones y avanzar con mejor criterio hacia cotización.",
    icon: ShieldCheck,
  },
  {
    title: "Canales directos de atención",
    text: "WhatsApp, correo y contacto general disponibles para una comunicación más rápida, clara y útil.",
    icon: Building2,
  },
];

export default function ContactoPage() {
  const whatsappGeneralHref = getWhatsappUrl(
    "Hola, quiero orientación sobre una categoría, referencia o solución industrial."
  );

  const whatsappCotizacionHref = getWhatsappUrl(
    "Hola, quiero solicitar una cotización."
  );

  const whatsappCategoriasHref = getWhatsappUrl(
    "Hola, quiero ayuda para identificar una categoría o referencia del catálogo."
  );

  const whatsappSeleccionHref = getWhatsappUrl(
    "Hola, necesito apoyo para validar la aplicación y seleccionar la referencia adecuada."
  );

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
                Contacto comercial
              </div>

              <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-950 md:text-5xl xl:text-6xl">
                Canal directo para consulta, validación y cotización
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                Ponte en contacto para recibir orientación sobre categorías,
                referencias, aplicaciones y soluciones industriales. La idea es
                ayudarte a llegar más rápido a la opción correcta del portafolio.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={whatsappGeneralHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl bg-[#25D366] px-6 py-4 text-base font-semibold text-white shadow-lg shadow-[#25D366]/30 transition hover:-translate-y-0.5 hover:bg-[#1EBE5D]"
                >
                  Escribir por WhatsApp
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
                <a
                  href={whatsappGeneralHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm transition hover:-translate-y-0.5 hover:border-[#BFE8FB] hover:bg-[#F8FAFC]"
                >
                  <CheckCircle2 className="h-5 w-5 flex-none text-[#19B5F1]" />
                  <span className="text-sm font-medium text-slate-700">
                    Atención comercial directa por WhatsApp
                  </span>
                </a>

                <a
                  href={whatsappCategoriasHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm transition hover:-translate-y-0.5 hover:border-[#BFE8FB] hover:bg-[#F8FAFC]"
                >
                  <CheckCircle2 className="h-5 w-5 flex-none text-[#19B5F1]" />
                  <span className="text-sm font-medium text-slate-700">
                    Orientación sobre categorías y referencias
                  </span>
                </a>

                <a
                  href={whatsappCotizacionHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm transition hover:-translate-y-0.5 hover:border-[#BFE8FB] hover:bg-[#F8FAFC]"
                >
                  <CheckCircle2 className="h-5 w-5 flex-none text-[#19B5F1]" />
                  <span className="text-sm font-medium text-slate-700">
                    Canal para solicitud de cotización
                  </span>
                </a>

                <a
                  href={whatsappSeleccionHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm transition hover:-translate-y-0.5 hover:border-[#BFE8FB] hover:bg-[#F8FAFC]"
                >
                  <CheckCircle2 className="h-5 w-5 flex-none text-[#19B5F1]" />
                  <span className="text-sm font-medium text-slate-700">
                    Apoyo para validar aplicación y selección
                  </span>
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="ml-auto max-w-[640px] overflow-hidden rounded-[34px] border border-white/10 bg-white shadow-2xl shadow-slate-300/40">
                <div className="grid min-h-[520px] lg:grid-cols-[1fr_0.9fr]">
                  <div className="flex flex-col justify-between bg-[#F8FAFC] p-8 md:p-10">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0E56B5]">
                        Atención comercial
                      </p>
                      <h2 className="mt-4 text-3xl font-black leading-tight text-slate-950">
                        Una ruta clara para consultar el portafolio y avanzar a cotización
                      </h2>
                      <p className="mt-4 text-sm leading-7 text-slate-600">
                        El objetivo es facilitar una conversación útil para revisar
                        categorías, validar referencias y orientar la consulta con
                        mejor contexto antes de cotizar.
                      </p>
                    </div>

                    <div className="grid gap-4">
                      <div className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm">
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                          Canal principal
                        </p>
                        <p className="mt-2 text-xl font-bold text-slate-950">
                          WhatsApp comercial
                        </p>
                      </div>

                      <div className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm">
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                          Alcance
                        </p>
                        <p className="mt-2 text-xl font-bold text-slate-950">
                          Consulta, orientación y cotización
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
                          Soporte comercial
                        </div>

                        <h3 className="mt-6 text-3xl font-black leading-tight text-white">
                          Atención orientada a una consulta más útil
                        </h3>

                        <p className="mt-4 text-sm leading-7 text-white/90">
                          Un canal pensado para ayudar a identificar la categoría,
                          la referencia o la línea de solución adecuada según el
                          requerimiento del cliente.
                        </p>
                      </div>

                      <div className="space-y-3">
                        <Link
                          href="/catalogo"
                          className="block rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white backdrop-blur-sm transition hover:bg-white/20"
                        >
                          Consulta de categorías
                        </Link>

                        <a
                          href={whatsappCategoriasHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white backdrop-blur-sm transition hover:bg-white/20"
                        >
                          Validación de referencias
                        </a>

                        <a
                          href={whatsappCotizacionHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white backdrop-blur-sm transition hover:bg-white/20"
                        >
                          Solicitud de cotización
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-2 hidden rounded-[24px] border border-slate-200 bg-white px-5 py-4 shadow-xl md:block">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Contacto
                </p>
                <p className="mt-1 text-sm font-bold text-slate-950">
                  Consulta · Orientación · Cotización
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOQUES DE SOPORTE */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full bg-[#EAF6FE] px-4 py-2 text-sm font-semibold text-[#0E56B5]">
              Soporte
            </span>
            <h2 className="mt-5 text-3xl font-extrabold text-slate-950 md:text-4xl">
              Formas en que podemos ayudarte
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              El contacto comercial está orientado a facilitar una conversación
              más clara alrededor del portafolio, sus aplicaciones y la selección
              de referencias.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {supportCards.map((item) => {
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

      {/* INFO DE CONTACTO */}
      <section className="bg-[#F4F7FB] py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0E56B5]">
                Canales
              </p>
              <h2 className="mt-3 text-2xl font-black text-slate-950">
                Información de contacto
              </h2>

              <div className="mt-6 space-y-5">
                <div className="flex items-start gap-3 rounded-[20px] border border-slate-200 bg-[#F8FAFC] p-4">
                  <Phone className="mt-0.5 h-5 w-5 text-[#0E56B5]" />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      Teléfono / WhatsApp
                    </p>
                    <a
                      href={getPhoneUrl()}
                      className="mt-1 block text-sm text-slate-600 transition hover:text-[#0E56B5]"
                    >
                      {SITE.company.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-[20px] border border-slate-200 bg-[#F8FAFC] p-4">
                  <Mail className="mt-0.5 h-5 w-5 text-[#0E56B5]" />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      Correo
                    </p>
                    <a
                      href={getEmailUrl()}
                      className="mt-1 block text-sm text-slate-600 transition hover:text-[#0E56B5]"
                    >
                      {SITE.company.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-[20px] border border-slate-200 bg-[#F8FAFC] p-4">
                  <MapPin className="mt-0.5 h-5 w-5 text-[#0E56B5]" />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      Ubicación de referencia
                    </p>
                    <p className="mt-1 text-sm text-slate-600">
                      {SITE.company.city}, {SITE.company.country}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={whatsappGeneralHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1EBE5D]"
                >
                  Contactar por WhatsApp
                  <MessageCircle className="ml-2 h-4 w-4" />
                </a>

                <a
                  href={getEmailUrl()}
                  className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
                >
                  Escribir por correo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0E56B5]">
                Orientación
              </p>
              <h2 className="mt-3 text-2xl font-black text-slate-950">
                ¿Qué puedes consultar?
              </h2>

              <div className="mt-6 space-y-4">
                {[
                  "Información sobre categorías y líneas de solución",
                  "Validación de producto o referencia según necesidad",
                  "Apoyo comercial para solicitud de cotización",
                  "Acompañamiento inicial para explorar el portafolio",
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

              <div className="mt-8 rounded-[24px] border border-slate-200 bg-[#F8FAFC] p-5">
                <p className="text-sm font-semibold text-slate-900">
                  Mensaje sugerido
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  “Hola, quiero recibir orientación sobre una categoría, una referencia o una solución del catálogo industrial.”
                </p>
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
                  Contacto comercial
                </p>
                <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
                  Hablemos sobre tu requerimiento o la línea de solución que necesitas
                </h2>
                <p className="mt-4 text-lg leading-8 text-white/90">
                  Una atención orientada a ayudarte a identificar la categoría,
                  la referencia o la información comercial adecuada para avanzar
                  con más claridad.
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
                  className="inline-flex items-center justify-center rounded-2xl border border-white/30 bg-transparent px-6 py-4 font-semibold text-white transition hover:bg-white/10"
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