import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  FolderKanban,
  MessageCircle,
  ShieldCheck,
  Tag,
  Wrench,
} from "lucide-react";

import {
  getCategoriasConProductos,
  getProductoPorSlug,
  getProductosPorCategoria,
} from "@/data/productos";
import { getWhatsappUrl } from "@/lib/site";

type PageProps = {
  params: Promise<{
    slug: string;
    id: string;
  }>;
};

function getProductoSeo(categoriaSlug: string, nombre: string, descripcion: string) {
  const base = {
    title: `${nombre} | Producto industrial`,
    description:
      descripcion?.trim() ||
      `Consulta ${nombre}, una referencia de nuestro catálogo técnico industrial con apoyo comercial y orientación para cotización en Colombia.`,
    intro: `Esta referencia forma parte de nuestro catálogo técnico industrial y está orientada a clientes que buscan una solución más precisa dentro de la categoría seleccionada.`,
    enfoque:
      "La ficha de producto permite revisar mejor la referencia, entender su papel dentro de la categoría y facilitar el paso hacia una consulta o cotización.",
    bullets: [
      "Consulta técnica más clara",
      "Referencia asociada a una categoría real",
      "Apoyo comercial disponible",
      "Paso directo a cotización",
    ],
    seoTitle: `${nombre} dentro del catálogo técnico industrial`,
    seoText1:
      "Esta referencia está organizada para facilitar una lectura más útil del portafolio, especialmente cuando el cliente ya reconoce la necesidad general y quiere profundizar en un producto específico.",
    seoText2:
      "La ficha conecta la referencia con su categoría y con el canal comercial, para que el paso hacia información o cotización sea más claro.",
    ctaText:
      "Si necesitas apoyo para revisar esta referencia, podemos ayudarte a validar la aplicación y orientar el siguiente paso comercial.",
  };

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
      title: `${nombre} | Filtración industrial`,
      description:
        descripcion?.trim() ||
        `Consulta ${nombre}, una referencia de filtración industrial para aplicaciones de aire, partículas y procesos técnicos en Colombia.`,
      intro:
        "Esta referencia pertenece a la categoría de filtración industrial y está orientada a consultas donde la calidad del aire, el control de partículas o la protección del proceso son relevantes.",
      enfoque:
        "La ficha ayuda a entender mejor el papel del producto dentro de una necesidad de filtración industrial y facilita una conversación comercial más precisa.",
      bullets: [
        "Referencia dentro de filtración industrial",
        "Consulta técnica más clara",
        "Relación directa con la categoría",
        "Paso ágil hacia cotización",
      ],
      seoTitle: `${nombre} dentro de la categoría de filtración industrial`,
      seoText1:
        "Esta referencia forma parte de una línea pensada para aplicaciones donde el control del aire o de partículas influye en el ambiente, el proceso o el desempeño del sistema.",
      seoText2:
        "La ficha organiza mejor la consulta para clientes que ya están evaluando una opción específica dentro de la categoría de filtración industrial.",
      ctaText:
        "Si necesitas validar la aplicación de esta referencia, podemos ayudarte a revisar la necesidad y orientar el siguiente paso.",
    },

    "ventilacion-industrial": {
      title: `${nombre} | Ventilación industrial`,
      description:
        descripcion?.trim() ||
        `Consulta ${nombre}, una referencia de ventilación industrial para extracción, renovación y movimiento de aire en Colombia.`,
      intro:
        "Esta referencia pertenece a la categoría de ventilación industrial y está orientada a consultas donde la extracción, la renovación del aire o el soporte a procesos operativos son relevantes.",
      enfoque:
        "La ficha ayuda a entender mejor el papel del producto dentro de una necesidad de ventilación y facilita una conversación comercial más precisa.",
      bullets: [
        "Referencia dentro de ventilación industrial",
        "Consulta técnica más clara",
        "Relación directa con la categoría",
        "Paso ágil hacia cotización",
      ],
      seoTitle: `${nombre} dentro de la categoría de ventilación industrial`,
      seoText1:
        "Esta referencia forma parte de una línea pensada para aplicaciones donde el flujo de aire, la extracción o la renovación ayudan a mejorar las condiciones operativas.",
      seoText2:
        "La ficha organiza mejor la consulta para clientes que ya están evaluando una opción específica dentro de la categoría de ventilación industrial.",
      ctaText:
        "Si necesitas validar la aplicación de esta referencia, podemos ayudarte a revisar la necesidad y orientar el siguiente paso.",
    },

    "sistemas-de-aire-comprimido": {
      title: `${nombre} | Aire comprimido industrial`,
      description:
        descripcion?.trim() ||
        `Consulta ${nombre}, una referencia de aire comprimido industrial para procesos, talleres y aplicaciones técnicas en Colombia.`,
      intro:
        "Esta referencia pertenece a la categoría de aire comprimido industrial y está orientada a consultas donde la presión constante, la continuidad del sistema o el soporte neumático son relevantes.",
      enfoque:
        "La ficha ayuda a entender mejor el papel del producto dentro de una necesidad de aire comprimido y facilita una conversación comercial más precisa.",
      bullets: [
        "Referencia dentro de aire comprimido industrial",
        "Consulta técnica más clara",
        "Relación directa con la categoría",
        "Paso ágil hacia cotización",
      ],
      seoTitle: `${nombre} dentro de la categoría de aire comprimido industrial`,
      seoText1:
        "Esta referencia forma parte de una línea pensada para aplicaciones donde la presión y la continuidad del flujo influyen en el resultado del proceso.",
      seoText2:
        "La ficha organiza mejor la consulta para clientes que ya están evaluando una opción específica dentro de la categoría de aire comprimido industrial.",
      ctaText:
        "Si necesitas validar la aplicación de esta referencia, podemos ayudarte a revisar la necesidad y orientar el siguiente paso.",
    },

    "pistolas-de-gravedad": {
      title: `${nombre} | Pistolas de gravedad industriales`,
      description:
        descripcion?.trim() ||
        `Consulta ${nombre}, una referencia de pistolas de gravedad para pintura automotriz e industrial en Colombia.`,
      intro:
        "Esta referencia pertenece a la categoría de pistolas de gravedad y está orientada a consultas donde la aplicación de pintura, la uniformidad del acabado y la precisión técnica son importantes.",
      enfoque:
        "La ficha ayuda a entender mejor el papel del producto dentro de una necesidad de pintura y facilita una conversación comercial más precisa.",
      bullets: [
        "Referencia dentro de pistolas de gravedad",
        "Consulta técnica más clara",
        "Relación directa con la categoría",
        "Paso ágil hacia cotización",
      ],
      seoTitle: `${nombre} dentro de la categoría de pistolas de gravedad`,
      seoText1:
        "Esta referencia forma parte de una línea pensada para aplicaciones donde el control de la pintura y la calidad del acabado influyen en el resultado final.",
      seoText2:
        "La ficha organiza mejor la consulta para clientes que ya están evaluando una opción específica dentro de la categoría de pintura técnica.",
      ctaText:
        "Si necesitas validar la aplicación de esta referencia, podemos ayudarte a revisar la necesidad y orientar el siguiente paso.",
    },
  };

  return mapa[categoriaSlug] ?? base;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug, id } = await params;
  const producto = getProductoPorSlug(
    slug as Parameters<typeof getProductoPorSlug>[0],
    id
  );

  if (!producto) {
    return {
      title: "Producto no encontrado",
      description: "El producto solicitado no se encuentra disponible.",
    };
  }

  const seo = getProductoSeo(
    slug,
    producto.nombre,
    producto.descripcion || ""
  );

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: `/catalogo/${slug}/${id}`,
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: `/catalogo/${slug}/${id}`,
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

  return categorias.flatMap((categoria) =>
    getProductosPorCategoria(categoria.slug).map((producto) => ({
      slug: categoria.slug,
      id: producto.slug,
    }))
  );
}

export default async function ProductoPage({ params }: PageProps) {
  const { slug, id } = await params;

  const producto = getProductoPorSlug(
    slug as Parameters<typeof getProductoPorSlug>[0],
    id
  );

  if (!producto) {
    notFound();
  }

  const relacionados = getProductosPorCategoria(
    slug as Parameters<typeof getProductosPorCategoria>[0]
  )
    .filter((item) => item.slug !== producto.slug)
    .slice(0, 6);

  const seo = getProductoSeo(
    slug,
    producto.nombre,
    producto.descripcion || ""
  );

  const whatsappGeneralHref = getWhatsappUrl(
    `Hola, quiero información sobre el producto ${producto.nombre}.`
  );

  const whatsappAplicacionHref = getWhatsappUrl(
    `Hola, quiero validar si ${producto.nombre} se ajusta a mi aplicación.`
  );

  const whatsappCotizacionHref = getWhatsappUrl(
    `Hola, quiero solicitar una cotización de ${producto.nombre}.`
  );

  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
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
                Producto del catálogo
              </div>

              <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-950 md:text-5xl xl:text-6xl">
                {producto.nombre}
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                {producto.descripcion || seo.intro}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {producto.codigo ? (
                  <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700">
                    Código: {producto.codigo}
                  </span>
                ) : null}

                <span className="rounded-full border border-[#19B5F1]/20 bg-[#19B5F1]/10 px-4 py-2 text-sm font-semibold text-[#0E56B5]">
                  Categoría: {producto.categoria}
                </span>
              </div>

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
                  href={`/catalogo/${slug}`}
                  className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-6 py-4 text-base font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
                >
                  Volver a la categoría
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
                        Enfoque de la referencia
                      </p>
                      <h2 className="mt-4 text-3xl font-black leading-tight text-slate-950">
                        Una ficha pensada para consulta clara y apoyo comercial
                      </h2>
                      <p className="mt-4 text-sm leading-7 text-slate-600">
                        {seo.enfoque}
                      </p>
                    </div>

                    <div className="grid gap-4">
                      <div className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm">
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                          Categoría
                        </p>
                        <p className="mt-2 text-lg font-bold text-slate-950">
                          {producto.categoria}
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
                          Referencia activa
                        </div>

                        <h3 className="mt-6 text-3xl font-black leading-tight text-white">
                          {producto.nombre}
                        </h3>

                        <p className="mt-4 text-sm leading-7 text-white/90">
                          {producto.descripcion || "Producto técnico del catálogo industrial."}
                        </p>
                      </div>

                      <div className="space-y-3">
                        {producto.codigo ? (
                          <div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white backdrop-blur-sm">
                            Código: {producto.codigo}
                          </div>
                        ) : null}

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
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-2 hidden rounded-[24px] border border-slate-200 bg-white px-5 py-4 shadow-xl md:block">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Producto
                </p>
                <p className="mt-1 text-sm font-bold text-slate-950">
                  {producto.nombre}
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
                Ficha del producto
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
                Resumen de la referencia
              </p>

              <div className="mt-5 space-y-3">
                <div className="flex items-start gap-3 rounded-[22px] border border-slate-200 bg-white p-4">
                  <FileText className="mt-0.5 h-5 w-5 flex-none text-[#19B5F1]" />
                  <p className="text-sm leading-7 text-slate-600">
                    Producto: {producto.nombre}
                  </p>
                </div>

                <div className="flex items-start gap-3 rounded-[22px] border border-slate-200 bg-white p-4">
                  <FolderKanban className="mt-0.5 h-5 w-5 flex-none text-[#19B5F1]" />
                  <p className="text-sm leading-7 text-slate-600">
                    Categoría: {producto.categoria}
                  </p>
                </div>

                {producto.codigo ? (
                  <div className="flex items-start gap-3 rounded-[22px] border border-slate-200 bg-white p-4">
                    <Tag className="mt-0.5 h-5 w-5 flex-none text-[#19B5F1]" />
                    <p className="text-sm leading-7 text-slate-600">
                      Código: {producto.codigo}
                    </p>
                  </div>
                ) : null}

                <div className="flex items-start gap-3 rounded-[22px] border border-slate-200 bg-white p-4">
                  <Wrench className="mt-0.5 h-5 w-5 flex-none text-[#19B5F1]" />
                  <p className="text-sm leading-7 text-slate-600">
                    Referencia lista para consulta, validación y cotización
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DESCRIPCIÓN / CONTENIDO */}
      <section className="bg-[#F4F7FB] py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-3xl font-extrabold text-slate-950 md:text-4xl">
                Información del producto
              </h2>

              <div className="mt-6 space-y-4 text-base leading-8 text-slate-600">
                <p>
                  {producto.descripcion ||
                    "Esta referencia forma parte del catálogo técnico industrial y está organizada para facilitar una consulta más clara y una mejor transición hacia información o cotización."}
                </p>
                <p>
                  Si ya reconoces esta línea o producto dentro de tu operación,
                  esta ficha te ayuda a ubicarlo dentro de su categoría y a dar
                  el siguiente paso comercial de forma más ordenada.
                </p>
                <p>
                  Cuando la necesidad aún requiere validación, puedes apoyarte en
                  nuestro canal comercial para revisar aplicación, línea adecuada
                  o compatibilidad general según tu consulta.
                </p>
              </div>
            </div>

            <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0E56B5]">
                Qué puedes hacer desde aquí
              </p>

              <div className="mt-5 space-y-4">
                {[
                  "Revisar la referencia dentro de su categoría",
                  "Validar si se ajusta a tu aplicación",
                  "Solicitar apoyo para orientación comercial",
                  "Avanzar a una cotización más clara",
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
          </div>
        </div>
      </section>

      {/* RELACIONADOS */}
      {relacionados.length > 0 ? (
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <div className="max-w-3xl">
              <span className="inline-flex rounded-full bg-[#EAF6FE] px-4 py-2 text-sm font-semibold text-[#0E56B5]">
                Productos relacionados
              </span>
              <h2 className="mt-5 text-3xl font-extrabold text-slate-950 md:text-4xl">
                Otras referencias de la misma categoría
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Estas referencias ayudan a comparar opciones dentro de la misma
                categoría y fortalecen la navegación técnica del catálogo.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {relacionados.map((item) => (
                <Link
                  key={item.id}
                  href={`/catalogo/${item.categoria}/${item.slug}`}
                  className="group rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="rounded-[22px] border border-slate-200 bg-slate-50 p-4">
                    <img
                      src={item.imagen}
                      alt={item.nombre}
                      className="h-48 w-full object-contain"
                    />
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.codigo ? (
                      <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-600">
                        {item.codigo}
                      </span>
                    ) : null}

                    <span className="rounded-full border border-[#19B5F1]/20 bg-[#19B5F1]/10 px-3 py-1 text-xs font-semibold text-[#0E56B5]">
                      Relacionado
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl font-bold text-slate-950">
                    {item.nombre}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.descripcion}
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
                Cómo avanzar
              </p>
              <h2 className="mt-3 text-2xl font-black text-slate-950">
                Una ruta más clara para consulta, validación y cotización
              </h2>

              <div className="mt-6 space-y-4">
                {[
                  "Revisa esta ficha si ya reconoces la referencia o la línea.",
                  "Valida la aplicación si todavía tienes dudas sobre el uso.",
                  "Compara otros productos relacionados en la misma categoría.",
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
                Si necesitas validar esta referencia, también podemos orientarte
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
                  href={`/catalogo/${slug}`}
                  className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
                >
                  Ver categoría
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>

                <Link
                  href="/catalogo"
                  className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
                >
                  Ver catálogo
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
          <div className="overflow-hidden rounded-[36px] bg-[linear-gradient(135deg,#093A7A_0%,#0E56B5_58%,#19B5F1_100%)] px-8 py-12 text-white shadow-2xl shadow-blue-950/20 md:px-12 md:py-16">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
                  Producto del catálogo
                </p>
                <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
                  Si esta referencia se parece a tu necesidad, te ayudamos a validarla
                </h2>
                <p className="mt-4 text-lg leading-8 text-white/90">
                  Podemos ayudarte a revisar la aplicación, comparar alternativas
                  y orientar el paso hacia información o cotización.
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
                  href={`/catalogo/${slug}`}
                  className="inline-flex items-center justify-center rounded-2xl border border-white/30 px-6 py-4 font-semibold text-white transition hover:bg-white/10"
                >
                  Volver a la categoría
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