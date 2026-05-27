import Link from "next/link";
import { site } from "@/lib/site";
import { BlueprintBackdrop } from "@/components/Backdrop";

export const metadata = { title: "Capabilities" };

export default function CapabilitiesPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-ink-200/80">
        <BlueprintBackdrop />

        <div className="wrap pt-20 sm:pt-28 lg:pt-32 pb-16 lg:pb-24">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-ink-400" />
            <span className="eyebrow">Capabilities</span>
          </div>
          <div className="mt-7 grid gap-10 lg:grid-cols-12 lg:gap-16 items-end">
            <h1 className="display lg:col-span-8 max-w-[16ch]">
              Four disciplines. <span className="italic text-ink-700">One senior practitioner.</span>
            </h1>
            <p className="lede lg:col-span-4 max-w-md">
              Compliance program design through government-contracting readiness — work that
              holds up under audit, regulator scrutiny, and customer due diligence.
            </p>
          </div>
        </div>
      </section>

      {/* DETAILED CAPABILITY BLOCKS */}
      <section>
        {site.capabilities.map((c, i) => {
          const isOdd = i % 2 === 1;
          return (
            <article
              key={c.title}
              className={`border-b border-ink-200/80 reveal ${isOdd ? "bg-paperDeep/40" : ""}`}
            >
              <div className="wrap py-20 lg:py-24 grid gap-12 lg:grid-cols-12 lg:gap-16">
                <div className="lg:col-span-4">
                  <div className="idx">
                    {String(i + 1).padStart(2, "0")} / {String(site.capabilities.length).padStart(2, "0")}
                  </div>
                  <h2 className="display-sm mt-4">{c.title}</h2>
                </div>
                <div className="lg:col-span-8">
                  <p className="font-serif text-xl sm:text-[1.4rem] text-ink-800 leading-snug tracking-tightish max-w-2xl">
                    {c.summary}
                  </p>
                  <ul className="mt-10 grid gap-x-12 gap-y-5 sm:grid-cols-2 stagger">
                    {c.points.map((p, j) => (
                      <li
                        key={p}
                        className="flex gap-4 text-[15px] text-ink-700 leading-relaxed border-t border-ink-200 pt-4"
                      >
                        <span className="font-mono text-[11px] tabular-nums text-ink-400 pt-1">
                          {String(j + 1).padStart(2, "0")}
                        </span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      {/* PRINCIPLES */}
      <section className="border-b border-ink-200/80 bg-paperDeep/50">
        <div className="wrap py-24 lg:py-28">
          <div className="section-head">
            <div className="lg:col-span-4 reveal">
              <div className="idx">How we work</div>
              <h2 className="display-sm mt-5">
                A small set of principles, applied consistently.
              </h2>
            </div>
            <div className="lg:col-span-8 grid gap-10 sm:grid-cols-2 stagger">
              {site.principles.map((p) => (
                <div key={p.title} className="border-t border-ink-300/70 pt-5">
                  <h3 className="font-serif text-xl tracking-tightish text-ink-900">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-700 max-w-[42ch]">
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-28">
        <div className="wrap flex flex-col sm:flex-row items-start sm:items-end justify-between gap-8">
          <h3 className="display-sm max-w-xl">
            Not sure where to start? <span className="italic text-ink-600">We&apos;ll listen first.</span>
          </h3>
          <Link href="/contact" className="btn">
            Start a conversation
          </Link>
        </div>
      </section>
    </>
  );
}
