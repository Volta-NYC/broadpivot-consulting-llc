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

        <div className="wrap pt-20 sm:pt-24 lg:pt-28 pb-16 lg:pb-24">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-ink-400" />
            <span className="eyebrow">About the practice</span>
          </div>

          <h1 className="display mt-8 max-w-[18ch]">
            A consulting practice built around
            {" "}
            <span className="italic text-ink-700 leading-[1.1] pb-1 inline-block">
              senior judgment.
            </span>
          </h1>
        </div>
      </section>

      {/* NARRATIVE PROSE — single-column editorial */}
      {/* Layout family: long-form prose centered, max-w 65ch */}
      <section className="border-b border-ink-200/80">
        <div className="wrap py-24 lg:py-28">
          <div className="max-w-[65ch] mx-auto body-prose space-y-7 stagger">
            <p className="font-serif text-[1.55rem] sm:text-[1.75rem] text-ink-900 leading-snug tracking-tightish">
              BroadPivot Consulting LLC is led by a seasoned compliance, risk,
              and cybersecurity professional with more than a decade of
              experience across healthcare, financial services, and technology
              environments.
            </p>
            <p>
              The practice exists to help organizations move confidently through
              the regulatory, risk, and security challenges that come with
              scale, growth, and government engagement. Every engagement is led
              by a senior practitioner. Never delegated to a junior team.
            </p>
            <p>
              That means clear assessments, controls scaled to the size and
              risk profile of the business, and documentation that auditors,
              customers, and regulators can actually rely on. The background
              spans HIPAA, SOX, PCI-DSS, and NIST-aligned programs across both
              highly regulated enterprises and growing small businesses.
            </p>
            <p>
              We work as an embedded extension of your team. The result is
              durable: programs that survive turnover, scale with the business,
              and stand up to scrutiny.
            </p>
          </div>
        </div>
      </section>

      {/* AT A GLANCE — full-width data band */}
      {/* Layout family: data band, 4 small columns of light fact pairs */}
      <section className="border-b border-ink-200/80 bg-paperDeep/50">
        <div className="wrap py-20 lg:py-24">
          <h2 className="display-sm max-w-3xl">
            At a glance.
          </h2>
          <dl className="mt-14 grid gap-y-10 gap-x-12 grid-cols-2 sm:grid-cols-4 stagger">
            {[
              { dt: "Years in practice", dd: "10+" },
              { dt: "Frameworks operated", dd: "12+" },
              { dt: "Engagement model", dd: "Embedded" },
              { dt: "Confidentiality", dd: "Default" },
            ].map((row) => (
              <div key={row.dt} className="border-t border-ink-300/70 pt-5">
                <dt className="mono-label">{row.dt}</dt>
                <dd className="mt-3 font-serif text-[1.85rem] tracking-tighter2 text-ink-900 tabular-nums">
                  {row.dd}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* PRINCIPLES — full-width 2x2 grid (different family from above band) */}
      <section className="border-b border-ink-200/80">
        <div className="wrap py-24 lg:py-28">
          <h2 className="display-sm max-w-3xl">
            How we work,
            {" "}
            <span className="italic text-ink-600">in four lines.</span>
          </h2>

          <div className="mt-16 grid gap-10 sm:grid-cols-2 stagger">
            {site.principles.map((p) => (
              <div key={p.title} className="border-t border-ink-300/70 pt-6">
                <div className="font-serif text-xl tracking-tightish text-ink-900">
                  {p.title}
                </div>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-600 max-w-[44ch]">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCOPE — practice areas + industries listed inline */}
      <section className="py-24 lg:py-28 border-b border-ink-200/80">
        <div className="wrap grid gap-14 lg:grid-cols-2">
          <div>
            <h3 className="display-xs">Practice areas</h3>
            <ul className="mt-6 space-y-2 text-[15.5px] text-ink-700">
              {site.capabilities.map((c) => (
                <li key={c.title}>{c.title}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="display-xs">Industries</h3>
            <ul className="mt-6 space-y-2 text-[15.5px] text-ink-700">
              <li>Healthcare</li>
              <li>Financial services</li>
              <li>Technology</li>
              <li>Public sector</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-28">
        <div className="wrap">
          <Link href="/contact" className="btn">
            Schedule a conversation
          </Link>
        </div>
      </section>
    </>
  );
}
