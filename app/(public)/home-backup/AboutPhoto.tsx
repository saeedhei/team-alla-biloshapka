type AboutPhotoProps = {
  photoStage: "junior" | "middle" | "senior";
};

export default function AboutPhoto({ photoStage }: AboutPhotoProps) {
  return (
    <div
      className={`justify-self-end overflow-hidden border transition-all duration-1000 ${
        photoStage === "middle"
          ? "h-[460px] w-full max-w-[620px] rounded-3xl border-white/40 shadow-2xl"
          : "h-[300px] w-full max-w-[520px] rounded-xl border-white/20"
      }`}
    >
      <img
        src="/about_us.png"
        alt="Team working on a digital product"
        className="h-full w-full object-cover transition-all duration-1000"
      />
    </div>
  );
}