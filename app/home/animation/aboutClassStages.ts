export type AboutLevel = "junior" | "middle" | "senior";

export type AboutElement =
  | "section"
  | "label"
  | "title"
  | "description"
  | "button"
  | "photo";

export const aboutClassStages: Record<
  AboutLevel,
  Record<AboutElement, string>
> = {
  junior: {
    section:
      "grid min-h-[420px] grid-cols-1 items-center gap-8 rounded-2xl bg-white p-8 text-slate-900 md:grid-cols-[1.2fr_1fr]",
    label:
      "mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-slate-500",
    title:
      "mb-4 text-2xl font-bold leading-tight text-slate-900",
    description:
      "mb-6 max-w-xl text-sm leading-6 text-slate-600",
    button:
      "mx-auto rounded-md bg-slate-200 px-5 py-3 text-sm font-semibold text-slate-900",
    photo:
      "h-52 w-52 justify-self-center rounded-md object-cover shadow-md",
  },

  middle: {
    section:
      "grid min-h-[420px] grid-cols-1 items-center gap-8 rounded-3xl bg-slate-900 p-10 text-white md:grid-cols-[1.2fr_1fr]",
    label:
      "mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300",
    title:
      "mb-5 text-4xl font-bold leading-tight text-white",
    description:
      "mb-7 max-w-xl text-base leading-7 text-slate-300",
    button:
      "rounded-xl bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/25",
    photo:
      "h-80 w-64 justify-self-center rounded-3xl object-cover shadow-xl",
  },

  senior: {
    section:
      "grid min-h-[420px] grid-cols-1 items-center gap-8 rounded-[2rem] bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 p-10 text-white shadow-2xl shadow-cyan-500/20 md:grid-cols-[1.2fr_1fr]",
    label:
      "mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300",
    title:
      "mb-5 bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-5xl font-bold leading-tight text-transparent drop-shadow-lg",
    description:
      "mb-8 max-w-xl text-lg leading-8 text-slate-200",
    button:
      "rounded-2xl bg-cyan-400 px-7 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-400/30",
    photo:
      "h-80 w-64 justify-self-center rounded-[2rem] object-cover shadow-2xl shadow-cyan-400/30 ring-4 ring-cyan-300/40",
  },
};