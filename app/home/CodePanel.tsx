"use client";

import { useEffect, useRef, useState } from "react";

type CodePanelProps = {
  onStageChange: (stage: string) => void;
  onAnimationStepChange: (step: number) => void;
  onVisualStyleStepChange: (step: number) => void;
};

type Stage = "junior" | "middle" | "senior";

type AboutElement =
  | "section"
  | "label"
  | "title"
  | "description"
  | "button"
  | "photo";

type AboutClasses = Record<AboutElement, string>;

type TimelineItem = {
  time: number;
  stage: Stage;
  element: AboutElement;
};

const emptyClasses: AboutClasses = {
  section: "",
  label: "",
  title: "",
  description: "",
  button: "",
  photo: "",
};

const aboutClassStages: Record<Stage, AboutClasses> = {
  junior: {
    section:
      "grid min-h-[420px] grid-cols-1 items-center gap-8 rounded-2xl bg-white p-8 text-slate-900 md:grid-cols-[1.2fr_1fr]",
    label:
      "mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-slate-500",
    title: "mb-4 text-2xl font-bold leading-tight text-slate-900",
    description: "mb-6 max-w-xl text-sm leading-6 text-slate-600",
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
    title: "mb-5 text-4xl font-bold leading-tight text-white",
    description: "mb-7 max-w-xl text-base leading-7 text-slate-300",
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
    description: "mb-8 max-w-xl text-lg leading-8 text-slate-200",
    button:
      "rounded-2xl bg-cyan-400 px-7 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-400/30",
    photo:
      "h-80 w-64 justify-self-center rounded-[2rem] object-cover shadow-2xl shadow-cyan-400/30 ring-4 ring-cyan-300/40",
  },
};

const aboutClassTimeline: TimelineItem[] = [
  // JUNIOR
  { time: 1, stage: "junior", element: "section" },
  { time: 4, stage: "junior", element: "label" },
  { time: 6, stage: "junior", element: "title" },
  { time: 8, stage: "junior", element: "description" },
  { time: 11, stage: "junior", element: "button" },
  { time: 14, stage: "junior", element: "photo" },

  // MIDDLE
  { time: 20, stage: "middle", element: "section" },
  { time: 22, stage: "middle", element: "label" },
  { time: 24, stage: "middle", element: "title" },
  { time: 26, stage: "middle", element: "description" },
  { time: 28, stage: "middle", element: "button" },
  { time: 30, stage: "middle", element: "photo" },

  // SENIOR
  { time: 36, stage: "senior", element: "section" },
  { time: 38, stage: "senior", element: "label" },
  { time: 40, stage: "senior", element: "title" },
  { time: 42, stage: "senior", element: "description" },
  { time: 44, stage: "senior", element: "button" },
  { time: 46, stage: "senior", element: "photo" },
];

const typingSpeed = 18;
const erasingSpeed = 6;

type AnimatedClassNameProps = {
  value: string;
  isActive: boolean;
};

function AnimatedClassName({ value, isActive }: AnimatedClassNameProps) {
  const [displayedValue, setDisplayedValue] = useState(value);

  useEffect(() => {
    let timeoutId: number;
    let cancelled = false;

    const eraseText = (text: string) => {
      if (cancelled) return;

      if (text.length === 0) {
        typeText("");
        return;
      }

      timeoutId = window.setTimeout(() => {
        const nextText = text.slice(0, -1);
        setDisplayedValue(nextText);
        eraseText(nextText);
      }, erasingSpeed);
    };

    const typeText = (text: string) => {
      if (cancelled) return;

      if (text.length === value.length) {
        return;
      }

      timeoutId = window.setTimeout(() => {
        const nextText = value.slice(0, text.length + 1);
        setDisplayedValue(nextText);
        typeText(nextText);
      }, typingSpeed);
    };

    eraseText(displayedValue);

    return () => {
      cancelled = true;
      window.clearTimeout(timeoutId);
    };
  }, [value]);

  return (
    <>
      {displayedValue}
      {isActive ? <span className="text-white">|</span> : null}
    </>
  );
}

function getAnimationStep(element: AboutElement) {
  if (element === "photo") return 5;
  if (element === "button") return 4;
  if (element === "description") return 3;
  if (element === "title") return 2;

  return 1;
}

function getVisualStyleStep(element: AboutElement) {
  if (element === "photo") return 5;
  if (element === "button") return 4;
  if (element === "description") return 3;
  if (element === "title") return 2;

  return 1;
}

export default function CodePanel({
  onStageChange,
  onAnimationStepChange,
  onVisualStyleStepChange,
}: CodePanelProps) {
  const [currentClasses, setCurrentClasses] =
    useState<AboutClasses>(emptyClasses);
  const [stage, setStage] = useState<Stage>("junior");
  const [activeElement, setActiveElement] = useState<AboutElement | null>(null);

  const callbacksRef = useRef({
    onStageChange,
    onAnimationStepChange,
    onVisualStyleStepChange,
  });

  useEffect(() => {
    callbacksRef.current = {
      onStageChange,
      onAnimationStepChange,
      onVisualStyleStepChange,
    };
  }, [onStageChange, onAnimationStepChange, onVisualStyleStepChange]);

  useEffect(() => {
    callbacksRef.current.onStageChange("junior");
    callbacksRef.current.onAnimationStepChange(5);
    callbacksRef.current.onVisualStyleStepChange(0);

    const timers = aboutClassTimeline.map((item) => {
      return window.setTimeout(() => {
        setStage(item.stage);
        setActiveElement(item.element);

        setCurrentClasses((prev) => ({
          ...prev,
          [item.element]: aboutClassStages[item.stage][item.element],
        }));

        callbacksRef.current.onStageChange(item.stage);
        callbacksRef.current.onAnimationStepChange(
          getAnimationStep(item.element),
        );

        if (item.stage === "junior") {
          callbacksRef.current.onVisualStyleStepChange(0);
        } else {
          callbacksRef.current.onVisualStyleStepChange(
            getVisualStyleStep(item.element),
          );
        }

        window.setTimeout(() => {
          setActiveElement((currentElement) =>
            currentElement === item.element ? null : currentElement,
          );
        }, 1200);
      }, item.time * 1000);
    });

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, []);

  const stageLabel = {
    junior: "Junior Developer",
    middle: "Middle Developer",
    senior: "Senior Developer",
  }[stage];

  const stageColor = {
    junior: "text-yellow-400",
    middle: "text-green-400",
    senior: "text-sky-400",
  }[stage];

  return (
    <div className="w-full overflow-hidden rounded-2xl border border-zinc-800 bg-black">
      <div
        className={`mb-3 px-4 pt-4 text-sm font-semibold uppercase tracking-wider ${stageColor}`}
      >
        {stageLabel}
      </div>

      <div className="flex items-center gap-2 border-b border-zinc-800 px-4 py-3">
        <div className="h-3 w-3 rounded-full bg-red-500" />
        <div className="h-3 w-3 rounded-full bg-yellow-500" />
        <div className="h-3 w-3 rounded-full bg-green-500" />
      </div>

      <div className="max-h-[70vh] overflow-y-auto p-4">
        <pre className="whitespace-pre-wrap font-mono text-sm leading-5">
          <code>
            <span className="text-fuchsia-400">{"<section"}</span>
            <span className="text-slate-300">{" className="}</span>
            <span className="text-slate-400">{"\""}</span>
            <span className="text-sky-400">
              <AnimatedClassName
                value={currentClasses.section}
                isActive={activeElement === "section"}
              />
            </span>
            <span className="text-slate-400">{"\""}</span>
            <span className="text-slate-300">{">"}</span>
            <br />

            <span>{"  "}</span>
            <span className="text-fuchsia-400">{"<p"}</span>
            <span className="text-slate-300">{" className="}</span>
            <span className="text-slate-400">{"\""}</span>
            <span className="text-sky-400">
              <AnimatedClassName
                value={currentClasses.label}
                isActive={activeElement === "label"}
              />
            </span>
            <span className="text-slate-400">{"\""}</span>
            <span className="text-slate-300">{">"}</span>
            <span className="text-green-400">{"About Us"}</span>
            <span className="text-fuchsia-400">{"</p>"}</span>
            <br />
            <br />

            <span>{"  "}</span>
            <span className="text-fuchsia-400">{"<h1"}</span>
            <span className="text-slate-300">{" className="}</span>
            <span className="text-slate-400">{"\""}</span>
            <span className="text-sky-400">
              <AnimatedClassName
                value={currentClasses.title}
                isActive={activeElement === "title"}
              />
            </span>
            <span className="text-slate-400">{"\""}</span>
            <span className="text-slate-300">{">"}</span>
            <br />
            <span className="text-green-400">
              {"    We build digital products"}
            </span>
            <br />
            <span>{"  "}</span>
            <span className="text-fuchsia-400">{"</h1>"}</span>
            <br />
            <br />

            <span>{"  "}</span>
            <span className="text-fuchsia-400">{"<p"}</span>
            <span className="text-slate-300">{" className="}</span>
            <span className="text-slate-400">{"\""}</span>
            <span className="text-sky-400">
              <AnimatedClassName
                value={currentClasses.description}
                isActive={activeElement === "description"}
              />
            </span>
            <span className="text-slate-400">{"\""}</span>
            <span className="text-slate-300">{">"}</span>
            <br />
            <span className="text-green-400">
              {
                "    We create modern, responsive and user-friendly web experiences."
              }
            </span>
            <br />
            <span>{"  "}</span>
            <span className="text-fuchsia-400">{"</p>"}</span>
            <br />
            <br />

            <span>{"  "}</span>
            <span className="text-fuchsia-400">{"<button"}</span>
            <span className="text-slate-300">{" className="}</span>
            <span className="text-slate-400">{"\""}</span>
            <span className="text-sky-400">
              <AnimatedClassName
                value={currentClasses.button}
                isActive={activeElement === "button"}
              />
            </span>
            <span className="text-slate-400">{"\""}</span>
            <span className="text-slate-300">{">"}</span>
            <span className="text-green-400">{"Learn more"}</span>
            <span className="text-fuchsia-400">{"</button>"}</span>
            <br />
            <br />

            <span>{"  "}</span>
            <span className="text-fuchsia-400">{"<img"}</span>
            <span className="text-slate-300">{" className="}</span>
            <span className="text-slate-400">{"\""}</span>
            <span className="text-sky-400">
              <AnimatedClassName
                value={currentClasses.photo}
                isActive={activeElement === "photo"}
              />
            </span>
            <span className="text-slate-400">{"\""}</span>
            <span className="text-slate-300">{" src="}</span>
            <span className="text-slate-400">{"\""}</span>
            <span className="text-amber-300">{"/about-photo.jpg"}</span>
            <span className="text-slate-400">{"\""}</span>
            <span className="text-slate-300">{" alt="}</span>
            <span className="text-slate-400">{"\""}</span>
            <span className="text-amber-300">{"About us"}</span>
            <span className="text-slate-400">{"\""}</span>
            <span className="text-slate-300">{" />"}</span>
            <br />

            <span className="text-fuchsia-400">{"</section>"}</span>
          </code>
        </pre>
      </div>
    </div>
  );
}