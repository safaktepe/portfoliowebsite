import { useEffect, useMemo, useRef, useState } from "react";
import { smoothScrollTo } from "../lib/smoothScrollTo";

type NavItem = {
  id: string;
  label: string;
};

const navItems: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

type SidebarProps = {
  activeId: string;
  onActiveChange: (id: string) => void;
  onNavLockChange: (id: string | null) => void;
};

export function Sidebar({ activeId, onActiveChange, onNavLockChange }: SidebarProps) {
  const itemRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [indicator, setIndicator] = useState({ top: 0, height: 0 });

  const items = useMemo(() => navItems, []);

  useEffect(() => {
    const el = itemRefs.current[activeId];
    if (!el) return;

    setIndicator({
      top: el.offsetTop,
      height: el.offsetHeight,
    });
  }, [activeId]);

  function handleClick(id: string) {
    const section = document.getElementById(id);
    if (!section) return;

    onNavLockChange(id);
    onActiveChange(id);
    history.pushState(null, "", `#${id}`);

    const prefersReducedMotion =
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    const done = () => onNavLockChange(null);

    if (prefersReducedMotion) {
      section.scrollIntoView({ behavior: "auto", block: "start" });
      done();
      return;
    }

    const y = section.getBoundingClientRect().top + window.scrollY;
    smoothScrollTo(y, 900, done);
  }

  return (
    <aside
      style={{
        width: 220,
        padding: "24px 16px",
        display: "flex",
        flexDirection: "column",
        gap: 16,
        borderRight: "1px solid #222",
        position: "sticky",
        top: 24,
        height: "calc(100vh - 48px)",
        alignSelf: "flex-start",
      }}
    >
      <nav style={{ position: "relative", display: "flex", flexDirection: "column" }}>
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            left: 0,
            width: 3,
            borderRadius: 999,
            background: "#fff",
            transform: `translateY(${indicator.top}px)`,
            height: indicator.height,
            transition: "transform 220ms ease, height 220ms ease",
          }}
        />

        {items.map((item) => {
          const isActive = item.id === activeId;

          return (
            <a
              key={item.id}
              ref={(node) => {
                itemRefs.current[item.id] = node;
              }}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                handleClick(item.id);
              }}
              style={{
                display: "block",
                padding: "10px 12px 10px 14px",
                marginLeft: 8,
                color: isActive ? "#fff" : "#aaa",
                textDecoration: "none",
                transition: "color 200ms ease",
                fontWeight: isActive ? 600 : 400,
              }}
            >
              {item.label}
            </a>
          );
        })}
      </nav>
    </aside>
  );
}
