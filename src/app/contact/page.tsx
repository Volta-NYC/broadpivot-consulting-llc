import { site } from "@/lib/site";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <section className="pt-20 sm:pt-28 pb-16 border-b border-ink-200">
        <div className="wrap">
          <div className="eyebrow">Contact</div>
          <h1 className="display mt-6 max-w-4xl">
            Let&apos;s discuss what&apos;s on your roadmap.
          </h1>
          <p className="lede mt-8 max-w-2xl">
            Share a few details about your environment and goals. We respond within one business day.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="wrap grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-7">
            <form
              className="space-y-8"
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
                <label className="eyebrow">Area of interest</label>
                <select
                  name="interest"
                  defaultValue=""
                  className="mt-2 w-full bg-transparent border-b border-ink-300 py-3 text-base text-ink-900 focus:border-ink-900 focus:outline-none"
                >
                  <option value="" disabled>Select one</option>
                  <option>Compliance &amp; Risk Management</option>
                  <option>Cybersecurity &amp; Data Protection</option>
                  <option>Government Contracting Readiness</option>
                  <option>Business Process Optimization</option>
                  <option>Not sure yet</option>
                </select>
              </div>

              <div>
                <label className="eyebrow">How can we help?</label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="mt-2 w-full bg-transparent border-b border-ink-300 py-3 text-base text-ink-900 placeholder:text-ink-400 focus:border-ink-900 focus:outline-none resize-none"
                  placeholder="Briefly describe your environment, timeline, and what success looks like."
                />
              </div>

              <div className="pt-2">
                <button type="submit" className="btn">Send message</button>
              </div>
            </form>
          </div>

          <aside className="lg:col-span-5 space-y-12">
            <div>
              <div className="eyebrow">Direct</div>
              <a
                href={`mailto:${site.email}`}
                className="mt-3 block font-serif text-xl tracking-tightish text-ink-900 hover:text-ink-700 transition"
              >
                {site.email}
              </a>
            </div>
            <div>
              <div className="eyebrow">Location</div>
              <p className="mt-3 text-ink-700">United States</p>
            </div>
            <div>
              <div className="eyebrow">Response</div>
              <p className="mt-3 text-ink-700">Within one business day.</p>
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
        className="mt-2 w-full bg-transparent border-b border-ink-300 py-3 text-base text-ink-900 placeholder:text-ink-400 focus:border-ink-900 focus:outline-none"
      />
    </label>
  );
}
