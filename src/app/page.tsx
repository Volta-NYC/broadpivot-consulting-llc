import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="pt-20 sm:pt-28 lg:pt-32 pb-20 lg:pb-28">
        <div className="wrap hero-drift">
          <div className="eyebrow">BroadPivot Consulting LLC</div>
          <h1 className="display mt-6 max-w-4xl">
            Exceptional expertise.
            <br />
            <span className="italic text-ink-700">Trusted outcomes.</span>
          </h1>
          <div className="mt-10 grid gap-10 lg:grid-cols-12">
            <p className="lede lg:col-span-7 max-w-2xl">
              BroadPivot is a compliance, risk, and cybersecurity practice. We partner with organizations to navigate
              complex regulatory environments, strengthen internal controls, and position for government and
              commercial opportunities.
            </p>
            <div className="lg:col-span-5 flex items-end lg:justify-end">
              <Link href="/contact" className="btn">
                Begin a conversation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities — editorial list */}
      <section className="border-t border-ink-200">
        <div className="wrap py-20 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4 reveal">
              <div className="eyebrow">Practice areas</div>
              <h2 className="display-sm mt-4">
                Four disciplines, led by a single senior practitioner.
              </h2>
            </div>
            <div className="lg:col-span-8">
              <ul className="divide-y divide-ink-200 border-y border-ink-200 stagger">
                {site.capabilities.map((c, i) => (
                  <li key={c.title} className="grid grid-cols-12 gap-6 py-7">
                    <div className="col-span-2 font-sans text-sm text-ink-400 tabular-nums pt-1">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="col-span-10">
                      <h3 className="font-serif text-xl sm:text-2xl tracking-tightish text-ink-900">
                        {c.title}
                      </h3>
                      <p className="mt-2 text-ink-600 leading-relaxed max-w-2xl">{c.summary}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link href="/capabilities" className="btn-quiet">View all capabilities</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who we serve */}
      <section className="border-t border-ink-200">
        <div className="wrap py-20 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4 reveal">
              <div className="eyebrow">Who we serve</div>
              <h2 className="display-sm mt-4">
                Organizations where the details matter.
              </h2>
            </div>
            <div className="lg:col-span-8 grid gap-10 sm:grid-cols-3 stagger">
              {site.whoWeServe.map((w) => (
                <div key={w.title}>
                  <h3 className="font-serif text-lg tracking-tightish text-ink-900">{w.title}</h3>
                  <p className="mt-3 text-sm text-ink-600 leading-relaxed">{w.blurb}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Practitioner note */}
      <section className="border-t border-ink-200 bg-ink-900 text-paper">
        <div className="wrap py-20 lg:py-28 grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="text-[11px] font-medium uppercase tracking-[0.22em] text-ink-400">
              A note on how we work
            </div>
            <Image
              src="/images/logo.png"
              alt=""
              width={56}
              height={56}
              className="mt-6 h-14 w-14 object-contain opacity-90 invert"
            />
          </div>
          <div className="lg:col-span-7 reveal">
            <blockquote className="font-serif text-2xl sm:text-3xl leading-snug tracking-tightish">
              &ldquo;Every engagement is led by a practitioner with first-hand experience — not a junior delegate.
              We translate regulatory complexity into right-sized programs you can actually operate.&rdquo;
            </blockquote>
            <p className="mt-6 text-sm text-ink-300">
              Practice lead — a decade across healthcare, financial services, and technology compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Quiet CTA */}
      <section className="border-t border-ink-200">
        <div className="wrap py-20 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-12 items-end">
            <div className="lg:col-span-8">
              <h2 className="display-sm">
                Discuss your compliance, risk, or government-readiness roadmap.
              </h2>
              <p className="mt-4 text-ink-600 max-w-2xl leading-relaxed">
                Tell us about your environment and goals. We respond within one business day.
              </p>
            </div>
            <div className="lg:col-span-4 lg:justify-self-end">
              <Link href="/contact" className="btn">Contact the practice</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
