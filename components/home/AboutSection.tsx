export default function AboutSection() {
  return (
    <section className="w-full bg-white p-8 text-zinc-900">
      <p className="mb-2 text-sm font-medium text-zinc-500">
        About Us
      </p>

      <h1 className="mb-4 text-3xl font-bold">
        We build digital products for growing companies
      </h1>

      <p className="mb-6 max-w-xl text-base text-zinc-600">
        We are a tech development company that helps businesses create modern websites,
        web applications, and simple digital tools for everyday work.
      </p>

      <button className="mb-8 rounded bg-zinc-900 px-5 py-3 text-white">
        Start a project
      </button>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="border border-zinc-200 p-4">
          <h2 className="mb-2 text-lg font-semibold">Websites</h2>
          <p className="text-sm text-zinc-600">
            Clean and simple company websites.
          </p>
        </div>

        <div className="border border-zinc-200 p-4">
          <h2 className="mb-2 text-lg font-semibold">Web Apps</h2>
          <p className="text-sm text-zinc-600">
            Useful tools for clients and teams.
          </p>
        </div>

        <div className="border border-zinc-200 p-4">
          <h2 className="mb-2 text-lg font-semibold">Support</h2>
          <p className="text-sm text-zinc-600">
            Help with improving existing products.
          </p>
        </div>
      </div>
    </section>
  );
}