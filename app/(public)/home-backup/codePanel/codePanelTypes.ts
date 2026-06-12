export type Stage = "junior" | "middle" | "senior";

export type AboutElement =
  | "section"
  | "label"
  | "title"
  | "description"
  | "button"
  | "photo";

export type AboutClasses = Record<AboutElement, string>;

export type TimelineItem = {
  time: number;
  stage: Stage;
  element: AboutElement;
};