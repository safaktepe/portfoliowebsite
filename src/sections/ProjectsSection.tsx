import type React from "react";
import { useNavigate } from "react-router-dom";

import "../styles/projects.css";
import bedtimeImg from "../assets/bedtime-stories.png";

type ProjectCardProps = {
  href: string;
  imageSrc: string;
  title: string;
  description: string;
  featured?: boolean;
};

function setPointerVars(e: React.MouseEvent<HTMLElement>) {
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  const x = e.clientX - r.left;
  const y = e.clientY - r.top;

  el.style.setProperty("--mx", `${x}px`);
  el.style.setProperty("--my", `${y}px`);
}

function clearPointerVars(e: React.MouseEvent<HTMLElement>) {
  const el = e.currentTarget;
  el.style.removeProperty("--mx");
  el.style.removeProperty("--my");
}

function ProjectCard({ href, imageSrc, title, description, featured }: ProjectCardProps) {
  const navigate = useNavigate();
  const className = featured ? "projectCard projectCard--featured" : "projectCard";

  function go() {
    navigate(href);
  }

  return (
    <article
      className={className}
      role="link"
      tabIndex={0}
      onClick={go}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") go();
      }}
      onMouseMove={setPointerVars}
      onMouseLeave={clearPointerVars}
    >
      <figure className="projectMedia">
        <img src={imageSrc} alt={`${title} preview`} />
      </figure>

      <div className="projectBody">
        <h3 className="projectTitle">{title}</h3>
        <p className="projectDesc">{description}</p>

        <a
          href={href}
          className="projectCta"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            go();
          }}
        >
          View Case Study <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="projectsSection">
      <div className="projectsInner">
        <h2 className="projectsTitle">Featured Works</h2>

        <div className="projectsShell">
          <div className="projectsGrid">
            <ProjectCard
              href="/projects/pokedex"
              imageSrc="/vite.svg"
              title="Pokedex"
              description="Fast search and clean detail views for Pokémon data."
            />

            <ProjectCard
              href="/projects/bedtime-stories"
              imageSrc={bedtimeImg}
              title="Bedtime Stories"
              description="An app concept for children featuring soothing short stories to make bedtime calmer."
              featured
            />

            <ProjectCard
              href="/projects/75-hard"
              imageSrc="/vite.svg"
              title="75 Hard Tracker"
              description="A minimal daily tracker with progress and history."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
