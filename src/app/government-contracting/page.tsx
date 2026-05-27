import Link from "next/link";
import { site } from "@/lib/site";
import { BlueprintBackdrop } from "@/components/Backdrop";

export const metadata = { title: "Government Contracting" };

const phases = [
  {
    name: "Position",
    blurb:
      "Establish the foundation — SAM.gov registration, UEI, NAICS alignment, capability statement, and a clear value proposition for federal, state, and local buyers.",
  },
  {
    name: "Comply",
    blurb:
      "Build the controls buyers require — NIST 800-171 / CMMC alignment, FAR / DFARS readiness, cybersecurity attestations, and audit-ready documentation.",
  },
  {
    name: "Pursue",
    blurb:
      "Capture support, proposal preparation, teaming strategies, and pricing positioning so you compete where you can actually win.",
  },
  {
    name: "Perform",
    blurb:
      "Deliver against contract requirements with operational rigor — ongoing compliance monitoring, reporting, and renewal positioning.",
  },
];

export default function GovPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-ink-200/80">
        <BlueprintBackdrop />

        <div className="wrap pt-20 sm:pt-28 lg:pt-32 pb-16 lg:pb-24">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-ink-400" />
            <span className="eyebrow">Government contracting</span>
          </div>
          <div className="mt-7 grid gap-10 lg:grid-cols-12 lg:gap-16 items-end">
            <h1 className="display lg:col-span-8 max-w-[18ch]">
              Position your business to win
              <br />
              <span className="italic text-ink-700">— and to deliver.</span>
            </h1>
            <p className="lede lg:col-span-4 max-w-md">
              Federal, state, and local opportunities reward the prepared. We build the
              compliance, security, and operational foundation public-sector buyers expect,
              then move you from registration to award to performance.
            </p>
          </div>
        </div>
      </section>

      {/* PHASES — vertical numbered editorial */}
      <section>
        {phases.map((p, i) => (
          <div key={p.name} className="border-b border-ink-200/80 reveal">
            <div className="wrap py-16 lg:py-20 grid gap-10 lg:grid-cols-12 lg:gap-16 items-start">
              <div className="lg:col-span-4">
                <div className="flex items-baseline gap-5">
                  <span className="font-mono text-[12px] tabular-nums text-ink-400 uppercase tracking-[0.18em]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-serif text-[2rem] sm:text-[2.4rem] tracking-tighter2 text-ink-900 leading-none">
                    {p.name}
                  </h2>
                </div>
                <div className="mt-5 h-px w-16 bg-ink-400" />
              </div>
              <p className="lg:col-span-8 text-[16px] text-ink-700 leading-[1.7] max-w-2xl">
                {p.blurb}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* FRAMEWORKS — grid of pills */}
      <section className="border-b border-ink-200/80 bg-paperDeep/50">
        <div className="wrap py-24 lg:py-28 section-head">
          <div className="lg:col-span-4">
            <div className="idx">Frameworks</div>
            <h2 className="display-sm mt-5">
              Compliance environments we routinely operate in.
            </h2>
            <p className="mt-5 text-ink-600 leading-relaxed max-w-md">
              The acronym soup, demystified. We map each requirement to controls your team
              can actually run and your auditor can actually verify.
            </p>
          </div>
          <ul className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-3 stagger">
            {site.frameworks.map((f) => (
              <li
                key={f}
                className="border border-ink-300/70 bg-paper px-4 py-4 text-[14px] font-serif tracking-tightish text-ink-800"
              >
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-28">
        <div className="wrap flex flex-col sm:flex-row items-start sm:items-end justify-between gap-8">
          <h3 className="display-sm max-w-2xl">
            Tell us where you are — registration, certification, capture, or performance
            <span className="italic text-ink-600"> — and we&apos;ll meet you there.</span>
          </h3>
          <Link href="/contact" className="btn">
            Start a conversation
          </Link>
        </div>
      </section>
    </>
  );
}
