// components/layout/SiteShell.tsx

"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  X,
} from "lucide-react";

import {
  SITE,
  getEmailUrl,
  getLocationLabel,
  getPhoneUrl,
  getWhatsappSolutionsUrl,
} from "@/lib/site";

type SiteShellProps = {
  children: React.ReactNode;
};

export default function SiteShell({ children }: SiteShellProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const whatsappHref = useMemo(() => getWhatsappSolutionsUrl(), []);

  function closeMobileMenu() {
    setMobileOpen(false);
  }

  return (
    <div className="min-h-screen bg-white">
      {/* TOP BAR */}
      <div className="border-b border-slate-200 bg-[#F8FAFC]">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-3 text-sm text-slate-600 md:flex-row md:items-center md:justify-between md:px-8">
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={getPhoneUrl()}
              className="inline-flex items-center gap-2 transition hover:text-[#0E56B5]"
            >
              <Phone className="h-4 w-4 text-[#0E56B5]" />
              <span>{SITE.company.phoneDisplay}</span>
            </a>

            <a
              href={getEmailUrl()}
              className="inline-flex items-center gap-2 transition hover:text-[#0E56B5]"
            >
              <Mail className="h-4 w-4 text-[#0E56B5]" />
              <span>{SITE.company.email}</span>
            </a>

            <div className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[#0E56B5]" />
              <span>{getLocationLabel()}</span>
            </div>
          </div>

          <div className="text-sm font-medium text-slate-500">
            Soluciones industriales · Consulta técnica · Cotización
          </div>
        </div>
      </div>

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="flex h-20 items-center justify-between gap-4">
            <Link href="/" className="flex min-w-0 items-center gap-3" onClick={closeMobileMenu}>
              <div className="flex flex-none items-center">
                <Image
                  src="/logo-airenet.png"
                  alt={SITE.name}
                  width={140}
                  height={52}
                  className="h-12 w-auto object-contain"
                  priority
                />
              </div>

              <div className="min-w-0 leading-tight">
                <p className="truncate text-base font-extrabold tracking-tight text-slate-900">
                  {SITE.name}
                </p>
                <p className="truncate text-xs font-medium text-slate-500">
                  Soluciones industriales y catálogo técnico
                </p>
              </div>
            </Link>

            <nav className="hidden items-center gap-8 lg:flex">
              {SITE.navigation.main.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-semibold text-slate-700 transition hover:text-[#0E56B5]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden items-center justify-center rounded-2xl px-4 py-3 text-sm font-semibold text-white shadow-lg transition md:inline-flex"
                style={{
                  background: SITE.branding.whatsappColor,
                  boxShadow: "0 10px 20px rgba(37, 211, 102, 0.25)",
                }}
              >
                WhatsApp
                <MessageCircle className="ml-2 h-4 w-4" />
              </a>

              <Link
                href="/soluciones"
                className="hidden items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 sm:inline-flex"
                style={{
                  background: SITE.branding.primaryColor,
                  boxShadow: "0 10px 20px rgba(14, 86, 181, 0.2)",
                }}
              >
                {SITE.cta.solutions}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>

              <button
                type="button"
                onClick={() => setMobileOpen((v) => !v)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 lg:hidden"
                aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* MOBILE NAV */}
          {mobileOpen ? (
            <div className="border-t border-slate-200 py-4 lg:hidden">
              <div className="flex flex-col gap-3">
                {SITE.navigation.main.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-[#BFE8FB] hover:bg-[#F8FAFC] hover:text-[#0E56B5]"
                  >
                    {item.label}
                  </Link>
                ))}

                <div className="mt-2 grid gap-3 sm:grid-cols-2">
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold text-white transition"
                    style={{ background: SITE.branding.whatsappColor }}
                  >
                    {SITE.cta.primary}
                    <MessageCircle className="ml-2 h-4 w-4" />
                  </a>

                  <Link
                    href="/catalogo"
                    onClick={closeMobileMenu}
                    className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
                  >
                    {SITE.cta.secondary}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </header>

      <main>{children}</main>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-[#F4F7FB]">
        <div className="mx-auto max-w-7xl px-6 py-14 md:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.9fr_0.9fr_1fr]">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex items-center">
                  <Image
                    src="/logo-airenet.png"
                    alt={SITE.name}
                    width={140}
                    height={52}
                    className="h-12 w-auto object-contain"
                  />
                </div>

                <div className="leading-tight">
                  <p className="text-base font-extrabold tracking-tight text-slate-900">
                    {SITE.name}
                  </p>
                  <p className="text-xs font-medium text-slate-500">
                    Soluciones industriales
                  </p>
                </div>
              </div>

              <p className="mt-5 max-w-md text-sm leading-7 text-slate-600">
                {SITE.description}
              </p>

              <div className="mt-6 flex flex-col gap-3">
                <a
                  href={getPhoneUrl()}
                  className="inline-flex items-center gap-2 text-sm text-slate-600 transition hover:text-[#0E56B5]"
                >
                  <Phone className="h-4 w-4 text-[#0E56B5]" />
                  <span>{SITE.company.phoneDisplay}</span>
                </a>

                <a
                  href={getEmailUrl()}
                  className="inline-flex items-center gap-2 text-sm text-slate-600 transition hover:text-[#0E56B5]"
                >
                  <Mail className="h-4 w-4 text-[#0E56B5]" />
                  <span>{SITE.company.email}</span>
                </a>

                <div className="inline-flex items-center gap-2 text-sm text-slate-600">
                  <MapPin className="h-4 w-4 text-[#0E56B5]" />
                  <span>{getLocationLabel()}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#0E56B5]">
                Navegación
              </h3>

              <ul className="mt-5 space-y-3">
                {SITE.navigation.main.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-slate-600 transition hover:text-[#0E56B5]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#0E56B5]">
                Soluciones
              </h3>

              <ul className="mt-5 space-y-3">
                {SITE.navigation.solutions.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-slate-600 transition hover:text-[#0E56B5]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#0E56B5]">
                Acción rápida
              </h3>

              <p className="mt-5 text-sm leading-7 text-slate-600">
                Si necesitas validar una categoría, una referencia o avanzar a cotización, puedes usar el canal comercial.
              </p>

              <div className="mt-6 flex flex-col gap-3">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold text-white transition"
                  style={{
                    background: SITE.branding.whatsappColor,
                  }}
                >
                  {SITE.cta.primary}
                  <MessageCircle className="ml-2 h-4 w-4" />
                </a>

                <Link
                  href="/catalogo"
                  className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
                >
                  {SITE.cta.secondary}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-slate-200 pt-6">
            <div className="flex flex-col gap-3 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
              <p>
                © {new Date().getFullYear()} {SITE.name}. Todos los derechos reservados.
              </p>
              <p>Soluciones industriales · Consulta técnica · Cotización</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}