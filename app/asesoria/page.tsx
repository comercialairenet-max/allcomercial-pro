// app/asesoria/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  ClipboardCheck,
  Headphones,
  Layers3,
  MessageCircle,
  Search,
  ShieldCheck,
  Sparkles,
  Zap,
  Clock3,
  Wrench,
} from "lucide-react";

import {
  categoriasMeta,
  getProductosDestacados,
  getProductosPorCategoria,
} from "@/data/productos";
import { SITE, getWhatsappUrl } from "@/lib/site";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

export const metadata: Metadata = {
  title: "Asesoría técnica y comercial",
  description:
    "Recibe asesoría técnica y comercial para elegir soluciones en filtración industrial, ventilación, aire comprimido y otras líneas del catálogo. Solicita apoyo por WhatsApp.",
  alternates: {
    canonical: "/asesoria",
  },
  openGraph: {
    title: "Asesoría técnica y comercial",
    description:
      "Te ayudamos a encontrar la solución correcta según aplicación, necesidad y categoría del catálogo.",
    url: "/asesoria",
  },
};

function formatLabel(text: string) {
  return text
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

const helpUseCases = [
  {
    title: "No sé qué producto necesito",
    text: "La asesoría está pensada para clientes que conocen el problema o la aplicación, pero no la referencia exacta.",
  },
  {
    title: "Quiero comparar alternativas",
    text: "También sirve para revisar categorías, líneas y productos destacados antes de pasar a cotización.",
  },
  {
    title: "Necesito cotizar más claro",
    text: "Una mejor orientación ayuda a que la conversación por WhatsApp sea más útil y más rápida.",
  },
];

const reasons = [
  {
    title: "Más claridad comercial",
    text: "La asesoría conecta la necesidad del cliente con la categoría y los productos del catálogo PRO.",
    icon: ShieldCheck,
  },
  {
    title: "Menos fricción",
    text: "Reduce el problema de entrar al catálogo sin saber por dónde empezar.",
    icon: Search,
  },
  {
    title: "Ruta útil a WhatsApp",
    text: "Ayuda a convertir mejor la visita en una conversación enfocada.",
    icon: MessageCircle,
  },
  {
    title: "Mejor lectura del portafolio",
    text: "Permite orientar la búsqueda por categoría y tipo de aplicación.",
    icon: Layers3,
  },
];

const trustCards = [
  {
    title: "Acompañamiento para decidir mejor",
    text: "La asesoría existe para reducir dudas y ayudar a elegir una categoría, línea o producto con más criterio.",
    icon: Headphones,
  },
  {
    title: "Más claridad antes de cotizar",
    text: "Cuando el cliente entiende mejor su necesidad, la conversación por WhatsApp avanza con más contexto.",
    icon: Clock3,
  },
  {
    title: "Enfoque en necesidad real",
    text: "Aquí no hace falta tener el nombre exacto del producto para empezar. Se puede entrar desde problema, aplicación o proceso.",
    icon: Wrench,
  },
  {
    title: "Ruta comercial más sólida",
    text: "Esta página ayuda a convertir una visita indecisa en una conversación útil y mejor orientada.",
    icon: Zap,
  },
];

const categoryAdviceMap: Record<
  string,
  {
    title: string;
    text: string;
    problemExamples: string[];
  }
> = {
  "filtracion-industrial": {
    title: "Filtración industrial",
    text: "Ideal para clientes que necesitan resolver problemas de partículas, overspray, polvo, olores o aire limpio en procesos específicos.",
    problemExamples: [
      "No sé si necesito prefiltro, pocket o HEPA",
      "Necesito una solución para cabina de pintura",
      "Busco una opción para control de olores o polvo",
    ],
  },
  "ventilacion-industrial": {
    title: "Ventilación industrial",
    text: "Ideal para clientes que necesitan extracción, inyección, renovación o manejo de aire en procesos y ambientes industriales.",
    problemExamples: [
      "Tengo calor acumulado",
      "Necesito evacuar humo o vapores",
      "Quiero renovar el aire del ambiente",
    ],
  },
  "sistemas-de-aire-comprimido": {
    title: "Aire comprimido",
    text: "Ideal para procesos productivos, talleres, redes de aire y aplicaciones técnicas que requieren mejor orientación.",
    problemExamples: [
      "No sé qué línea revisar primero",
      "Necesito una solución para mi operación",
      "Quiero cotizar con más claridad",
    ],
  },
  "cabinas-de-pintura": {
    title: "Cabinas de pintura",
    text: "Ideal para clientes que buscan mejorar el proceso, el acabado o el control de overspray dentro de la cabina.",
    problemExamples: [
      "Quiero mejorar el acabado",
      "Necesito controlar overspray",
      "No sé qué producto revisar primero",
    ],
  },
};

export default async function AsesoriaPage() {
  const categoryOrder = [
    "filtracion-industrial",
    "ventilacion-industrial",
    "sistemas-de-aire-comprimido",
    "cabinas-de-pintura",
  ];

  const categories = categoryOrder
    .map((slug) => {
      const meta = categoriasMeta[slug as keyof typeof categoriasMeta];
      const destacados = getProductosDestacados(
        slug as keyof typeof categoriasMeta
      ).slice(0, 2);
      const total = getProductosPorCategoria(
        slug as keyof typeof categoriasMeta
      ).length;
      const info = categoryAdviceMap[slug];

      if (!meta || !info) return null;

      return {
        slug,
        nombre: info.title,
        descripcion: info.text,
        problemExamples: info.problemExamples,
        total,
        destacados,
      };
    })
    .filter(Boolean) as {
    slug: string;
    nombre: string;
    descripcion: string;
    problemExamples: string[];
    total: number;
    destacados: ReturnType<typeof getProductosDestacados>;
  }[];

  const featured = getProductosDestacados().slice(0, 6);

  const whatsappGeneral = getWhatsappUrl(
    "Hola, necesito asesoría para elegir la solución correcta dentro del catálogo."
  );

  return (
    <>
      <SiteHeader />

      <main className="bg-white text-slate-900">
        <section className="relative isolate overflow-hidden border-b border-slate-200 bg-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.10),transparent_28%),radial-gradient(circle_at_left,rgba(59,130,246,0.07),transparent_24%)]" />
          <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] [background-size:44px_44px]" />

          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-16 md:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:py-24">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-orange-700">
                <Sparkles className="h-4 w-4" />
                Asesoría conectada al catálogo PRO
              </div>

              <h1 className="mt-6 max-w-5xl text-4xl font-black tracking-tight text-slate-950 md:text-5xl xl:text-6xl">
                Asesoría técnica y comercial para elegir mejor
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                Esta página ya no funciona aislada: ahora se conecta con categorías y productos reales
                del catálogo para ayudarte a entrar mejor, comparar más rápido y llegar a una cotización útil.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={whatsappGeneral}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
                  style={{ background: SITE.branding.primaryColor }}
                >
                  <MessageCircle className="h-5 w-5" />
                  Solicitar asesoría por WhatsApp
                </a>

                <Link
                  href="/catalogo"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-50"
                >
                  Ver catálogo
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Conectada con categorías reales",
                  "Más útil para clientes sin referencia exacta",
                  "Más facilidad para cotizar",
                  "Mejor orientación por WhatsApp",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm"
                  >
                    <BadgeCheck className="h-5 w-5 flex-none text-orange-600" />
                    <span className="text-sm font-medium text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[30px] border border-orange-200 bg-gradient-to-br from-orange-50 to-white p-6 shadow-xl shadow-slate-200/70 sm:col-span-2">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-700">
                      Qué hace esta página
                    </p>
                    <h2 className="mt-2 text-2xl font-black text-slate-950 md:text-3xl">
                      Reduce fricción antes de cotizar
                    </h2>
                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      La asesoría existe para convertir dudas en conversaciones útiles y dirigir al cliente
                      hacia la categoría o referencia correcta.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-orange-200 bg-orange-50 p-3 text-orange-700">
                    <ClipboardCheck className="h-8 w-8" />
                  </div>
                </div>
              </div>

              <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm">
                <Search className="h-8 w-8 text-orange-600" />
                <h3 className="mt-4 text-xl font-bold text-slate-950">Menos duda</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Ayuda a entrar por necesidad, no solo por referencia.
                </p>
              </div>

              <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm">
                <Zap className="h-8 w-8 text-orange-600" />
                <h3 className="mt-4 text-xl font-bold text-slate-950">Más acción</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Lleva la visita a una conversación útil por WhatsApp.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-20 md:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-orange-600">
                  Señales de confianza
                </p>
                <h2 className="text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
                  Un espacio pensado para orientar mejor la decisión
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
                  Esta página existe para ayudar al cliente que todavía no tiene la referencia exacta,
                  pero sí una necesidad real. La meta es reducir dudas y avanzar con más claridad.
                </p>

                <div className="mt-8 space-y-4">
                  {[
                    "Más claridad antes de cotizar",
                    "Asesoría conectada con el catálogo",
                    "Entrada por problema, no solo por referencia",
                    "Conversación más útil por WhatsApp",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-[22px] border border-slate-200 bg-white p-5 shadow-sm"
                    >
                      <BadgeCheck className="mt-0.5 h-5 w-5 flex-none text-orange-600" />
                      <p className="text-sm font-medium leading-6 text-slate-700">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {trustCards.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                    >
                      <div className="inline-flex rounded-2xl border border-orange-200 bg-orange-50 p-3 text-orange-700">
                        <Icon className="h-7 w-7" />
                      </div>
                      <h3 className="mt-5 text-xl font-bold text-slate-950">{item.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 md:px-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-orange-600">
            Cuándo usar esta página
          </p>
          <h2 className="text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
            La asesoría es útil cuando todavía no hay una decisión clara
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 md:text-lg">
            Estos son los casos más comunes en los que esta página ayuda a cerrar mejor la búsqueda.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {helpUseCases.map((item) => (
              <div
                key={item.title}
                className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-bold text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-y border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-20 md:px-8">
            <p className="mb-3 text-center text-sm font-semibold uppercase tracking-[0.22em] text-orange-600">
              Ventajas
            </p>
            <h2 className="mx-auto max-w-3xl text-center text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
              Por qué esta asesoría ahora es más útil
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-center text-base leading-7 text-slate-600 md:text-lg">
              Ya no es solo una página de texto: ahora trabaja de la mano del catálogo PRO.
            </p>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {reasons.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm"
                  >
                    <div className="inline-flex rounded-2xl border border-orange-200 bg-orange-50 p-3 text-orange-700">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="mt-5 text-xl font-bold text-slate-950">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 md:px-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-orange-600">
            Entrada por categorías
          </p>
          <h2 className="text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
            Empieza por la línea que más se acerque a tu necesidad
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 md:text-lg">
            Estas tarjetas toman categorías reales del catálogo para orientar mejor la conversación.
          </p>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {categories.map((category) => {
              const categoryWhatsapp = getWhatsappUrl(
                `Hola, necesito asesoría para elegir una solución dentro de ${category.nombre}.`
              );

              return (
                <div
                  key={category.slug}
                  className={`rounded-[30px] border p-6 transition hover:-translate-y-1 hover:shadow-xl ${
                    category.slug === "filtracion-industrial"
                      ? "border-orange-200 bg-gradient-to-br from-orange-50 to-white shadow-lg shadow-slate-200/60"
                      : "border-slate-200 bg-white shadow-sm"
                  }`}
                >
                  <div className="flex flex-wrap items-center gap-2">
                    {category.slug === "filtracion-industrial" ? (
                      <span className="rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-orange-700">
                        Línea más fuerte
                      </span>
                    ) : null}

                    <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-600">
                      {category.total} productos
                    </span>
                  </div>

                  <h3 className="mt-4 text-2xl font-black text-slate-950">{category.nombre}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{category.descripcion}</p>

                  <div className="mt-5 space-y-3">
                    {category.problemExamples.map((problem) => (
                      <div key={problem} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-orange-600" />
                        <p className="text-sm leading-6 text-slate-700">{problem}</p>
                      </div>
                    ))}
                  </div>

                  {category.destacados.length > 0 ? (
                    <div className="mt-6 flex flex-wrap gap-2">
                      {category.destacados.map((producto) => (
                        <span
                          key={producto.id}
                          className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-600"
                        >
                          {producto.nombre}
                        </span>
                      ))}
                    </div>
                  ) : null}

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <Link
                      href={`/catalogo/${category.slug}`}
                      className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
                    >
                      Ver categoría
                      <ArrowRight className="h-4 w-4" />
                    </Link>

                    <a
                      href={categoryWhatsapp}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
                      style={{ background: SITE.branding.primaryColor }}
                    >
                      <MessageCircle className="h-4 w-4" />
                      Pedir ayuda
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {featured.length > 0 ? (
          <section className="border-y border-slate-200 bg-slate-50">
            <div className="mx-auto max-w-7xl px-6 py-20 md:px-8">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-orange-600">
                Productos destacados
              </p>
              <h2 className="text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
                También puedes empezar por estas referencias fuertes
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 md:text-lg">
                Estos productos vienen directamente del catálogo PRO y sirven como atajos comerciales.
              </p>

              <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {featured.map((producto) => {
                  const href = `/catalogo/${producto.categoria}/${producto.slug}`;
                  const wa = getWhatsappUrl(
                    `Hola, necesito asesoría para el producto ${producto.nombre}.`
                  );
                  const categoryName =
                    categoriasMeta[producto.categoria]?.nombre ??
                    formatLabel(producto.categoria);

                  return (
                    <div
                      key={producto.id}
                      className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                    >
                      <div className="flex flex-wrap gap-2">
                        <span className="rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-orange-700">
                          Destacado
                        </span>
                      </div>

                      <h3 className="mt-4 text-xl font-bold text-slate-950">{producto.nombre}</h3>
                      <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-600">
                        {producto.descripcion}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-600">
                          {categoryName}
                        </span>
                      </div>

                      <div className="mt-6 flex flex-col gap-3">
                        <Link
                          href={href}
                          className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
                        >
                          Ver producto
                          <ArrowRight className="h-4 w-4" />
                        </Link>

                        <a
                          href={wa}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
                          style={{ background: SITE.branding.primaryColor }}
                        >
                          <MessageCircle className="h-4 w-4" />
                          Solicitar ayuda
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        ) : null}

        <section className="mx-auto max-w-7xl px-6 py-20 md:px-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-orange-600">
            Cómo funciona
          </p>
          <h2 className="text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
            Una ruta simple para avanzar más rápido
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 md:text-lg">
            La idea es llevar al usuario desde la duda hacia una categoría, un producto o una conversación útil.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Explica tu necesidad",
                text: "Puedes escribirnos aunque no conozcas la referencia exacta.",
              },
              {
                step: "02",
                title: "Te orientamos dentro del catálogo",
                text: "La asesoría ya toma como base categorías y productos reales.",
              },
              {
                step: "03",
                title: "Pasas a una cotización útil",
                text: "La conversación gana contexto y se vuelve más clara comercialmente.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="text-sm font-black tracking-[0.2em] text-orange-600">
                  {item.step}
                </div>
                <h3 className="mt-4 text-xl font-bold text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-slate-200 bg-slate-950">
          <div className="mx-auto max-w-7xl px-6 py-20 md:px-8">
            <div className="overflow-hidden rounded-[34px] border border-orange-400/20 bg-gradient-to-r from-orange-500 via-orange-400 to-amber-300 p-8 text-black shadow-2xl shadow-orange-500/10 lg:p-12">
              <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-black/70">
                    Acción recomendada
                  </p>
                  <h2 className="mt-4 text-3xl font-black tracking-tight md:text-4xl">
                    Convierte la duda en una conversación útil
                  </h2>
                  <p className="mt-5 max-w-2xl text-base leading-7 text-black/80 md:text-lg">
                    Escríbenos por WhatsApp y te ayudamos a encontrar la categoría o el producto que
                    más se ajusta a tu necesidad.
                  </p>
                </div>

                <div className="flex flex-col gap-4 lg:items-end">
                  <a
                    href={whatsappGeneral}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-black px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-zinc-900"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Solicitar asesoría
                  </a>

                  <Link
                    href="/catalogo"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-black/15 bg-white/70 px-6 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-white"
                  >
                    Ver catálogo
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}