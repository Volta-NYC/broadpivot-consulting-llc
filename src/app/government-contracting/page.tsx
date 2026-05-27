import Link from "next/link";

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

const frameworks = [
  "NIST 800-171",
  "NIST 800-53",
  "CMMC alignment",
  "FAR / DFARS",
  "FedRAMP awareness",
  "HIPAA",
  "SOX",
  "PCI-DSS",
];

export default function GovPage() {
  return (
    <>
      <section className="pt-20 sm:pt-28 pb-16 border-b border-ink-200">
        <div className="wrap">
          <div className="eyebrow">Government contracting</div>
          <h1 className="display mt-6 max-w-4xl">
            Position your business to win — and to deliver.
          </h1>
          <p className="lede mt-8 max-w-2xl">
            Federal, state, and local opportunities reward the prepared. We help organizations build the compliance,
            cybersecurity, and operational foundation that public-sector buyers expect, then move from registration
            to award to performance.
          </p>
        </div>
      </section>

      <section>
        {phases.map((p, i) => (
          <div key={p.name} className="border-b border-ink-200 reveal">
            <div className="wrap py-14 lg:py-16 grid gap-8 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-3 flex items-baseline gap-4">
                <span className="font-sans text-sm text-ink-400 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="font-serif text-3xl tracking-tightish text-ink-900">{p.name}</h2>
              </div>
              <p className="lg:col-span-9 text-ink-700 leading-relaxed max-w-2xl">
                {p.blurb}
              </p>
            </div>
          </div>
        ))}
      </section>

      <section className="border-b border-ink-200">
        <div className="wrap py-20 lg:py-24 grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="eyebrow">Frameworks</div>
            <h2 className="display-sm mt-4">
              Compliance environments we routinely operate in.
            </h2>
          </div>
          <ul className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-6 stagger">
            {frameworks.map((f) => (
              <li key={f} className="border-b border-ink-200 py-3 text-sm text-ink-800">
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="wrap flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
          <h3 className="display-sm max-w-2xl">
            Tell us where you are — registration, certification, capture, or performance — and we&apos;ll meet you there.
          </h3>
          <Link href="/contact" className="btn">Begin a conversation</Link>
        </div>
      </section>
    </>
  );
}
