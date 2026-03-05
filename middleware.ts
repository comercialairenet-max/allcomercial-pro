import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = {
  matcher: ["/((?!_next|favicon.ico|robots.txt|sitemap.xml|api).*)"],
};

export function middleware(req: NextRequest) {
  // Desactivado completamente
  return NextResponse.next();
}