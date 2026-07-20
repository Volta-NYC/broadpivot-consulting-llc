import { site } from "@/lib/site";
import { BlueprintBackdrop } from "@/components/Backdrop";
import ContactForm from "@/components/ContactForm";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-ink-200/80">
        <BlueprintBackdrop />

        <div className="wrap pt-20 sm:pt-24 lg:pt-28 pb-16 lg:pb-20">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-ink-400" />
            <span className="eyebrow">Contact</span>
          </div>

          <h1 className="display mt-8 max-w-[16ch]">
            Let&apos;s discuss
            {" "}
            <span className="italic text-ink-700 leading-[1.1] pb-1 inline-block">
              what&apos;s on your roadmap.
            </span>
          </h1>

          <p className="lede mt-8 max-w-2xl">
            Share a few details about your environment and goals. We respond within one business day.
          </p>
        </div>
      </section>

      {/* FORM */}
      <section className="py-20 lg:py-28">
        <div className="wrap grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-7">
            <ContactForm email={site.email} />
          </div>

          <aside className="lg:col-span-5 lg:pl-10 lg:border-l lg:border-ink-200 space-y-12">
            <div>
              <div className="mono-label">Direct</div>
              <a
                href={`mailto:${site.email}`}
                className="mt-3 block font-serif text-xl tracking-tightish text-ink-900 hover:text-ink-700"
                style={{ transition: "color 200ms var(--ease-drawer)" }}
              >
                {site.email}
              </a>
            </div>
            <div>
              <div className="mono-label">Location</div>
              <p className="mt-3 text-ink-700 text-[15px]">
                United States. Remote-first, on-site when the engagement calls for it.
              </p>
            </div>
            <div>
              <div className="mono-label">Response</div>
              <p className="mt-3 text-ink-700 text-[15px]">Within one business day.</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
