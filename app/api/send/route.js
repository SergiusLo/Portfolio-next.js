import { EmailTemplate } from "../../components/EmailTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  try {
    const data = await resend.emails.send({
      from: "Serhii <slobojko21@gmail.com>",
      to: email,
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
