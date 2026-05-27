import Link from "next/link";
import { site } from "@/lib/site";
import { BlueprintBackdrop, DarkPlate } from "@/components/Backdrop";

// IMAGES TODO: This site currently ships with no photography. When real
// brand assets are available (practitioner portrait, office or archival
// detail shots, document close-ups under controlled lighting), drop them
// into /public/images and wire them into the Hero, Approach, and
// Closing sections.

export default function Home() {
  return (
    <>
      {/* ============ 1. HERO ============================================== */}
      <section className="relative overflow-hidden border-b border-ink-200/80">
        <BlueprintBackdrop />

        <div className="wrap pt-20 sm:pt-24 lg:pt-28 pb-20 lg:pb-28 hero-drift">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-ink-400" />
            <span className="eyebrow">A compliance and risk practice. United States.</span>
          </div>

          <h1 className="display mt-8 max-w-[15ch]">
            Compliance work that
            {" "}
            <span className="italic text-ink-700 leading-[1.1] pb-1 inline-block">
              earns the room.
            </span>
          </h1>

          <p className="lede mt-8 max-w-xl">
            BroadPivot partners with healthcare, financial services, technology,
            and public sector teams to translate regulatory complexity into
            programs that actually operate.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link href="/contact" className="btn">
              Start a conversation
            </Link>
            <Link href="/capabilities" className="btn-quiet">
              See the practice areas
            </Link>
          </div>
        </div>

        {/* Framework strip, single marquee on the page */}
        <div className="border-t border-ink-200/80 bg-paper/60">
          <div className="wrap py-5 flex items-center gap-10">
            <div className="hidden md:block mono-label whitespace-nowrap">
              Operating across
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

      {/* ============ 2. PRACTICE AREAS — vertical stacked headline, numbered rows */}
      {/* Layout family: vertical headline + full-width numbered rows */}
      <section className="border-b border-ink-200/80">
        <div className="wrap py-24 lg:py-32">
          <h2 className="display-sm max-w-3xl">
            Four disciplines, led by a single senior practitioner.
          </h2>
          <p className="mt-6 text-ink-600 leading-relaxed max-w-2xl">
            Each engagement is staffed by the person doing the work. Not by a
            team of delegates translating a partner&apos;s notes.
          </p>

          <ul className="mt-16 stagger">
            {site.capabilities.map((c, i) => (
              <li
                key={c.title}
                className="group grid grid-cols-12 gap-6 py-9 border-t border-ink-200 last:border-b last:border-ink-200"
                style={{
                  transition: "background-color 220ms var(--ease-drawer)",
                }}
              >
                <div className="col-span-2 sm:col-span-1 pt-2">
                  <span className="font-mono text-[12px] tabular-nums text-ink-400">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="col-span-10 sm:col-span-8">
                  <h3 className="font-serif text-2xl sm:text-[1.7rem] tracking-tightish text-ink-900 leading-tight">
                    {c.title}
                  </h3>
                  <p className="mt-4 text-[15.5px] text-ink-600 leading-relaxed max-w-xl">
                    {c.summary}
                  </p>
                </div>
                <div className="hidden sm:flex sm:col-span-3 items-start justify-end pt-3">
                  <span
                    className="font-serif text-2xl text-ink-300"
                    style={{
                      transition: "transform 280ms var(--ease-out), color 220ms var(--ease-drawer)",
                    }}
                  >
                    →
                  </span>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-12">
            <Link href="/capabilities" className="btn-quiet">
              Read the full capability set
            </Link>
          </div>
        </div>
      </section>

      {/* ============ 3. THE SHAPE OF THE PRACTICE — 3-up metric row */}
      {/* Layout family: centered headline + 3-col stat grid */}
      <section className="border-b border-ink-200/80 bg-paperDeep/50">
        <div className="wrap py-24 lg:py-28">
          <h2 className="display-sm max-w-3xl">
            What ten years of in-the-room work looks like,
            {" "}
            <span className="italic text-ink-600">in numbers.</span>
          </h2>

          <div className="mt-16 grid gap-y-12 gap-x-10 sm:grid-cols-3 stagger">
            {site.outcomes.map((o) => (
              <div key={o.unit} className="border-t border-ink-300/70 pt-6">
                <div className="font-serif text-[3.6rem] sm:text-[4rem] leading-none tracking-tighter3 text-ink-900 tabular-nums">
                  {o.figure}
                </div>
                <div className="mt-3 font-serif text-base italic text-ink-600">
                  {o.unit}
                </div>
                <p className="mt-5 text-[14.5px] leading-relaxed text-ink-700 max-w-[28ch]">
                  {o.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 4. WHO WE SERVE — 3-col text grid */}
      {/* Layout family: stacked vertical headline + 3-col descriptive grid */}
      <section className="border-b border-ink-200/80">
        <div className="wrap py-24 lg:py-32">
          <div className="grid gap-y-10 gap-x-16 lg:grid-cols-12">
            <h2 className="display-sm lg:col-span-12 max-w-3xl">
              Organizations where the details
              {" "}
              <span className="italic text-ink-600">actually matter.</span>
            </h2>

            <div className="lg:col-span-12 mt-6 grid gap-10 sm:grid-cols-3 stagger">
              {site.whoWeServe.map((w) => (
                <div key={w.title} className="border-t border-ink-300/70 pt-6">
                  <h3 className="font-serif text-xl sm:text-[1.4rem] tracking-tightish text-ink-900 leading-tight">
                    {w.title}
                  </h3>
                  <p className="mt-4 text-[15px] text-ink-600 leading-relaxed">
                    {w.blurb}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ 5. PRACTITIONER NOTE — dark contrast plate */}
      {/* Layout family: dark section, single large quote + 2-up principles */}
      <section className="relative overflow-hidden bg-ink-900 text-paper">
        <DarkPlate />

        <div className="relative wrap py-24 lg:py-32">
          <div className="eyebrow-paper">How we work</div>

          <blockquote className="mt-8 font-serif text-[1.85rem] sm:text-[2.4rem] leading-[1.15] tracking-tighter2 max-w-4xl">
            <span className="text-ink-400">&ldquo;</span>
            Every engagement is led by a practitioner who has been in the room
            with the auditor, the regulator, and the contracting officer. We
            translate regulatory complexity into right-sized programs you can
            actually <span className="italic leading-[1.1] pb-1 inline-block">operate.</span>
            <span className="text-ink-400">&rdquo;</span>
          </blockquote>

          <p className="mt-8 mono-label text-ink-300">
            Practice lead. A decade across healthcare, financial services, and technology compliance.
          </p>

          <div className="mt-16 grid gap-10 sm:grid-cols-2 max-w-4xl">
            {site.principles.slice(0, 2).map((p) => (
              <div key={p.title} className="border-t border-ink-700 pt-6">
                <div className="font-serif text-lg tracking-tightish text-paper">
                  {p.title}
                </div>
                <p className="mt-3 text-[14.5px] leading-relaxed text-ink-300">
                  {p.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link
              href="/about"
              className="inline-flex items-center gap-3 border border-paper/30 px-6 py-3.5 text-[13.5px] font-medium tracking-tight text-paper"
              style={{
                transition:
                  "background-color 200ms var(--ease-drawer), color 200ms var(--ease-drawer), transform 160ms var(--ease-out)",
              }}
            >
              Read the full approach
            </Link>
          </div>
        </div>
      </section>

      {/* ============ 6. CLOSING CTA — minimal */}
      {/* Layout family: minimal closing, ample whitespace */}
      <section className="border-b border-ink-200/80">
        <div className="wrap py-28 lg:py-36">
          <h2 className="display-sm max-w-3xl">
            Discuss your roadmap,
            {" "}
            <span className="italic text-ink-600">confidentially.</span>
          </h2>
          <p className="mt-6 text-ink-600 max-w-xl leading-relaxed">
            Tell us about your environment and what success looks like. We
            respond within one business day.
          </p>
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
