export const ABOUT_ANIMATION_EVENTS = {
  TITLE: '<h1 className="about-title">',
  ABOUT: '<p className="about-label">About Us</p>',
  BUTTON: '<button className="about-button">',
  CARDS: '<div className="about-cards">',

  UPDATE_TITLE: 'className="about-title text-5xl font-bold"',
  UPDATE_BUTTON: 'className="about-button rounded-xl bg-cyan-500"',
  UPDATE_CARDS: 'className="about-cards grid grid-cols-3 gap-6"',
  UPDATE_BACKGROUND: 'className="about-section bg-blue-950 rounded-3xl"',

  PREMIUM_TITLE: 'className="about-title text-6xl font-extrabold tracking-tight"',
  PREMIUM_BUTTON:
    'className="about-button rounded-2xl bg-cyan-400 shadow-cyan-400/40"',
  PREMIUM_CARDS:
    'className="about-card rounded-3xl bg-white/10 backdrop-blur"',
  PREMIUM_BACKGROUND:
    'className="about-section bg-gradient-to-br from-blue-950 to-indigo-900 rounded-[2rem]"',
} as const;