import type { AboutElement } from "./codePanelTypes";

export function getAnimationStep(element: AboutElement) {
  if (element === "photo") return 5;
  if (element === "button") return 4;
  if (element === "description") return 3;
  if (element === "title") return 2;

  return 1;
}

export function getVisualStyleStep(element: AboutElement) {
  if (element === "photo") return 5;
  if (element === "button") return 4;
  if (element === "description") return 3;
  if (element === "title") return 2;

  return 1;
}