/* Scroll performance guard */
import { useEffect } from 'react';

export function useScrollPerfGuard(delay = 140) {
  useEffect(() => {
    const root = document.documentElement;
    let raf = 0;
    let tid = 0 as number | ReturnType<typeof setTimeout>;
    let active = false;

    const kick = () => {
      if (!active) {
        active = true;
        root.classList.add('is-scrolling');
      }
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        clearTimeout(tid as number);
        tid = window.setTimeout(() => {
          active = false;
          root.classList.remove('is-scrolling');
        }, delay);
      });
    };

    const opt = { passive: true } as const;
    window.addEventListener('scroll', kick, opt);
    window.addEventListener('wheel', kick, opt);
    window.addEventListener('touchmove', kick, opt);

    return () => {
      window.removeEventListener('scroll', kick as any);
      window.removeEventListener('wheel', kick as any);
      window.removeEventListener('touchmove', kick as any);
      if (raf) cancelAnimationFrame(raf);
      clearTimeout(tid as number);
    };
  }, [delay]);
}

