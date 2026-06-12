import { CodeClassName } from "./CodeClassName";

type CodeOpeningTagProps = {
  tag: string;
  classValue: string;
  isActive: boolean;
  indent?: boolean;
};

export function CodeOpeningTag({
  tag,
  classValue,
  isActive,
  indent = false,
}: CodeOpeningTagProps) {
  return (
    <>
      {indent && <span>{"  "}</span>}
      <span className="text-fuchsia-400">{`<${tag}`}</span>
      <span className="text-slate-300">{" className="}</span>
      <span className="text-slate-400">{'"'}</span>

      <CodeClassName value={classValue} isActive={isActive} />

      <span className="text-slate-400">{'"'}</span>
      <span className="text-slate-300">{">"}</span>
      <br />
    </>
  );
}