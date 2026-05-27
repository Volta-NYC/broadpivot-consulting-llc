import { site } from "@/lib/site";
import { BlueprintBackdrop } from "@/components/Backdrop";

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
            Share a few details about your environment and goals. We respond
            within one business day, confidentially.
          </p>
        </div>
      </section>

      {/* FORM */}
      <section className="py-20 lg:py-28">
        <div className="wrap grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-7">
            <form
              className="space-y-10"
              action={`mailto:${site.email}`}
              method="post"
              encType="text/plain"
            >
              <div className="grid sm:grid-cols-2 gap-8">
                <Field label="Name" name="name" required />
                <Field label="Organization" name="organization" />
              </div>
              <div className="grid sm:grid-cols-2 gap-8">
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone" name="phone" type="tel" />
              </div>

              <div>
                <label className="eyebrow" htmlFor="interest">
                  Area of interest
                </label>
                <select
                  id="interest"
                  name="interest"
                  defaultValue=""
                  className="mt-3 w-full bg-transparent border-b border-ink-300 py-3 text-[15px] text-ink-900 focus:border-ink-900 focus:outline-none"
                >
                  <option value="" disabled>Select one</option>
                  <option>Compliance and Risk Management</option>
                  <option>Cybersecurity and Data Protection</option>
                  <option>Government Contracting Readiness</option>
                  <option>Business Process Optimization</option>
                  <option>Not sure yet. Let&apos;s discuss.</option>
                </select>
              </div>

              <div>
                <label className="eyebrow" htmlFor="message">
                  How can we help
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="mt-3 w-full bg-transparent border-b border-ink-300 py-3 text-[15px] text-ink-900 placeholder:text-ink-400 focus:border-ink-900 focus:outline-none resize-none leading-relaxed"
                  placeholder="Briefly describe your environment, timeline, and what success looks like."
                />
              </div>

              <div className="pt-2 flex items-center gap-6 flex-wrap">
                <button type="submit" className="btn">Send message</button>
                <p className="text-[13px] text-ink-500 max-w-sm leading-relaxed">
                  Or write directly:{" "}
                  <a
                    href={`mailto:${site.email}`}
                    className="text-ink-800 underline underline-offset-4 decoration-ink-300 hover:decoration-ink-900"
                  >
                    {site.email}
                  </a>
                </p>
              </div>
            </form>
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
            <div>
              <div className="mono-label">Confidentiality</div>
              <p className="mt-3 text-ink-700 text-[15px]">
                Inbound inquiries are treated as confidential by default. NDAs
                are available on request before substantive discussion.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="eyebrow">
        {label}
        {required && <span className="text-ink-900"> *</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        className="mt-3 w-full bg-transparent border-b border-ink-300 py-3 text-[15px] text-ink-900 placeholder:text-ink-400 focus:border-ink-900 focus:outline-none"
      />
    </label>
  );
}
