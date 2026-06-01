"use client";

import { useEffect, useRef, useState } from "react";
import { aboutAnimationScript } from "./animation/aboutAnimationScript";
import { ABOUT_ANIMATION_EVENTS } from "./animation/aboutAnimationEvents";

const fullCode = aboutAnimationScript;

type CodePanelProps = {
  onStageChange: (stage: string) => void;
  onAnimationStepChange: (step: number) => void;
};

type Stage = "junior" | "middle" | "senior";

function renderHighlightedCode(code: string) {
  const parts = code.split(/(className="[^"]*")/g);

  return parts.map((part, index) => {
    if (part.startsWith('className="')) {
      return (
        <span key={index} className="text-sky-400">
          {part}
        </span>
      );
    }

    return (
      <span key={index} className="text-green-400">
        {part}
      </span>
    );
  });
}

export default function CodePanel({
  onStageChange,
  onAnimationStepChange,
}: CodePanelProps) {
  const [displayedCode, setDisplayedCode] = useState("");
  const codeContainerRef = useRef<HTMLDivElement>(null);
  const [stage, setStage] = useState<Stage>("junior");

  const MIDDLE_STAGE_INDEX = fullCode.indexOf("// MIDDLE");
  const SENIOR_STAGE_INDEX = fullCode.indexOf("// SENIOR");

  const TITLE_INDEX = fullCode.indexOf(ABOUT_ANIMATION_EVENTS.TITLE);
  const ABOUT_INDEX = fullCode.indexOf(ABOUT_ANIMATION_EVENTS.ABOUT);
  const BUTTON_INDEX = fullCode.indexOf(ABOUT_ANIMATION_EVENTS.BUTTON);
  const CARDS_INDEX = fullCode.indexOf(ABOUT_ANIMATION_EVENTS.CARDS);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setDisplayedCode(fullCode.slice(0, index));

      if (index > CARDS_INDEX) {
        onAnimationStepChange(4);
      } else if (index > BUTTON_INDEX) {
        onAnimationStepChange(3);
      } else if (index > ABOUT_INDEX) {
        onAnimationStepChange(2);
      } else if (index > TITLE_INDEX) {
        onAnimationStepChange(1);
      }

      if (index > MIDDLE_STAGE_INDEX) {
        setStage("middle");
        onStageChange("middle");
      }

      if (index > SENIOR_STAGE_INDEX) {
        setStage("senior");
        onStageChange("senior");
      }

      index++;

      if (index > fullCode.length) {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (codeContainerRef.current) {
      codeContainerRef.current.scrollTop =
        codeContainerRef.current.scrollHeight;
    }
  }, [displayedCode]);

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
        className={`mb-3 text-sm font-semibold uppercase tracking-wider ${stageColor}`}
      >
        {stageLabel}
      </div>

      {/* TOP BAR */}
      <div className="flex items-center gap-2 border-b border-zinc-800 px-4 py-3">
        <div className="h-3 w-3 rounded-full bg-red-500" />
        <div className="h-3 w-3 rounded-full bg-yellow-500" />
        <div className="h-3 w-3 rounded-full bg-green-500" />
      </div>

      {/* CODE AREA */}
      <div ref={codeContainerRef} className="max-h-[70vh] overflow-y-auto p-4">
        <pre className="whitespace-pre-wrap font-mono text-sm leading-4">
          {renderHighlightedCode(displayedCode)}

          <span className="animate-pulse text-white">█</span>
        </pre>
      </div>
    </div>
  );
}
