"use client";

import { useEffect, useRef, useState } from "react";
import type {
  AboutClasses,
  AboutElement,
  Stage,
  TimelineItem,
} from "./codePanel/codePanelTypes";

import {
  aboutClassStages,
  aboutClassTimeline,
  emptyClasses,
} from "./codePanel/codePanelData";

import { AnimatedClassName } from "./codePanel/AnimatedClassName";

type CodePanelProps = {
  onStageChange: (stage: string) => void;
  onAnimationStepChange: (step: number) => void;
  onVisualStyleStepChange: (step: number) => void;
};

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
            <span className="text-slate-400">{'"'}</span>
            <span className="text-sky-400">
              <AnimatedClassName
                value={currentClasses.section}
                isActive={activeElement === "section"}
              />
            </span>
            <span className="text-slate-400">{'"'}</span>
            <span className="text-slate-300">{">"}</span>
            <br />

            <span>{"  "}</span>
            <span className="text-fuchsia-400">{"<p"}</span>
            <span className="text-slate-300">{" className="}</span>
            <span className="text-slate-400">{'"'}</span>
            <span className="text-sky-400">
              <AnimatedClassName
                value={currentClasses.label}
                isActive={activeElement === "label"}
              />
            </span>
            <span className="text-slate-400">{'"'}</span>
            <span className="text-slate-300">{">"}</span>
            <span className="text-green-400">{"About Us"}</span>
            <span className="text-fuchsia-400">{"</p>"}</span>
            <br />
            <br />

            <span>{"  "}</span>
            <span className="text-fuchsia-400">{"<h1"}</span>
            <span className="text-slate-300">{" className="}</span>
            <span className="text-slate-400">{'"'}</span>
            <span className="text-sky-400">
              <AnimatedClassName
                value={currentClasses.title}
                isActive={activeElement === "title"}
              />
            </span>
            <span className="text-slate-400">{'"'}</span>
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
            <span className="text-slate-400">{'"'}</span>
            <span className="text-sky-400">
              <AnimatedClassName
                value={currentClasses.description}
                isActive={activeElement === "description"}
              />
            </span>
            <span className="text-slate-400">{'"'}</span>
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
            <span className="text-slate-400">{'"'}</span>
            <span className="text-sky-400">
              <AnimatedClassName
                value={currentClasses.button}
                isActive={activeElement === "button"}
              />
            </span>
            <span className="text-slate-400">{'"'}</span>
            <span className="text-slate-300">{">"}</span>
            <span className="text-green-400">{"Learn more"}</span>
            <span className="text-fuchsia-400">{"</button>"}</span>
            <br />
            <br />

            <span>{"  "}</span>
            <span className="text-fuchsia-400">{"<img"}</span>
            <span className="text-slate-300">{" className="}</span>
            <span className="text-slate-400">{'"'}</span>
            <span className="text-sky-400">
              <AnimatedClassName
                value={currentClasses.photo}
                isActive={activeElement === "photo"}
              />
            </span>
            <span className="text-slate-400">{'"'}</span>
            <span className="text-slate-300">{" src="}</span>
            <span className="text-slate-400">{'"'}</span>
            <span className="text-amber-300">{"/about-photo.jpg"}</span>
            <span className="text-slate-400">{'"'}</span>
            <span className="text-slate-300">{" alt="}</span>
            <span className="text-slate-400">{'"'}</span>
            <span className="text-amber-300">{"About us"}</span>
            <span className="text-slate-400">{'"'}</span>
            <span className="text-slate-300">{" />"}</span>
            <br />

            <span className="text-fuchsia-400">{"</section>"}</span>
          </code>
        </pre>
      </div>
    </div>
  );
}
