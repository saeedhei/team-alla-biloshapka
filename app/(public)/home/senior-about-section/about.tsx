import Image from "next/image";

export function SeniorAbout() {
  return (
    <section className="relative min-h-[calc(100vh-128px)] overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 text-white">
      <div
        className="pointer-events-none absolute inset-0 bg-[url('/senior-bg.png')] bg-cover bg-center opacity-30"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-6 py-12 lg:grid-cols-2 lg:py-16">
        <div>
          <p className="mb-2 text-sm font-medium text-cyan-200">About Us</p>

          <h1 className="mb-4 bg-gradient-to-r from-white via-cyan-100 to-sky-300 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
            We build digital products for growing companies
          </h1>

          <p className="mb-6 max-w-xl text-base leading-7 text-slate-200/90">
            We are a tech development company that helps businesses create modern
            websites, web applications, and simple digital tools for everyday work.
          </p>

          <button
            type="button"
            className="rounded-2xl bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 px-7 py-3.5 text-sm font-bold text-slate-950 shadow-xl shadow-cyan-500/30"
          >
            Start a project
          </button>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/15 bg-white/5 shadow-2xl shadow-sky-950/40 backdrop-blur-sm">
          <Image
            src="/about_us.png"
            alt="Team working on a digital product"
            width={620}
            height={460}
            className="h-64 w-full object-cover sm:h-80 lg:h-115"
          />
          <div className="border-t border-white/10 bg-slate-900/50 px-4 py-3">
            <p className="text-sm font-semibold text-white">Project preview</p>
            <p className="text-sm text-blue-100/80">
              A premium static layout for the senior home section.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
