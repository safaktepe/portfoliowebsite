import { useEffect, useMemo, useState } from "react";

import { MainLayout } from "./layouts/MainLayout";
import { useActiveSection } from "./hooks/useActiveSection";
import { smoothScrollTo } from "./lib/smoothScrollTo";

import { HomeSection } from "./sections/HomeSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { AboutSection } from "./sections/AboutSection";
import { ContactSection } from "./sections/ContactSection";

const sectionIds = ["home", "projects", "about", "contact"];

export default function App() {
  const initialHashId = useMemo(() => {
    const id = window.location.hash.replace("#", "");
    return sectionIds.includes(id) ? id : undefined;
  }, []);

  const { activeId, setActiveId } = useActiveSection({
    sectionIds,
    initialActiveId: initialHashId,
    threshold: 0.4,
  });

  const [hasHydratedHash, setHasHydratedHash] = useState(false);
  const [lockedNavId, setLockedNavId] = useState<string | null>(null);
  const displayActiveId = lockedNavId ?? activeId;

  // Scroll to section if a hash is present on initial load
  useEffect(() => {
    if (!initialHashId) {
      setHasHydratedHash(true);
      return;
    }

    const section = document.getElementById(initialHashId);
    if (!section) {
      setHasHydratedHash(true);
      return;
    }

    setTimeout(() => {
      const prefersReducedMotion =
        window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

      if (prefersReducedMotion) {
        section.scrollIntoView({ behavior: "auto", block: "start" });
      } else {
        const y = section.getBoundingClientRect().top + window.scrollY;
        smoothScrollTo(y, 1100);
      }

      setActiveId(initialHashId);
      setHasHydratedHash(true);
    }, 0);
  }, [initialHashId, setActiveId]);

  // Sync URL hash with currently visible section (without polluting history)
  useEffect(() => {
    if (!hasHydratedHash) return;

    const currentHash = window.location.hash.replace("#", "");
    if (currentHash === activeId) return;

    history.replaceState(null, "", `#${activeId}`);
  }, [activeId, hasHydratedHash]);

  return (
    <MainLayout
    activeSectionId={displayActiveId}
    onActiveSectionChange={setActiveId}
    onNavLockChange={setLockedNavId}    >
      <HomeSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </MainLayout>
  );
}
