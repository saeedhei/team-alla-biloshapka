import type { AboutElement, AboutLevel } from "./aboutClassStages";

export type AboutClassTimelineItem = {
  time: number;
  level: AboutLevel;
  element: AboutElement;
};

export const aboutClassTimeline: AboutClassTimelineItem[] = [
  // Junior
  { time: 1, level: "junior", element: "section" },
  { time: 3, level: "junior", element: "label" },
  { time: 5, level: "junior", element: "title" },
  { time: 7, level: "junior", element: "description" },
  { time: 10, level: "junior", element: "button" },
  { time: 13, level: "junior", element: "photo" },

  // Middle
  { time: 20, level: "middle", element: "section" },
  { time: 22, level: "middle", element: "label" },
  { time: 24, level: "middle", element: "title" },
  { time: 26, level: "middle", element: "description" },
  { time: 28, level: "middle", element: "button" },
  { time: 30, level: "middle", element: "photo" },

  // Senior
  { time: 36, level: "senior", element: "section" },
  { time: 38, level: "senior", element: "label" },
  { time: 40, level: "senior", element: "title" },
  { time: 42, level: "senior", element: "description" },
  { time: 44, level: "senior", element: "button" },
  { time: 46, level: "senior", element: "photo" },
];