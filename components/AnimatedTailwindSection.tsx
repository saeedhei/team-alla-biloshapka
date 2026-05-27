"use client";
import { useEffect, useState } from "react";

export default function AnimatedTailwindSection() {
  /*
   * Animated Tailwind showcase section.
   * The left side simulates live Tailwind code typing.
   * The right side contains a photo that will react
   * to typed Tailwind classes using GSAP animations.
   */

  /*
   * Animation steps simulate
   * real Tailwind editing workflow.
   */
  const animationSteps = [
    {
      text: "",
      radius: "0px",
    },

    {
      text: "rounded",
      radius: "12px",
    },

    {
      text: "rounded-[30px]",
      radius: "30px",
    },

    {
      text: "rounded-[50px]",
      radius: "50px",
    },
  ];

  // Stores currently typed code
  const [displayedCode, setDisplayedCode] = useState("");

  // Current animation step index
  const [currentStep, setCurrentStep] = useState(0);

  // Controls animated photo border radius
  const [photoRadius, setPhotoRadius] = useState("0px");

  useEffect(() => {
    const currentAnimation = animationSteps[currentStep];

    /*
     * Static HTML template.
     * Only Tailwind class changes dynamically.
     */
    const templateStart = `
<div className="`;

    const templateEnd = `" overflow-hidden">
  <img src="/photo.jpg" />
</div>
`;

    let index = 0;

    /*
     * Typing animation.
     */
    const typingInterval = setInterval(() => {
      const typedClass = currentAnimation.text.slice(0, index + 1);

      setDisplayedCode(typedClass);

      /*
       * Photo reacts only after
       * enough characters are typed.
       */
      if (typedClass.includes("rounded-[50px]")) {
        setPhotoRadius("50px");
      } else if (typedClass.includes("rounded-[30px]")) {
        setPhotoRadius("30px");
      } else if (typedClass.includes("rounded")) {
        setPhotoRadius("12px");
      } else {
        setPhotoRadius("0px");
      }

      index++;

      if (index >= currentAnimation.text.length) {
        clearInterval(typingInterval);

        /*
         * Starts deleting animation.
         */
        setTimeout(() => {
          let deleteIndex = currentAnimation.text.length;

          const deletingInterval = setInterval(() => {
            const deletedClass = currentAnimation.text.slice(
              0,
              deleteIndex - 1,
            );

            setDisplayedCode(deletedClass);

            deleteIndex--;

            if (deleteIndex <= 0) {
              clearInterval(deletingInterval);

              setCurrentStep((prev) => (prev + 1) % animationSteps.length);
            }
          }, 200);
        }, 4000);
      }
    }, 400);

    return () => clearInterval(typingInterval);
  }, [currentStep]);
  return (
    <section className="min-h-screen bg-black text-white flex">
      {/* LEFT SIDE */}
      <div className="w-1/2 flex items-center justify-center border-r border-gray-800 p-10">
        <div className="w-full max-w-xl">
          <pre className="text-green-400 text-lg leading-8 whitespace-pre-wrap">
            {`<div className="`}
            <span className="text-yellow-300">{displayedCode}</span>
            <span className="animate-pulse text-white">|</span>
            {`" overflow-hidden">
  <img src="/photo.jpg" />
</div>`}
          </pre>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-1/2 flex items-center justify-center p-10">
        <div
          id="animated-photo"
          className="w-[400px] h-[500px] overflow-hidden transition-all duration-1000 ease-in-out"
          style={{ borderRadius: photoRadius }}
        >
          <img
            src="/photo.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
