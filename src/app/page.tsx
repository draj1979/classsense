import { Logo } from "@/components/Logo";
import { StudentInsight } from "@/components/StudentInsight";
import { WaitlistForm } from "@/components/WaitlistForm";
import {
  Book,
  Check,
  FileText,
  GraduationCap,
  Shield,
  Sparkles,
} from "@/components/Icons";

const TRUSTED = [
  { name: "Gyanodaya Vidyalaya", sub: "Indore" },
  { name: "St. Aloysius High", sub: "Mangalore" },
  { name: "Sunrise Public School", sub: "Jaipur" },
  { name: "Vidya Niketan", sub: "Nashik" },
  { name: "Greenfield Academy", sub: "Lucknow" },
  { name: "Sharada Vidya Mandir", sub: "Hubli" },
];

const FEATURES = [
  {
    n: "01 — Admin",
    title: "The paperwork, done before the bell.",
    body: "Attendance, grading, parent emails, report-card comments, IEP notes — ClassSense drafts them from your roster and your rubric. You review and send, instead of starting from a blank page.",
  },
  {
    n: "02 — Planning",
    title: "Lessons that fit the class you actually have.",
    body: "Generate plans, slides, and rubrics aligned to your standards. Differentiate the same lesson across three reading levels in a single pass — same objective, right entry point for each student.",
  },
  {
    n: "03 — Personalization",
    title: "Knows who's ahead, who's stuck, and why.",
    body: "ClassSense reads every submission against the standard — not just the score — and tells you which misconception is holding a student back, with a targeted next step for each group.",
  },
];

const DETAIL_ITEMS = [
  {
    Icon: FileText,
    title: "Evidence-anchored",
    body: "Every flag links to the exact submission, quiz, or attendance record it was drawn from. You see the work, not just a number.",
  },
  {
    Icon: Book,
    title: "Standards-aligned",
    body: "Maps lessons and assessments to CBSE, ICSE, and state board syllabi under NEP 2020. ClassSense knows the standard, not just the topic.",
  },
  {
    Icon: GraduationCap,
    title: "Grade- and subject-aware",
    body: "Adapts to your grade band, subject, and teaching style — a 2nd-grade reading plan and an AP Chemistry rubric come out sounding right.",
  },
  {
    Icon: Shield,
    title: "DPDP by design",
    body: "Student data is siloed per class and per teacher. Privacy is built into the architecture, not bolted on by policy.",
  },
];

const TIERS = [
  {
    name: "Teacher",
    price: "Free",
    per: "",
    desc: "For individual teachers getting started.",
    features: [
      "1 class",
      "Lesson & rubric generation",
      "Core standards library",
      "Community support",
    ],
    cta: "Join the waitlist",
    variant: "secondary" as const,
  },
  {
    name: "Pro",
    price: "₹399",
    per: "/ teacher / mo",
    desc: "For teachers who want the full weekly workflow.",
    features: [
      "Unlimited classes",
      "Admin drafting — grading, comments, emails",
      "Differentiation across reading levels",
      "Student insight & misconception flags",
      "Priority support",
    ],
    cta: "Join the waitlist",
    variant: "primary" as const,
    featured: true,
    pill: "Most popular",
  },
  {
    name: "School",
    price: "Custom",
    per: "",
    desc: "For schools and districts.",
    features: [
      "District deployment & admin console",
      "SSO + roster sync (Google Workspace, Teachmint)",
      "SIS & LMS integration (Google Classroom, Teachmint, Entab)",
      "DPDP agreements & data residency",
      "Dedicated success manager",
    ],
    cta: "Join the waitlist",
    variant: "dark" as const,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-bone text-fg2">
      {/* ═══ NAV ═══════════════════════════════════════════════ */}
      <nav className="sticky top-0 z-50 border-b border-transparent bg-bone/85 backdrop-blur-md" style={{ borderColor: "var(--border)" }}>
        <div className="mx-auto flex h-16 max-w-[1240px] items-center justify-between px-6 md:px-10">
          <Logo size={32} />
          <div className="hidden items-center gap-6 md:flex">
            <a
              href="#pricing"
              className="flex cursor-pointer items-center gap-1 text-[14px] text-fg2 transition-colors hover:text-fg1"
            >
              Pricing
            </a>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="#waitlist"
              className="focus-ring rounded-[6px] px-4 py-2 text-[14px] font-medium text-bone transition-colors"
              style={{ background: "var(--slate-700)" }}
            >
              Join the waitlist
            </a>
          </div>
        </div>
      </nav>

      {/* ═══ HERO ══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-columns" />
        <div className="relative mx-auto grid max-w-[1240px] items-center gap-12 px-6 py-20 md:grid-cols-[1.05fr_1fr] md:gap-16 md:px-10 md:py-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.12em]" style={{ color: "var(--teal-700)" }}>
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--accent-500)" }} />
              For teachers, by design
            </div>
            <h1
              className="t-display text-[44px] md:text-[60px] lg:text-[72px]"
              style={{ textWrap: "balance" }}
            >
              The admin, the planning,
              <br />
              and the <span className="t-mark">attention</span>
              <br />
              every student deserves.
            </h1>
            <p className="mt-7 max-w-[540px] text-[17px] leading-[1.55] text-fg2 md:text-[18px]">
              ClassSense reads the class, drafts the busywork, and flags who&apos;s falling behind —
              leaving the teaching, where it belongs, with you.
            </p>
            <div id="waitlist" className="mt-9 scroll-mt-24">
              <WaitlistForm source="ClassSense" />
            </div>
          </div>

          <div className="relative">
            <StudentInsight />
          </div>
        </div>
      </section>

      {/* ═══ TRUSTED BY ═══════════════════════════════════════ */}
      <section className="border-y bg-bone-50" style={{ borderColor: "var(--border)" }}>
        <div className="mx-auto max-w-[1240px] px-6 py-10 md:px-10">
          <div className="text-center text-[12px] tracking-[-0.005em] text-fg3">
            Trusted by teachers and independent schools across India
          </div>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
            {TRUSTED.map((f) => (
              <div key={f.name} className="flex items-baseline gap-2 opacity-70">
                <span
                  className="text-[18px] tracking-[-0.01em] text-fg1"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {f.name}
                </span>
                <span className="text-[10px] uppercase tracking-[0.14em] text-fg3">
                  {f.sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FEATURES ══════════════════════════════════════════ */}
      <section className="mx-auto max-w-[1240px] px-6 py-24 md:px-10 md:py-32">
        <div className="mb-14 max-w-[760px]">
          <span className="t-eyebrow">What ClassSense does</span>
          <h2
            className="mt-4 text-[36px] md:text-[48px]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "var(--fg1)", lineHeight: 1.08, letterSpacing: "-0.015em", textWrap: "balance" }}
          >
            Three kinds of teacher work, handed back to you as{" "}
            <span style={{ fontStyle: "italic", color: "var(--fg1)" }}>finished drafts.</span>
          </h2>
          <p className="mt-5 text-[17px] leading-[1.6] text-fg2">
            Admin that drafts itself from your roster. Planning that fits the class you have.
            Personalization that reads the work, not just the score. Each surface gives you time
            back, not another dashboard to check.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {FEATURES.map((f, i) => (
            <article
              key={f.n}
              className="card-lift flex flex-col rounded-[14px] border bg-white p-7"
              style={{ borderColor: "var(--border)" }}
            >
              <div
                className="mb-5 text-[11px] font-medium uppercase tracking-[0.12em]"
                style={{ color: "var(--teal-700)" }}
              >
                {f.n}
              </div>
              <h3
                className="mb-3 text-[20px] leading-[1.2] tracking-[-0.01em]"
                style={{ fontFamily: "var(--font-sans)", fontWeight: 600, color: "var(--fg1)" }}
              >
                {f.title}
              </h3>
              <p className="mb-5 text-[14px] leading-[1.6] text-fg2">{f.body}</p>

              {/* Inline mini-visual per feature */}
              {i === 0 && (
                <div
                  className="mt-auto rounded-[10px] border p-4"
                  style={{ borderColor: "var(--border)", background: "var(--bone-50)" }}
                >
                  <div
                    className="mb-2 text-[10px] font-semibold uppercase tracking-[0.1em]"
                    style={{ color: "var(--teal-700)" }}
                  >
                    ★ ClassSense · 2.4s
                  </div>
                  <div className="text-[13px] leading-[1.45] text-fg1">
                    &ldquo;Drafted 28 report-card comments from this term&apos;s grades and
                    your notes — ready to review.&rdquo;
                  </div>
                </div>
              )}
              {i === 1 && (
                <div
                  className="mt-auto rounded-[10px] border bg-white p-4"
                  style={{ borderColor: "var(--border)" }}
                >
                  <div
                    className="text-[14px] leading-[1.55] text-fg1"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Objective: students will{" "}
                    <span className="hl-yellow">model meiosis and explain how it creates genetic variation</span>.
                    <sup
                      className="ml-0.5 inline-block rounded-[3px] px-1.5 align-super text-[9px] font-semibold text-white"
                      style={{ background: "var(--accent-600)", fontFamily: "var(--font-sans)" }}
                    >
                      CBSE
                    </sup>
                  </div>
                </div>
              )}
              {i === 2 && (
                <div
                  className="mt-auto flex items-start gap-2.5 rounded-[10px] border p-4"
                  style={{
                    borderColor: "var(--accent-100)",
                    background: "var(--accent-50)",
                  }}
                >
                  <span
                    className="shrink-0"
                    style={{ color: "var(--accent-700)" }}
                  >
                    <Sparkles size={16} />
                  </span>
                  <div>
                    <div
                      className="mb-1 text-[12px] font-semibold leading-tight"
                      style={{ color: "var(--accent-700)" }}
                    >
                      6 students share one gap
                    </div>
                    <div
                      className="text-[11px] leading-[1.5]"
                      style={{ color: "var(--accent-700)" }}
                    >
                      Confusing mitosis with meiosis. A 10-minute re-teach is drafted and ready.
                    </div>
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* ═══ PRODUCT DETAIL — DARK ════════════════════════════ */}
      <section
        className="relative"
        style={{ background: "var(--slate-900)", color: "var(--fg-on-dark)" }}
      >
        <div className="mx-auto grid max-w-[1240px] items-start gap-12 px-6 py-24 md:grid-cols-[1fr_1.05fr] md:gap-16 md:px-10 md:py-32">
          <div>
            <span
              className="text-[12px] font-medium uppercase tracking-[0.12em]"
              style={{ color: "var(--teal-300)" }}
            >
              Inside the workspace
            </span>
            <h2
              className="mt-4 text-[34px] md:text-[44px]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "var(--fg-on-dark)", lineHeight: 1.08, letterSpacing: "-0.015em", textWrap: "balance" }}
            >
              One class, every{" "}
              <span style={{ fontStyle: "italic", color: "var(--teal-300)" }}>signal,</span>{" "}
              in context.
            </h2>
            <p className="mt-5 max-w-[480px] text-[17px] leading-[1.65]" style={{ color: "rgba(236,238,241,0.75)" }}>
              ClassSense doesn&apos;t separate grading from planning from knowing your students.
              They&apos;re the same surface — because that&apos;s how a teacher&apos;s week actually flows.
            </p>

            <div className="mt-9 grid gap-5">
              {DETAIL_ITEMS.map((d) => (
                <div key={d.title} className="flex gap-4">
                  <div
                    className="grid h-9 w-9 shrink-0 place-items-center rounded-[8px]"
                    style={{ background: "rgba(118,171,174,0.18)", color: "var(--teal-300)" }}
                  >
                    <d.Icon size={18} />
                  </div>
                  <div>
                    <h4 className="mb-1 text-[15px] font-semibold" style={{ color: "var(--fg-on-dark)" }}>
                      {d.title}
                    </h4>
                    <p className="text-[14px] leading-[1.55]" style={{ color: "rgba(236,238,241,0.7)" }}>
                      {d.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Product shot */}
          <div
            className="overflow-hidden rounded-[14px] border bg-white text-fg2"
            style={{
              borderColor: "rgba(255,255,255,0.08)",
              boxShadow: "0 30px 80px rgba(0,0,0,0.4)",
            }}
          >
            <div
              className="flex items-center gap-1.5 border-b px-4 py-2.5"
              style={{ borderColor: "var(--border)" }}
            >
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--slate-200)" }} />
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--slate-200)" }} />
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--slate-200)" }} />
            </div>
            <div className="p-6 md:p-7">
              <div className="mb-2 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em]" style={{ color: "var(--teal-700)" }}>
                <span
                  className="text-[14px] leading-none"
                  style={{ fontFamily: "var(--font-display)", fontStyle: "italic", color: "var(--accent-500)", letterSpacing: 0, textTransform: "none" }}
                >
                  ★
                </span>
                Grade 7 Science · Period 3
              </div>
              <h4
                className="mb-3 text-[18px] leading-[1.3] tracking-[-0.01em]"
                style={{ fontFamily: "var(--font-sans)", fontWeight: 600, color: "var(--fg1)" }}
              >
                Cell division unit · 29 students
              </h4>
              <p className="mb-4 text-[14px] leading-[1.6] text-fg2">
                ClassSense surfaces that{" "}
                <span className="hl-yellow">
                  six students consistently miss questions distinguishing mitosis from meiosis
                </span>{" "}
                — a single shared misconception, not broad struggle.
              </p>
              <div className="mb-5 flex flex-wrap gap-1.5">
                {["29 students", "Term 2", "Last quiz 3d ago"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border bg-bone px-2 py-0.5 text-[10px] text-fg3"
                    style={{ borderColor: "var(--border)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="space-y-2 border-t pt-3" style={{ borderColor: "var(--border)" }}>
                {[
                  { n: "01", title: "Class mastery 76%", badge: "On track", color: "#2F8F6F", bg: "#E6F2EC", border: "rgba(47,143,111,0.25)" },
                  { n: "02", title: "6 students < 60%", badge: "Re-teach", color: "var(--accent-700)", bg: "var(--accent-50)", border: "rgba(151,98,10,0.28)" },
                ].map((r) => (
                  <div key={r.n} className="flex items-center gap-3 py-1.5">
                    <span
                      className="text-[10px] tracking-[0.05em] text-fg4"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {r.n}
                    </span>
                    <span
                      className="text-[14px] text-fg1"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {r.title}
                    </span>
                    <span
                      className="ml-auto rounded-full border px-2 py-0.5 text-[10px] font-medium"
                      style={{
                        color: r.color,
                        background: r.bg,
                        borderColor: r.border,
                      }}
                    >
                      {r.badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ QUOTE ═════════════════════════════════════════════ */}
      <section className="mx-auto max-w-[1240px] px-6 py-24 md:px-10 md:py-32">
        <div className="grid items-start gap-12 md:grid-cols-[260px_1fr] md:gap-16">
          <div>
            <div
              className="mb-4 grid h-12 w-12 place-items-center rounded-full text-[14px] font-semibold text-white"
              style={{ background: "var(--slate-700)" }}
            >
              PS
            </div>
            <div className="text-[15px] font-semibold text-fg1">Ms. Priya Sharma</div>
            <div className="text-[13px] text-fg3">Class 7 science</div>
            <div className="text-[13px]" style={{ color: "var(--teal-700)" }}>
              Delhi Public School, Bengaluru
            </div>
          </div>
          <p
            className="text-[24px] leading-[1.45] md:text-[28px]"
            style={{ fontFamily: "var(--font-display)", color: "var(--fg1)", letterSpacing: "-0.005em", textWrap: "pretty" }}
          >
            I used to spend Sundays grading and writing comments. ClassSense drafts them from the
            work I&apos;ve already marked — and on Monday it tells me which five kids need me first,
            and exactly where they&apos;re stuck. That&apos;s the part the gradebook never did.
          </p>
        </div>
      </section>

      {/* ═══ PRICING ═══════════════════════════════════════════ */}
      <section
        id="pricing"
        className="mx-auto max-w-[1240px] scroll-mt-20 border-t px-6 py-24 md:px-10 md:py-32"
        style={{ borderColor: "var(--border)" }}
      >
        <div className="mb-14 max-w-[760px]">
          <span className="t-eyebrow">Pricing</span>
          <h2
            className="mt-4 text-[36px] md:text-[48px]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "var(--fg1)", lineHeight: 1.08, letterSpacing: "-0.015em", textWrap: "balance" }}
          >
            Plans built around{" "}
            <span style={{ fontStyle: "italic" }}>how teachers work,</span>{" "}
            not seats.
          </h2>
          <p className="mt-5 text-[17px] leading-[1.6] text-fg2">
            All plans include unlimited lessons, standards alignment, and DPDP-aligned controls.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {TIERS.map((t) => {
            const featured = t.featured;
            return (
              <div
                key={t.name}
                className="card-lift relative flex flex-col rounded-[14px] border bg-white p-7 md:p-8"
                style={{
                  borderColor: featured ? "var(--slate-700)" : "var(--border)",
                  boxShadow: featured
                    ? "0 12px 32px rgba(20,24,29,0.10), 0 2px 6px rgba(20,24,29,0.04)"
                    : undefined,
                }}
              >
                <div className="mb-4 flex items-center gap-2">
                  <span className="text-[14px] font-semibold tracking-[-0.005em] text-fg1">
                    {t.name}
                  </span>
                  {t.pill && (
                    <span
                      className="rounded-full px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.1em]"
                      style={{ background: "var(--accent-500)", color: "var(--slate-950)" }}
                    >
                      {t.pill}
                    </span>
                  )}
                </div>
                <div className="mb-3 flex items-baseline gap-2">
                  <span
                    className="text-[44px] tracking-[-0.02em]"
                    style={{ fontFamily: "var(--font-display)", color: "var(--fg1)", lineHeight: 1 }}
                  >
                    {t.price}
                  </span>
                  {t.per && (
                    <span className="text-[13px] text-fg3">{t.per}</span>
                  )}
                </div>
                <p className="mb-6 text-[14px] leading-[1.55] text-fg2">{t.desc}</p>
                <ul className="mb-7 space-y-2.5 text-[14px] text-fg2">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <span style={{ color: "var(--teal-700)" }} className="mt-1 shrink-0">
                        <Check size={14} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#waitlist"
                  className={`focus-ring mt-auto block rounded-[8px] px-5 py-3 text-center text-[14px] font-medium transition-colors`}
                  style={
                    t.variant === "primary"
                      ? { background: "var(--accent-600)", color: "white" }
                      : t.variant === "dark"
                        ? { background: "var(--slate-700)", color: "var(--bone)" }
                        : {
                            background: "white",
                            color: "var(--fg1)",
                            border: "1px solid var(--border-strong)",
                          }
                  }
                >
                  {t.cta}
                </a>
              </div>
            );
          })}
        </div>
      </section>

      {/* ═══ CLOSING CTA ═══════════════════════════════════════ */}
      <section
        className="relative"
        style={{ background: "var(--slate-900)", color: "var(--fg-on-dark)" }}
      >
        <div className="mx-auto max-w-[1240px] px-6 py-24 text-center md:px-10 md:py-32">
          <h2
            className="mx-auto max-w-[760px] text-[44px] md:text-[64px]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "var(--fg-on-dark)", lineHeight: 1.05, letterSpacing: "-0.015em", textWrap: "balance" }}
          >
            Spend your hours{" "}
            <span style={{ fontStyle: "italic", color: "var(--accent-500)" }}>teaching.</span>
          </h2>
          <p
            className="mx-auto mt-5 max-w-[520px] text-[17px] leading-[1.55]"
            style={{ color: "rgba(236,238,241,0.7)" }}
          >
            Join the waitlist and be first to know when ClassSense opens up. Built to connect with
            Google Classroom, Teachmint, and your SIS.
          </p>
          <div className="mt-9 flex justify-center">
            <WaitlistForm source="ClassSense" variant="dark" />
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ════════════════════════════════════════════ */}
      <footer
        className="border-t"
        style={{ background: "var(--slate-950)", color: "var(--fg-on-dark)", borderColor: "rgba(255,255,255,0.08)" }}
      >
        <div className="mx-auto flex max-w-[1240px] flex-col items-start justify-between gap-6 px-6 py-14 md:flex-row md:items-center md:px-10">
          <div>
            <Logo size={28} inverse />
            <p className="mt-4 max-w-[300px] text-[13px] leading-[1.6]" style={{ color: "rgba(236,238,241,0.55)" }}>
              An AI teaching assistant built for the way teachers actually plan, grade, and reach
              every student.
            </p>
          </div>
          <a
            href="#waitlist"
            className="focus-ring inline-flex shrink-0 items-center justify-center rounded-[8px] px-6 py-3 text-[14px] font-medium text-white transition-colors"
            style={{ background: "var(--accent-500)" }}
          >
            Join the waitlist
          </a>
        </div>
        <div
          className="border-t"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >
          <div className="mx-auto flex max-w-[1240px] px-6 py-5 text-[12px] md:px-10" style={{ color: "rgba(236,238,241,0.5)" }}>
            <span>© {new Date().getFullYear()} ClassSense, Inc. · ClassSense supports teachers and does not replace professional educational judgment.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
