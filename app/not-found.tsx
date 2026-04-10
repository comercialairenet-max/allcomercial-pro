// app/not-found.tsx

import Link from "next/link";
import { ArrowLeft, Home, MessageCircle, Search, TriangleAlert } from "lucide-react";

import { SITE, getWhatsappUrl } from "@/lib/site";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

export default function NotFoundPage() {
  const whatsappHref = getWhatsappUrl(
    "Hola, no encontré la página que buscaba y necesito ayuda para ubicar una categoría o producto."
  );

  return (
    <>
      <SiteHeader />

      <main className="bg-white text-slate-900">
        <section className="relative isolate overflow-hidden border-b border-slate-200 bg-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.10),transparent_28%),radial-gradient(circle_at_left,rgba(59,130,246,0.07),transparent_24%)]" />
          <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] [background-size:42px_42px]" />

          <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-8 lg:py-28">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-3xl border border-orange-200 bg-orange-50 text-orange-700 shadow-sm">
                <TriangleAlert className="h-8 w-8" />
              </div>

              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.24em] text-orange-600">
                Error 404
              </p>

              <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
                Esta página no existe o ya no está disponible
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
                Puede que el enlace haya cambiado, que la página ya no esté activa o que la ruta esté mal escrita.
                Puedes volver al catálogo, ir al inicio o escribirnos por WhatsApp para ayudarte a ubicar el producto o la categoría correcta.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
                <Link href="/" className="btn-outline">
                  <Home className="h-4 w-4" />
                  Ir al inicio
                </Link>

                <Link href="/catalogo" className="btn-secondary">
                  <Search className="h-4 w-4" />
                  Ver catálogo
                </Link>

                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                >
                  <MessageCircle className="h-4 w-4" />
                  Pedir ayuda por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 md:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="card">
              <h2 className="text-xl font-bold text-slate-950">Volver al catálogo</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Revisa las categorías principales y navega desde una ruta clara.
              </p>
              <div className="mt-6">
                <Link href="/catalogo" className="inline-flex items-center gap-2 text-sm font-semibold text-orange-700">
                  Ir al catálogo
                  <ArrowLeft className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="card">
              <h2 className="text-xl font-bold text-slate-950">Buscar un producto</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Usa el catálogo para encontrar referencias por categoría, línea o aplicación.
              </p>
              <div className="mt-6">
                <Link href="/catalogo" className="inline-flex items-center gap-2 text-sm font-semibold text-orange-700">
                  Explorar categorías
                  <ArrowLeft className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="card">
              <h2 className="text-xl font-bold text-slate-950">Hablar con asesoría</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Si no sabes cómo volver a la referencia correcta, te ayudamos por WhatsApp.
              </p>
              <div className="mt-6">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-orange-700"
                >
                  Abrir WhatsApp
                  <ArrowLeft className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-slate-200 bg-slate-950">
          <div className="mx-auto max-w-7xl px-6 py-20 md:px-8">
            <div className="overflow-hidden rounded-[34px] border border-blue-400/20 bg-gradient-to-r from-blue-900 via-blue-700 to-slate-800 p-8 text-white shadow-2xl shadow-blue-950/40 lg:p-12">
              <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-200">
                    Ruta recomendada
                  </p>
                  <h2 className="mt-4 text-3xl font-black tracking-tight md:text-4xl">
                    Te ayudamos a volver al camino correcto
                  </h2>
                  <p className="mt-5 max-w-2xl text-base leading-7 text-slate-200 md:text-lg">
                    Si estabas buscando una categoría o un producto específico y no lo encontraste, escríbenos y te ayudamos a ubicarlo dentro del catálogo.
                  </p>
                </div>

                <div className="flex flex-col gap-4 lg:items-end">
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Hablar por WhatsApp
                  </a>

                  <Link
                    href="/catalogo"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/15"
                  >
                    Ir al catálogo
                    <ArrowLeft className="h-4 w-4" />
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