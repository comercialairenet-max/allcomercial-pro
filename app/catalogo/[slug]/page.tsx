import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  CheckCircle2,
  FolderKanban,
  LibraryBig,
  MessageCircle,
  ShieldCheck,
  Tag,
} from "lucide-react";

import {
  getCategoriasConProductos,
  getProductosPorCategoria,
} from "@/data/productos";
import { getWhatsappUrl, SITE } from "@/lib/site";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function capitalizar(texto: string) {
  return texto
    .split("-")
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join(" ");
}

function getCategoriaSeo(slug: string, nombre: string) {
  const mapa: Record<
    string,
    {
      title: string;
      description: string;
      intro: string;
      enfoque: string;
      bullets: string[];
      seoTitle: string;
      seoText1: string;
      seoText2: string;
      ctaText: string;
    }
  > = {
    "filtracion-industrial": {
      title:
        "Filtración industrial | Filtros y soluciones para aire y procesos industriales",
      description:
        "Consulta soluciones de filtración industrial para aire, control de partículas y procesos técnicos. Encuentra productos y apoyo comercial en Colombia.",
      intro:
        "Esta categoría reúne soluciones de filtración industrial orientadas a mejorar la calidad del aire, controlar partículas y apoyar procesos donde la limpieza y la protección del sistema son importantes.",
      enfoque:
        "Una categoría pensada para clientes que ya saben que necesitan filtración, pero todavía quieren ubicar mejor la línea, la aplicación o la referencia adecuada.",
      bullets: [
        "Control de partículas",
        "Mejora de calidad del aire",
        "Aplicaciones industriales y técnicas",
        "Soporte a procesos y equipos",
      ],
      seoTitle:
        "Filtración industrial para procesos que requieren mejor control del aire",
      seoText1:
        "Las soluciones de filtración industrial son clave en aplicaciones donde la presencia de partículas, residuos o contaminantes afecta el ambiente, el proceso o la continuidad de la operación.",
      seoText2:
        "Esta categoría funciona como un punto de entrada más claro para ubicar líneas, productos y referencias orientadas a procesos industriales, ambientes técnicos y aplicaciones donde la gestión del aire es importante.",
      ctaText:
        "Si necesitas una solución de filtración, podemos ayudarte a revisar la aplicación y orientar el paso hacia información o cotización.",
    },

    "ventilacion-industrial": {
      title:
        "Ventilación industrial | Extractores, ventiladores y soluciones de aire",
      description:
        "Consulta soluciones de ventilación industrial para extracción, renovación de aire y aplicaciones técnicas. Encuentra productos y apoyo comercial en Colombia.",
      intro:
        "Esta categoría reúne soluciones de ventilación industrial para extracción de aire, renovación de ambientes, control térmico y apoyo a procesos donde el flujo de aire es importante para la operación.",
      enfoque:
        "Una categoría pensada para clientes que ya saben que necesitan ventilación o extracción, pero quieren identificar mejor la línea o referencia adecuada.",
      bullets: [
        "Extracción de aire",
        "Renovación de ambientes",
        "Apoyo a procesos industriales",
        "Control operativo del flujo de aire",
      ],
      seoTitle:
        "Ventilación industrial para procesos que requieren mejor circulación y extracción",
      seoText1:
        "La ventilación industrial cumple un papel importante en talleres, bodegas, áreas técnicas y procesos donde la renovación de aire y la extracción ayudan a mejorar las condiciones operativas.",
      seoText2:
        "Esta categoría sirve como entrada comercial y técnica para ubicar mejor líneas de extractores, ventiladores y soluciones asociadas a necesidades de aire industrial.",
      ctaText:
        "Si necesitas una solución de ventilación, podemos ayudarte a validar la aplicación y llevarte a la línea correcta.",
    },

    "sistemas-de-aire-comprimido": {
      title:
        "Aire comprimido industrial | Compresores y sistemas para procesos industriales",
      description:
        "Consulta sistemas de aire comprimido industrial para procesos, talleres y aplicaciones técnicas. Encuentra productos y apoyo comercial en Colombia.",
      intro:
        "Esta categoría reúne soluciones de aire comprimido industrial orientadas a procesos productivos, herramientas neumáticas y aplicaciones donde la presión estable es importante para el desempeño del sistema.",
      enfoque:
        "Una categoría pensada para clientes que necesitan compresión o suministro de aire, pero aún quieren definir mejor la línea, la aplicación o la referencia.",
      bullets: [
        "Presión constante",
        "Apoyo a procesos productivos",
        "Herramientas y operación neumática",
        "Continuidad técnica del sistema",
      ],
      seoTitle:
        "Aire comprimido industrial para procesos que exigen presión y continuidad",
      seoText1:
        "Los sistemas de aire comprimido industrial son importantes en operaciones donde la continuidad del flujo y la estabilidad de la presión impactan directamente el rendimiento del proceso.",
      seoText2:
        "Esta categoría permite ordenar mejor la consulta para clientes que buscan compresores, líneas de aire comprimido o soluciones relacionadas con soporte neumático y operación técnica.",
      ctaText:
        "Si necesitas una solución de aire comprimido, podemos ayudarte a revisar la necesidad y avanzar a una cotización más clara.",
    },

    "pistolas-de-gravedad": {
      title:
        "Pistolas de gravedad industriales | Equipos de pintura para acabados técnicos",
      description:
        "Consulta pistolas de gravedad para pintura automotriz e industrial. Encuentra productos, líneas y apoyo comercial en Colombia.",
      intro:
        "Esta categoría agrupa soluciones de pistolas de gravedad para procesos de pintura donde se busca precisión, control de aplicación y acabados más uniformes.",
      enfoque:
        "Una categoría pensada para clientes que ya conocen la necesidad de pintura técnica o automotriz y quieren ubicar mejor la línea o referencia adecuada.",
      bullets: [
        "Aplicación controlada",
        "Acabados más uniformes",
        "Uso automotriz e industrial",
        "Apoyo a procesos de pintura",
      ],
      seoTitle:
        "Pistolas de gravedad para procesos de pintura con mejor precisión y acabado",
      seoText1:
        "Las pistolas de gravedad ayudan a mejorar el control en la aplicación del material y son una referencia importante en procesos de pintura automotriz e industrial.",
      seoText2:
        "Esta categoría permite organizar mejor la consulta para clientes que necesitan soluciones orientadas a cabinas de pintura, talleres y procesos donde el acabado es una prioridad.",
      ctaText:
        "Si necesitas una solución de pintura, podemos ayudarte a revisar la aplicación y orientar el paso hacia información o cotización.",
    },

    "equipos-para-lavaderos": {
      title:
        "Equipos para lavaderos | Soluciones para lavado automotriz e industrial",
      description:
        "Consulta equipos para lavaderos orientados a procesos de limpieza automotriz e industrial. Encuentra productos y apoyo comercial en Colombia.",
      intro:
        "Esta categoría reúne soluciones en equipos para lavaderos orientadas a procesos de limpieza, servicio automotriz y operaciones donde se requiere una línea más clara para lavado y mantenimiento.",
      enfoque:
        "Una categoría pensada para clientes que buscan una solución para lavaderos y quieren ubicar mejor la línea o referencia adecuada.",
      bullets: [
        "Lavado y limpieza técnica",
        "Apoyo a operación automotriz",
        "Procesos de servicio",
        "Organización de la consulta comercial",
      ],
      seoTitle:
        "Equipos para lavaderos para operaciones de limpieza más claras y funcionales",
      seoText1:
        "Los equipos para lavaderos ayudan a organizar mejor procesos de limpieza y mantenimiento en entornos automotrices y de servicio donde la operación requiere una línea más específica.",
      seoText2:
        "Esta categoría sirve como punto de entrada para ubicar mejor soluciones orientadas a lavado, acondicionamiento y apoyo operativo en procesos relacionados con vehículos o áreas técnicas.",
      ctaText:
        "Si necesitas una solución para lavadero, podemos ayudarte a validar la aplicación y orientar el siguiente paso comercial.",
    },
  };

  return (
    mapa[slug] ?? {
      title: `${nombre} | Catálogo técnico industrial`,
      description: `Consulta la categoría ${nombre} dentro de nuestro catálogo técnico industrial y encuentra productos, referencias y apoyo comercial en Colombia.`,
      intro: `Esta categoría agrupa productos y referencias relacionadas con ${nombre.toLowerCase()}, para facilitar una consulta más clara y una mejor organización del portafolio.`,
      enfoque:
        "Una categoría pensada para clientes que ya conocen la necesidad general, pero necesitan ubicar mejor la línea, el producto o la referencia adecuada.",
      bullets: [
        "Consulta técnica más clara",
        "Organización por categoría",
        "Mejor paso hacia producto",
        "Apoyo comercial disponible",
      ],
      seoTitle: `${nombre} dentro del catálogo técnico industrial`,
      seoText1:
        "Esta categoría funciona como un punto de entrada para consultar referencias relacionadas con la línea seleccionada y facilitar una búsqueda más ordenada.",
      seoText2:
        "Desde aquí el cliente puede revisar productos, validar una necesidad y avanzar hacia una conversación comercial o una cotización más precisa.",
      ctaText:
        "Si necesitas apoyo para revisar esta categoría, podemos ayudarte a orientar la consulta y avanzar hacia información o cotización.",
    }
  );
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const categorias = getCategoriasConProductos();
  const categoria = categorias.find((item) => item.slug === slug);

  if (!categoria) {
    return {
      title: "Categoría no encontrada",
      description: "La categoría solicitada no se encuentra disponible.",
    };
  }

  const seo = getCategoriaSeo(slug, categoria.nombre);
  const canonicalUrl = new URL(`/catalogo/${slug}`, SITE.url).toString();

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: canonicalUrl,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
    },
  };
}

export async function generateStaticParams() {
  const categorias = getCategoriasConProductos();

  return categorias.map((categoria) => ({
    slug: categoria.slug,
  }));
}

export default async function CatalogoCategoriaPage({ params }: PageProps) {
  const { slug } = await params;

  const categorias = getCategoriasConProductos();
  const categoria = categorias.find((item) => item.slug === slug);

  if (!categoria) {
    notFound();
  }

  const productos = getProductosPorCategoria(
    slug as Parameters<typeof getProductosPorCategoria>[0]
  );
  const seo = getCategoriaSeo(slug, categoria.nombre);

  const whatsappGeneralHref = getWhatsappUrl(
    `Hola, quiero información sobre la categoría ${categoria.nombre}.`
  );

  const whatsappAplicacionHref = getWhatsappUrl(
    `Hola, quiero validar una aplicación o necesidad relacionada con ${categoria.nombre}.`
  );

  const whatsappCotizacionHref = getWhatsappUrl(
    `Hola, quiero solicitar una cotización de productos de la categoría ${categoria.nombre}.`
  );

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
                {categoria.nombre}
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                {seo.intro}
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
                {seo.bullets.map((item) => (
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
                        {seo.enfoque}
                      </p>
                    </div>

                    <div className="grid gap-4">
                      <div className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm">
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                          Productos en esta categoría
                        </p>
                        <p className="mt-2 text-2xl font-bold text-slate-950">
                          {productos.length}
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
                          Categoría activa
                        </div>

                        <h3 className="mt-6 text-3xl font-black leading-tight text-white">
                          {categoria.nombre}
                        </h3>

                        <p className="mt-4 text-sm leading-7 text-white/90">
                          {categoria.descripcion}
                        </p>
                      </div>

                      <div className="space-y-3">
                        <a
                          href={whatsappAplicacionHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white backdrop-blur-sm transition hover:bg-white/20"
                        >
                          Validar aplicación
                        </a>

                        <a
                          href={whatsappCotizacionHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white backdrop-blur-sm transition hover:bg-white/20"
                        >
                          Solicitar cotización
                        </a>

                        <Link
                          href="/catalogo"
                          className="block rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white backdrop-blur-sm transition hover:bg-white/20"
                        >
                          Volver al catálogo
                        </Link>
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
                  {categoria.nombre}
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
                Portafolio por categoría
              </span>

              <h2 className="mt-5 text-3xl font-extrabold text-slate-950 md:text-4xl">
                {seo.seoTitle}
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                {seo.seoText1}
              </p>

              <p className="mt-4 text-base leading-8 text-slate-600">
                {seo.seoText2}
              </p>
            </div>

            <div className="rounded-[30px] border border-slate-200 bg-[#F8FAFC] p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0E56B5]">
                Resumen de la categoría
              </p>

              <div className="mt-5 space-y-3">
                <div className="flex items-start gap-3 rounded-[22px] border border-slate-200 bg-white p-4">
                  <FolderKanban className="mt-0.5 h-5 w-5 flex-none text-[#19B5F1]" />
                  <p className="text-sm leading-7 text-slate-600">
                    Categoría: {categoria.nombre}
                  </p>
                </div>

                <div className="flex items-start gap-3 rounded-[22px] border border-slate-200 bg-white p-4">
                  <Tag className="mt-0.5 h-5 w-5 flex-none text-[#19B5F1]" />
                  <p className="text-sm leading-7 text-slate-600">
                    Productos disponibles: {productos.length}
                  </p>
                </div>

                <div className="flex items-start gap-3 rounded-[22px] border border-slate-200 bg-white p-4">
                  <LibraryBig className="mt-0.5 h-5 w-5 flex-none text-[#19B5F1]" />
                  <p className="text-sm leading-7 text-slate-600">
                    Consulta técnica más clara y mejor paso hacia cotización
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F4F7FB] py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#0E56B5] shadow-sm">
              Productos de la categoría
            </span>
            <h2 className="mt-5 text-3xl font-extrabold text-slate-950 md:text-4xl">
              Referencias disponibles en {categoria.nombre}
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Revisa productos relacionados con esta categoría y avanza a una
              consulta más específica si ya tienes una línea o referencia en mente.
            </p>
          </div>

          {productos.length > 0 ? (
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {productos.map((producto) => (
                <Link
                  key={producto.id}
                  href={`/catalogo/${producto.categoria}/${producto.slug}`}
                  className="group rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative rounded-[22px] border border-slate-200 bg-slate-50 p-4">
                    <div className="relative h-48 w-full">
                      <Image
                        src={producto.imagen}
                        alt={producto.nombre}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      />
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {producto.codigo ? (
                      <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-600">
                        {producto.codigo}
                      </span>
                    ) : null}

                    <span className="rounded-full border border-[#19B5F1]/20 bg-[#19B5F1]/10 px-3 py-1 text-xs font-semibold text-[#0E56B5]">
                      {capitalizar(slug)}
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl font-bold text-slate-950">
                    {producto.nombre}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {producto.descripcion ?? "Producto técnico disponible en esta categoría."}
                  </p>

                  <div className="mt-6 inline-flex items-center font-semibold text-[#0E56B5]">
                    Ver producto
                    <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="mt-10 rounded-[30px] border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-950">
                No hay productos publicados todavía en esta categoría
              </h3>
              <p className="mt-4 text-base leading-8 text-slate-600">
                Si necesitas orientación sobre esta línea, podemos ayudarte a
                validar la aplicación y llevarte a una conversación comercial más clara.
              </p>

              <div className="mt-6">
                <a
                  href={whatsappGeneralHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl bg-[#25D366] px-6 py-4 text-base font-semibold text-white shadow-lg shadow-[#25D366]/30 transition hover:bg-[#1EBE5D]"
                >
                  Hablar por WhatsApp
                  <MessageCircle className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          )}
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
                  "Empieza por la categoría si ya sabes la necesidad general.",
                  "Revisa los productos disponibles para ubicar mejor la línea.",
                  "Valida la aplicación si todavía no tienes clara la referencia.",
                  "Avanza a cotización cuando la necesidad ya esté definida.",
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
                Si necesitas apoyo para revisar esta categoría, también podemos orientarte
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                {seo.ctaText}
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

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="overflow-hidden rounded-[36px] bg-[linear-gradient(135deg,#093A7A_0%,#0E56B5_58%,#19B5F1_100%)] px-8 py-12 text-white shadow-2xl shadow-blue-950/20 md:px-12 md:py-16">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
                  Categoría del catálogo
                </p>
                <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
                  Si ya conoces la categoría, este es el mejor punto para seguir
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