import AboutSection from "./AboutSection";

type VisualPanelProps = {
  stage: string;
  animationStep: number;
  visualStyleStep: number;
};

export default function VisualPanel({
  stage,
  animationStep,
  visualStyleStep,
}: VisualPanelProps) {
  return (
    <div className="w-full max-w-5xl">
      <AboutSection
        stage={stage}
        animationStep={animationStep}
        visualStyleStep={visualStyleStep}
      />
    </div>
  );
}
