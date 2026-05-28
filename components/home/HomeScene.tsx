import CodePanel from "./CodePanel";

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

        <div className="flex w-full max-w-xl items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900">
            <p className="text-zinc-500">
              Visual Panel
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}