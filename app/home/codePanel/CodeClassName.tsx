import { AnimatedClassName } from "./AnimatedClassName";

type CodeClassNameProps = {
  value: string;
  isActive: boolean;
};

export function CodeClassName({ value, isActive }: CodeClassNameProps) {
  return (
    <span className="text-sky-400">
      <AnimatedClassName value={value} isActive={isActive} />
    </span>
  );
}