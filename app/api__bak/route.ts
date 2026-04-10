// app/api/route.ts
export const dynamic = "force-static";

export async function GET() {
  return Response.json({
    ok: true,
    site: "AllComercial Online",
  });
}