import Image from "next/image";

export function Hero() {
  return (
    <section className="min-h-[calc(100vh-128px)] bg-white text-zinc-900">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-12 lg:grid-cols-2 lg:py-16">
        <div>
          <p className="mb-2 text-sm font-medium text-zinc-500">About Us</p>

          <h1 className="mb-4 text-3xl font-bold text-zinc-900 sm:text-4xl">
            We build digital products for growing companies
          </h1>

          <p className="mb-6 max-w-xl text-base text-zinc-600">
            We are a tech development company that helps businesses create modern
            websites, web applications, and simple digital tools for everyday work.
          </p>

          <button
            type="button"
            className="rounded bg-zinc-900 px-5 py-3 text-sm font-medium text-white"
          >
            Start a project
          </button>
        </div>

        <div className="overflow-hidden rounded-xl border border-zinc-200 shadow-sm">
          <Image
            src="/about_us.png"
            alt="Team working on a digital product"
            width={620}
            height={460}
            className="h-64 w-full object-cover sm:h-80 lg:h-[460px]"
          />
          <div className="border-t border-zinc-200 bg-zinc-50 px-4 py-3">
            <p className="text-sm font-medium text-zinc-900">Project preview</p>
            <p className="text-sm text-zinc-600">
              A simple static layout for the junior home section.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
