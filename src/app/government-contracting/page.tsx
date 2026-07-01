import Link from "next/link";
import { BlueprintBackdrop } from "@/components/Backdrop";

export const metadata = { title: "Government Contracting" };

const phases = [
  {
    name: "Assess",
    blurb:
      "Clarify the requirements, risks, documentation needs, and operational expectations connected to the government-related work your organization is pursuing or performing.",
  },
  {
    name: "Document",
    blurb:
      "Create practical policies, procedures, evidence files, reporting routines, and internal control records that help teams stay organized and audit-ready.",
  },
  {
    name: "Coordinate",
    blurb:
      "Support project teams, vendors, subcontractors, and internal stakeholders so responsibilities, deadlines, compliance tasks, and delivery expectations stay visible.",
  },
  {
    name: "Perform",
    blurb:
      "Strengthen contract performance with operational rigor, risk management, compliance monitoring, issue tracking, and steady project support through delivery.",
  },
];

const supportAreas = [
  "Audit and compliance support",
  "Documentation and evidence management",
  "Operational readiness",
  "Internal controls",
  "Project coordination",
  "Risk management",
  "Vendor and team support",
  "Contract performance support",
];

export default function GovPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-ink-200/80">
        <BlueprintBackdrop />

        <div className="wrap pt-20 sm:pt-24 lg:pt-28 pb-16 lg:pb-24">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-ink-400" />
            <span className="eyebrow">Government contracting</span>
          </div>

          <h1 className="display mt-8 max-w-[18ch]">
            Support for government-related work.
            {" "}
            <span className="italic text-ink-700 leading-[1.1] pb-1 inline-block">
              Built to perform.
            </span>
          </h1>

          <p className="lede mt-8 max-w-2xl">
            BroadPivot supports organizations pursuing or performing federal,
            state, local, and government-adjacent work with audit, compliance,
            documentation, operational readiness, internal controls, project
            coordination, risk management, vendor support, and contract performance support.
          </p>
        </div>
      </section>

      {/* PHASES — vertical timeline-style editorial rows */}
      <section>
        {phases.map((p, i) => (
          <div key={p.name} className="border-b border-ink-200/80 reveal">
            <div className="wrap py-16 lg:py-20">
              <div className="flex items-baseline gap-6">
                <span className="font-mono text-[12px] tabular-nums text-ink-400 uppercase tracking-[0.18em]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="font-serif text-[2rem] sm:text-[2.6rem] tracking-tighter2 text-ink-900 leading-none">
                  {p.name}
                </h2>
              </div>
              <div className="mt-6 h-px w-16 bg-ink-400" />
              <p className="mt-8 text-[16px] text-ink-700 leading-[1.7] max-w-2xl">
                {p.blurb}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* SUPPORT AREAS */}
      <section className="border-b border-ink-200/80 bg-paperDeep/50">
        <div className="wrap py-24 lg:py-28">
          <h2 className="display-sm max-w-3xl">
            Practical support for
            {" "}
            <span className="italic text-ink-600">performance and control.</span>
          </h2>
          <p className="mt-6 text-ink-600 leading-relaxed max-w-2xl">
            The focus is broad and execution-oriented: helping organizations keep the
            work organized, documented, controlled, and ready for review.
          </p>

          <ul className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 stagger">
            {supportAreas.map((f) => (
              <li
                key={f}
                className="border border-ink-300/70 bg-paper px-5 py-5 text-[14.5px] font-serif tracking-tightish text-ink-800"
                style={{
                  transition:
                    "background-color 220ms var(--ease-drawer), border-color 220ms var(--ease-drawer)",
                }}
              >
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CAPABILITY STATEMENT */}
      <section className="border-b border-ink-200/80">
        <div className="wrap py-20 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-accent-warm" />
                <span className="eyebrow">Capability statement</span>
              </div>
              <h2 className="display-sm max-w-2xl">BroadPivot capability statement.</h2>
              <p className="mt-6 text-ink-600 leading-relaxed max-w-2xl">
                A downloadable capability statement will be available here once finalized
                for visitors who need a concise overview of BroadPivot&apos;s services,
                leadership, and government-related support.
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <button className="btn-ghost opacity-70 cursor-not-allowed" type="button" disabled>
                Download coming soon
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-28">
        <div className="wrap">
          <h3 className="display-sm max-w-3xl">
            Tell us what you are building.
            {" "}
            <span className="italic text-ink-600">
              Pursuit, project, team, or contract performance.
            </span>
            {" "}
            We&apos;ll meet you there.
          </h3>
          <div className="mt-12">
            <Link href="/contact" className="btn">
              Start a conversation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
