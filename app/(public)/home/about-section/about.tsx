import Image from "next/image";

export function About() {
  return (
    <section className="about-section-shell bg-white text-zinc-900">
      <div className="about-grid">
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
            className="about-photo-img"
          />
        </div>
      </div>
    </section>
  );
}
