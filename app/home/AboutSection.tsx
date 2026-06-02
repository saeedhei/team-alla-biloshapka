import { aboutStyles } from "./aboutStyles";

type AboutSectionProps = {
  stage: string;
  animationStep: number;
};

export default function AboutSection({
  stage,
  animationStep,
}: AboutSectionProps) {
  const currentStage =
    stage === "junior" ? "junior" : stage === "middle" ? "middle" : "senior";

  const showTitle = animationStep >= 1;
  const showEyebrow = animationStep >= 2;
  const showDescription = animationStep >= 3;
  const showButton = animationStep >= 4;
  const showPhoto = animationStep >= 5;

  return (
    <section
      className={`${aboutStyles.section.base} ${aboutStyles.section[currentStage]}`}
    >
      <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_1fr]">
        <div>
          {showEyebrow && <p className={aboutStyles.eyebrow}>About Us</p>}

          {showTitle && (
            <h1
              className={`${aboutStyles.title.base} ${aboutStyles.title[currentStage]}`}
            >
              We build digital products for growing companies
            </h1>
          )}

          {showDescription && (
            <p
              className={`${aboutStyles.description.base} ${aboutStyles.description[currentStage]}`}
            >
              We are a tech development company that helps businesses create
              modern websites, web applications, and simple digital tools for
              everyday work.
            </p>
          )}

          {showButton && (
            <button
              className={`${aboutStyles.button.base} ${aboutStyles.button[currentStage]}`}
            >
              Start a project
            </button>
          )}
        </div>

        {showPhoto && (
          <div className="overflow-hidden rounded-2xl border border-white/20">
            <img
              src="/about_us.png"
              alt="Team working on a digital product"
              className="h-80 w-full object-cover"
            />
          </div>
        )}
      </div>
    </section>
  );
}