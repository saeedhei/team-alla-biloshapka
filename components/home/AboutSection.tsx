import { aboutStyles } from "./aboutStyles";

type AboutSectionProps = {
  stage: string;
};

export default function AboutSection({ stage }: AboutSectionProps) {
  const currentStage =
    stage === "junior" ? "junior" : stage === "middle" ? "middle" : "senior";

  return (
    <section
      className={`${aboutStyles.section.base} ${aboutStyles.section[currentStage]}`}
    >
      <p className={aboutStyles.eyebrow}>About Us</p>

      <h1
        className={`${aboutStyles.title.base} ${aboutStyles.title[currentStage]}`}
      >
        We build digital products for growing companies
      </h1>

      <p
        className={`${aboutStyles.description.base} ${aboutStyles.description[currentStage]}`}
      >
        We are a tech development company that helps businesses create modern
        websites, web applications, and simple digital tools for everyday work.
      </p>

      <button
        className={`${aboutStyles.button.base} ${aboutStyles.button[currentStage]}`}
      >
        Start a project
      </button>

      <div className={aboutStyles.cardsGrid}>
        <div
          className={`${aboutStyles.card.base} ${aboutStyles.card[currentStage]}`}
        >
          <h2
            className={`${aboutStyles.cardTitle.base} ${aboutStyles.cardTitle[currentStage]}`}
          >
            Websites
          </h2>

          <p
            className={`${aboutStyles.cardText.base} ${aboutStyles.cardText[currentStage]}`}
          >
            Clean and simple company websites.
          </p>
        </div>

        <div
          className={`${aboutStyles.card.base} ${aboutStyles.card[currentStage]}`}
        >
          <h2
            className={`${aboutStyles.cardTitle.base} ${aboutStyles.cardTitle[currentStage]}`}
          >
            Web Apps
          </h2>

          <p
            className={`${aboutStyles.cardText.base} ${aboutStyles.cardText[currentStage]}`}
          >
            Useful tools for clients and teams.
          </p>
        </div>

        <div
          className={`${aboutStyles.card.base} ${aboutStyles.card[currentStage]}`}
        >
          <h2
            className={`${aboutStyles.cardTitle.base} ${aboutStyles.cardTitle[currentStage]}`}
          >
            Support
          </h2>

          <p
            className={`${aboutStyles.cardText.base} ${aboutStyles.cardText[currentStage]}`}
          >
            Help with improving existing products.
          </p>
        </div>
      </div>
    </section>
  );
}
