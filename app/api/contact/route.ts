import { Resend } from "resend";
import { validateContactForm, type ContactFormData } from "@/lib/contact";

const TO_EMAIL = "holly@pippinsocial.com";
const FROM_EMAIL = "pippin <website@pippinsocial.com>";

export async function POST(request: Request) {
  let data: ContactFormData;
  try {
    data = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const errors = validateContactForm(data);
  if (Object.keys(errors).length > 0) {
    return Response.json({ errors }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return Response.json(
      { error: "Unable to send your message right now." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: FROM_EMAIL,
    to: TO_EMAIL,
    replyTo: data.email,
    subject: `New enquiry from ${data.name} — ${data.company}`,
    text: [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Company: ${data.company}`,
      `Budget: ${data.budget || "Not sure yet"}`,
      "",
      data.message,
    ].join("\n"),
  });

  if (error) {
    console.error(error);
    return Response.json(
      { error: "Unable to send your message right now." },
      { status: 502 }
    );
  }

  return Response.json({ ok: true });
}
