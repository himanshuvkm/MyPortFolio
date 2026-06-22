"use server";

import { Resend } from "resend";
import EmailTemplate from "@/app/_components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendMessage(prevState: unknown, formData: FormData) {
  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["himanshuvkm252@gmail.com"],
      subject: `New message from ${name}`,
      react: EmailTemplate({ name, email, message }),
    });

    return { success: true };
  } catch (error) {
    return { success: false, error };
  }
}
