"use client";

import CodePanel from "./CodePanel";
import VisualPanel from "./VisualPanel";
import { useState } from "react";

export default function HomeScene() {
  const [stage, setStage] = useState("junior");
  return (
    <section className="flex-1 bg-zinc-950 text-white">
      <button
        onClick={() => setStage(stage === "junior" ? "middle" : "junior")}
        className="mb-4 rounded bg-blue-600 px-4 py-2 text-white"
      >
        Change Stage
      </button>

      <div className="mx-auto flex min-h-[calc(100vh-128px)] max-w-7xl flex-col lg:flex-row">
        {/* LEFT SIDE */}
        <div className="flex w-full items-center justify-center border-b border-zinc-800 p-6 lg:w-3/8 lg:border-b-0 lg:border-r">
          <CodePanel />
        </div>

        {/* RIGHT SIDE */}
        <div className="flex w-full items-center justify-center p-6 lg:w-5/8">
          <VisualPanel stage={stage} />
        </div>
      </div>
    </section>
  );
}
