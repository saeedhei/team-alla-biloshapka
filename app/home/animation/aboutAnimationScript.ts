export const aboutAnimationScript = `
// JUNIOR

<section className="about-section">
  <div className="about-content">
    <p className="about-label">About Us</p>

    <h1 className="about-title">
      We build digital products for growing companies
    </h1>

    <p className="about-description">
      We are a tech development company that helps businesses create modern
      websites, web applications, and simple digital tools for everyday work.
    </p>

<button className="about-button mx-auto block">
  Start a project
</button>
  </div>

  <img className="about-photo h-[300px] w-[300px]" src="/about_us.png" />
</section>

// MIDDLE

<section className="about-section grid grid-cols-[1.2fr_1fr] gap-8 bg-blue-950 rounded-3xl">
  <div className="about-content">
    <h1 className="about-title text-5xl font-bold">
      We build digital products for growing companies
    </h1>

    <p className="about-description text-lg leading-8">
      We are a tech development company that helps businesses create modern
      websites, web applications, and simple digital tools for everyday work.
    </p>

<button className="about-button ml-0 block rounded-xl bg-cyan-500">
  Start a project
</button>
  </div>

  <img className="about-photo h-[460px] w-full rounded-3xl object-cover" src="/about_us.png" />
</section>

// SENIOR

<section className="about-section grid grid-cols-[1.2fr_1fr] gap-10 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 rounded-[2rem]">
  <div className="about-content">
    <h1 className="about-title text-white drop-shadow-xl">
      We build digital products for growing companies
    </h1>

    <p className="about-description text-blue-100 leading-8">
      We are a tech development company that helps businesses create modern
      websites, web applications, and simple digital tools for everyday work.
    </p>

    <button className="about-button rounded-2xl bg-cyan-500 shadow-cyan-500/30">
      Start a project
    </button>
  </div>

  <img className="about-photo rounded-[2rem] object-cover shadow-2xl" src="/about_us.png" />
</section>
`;
