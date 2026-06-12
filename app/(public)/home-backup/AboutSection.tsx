import { aboutStyles } from "./aboutStyles";
import SeniorBackgroundEffects from "./SeniorBackgroundEffects";
import AboutPhoto from "./AboutPhoto";

type AboutSectionProps = {
  stage: string;
  animationStep: number;
  visualStyleStep: number;
};

type VisualStage = "junior" | "middle" | "senior";

export default function AboutSection({
  stage,
  visualStyleStep,
}: AboutSectionProps) {
  // Keeps visual upgrades progressive: each UI part changes only after its code line is animated.
  function getStageForStep(requiredStep: number): VisualStage {
    if (stage === "senior") {
      return visualStyleStep >= requiredStep ? "senior" : "middle";
    }

    if (stage === "middle") {
      return visualStyleStep >= requiredStep ? "middle" : "junior";
    }

    return "junior";
  }

  const isSeniorStage = stage === "senior";

  // The senior background is delayed to avoid showing it before the text starts upgrading.
  const backgroundStage: VisualStage =
    isSeniorStage && visualStyleStep < 2 ? "middle" : getStageForStep(1);

  const eyebrowStage = getStageForStep(2);
  const titleStage = getStageForStep(2);
  const descriptionStage = getStageForStep(3);
  const buttonStage = getStageForStep(4);
  const photoStage = getStageForStep(5);

  // Senior-only Tailwind styles. Junior and Middle styles are stored in aboutStyles.ts.
  const seniorSectionStyles =
    "relative overflow-hidden bg-[url('/senior-bg.png')] bg-cover bg-center text-white shadow-2xl shadow-sky-950/40";

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
      {backgroundStage === "senior" && <SeniorBackgroundEffects />}

      <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <p className={eyebrowStyles}>About Us</p>

          <h1 className={titleStyles}>
            We build digital products for growing companies
          </h1>

          <p className={descriptionStyles}>
            We are a tech development company that helps businesses create
            modern websites, web applications, and simple digital tools for
            everyday work.
          </p>

          <button className={buttonStyles}>Start a project</button>
        </div>

        {/* Junior and Middle use the regular photo. Senior removes it for a cleaner final layout. */}
        {stage !== "senior" && <AboutPhoto photoStage={photoStage} />}
      </div>

      <style jsx>{`
        @keyframes seniorTwinkle {
          0%,
          100% {
            opacity: 0.15;
            transform: scale(0.6);
          }

          45% {
            opacity: 1;
            transform: scale(1.35);
          }

          70% {
            opacity: 0.45;
            transform: scale(0.9);
          }
        }

        @keyframes seniorPageShine {
          0% {
            transform: translateX(-70%) rotate(12deg);
            opacity: 0;
          }

          35% {
            opacity: 0.9;
          }

          70% {
            opacity: 0.7;
          }

          100% {
            transform: translateX(330%) rotate(12deg);
            opacity: 0;
          }
        }

        @keyframes seniorSparkle {
          0%,
          100% {
            opacity: 0.16;
            filter: brightness(1);
          }

          50% {
            opacity: 0.38;
            filter: brightness(1.8);
          }
        }
      `}</style>
    </section>
  );
}
