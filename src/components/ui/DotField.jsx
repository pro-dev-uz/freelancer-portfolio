import { useEffect, useRef } from 'react';

// Interactive dot-matrix canvas. Dots brighten and displace near the
// pointer; a slow ambient wave keeps it alive on touch devices.
// Reads CSS vars so it adapts to theme switches automatically.
export default function DotField({ className = '' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ctx = canvas.getContext('2d');
    let raf, w, h, dots = [];
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const GAP = 26;
    const mouse = { x: -9999, y: -9999 };
    let t = 0;

    const readColors = () => {
      const s = getComputedStyle(document.documentElement);
      return {
        base: s.getPropertyValue('--line-strong').trim() || 'rgba(0,0,0,0.25)',
        accent: s.getPropertyValue('--accent').trim() || '#3d3bf3',
      };
    };
    let colors = readColors();
    const observer = new MutationObserver(() => {
      colors = readColors();
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

    const resize = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      dots = [];
      for (let x = GAP / 2; x < w; x += GAP) {
        for (let y = GAP / 2; y < h; y += GAP) {
          dots.push({ x, y });
        }
      }
    };

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    const R = 130;
    const draw = () => {
      t += 0.008;
      ctx.clearRect(0, 0, w, h);
      for (const d of dots) {
        const dx = d.x - mouse.x;
        const dy = d.y - mouse.y;
        const dist = Math.hypot(dx, dy);
        const wave = (Math.sin(d.x * 0.012 + t * 2) + Math.cos(d.y * 0.012 + t * 1.6)) * 0.5;
        let r = 1 + wave * 0.4;
        let color = colors.base;
        let ox = 0, oy = 0;
        if (dist < R) {
          const f = 1 - dist / R;
          r = 1 + f * 2.2;
          color = colors.accent;
          const push = f * 10;
          ox = (dx / (dist || 1)) * push;
          oy = (dy / (dist || 1)) * push;
        }
        ctx.beginPath();
        ctx.arc(d.x + ox, d.y + oy, Math.max(r, 0.4), 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.globalAlpha = dist < R ? 0.9 : 0.5 + wave * 0.2;
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener('resize', resize);
    canvas.parentElement.addEventListener('pointermove', onMove, { passive: true });
    canvas.parentElement.addEventListener('pointerleave', onLeave);

    if (reduced) {
      // Static single frame.
      t = 1;
      ctx.clearRect(0, 0, w, h);
      for (const d of dots) {
        ctx.beginPath();
        ctx.arc(d.x, d.y, 1, 0, Math.PI * 2);
        ctx.fillStyle = colors.base;
        ctx.globalAlpha = 0.5;
        ctx.fill();
      }
    } else {
      raf = requestAnimationFrame(draw);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      observer.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className={`pointer-events-none absolute inset-0 ${className}`} aria-hidden="true" />;
}
