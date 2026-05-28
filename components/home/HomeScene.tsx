import CodePanel from "./CodePanel";
import VisualPanel from "./VisualPanel";

export default function HomeScene() {
  return (
    <section className="flex-1 bg-zinc-950 text-white">
      <div className="mx-auto flex min-h-[calc(100vh-128px)] max-w-7xl flex-col lg:flex-row">
        {/* LEFT SIDE */}
        <div className="flex w-full items-center justify-center border-b border-zinc-800 p-6 lg:w-3/8 lg:border-b-0 lg:border-r">
          <CodePanel />
        </div>

        {/* RIGHT SIDE */}
        <div className="flex w-full items-center justify-center p-6 lg:w-5/8">
          <VisualPanel />
        </div>
      </div>
    </section>
  );
}
