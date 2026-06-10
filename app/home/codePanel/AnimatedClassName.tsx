"use client";

import { useEffect, useRef, useState } from "react";

const typingSpeed = 85;
const erasingSpeed = 35;

type AnimatedClassNameProps = {
  value: string;
  isActive: boolean;
};

export function AnimatedClassName({
  value,
  isActive,
}: AnimatedClassNameProps) {
  const [displayedValue, setDisplayedValue] = useState(value);
  const activeClassRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!isActive) return;

    activeClassRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
  }, [isActive]);

  useEffect(() => {
    if (displayedValue === value) {
      return;
    }

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
    <span ref={activeClassRef} className="inline">
      {displayedValue}
      {isActive ? (
        <span className="ml-1 inline-block h-5 w-2 animate-pulse rounded-sm bg-white align-[-3px] shadow-[0_0_16px_rgba(255,255,255,1)]" />
      ) : null}
    </span>
  );
}
