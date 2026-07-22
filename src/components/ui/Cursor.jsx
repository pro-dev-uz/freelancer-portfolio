import { useEffect, useRef } from 'react';

// Custom cursor: ink dot + lagging ring. Desktop fine-pointer only.
// Ring grows over any element with [data-cursor] or interactive tags.
export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mx = -100, my = -100;
    let rx = -100, ry = -100;
    let raf;
    let scale = 1;

    const move = (e) => {
      mx = e.clientX;
      my = e.clientY;
      const t = e.target.closest('a, button, [data-cursor], input, select, textarea, [role="button"]');
      scale = t ? 2.6 : 1;
      dot.style.opacity = '1';
      ring.style.opacity = '1';
    };
    const leave = () => {
      dot.style.opacity = '0';
      ring.style.opacity = '0';
    };

    const loop = () => {
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%,-50%)`;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%,-50%) scale(${scale})`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', move, { passive: true });
    document.documentElement.addEventListener('mouseleave', leave);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener('mousemove', move);
      document.documentElement.removeEventListener('mouseleave', leave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div aria-hidden="true" className="hidden lg:block">
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[100] h-1.5 w-1.5 rounded-full bg-accent opacity-0 transition-opacity duration-300"
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[100] h-8 w-8 rounded-full border border-accent/60 opacity-0 transition-[opacity] duration-300"
        style={{ transitionProperty: 'opacity, scale' }}
      />
    </div>
  );
}
