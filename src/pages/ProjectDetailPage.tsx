import { Link, useParams } from "react-router-dom";
import { getProjectBySlug } from "../data/projects";
import { MainLayout } from "../layouts/MainLayout";
import "../styles/projectDetail.css";

type ProjectWithOptionalNote = {
  note?: string;
};

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  return (
    <MainLayout
      activeSectionId="projects"
      onActiveSectionChange={() => {}}
      onNavLockChange={() => {}}
    >
      <section className="pdWrap">
        {!project ? (
          <div className="pdCard">
            <h1 className="pdTitle">Project not found</h1>
            <p className="pdText">This URL might be outdated.</p>
            <Link className="pdBack" to="/#projects">
              ← Back to Projects
            </Link>
          </div>
        ) : (
          <>
            {/* 1) HERO GLASS + overview */}
            <article className="pdCard pdHero">
              <h1 className="pdTitle">{project.title}</h1>
              <p className="pdText">{project.subtitle}</p>

              <div className="pdChips">
                {project.stack.map((t) => (
                  <span key={t} className="pdChip">
                    {t}
                  </span>
                ))}
              </div>

              <div className="pdLinks">
                {project.links.map((l) => (
                  <a key={l.href} className="pdLink" href={l.href} target="_blank" rel="noreferrer">
                    {l.label}
                  </a>
                ))}
              </div>
            </article>

            {/* 2) NOTE GLASS  */}
            {Boolean((project as ProjectWithOptionalNote).note) && (
              <aside className="pdNote">
                {(project as ProjectWithOptionalNote).note}
              </aside>
            )}

            <figure className="pdImage">
              <img src={project.coverImage.src} alt={project.coverImage.alt} />
            </figure>

            {/* 4) OTHER SECTIONS */}
            <div className="pdGrid">
              {project.sections.map((s) => (
                <section key={s.title} className="pdCard">
                  <h2 className="pdSectionTitle">{s.title}</h2>
                  <p className="pdSectionText">{s.content}</p>
                </section>
              ))}
            </div>
          </>
        )}
      </section>
    </MainLayout>
  );
}
