import { aboutStyles } from "./aboutStyles";

type AboutSectionProps = {
  stage: string;
  animationStep: number;
  visualStyleStep: number;
};

type VisualStage = "junior" | "middle" | "senior";

function SeniorTechVisual() {
  return (
    <div className="relative h-[390px] w-full max-w-[520px] justify-self-end overflow-hidden rounded-[2rem] bg-slate-950 shadow-[0_30px_90px_rgba(8,47,73,0.55)]">
      <img
        src="/senior-tech-visual.png"
        alt="Premium abstract coding academy visual"
        className="h-full w-full object-cover object-center opacity-90 brightness-110 contrast-105 saturate-125"
      />

      {/* soft animated glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.35),transparent_28%),radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.28),transparent_32%)] opacity-80 animate-pulse" />

      {/* glass layer */}
      <div className="pointer-events-none absolute inset-4 rounded-[1.5rem] border border-white/10 bg-white/[0.03] backdrop-blur-[1px]" />

      {/* moving light line */}
      <div className="pointer-events-none absolute -left-1/2 top-0 h-full w-1/2 rotate-12 bg-gradient-to-r from-transparent via-cyan-200/30 to-transparent blur-sm animate-[seniorLightSweep_4.5s_ease-in-out_infinite]" />

      {/* floating code chips */}
      <div className="absolute left-6 top-7 rounded-2xl border border-cyan-200/20 bg-slate-950/40 px-4 py-2 font-mono text-sm text-cyan-100 shadow-[0_0_28px_rgba(34,211,238,0.22)] backdrop-blur-md animate-[seniorFloat_5s_ease-in-out_infinite]">
        {"{ logic }"}
      </div>

      <div className="absolute right-7 top-10 rounded-2xl border border-violet-200/20 bg-slate-950/40 px-4 py-2 font-mono text-sm text-violet-100 shadow-[0_0_28px_rgba(168,85,247,0.22)] backdrop-blur-md animate-[seniorFloat_6s_ease-in-out_infinite]">
        {"</>"}
      </div>

      <div className="absolute bottom-7 left-10 rounded-2xl border border-sky-200/20 bg-slate-950/40 px-4 py-2 font-mono text-sm text-sky-100 shadow-[0_0_28px_rgba(56,189,248,0.22)] backdrop-blur-md animate-[seniorFloat_7s_ease-in-out_infinite]">
        {"if growth"}
      </div>

      <div className="absolute bottom-8 right-8 rounded-2xl border border-cyan-200/20 bg-slate-950/40 px-4 py-2 font-mono text-sm text-cyan-100 shadow-[0_0_28px_rgba(34,211,238,0.22)] backdrop-blur-md animate-[seniorFloat_5.5s_ease-in-out_infinite]">
        {"const future"}
      </div>

      {/* bottom shine */}
      <div className="pointer-events-none absolute inset-x-8 bottom-0 h-24 bg-gradient-to-t from-cyan-400/20 to-transparent blur-2xl" />

      <style jsx>{`
        @keyframes seniorLightSweep {
          0% {
            transform: translateX(-60%) rotate(12deg);
            opacity: 0;
          }

          35% {
            opacity: 1;
          }

          70% {
            opacity: 0.75;
          }

          100% {
            transform: translateX(320%) rotate(12deg);
            opacity: 0;
          }
        }

        @keyframes seniorFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
}

export default function AboutSection({
  stage,
  animationStep,
  visualStyleStep,
}: AboutSectionProps) {
  
  const showTitle = true;
  const showEyebrow = true;
  const showDescription = true;
  const showButton = true;
  const showPhoto = true;

  function getStageForStep(requiredStep: number): VisualStage {
    if (stage === "senior") {
      return visualStyleStep >= requiredStep ? "senior" : "middle";
    }

    if (stage === "middle") {
      return visualStyleStep >= requiredStep ? "middle" : "junior";
    }

    return "junior";
  }

  const backgroundStage = getStageForStep(1);
  const eyebrowStage = getStageForStep(2);
  const titleStage = getStageForStep(2);
  const descriptionStage = getStageForStep(3);
  const buttonStage = getStageForStep(4);
  const photoStage = getStageForStep(5);

  const seniorSectionStyles =
    "relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.22),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.2),_transparent_34%),linear-gradient(135deg,_#020617_0%,_#0f172a_48%,_#111827_100%)] text-white shadow-2xl shadow-sky-950/40";

  const seniorEyebrowStyles =
    "text-cyan-200 drop-shadow-[0_0_12px_rgba(103,232,249,0.35)]";

  const seniorTitleStyles =
    "bg-gradient-to-r from-white via-cyan-100 to-sky-300 bg-clip-text text-transparent drop-shadow-[0_10px_30px_rgba(56,189,248,0.22)]";

  const seniorDescriptionStyles = "text-slate-200/90";

  const seniorButtonStyles =
    "rounded-2xl bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 px-8 py-4 text-sm font-bold text-slate-950 shadow-[0_18px_35px_rgba(56,189,248,0.35),inset_0_1px_0_rgba(255,255,255,0.65)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_45px_rgba(56,189,248,0.45),inset_0_1px_0_rgba(255,255,255,0.75)]";

  const sectionStyles =
    backgroundStage === "senior"
      ? seniorSectionStyles
      : aboutStyles.section[backgroundStage];

  const eyebrowStyles =
    eyebrowStage === "senior"
      ? `${aboutStyles.eyebrow} ${seniorEyebrowStyles}`
      : aboutStyles.eyebrow;

  const titleStyles =
    titleStage === "senior"
      ? `${aboutStyles.title.base} ${seniorTitleStyles}`
      : `${aboutStyles.title.base} ${aboutStyles.title[titleStage]}`;

  const descriptionStyles =
    descriptionStage === "senior"
      ? `${aboutStyles.description.base} ${seniorDescriptionStyles}`
      : `${aboutStyles.description.base} ${aboutStyles.description[descriptionStage]}`;

  const buttonStyles =
    buttonStage === "senior"
      ? `${aboutStyles.button.base} ${seniorButtonStyles}`
      : `${aboutStyles.button.base} ${aboutStyles.button[buttonStage]}`;

  return (
    <section className={`${aboutStyles.section.base} ${sectionStyles}`}>
      <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
        <div>
          {showEyebrow && <p className={eyebrowStyles}>About Us</p>}

          {showTitle && (
            <h1 className={titleStyles}>
              We build digital products for growing companies
            </h1>
          )}

          {showDescription && (
            <p className={descriptionStyles}>
              We are a tech development company that helps businesses create
              modern websites, web applications, and simple digital tools for
              everyday work.
            </p>
          )}

          {showButton && (
            <button className={buttonStyles}>Start a project</button>
          )}
        </div>

        {showPhoto && (
          <>
            {photoStage === "senior" ? (
              <SeniorTechVisual />
            ) : (
              <div
                className={`justify-self-end overflow-hidden border transition-all duration-1000 ${
                  photoStage === "middle"
                    ? "h-[460px] w-full max-w-[620px] rounded-3xl border-white/40 shadow-2xl"
                    : "h-[300px] w-full max-w-[520px] rounded-xl border-white/20"
                }`}
              >
                <img
                  src="/about_us.png"
                  alt="Team working on a digital product"
                  className="h-full w-full object-cover transition-all duration-1000"
                />
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
