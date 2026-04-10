// app/buscar/page.tsx
import { Suspense } from "react";
import type { Metadata } from "next";
import BuscadorCliente from "./BuscadorCliente";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Buscar productos | AllComercial Online",
  description:
    "Busca productos del catálogo técnico industrial por nombre, código o categoría.",
};

export default function BuscarPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-8 lg:py-20">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full bg-[#EAF6FE] px-4 py-2 text-sm font-semibold text-[#0E56B5]">
            Búsqueda del catálogo
          </span>

          <h1 className="mt-5 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
            Buscar productos
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Encuentra referencias por nombre, código o categoría dentro del catálogo.
          </p>
        </div>

        <Suspense
          fallback={
            <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm text-slate-600">Cargando buscador...</p>
            </div>
          }
        >
          <BuscadorCliente />
        </Suspense>
      </section>
    </main>
  );
}