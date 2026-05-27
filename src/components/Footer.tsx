import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-ink-200">
      <div className="wrap py-16 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="font-serif text-2xl tracking-tightish text-ink-900">
            BroadPivot Consulting LLC
          </div>
          <p className="mt-3 text-sm text-ink-600 max-w-sm leading-relaxed">
            {site.description}
          </p>
        </div>

        <div className="md:col-span-3">
          <div className="eyebrow">Navigation</div>
          <ul className="mt-4 space-y-2 text-sm text-ink-700">
            {site.nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="hover:text-ink-900 transition">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <div className="eyebrow">Contact</div>
          <ul className="mt-4 space-y-2 text-sm text-ink-700">
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-ink-900 transition">
                {site.email}
              </a>
            </li>
            <li className="text-ink-500">United States</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-200">
        <div className="wrap py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-ink-500">
          <div>© {new Date().getFullYear()} BroadPivot Consulting LLC.</div>
          <div>{site.domain}</div>
        </div>
      </div>
    </footer>
  );
}
