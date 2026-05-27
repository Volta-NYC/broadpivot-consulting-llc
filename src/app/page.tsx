import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import { BlueprintBackdrop, DarkPlate } from "@/components/Backdrop";

export default function Home() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden border-b border-ink-200/80">
        <BlueprintBackdrop />

        <div className="wrap pt-20 sm:pt-28 lg:pt-32 pb-20 lg:pb-28 hero-drift">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16 items-end">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-ink-400" />
                <span className="eyebrow">A compliance &amp; risk practice — Est. United States</span>
              </div>
              <h1 className="display mt-7 max-w-[14ch]">
                Compliance work that
                <br />
                <span className="italic text-ink-700">earns the room.</span>
              </h1>
            </div>

            <div className="lg:col-span-4 space-y-7">
              <p className="lede max-w-md">
                BroadPivot partners with healthcare, financial-services, technology, and
                public-sector teams to translate regulatory complexity into programs that
                actually operate.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link href="/contact" className="btn">
                  Start a conversation
                </Link>
                <Link href="/capabilities" className="btn-quiet">
                  See the practice areas
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Framework strip */}
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

      {/* ============ PRACTICE AREAS ============ */}
      <section className="border-b border-ink-200/80">
        <div className="wrap py-24 lg:py-32">
          <div className="section-head">
            <div className="lg:col-span-4 reveal">
              <div className="idx">01 — Practice</div>
              <h2 className="display-sm mt-5">
                Four disciplines, led by a single senior practitioner.
              </h2>
              <p className="mt-5 text-ink-600 leading-relaxed max-w-md">
                Each engagement is staffed by the person doing the work — not by a team
                of delegates translating a partner&apos;s notes.
              </p>
            </div>
            <div className="lg:col-span-8">
              <ul className="border-y border-ink-200 divide-y divide-ink-200 stagger">
                {site.capabilities.map((c, i) => (
                  <li
                    key={c.title}
                    className="group grid grid-cols-12 gap-6 py-9 transition-colors hover:bg-paperDeep/40"
                  >
                    <div className="col-span-2 pt-1">
                      <span className="idx">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <div className="col-span-10 sm:col-span-7">
                      <h3 className="font-serif text-2xl sm:text-[1.65rem] tracking-tightish text-ink-900 leading-tight">
                        {c.title}
                      </h3>
                      <p className="mt-3 text-ink-600 leading-relaxed max-w-xl">
                        {c.summary}
                      </p>
                    </div>
                    <div className="hidden sm:flex sm:col-span-3 items-end justify-end pr-2">
                      <span className="font-serif text-2xl text-ink-300 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:text-ink-900">
                        →
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Link href="/capabilities" className="btn-quiet">
                  Read the full capability set
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ OUTCOMES STRIP ============ */}
      <section className="border-b border-ink-200/80 bg-paperDeep/50">
        <div className="wrap py-20 lg:py-24">
          <div className="flex items-baseline justify-between flex-wrap gap-6">
            <div className="idx">02 — The shape of the practice</div>
            <div className="mono-label">As of {new Date().getFullYear()}</div>
          </div>

          <div className="mt-12 grid gap-12 sm:grid-cols-3 stagger">
            {site.outcomes.map((o) => (
              <div key={o.unit} className="border-t border-ink-300/70 pt-7">
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

      {/* ============ WHO WE SERVE — asymmetric photo split ============ */}
      <section className="border-b border-ink-200/80">
        <div className="wrap py-24 lg:py-32">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 reveal">
              <div className="idx">03 — Who we serve</div>
              <h2 className="display-sm mt-5">
                Organizations where the details
                <span className="italic text-ink-600"> actually matter.</span>
              </h2>

              {/* Editorial spec plate — replaces stock imagery */}
              <div className="relative mt-10 border border-ink-300/70 bg-paperDeep/60 p-8">
                <div className="flex items-baseline justify-between border-b border-ink-300/70 pb-4">
                  <span className="mono-label">File</span>
                  <span className="font-mono text-[11px] tabular-nums text-ink-500">
                    BP-{new Date().getFullYear()}.01
                  </span>
                </div>
                <dl className="mt-6 space-y-5 text-[14px]">
                  <div className="flex justify-between gap-6">
                    <dt className="mono-label">Practice</dt>
                    <dd className="font-serif text-ink-900 text-right">Compliance · Risk · Cyber</dd>
                  </div>
                  <div className="flex justify-between gap-6">
                    <dt className="mono-label">Engagement</dt>
                    <dd className="font-serif text-ink-900 text-right">Senior practitioner-led</dd>
                  </div>
                  <div className="flex justify-between gap-6">
                    <dt className="mono-label">Sectors</dt>
                    <dd className="font-serif text-ink-900 text-right">Healthcare · Finance · Tech · Public</dd>
                  </div>
                  <div className="flex justify-between gap-6">
                    <dt className="mono-label">Posture</dt>
                    <dd className="font-serif italic text-ink-700 text-right">Confidential by default</dd>
                  </div>
                </dl>
                <div className="mt-8 pt-4 border-t border-ink-300/70 flex items-center justify-between">
                  <span className="mono-label">Status</span>
                  <span className="inline-flex items-center gap-2 text-[12.5px] font-serif text-ink-800">
                    <span className="h-1.5 w-1.5 rounded-full bg-ink-900" />
                    Accepting select engagements
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 lg:pt-2">
              <ul className="divide-y divide-ink-200 border-y border-ink-200 stagger">
                {site.whoWeServe.map((w, i) => (
                  <li key={w.title} className="py-8 grid grid-cols-12 gap-6">
                    <div className="col-span-2">
                      <span className="idx">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <div className="col-span-10">
                      <h3 className="font-serif text-xl sm:text-2xl tracking-tightish text-ink-900">
                        {w.title}
                      </h3>
                      <p className="mt-3 text-ink-600 leading-relaxed max-w-xl">
                        {w.blurb}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PRACTITIONER NOTE (dark) ============ */}
      <section className="relative overflow-hidden bg-ink-900 text-paper">
        <DarkPlate />

        <div className="relative wrap py-24 lg:py-32 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="eyebrow-paper">A note on how we work</div>
            <Image
              src="/images/logo.png"
              alt=""
              width={64}
              height={64}
              className="mt-8 h-16 w-16 object-contain opacity-90 invert"
            />
            <p className="mt-10 mono-label text-ink-300">
              Practice lead — a decade across healthcare,
              <br />
              financial services, and technology compliance.
            </p>
          </div>
          <div className="lg:col-span-7 reveal">
            <blockquote className="font-serif text-[1.65rem] sm:text-[2.1rem] leading-[1.18] tracking-tightish">
              <span className="text-ink-400">&ldquo;</span>
              Every engagement is led by a practitioner who has been in the room with
              the auditor, the regulator, and the contracting officer.
              We translate regulatory complexity into right-sized programs you can
              actually <span className="italic">operate.</span>
              <span className="text-ink-400">&rdquo;</span>
            </blockquote>

            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              {site.principles.slice(0, 2).map((p) => (
                <div key={p.title} className="border-t border-ink-700 pt-5">
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
                className="inline-flex items-center gap-3 border border-paper/30 px-6 py-3.5 text-[13.5px] font-medium tracking-tight text-paper transition hover:bg-paper hover:text-ink-900"
              >
                Read the full approach
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============ QUIET CTA ============ */}
      <section className="border-b border-ink-200/80">
        <div className="wrap py-24 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-12 items-end">
            <div className="lg:col-span-8">
              <div className="idx">Ready when you are</div>
              <h2 className="display-sm mt-5 max-w-3xl">
                Discuss your compliance, risk, or government-readiness roadmap
                <span className="italic text-ink-600"> — confidentially.</span>
              </h2>
              <p className="mt-5 text-ink-600 max-w-2xl leading-relaxed">
                Tell us about your environment and what success looks like.
                We respond within one business day.
              </p>
            </div>
            <div className="lg:col-span-4 lg:justify-self-end flex flex-wrap items-center gap-4">
              <Link href="/contact" className="btn">
                Start a conversation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
