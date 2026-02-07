import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProjectBySlug } from "../data/projects";
import { MainLayout } from "../layouts/MainLayout";
import "../styles/projectDetailV2.css";
import goalIcon from "../assets/goal_icon.png";
import githubIconPng from "../assets/github_icon.png";
import pergelIcon from "../assets/pergel_icon.png";
import commandIcon from "../assets/komut_icon.png";
import okIcon from "../assets/ok_icon.png";
import { AccessibleModal } from "../components/AccessibleModal";

type InterfaceItem =
  | { kind: "image"; src: string; alt: string }
  | { kind: "video"; mp4: string; webm?: string; poster?: string; alt: string };
type ProjectWithOptionalInterfaceItems = {
  interfaceItems?: InterfaceItem[];
  interfaceImages?: { src: string; alt: string }[]; // legacy fallback
};

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;
  const [bedtimeOpen, setBedtimeOpen] = useState(false);
  const navigate = useNavigate();

  const openBedtimeModal = () => setBedtimeOpen(true);
  const closeBedtimeModal = () => setBedtimeOpen(false);

  const scrollToContactWithSubject = () => {
    try { sessionStorage.setItem("prefillSubject", "Code access request — Bedtime Stories"); } catch {}
    navigate("/#contact");
  };

  // Subtle cursor-following ambient on cards and CTA Go capsule
  useEffect(() => {
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>(".pd2Card, .pd2CtaGo")
    );
    if (!targets.length) return;

    const onPointerMove = (e: Event) => {
      const pe = e as PointerEvent;
      const el = pe.currentTarget as HTMLElement;
      const r = el.getBoundingClientRect();
      const x = pe.clientX - r.left;
      const y = pe.clientY - r.top;
      el.style.setProperty("--mx", `${x}px`);
      el.style.setProperty("--my", `${y}px`);
    };

    targets.forEach((el) => {
      el.addEventListener("pointermove", onPointerMove, { passive: true } as AddEventListenerOptions);
      el.addEventListener("pointerenter", onPointerMove, { passive: true } as AddEventListenerOptions);
    });

    return () => {
      targets.forEach((el) => {
        el.removeEventListener("pointermove", onPointerMove as EventListener);
        el.removeEventListener("pointerenter", onPointerMove as EventListener);
      });
    };
  }, []);

  // Make the hero badge width ~2x its natural width and keep text left-aligned
  // Reverted: keep badge natural width
  
  

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
            const p = project as ProjectWithOptionalInterfaceItems;

            const mediaItems: InterfaceItem[] = p.interfaceItems
              ? p.interfaceItems
              : p.interfaceImages && p.interfaceImages.length
              ? p.interfaceImages.map((img) => ({ kind: "image", src: img.src, alt: img.alt }))
              : [
                  { kind: "image", src: project.coverImage.src, alt: project.coverImage.alt },
                  { kind: "image", src: project.coverImage.src, alt: project.coverImage.alt },
                  { kind: "image", src: project.coverImage.src, alt: project.coverImage.alt },
                ];

            const shouldCenterRail = mediaItems.length === 3;
            const showRailControls = mediaItems.length >= 4;

            const sourceCodeLink = project.links.find((l) => l.label === "GitHub");
            const isBedtime = project.slug === "bedtime-stories";

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
                      {sourceCodeLink && !isBedtime && (
                        <a
                          className="pd2Btn pd2BtnPrimary"
                          href={sourceCodeLink.href}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img className="pd2BtnIcon" src={githubIconPng} alt="" aria-hidden="true" />
                          <span className="pd2CtaText">Source Code</span>
                          <span className="pd2CtaGo">Go</span>
                        </a>
                      )}

                      {isBedtime && (
                        <>
                          <button type="button" className="pd2Btn pd2BtnPrimary" onClick={openBedtimeModal}>
                            <img className="pd2BtnIcon" src={githubIconPng} alt="" aria-hidden="true" />
                            <span className="pd2CtaText">Request Code Access</span>
                            <span className="pd2CtaGo">Go</span>
                          </button>

                          <AccessibleModal
                            open={bedtimeOpen}
                            onClose={closeBedtimeModal}
                            title="Private Repository"
                            body={
                              <>
                                <p>This project is under active commercial development and planned for an App Store release.</p>
                                <p>The source code is private, but I’m happy to walk through the architecture, technical decisions, and selected parts of the codebase with hiring teams.</p>
                              </>
                            }
                            secondary={{
                              label: "View Case Study",
                              onClick: () => {
                                closeBedtimeModal();
                              },
                            }}
                            primary={{
                              label: "Contact Me",
                              onClick: () => {
                                closeBedtimeModal();
                                scrollToContactWithSubject();
                              },
                            }}
                            footerNote="Available for hiring teams and technical interviews."
                          />
                        </>
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
                        <img className="pd2CardIcon pd2IconBoost" src={pergelIcon} alt="" />
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
                        <img className="pd2CardIcon pd2IconBoost" src={commandIcon} alt="" />
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
                        <img className="pd2CardIcon pd2IconBoost" src={okIcon} alt="" />
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
                      {mediaItems.map((item, idx) => (
                        <div className="pd2RailItem" key={`${item.kind === 'image' ? item.src : item.mp4}-${idx}`}>
                          <div className="pd2Phone pd2PhoneSmall">
                            <div className="pd2Notch" />
                            {item.kind === "video" ? (
                              <video
                                className="pd2PhoneImg"
                                autoPlay
                                muted
                                loop
                                playsInline
                                preload="metadata"
                                poster={item.poster}
                                aria-label={item.alt}
                              >
                                {item.webm && (
                                  <source src={item.webm} type="video/webm" />
                                )}
                                <source src={item.mp4} type="video/mp4" />
                              </video>
                            ) : (
                              <img className="pd2PhoneImg" src={item.src} alt={item.alt} />
                            )}
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
                    <Link className="pd2Btn pd2BtnContact" to="/#contact">
                      Get in Touch
                    </Link>
                    <Link className="pd2Btn pd2BtnLight" to="/#projects">
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
