"use client";

import { useState } from "react";
import CodePanel from "./CodePanel";
import VisualPanel from "./VisualPanel";

export default function HomeScene() {
  const [stage, setStage] = useState("junior");
  const [animationStep, setAnimationStep] = useState(0);

  return (
    <section className="flex-1 bg-zinc-950 text-white">
      <div className="mx-auto flex h-[calc(100vh-128px)] max-w-7xl flex-col overflow-hidden lg:flex-row">

        {/* LEFT SIDE */}
        <div className="flex w-full items-center justify-center border-b border-zinc-800 p-6 lg:w-1/4 lg:border-b-0 lg:border-r">
          <CodePanel onStageChange={(newStage) => setStage(newStage)} />
        </div>

        {/* RIGHT SIDE */}
        <div className="flex w-full items-center justify-center p-6 lg:w-3/4">
          <VisualPanel stage={stage} />
        </div>

      </div>
    </section>
  );
}