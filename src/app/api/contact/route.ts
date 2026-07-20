import { Resend } from "resend";
import { site } from "@/lib/site";

export const runtime = "nodejs";

const MAX_MESSAGE_LENGTH = 5000;

type ContactPayload = {
  name?: unknown;
  organization?: unknown;
  email?: unknown;
  phone?: unknown;
  interest?: unknown;
  message?: unknown;
  companyWebsite?: unknown;
};

function readText(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY || !process.env.CONTACT_FROM_EMAIL) {
    console.error("Contact form email is not configured.");
    return Response.json({ message: "The contact form is temporarily unavailable. Please email us directly." }, { status: 503 });
  }

  let payload: ContactPayload;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ message: "Please submit the form again." }, { status: 400 });
  }

  const name = readText(payload.name);
  const organization = readText(payload.organization);
  const email = readText(payload.email);
  const phone = readText(payload.phone);
  const interest = readText(payload.interest);
  const message = readText(payload.message);

  if (readText(payload.companyWebsite)) {
    return Response.json({ ok: true });
  }

  if (!name || !isEmail(email) || !message || message.length > MAX_MESSAGE_LENGTH) {
    return Response.json({ message: "Please provide your name, a valid email address, and a message." }, { status: 400 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const { error } = await resend.emails.send({
    from: process.env.CONTACT_FROM_EMAIL,
    to: [site.email],
    replyTo: email,
    subject: `New BroadPivot website inquiry from ${name.replace(/[\r\n]+/g, " ")}`,
    text: [
      "New BroadPivot website inquiry",
      "",
      `Name: ${name}`,
      `Organization: ${organization || "Not provided"}`,
      `Email: ${email}`,
      `Phone: ${phone || "Not provided"}`,
      `Area of interest: ${interest || "Not provided"}`,
      "",
      "Message:",
      message,
    ].join("\n"),
  });

  if (error) {
    console.error("Unable to deliver contact form email.", error);
    return Response.json({ message: "Unable to send your message right now. Please email us directly." }, { status: 502 });
  }

  return Response.json({ ok: true });
}
