export const aboutStyles = {
  section: {
    base: "min-h-[460px] w-full p-8 text-zinc-900 transition-all duration-1000",
    junior: "bg-white",
    middle: "rounded-2xl bg-blue-950 text-white shadow-xl",
    senior:
      "rounded-3xl bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white shadow-2xl",
  },

  eyebrow:
    "mb-2 text-sm font-medium text-zinc-500 transition-all duration-1000",

  title: {
    base: "mb-4 text-4xl font-bold transition-all duration-1000",
    junior: "text-zinc-900",
    middle: "text-4xl text-white",
    senior: "text-4xl text-white",
  },

  description: {
    base: "mb-6 max-w-xl text-base transition-all duration-1000",
    junior: "text-zinc-600",
    middle: "text-lg leading-8 text-blue-100",
    senior: "text-lg leading-8 text-blue-100",
  },

  button: {
    base: "mb-8 block px-5 py-3 text-white transition-all duration-1000",
    junior: "mx-auto rounded bg-zinc-900",
    middle: "ml-0 rounded-xl bg-blue-600 shadow-lg",
    senior: "ml-0 rounded-2xl bg-cyan-500 shadow-2xl shadow-cyan-500/30",
  },

  cardsGrid: "grid gap-4 md:grid-cols-3",

  card: {
    base: "border p-4 transition-all duration-1000",
    junior: "border-zinc-200",
    middle: "rounded-2xl border-blue-200 bg-white shadow-lg",
    senior: "rounded-2xl border-white/20 bg-white/10 shadow-2xl backdrop-blur",
  },

  cardTitle: {
    base: "mb-2 text-lg font-semibold transition-all duration-1000",
    junior: "text-zinc-900",
    middle: "text-zinc-900",
    senior: "text-white",
  },

  cardText: {
    base: "text-sm transition-all duration-1000",
    junior: "text-zinc-600",
    middle: "text-zinc-600",
    senior: "text-blue-100",
  },
};
