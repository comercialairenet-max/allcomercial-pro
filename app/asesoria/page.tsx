import Link from "next/link";
import { SITE, getWhatsappUrl, getEmailUrl, getPhoneUrl } from "@/lib/site";

export const metadata = {
  title: "Asesoría técnica",
  description:
    "Asesoría técnica y comercial para ventilación, filtración, aire comprimido, cabinas de pintura y soluciones industriales.",
};

export default function AsesoriaPage() {
  const waSales = getWhatsappUrl(SITE.whatsapp.salesMessage);

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(249,115,22,0.16),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.10),_transparent_30%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
          <div className="max-w-4xl">
            <span className="inline-flex items-center rounded-full border border-orange-400/30 bg-orange-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-orange-400">
              Asesoría técnica
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-6xl">
              Asesoría técnica y comercial para tu proyecto industrial
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-neutral-300 md:text-lg">
              Te ayudamos a seleccionar la solución adecuada según caudal,
              presión, medida, potencia, tipo de aplicación y necesidad del
              proceso. Recibe acompañamiento para ventilación, filtración, aire
              comprimido, pintura industrial y más.
            </p>

            <div className="mt-6 flex flex-wrap gap-4 text-sm text-neutral-400">
              <a href={getPhoneUrl()} className="hover:text-orange-400">
                📞 {SITE.company.phoneDisplay}
              </a>

              <a href={getEmailUrl()} className="break-all hover:text-orange-400">
                ✉ {SITE.company.email}
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={waSales}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-2xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
              >
                Solicitar asesoría por WhatsApp
              </a>

              <Link
                href="/catalogo"
                className="inline-flex items-center justify-center rounded-2xl border border-neutral-700 bg-neutral-900 px-6 py-3 font-medium text-white transition hover:border-neutral-500 hover:bg-neutral-800"
              >
                Ver catálogo
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 sm:px-8 lg:px-10">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-lg font-semibold text-orange-400">
              Selección de equipos
            </h2>
            <p className="mt-3 text-sm leading-7 text-neutral-300">
              Te orientamos para elegir extractores, filtros, compresores,
              cabinas y equipos según tu necesidad real.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-lg font-semibold text-orange-400">
              Soporte comercial
            </h2>
            <p className="mt-3 text-sm leading-7 text-neutral-300">
              Recibe apoyo en cotización, comparación de referencias, fichas
              técnicas y validación de alternativas.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-lg font-semibold text-orange-400">
              Atención rápida
            </h2>
            <p className="mt-3 text-sm leading-7 text-neutral-300">
              Contáctanos por WhatsApp o correo y te ayudamos a avanzar más
              rápido con tu requerimiento.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}