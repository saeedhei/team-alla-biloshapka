export const ABOUT_ANIMATION_EVENTS = {
  ABOUT: '<p className="about-label">About Us</p>',
  TITLE: '<h1 className="about-title">',
  DESCRIPTION: '<p className="about-description">',
  BUTTON: '<button className="about-button">',
  PHOTO: '<img className="about-photo"',

  UPDATE_TITLE: 'className="about-title text-5xl font-bold"',
  UPDATE_BUTTON: 'className="about-button rounded-xl bg-cyan-500"',
  UPDATE_BACKGROUND:
    'className="about-section grid grid-cols-[1.2fr_1fr] gap-8 bg-blue-950 rounded-3xl"',
  UPDATE_PHOTO: 'className="about-photo rounded-2xl object-cover"',

  PREMIUM_TITLE: 'className="about-title text-6xl font-extrabold tracking-tight"',
  PREMIUM_BUTTON:
    'className="about-button rounded-2xl bg-cyan-400 shadow-cyan-400/40"',
  PREMIUM_BACKGROUND:
    'className="about-section grid grid-cols-[1.2fr_1fr] gap-10 bg-gradient-to-br from-blue-950 to-indigo-900 rounded-[2rem]"',
  PREMIUM_PHOTO:
    'className="about-photo rounded-[2rem] object-cover shadow-2xl"',
} as const;