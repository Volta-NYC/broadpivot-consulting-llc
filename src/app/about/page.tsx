import Link from "next/link";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <section className="pt-20 sm:pt-28 pb-16 border-b border-ink-200">
        <div className="wrap">
          <div className="eyebrow">About</div>
          <h1 className="display mt-6 max-w-4xl">
            A consulting practice built around senior judgment.
          </h1>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-16">
          <aside className="lg:col-span-4">
            <div className="eyebrow">Practice areas</div>
            <ul className="mt-4 space-y-2 text-sm text-ink-700">
              <li>Compliance &amp; Risk Management</li>
              <li>Cybersecurity &amp; Data Protection</li>
              <li>Government Contracting Readiness</li>
              <li>Business Process Optimization</li>
            </ul>
            <div className="eyebrow mt-10">Industries</div>
            <ul className="mt-4 space-y-2 text-sm text-ink-700">
              <li>Healthcare</li>
              <li>Financial services</li>
              <li>Technology</li>
              <li>Public sector</li>
            </ul>
          </aside>

          <div className="lg:col-span-8 body-prose space-y-6 max-w-2xl stagger">
            <p className="font-serif text-2xl text-ink-900 leading-snug tracking-tightish">
              BroadPivot Consulting LLC is led by a seasoned compliance, risk, and cybersecurity professional
              with over a decade of experience across healthcare, financial services, and technology environments.
            </p>
            <p>
              The practice exists to help organizations move confidently through the regulatory, risk, and
              security challenges that come with scale, growth, and government engagement. Every engagement is
              led by a senior practitioner — not delegated to a junior team.
            </p>
            <p>
              That means clear assessments, controls that match the size and risk profile of the business, and
              documentation that auditors, customers, and regulators can actually rely on. The background spans
              HIPAA, SOX, PCI-DSS, and NIST-aligned programs — across both highly regulated enterprises and
              growing small businesses.
            </p>
            <p>
              We work as an embedded extension of your team. The result is durable: programs that survive
              turnover, scale with the business, and stand up to scrutiny.
            </p>

            <div className="rule pt-8 mt-10">
              <Link href="/contact" className="btn-quiet">Schedule a conversation</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
