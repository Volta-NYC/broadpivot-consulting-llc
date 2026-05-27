import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[70dvh] flex items-center border-b border-ink-200">
      <div className="wrap py-24">
        <div className="font-mono text-[12px] uppercase tracking-[0.18em] text-ink-400">
          404. Off the map.
        </div>
        <h1 className="display mt-6 max-w-[16ch]">
          That page
          {" "}
          <span className="italic text-ink-700 leading-[1.1] pb-1 inline-block">
            isn&apos;t here.
          </span>
        </h1>
        <p className="mt-6 text-ink-600 leading-relaxed max-w-xl">
          The link may be outdated, or the page has moved. Use the navigation,
          or start a conversation with the practice directly.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/" className="btn">Return home</Link>
          <Link href="/contact" className="btn-quiet">Contact us</Link>
        </div>
      </div>
    </section>
  );
}
