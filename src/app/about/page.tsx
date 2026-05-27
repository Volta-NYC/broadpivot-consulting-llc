import Link from "next/link";
import { site } from "@/lib/site";
import { BlueprintBackdrop } from "@/components/Backdrop";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-ink-200/80">
        <BlueprintBackdrop />

        <div className="wrap pt-20 sm:pt-28 lg:pt-32 pb-16 lg:pb-24">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-ink-400" />
            <span className="eyebrow">About the practice</span>
          </div>
          <h1 className="display mt-7 max-w-[18ch]">
            A consulting practice built around <span className="italic text-ink-700">senior judgment.</span>
          </h1>
        </div>
      </section>

      {/* NARRATIVE */}
      <section className="border-b border-ink-200/80">
        <div className="wrap py-24 lg:py-28 grid gap-14 lg:grid-cols-12 lg:gap-16">
          <aside className="lg:col-span-4 space-y-12">
            <div>
              <div className="idx">Practice areas</div>
              <ul className="mt-4 space-y-1.5 text-[15px] text-ink-700">
                {site.capabilities.map((c) => (
                  <li key={c.title}>{c.title}</li>
                ))}
              </ul>
            </div>
            <div>
              <div className="idx">Industries</div>
              <ul className="mt-4 space-y-1.5 text-[15px] text-ink-700">
                <li>Healthcare</li>
                <li>Financial services</li>
                <li>Technology</li>
                <li>Public sector</li>
              </ul>
            </div>
            <div className="border border-ink-300/70 bg-paperDeep/60 p-7">
              <div className="mono-label">At a glance</div>
              <dl className="mt-5 space-y-4 text-[14px]">
                <div className="flex justify-between gap-4">
                  <dt className="text-ink-500">Years in practice</dt>
                  <dd className="font-serif text-ink-900 tabular-nums">10+</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-ink-500">Frameworks operated</dt>
                  <dd className="font-serif text-ink-900 tabular-nums">12+</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-ink-500">Engagement model</dt>
                  <dd className="font-serif text-ink-900 text-right">Embedded</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-ink-500">Confidentiality</dt>
                  <dd className="font-serif italic text-ink-700 text-right">Default</dd>
                </div>
              </dl>
            </div>
          </aside>

          <div className="lg:col-span-8 max-w-2xl body-prose space-y-7 stagger">
            <p className="font-serif text-[1.55rem] sm:text-[1.75rem] text-ink-900 leading-snug tracking-tightish">
              BroadPivot Consulting LLC is led by a seasoned compliance, risk, and
              cybersecurity professional with more than a decade of experience across
              healthcare, financial services, and technology environments.
            </p>
            <p>
              The practice exists to help organizations move confidently through the
              regulatory, risk, and security challenges that come with scale, growth, and
              government engagement. Every engagement is led by a senior practitioner —
              never delegated to a junior team.
            </p>
            <p>
              That means clear assessments, controls scaled to the size and risk profile
              of the business, and documentation that auditors, customers, and regulators
              can actually rely on. The background spans HIPAA, SOX, PCI-DSS, and
              NIST-aligned programs — across both highly regulated enterprises and growing
              small businesses.
            </p>
            <p>
              We work as an embedded extension of your team. The result is durable:
              programs that survive turnover, scale with the business, and stand up to
              scrutiny.
            </p>

            <div className="border-t border-ink-200 pt-10 mt-12 grid gap-8 sm:grid-cols-2">
              {site.principles.map((p) => (
                <div key={p.title}>
                  <div className="font-serif text-lg tracking-tightish text-ink-900">
                    {p.title}
                  </div>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-ink-600">
                    {p.body}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-8 mt-2 flex flex-wrap gap-4 items-center">
              <Link href="/contact" className="btn">Schedule a conversation</Link>
              <Link href="/capabilities" className="btn-quiet">See capabilities</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
