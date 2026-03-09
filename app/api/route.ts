import { NextResponse } from "next/server";
import { productos } from "@/data/productos";

export async function GET(req: Request) {

  const { searchParams } = new URL(req.url);
  const q = (searchParams.get("q") || "").toLowerCase().trim();

  if (!q) {
    return NextResponse.json([]);
  }

  const resultados = productos.filter((p) => {

    const texto = `
      ${p.nombre}
      ${p.descripcion || ""}
      ${p.codigo || ""}
      ${p.marca || ""}
      ${p.categoria || ""}
    `.toLowerCase();

    return texto.includes(q);

  }).slice(0, 20);

  return NextResponse.json(resultados);

}