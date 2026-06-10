type CodePanelHeaderProps = {
  stageLabel: string;
  stageColor: string;
};

export function CodePanelHeader({
  stageLabel,
  stageColor,
}: CodePanelHeaderProps) {
  return (
    <>
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
    </>
  );
}
