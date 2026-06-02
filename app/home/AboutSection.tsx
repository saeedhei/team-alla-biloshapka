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
      <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_1fr]">
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
            className={`overflow-hidden border border-white/20 transition-all duration-1000 ${
              photoStage === "middle" ? "rounded-2xl shadow-xl" : "rounded-none"
            }`}
          >
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
