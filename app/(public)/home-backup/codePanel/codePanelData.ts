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
{ time: 4, stage: "middle", element: "label" },
{ time: 7, stage: "middle", element: "title" },
{ time: 9, stage: "middle", element: "description" },
{ time: 12, stage: "middle", element: "button" },
{ time: 15, stage: "middle", element: "photo" },

{ time: 17, stage: "senior", element: "section" },
{ time: 20, stage: "senior", element: "label" },
{ time: 23, stage: "senior", element: "title" },
{ time: 26, stage: "senior", element: "description" },
{ time: 29, stage: "senior", element: "button" },
{ time: 32, stage: "senior", element: "photo" },
];