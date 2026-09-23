import { GitHubIcon } from "./Icons";

function Projects() {
  const projects = [
    {
      id: 1,
      name: "Bennie Accessories",
      description: "lorem.......",
      tech: "React, tailwindCss, Supabase, Paystack",
      image: "/images/bennie-accessories.png",
      link: "https://bennieaccessories.vercel.app",
    },
    {
      id: 2,
      name: "BMW-GM",
      description: "lorem...",
      tech: "React, Supabase, tailwindCss",
      image: "/images/bmwgm.png",
      link: "https://www.bmwgm.com",
    },
    {
      id: 3,
      name: "AA-Zaura",
      description: "loremm..",
      tech: "React, tailwindCss",
      image: "/images/aa-zaura.png",
      link: "https://www.aa-zaura.com",
    },
    {
      id: 4,
      name: "LuxProperty",
      description: "loremm..",
      tech: "React, tailwindCss, Supabase",
      image: "/images/luxproperty.png",
      link: "https://luxproperty.vercel.app",
    },
    {
      id: 5,
      name: "Ember & Ash",
      description: "loremm..",
      tech: "HTML, CSS, Supabase, JAVASCRIPT",
      image: "/images/ember&ash.png",
      link: "https://restaurant-frontend-plum-beta.vercel.app",
    },
  ];

  return (
    <section className="projects scroll-reveal" id="projects">
      <div className="section-header">
        <h2>Featured Work</h2>
        <p>
          From simple ideas to fully built experiences — here’s a look at what
          I’ve been creating.
        </p>
      </div>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.name} />
            </div>
            <div className="project-info">
              <h3>{project.name}</h3>
              <p className="project-description">{project.description}</p>
              <p className="tech-stack">{project.tech}</p>
              <div className="project-links">
                <a href={project.link} className="project-link">
                  View Project →
                </a>
                <a
                  href="https://github.com/bennie84"
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon />
                  View Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="projects-github">
        <p>
          Want to see more of my work? Explore the rest of my projects on
          GitHub.
        </p>
        <a
          href="https://github.com/bennie84"
          className="github-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon />
          View More on GitHub
        </a>
      </div>
    </section>
  );
}

export default Projects;
