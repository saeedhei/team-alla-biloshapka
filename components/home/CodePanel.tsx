export default function CodePanel() {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-zinc-800 bg-black">

      {/* TOP BAR */}
      <div className="flex items-center gap-2 border-b border-zinc-800 px-4 py-3">
        
        <div className="h-3 w-3 rounded-full bg-red-500" />
        <div className="h-3 w-3 rounded-full bg-yellow-500" />
        <div className="h-3 w-3 rounded-full bg-green-500" />

      </div>

      {/* CODE AREA */}
      <div className="space-y-3 p-6 font-mono text-sm">

        <p className="text-blue-400">
          &lt;div
        </p>

        <p className="pl-4 text-zinc-400">
          className=
          <span className="text-green-400">
            "rounded-none"
          </span>
        </p>

        <p className="pl-4 text-zinc-400">
          className=
          <span className="text-green-400">
            "bg-zinc-900"
          </span>
        </p>

        <p className="pl-4 text-zinc-400">
          className=
          <span className="text-green-400">
            "shadow-none"
          </span>
        </p>

        <p className="text-blue-400">
          &gt;
        </p>

        <div className="flex items-center gap-2 text-zinc-500">

          <span>
            |
          </span>

          <span className="animate-pulse">
            █
          </span>

        </div>

      </div>

    </div>
  );
}