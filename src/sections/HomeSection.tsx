import { useEffect, useState } from "react";
import { smoothScrollTo } from "../lib/smoothScrollTo";
import "../styles/home.css";
import "../styles/scrollHint.css";

export function HomeSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [contentReady, setContentReady] = useState(false);

  useEffect(() => {
    const prefersReducedMotion =
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    if (prefersReducedMotion) {
      setIsVisible(true);
      setContentReady(true);
      return;
    }

    const cardTimer = window.setTimeout(() => setIsVisible(true), 480);
    const contentTimer = window.setTimeout(() => setContentReady(true), 660);

    return () => {
      window.clearTimeout(cardTimer);
      window.clearTimeout(contentTimer);
    };
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
        <h1 className={`heroTitle ${contentReady ? "contentVisible" : ""}`}>
          Software Developer
        </h1>

        <p className={`heroSubtitle ${contentReady ? "contentVisible" : ""}`}>
          Mert Safaktepe
        </p>

        <div className={`heroActions ${contentReady ? "contentVisible" : ""}`}>
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

      <div
  className="scrollHint"
  role="button"
  aria-label="Scroll to projects section"
  onClick={() => scrollToSection("projects")}
>
  <svg
    width="140"
    height="110"
    viewBox="0 0 140 110"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      className="scrollPath"
      d="M18 18
         C 55 10, 70 35, 58 52
         C 44 72, 72 86, 86 68
         C 100 52, 98 30, 120 26
         C 132 24, 128 52, 104 66
         C 88 76, 84 92, 84 98"
    />
    <path className="scrollArrow" d="M78 92 L84 98 L90 92" />
  </svg>

  <span className="scrollText">Scroll down</span>
</div>

    </section>
  );
}
