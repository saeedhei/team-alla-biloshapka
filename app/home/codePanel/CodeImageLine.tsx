import { CodeClassName } from "./CodeClassName";

type CodeImageLineProps = {
  classValue: string;
  isActive: boolean;
  src: string;
  alt: string;
};

export function CodeImageLine({
  classValue,
  isActive,
  src,
  alt,
}: CodeImageLineProps) {
  return (
    <>
      <span>{"  "}</span>
      <span className="text-fuchsia-400">{"<img"}</span>
      <span className="text-slate-300">{" className="}</span>
      <span className="text-slate-400">{'"'}</span>

      <CodeClassName value={classValue} isActive={isActive} />

      <span className="text-slate-400">{'"'}</span>
      <span className="text-slate-300">{" src="}</span>
      <span className="text-slate-400">{'"'}</span>
      <span className="text-amber-300">{src}</span>
      <span className="text-slate-400">{'"'}</span>
      <span className="text-slate-300">{" alt="}</span>
      <span className="text-slate-400">{'"'}</span>
      <span className="text-amber-300">{alt}</span>
      <span className="text-slate-400">{'"'}</span>
      <span className="text-slate-300">{" />"}</span>
      <br />
    </>
  );
}