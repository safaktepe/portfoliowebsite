import "../styles/projects.css";
import type React from "react";
import bedtimeImg from "../assets/bedtime-stories.png";

type SmallProjectProps = {
  imageSrc: string;
  href: string;
  title: string;
  description: string;
};

function handleCardMouseMove(e: React.MouseEvent<HTMLElement>) {
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  const x = e.clientX - r.left;
  const y = e.clientY - r.top;

  el.style.setProperty("--mx", `${x}px`);
  el.style.setProperty("--my", `${y}px`);
}

function handleCardMouseLeave(e: React.MouseEvent<HTMLElement>) {
  const el = e.currentTarget;
  el.style.removeProperty("--mx");
  el.style.removeProperty("--my");
}


function SmallProjectCard({ href, imageSrc, title, description }: SmallProjectProps) {
  const go = () => {
    window.location.href = href;
  };

  return (
    <article
      className="projectCard"
      role="link"
      tabIndex={0}
      onClick={go}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") go();
      }}
      onMouseMove={handleCardMouseMove}
      onMouseLeave={handleCardMouseLeave}
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
          onClick={(e) => e.stopPropagation()}
        >
          View Case Study <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  );
}


function FeaturedProjectCard() {
  const href = "/projects/bedtime-stories"; //  placeholder for now
  const go = () => {
    window.location.href = href;
  };

  return (
    <article
      className="projectCard projectCard--featured"
      role="link"
      tabIndex={0}
      onClick={go}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") go();
      }}
      onMouseMove={handleCardMouseMove}
      onMouseLeave={handleCardMouseLeave}
    >
      <figure className="projectMedia">
        <img src={bedtimeImg} alt="Bedtime Stories preview" />
      </figure>

      <div className="projectBody">
        <h3 className="projectTitle">Bedtime Stories</h3>
        <p className="projectDesc">
          An app concept for children featuring soothing short stories to make the
          bedtime routine calmer and more enjoyable.
        </p>

        <a
          href={href}
          className="projectCta"
          onClick={(e) => e.stopPropagation()}
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
            <SmallProjectCard
              imageSrc="/vite.svg"
              href="/projects/bedtime-stories"
              title="Bedtime Stories"
              description="Compact card layout: image on top, then title and description. Fixed size with reserved space for a future button."
            />

            <FeaturedProjectCard />

            <SmallProjectCard
              imageSrc="/vite.svg"
              href="/projects/bedtime-stories"
              title="Calm Reader"
              description="Readable body copy with 1.6 line-height and a softer color for better contrast management."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
