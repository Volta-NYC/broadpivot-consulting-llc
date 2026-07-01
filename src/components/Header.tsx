"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";
import LogoMark from "@/components/LogoMark";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));

  return (
    <header className="sticky top-0 z-50 bg-paper/85 backdrop-blur supports-[backdrop-filter]:bg-paper/72 border-b border-ink-200/80">
      <div className="wrap flex h-[68px] items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3 group"
          onClick={() => setOpen(false)}
        >
          <LogoMark className="h-9 w-9 shrink-0" />
          <span className="font-serif text-[1.02rem] leading-none tracking-tightish text-ink-900">
            BroadPivot<span className="text-ink-400"> Consulting</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {site.nav.map((n) => {
            const active = isActive(n.href);
            return (
              <Link
                key={n.href}
                href={n.href}
                className={`nav-link ${
                  active ? "nav-link--active text-ink-900" : "text-ink-500 hover:text-ink-900"
                }`}
              >
                {n.label}
                <span
                  className={`pointer-events-none absolute left-3.5 right-3.5 bottom-1 h-px origin-left transition-transform duration-300 ${
                    active ? "bg-ink-900 scale-x-100" : "bg-ink-900 scale-x-0"
                  }`}
                />
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="nav-cta ml-3 inline-flex items-center gap-2 border border-ink-900 px-4 py-2 text-[12.5px] font-medium tracking-tight text-ink-900 hover:bg-ink-900 hover:text-paper"
          >
            Start a conversation
          </Link>
        </nav>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 -mr-2 text-ink-900"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          >
            {open ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="8" x2="21" y2="8" />
                <line x1="3" y1="16" x2="21" y2="16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-ink-200 bg-paper">
          <div className="wrap py-3 flex flex-col">
            {site.nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="mobile-nav-link py-3 text-base text-ink-800 border-b border-ink-100 last:border-0 flex items-center justify-between"
              >
                <span>{n.label}</span>
                <span className="text-ink-400">→</span>
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 mb-4 inline-flex items-center justify-center gap-2 border border-ink-900 bg-ink-900 px-5 py-3 text-sm text-paper"
            >
              Start a conversation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
