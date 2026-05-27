"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-paper/85 backdrop-blur supports-[backdrop-filter]:bg-paper/70 border-b border-ink-200">
      <div className="wrap flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/images/logo.png"
            alt="BroadPivot Consulting"
            width={36}
            height={36}
            className="h-9 w-9 object-contain"
            priority
          />
          <span className="font-serif text-[1.05rem] tracking-tightish text-ink-900">
            BroadPivot Consulting
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {site.nav.map((n) => {
            const active = pathname === n.href || pathname.startsWith(`${n.href}/`);
            return (
              <Link
                key={n.href}
                href={n.href}
                className={`text-sm transition ${
                  active ? "text-ink-900" : "text-ink-600 hover:text-ink-900"
                }`}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 -mr-2 text-ink-900"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
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
          <div className="wrap py-4 flex flex-col">
            {site.nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base text-ink-800 border-b border-ink-100 last:border-0"
              >
                {n.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
