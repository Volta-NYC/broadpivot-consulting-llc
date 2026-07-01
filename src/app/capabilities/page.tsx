import Link from "next/link";
import { site } from "@/lib/site";
import { BlueprintBackdrop } from "@/components/Backdrop";

export const metadata = { title: "Capabilities" };

const serviceColors = [
  "var(--accent)",
  "var(--accent-warm)",
  "var(--accent)",
  "var(--accent-warm)",
  "var(--accent)",
  "var(--accent-warm)",
];

export default function CapabilitiesPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-ink-200/80">
        <BlueprintBackdrop />

        <div className="wrap pt-20 sm:pt-24 lg:pt-28 pb-16 lg:pb-24">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-accent-warm" />
            <span className="eyebrow">Capabilities</span>
          </div>

          <h1 className="display mt-8 max-w-[16ch]">
            Six disciplines.
            {" "}
            <span className="italic text-ink-700 leading-[1.1] pb-1 inline-block">
              One trusted partner.
            </span>
          </h1>

          <p className="lede mt-8 max-w-2xl">
            From compliance program design to nonprofit governance, business operations,
            project support, construction coordination, cybersecurity, and government-related
            work — senior-led consulting by Melodye Harvey, MBA, MSL, CIA.
          </p>

          {/* Quick nav */}
          <div className="mt-10 flex flex-wrap gap-3">
            {site.capabilities.map((c) => (
              <a
                key={c.title}
                href={`#${c.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                className="pill hover:border-ink-400"
                style={{ transition: "border-color 200ms var(--ease-drawer)" }}
              >
                {c.title.split("&")[0].trim()}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── DETAILED CAPABILITY BLOCKS ────────────────────────────────────── */}
      <section>
        {site.capabilities.map((c, i) => {
          const isOdd = i % 2 === 1;
          return (
            <article
              key={c.title}
              id={c.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
              className={`border-b border-ink-200/80 reveal ${isOdd ? "bg-paperDeep/40" : ""}`}
            >
              <div className="wrap py-20 lg:py-24">
                <div className="flex items-start gap-5 mb-8">
                  <span className="service-icon flex-shrink-0" aria-hidden>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-[11px] tabular-nums text-ink-400 pt-3.5">
                    {String(i + 1).padStart(2, "0")} / {String(site.capabilities.length).padStart(2, "0")}
                  </span>
                </div>

                <div
                  className="w-12 h-0.5 mb-6"
                  style={{ background: serviceColors[i] }}
                />

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
                      <span
                        className="font-mono text-[11px] tabular-nums pt-1 flex-none"
                        style={{ color: serviceColors[i] }}
                      >
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

      {/* ── PRINCIPLES ────────────────────────────────────────────────────── */}
      <section className="border-b border-ink-200/80 bg-paperDeep/50">
        <div className="wrap py-24 lg:py-28">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-ink-400" />
            <span className="eyebrow">How we work</span>
          </div>
          <h2 className="display-sm max-w-3xl">
            A small set of principles,
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

      {/* ── FRAMEWORKS ────────────────────────────────────────────────────── */}
      <section className="border-b border-ink-200/80">
        <div className="wrap py-24 lg:py-28">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-accent-warm" />
            <span className="eyebrow">Frameworks & standards</span>
          </div>
          <h2 className="display-sm max-w-3xl">
            Compliance environments we
            {" "}
            <span className="italic text-ink-600">routinely operate in.</span>
          </h2>
          <p className="mt-6 text-ink-600 leading-relaxed max-w-2xl">
            The acronym soup, demystified. We map each requirement to controls
            your team can actually run and your auditor can verify.
          </p>

          <ul className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 stagger">
            {site.frameworks.map((f) => (
              <li
                key={f}
                className="border border-ink-300/70 bg-paper px-5 py-5 text-[14.5px] font-serif tracking-tightish text-ink-800"
                style={{
                  transition: "background-color 220ms var(--ease-drawer), border-color 220ms var(--ease-drawer)",
                }}
              >
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── CLOSING CTA ───────────────────────────────────────────────────── */}
      <section className="py-24 lg:py-28">
        <div className="wrap">
          <h3 className="display-sm max-w-2xl">
            Not sure where to start?
            {" "}
            <span className="italic text-ink-600">We&apos;ll listen first.</span>
          </h3>
          <p className="mt-6 text-ink-600 max-w-xl leading-relaxed">
            Whether you need compliance support, nonprofit guidance, project coordination,
            construction management support, government contracting support, or general
            business operations support — the conversation starts with understanding your goals.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/contact" className="btn">
              Start a conversation
            </Link>
            <Link href="/about" className="btn-ghost">
              Learn about Melodye
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
