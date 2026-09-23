import { ToolIcons } from "./Icons";

function Tools() {
  const tools = [
    { name: "React", category: "Frontend", icon: ToolIcons.React },
    { name: "JavaScript", category: "Language", icon: ToolIcons.JavaScript },
    { name: "Vite", category: "Build Tool", icon: ToolIcons.Vite },
    { name: "Supabase", category: "Backend", icon: ToolIcons.Supabase },
    { name: "Node.js", category: "Backend", icon: ToolIcons.NodeJS },
    // { name: "Express", category: "Framework", icon: ToolIcons.Express },
    { name: "MongoDB", category: "Database", icon: ToolIcons.MongoDB },
    { name: "CSS", category: "Styling", icon: ToolIcons.CSS },
    { name: "Git", category: "Version Control", icon: ToolIcons.Git },
    { name: "Figma", category: "Design", icon: ToolIcons.Figma },
  ];

  return (
    <section className="tools scroll-reveal" id="tools">
      <h2>
        Tools & <span>Technologies</span>
      </h2>
      <p>
        My work is supported by a growing toolkit of technologies that I use to
        build functional, visually appealing and user-focused projects. Here are
        some of the tools I have worked with.
      </p>
      <div className="tools-grid">
        {tools.map((tool, index) => {
          const IconComponent = tool.icon;
          return (
            <div key={index} className="tool-card">
              <div className="tool-icon">
                <IconComponent />
              </div>
              <p className="tool-name">{tool.name}</p>
              <p className="tool-category">{tool.category}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Tools;
