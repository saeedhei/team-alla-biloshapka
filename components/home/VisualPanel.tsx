import AboutSection from "./AboutSection";

type VisualPanelProps = {
  stage: string;
  animationStep: number;
};

export default function VisualPanel({
  stage,
  animationStep,
}: VisualPanelProps) {

  return (
    <div className="w-full max-w-3xl">
      <AboutSection
  stage={stage}
  animationStep={animationStep}
/>
    </div>
  );
}
