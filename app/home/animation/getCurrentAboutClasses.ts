import {
  aboutClassStages,
  type AboutElement,
  type AboutLevel,
} from "./aboutClassStages";

export type CurrentAboutLevels = Record<AboutElement, AboutLevel>;

export const initialAboutLevels: CurrentAboutLevels = {
  section: "junior",
  label: "junior",
  title: "junior",
  description: "junior",
  button: "junior",
  photo: "junior",
};

export function getCurrentAboutClasses(currentLevels: CurrentAboutLevels) {
  return {
    section: aboutClassStages[currentLevels.section].section,
    label: aboutClassStages[currentLevels.label].label,
    title: aboutClassStages[currentLevels.title].title,
    description: aboutClassStages[currentLevels.description].description,
    button: aboutClassStages[currentLevels.button].button,
    photo: aboutClassStages[currentLevels.photo].photo,
  };
}