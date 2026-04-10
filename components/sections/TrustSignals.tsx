// components/sections/TrustSignals.tsx

import { Clock3, Headphones, ShieldCheck, Wrench, Building2, BadgeCheck } from "lucide-react";

const trustCards = [
  {
    title: "Atención comercial ágil",
    text: "Respuesta orientada a ayudar al cliente a ubicar categoría, producto o alternativa con más claridad.",
    icon: Clock3,
  },
  {
    title: "Asesoría técnica y comercial",
    text: "No se trata solo de mostrar referencias: el objetivo es conectar la necesidad con una solución útil.",
    icon: Headphones,
  },
  {
    title: "Portafolio organizado para decidir mejor",
    text: "Categorías, fichas y búsqueda están pensadas para reducir fricción antes de cotizar.",
    icon: ShieldCheck,
  },
  {
    title: "Enfoque en aplicaciones reales",
    text: "El sitio está construido para hablar de procesos, uso industrial y necesidades concretas del cliente.",
    icon: Wrench,
  },
];

const industrySignals = [
  "Procesos industriales",
  "Ventilación y movimiento de aire",
  "Filtración industrial",
  "Aire comprimido",
  "Cabinas de pintura",
  "Aplicaciones técnicas y comerciales",
];

export default function TrustSignals() {
  return (
    <section className="border-y border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-blue-700">
              Señales de confianza
            </p>
            <h2 className="text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
              Un sitio pensado para generar confianza real
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
              Este portafolio no está planteado como un simple listado de productos.
              Está diseñado para ayudar al cliente a entender mejor su necesidad, ubicar
              una ruta clara dentro del catálogo y avanzar a una cotización útil.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Más claridad antes de cotizar",
                "Acompañamiento técnico y comercial",
                "Ruta directa a WhatsApp",
                "Mejor lectura del portafolio",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-[22px] border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <BadgeCheck className="mt-0.5 h-5 w-5 flex-none text-orange-600" />
                  <p className="text-sm font-medium leading-6 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {trustCards.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="inline-flex rounded-2xl border border-blue-200 bg-blue-50 p-3 text-blue-800">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-14 rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="inline-flex rounded-2xl border border-orange-200 bg-orange-50 p-3 text-orange-700">
              <Building2 className="h-7 w-7" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-700">
                Enfoque del portafolio
              </p>
              <h3 className="text-2xl font-black text-slate-950">
                Líneas y aplicaciones con lectura más profesional
              </h3>
            </div>
          </div>

          <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-600 md:text-base">
            La estructura del sitio está enfocada en categorías y soluciones que ayudan
            a que el usuario encuentre más rápido lo que necesita y tenga más confianza
            antes de escribir o solicitar una cotización.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {industrySignals.map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}