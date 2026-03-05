"use client";

import { useEffect, useMemo, useState } from "react";

type Cat = {
  slug: string;
  title: string;
};

export default function CatalogoToolbarClient({
  categories,
  initialCat,
}: {
  categories: Cat[];
  initialCat?: string;
}) {
  const [selected, setSelected] = useState((initialCat || "").trim());

  const slugsSet = useMemo(() => new Set(categories.map((c) => c.slug)), [categories]);

  function scrollToCat(slug: string) {
    if (!slug) return;

    // ID esperado en las tarjetas: cat-<slug>
    const id = `cat-${slug}`;
    const el = document.getElementById(id);
    if (!el) return;

    // Scroll suave + offset por navbar sticky (si tienes)
    const yOffset = 90;
    const rect = el.getBoundingClientRect();
    const y = window.scrollY + rect.top - yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });

    // Highlight
    el.classList.add("ring-2", "ring-[var(--brand)]", "shadow-[0_0_0_6px_rgba(255,122,0,.12)]");
    setTimeout(() => {
      el.classList.remove("ring-2", "ring-[var(--brand)]", "shadow-[0_0_0_6px_rgba(255,122,0,.12)]");
    }, 1400);
  }

  function updateUrlCat(slug: string) {
    const url = new URL(window.location.href);

    if (!slug) {
      url.searchParams.delete("cat");
      window.history.replaceState({}, "", url.toString());
      return;
    }

    url.searchParams.set("cat", slug);
    window.history.replaceState({}, "", url.toString());
  }

  // Al cargar: si hay ?cat=... en URL, usa eso y baja
  useEffect(() => {
    const u = new URL(window.location.href);
    const c = (u.searchParams.get("cat") || "").trim();

    if (c && slugsSet.has(c)) {
      setSelected(c);
      // pequeño delay para asegurar render
      setTimeout(() => scrollToCat(c), 120);
    } else if (initialCat && slugsSet.has(initialCat)) {
      setSelected(initialCat);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Back/Forward: si cambia ?cat, actualiza dropdown y baja
  useEffect(() => {
    const onPop = () => {
      const u = new URL(window.location.href);
      const c = (u.searchParams.get("cat") || "").trim();

      if (c && slugsSet.has(c)) {
        setSelected(c);
        setTimeout(() => scrollToCat(c), 50);
      } else {
        setSelected("");
      }
    };

    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, [slugsSet]);

  return (
    <div className="mt-6 flex flex-col md:flex-row md:items-center gap-3">
      {/* Dropdown: baja y resalta */}
      <div className="w-full md:w-[360px]">
        <select
          value={selected}
          onChange={(e) => {
            const v = e.target.value;
            setSelected(v);

            // ✅ Actualiza URL sin recargar
            updateUrlCat(v);

            // ✅ Baja + resalta
            if (v) scrollToCat(v);
          }}
          className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none focus:border-white/20"
        >
          <option value="">Ir a una categoría…</option>
          {categories.map((c) => (
            <option key={c.slug} value={c.slug}>
              {c.title}
            </option>
          ))}
        </select>

        <div className="mt-2 text-xs text-zinc-400">
          Selecciona una categoría para bajar y resaltarla.
        </div>
      </div>

      {/* Botón limpiar */}
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => {
            setSelected("");
            updateUrlCat("");
          }}
          className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm hover:bg-white/10"
        >
          Limpiar
        </button>

        <button
          type="button"
          onClick={() => {
            if (selected) scrollToCat(selected);
          }}
          className="rounded-xl px-4 py-3 text-sm font-semibold text-black"
          style={{ background: "var(--brand)" }}
        >
          Ir
        </button>
      </div>
    </div>
  );
}