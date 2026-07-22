import { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

// Count-up number. Parses "50+" → animates 0→50, keeps suffix.
// Non-numeric values ("24/7") render as-is.
export default function CountUp({ value, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const match = /^(\d+)(.*)$/.exec(String(value).trim());
  const target = match ? parseInt(match[1], 10) : null;
  const suffix = match ? match[2] : '';

  const mv = useMotionValue(0);
  const spring = useSpring(mv, { stiffness: 60, damping: 18 });

  useEffect(() => {
    if (inView && target !== null) mv.set(target);
  }, [inView, target, mv]);

  useEffect(() => {
    if (target === null) return undefined;
    const el = ref.current;
    return spring.on('change', (v) => {
      if (el) el.textContent = `${Math.round(v)}${suffix}`;
    });
  }, [spring, suffix, target]);

  if (target === null) {
    return (
      <span ref={ref} className={className}>
        {value}
      </span>
    );
  }
  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
}
