import { google } from "googleapis";

export const runtime = "nodejs";

const SHEET_NAME = "Sheet1";
const MAX_LENGTHS = {
  name: 120,
  email: 254,
  phone: 50,
  organization: 200,
  interest: 200,
  message: 5000,
} as const;

type ContactPayload = {
  name?: unknown;
  organization?: unknown;
  email?: unknown;
  phone?: unknown;
  interest?: unknown;
  message?: unknown;
  companyWebsite?: unknown;
};

type FieldErrors = Partial<Record<keyof typeof MAX_LENGTHS, string>>;

function readText(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function validate(values: Record<keyof typeof MAX_LENGTHS, string>) {
  const errors: FieldErrors = {};

  if (!values.name) errors.name = "Please enter your name.";
  if (values.name.length > MAX_LENGTHS.name) errors.name = "Name must be 120 characters or fewer.";

  if (!values.email) errors.email = "Please enter your email address.";
  else if (!isEmail(values.email)) errors.email = "Please enter a valid email address.";
  else if (values.email.length > MAX_LENGTHS.email) errors.email = "Email address is too long.";

  if (values.phone.length > MAX_LENGTHS.phone) errors.phone = "Phone number must be 50 characters or fewer.";
  if (values.organization.length > MAX_LENGTHS.organization) errors.organization = "Organization must be 200 characters or fewer.";
  if (values.interest.length > MAX_LENGTHS.interest) errors.interest = "Area of interest must be 200 characters or fewer.";

  if (!values.message) errors.message = "Please tell us how we can help.";
  else if (values.message.length > MAX_LENGTHS.message) errors.message = "Message must be 5,000 characters or fewer.";

  return errors;
}

export async function POST(request: Request) {
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.replace(/\\n/g, "\n");

  if (!spreadsheetId || !clientEmail || !privateKey) {
    console.error("Google Sheets contact form credentials are not configured.");
    return Response.json(
      { message: "The contact form is temporarily unavailable. Please email us directly." },
      { status: 503 },
    );
  }

  let payload: ContactPayload;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ message: "Please submit the form again." }, { status: 400 });
  }

  // The hidden field is a honeypot. Treat bot submissions as successful without storing them.
  if (readText(payload.companyWebsite)) {
    return Response.json({ ok: true });
  }

  const values = {
    name: readText(payload.name),
    email: readText(payload.email),
    phone: readText(payload.phone),
    organization: readText(payload.organization),
    interest: readText(payload.interest),
    message: readText(payload.message),
  };
  const errors = validate(values);

  if (Object.keys(errors).length > 0) {
    return Response.json(
      { message: "Please correct the highlighted fields.", errors },
      { status: 400 },
    );
  }

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: { client_email: clientEmail, private_key: privateKey },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });
    const sheets = google.sheets({ version: "v4", auth });

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${SHEET_NAME}!A:G`,
      valueInputOption: "USER_ENTERED",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
        values: [[
          new Date().toISOString(),
          values.name,
          values.email,
          values.phone,
          values.organization,
          values.interest,
          values.message,
        ]],
      },
    });
  } catch (error) {
    console.error("Unable to append contact form submission to Google Sheets.", error);
    return Response.json(
      { message: "Unable to send your message right now. Please email us directly." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
