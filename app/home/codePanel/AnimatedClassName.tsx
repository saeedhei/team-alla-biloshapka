"use client";

import { useEffect, useState } from "react";

const typingSpeed = 18;
const erasingSpeed = 6;

type AnimatedClassNameProps = {
  value: string;
  isActive: boolean;
};

export function AnimatedClassName({
  value,
  isActive,
}: AnimatedClassNameProps) {
  const [displayedValue, setDisplayedValue] = useState(value);

  useEffect(() => {
    let timeoutId: number;
    let cancelled = false;

    const eraseText = (text: string) => {
      if (cancelled) return;

      if (text.length === 0) {
        typeText("");
        return;
      }

      timeoutId = window.setTimeout(() => {
        const nextText = text.slice(0, -1);
        setDisplayedValue(nextText);
        eraseText(nextText);
      }, erasingSpeed);
    };

    const typeText = (text: string) => {
      if (cancelled) return;

      if (text.length === value.length) {
        return;
      }

      timeoutId = window.setTimeout(() => {
        const nextText = value.slice(0, text.length + 1);
        setDisplayedValue(nextText);
        typeText(nextText);
      }, typingSpeed);
    };

    eraseText(displayedValue);

    return () => {
      cancelled = true;
      window.clearTimeout(timeoutId);
    };
  }, [value]);

  return (
    <>
      {displayedValue}
      {isActive ? <span className="text-white">|</span> : null}
    </>
  );
}