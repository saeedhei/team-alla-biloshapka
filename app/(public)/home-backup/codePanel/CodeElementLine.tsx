import type { AboutElement } from "./codePanelTypes";
import { CodeClassName } from "./CodeClassName";

type CodeElementLineProps = {
  tag: "p" | "h1" | "button";
  element: AboutElement;
  text: string;
  classValue: string;
  isActive: boolean;
  multiline?: boolean;
};

export function CodeElementLine({
  tag,
  element,
  text,
  classValue,
  isActive,
  multiline = false,
}: CodeElementLineProps) {
  return (
    <>
      <span>{"  "}</span>
      <span className="text-fuchsia-400">{`<${tag}`}</span>
      <span className="text-slate-300">{" className="}</span>
      <span className="text-slate-400">{'"'}</span>

      <CodeClassName value={classValue} isActive={isActive} />

      <span className="text-slate-400">{'"'}</span>
      <span className="text-slate-300">{">"}</span>

      {multiline ? (
        <>
          <br />
          <span className="text-green-400">{`    ${text}`}</span>
          <br />
          <span>{"  "}</span>
        </>
      ) : (
        <span className="text-green-400">{text}</span>
      )}

      <span className="text-fuchsia-400">{`</${tag}>`}</span>
      <br />
      <br />
    </>
  );
}