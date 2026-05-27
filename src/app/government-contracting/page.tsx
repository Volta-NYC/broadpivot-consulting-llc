import Link from "next/link";
import { site } from "@/lib/site";
import { BlueprintBackdrop } from "@/components/Backdrop";

export const metadata = { title: "Government Contracting" };

const phases = [
  {
    name: "Position",
    blurb:
      "Establish the foundation. SAM.gov registration, UEI, NAICS alignment, capability statement, and a clear value proposition for federal, state, and local buyers.",
  },
  {
    name: "Comply",
    blurb:
      "Build the controls buyers require. NIST 800-171 and CMMC alignment, FAR / DFARS readiness, cybersecurity attestations, and audit-ready documentation.",
  },
  {
    name: "Pursue",
    blurb:
      "Capture support, proposal preparation, teaming strategies, and pricing positioning so you compete where you can actually win.",
  },
  {
    name: "Perform",
    blurb:
      "Deliver against contract requirements with operational rigor. Ongoing compliance monitoring, reporting, and renewal positioning.",
  },
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
            Position your business to win.
            {" "}
            <span className="italic text-ink-700 leading-[1.1] pb-1 inline-block">
              And to deliver.
            </span>
          </h1>

          <p className="lede mt-8 max-w-2xl">
            Federal, state, and local opportunities reward the prepared. We
            build the compliance, security, and operational foundation public
            sector buyers expect, then move you from registration to award to
            performance.
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

      {/* FRAMEWORKS — card grid, not divider-per-row spec sheet */}
      <section className="border-b border-ink-200/80 bg-paperDeep/50">
        <div className="wrap py-24 lg:py-28">
          <h2 className="display-sm max-w-3xl">
            Compliance environments we
            {" "}
            <span className="italic text-ink-600">routinely operate in.</span>
          </h2>
          <p className="mt-6 text-ink-600 leading-relaxed max-w-2xl">
            The acronym soup, demystified. We map each requirement to controls
            your team can actually run and your auditor can actually verify.
          </p>

          <ul className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 stagger">
            {site.frameworks.map((f) => (
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

      {/* CTA */}
      <section className="py-24 lg:py-28">
        <div className="wrap">
          <h3 className="display-sm max-w-3xl">
            Tell us where you are.
            {" "}
            <span className="italic text-ink-600">
              Registration, certification, capture, or performance.
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
