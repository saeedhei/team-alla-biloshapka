"use client";

import { useEffect, useState } from "react";

const code = `<div
  className="rounded-none"
  className="bg-zinc-900"
  className="shadow-none"
>
`;

export default function CodePanel() {
  const [displayedCode, setDisplayedCode] = useState("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setDisplayedCode(code.slice(0, index));

      index++;

      if (index > code.length) {
        clearInterval(interval);
      }
    }, 65);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full overflow-hidden rounded-2xl border border-zinc-800 bg-black">

      {/* TOP BAR */}
      <div className="flex items-center gap-2 border-b border-zinc-800 px-4 py-3">

        <div className="h-3 w-3 rounded-full bg-red-500" />
        <div className="h-3 w-3 rounded-full bg-yellow-500" />
        <div className="h-3 w-3 rounded-full bg-green-500" />

      </div>

      {/* CODE AREA */}
      <div className="p-6">

        <pre className="whitespace-pre-wrap font-mono text-lg text-green-400">

          {displayedCode}

          <span className="animate-pulse text-white">
            █
          </span>

        </pre>

      </div>

    </div>
  );
}