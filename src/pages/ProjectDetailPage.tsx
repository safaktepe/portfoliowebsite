import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { getProjectBySlug } from "../data/projects";
import { MainLayout } from "../layouts/MainLayout";
import "../styles/projectDetailV2.css";
import goalIcon from "../assets/goal_icon.png";

type InterfaceImage = { src: string; alt: string };
type ProjectWithOptionalInterfaceImages = {
  interfaceImages?: InterfaceImage[];
};

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  // Subtle cursor-following ambient on cards
  useEffect(() => {
    const cards = Array.from(document.querySelectorAll<HTMLElement>(".pd2Card"));
    if (!cards.length) return;

    const onPointerMove = (e: Event) => {
      const pe = e as PointerEvent;
      const el = pe.currentTarget as HTMLElement;
      const r = el.getBoundingClientRect();
      const x = pe.clientX - r.left;
      const y = pe.clientY - r.top;
      el.style.setProperty("--mx", `${x}px`);
      el.style.setProperty("--my", `${y}px`);
    };

    cards.forEach((el) => {
      el.addEventListener("pointermove", onPointerMove, { passive: true } as AddEventListenerOptions);
      el.addEventListener("pointerenter", onPointerMove, { passive: true } as AddEventListenerOptions);
    });

    return () => {
      cards.forEach((el) => {
        el.removeEventListener("pointermove", onPointerMove as EventListener);
        el.removeEventListener("pointerenter", onPointerMove as EventListener);
      });
    };
  }, []);

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
          (() => {
            const p = project as ProjectWithOptionalInterfaceImages;

            const interfaceImages =
              p.interfaceImages && p.interfaceImages.length >= 3
                ? p.interfaceImages
                : [project.coverImage, project.coverImage, project.coverImage];

            const shouldCenterRail = interfaceImages.length === 3;
            const showRailControls = interfaceImages.length >= 4;

            const sourceCodeLink = project.links.find(
              (l) => l.label === "GitHub"
            );

            const scrollRail = (dir: -1 | 1) => {
              const el = document.getElementById("pd2Rail");
              if (!el) return;
              el.scrollBy({ left: dir * 360, behavior: "smooth" });
            };

            return (
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
                      {sourceCodeLink && (
                        <a
                          className="pd2Btn pd2BtnPrimary"
                          href={sourceCodeLink.href}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Source Code
                        </a>
                      )}
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

                {/* BENTO GRID */}
                <section className="pd2Grid">
                  <article className="pd2Card">
                    <div className="pd2CardHead pd2CardHead--stack">
                      <span className="pd2CardIconWrap" aria-hidden="true">
                        <img className="pd2CardIcon" src={goalIcon} alt="" />
                      </span>
                      <h3 className="pd2CardTitle">The Goal</h3>
                    </div>
                    <p className="pd2Muted">{project.bento.goal}</p>
                  </article>

                  <article className="pd2Card">
                    <div className="pd2CardHead pd2CardHead--stack">
                      <span className="pd2CardIconWrap" aria-hidden="true">
                        <img className="pd2CardIcon" src={goalIcon} alt="" />
                      </span>
                      <h3 className="pd2CardTitle">The Approach</h3>
                    </div>
                    <p className="pd2Muted">{project.bento.approach}</p>
                  </article>

                  <article className="pd2Card pd2CardAccent">
                    <h3 className="pd2CardTitle">Performance</h3>
                    <p className="pd2Muted">{project.bento.performance}</p>
                  </article>

                  <article className="pd2Card pd2Span2 pd2RowTight">
                    <div className="pd2CardHead pd2CardHead--row">
                      <span className="pd2CardIconWrap" aria-hidden="true">
                        <img className="pd2CardIcon" src={goalIcon} alt="" />
                      </span>
                      <h3 className="pd2CardTitle">Technical Decisions</h3>
                    </div>
                    <p className="pd2Muted">
                      {project.bento.technicalDecisions}
                    </p>
                  </article>

                  <article className="pd2Card">
                    <h3 className="pd2CardTitle">Challenges</h3>
                    <p className="pd2Muted">{project.bento.challenges}</p>
                  </article>

                  <article className="pd2Card pd2Span3 pd2RowTight">
                    <div className="pd2CardHead pd2CardHead--row">
                      <span className="pd2CardIconWrap" aria-hidden="true">
                        <img className="pd2CardIcon" src={goalIcon} alt="" />
                      </span>
                      <h3 className="pd2CardTitle">What I’d Improve</h3>
                    </div>
                    <p className="pd2Muted">{project.bento.improvements}</p>
                  </article>
                </section>

                {/* PROJECT INTERFACE */}
                <section className="pd2Interface">
                  <div className="pd2InterfaceHead">
                    <div>
                      <h2 className="pd2H2">Project Interface</h2>
                      <p className="pd2InterfaceSub">
                        Immersive mobile app walkthrough
                      </p>
                    </div>

                    {showRailControls && (
                      <div className="pd2InterfaceNav">
                        <button
                          type="button"
                          className="pd2Nav"
                          aria-label="Scroll left"
                          onClick={() => scrollRail(-1)}
                        >
                          ‹
                        </button>
                        <button
                          type="button"
                          className="pd2Nav"
                          aria-label="Scroll right"
                          onClick={() => scrollRail(1)}
                        >
                          ›
                        </button>
                      </div>
                    )}
                  </div>

                  <div className="pd2InterfaceStage">
                    <div
                      id="pd2Rail"
                      className="pd2Rail"
                      data-centered={shouldCenterRail ? "true" : "false"}
                    >
                      {interfaceImages.map((img, idx) => (
                        <div className="pd2RailItem" key={`${img.src}-${idx}`}>
                          <div className="pd2Phone pd2PhoneSmall">
                            <div className="pd2Notch" />
                            <img
                              className="pd2PhoneImg"
                              src={img.src}
                              alt={img.alt}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* FOOTER */}
                <footer className="pd2Footer">
                  <div>
                    <h3 className="pd2FooterTitle">
                      Intrigued by this project?
                    </h3>
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
            );
          })()
        )}
      </div>
    </MainLayout>
  );
}
