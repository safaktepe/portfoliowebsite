import { useEffect, useState } from "react";

type UseActiveSectionOptions = {
  sectionIds: string[];
  initialActiveId?: string;
  threshold?: number;
};

export function useActiveSection({
  sectionIds,
  initialActiveId,
  threshold = 0.6,
}: UseActiveSectionOptions) {
  const fallback = sectionIds[0] ?? "home";
  const [activeId, setActiveId] = useState(initialActiveId ?? fallback);

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0)
          );

        if (visible[0]?.target?.id) {
          setActiveId(visible[0].target.id);
        }
      },
      { threshold }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sectionIds, threshold]);

  return { activeId, setActiveId };
}
