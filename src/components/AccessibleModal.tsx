import { useEffect, useRef } from "react";
import "../styles/modal.css";

type ButtonDef = {
  label: string;
  onClick: () => void;
  variant?: "primary" | "secondary";
};

export function AccessibleModal({
  open,
  title,
  body,
  onClose,
  primary,
  secondary,
  footerNote,
}: {
  open: boolean;
  title: string;
  body: React.ReactNode;
  onClose: () => void;
  primary: ButtonDef;
  secondary?: ButtonDef;
  footerNote?: string;
}) {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const lastActiveRef = useRef<HTMLElement | null>(null);

  // Lock background scroll and manage focus
  useEffect(() => {
    if (!open) return;
    lastActiveRef.current = document.activeElement as HTMLElement | null;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const toRestore = () => {
      document.body.style.overflow = prevOverflow;
      lastActiveRef.current?.focus?.();
    };

    // Focus first focusable in dialog
    const focusFirst = () => {
      const focusables = getFocusable(dialogRef.current);
      (focusables[0] as HTMLElement | undefined)?.focus?.();
    };

    const t = setTimeout(focusFirst, 0);

    const onKeyDown = (e: KeyboardEvent) => {
      if (!open) return;
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "Tab") {
        // trap focus
        const nodes = getFocusable(dialogRef.current);
        if (nodes.length === 0) return;
        const first = nodes[0] as HTMLElement;
        const last = nodes[nodes.length - 1] as HTMLElement;
        const active = document.activeElement as HTMLElement | null;
        if (e.shiftKey) {
          if (active === first || !dialogRef.current?.contains(active)) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (active === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      clearTimeout(t);
      document.removeEventListener("keydown", onKeyDown);
      toRestore();
    };
  }, [open, onClose]);

  function getFocusable(root: HTMLElement | null) {
    if (!root) return [] as Element[];
    return Array.from(
      root.querySelectorAll(
        [
          "button",
          "[href]",
          "input",
          "select",
          "textarea",
          "[tabindex]:not([tabindex='-1'])",
        ].join(",")
      )
    ).filter((el) => !(el as HTMLElement).hasAttribute("disabled"));
  }

  if (!open) return null;

  const titleId = "modal-title";
  const descId = "modal-desc";

  return (
    <div
      ref={overlayRef}
      className="modalOverlay"
      role="presentation"
      onMouseDown={(e) => {
        if (e.target === overlayRef.current) {
          // Only close if the actual overlay was the press target
          (overlayRef.current as any).__pressed = true;
        }
      }}
      onMouseUp={(e) => {
        if (e.target === overlayRef.current && (overlayRef.current as any).__pressed) {
          onClose();
        }
        (overlayRef.current as any).__pressed = false;
      }}
    >
      <div
        ref={dialogRef}
        className="modalDialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descId}
      >
        <header className="modalHeader">
          <h3 id={titleId} className="modalTitle">{title}</h3>
          <button
            type="button"
            className="modalClose"
            aria-label="Close dialog"
            onClick={onClose}
          >
            ×
          </button>
        </header>

        <div id={descId} className="modalBody">
          {body}
        </div>

        <div className="modalActions">
          {secondary && (
            <button
              type="button"
              className="modalBtn modalBtn--ghost"
              onClick={secondary.onClick}
            >
              {secondary.label}
            </button>
          )}
          <button type="button" className="modalBtn modalBtn--primary" onClick={primary.onClick}>
            {primary.label}
          </button>
        </div>

        {footerNote && <p className="modalFootNote">{footerNote}</p>}
      </div>
    </div>
  );
}

