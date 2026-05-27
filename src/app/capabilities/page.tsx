import Link from "next/link";
import { site } from "@/lib/site";

export const metadata = { title: "Capabilities" };

export default function CapabilitiesPage() {
  return (
    <>
      <section className="pt-20 sm:pt-28 pb-16 border-b border-ink-200">
        <div className="wrap">
          <div className="eyebrow">Capabilities</div>
          <h1 className="display mt-6 max-w-4xl">
            Four disciplines. One senior practitioner.
          </h1>
          <p className="lede mt-8 max-w-2xl">
            From compliance program design to government contracting readiness, work that holds up under audit,
            regulator scrutiny, and customer due diligence.
          </p>
        </div>
      </section>

      <section>
        {site.capabilities.map((c, i) => (
          <article key={c.title} className="border-b border-ink-200 reveal">
            <div className="wrap py-16 lg:py-20 grid gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-4">
                <div className="font-sans text-sm text-ink-400 tabular-nums">
                  {String(i + 1).padStart(2, "0")} / {String(site.capabilities.length).padStart(2, "0")}
                </div>
                <h2 className="display-sm mt-3">{c.title}</h2>
              </div>
              <div className="lg:col-span-8">
                <p className="font-serif text-xl text-ink-800 leading-snug tracking-tightish max-w-2xl">
                  {c.summary}
                </p>
                <ul className="mt-8 grid gap-x-10 gap-y-3 sm:grid-cols-2">
                  {c.points.map((p) => (
                    <li key={p} className="flex gap-3 text-sm text-ink-700 leading-relaxed">
                      <span className="mt-2 h-px w-3 flex-none bg-ink-400" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="py-20 lg:py-24">
        <div className="wrap flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
          <h3 className="display-sm max-w-xl">
            Not sure where to start? We&apos;ll listen first.
          </h3>
          <Link href="/contact" className="btn">Schedule a conversation</Link>
        </div>
      </section>
    </>
  );
}
