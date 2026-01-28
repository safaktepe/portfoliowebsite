import type React from "react";
import { useEffect, useRef } from "react";

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

function navigateTo(href: string) {
  window.location.href = href;
}

function ProjectCard({ href, imageSrc, title, description, featured }: ProjectCardProps) {
  const className = featured ? "projectCard projectCard--featured" : "projectCard";

  return (
    <article
      className={className}
      role="link"
      tabIndex={0}
      onClick={() => navigateTo(href)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") navigateTo(href);
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

        <a href={href} className="projectCta" onClick={(e) => e.stopPropagation()}>
          View Case Study <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  );
}

function useShellParallax<T extends HTMLElement>(ref: React.RefObject<T | null>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion =
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    if (prefersReducedMotion) return;

    let raf = 0;

    const update = () => {
      raf = 0;

      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;

      const t = (rect.top + rect.height * 0.5) / vh;
      const centered = t - 0.5;
      const clamped = Math.max(-0.5, Math.min(0.5, centered));

      const y = clamped * -50; 
      el.style.setProperty("--parallaxY", `${y.toFixed(2)}px`);
    };

    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, [ref]);
}

export function ProjectsSection() {
  const shellRef = useRef<HTMLDivElement | null>(null);
  useShellParallax(shellRef);

  return (
    <section id="projects" className="projectsSection">
      <div className="projectsInner">
        <h2 className="projectsTitle">Featured Works</h2>

        <div className="projectsShell" ref={shellRef}>
          <div className="projectsGrid">
            <ProjectCard
              href="#projects"
              imageSrc="/vite.svg"
              title="Bedtime Stories"
              description="Compact card layout: image on top, then title and description. Fixed size with reserved space for a future button."
            />

            <ProjectCard
              href="#projects"
              imageSrc={bedtimeImg}
              title="Bedtime Stories"
              description="An app concept for children featuring soothing short stories to make the bedtime routine calmer and more enjoyable."
              featured
            />

            <ProjectCard
              href="#projects"
              imageSrc="/vite.svg"
              title="Calm Reader"
              description="Readable body copy with 1.6 line-height and a softer color for better contrast management."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
