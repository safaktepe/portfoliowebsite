const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

export function smoothScrollTo(
  targetY: number,
  durationMs: number,
  onComplete?: () => void
) {
  const startY = window.scrollY;
  const delta = targetY - startY;

  if (delta === 0 || durationMs <= 0) {
    onComplete?.();
    return;
  }

  const start = performance.now();

  const step = (now: number) => {
    const elapsed = now - start;
    const t = Math.min(1, elapsed / durationMs);
    const eased = easeInOutCubic(t);

    window.scrollTo(0, startY + delta * eased);

    if (t < 1) {
      requestAnimationFrame(step);
    } else {
      onComplete?.();
    }
  };

  requestAnimationFrame(step);
}
