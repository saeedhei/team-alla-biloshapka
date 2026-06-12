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
} from "./codePanel/codePanelData";

import {
  getAnimationStep,
  getVisualStyleStep,
} from "./codePanel/codePanelHelpers";

import { CodePanelHeader } from "./codePanel/CodePanelHeader";
import { CodeElementLine } from "./codePanel/CodeElementLine";
import { CodeClassName } from "./codePanel/CodeClassName";
import { CodeImageLine } from "./codePanel/CodeImageLine";
import { CodeOpeningTag } from "./codePanel/CodeOpeningTag";

type CodePanelProps = {
  onStageChange: (stage: string) => void;
  onAnimationStepChange: (step: number) => void;
  onVisualStyleStepChange: (step: number) => void;
};

export default function CodePanel({
  onStageChange,
  onAnimationStepChange,
  onVisualStyleStepChange,
}: CodePanelProps) {
  const [currentClasses, setCurrentClasses] = useState<AboutClasses>(
    aboutClassStages.junior,
  );
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
  const timers: number[] = [];

  const lastTimelineTime = Math.max(
    ...aboutClassTimeline.map((item) => item.time),
  );

  const loopDelay = 5000;
  const loopDuration = lastTimelineTime * 1000 + loopDelay;

  function resetToJunior() {
    setStage("junior");
    setActiveElement(null);
    setCurrentClasses(aboutClassStages.junior);

    callbacksRef.current.onStageChange("junior");
    callbacksRef.current.onAnimationStepChange(5);
    callbacksRef.current.onVisualStyleStepChange(0);
  }

  function runTimelineCycle() {
    resetToJunior();

    aboutClassTimeline.forEach((item) => {
      const timer = window.setTimeout(() => {
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

        const activeElementTimer = window.setTimeout(() => {
          setActiveElement((currentElement) =>
            currentElement === item.element ? null : currentElement,
          );
        }, 1200);

        timers.push(activeElementTimer);
      }, item.time * 1000);

      timers.push(timer);
    });
  }

  runTimelineCycle();

  const loopTimer = window.setInterval(runTimelineCycle, loopDuration);

  return () => {
    window.clearInterval(loopTimer);
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

  const codeElementLines = [
    {
      tag: "p",
      element: "label",
      text: "About Us",
      multiline: false,
    },
    {
      tag: "h1",
      element: "title",
      text: "We build digital products",
      multiline: true,
    },
    {
      tag: "p",
      element: "description",
      text: "We create modern, responsive and user-friendly web experiences.",
      multiline: true,
    },
    {
      tag: "button",
      element: "button",
      text: "Learn more",
      multiline: false,
    },
  ] as const;

  return (
    <div className="w-full overflow-hidden rounded-2xl border border-zinc-800 bg-black">
      <CodePanelHeader stageLabel={stageLabel} stageColor={stageColor} />

      <div className="max-h-[70vh] overflow-y-auto p-4">
        <pre className="whitespace-pre-wrap font-mono text-sm leading-5">
          <code>
            <CodeOpeningTag
              tag="section"
              classValue={currentClasses.section}
              isActive={activeElement === "section"}
            />

            {codeElementLines.map((line) => (
              <CodeElementLine
                key={line.element}
                tag={line.tag}
                element={line.element}
                text={line.text}
                classValue={currentClasses[line.element]}
                isActive={activeElement === line.element}
                multiline={line.multiline}
              />
            ))}

            <CodeImageLine
              classValue={currentClasses.photo}
              isActive={activeElement === "photo"}
              src="/about-photo.jpg"
              alt="About us"
            />
            <span className="text-fuchsia-400">{"</section>"}</span>
          </code>
        </pre>
      </div>
    </div>
  );
}
