function About() {
  return (
    <section className="about scroll-reveal" id="about">
      <div className="about-wrapper">
        <div className="about-content">
          <h2>
            About <span>Me</span>
          </h2>
          <p>
            I’m a frontend developer with a genuine curiosity for technology and
            a love for turning ideas into digital experiences. For me,
            development isn't just about writing code. It's about solving
            problems, understanding people, experimenting with ideas, and
            continuously finding better ways to build. I enjoy creating
            interfaces that feel modern, intuitive, and purposeful—whether
            that's a personal brand, a business platform, an e-commerce
            experience, or a completely new idea from scratch. I'm constantly
            learning and pushing myself beyond what I already know. Every
            project is an opportunity to improve my technical skills, sharpen my
            eye for design, and understand what it really takes to turn an idea
            into something people can use.
          </p>
          {/* <p>
            Currently completing a B.Sc. with a thesis on human factors in
            cybersecurity awareness.
          </p> */}
        </div>
        <a href="/Bennie CV-RESUME.pdf" className="cv-button" download>
          Download Cv
        </a>
      </div>
    </section>
  );
}
export default About;
