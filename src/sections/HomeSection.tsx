import { useEffect, useState } from "react";
import { smoothScrollTo } from "../lib/smoothScrollTo";
import "../styles/home.css";

export function HomeSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const prefersReducedMotion =
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const t = window.setTimeout(() => setIsVisible(true), 480);
    return () => window.clearTimeout(t);
  }, []);

  function scrollToSection(id: string) {
    const section = document.getElementById(id);
    if (!section) return;

    history.pushState(null, "", `#${id}`);

    const prefersReducedMotion =
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    if (prefersReducedMotion) {
      section.scrollIntoView({ behavior: "auto", block: "start" });
      return;
    }

    const y = section.getBoundingClientRect().top + window.scrollY;
    smoothScrollTo(y, 900);
  }

  return (
    <section id="home" className="homeSection">
      <div className={`heroCard ${isVisible ? "isVisible" : ""}`}>
        <h1 className="heroTitle">Software Developer</h1>
        <p className="heroSubtitle">Mert Safaktepe</p>

        <div className="heroActions">
          <button
            type="button"
            className="primaryBtn"
            onClick={() => scrollToSection("projects")}
          >
            View My Work <span aria-hidden="true">→</span>
          </button>

          <button
            type="button"
            className="secondaryBtn"
            onClick={() => scrollToSection("contact")}
          >
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
}
