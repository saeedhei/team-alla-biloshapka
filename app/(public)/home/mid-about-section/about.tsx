import Image from "next/image";

export function MidAbout() {
  return (
    <section className="min-h-[calc(100vh-128px)] bg-gradient-to-b from-slate-50 to-blue-50/40 text-slate-900">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-12 lg:grid-cols-2 lg:py-16">
        <div>
          <p className="mb-2 text-sm font-medium text-blue-600">About Us</p>

          <h1 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl">
            We build digital products for growing companies
          </h1>

          <p className="mb-6 max-w-xl text-base leading-7 text-slate-600">
            We are a tech development company that helps businesses create modern
            websites, web applications, and simple digital tools for everyday work.
          </p>

          <button
            type="button"
            className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-blue-600/25"
          >
            Start a project
          </button>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-200/60">
          <Image
            src="/about_us.png"
            alt="Team working on a digital product"
            width={620}
            height={460}
            className="h-64 w-full object-cover sm:h-80 lg:h-115"
          />
          <div className="border-t border-slate-200 bg-slate-50 px-4 py-3">
            <p className="text-sm font-semibold text-slate-900">Project preview</p>
            <p className="text-sm text-slate-600">
              A polished static layout for the mid home section.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
