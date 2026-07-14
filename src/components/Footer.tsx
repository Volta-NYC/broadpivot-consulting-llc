import Link from "next/link";
import { site } from "@/lib/site";
import LogoMark from "@/components/LogoMark";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-ink-200 bg-paperDeep/50">
      <div className="wrap pt-20 lg:pt-24 pb-16">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3">
              <LogoMark className="h-9 w-9 shrink-0" />
              <span className="font-serif text-[1.05rem] tracking-tightish text-ink-900">
                BroadPivot<span className="text-ink-400"> Consulting</span>
              </span>
            </div>
            <p className="mt-8 font-serif text-[1.6rem] sm:text-[1.85rem] leading-[1.18] tracking-tightish text-ink-900 max-w-3xl">
              Strategic consulting that helps organizations
              structure, adapt, and move forward
              {" "}
              <span className="italic text-ink-600 leading-[1.1] pb-1 inline-block">
                with practical clarity.
              </span>
            </p>
            <p className="mt-4 text-[14px] text-ink-500 max-w-xl leading-relaxed">
              Led by Melodye Harvey, Certified Internal Auditor (CIA). Serving businesses, nonprofits, government contractors,
              and project-based teams across the United States.
            </p>
            <div className="mt-10">
              <Link href="/contact" className="btn">Start a conversation</Link>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-10">
            <div>
              <div className="mono-label">Navigate</div>
              <ul className="mt-5 space-y-2.5 text-[14.5px] text-ink-700">
                {site.nav.map((n) => (
                  <li key={n.href}>
                    <Link
                      href={n.href}
                      className="hover:text-ink-900"
                      style={{ transition: "color 200ms var(--ease-drawer)" }}
                    >
                      {n.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="mono-label">Contact</div>
              <ul className="mt-5 space-y-2.5 text-[14.5px] text-ink-700">
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="hover:text-ink-900"
                    style={{ transition: "color 200ms var(--ease-drawer)" }}
                  >
                    {site.email}
                  </a>
                </li>
                <li className="text-ink-500">United States</li>
                <li className="text-ink-500">Response within 1 business day</li>
                <li>
                  <a
                    href={site.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-ink-900"
                    style={{ transition: "color 200ms var(--ease-drawer)" }}
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-ink-200">
        <div className="wrap py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[12px] text-ink-500">
          <div>© {new Date().getFullYear()} BroadPivot Consulting LLC. All rights reserved.</div>
          <div className="flex items-center gap-5">
            <span>{site.domain}</span>
            <span className="text-ink-300">·</span>
            <span>Melodye Harvey, Certified Internal Auditor (CIA)</span>
            <span className="text-ink-300">·</span>
            <span>Confidential by default</span>
            <span className="text-ink-300">·</span>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-ink-900"
              style={{ transition: "color 200ms var(--ease-drawer)" }}
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
