// Generative editorial cover art for blog posts — gradient base with a
// seeded geometric motif (arcs, dots, lines). On-brand, instant, theme-proof.
// `grad` = [fromHex, toHex]; `seed` varies the composition per post.
export default function BlogCover({ grad = ['#3d3bf3', '#22d3ee'], seed = 0, className = '' }) {
  const id = `g${seed}`;
  const r = (n) => ((Math.sin(seed * 9.17 + n * 2.3) + 1) / 2); // 0..1 deterministic
  const cx = 60 + r(1) * 280;
  const cy = 30 + r(2) * 90;
  const dotCols = 14;
  const dotRows = 6;

  return (
    <svg
      viewBox="0 0 400 180"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={grad[0]} />
          <stop offset="100%" stopColor={grad[1]} />
        </linearGradient>
        <radialGradient id={`${id}r`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* base */}
      <rect width="400" height="180" fill={`url(#${id})`} />

      {/* dot matrix */}
      <g fill="#ffffff" opacity="0.18">
        {Array.from({ length: dotRows }).map((_, ry) =>
          Array.from({ length: dotCols }).map((_, rx) => (
            <circle key={`${rx}-${ry}`} cx={18 + rx * 28} cy={20 + ry * 28} r="1.3" />
          ))
        )}
      </g>

      {/* concentric arcs — seeded position */}
      <g fill="none" stroke="#ffffff" strokeOpacity="0.5">
        {[26, 48, 72, 98].map((rad, i) => (
          <circle key={rad} cx={cx} cy={cy} r={rad} strokeWidth={i === 1 ? 2 : 1} strokeOpacity={0.5 - i * 0.1} />
        ))}
      </g>

      {/* soft glow */}
      <circle cx={cx} cy={cy} r="70" fill={`url(#${id}r)`} />

      {/* diagonal accent line */}
      <line
        x1={r(3) * 400}
        y1="0"
        x2={r(4) * 400}
        y2="180"
        stroke="#ffffff"
        strokeOpacity="0.25"
        strokeWidth="1.5"
      />

      {/* overlay for text legibility at the bottom */}
      <rect x="0" y="120" width="400" height="60" fill="#000000" opacity="0.12" />
    </svg>
  );
}
