import "../styles/projects.css";
import bedtimeImg from "../assets/bedtime-stories.png";

type SmallProjectProps = {
  imageSrc: string;
  title: string;
  description: string;
};

function SmallProjectCard({ imageSrc, title, description }: SmallProjectProps) {
  return (
    <article className="projectCard">
      <figure className="projectMedia">
        <img src={imageSrc} alt={`${title} preview`} />
      </figure>

      <div className="projectBody">
        <h3 className="projectTitle">{title}</h3>
        <p className="projectDesc">{description}</p>

        {/* CTA */}
        <a href="#projects" className="projectCta">
          View Case Study <span aria-hidden="true">↗</span>
        </a>
      </div>

      <div className="projectBottomSpacer" />
    </article>
  );
}

function FeaturedProjectCard() {
  return (
    <article className="projectCard projectCard--featured">
      <figure className="projectMedia">
        <img src={bedtimeImg} alt="Bedtime Stories preview" />
      </figure>

      <div className="projectBody">
        <h3 className="projectTitle">Bedtime Stories</h3>
        <p className="projectDesc">
          An app concept for children featuring soothing short stories to make the
          bedtime routine calmer and more enjoyable.
        </p>

        {/* CTA */}
        <a href="#projects" className="projectCta">
          View Case Study <span aria-hidden="true">↗</span>
        </a>
      </div>

      <div className="projectBottomSpacer" />
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
              title="Bedtime Stories"
              description="Compact card layout: image on top, then title and description. Fixed size with reserved space for a future button."
            />

            <FeaturedProjectCard />

            <SmallProjectCard
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
