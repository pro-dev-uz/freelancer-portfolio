// Infinite marquee — content duplicated once, CSS keyframes do the rest.
export default function Marquee({ children, duration = 30, reverse = false, className = '' }) {
  return (
    <div className={`marquee-paused overflow-hidden ${className}`}>
      <div
        className={`marquee-track ${reverse ? 'reverse' : ''}`}
        style={{ '--marquee-duration': `${duration}s` }}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
