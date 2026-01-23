import { useMemo } from "react";
import { smoothScrollTo } from "../lib/smoothScrollTo";
import "../styles/sidebar.css";

type NavItem = {
  id: string;
  label: string;
};

const navItems: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

type SidebarProps = {
  activeId: string;
  onActiveChange: (id: string) => void;
  onNavLockChange: (id: string | null) => void;
};

export function Sidebar({ activeId, onActiveChange, onNavLockChange }: SidebarProps) {
  const items = useMemo(() => navItems, []);

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
    <aside className="sidebar">
      <nav className="nav">
        {items.map((item) => {
          const isActive = item.id === activeId;

          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="navLink"
              data-active={isActive}
              onClick={(e) => {
                e.preventDefault();
                handleClick(item.id);
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
