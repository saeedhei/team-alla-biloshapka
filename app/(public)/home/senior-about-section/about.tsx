export function SeniorAbout() {
  return (
    <section className="relative min-h-[calc(100vh-128px)] overflow-hidden bg-[url(/senior-bg.png)] bg-cover bg-center text-white shadow-2xl shadow-sky-950/40">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_38%,rgba(34,211,238,0.32),transparent_26%),radial-gradient(circle_at_88%_18%,rgba(168,85,247,0.26),transparent_24%),radial-gradient(circle_at_58%_76%,rgba(14,165,233,0.22),transparent_28%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-128px)] w-full max-w-7xl items-center justify-start px-6 py-20 lg:px-10">
        <div className="relative max-w-[520px]">
          <div
            className="pointer-events-none absolute -inset-x-8 -inset-y-10 rounded-3xl bg-gradient-to-r from-slate-950/75 via-slate-950/40 to-transparent"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -inset-x-6 -inset-y-8 rounded-3xl bg-[radial-gradient(ellipse_at_20%_50%,rgba(34,211,238,0.12),transparent_70%)]"
            aria-hidden="true"
          />

          <div className="relative">
            <p className="mb-3 text-sm font-medium tracking-wide text-cyan-200 drop-shadow-[0_0_12px_rgba(103,232,249,0.35)]">
              About Us
            </p>

            <h1 className="mb-5 bg-gradient-to-r from-white via-cyan-100 to-sky-300 bg-clip-text text-3xl font-bold leading-tight text-transparent drop-shadow-[0_10px_30px_rgba(56,189,248,0.22)] sm:text-4xl">
              We build digital products for growing companies
            </h1>

            <p className="mb-8 max-w-[480px] text-base leading-7 text-slate-100 drop-shadow-[0_2px_8px_rgba(15,23,42,0.45)] sm:text-lg sm:leading-8">
              We are a tech development company that helps businesses create modern
              websites, web applications, and simple digital tools for everyday work.
            </p>

            <button
              type="button"
              className="rounded-2xl bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 px-8 py-4 text-sm font-bold text-slate-950 shadow-[0_18px_35px_rgba(56,189,248,0.35),inset_0_1px_0_rgba(255,255,255,0.65)] transition-all duration-300 hover:scale-105 hover:from-cyan-200 hover:via-sky-300 hover:to-blue-400 hover:shadow-[0_24px_48px_rgba(56,189,248,0.55),inset_0_1px_0_rgba(255,255,255,0.8)] active:scale-100"
            >
              Start a project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
