// ─── DevPro motion system ─────────────────────────────────────────
// One easing to rule them all: "expo-soft" — fast start, long settle.
export const EASE = [0.22, 1, 0.36, 1];

export const DUR = {
  fast: 0.4,
  base: 0.7,
  slow: 1.0,
};

// Masked line reveal — parent must be overflow-hidden.
export const maskUp = {
  hidden: { y: '110%' },
  visible: (i = 0) => ({
    y: '0%',
    transition: { duration: 0.9, ease: EASE, delay: i * 0.09 },
  }),
};

// Simple fade-rise for blocks.
export const rise = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: DUR.base, ease: EASE, delay: i * 0.08 },
  }),
};

// Hairline draw (scaleX).
export const drawX = {
  hidden: { scaleX: 0 },
  visible: (i = 0) => ({
    scaleX: 1,
    transition: { duration: DUR.slow, ease: EASE, delay: i * 0.1 },
  }),
};

export const stagger = (delay = 0.08, delayChildren = 0) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: delay, delayChildren },
  },
});

export const VIEWPORT = { once: true, margin: '-80px' };
