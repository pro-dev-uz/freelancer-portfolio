// Fixed film-grain overlay — unifies every surface with subtle texture.
export default function Grain() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[90] h-full w-full"
      style={{ opacity: 'calc(var(--grain-opacity) * 0.08)' }}
    >
      <filter id="devpro-grain">
        <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" stitchTiles="stitch" />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#devpro-grain)" />
    </svg>
  );
}
