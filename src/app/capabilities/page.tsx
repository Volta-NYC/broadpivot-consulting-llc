import Link from "next/link";
import { site } from "@/lib/site";
import { BlueprintBackdrop } from "@/components/Backdrop";

export const metadata = { title: "Capabilities" };

export default function CapabilitiesPage() {
  return (
    <>
      {/* HERO (only eyebrow on this page) */}
      <section className="relative overflow-hidden border-b border-ink-200/80">
        <BlueprintBackdrop />

        <div className="wrap pt-20 sm:pt-24 lg:pt-28 pb-16 lg:pb-24">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-ink-400" />
            <span className="eyebrow">Capabilities</span>
          </div>

          <h1 className="display mt-8 max-w-[16ch]">
            Four disciplines.
            {" "}
            <span className="italic text-ink-700 leading-[1.1] pb-1 inline-block">
              One senior practitioner.
            </span>
          </h1>

          <p className="lede mt-8 max-w-2xl">
            Compliance program design through government contracting readiness.
            Work that holds up under audit, regulator scrutiny, and customer
            due diligence.
          </p>
        </div>
      </section>

      {/* DETAILED CAPABILITY BLOCKS, alternating background for rhythm */}
      <section>
        {site.capabilities.map((c, i) => {
          const isOdd = i % 2 === 1;
          return (
            <article
              key={c.title}
              className={`border-b border-ink-200/80 reveal ${isOdd ? "bg-paperDeep/40" : ""}`}
            >
              <div className="wrap py-20 lg:py-24">
                <h2 className="display-sm max-w-3xl">{c.title}</h2>
                <p className="mt-6 font-serif text-xl sm:text-[1.4rem] text-ink-800 leading-snug tracking-tightish max-w-2xl">
                  {c.summary}
                </p>

                <ul className="mt-12 grid gap-x-12 gap-y-6 sm:grid-cols-2 stagger">
                  {c.points.map((p, j) => (
                    <li
                      key={p}
                      className="flex gap-5 text-[15px] text-ink-700 leading-relaxed"
                    >
                      <span className="font-mono text-[11px] tabular-nums text-ink-400 pt-1 flex-none">
                        {String(j + 1).padStart(2, "0")}
                      </span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </section>

      {/* PRINCIPLES, no eyebrow, vertical stacked headline + 2x2 grid */}
      <section className="border-b border-ink-200/80 bg-paperDeep/50">
        <div className="wrap py-24 lg:py-28">
          <h2 className="display-sm max-w-3xl">
            A small set of principles,
            {" "}
            <span className="italic text-ink-600">applied consistently.</span>
          </h2>

          <div className="mt-16 grid gap-10 sm:grid-cols-2 stagger">
            {site.principles.map((p) => (
              <div key={p.title} className="border-t border-ink-300/70 pt-6">
                <h3 className="font-serif text-xl tracking-tightish text-ink-900">
                  {p.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-700 max-w-[44ch]">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="py-24 lg:py-28">
        <div className="wrap">
          <h3 className="display-sm max-w-2xl">
            Not sure where to start?
            {" "}
            <span className="italic text-ink-600">We&apos;ll listen first.</span>
          </h3>
          <div className="mt-10">
            <Link href="/contact" className="btn">
              Start a conversation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
