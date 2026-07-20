"use client";

import { FormEvent, useState } from "react";

type ContactFormProps = {
  email: string;
};

type FormStatus = "idle" | "sending" | "success" | "error";

export default function ContactForm({ email }: ContactFormProps) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");

    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form));

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) throw new Error(result.message || "Unable to send your message.");

      form.reset();
      setStatus("success");
      setMessage("Thank you. Your message has been sent.");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to send your message.");
    }
  }

  return (
    <form className="space-y-11" onSubmit={handleSubmit}>
      <div className="grid gap-y-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-0">
        <Field label="Name" name="name" required />
        <Field label="Organization" name="organization" />
      </div>
      <div className="grid gap-y-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-0">
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone" name="phone" type="tel" />
      </div>

      <div>
        <label className="eyebrow" htmlFor="interest">Area of interest</label>
        <select
          id="interest"
          name="interest"
          defaultValue=""
          className="mt-3 min-h-12 w-full bg-transparent border-b border-ink-300 py-3 text-[15px] text-ink-900 focus:border-ink-900 focus:outline-none"
        >
          <option value="" disabled>Select one</option>
          <option>Compliance and Risk Management</option>
          <option>Nonprofit Support</option>
          <option>Project / Construction Management Support</option>
          <option>Government Contracting Support</option>
          <option>General Business Operations Support</option>
          <option>Cybersecurity and Privacy Support</option>
          <option>Not sure yet. Let&apos;s discuss.</option>
        </select>
      </div>

      <div>
        <label className="eyebrow" htmlFor="message">How can we help</label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          className="mt-3 min-h-[170px] w-full resize-none border-b border-ink-300 bg-transparent py-3 text-[15px] leading-relaxed text-ink-900 placeholder:text-ink-400 focus:border-ink-900 focus:outline-none"
          placeholder="Briefly describe your environment, timeline, and what success looks like."
        />
        <p className="mt-4 border-l-2 border-accent-warm pl-4 text-[13px] leading-relaxed text-ink-600">
          Please do not submit sensitive personal, financial, health, security, or confidential information through this form.
        </p>
      </div>

      <div className="sr-only" aria-hidden="true">
        <label htmlFor="company-website">Company website</label>
        <input id="company-website" name="companyWebsite" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="pt-2 flex items-center gap-6 flex-wrap">
        <button type="submit" className="btn" disabled={status === "sending"}>
          {status === "sending" ? "Sending..." : "Send message"}
        </button>
        <p className="text-[13px] text-ink-500 max-w-sm leading-relaxed">
          Or write directly:{" "}
          <a href={`mailto:${email}`} className="text-ink-800 underline underline-offset-4 decoration-ink-300 hover:decoration-ink-900">
            {email}
          </a>
        </p>
      </div>

      <p aria-live="polite" className={`text-[14px] leading-relaxed ${status === "error" ? "text-red-700" : "text-ink-700"}`}>
        {message}
      </p>
    </form>
  );
}

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
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
        className="mt-3 min-h-12 w-full border-b border-ink-300 bg-transparent py-3 text-[15px] text-ink-900 placeholder:text-ink-400 focus:border-ink-900 focus:outline-none"
      />
    </label>
  );
}
