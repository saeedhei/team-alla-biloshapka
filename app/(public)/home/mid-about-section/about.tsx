import Image from "next/image";

export function MidAbout() {
  return (
    <section className="about-section-shell rounded-2xl bg-blue-950 text-white shadow-xl">
      <div className="about-grid">
        <div>
          <p className="mb-2 text-sm font-medium text-zinc-500">About Us</p>

          <h1 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            We build digital products for growing companies
          </h1>

          <p className="mb-6 max-w-xl text-lg leading-8 text-blue-100">
            We are a tech development company that helps businesses create modern
            websites, web applications, and simple digital tools for everyday work.
          </p>

          <button
            type="button"
            className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white shadow-[inset_5px_0_10px_black]"
          >
            Start a project
          </button>
        </div>

        <div className="justify-self-end w-full max-w-[620px] overflow-hidden rounded-3xl border border-white/40 shadow-2xl">
          <Image
            src="/about_us.png"
            alt="Team working on a digital product"
            width={620}
            height={460}
            priority
            className="about-photo-img"
          />
        </div>
      </div>
    </section>
  );
}
