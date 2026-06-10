const sparkleItems = [
  {
    className:
      "absolute left-[67%] top-[12%] h-1 w-1 animate-[seniorTwinkle_3.2s_ease-in-out_infinite] rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,1)]",
  },
  {
    className:
      "absolute left-[82%] top-[24%] h-1.5 w-1.5 animate-[seniorTwinkle_2.7s_ease-in-out_infinite] rounded-full bg-violet-200 shadow-[0_0_26px_rgba(255,255,255,1)]",
  },
  {
    className:
      "absolute left-[58%] top-[42%] h-1 w-1 animate-[seniorTwinkle_3.6s_ease-in-out_infinite] rounded-full bg-cyan-100 shadow-[0_0_26px_rgba(255,255,255,1)]",
  },
  {
    className:
      "absolute left-[76%] top-[48%] h-2 w-2 animate-[seniorTwinkle_2.4s_ease-in-out_infinite] rounded-full bg-sky-200 shadow-[0_0_26px_rgba(255,255,255,1)]",
  },
  {
    className:
      "absolute left-[91%] top-[58%] h-1 w-1 animate-[seniorTwinkle_3.9s_ease-in-out_infinite] rounded-full bg-white shadow-[0_0_14px_rgba(255,255,255,1)]",
  },
  {
    className:
      "absolute left-[52%] top-[72%] h-1.5 w-1.5 animate-[seniorTwinkle_2.9s_ease-in-out_infinite] rounded-full bg-cyan-200 shadow-[0_0_26px_rgba(255,255,255,1)]",
  },
  {
    className:
      "absolute left-[70%] top-[76%] h-1 w-1 animate-[seniorTwinkle_4.1s_ease-in-out_infinite] rounded-full bg-violet-100 shadow-[0_0_12px_#fdfdff]",
  },
  {
    className:
      "absolute left-[86%] top-[82%] h-1.5 w-1.5 animate-[seniorTwinkle_3.3s_ease-in-out_infinite] rounded-full bg-cyan-100 shadow-[0_0_16px_#fafdfd]",
  },
];

export default function SeniorBackgroundEffects() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_38%,rgba(34,211,238,0.28),transparent_24%),radial-gradient(circle_at_88%_18%,rgba(168,85,247,0.22),transparent_22%),radial-gradient(circle_at_58%_76%,rgba(14,165,233,0.18),transparent_26%)] animate-pulse" />

      <div className="pointer-events-none absolute -left-1/2 top-0 h-full w-1/2 rotate-12 bg-gradient-to-r from-transparent via-cyan-200/25 to-transparent blur-xl animate-[seniorPageShine_6s_ease-in-out_infinite]" />

      <div className="pointer-events-none absolute inset-0">
        <span className="absolute left-[48%] top-[18%] h-5 w-5 animate-[seniorTwinkle_2.1s_ease-in-out_infinite]">
          <span className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 rounded-full bg-white shadow-[0_0_18px_rgba(255,255,255,1)]" />
          <span className="absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 rounded-full bg-white shadow-[0_0_18px_rgba(255,255,255,1)]" />
          <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_14px_rgba(255,255,255,1)]" />
        </span>

        {sparkleItems.map((item, index) => (
          <span key={index} className={item.className} />
        ))}
      </div>
    </>
  );
}