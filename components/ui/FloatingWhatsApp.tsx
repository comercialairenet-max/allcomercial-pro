// components/ui/FloatingWhatsApp.tsx

"use client";

import { MessageCircle } from "lucide-react";
import { usePathname } from "next/navigation";

import {
  categoriasMeta,
  getProductoPorSlug,
} from "@/data/productos";
import { SITE, getWhatsappUrl } from "@/lib/site";

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

function getContextByPath(pathname: string) {
  if (!pathname || pathname === "/") {
    return {
      message: "Hola, quiero recibir información sobre sus soluciones industriales.",
      title: "WhatsApp",
      subtitle: "Asesoría general",
    };
  }

  if (pathname === "/catalogo") {
    return {
      message:
        "Hola, quiero ayuda para encontrar la categoría o el producto correcto dentro del catálogo.",
      title: "WhatsApp",
      subtitle: "Ayuda con catálogo",
    };
  }

  if (pathname.startsWith("/catalogo/")) {
    const segments = pathname.split("/").filter(Boolean);

    // /catalogo/[categoria]/[producto]
    if (segments.length >= 3) {
      const categoria = segments[1];
      const productoSlug = segments[2];
      const producto = getProductoPorSlug(
        categoria as keyof typeof categoriasMeta,
        productoSlug
      );

      if (producto) {
        return {
          message: `Hola, quiero cotizar el producto ${producto.nombre} y recibir más información.`,
          title: "WhatsApp",
          subtitle: producto.nombre,
        };
      }

      return {
        message: "Hola, quiero cotizar este producto y recibir más información.",
        title: "WhatsApp",
        subtitle: "Cotizar producto",
      };
    }

    // /catalogo/[categoria]
    if (segments.length === 2) {
      const slug = segments[1];
      const categoryName = getCategoryLabel(slug);

      return {
        message: `Hola, quiero cotizar una solución de ${categoryName}.`,
        title: "WhatsApp",
        subtitle: categoryName,
      };
    }
  }

  if (pathname === "/catalogo/filtracion-industrial") {
    return {
      message: "Hola, quiero cotizar soluciones de filtración industrial.",
      title: "WhatsApp",
      subtitle: "Filtración industrial",
    };
  }

  if (pathname === "/asesoria") {
    return {
      message:
        "Hola, necesito asesoría para elegir la solución correcta dentro del catálogo.",
      title: "WhatsApp",
      subtitle: "Pedir asesoría",
    };
  }

  if (pathname === "/contacto") {
    return {
      message:
        "Hola, quiero recibir atención comercial y asesoría para una solución industrial.",
      title: "WhatsApp",
      subtitle: "Contacto comercial",
    };
  }

  if (pathname === "/buscar") {
    return {
      message:
        "Hola, estoy buscando un producto dentro del catálogo y quiero ayuda para encontrar la mejor opción.",
      title: "WhatsApp",
      subtitle: "Ayuda para buscar",
    };
  }

  return {
    message: "Hola, quiero recibir asesoría sobre una solución industrial.",
    title: "WhatsApp",
    subtitle: "Cotiza rápido",
  };
}

export default function FloatingWhatsApp() {
  const pathname = usePathname() || "/";
  const context = getContextByPath(pathname);
  const whatsappHref = getWhatsappUrl(context.message);

  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label="Abrir WhatsApp"
      className="group fixed bottom-5 right-5 z-[60] hidden items-center gap-3 rounded-full border border-orange-200 bg-white px-3 py-3 shadow-[0_12px_30px_rgba(15,23,42,0.12)] transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.18)] md:inline-flex"
    >
      <span
        className="flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg"
        style={{ background: SITE.branding.primaryColor }}
      >
        <MessageCircle className="h-6 w-6" />
      </span>

      <span className="hidden max-w-[220px] pr-2 sm:block">
        <span className="block truncate text-sm font-bold leading-tight text-slate-950">
          {context.title}
        </span>
        <span className="block truncate text-xs leading-tight text-slate-500">
          {context.subtitle}
        </span>
      </span>
    </a>
  );
}