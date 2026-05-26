
"use client";

import { useEffect, useState } from "react";

export default function AnimatedTailwindSection() {
      /*
   * Animated Tailwind showcase section.
   * The left side simulates live Tailwind code typing.
   * The right side contains a photo that will react
   * to typed Tailwind classes using GSAP animations.
   */
  return (
    <section className="min-h-screen bg-black text-white flex">
        
      {/* LEFT SIDE */}
      <div className="w-1/2 flex items-center justify-center border-r border-gray-800 p-10">
        <div className="w-full max-w-xl">
          <pre className="text-green-400 text-lg leading-8">
{`<div className="rounded-[50px] overflow-hidden">
  <img src="/photo.jpg" />
</div>`}
          </pre>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-1/2 flex items-center justify-center p-10">
        <div
  id="animated-photo"
  className="w-[400px] h-[500px] overflow-hidden rounded-none transition-all duration-500"
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