"use client";

import { useEffect, useRef, useState } from "react";

const code = `
<section
  className="bg-white"
>

  <button
    className="rounded-none"
  />

  <div
    className="shadow-none"
  />

  // Middle upgrade

  <button
    className="rounded-xl"
  />

  <div
    className="bg-blue-50"
  />

  <div
    className="shadow-lg"
  />

  // Senior upgrade

  <section
    className="bg-gradient-to-br"
  />

  <div
    className="backdrop-blur"
  />

  <div
    className="shadow-2xl"
  />
</section>
`;

type CodePanelProps = {
  onStageChange: (stage: string) => void;
};

type Stage = "junior" | "middle" | "senior";

export default function CodePanel({ onStageChange }: CodePanelProps) {
  const [displayedCode, setDisplayedCode] = useState("");
  const codeContainerRef = useRef<HTMLDivElement>(null);
  const [stage, setStage] = useState<Stage>("junior");

const MIDDLE_STAGE_INDEX = code.indexOf("// Middle upgrade");
const SENIOR_STAGE_INDEX = code.indexOf("// Senior upgrade");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setDisplayedCode(code.slice(0, index));

      if (index > MIDDLE_STAGE_INDEX) {
        setStage("middle");
        onStageChange("middle");
      }

      if (index > SENIOR_STAGE_INDEX) {
        setStage("senior");
        onStageChange("senior");
      }

      index++;

      if (index > code.length) {
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
        <pre className="whitespace-pre-wrap font-mono text-sm leading-4 text-green-400">
          {displayedCode}

          <span className="animate-pulse text-white">█</span>
        </pre>
      </div>
    </div>
  );
}
