// app/soluciones/[slug]/page.tsx

import { notFound } from "next/navigation";
import Link from "next/link";
import { getProductosPorSolucion, getSolucionPorSlug, soluciones } from "@/data/soluciones";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return soluciones.map((solucion) => ({
    slug: solucion.slug,
  }));
}

export default async function SolucionDetallePage({ params }: PageProps) {
  const { slug } = await params;

  const solucion = getSolucionPorSlug(slug);

  if (!solucion) {
    notFound();
  }

  const productos = getProductosPorSolucion(slug);

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <p className="text-sm text-slate-500">Slug detectado: {slug}</p>

      <h1 className="mt-4 text-4xl font-black text-slate-950">
        {solucion.nombre}
      </h1>

      <p className="mt-4 text-lg text-slate-600">
        {solucion.descripcion}
      </p>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border p-5">
          <h2 className="font-bold">Problema</h2>
          <p className="mt-2 text-slate-600">{solucion.problema}</p>
        </div>

        <div className="rounded-xl border p-5">
          <h2 className="font-bold">Beneficio</h2>
          <p className="mt-2 text-slate-600">{solucion.beneficio}</p>
        </div>
      </div>

      <h2 className="mt-12 text-2xl font-bold">Productos encontrados</h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {productos.map((producto) => (
          <Link
            key={producto.id}
            href={`/catalogo/${producto.categoria}/${producto.slug}`}
            className="rounded-xl border p-4 hover:shadow-lg"
          >
            <p className="text-sm text-slate-500">{producto.codigo ?? "Sin código"}</p>
            <h3 className="mt-2 font-bold">{producto.nombre}</h3>
            <p className="mt-2 text-sm text-slate-600">{producto.descripcion}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}