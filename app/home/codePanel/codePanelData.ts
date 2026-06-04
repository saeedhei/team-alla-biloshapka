import type { AboutClasses, Stage, TimelineItem } from "./codePanelTypes";

export const aboutClassStages: Record<Stage, AboutClasses> = {
  junior: {
    section: "junior-layout",
    label: "junior-label",
    title: "junior-title",
    description: "junior-description",
    button: "junior-button",
    photo: "junior-photo",
  },

  middle: {
    section: "middle-layout",
    label: "middle-label",
    title: "middle-title",
    description: "middle-description",
    button: "middle-button",
    photo: "middle-photo",
  },

  senior: {
    section: "senior-premium-layout",
    label: "senior-premium-label",
    title: "senior-gradient-title",
    description: "senior-clear-description",
    button: "senior-glow-button",
    photo: "senior-tech-visual",
  },
};

export const aboutClassTimeline: TimelineItem[] = [
{ time: 2, stage: "middle", element: "section" },
{ time: 5, stage: "middle", element: "label" },
{ time: 9, stage: "middle", element: "title" },
{ time: 12, stage: "middle", element: "description" },
{ time: 17, stage: "middle", element: "button" },
{ time: 21, stage: "middle", element: "photo" },

{ time: 25, stage: "senior", element: "section" },
{ time: 29, stage: "senior", element: "label" },
{ time: 33, stage: "senior", element: "title" },
{ time: 37, stage: "senior", element: "description" },
{ time: 41, stage: "senior", element: "button" },
{ time: 45, stage: "senior", element: "photo" },
];