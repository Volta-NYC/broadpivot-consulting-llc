import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import { BlueprintBackdrop } from "@/components/Backdrop";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-ink-200/80">
        <BlueprintBackdrop />

        <div className="wrap pt-20 sm:pt-24 lg:pt-28 pb-0">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">

            {/* Text */}
            <div className="lg:col-span-6 pb-16 lg:pb-24">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-accent-warm" />
                <span className="eyebrow">About BroadPivot</span>
              </div>

              <h1 className="display mt-8 max-w-[18ch]">
                A practice built around
                {" "}
                <span className="italic text-ink-700 leading-[1.1] pb-1 inline-block">
                  practical clarity.
                </span>
              </h1>

              <p className="lede mt-8 max-w-xl">
                BroadPivot Consulting LLC was created from more than 30 years across
                compliance, audit, privacy, healthcare, nonprofit governance, operations,
                cybersecurity, and project support — with one goal: helping organizations
                move forward with clarity.
              </p>

              <div className="mt-8 credential-badge inline-flex">
                <span className="credential-badge__label">MBA · MSL · CIA</span>
                <span className="credential-badge__divider" />
                <span className="credential-badge__text">Senior-led consulting</span>
              </div>
            </div>

            {/* Headshot — desktop */}
            <div className="hidden lg:flex lg:col-span-6 justify-end items-end">
              <div className="photo-frame relative" style={{ maxWidth: 420 }}>
                <Image
                  src="/images/melodye-harvey.png"
                  alt="Melodye Harvey, CIA — Principal Consultant & Founder"
                  width={420}
                  height={560}
                  className="object-cover object-top w-full"
                  style={{ display: "block", width: "100%", height: "auto", objectPosition: "top center" }}
                  priority
                />
                <div
                  className="absolute bottom-0 left-0 right-0 px-6 py-6"
                  style={{
                    background: "linear-gradient(to top, rgba(14,13,10,0.88) 0%, rgba(14,13,10,0.4) 70%, transparent 100%)",
                  }}
                >
                  <div className="font-serif text-[1.1rem] tracking-tightish text-paper leading-tight">
                    Melodye Harvey, CIA
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] mt-1" style={{ color: "#b3ab93" }}>
                    Principal Consultant & Founder
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MOBILE HEADSHOT ───────────────────────────────────────────────── */}
      <section className="lg:hidden border-b border-ink-200/80 bg-ink-900">
        <div className="wrap py-8 flex items-center gap-6">
          <div className="relative flex-shrink-0">
            <Image
              src="/images/melodye-harvey.png"
              alt="Melodye Harvey, CIA"
              width={100}
              height={133}
              className="object-cover object-top grayscale"
              style={{ height: "auto", width: 100, display: "block" }}
            />
          </div>
          <div>
            <div className="font-serif text-[1.1rem] tracking-tightish text-paper">Melodye Harvey, CIA</div>
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] mt-1" style={{ color: "#b3ab93" }}>
              Principal Consultant & Founder
            </div>
            <div className="credential-badge mt-3" style={{ borderColor: "rgba(247,244,236,0.3)" }}>
              <span className="credential-badge__text" style={{ color: "#b3ab93" }}>Certified Internal Auditor (CIA)</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOUNDING STORY ────────────────────────────────────────────────── */}
      <section className="border-b border-ink-200/80">
        <div className="wrap py-24 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-8">
                <span className="h-px w-8 bg-accent-warm" />
                <span className="eyebrow">The story behind BroadPivot</span>
              </div>
              <div className="space-y-6 body-prose">
                <p className="font-serif text-[1.55rem] sm:text-[1.75rem] text-ink-900 leading-snug tracking-tightish">
                  BroadPivot was created from more than 30 years of professional experience
                  across compliance, privacy, audit, information security, healthcare,
                  nonprofit governance, business operations, cybersecurity, and project support.
                </p>
                <p>
                  Throughout her career, Melodye Harvey has worked with organizations that
                  needed stronger structure, clearer processes, better compliance practices,
                  and practical support to move initiatives forward. The perspective behind
                  BroadPivot is rooted in practical solutions for complex work.
                </p>
                <p>
                  Many businesses, nonprofits, and public-sector partners have the goals,
                  ideas, and responsibilities in place — but need support organizing the
                  work, managing risk, strengthening operations, and building systems that
                  are sustainable. BroadPivot was founded to provide exactly that kind of
                  flexible, strategic, and hands-on consulting support.
                </p>
                <p>
                  The result is a practice prepared to support business operations, compliance
                  and risk management, nonprofit governance, project coordination, construction
                  support, and government contracting support — for both small organizations
                  and larger business opportunities.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5 lg:pl-8 lg:border-l lg:border-ink-200">
              <div className="space-y-8">
                <div>
                  <div className="mono-label">Credentials</div>
                  <div className="mt-4 space-y-3">
                    <div className="flex items-center gap-3 border border-ink-200 px-4 py-3">
                      <span className="font-mono text-[11px] font-semibold uppercase tracking-widest" style={{ color: "var(--accent)" }}>MBA</span>
                      <span className="w-px h-4 bg-ink-200" />
                      <span className="text-[13.5px] text-ink-700">Master of Business Administration</span>
                    </div>
                    <div className="flex items-center gap-3 border border-ink-200 px-4 py-3">
                      <span className="font-mono text-[11px] font-semibold uppercase tracking-widest" style={{ color: "var(--accent)" }}>MSL</span>
                      <span className="w-px h-4 bg-ink-200" />
                      <span className="text-[13.5px] text-ink-700">Master of Studies in Law, Data Privacy Law</span>
                    </div>
                    <div className="flex items-center gap-3 border border-ink-200 px-4 py-3">
                      <span className="font-mono text-[11px] font-semibold uppercase tracking-widest" style={{ color: "var(--accent)" }}>CIA</span>
                      <span className="w-px h-4 bg-ink-200" />
                      <span className="text-[13.5px] text-ink-700">Certified Internal Auditor (CIA)</span>
                    </div>
                    <div className="flex items-center gap-3 border border-ink-200 px-4 py-3">
                      <span className="font-mono text-[11px] font-semibold uppercase tracking-widest" style={{ color: "var(--accent)" }}>Privacy</span>
                      <span className="w-px h-4 bg-ink-200" />
                      <span className="text-[13.5px] text-ink-700">Cybersecurity and privacy training</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="mono-label">Background spans</div>
                  <ul className="mt-4 space-y-2 text-[14.5px] text-ink-700">
                    {[
                      "Compliance & regulatory affairs",
                      "Privacy & data governance",
                      "Internal audit",
                      "Information security",
                      "Healthcare operations",
                      "Nonprofit board leadership",
                      "Business operations",
                      "General compliance",
                      "Cybersecurity and privacy training",
                      "Project and construction support",
                      "Government contracting support",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "var(--accent-warm)" }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── AT A GLANCE ───────────────────────────────────────────────────── */}
      <section className="border-b border-ink-200/80 bg-paperDeep/50">
        <div className="wrap py-20 lg:py-24">
          <h2 className="display-sm max-w-3xl">At a glance.</h2>
          <dl className="mt-14 grid gap-y-10 gap-x-12 grid-cols-2 sm:grid-cols-4 stagger">
            {[
              { dt: "Years of experience", dd: "30+" },
              { dt: "Practice areas", dd: "6" },
              { dt: "Engagement model", dd: "Embedded" },
              { dt: "Lead credentials", dd: "MBA · MSL · CIA" },
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

      {/* ── PRINCIPLES ────────────────────────────────────────────────────── */}
      <section className="border-b border-ink-200/80">
        <div className="wrap py-24 lg:py-28">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-ink-400" />
            <span className="eyebrow">How we work</span>
          </div>
          <h2 className="display-sm max-w-3xl">
            Four principles,
            {" "}
            <span className="italic text-ink-600">applied consistently.</span>
          </h2>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 stagger">
            {site.principles.map((p, i) => (
              <div
                key={p.title}
                className="border-t-2 pt-6"
                style={{ borderColor: i % 2 === 0 ? "var(--accent)" : "var(--accent-warm)" }}
              >
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

      {/* ── SCOPE ─────────────────────────────────────────────────────────── */}
      <section className="py-24 lg:py-28 border-b border-ink-200/80">
        <div className="wrap grid gap-14 lg:grid-cols-2">
          <div>
            <h3 className="display-xs">Practice areas</h3>
            <ul className="mt-6 space-y-3 text-[15.5px] text-ink-700">
              {site.capabilities.map((c, i) => (
                <li key={c.title} className="flex items-center gap-3">
                  <span className="font-mono text-[11px] text-ink-400">{String(i + 1).padStart(2, "0")}</span>
                  <span>{c.title}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="display-xs">Organizations served</h3>
            <ul className="mt-6 space-y-3 text-[15.5px] text-ink-700">
              {[
                "Small and growing businesses",
                "Established enterprises",
                "Nonprofit organizations",
                "Foundations and mission-driven orgs",
                "Healthcare organizations",
                "Government contractors",
                "Public sector agencies",
                "Construction and project-based firms",
                "Financial services organizations",
                "Technology companies",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "var(--accent-warm)" }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="py-24 lg:py-28">
        <div className="wrap">
          <h3 className="display-sm max-w-2xl">
            Ready to work with a consulting partner that
            {" "}
            <span className="italic text-ink-600">actually shows up?</span>
          </h3>
          <p className="mt-6 text-ink-600 max-w-xl leading-relaxed">
            Every engagement is led personally by Melodye Harvey, Certified Internal Auditor (CIA). Reach out to discuss your goals.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/contact" className="btn">
              Schedule a conversation
            </Link>
            <Link href="/capabilities" className="btn-ghost">
              View all services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
