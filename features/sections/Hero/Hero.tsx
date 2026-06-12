import Image from "next/image";

type HeroProps = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  ctaText?: string;
  onCtaClick?: () => void;
};

export function Hero({
  title,
  description,
  imageSrc,
  imageAlt,
  ctaText,
  onCtaClick,
}: HeroProps) {
  return (
    <section className="min-h-[calc(100vh-128px)] bg-white text-zinc-900">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-12 lg:grid-cols-2 lg:py-16">
        {/* Left side */}
        <div>
          <h1 className="mb-4 text-3xl font-bold sm:text-4xl">
            {title}
          </h1>

          <p className="mb-6 max-w-xl text-base text-zinc-600">
            {description}
          </p>

          {ctaText && (
            <button
              type="button"
              onClick={onCtaClick}
              className="rounded bg-zinc-900 px-5 py-3 text-sm font-medium text-white"
            >
              {ctaText}
            </button>
          )}
        </div>

        {/* Right side */}
        <div className="overflow-hidden rounded-xl border border-zinc-200 shadow-sm">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={620}
            height={460}
            className="h-64 w-full object-cover sm:h-80 lg:h-115"
            priority
          />
        </div>
      </div>
    </section>
  );
}