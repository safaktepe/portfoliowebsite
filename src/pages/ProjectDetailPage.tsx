import { Link, useParams } from "react-router-dom";
import { getProjectBySlug } from "../data/projects";
import { MainLayout } from "../layouts/MainLayout";
import "../styles/projectDetailV2.css";

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  return (
    <MainLayout
      activeSectionId="projects"
      onActiveSectionChange={() => {}}
      onNavLockChange={() => {}}
    >
      <div className="pd2">
        {!project ? (
          <div className="pd2Card">
            <h1 className="pd2Title">Project not found</h1>
            <p className="pd2Muted">This URL might be outdated.</p>
            <Link className="pd2Link" to="/#projects">
              ← Back to Projects
            </Link>
          </div>
        ) : (
          <>
            {/* HERO */}
            <section className="pd2Hero">
              <div className="pd2HeroLeft">
                <div className="pd2Badge">
                  <span className="pd2Dot" />
                  {project.title}
                </div>

                <h1 className="pd2Heading">{project.title}</h1>
                <p className="pd2Lead">{project.subtitle}</p>

                <div className="pd2Actions">
                  {project.links.map((l) => (
                    <a
                      key={l.href}
                      className={
                        l.label === "Live"
                          ? "pd2Btn pd2BtnPrimary"
                          : "pd2Btn"
                      }
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {l.label}
                    </a>
                  ))}
                  <Link className="pd2Btn pd2BtnGhost" to="/#projects">
                    Back to Projects
                  </Link>
                </div>
              </div>

              <div className="pd2HeroRight">
                <div className="pd2Glow" />
                <div className="pd2Phone">
                  <div className="pd2Notch" />
                  <img
                    className="pd2PhoneImg"
                    src={project.coverImage.src}
                    alt={project.coverImage.alt}
                  />
                </div>
              </div>
            </section>

            {/* BENTO GRID (placeholder) */}
            <section className="pd2Grid">
              <article className="pd2Card">
                <h3 className="pd2CardTitle">The Goal</h3>
                <p className="pd2Muted">...</p>
              </article>

              <article className="pd2Card">
                <h3 className="pd2CardTitle">The Approach</h3>
                <p className="pd2Muted">...</p>
              </article>

              <article className="pd2Card pd2CardAccent">
                <h3 className="pd2CardTitle">Performance</h3>
                <p className="pd2Muted">...</p>
              </article>

              <article className="pd2Card pd2Span2">
                <h3 className="pd2CardTitle">Technical Decisions</h3>
                <p className="pd2Muted">...</p>
              </article>

              <article className="pd2Card">
                <h3 className="pd2CardTitle">Challenges</h3>
                <p className="pd2Muted">...</p>
              </article>

              <article className="pd2Card pd2Span3">
                <h3 className="pd2CardTitle">What I’d Improve</h3>
                <p className="pd2Muted">...</p>
              </article>
            </section>

            {/* FOOTER */}
            <footer className="pd2Footer">
              <div>
                <h3 className="pd2FooterTitle">Intrigued by this project?</h3>
                <p className="pd2Muted">
                  Let’s discuss how I can bring this expertise to your team.
                </p>
              </div>

              <div className="pd2FooterActions">
                <Link className="pd2Btn pd2BtnPrimary" to="/#contact">
                  Get in Touch
                </Link>
                <Link className="pd2Btn" to="/#projects">
                  Back to Projects
                </Link>
              </div>
            </footer>
          </>
        )}
      </div>
    </MainLayout>
  );
}
