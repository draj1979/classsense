/**
 * Hero visual — a window-chromed mock of a ClassSense class insight,
 * showing the kind of output a teacher sees: a pattern read across
 * the roster, an evidence-anchored finding, and pace groups with
 * suggested-action badges.
 */
export function StudentInsight() {
  return (
    <div
      className="relative overflow-hidden rounded-[14px] border bg-white"
      style={{
        borderColor: "var(--border)",
        boxShadow:
          "0 12px 32px rgba(20,24,29,0.10), 0 2px 6px rgba(20,24,29,0.04)",
      }}
    >
      {/* Window chrome */}
      <div
        className="flex items-center gap-1.5 border-b px-4 py-2.5"
        style={{ borderColor: "var(--border)" }}
      >
        <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--slate-200)" }} />
        <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--slate-200)" }} />
        <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--slate-200)" }} />
        <span
          className="ml-3 text-[11px] tracking-[-0.01em] text-fg3"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          app.classsense.com/c/period-3-bio
        </span>
      </div>

      {/* Body */}
      <div className="p-6 md:p-7">
        <div className="mb-3 flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.12em]" style={{ color: "var(--teal-700)" }}>
          <span
            className="text-[14px] leading-none"
            style={{ fontFamily: "var(--font-display)", fontStyle: "italic", color: "var(--accent-500)", letterSpacing: 0, textTransform: "none" }}
          >
            ★
          </span>
          <span>ClassSense</span>
          <span style={{ color: "var(--slate-200)" }}>·</span>
          <span>2.4s</span>
          <span style={{ color: "var(--slate-200)" }}>·</span>
          <span>29 students</span>
        </div>

        <h3
          className="mb-3 text-[19px] leading-[1.3] tracking-[-0.01em]"
          style={{ fontFamily: "var(--font-sans)", fontWeight: 600, color: "var(--fg1)" }}
        >
          Period 3 is splitting into two paces on cell division.
        </h3>

        <p className="mb-5 text-[14px] leading-[1.55] text-fg2">
          Across the last two quizzes, <span className="cite-chip">mitosis</span> mastery rose to
          88% for most of the class while 6 students stalled below 60%. The gap is widening, not
          closing.
        </p>

        {/* Pace-group rows */}
        <div
          className="space-y-2 border-t pt-4"
          style={{ borderColor: "var(--border)" }}
        >
          <GroupRow
            n="01"
            title="Advanced"
            count="14 students"
            status="onpace"
          />
          <GroupRow
            n="02"
            title="Core"
            count="9 students"
            status="watch"
          />
          <GroupRow
            n="03"
            title="Needs support"
            count="6 students"
            status="reteach"
          />
        </div>
      </div>
    </div>
  );
}

function GroupRow({
  n,
  title,
  count,
  status,
}: {
  n: string;
  title: string;
  count: string;
  status: "onpace" | "watch" | "reteach";
}) {
  const badge = {
    onpace: {
      label: "On pace",
      color: "#2F8F6F",
      bg: "#E6F2EC",
      border: "rgba(47,143,111,0.25)",
    },
    watch: {
      label: "Watch",
      color: "var(--teal-700)",
      bg: "var(--teal-50)",
      border: "rgba(78,132,135,0.25)",
    },
    reteach: {
      label: "Re-teach",
      color: "var(--accent-700)",
      bg: "var(--accent-50)",
      border: "rgba(151,98,10,0.28)",
    },
  }[status];
  return (
    <div className="flex items-center gap-3 py-1.5">
      <span
        className="text-[10px] tracking-[0.05em] text-fg4"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        {n}
      </span>
      <span
        className="text-[14px] tracking-[-0.005em] text-fg1"
        style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}
      >
        {title}
      </span>
      <span
        className="text-[11px] text-fg3"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        {count}
      </span>
      <span
        className="ml-auto rounded-full border px-2 py-0.5 text-[10px] font-medium"
        style={{
          color: badge.color,
          background: badge.bg,
          borderColor: badge.border,
        }}
      >
        {badge.label}
      </span>
    </div>
  );
}
