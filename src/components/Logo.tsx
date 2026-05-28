/**
 * ClassSense wordmark — a slate-rounded square holding a bone
 * mortarboard (graduation cap) mark with a warm-amber corner-tab,
 * paired with the wordmark "ClassSense" (italic "Sense") in
 * display serif.
 */
export function Logo({ size = 32, inverse = false }: { size?: number; inverse?: boolean }) {
  const slate = inverse ? "var(--bone)" : "var(--slate-700)";
  const bone = inverse ? "var(--slate-700)" : "var(--bone)";
  const accent = "var(--accent-500)";
  const text = inverse ? "var(--bone)" : "var(--slate-700)";

  return (
    <div className="flex items-center gap-2.5">
      <svg
        width={size}
        height={size}
        viewBox="0 0 56 56"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect x="4" y="4" width="48" height="48" rx="8" fill={slate} />
        <Mortarboard fill={bone} />
        <path d="M52 4v9h-9c0-4.971 4.029-9 9-9z" fill={accent} />
      </svg>
      <span
        className="text-[24px] tracking-[-0.01em]"
        style={{ fontFamily: "var(--font-display)", color: text }}
      >
        Class
        <em style={{ fontStyle: "italic" }}>Sense</em>
      </span>
    </div>
  );
}

/** Just the rounded mark — used as favicon-style accent. */
export function LogoMark({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" aria-hidden="true">
      <rect x="4" y="4" width="48" height="48" rx="8" fill="var(--slate-700)" />
      <Mortarboard fill="var(--bone)" />
      <path d="M52 4v9h-9c0-4.971 4.029-9 9-9z" fill="var(--accent-500)" />
    </svg>
  );
}

function Mortarboard({ fill }: { fill: string }) {
  return (
    <g>
      {/* cap board (diamond) */}
      <path d="M28 15 45 23 28 31 11 23Z" fill={fill} />
      {/* head band */}
      <path
        d="M20 26.5V33c0 1.9 3.6 3.2 8 3.2s8-1.3 8-3.2v-6.5"
        fill="none"
        stroke={fill}
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      {/* tassel */}
      <path d="M44.2 23.4V31" fill="none" stroke={fill} strokeWidth="2" strokeLinecap="round" />
      <circle cx="44.2" cy="32.6" r="1.7" fill={fill} />
    </g>
  );
}
