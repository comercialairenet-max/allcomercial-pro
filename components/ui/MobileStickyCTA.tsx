// components/ui/MobileStickyCTA.tsx

"use client";

import { MessageCircle, Search, ShoppingCart } from "lucide-react";
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

function getCtaByPath(pathname: string) {
  if (!pathname || pathname === "/") {
    return {
      label: "Asesoría por WhatsApp",
      message: "Hola, quiero recibir información sobre sus soluciones industriales.",
      icon: MessageCircle,
    };
  }

  if (pathname === "/catalogo") {
    return {
      label: "Ayuda con catálogo",
      message:
        "Hola, quiero ayuda para encontrar la categoría o el producto correcto dentro del catálogo.",
      icon: Search,
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
          label: `Cotizar ${producto.nombre}`,
          message: `Hola, quiero cotizar el producto ${producto.nombre} y recibir más información.`,
          icon: ShoppingCart,
        };
      }

      return {
        label: "Cotizar producto",
        message: "Hola, quiero cotizar este producto y recibir más información.",
        icon: ShoppingCart,
      };
    }

    // /catalogo/[categoria]
    if (segments.length === 2) {
      const slug = segments[1];
      const categoryName = getCategoryLabel(slug);

      return {
        label: `Cotizar ${categoryName}`,
        message: `Hola, quiero cotizar una solución de ${categoryName}.`,
        icon: ShoppingCart,
      };
    }
  }

  if (pathname === "/catalogo/filtracion-industrial") {
    return {
      label: "Cotizar filtración",
      message: "Hola, quiero cotizar soluciones de filtración industrial.",
      icon: ShoppingCart,
    };
  }

  if (pathname === "/asesoria") {
    return {
      label: "Pedir asesoría",
      message:
        "Hola, necesito asesoría para elegir la solución correcta dentro del catálogo.",
      icon: MessageCircle,
    };
  }

  if (pathname === "/contacto") {
    return {
      label: "Contacto comercial",
      message:
        "Hola, quiero recibir atención comercial y asesoría para una solución industrial.",
      icon: MessageCircle,
    };
  }

  if (pathname === "/buscar") {
    return {
      label: "Ayuda para buscar",
      message:
        "Hola, estoy buscando un producto dentro del catálogo y quiero ayuda para encontrar la mejor opción.",
      icon: Search,
    };
  }

  return {
    label: "WhatsApp",
    message: "Hola, quiero recibir asesoría sobre una solución industrial.",
    icon: MessageCircle,
  };
}

export default function MobileStickyCTA() {
  const pathname = usePathname() || "/";
  const cta = getCtaByPath(pathname);
  const href = getWhatsappUrl(cta.message);
  const Icon = cta.icon;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[55] border-t border-slate-200 bg-white/95 px-4 py-3 shadow-[0_-8px_24px_rgba(15,23,42,0.10)] backdrop-blur md:hidden">
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="inline-flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-4 text-sm font-bold text-white"
        style={{ background: SITE.branding.primaryColor }}
        aria-label={cta.label}
      >
        <Icon className="h-5 w-5" />
        <span className="truncate">{cta.label}</span>
      </a>
    </div>
  );
}