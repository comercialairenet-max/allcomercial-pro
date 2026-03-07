import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="flex min-h-screen items-center justify-center px-6">
        <div className="text-center text-white">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            All Comercial Online
          </h1>

          <p className="text-lg md:text-xl">
            Transformando negocios con tecnología IA
          </p>

          <Link
            href="/catalogo"
            className="mt-8 inline-block rounded-lg bg-white px-6 py-3 font-medium text-blue-600 transition hover:bg-white/90"
          >
            Ver catálogo
          </Link>
        </div>
      </div>
    </main>
  );
}