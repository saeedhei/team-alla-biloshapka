type AboutSectionProps = {
  stage: string;
};

export default function AboutSection({ stage }: AboutSectionProps) {
  return (
    <section
      className={`w-full p-8 text-zinc-900 transition-all duration-1000 ${
        stage === "junior"
          ? "bg-white"
          : stage === "middle"
            ? "bg-blue-50 rounded-2xl shadow-xl"
            : "rounded-3xl bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 shadow-2xl"
      }`}
    >
      <p className="mb-2 text-sm font-medium text-zinc-500">About Us</p>

      <h1
        className={`mb-4 text-4xl font-bold transition-all duration-1000 ${
          stage === "senior" ? "text-white" : ""
        }`}
      >
        We build digital products for growing companies
      </h1>

      <p
        className={`mb-6 max-w-xl text-base transition-all duration-1000 ${
          stage === "senior" ? "text-blue-100" : "text-zinc-600"
        }`}
      >
        We are a tech development company that helps businesses create modern
        websites, web applications, and simple digital tools for everyday work.
      </p>

      <button
        className={`mb-8 px-5 py-3 text-white transition-all duration-1000 ${
          stage === "junior"
            ? "rounded bg-zinc-900"
            : stage === "middle"
              ? "rounded-xl bg-blue-600 shadow-lg"
              : "rounded-2xl bg-cyan-500 shadow-2xl"
        }`}
      >
        Start a project
      </button>

      <div className="grid gap-4 md:grid-cols-3">
        <div
          className={`border p-4 transition-all duration-1000 ${
            stage === "junior"
              ? "border-zinc-200"
              : stage === "middle"
                ? "rounded-2xl border-blue-200 bg-white shadow-lg"
                : "rounded-2xl border-white/20 bg-white/10 shadow-2xl backdrop-blur"
          }`}
        >
          <h2
            className={`mb-2 text-lg font-semibold transition-all duration-1000 ${
              stage === "senior" ? "text-white" : "text-zinc-900"
            }`}
          >
            Websites
          </h2>

          <p
            className={`text-sm transition-all duration-1000 ${
              stage === "senior" ? "text-blue-100" : "text-zinc-600"
            }`}
          >
            Clean and simple company websites.
          </p>
        </div>

        <div
          className={`border p-4 transition-all duration-1000 ${
            stage === "junior"
              ? "border-zinc-200"
              : stage === "middle"
                ? "rounded-2xl border-blue-200 bg-white shadow-lg"
                : "rounded-2xl border-white/20 bg-white/10 shadow-2xl backdrop-blur"
          }`}
        >
          <h2
            className={`mb-2 text-lg font-semibold transition-all duration-1000 ${
              stage === "senior" ? "text-white" : "text-zinc-900"
            }`}
          >
            Web Apps
          </h2>

          <p
            className={`text-sm transition-all duration-1000 ${
              stage === "senior" ? "text-blue-100" : "text-zinc-600"
            }`}
          >
            Useful tools for clients and teams.
          </p>
        </div>

        <div
          className={`border p-4 transition-all duration-1000 ${
            stage === "junior"
              ? "border-zinc-200"
              : stage === "middle"
                ? "rounded-2xl border-blue-200 bg-white shadow-lg"
                : "rounded-2xl border-white/20 bg-white/10 shadow-2xl backdrop-blur"
          }`}
        >
          <h2
            className={`mb-2 text-lg font-semibold transition-all duration-1000 ${
              stage === "senior" ? "text-white" : "text-zinc-900"
            }`}
          >
            Support
          </h2>

          <p
            className={`text-sm transition-all duration-1000 ${
              stage === "senior" ? "text-blue-100" : "text-zinc-600"
            }`}
          >
            Help with improving existing products.
          </p>
        </div>
      </div>
    </section>
  );
}
