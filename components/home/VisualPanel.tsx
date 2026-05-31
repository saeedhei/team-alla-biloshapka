import AboutSection from "./AboutSection";

type VisualPanelProps = {
  stage: string;
};

export default function VisualPanel({ stage }: VisualPanelProps) {
  return (
    <div className="w-full max-w-3xl">
      <AboutSection stage={stage} />
    </div>
  );
}
