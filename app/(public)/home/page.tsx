"use client";

import { useState } from "react";
import { About } from "./about-section";
import { MidAbout } from "./mid-about-section";
import { SeniorAbout } from "./senior-about-section";

type Stage = "junior" | "mid" | "senior";

export default function HomePreviewPage() {
  const [stage, setStage] = useState<Stage>("junior");

  return (
    <>
      <div className="flex justify-center gap-2 border-b border-zinc-200 bg-zinc-50 px-4 py-3">
        {(
          [
            { id: "junior", label: "Junior" },
            { id: "mid", label: "Middle" },
            { id: "senior", label: "Senior" },
          ] as const
        ).map(({ id, label }) => (
          <button
            key={id}
            type="button"
            onClick={() => setStage(id)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium ${
              stage === id
                ? "bg-zinc-900 text-white"
                : "bg-white text-zinc-600 ring-1 ring-zinc-200"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {stage === "junior" && <About />}
      {stage === "mid" && <MidAbout />}
      {stage === "senior" && <SeniorAbout />}
    </>
  );
}
