function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-wrapper">
        <div className="hero-content">
          <h1>
            Frontend <span>Developer</span>
          </h1>
          <p className="hero-subtitle">
            I turn ideas into thoughtful digital experiences—combining clean
            code, modern design, and a strong focus on how people actually use
            the web.
          </p>
          <a href="#projects" className="cta-button">
            View My Work
          </a>
        </div>
        <div className="hero-image">
          <img
            src="/images/Benniee.jpeg"
            alt="Benniee"
            className="profile-pic"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
