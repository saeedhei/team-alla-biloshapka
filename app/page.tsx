// app\page.tsx
import { About } from "./(public)/home/about-section";
import { Hero } from "@/features/sections/Hero";

export default function Home() {
  return (
    <>
      <About />
      <Hero
        title="features Hero section"
        description="You can use in many pages."
        imageSrc="/about_us.png"
        imageAlt="Home hero image"
        ctaText="Start a project"
      />
    </>
  );
}