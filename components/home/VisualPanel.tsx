import AboutSection from "./AboutSection";

type VisualPanelProps = {
  stage: string;
};

export default function VisualPanel({ stage }: VisualPanelProps) {
  return (
    <div className="w-full max-w-3xl">
      
      <p className="mb-4 text-sm text-white">
       
          {stage.toUpperCase()}
      
        Current stage: {stage}
      </p>

      <AboutSection stage={stage} />

    </div>
  );
}
