// components/site-chrome.tsx

"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Clock3,
  Layers3,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Search,
  X,
} from "lucide-react";

import { SITE, getWhatsappUrl } from "@/lib/site";
import {
  categoriasMeta,
  getProductoPorSlug,
} from "@/data/productos";

const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Catálogo", href: "/catalogo" },
  { label: "Filtración", href: "/catalogo/filtracion-industrial" },
  { label: "Asesoría", href: "/asesoria" },
  { label: "Contacto", href: "/contacto" },
];

function formatLabel(text: string) {
  return text
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function getCategoryLabel(slug: string) {
  return (
    categoriasMeta[slug as keyof typeof categoriasMeta]?.nombre ??
    formatLabel(slug)
  );
}

function isNavActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  if (href === "/catalogo") {
    return pathname === "/catalogo" || pathname.startsWith("/catalogo/");
  }
  return pathname === href;
}

function getHeaderContext(pathname: string) {
  if (!pathname || pathname === "/") {
    return {
      section: "Inicio",
      title: "Soluciones industriales con mejor estructura comercial",
      subtitle:
        "Explora categorías, productos y rutas claras hacia una cotización útil.",
    };
  }

  if (pathname === "/catalogo") {
    return {
      section: "Catálogo",
      title: "Catálogo industrial organizado para vender mejor",
      subtitle:
        "Encuentra categorías, productos destacados y rutas más claras hacia WhatsApp.",
    };
  }

  if (pathname === "/catalogo/filtracion-industrial") {
    return {
      section: "Filtración",
      title: "Filtración industrial",
      subtitle:
        "Landing SEO enfocada en soluciones de filtración y contacto comercial.",
    };
  }

  if (pathname.startsWith("/catalogo/")) {
    const segments = pathname.split("/").filter(Boolean);

    // /catalogo/categoria/producto
    if (segments.length >= 3) {
      const categoria = segments[1];
      const productoSlug = segments[2];
      const producto = getProductoPorSlug(
        categoria as keyof typeof categoriasMeta,
        productoSlug
      );

      if (producto) {
        return {
          section: "Producto",
          title: producto.nombre,
          subtitle:
            "Ficha orientada a explicar, comparar y convertir en una cotización útil.",
        };
      }

      return {
        section: "Producto",
        title: "Detalle de producto",
        subtitle:
          "Consulta información del producto y avanza a contacto comercial.",
      };
    }

    // /catalogo/categoria
    if (segments.length === 2) {
      const slug = segments[1];
      const categoryName = getCategoryLabel(slug);

      return {
        section: "Categoría",
        title: categoryName,
        subtitle:
          "Revisa referencias, destacados y productos de esta línea del catálogo.",
      };
    }
  }

  if (pathname === "/asesoria") {
    return {
      section: "Asesoría",
      title: "Asesoría técnica y comercial",
      subtitle:
        "Te ayudamos a elegir la categoría o solución correcta dentro del catálogo.",
    };
  }

  if (pathname === "/contacto") {
    return {
      section: "Contacto",
      title: "Contacto y cotización",
      subtitle:
        "Ruta directa para resolver dudas y convertirlas en una conversación útil.",
    };
  }

  if (pathname === "/buscar") {
    return {
      section: "Buscar",
      title: "Búsqueda global del catálogo",
      subtitle:
        "Encuentra productos por nombre, código y categoría.",
    };
  }

  return {
    section: "Sitio",
    title: SITE.shortName,
    subtitle: "Catálogo industrial con enfoque técnico y comercial.",
  };
}

function SearchForm({
  placeholder,
  onSubmitDone,
  className = "",
}: {
  placeholder: string;
  onSubmitDone?: () => void;
  className?: string;
}) {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const q = searchValue.trim();

    if (!q) {
      router.push("/buscar");
      onSubmitDone?.();
      return;
    }

    router.push(`/buscar?q=${encodeURIComponent(q)}`);
    onSubmitDone?.();
  }

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-3 py-2 shadow-sm">
        <Search className="h-4 w-4 flex-none text-slate-500" />
        <label htmlFor={placeholder} className="sr-only">
          Buscar en el catálogo
        </label>
        <input
          id={placeholder}
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder={placeholder}
          className="w-full border-0 bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
        />
        {searchValue ? (
          <button
            type="button"
            onClick={() => setSearchValue("")}
            className="inline-flex h-8 w-8 items-center justify-center rounded-xl text-slate-400 transition hover:bg-slate-50 hover:text-slate-700"
            aria-label="Limpiar búsqueda"
          >
            <X className="h-4 w-4" />
          </button>
        ) : null}
      </div>
    </form>
  );
}

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname() || "/";
  const context = useMemo(() => getHeaderContext(pathname), [pathname]);

  const whatsappHref = getWhatsappUrl(
    "Hola, quiero recibir información comercial sobre una solución industrial."
  );

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl">
      <div className="hidden border-b border-slate-200 bg-slate-50/80 lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs text-slate-600 md:px-8">
          <div className="flex items-center gap-4">
            <a
              href={`tel:+57${SITE.company.phoneRaw}`}
              className="inline-flex items-center gap-2 transition hover:text-slate-950"
            >
              <Phone className="h-3.5 w-3.5" />
              {SITE.company.phoneDisplay}
            </a>

            <a
              href={`mailto:${SITE.company.email}`}
              className="inline-flex items-center gap-2 transition hover:text-slate-950"
            >
              <Mail className="h-3.5 w-3.5" />
              {SITE.company.email}
            </a>
          </div>

          <div className="inline-flex items-center gap-2 text-slate-500">
            <MapPin className="h-3.5 w-3.5" />
            {SITE.company.city}, {SITE.company.country}
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 md:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <div
            className="flex h-11 w-11 items-center justify-center rounded-2xl text-white shadow-lg"
            style={{ background: SITE.branding.primaryColor }}
          >
            <Layers3 className="h-5 w-5" />
          </div>

          <div className="min-w-0">
            <p className="truncate text-base font-black tracking-tight text-slate-950">
              {SITE.shortName}
            </p>
            <p className="truncate text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Portafolio industrial
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-3 xl:flex">
          {navItems.map((item) => {
            const active = isNavActive(pathname, item.href);

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`rounded-2xl px-4 py-2 text-sm font-semibold transition ${
                  active
                    ? "bg-blue-50 text-blue-900"
                    : "text-slate-700 hover:bg-slate-50 hover:text-slate-950"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden min-w-[300px] max-w-[420px] flex-1 xl:block">
          <SearchForm
            placeholder="Buscar productos, códigos o categorías..."
            className="w-full"
          />
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href={whatsappHref}
            className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
            style={{ background: SITE.branding.primaryColor }}
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </Link>
        </div>

        <button
          type="button"
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setMobileOpen((prev) => !prev)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 text-slate-700 transition hover:bg-slate-50 lg:hidden"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div className="border-t border-slate-200 bg-white/90">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-3 md:px-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="min-w-0">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-orange-600">
              {context.section}
            </p>
            <p className="truncate text-sm font-bold text-slate-950 md:text-base">
              {context.title}
            </p>
            <p className="truncate text-xs text-slate-500 md:text-sm">
              {context.subtitle}
            </p>
          </div>

          <div className="hidden w-full max-w-[360px] lg:block xl:hidden">
            <SearchForm
              placeholder="Buscar en el catálogo..."
              className="w-full"
            />
          </div>
        </div>
      </div>

      {mobileOpen ? (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="mx-auto max-w-7xl px-6 py-4 md:px-8">
            <div className="mb-4">
              <SearchForm
                placeholder="Buscar productos o categorías..."
                onSubmitDone={() => setMobileOpen(false)}
                className="w-full"
              />
            </div>

            <div className="grid gap-2">
              {navItems.map((item) => {
                const active = isNavActive(pathname, item.href);

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`rounded-2xl border px-4 py-3 text-sm font-semibold transition ${
                      active
                        ? "border-blue-200 bg-blue-50 text-blue-900"
                        : "border-slate-200 bg-white text-slate-800 hover:bg-slate-50"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            <div className="mt-4 grid gap-3">
              <Link
                href={whatsappHref}
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold text-white transition"
                style={{ background: SITE.branding.primaryColor }}
              >
                <MessageCircle className="h-4 w-4" />
                Hablar por WhatsApp
              </Link>
            </div>

            <div className="mt-5 grid gap-3 rounded-[24px] border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
              <a
                href={`tel:+57${SITE.company.phoneRaw}`}
                className="inline-flex items-center gap-2 transition hover:text-slate-950"
              >
                <Phone className="h-4 w-4" />
                {SITE.company.phoneDisplay}
              </a>

              <a
                href={`mailto:${SITE.company.email}`}
                className="inline-flex items-center gap-2 transition hover:text-slate-950"
              >
                <Mail className="h-4 w-4" />
                {SITE.company.email}
              </a>

              <div className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {SITE.company.city}, {SITE.company.country}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

export function SiteFooter() {
  const whatsappHref = getWhatsappUrl(
    "Hola, quiero hablar con Comercializadora Airenet Industrial para recibir asesoría comercial."
  );

  const email = SITE.company.email;
  const phone = SITE.company.phoneDisplay;
  const city = `${SITE.company.city}, ${SITE.company.country}`;
  const phoneHref = `tel:+57${SITE.company.phoneRaw}`;

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14 md:px-8 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <div
                className="flex h-11 w-11 items-center justify-center rounded-2xl text-white"
                style={{ background: SITE.branding.primaryColor }}
              >
                <Layers3 className="h-5 w-5" />
              </div>
              <div>
                <p className="text-lg font-black tracking-tight text-slate-950">
                  {SITE.shortName}
                </p>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Soluciones industriales
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-md text-sm leading-7 text-slate-600">
              Catálogo digital orientado a presentar mejor productos, categorías y
              soluciones técnicas para facilitar el paso hacia una cotización útil
              por WhatsApp.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.18em] text-slate-950">
              Navegación
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-600">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="transition hover:text-slate-950">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.18em] text-slate-950">
              Líneas fuertes
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-600">
              <li>
                <Link
                  href="/catalogo/filtracion-industrial"
                  className="transition hover:text-slate-950"
                >
                  Filtración industrial
                </Link>
              </li>
              <li>
                <Link
                  href="/catalogo/ventilacion-industrial"
                  className="transition hover:text-slate-950"
                >
                  Ventilación industrial
                </Link>
              </li>
              <li>
                <Link
                  href="/catalogo/sistemas-de-aire-comprimido"
                  className="transition hover:text-slate-950"
                >
                  Aire comprimido
                </Link>
              </li>
              <li>
                <Link
                  href="/catalogo/cabinas-de-pintura"
                  className="transition hover:text-slate-950"
                >
                  Cabinas de pintura
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.18em] text-slate-950">
              Contacto rápido
            </h3>
            <div className="mt-5 space-y-4 text-sm text-slate-600">
              <div className="flex items-start gap-3">
                <MessageCircle className="mt-0.5 h-4 w-4 flex-none text-slate-700" />
                <Link href={whatsappHref} className="transition hover:text-slate-950">
                  Atención comercial por WhatsApp
                </Link>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 flex-none text-slate-700" />
                <a href={`mailto:${email}`} className="transition hover:text-slate-950">
                  {email}
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 flex-none text-slate-700" />
                <a href={phoneHref} className="transition hover:text-slate-950">
                  {phone}
                </a>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-none text-slate-700" />
                <p>{city}</p>
              </div>

              <div className="flex items-start gap-3">
                <Clock3 className="mt-0.5 h-4 w-4 flex-none text-slate-700" />
                <p>Respuesta orientada a cotización y asesoría técnica.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 text-xs text-slate-500">
          © {new Date().getFullYear()} {SITE.name}. Catálogo industrial con
          enfoque técnico y comercial.
        </div>
      </div>
    </footer>
  );
}