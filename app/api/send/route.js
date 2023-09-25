import { NextResponse } from "next/server";
import { Resend } from "resend";
import { EmailTemplate } from "../../components/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.RESEND_FROM_EMAIL;
const resendToEmail = process.env.RESEND_TO_EMAIL;

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: [fromEmail],
      subject: "This is Serhii",
      react: EmailTemplate({ subject: subject, message: message }),
    });
    if (data.status === "success") {
      return NextResponse.json({ message: "Email Sent!" });
    }
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
