import "../styles/projects.css";

export function ProjectsSection() {
  return (
    <section id="projects" className="projectsSection">
      <div className="projectsInner">
        <h2 className="projectsTitle">Featured Works</h2>

        <div className="projectsShell">
          <div className="projectsGrid">
            <article className="projectCard">Project 1</article>
            <article className="projectCard projectCard--featured">Project 2</article>
            <article className="projectCard">Project 3</article>
          </div>
        </div>
      </div>
    </section>
  );
}
