import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import { BlueprintBackdrop, DarkPlate } from "@/components/Backdrop";

const serviceIcons: Record<string, string> = {
  "Compliance & Risk Management": "⚖️",
  "Business Operations & Process Improvement": "⚙️",
  "Nonprofit & Mission-Driven Organization Support": "🤝",
  "Project & Construction Management": "🏗️",
  "Government Contracting Readiness": "🏛️",
  "Cybersecurity & Information Security": "🔐",
};

export default function Home() {
  return (
    <>
      {/* ============ 1. HERO ============================================== */}
      <section className="relative overflow-hidden border-b border-ink-200/80">
        <BlueprintBackdrop />

        <div className="wrap pt-16 sm:pt-20 lg:pt-24 pb-0">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-end">

            {/* LEFT: text content */}
            <div className="pb-20 lg:pb-28 hero-drift">
              <div className="flex flex-wrap items-center gap-3">
                <span className="h-px w-10 bg-accent-warm" />
                <span className="eyebrow">Pivot with Purpose · United States</span>
                <span className="credential-badge ml-2">
                  <span className="credential-badge__label">CIA</span>
                  <span className="credential-badge__divider" />
                  <span className="credential-badge__text">Certified Internal Auditor</span>
                </span>
              </div>

              <h1 className="display mt-8 max-w-[14ch]">
                Consulting that moves your
                {" "}
                <span className="italic text-ink-700 leading-[1.1] pb-1 inline-block">
                  organization forward.
                </span>
              </h1>

              <p className="lede mt-8 max-w-xl">
                BroadPivot partners with businesses, nonprofits, public-sector
                organizations, and project-based teams to build stronger operations,
                navigate compliance, coordinate complex initiatives, and position
                for sustainable growth.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link href="/contact" className="btn">
                  Start a conversation
                </Link>
                <Link href="/capabilities" className="btn-quiet">
                  See the practice areas
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap gap-2">
                {["Compliance", "Nonprofits", "Operations", "Gov Contracting", "Construction", "Cybersecurity"].map((tag) => (
                  <span key={tag} className="pill">{tag}</span>
                ))}
              </div>
            </div>

            {/* RIGHT: Melodye's headshot */}
            <div className="hidden lg:flex justify-center lg:justify-end items-end">
              <div className="photo-frame relative" style={{ maxWidth: 400 }}>
                <Image
                  src="/images/melodye-harvey.png"
                  alt="Melodye Harvey, CIA — Principal Consultant & Founder, BroadPivot Consulting LLC"
                  width={400}
                  height={500}
                  className="object-cover object-top w-full"
                  style={{ display: "block", maxHeight: 500, objectPosition: "top center" }}
                  priority
                />
                <div
                  className="absolute bottom-0 left-0 right-0 px-6 py-5"
                  style={{
                    background: "linear-gradient(to top, rgba(14,13,10,0.88) 0%, rgba(14,13,10,0.4) 70%, transparent 100%)",
                  }}
                >
                  <div className="font-serif text-[1.05rem] tracking-tightish text-paper leading-tight">
                    Melodye Harvey, CIA
                  </div>
                  <div
                    className="font-mono text-[10px] uppercase tracking-[0.18em] mt-1"
                    style={{ color: "#b3ab93" }}
                  >
                    Principal Consultant & Founder
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Framework marquee strip */}
        <div className="border-t border-ink-200/80 bg-paper/60">
          <div className="wrap py-5 flex items-center gap-10">
            <div className="hidden md:block mono-label whitespace-nowrap">
              Frameworks & standards
            </div>
            <div className="marquee flex-1">
              <ul className="marquee__track">
                {[...site.frameworks, ...site.frameworks].map((f, i) => (
                  <li
                    key={`${f}-${i}`}
                    className="font-serif text-[15px] tracking-tightish text-ink-700 whitespace-nowrap"
                  >
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 2. PIVOT WITH PURPOSE — brand statement ============== */}
      <section className="border-b border-ink-200/80 bg-paperDeep/50">
        <div className="wrap py-16 lg:py-20">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-accent-warm" />
                <span className="eyebrow">Our philosophy</span>
              </div>
              <h2 className="display-sm mt-6">
                Pivot with{" "}
                <span className="italic text-ink-600">Purpose.</span>
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="font-serif text-[1.2rem] text-ink-700 leading-[1.6] tracking-tightish">
                Many organizations have the goals, the ideas, and the responsibilities in place —
                but need support organizing the work, managing risk, strengthening operations,
                and building systems that are sustainable. BroadPivot provides flexible,
                strategic, and hands-on consulting support to help organizations move forward
                with clarity and confidence.
              </p>
              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                {[
                  { label: "Structure", desc: "Clear processes and documentation" },
                  { label: "Strategy", desc: "Plans aligned to your goals" },
                  { label: "Adaptability", desc: "Solutions scaled to your reality" },
                  { label: "Execution", desc: "Hands-on support that delivers" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div
                      className="flex-shrink-0 rounded-full w-1.5 h-1.5"
                      style={{ background: "var(--accent-warm)", marginTop: "0.45rem" }}
                    />
                    <div>
                      <div className="font-serif text-[0.95rem] tracking-tightish text-ink-900">{item.label}</div>
                      <div className="text-[13.5px] text-ink-500 mt-0.5">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 3. PRACTICE AREAS — 6-up card grid ================== */}
      <section className="border-b border-ink-200/80">
        <div className="wrap py-24 lg:py-32">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-ink-400" />
            <span className="eyebrow">Practice areas</span>
          </div>
          <h2 className="display-sm max-w-3xl">
            Six disciplines. One trusted
            {" "}
            <span className="italic text-ink-600">consulting partner.</span>
          </h2>
          <p className="mt-6 text-ink-600 leading-relaxed max-w-2xl">
            Every engagement is staffed and led by Melodye Harvey — not delegated to
            junior staff. You work directly with the practitioner doing the work.
          </p>

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 stagger">
            {site.capabilities.map((c, i) => (
              <div key={c.title} className="cap-card">
                <div className="flex items-start gap-4 mb-4">
                  <span className="service-icon text-xl" role="img" aria-hidden>
                    {serviceIcons[c.title] ?? "◆"}
                  </span>
                  <span className="font-mono text-[11px] tabular-nums text-ink-400 pt-3">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-serif text-[1.2rem] tracking-tightish text-ink-900 leading-tight">
                  {c.title}
                </h3>
                <p className="mt-3 text-[14px] text-ink-600 leading-relaxed">
                  {c.summary}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link href="/capabilities" className="btn-quiet">
              Explore all practice areas
            </Link>
          </div>
        </div>
      </section>

      {/* ============ 4. STATS / PROOF — warm dark band =================== */}
      <section className="border-b border-ink-200/80 warm-band text-paper">
        <div className="wrap py-24 lg:py-28">
          <div className="grid gap-y-12 gap-x-10 sm:grid-cols-3 stagger">
            {site.outcomes.map((o) => (
              <div key={o.unit} className="border-t pt-6" style={{ borderColor: "rgba(247,244,236,0.2)" }}>
                <div
                  className="font-serif leading-none tracking-tighter3 tabular-nums"
                  style={{
                    fontSize: o.figure === "CIA" ? "2.8rem" : "clamp(3rem, 6vw, 4rem)",
                    color: "var(--paper)",
                  }}
                >
                  {o.figure}
                </div>
                <div className="mt-3 font-serif text-base italic" style={{ color: "rgba(247,244,236,0.65)" }}>
                  {o.unit}
                </div>
                <p className="mt-5 text-[14.5px] leading-relaxed max-w-[28ch]" style={{ color: "rgba(247,244,236,0.75)" }}>
                  {o.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 5. WHO WE SERVE ====================================== */}
      <section className="border-b border-ink-200/80">
        <div className="wrap py-24 lg:py-32">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-ink-400" />
            <span className="eyebrow">Who we serve</span>
          </div>
          <h2 className="display-sm max-w-3xl">
            Organizations where the details
            {" "}
            <span className="italic text-ink-600">actually matter.</span>
          </h2>
          <p className="mt-6 text-ink-600 leading-relaxed max-w-2xl">
            BroadPivot supports both small organizations and larger business opportunities.
            Our language and approach are never limiting — we are positioned as a trusted
            partner capable of scaling with you.
          </p>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 stagger">
            {site.whoWeServe.map((w) => (
              <div
                key={w.title}
                className="border border-ink-200 p-6"
                style={{ transition: "border-color 220ms var(--ease-drawer)" }}
              >
                <h3 className="font-serif text-[1.1rem] tracking-tightish text-ink-900 leading-tight">
                  {w.title}
                </h3>
                <p className="mt-4 text-[14px] text-ink-600 leading-relaxed">
                  {w.blurb}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 6. MEET MELODYE — dark section with headshot ========= */}
      <section className="relative overflow-hidden bg-ink-900 text-paper">
        <DarkPlate />

        <div className="relative wrap py-24 lg:py-32">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Headshot */}
            <div className="lg:col-span-4 flex justify-start lg:justify-center">
              <div className="relative w-64 lg:w-full max-w-[280px]">
                <Image
                  src="/images/melodye-harvey.png"
                  alt="Melodye Harvey, CIA"
                  width={280}
                  height={350}
                  className="object-cover object-top w-full grayscale"
                  style={{ maxHeight: 350, display: "block" }}
                />
                <div
                  className="absolute bottom-0 left-0 right-0 px-4 py-4"
                  style={{
                    background: "linear-gradient(to top, rgba(14,13,10,0.9) 0%, transparent 100%)",
                  }}
                >
                  <div className="credential-badge" style={{ borderColor: "rgba(247,244,236,0.3)" }}>
                    <span className="credential-badge__label" style={{ color: "#b3ab93" }}>CIA</span>
                    <span className="credential-badge__divider" style={{ background: "#b3ab93" }} />
                    <span className="credential-badge__text" style={{ color: "#b3ab93" }}>Certified Internal Auditor</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-8">
              <div className="eyebrow-paper">Meet the founder</div>

              <h2 className="mt-6 font-serif text-[2rem] sm:text-[2.5rem] leading-[1.1] tracking-tighter2 text-paper">
                Melodye Harvey, CIA
              </h2>
              <div className="mt-2 mono-label text-ink-300">
                Principal Consultant & Founder · BroadPivot Consulting LLC
              </div>

              <blockquote className="mt-8 accent-left">
                <p className="font-serif text-[1.2rem] sm:text-[1.4rem] leading-[1.4] tracking-tightish text-paper/90 italic">
                  &ldquo;I started BroadPivot to provide the type of flexible, strategic,
                  and hands-on consulting support that organizations need to pivot with
                  purpose — and to actually move forward.&rdquo;
                </p>
              </blockquote>

              <p className="mt-8 text-[15.5px] leading-relaxed text-ink-300 max-w-2xl">
                With a career built across compliance, privacy, audit, information security,
                healthcare, nonprofit leadership, and project coordination, Melodye brings
                a rare breadth of expertise to every engagement. She has worked with
                organizations that needed stronger structure, clearer processes, better
                compliance readiness, and practical support to move initiatives forward.
              </p>

              <div className="mt-10 grid sm:grid-cols-2 gap-6 max-w-2xl">
                {site.principles.slice(0, 2).map((p) => (
                  <div key={p.title} className="border-t border-ink-700 pt-5">
                    <div className="font-serif text-[1rem] tracking-tightish text-paper">
                      {p.title}
                    </div>
                    <p className="mt-2 text-[13.5px] leading-relaxed text-ink-300">
                      {p.body}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-3 border border-paper/30 px-6 py-3.5 text-[13.5px] font-medium tracking-tight text-paper"
                  style={{ transition: "background-color 200ms var(--ease-drawer)" }}
                >
                  Read Melodye&apos;s full background
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 7. CLOSING CTA ======================================= */}
      <section className="border-b border-ink-200/80">
        <div className="wrap py-28 lg:py-36">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-accent-warm" />
                <span className="eyebrow">Ready to start?</span>
              </div>
              <h2 className="display-sm max-w-3xl">
                Discuss your roadmap,
                {" "}
                <span className="italic text-ink-600">confidentially.</span>
              </h2>
              <p className="mt-6 text-ink-600 max-w-xl leading-relaxed">
                Tell us about your environment, organization, and what success looks like.
                Whether you are a small business, a nonprofit, a contractor, or a large
                enterprise — BroadPivot is prepared to support your goals. We respond
                within one business day.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/contact" className="btn">
                  Start a conversation
                </Link>
                <Link href="/capabilities" className="btn-ghost">
                  View all services
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5 lg:pl-10 lg:border-l lg:border-ink-200 space-y-6 mt-4 lg:mt-0">
              {[
                { label: "Direct", value: "info@broadpivotllc.com", href: "mailto:info@broadpivotllc.com" },
                { label: "Response time", value: "Within one business day" },
                { label: "Confidentiality", value: "Inquiries treated confidential by default" },
                { label: "Location", value: "United States · Remote-first" },
              ].map((item) => (
                <div key={item.label}>
                  <div className="mono-label">{item.label}</div>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="mt-2 block text-[15px] text-ink-700 hover:text-ink-900 underline underline-offset-4 decoration-ink-300"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-2 text-[15px] text-ink-700">{item.value}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
