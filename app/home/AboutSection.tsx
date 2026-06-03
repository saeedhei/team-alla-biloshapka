import { aboutStyles } from "./aboutStyles";

type AboutSectionProps = {
  stage: string;
  animationStep: number;
  visualStyleStep: number;
};

export default function AboutSection({
  stage,
  animationStep,
  visualStyleStep,
}: AboutSectionProps) {
  const showTitle = animationStep >= 1;
  const showEyebrow = animationStep >= 2;
  const showDescription = animationStep >= 3;
  const showButton = animationStep >= 4;
  const showPhoto = animationStep >= 5;

  const backgroundStage = visualStyleStep >= 1 ? "middle" : "junior";
  const titleStage = visualStyleStep >= 2 ? "middle" : "junior";
  const descriptionStage = visualStyleStep >= 3 ? "middle" : "junior";
  const buttonStage = visualStyleStep >= 4 ? "middle" : "junior";
  const photoStage = visualStyleStep >= 5 ? "middle" : "junior";

  return (
    <section
      className={`${aboutStyles.section.base} ${aboutStyles.section[backgroundStage]}`}
    >
      <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
        <div>
          {showEyebrow && <p className={aboutStyles.eyebrow}>About Us</p>}

          {showTitle && (
            <h1
              className={`${aboutStyles.title.base} ${aboutStyles.title[titleStage]}`}
            >
              We build digital products for growing companies
            </h1>
          )}

          {showDescription && (
            <p
              className={`${aboutStyles.description.base} ${aboutStyles.description[descriptionStage]}`}
            >
              We are a tech development company that helps businesses create
              modern websites, web applications, and simple digital tools for
              everyday work.
            </p>
          )}

          {showButton && (
            <button
              className={`${aboutStyles.button.base} ${aboutStyles.button[buttonStage]}`}
            >
              Start a project
            </button>
          )}
        </div>

        {showPhoto && (
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
      </div>
    </section>
  );
}
