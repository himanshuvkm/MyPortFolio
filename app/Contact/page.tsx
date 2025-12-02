"use client";

import { useActionState } from "react";
import { sendMessage } from "@/lib/action";

export default function ContactForm() {
  const [state, formAction] = useActionState(sendMessage, {
    success: false,
    error: null,
  });
  return (
    <div className="py-10 tracking-tight leading-relaxed max-w-xl">

      {/* Heading */}
      <h1 className="text-3xl font-serif mb-4">Contact 📬</h1>

      {/* Intro */}
      <p className="text-base mb-6 ">
        Whether you want to collaborate, ask a question, or just say hi — feel free to reach out.
        I usually reply within a day.
      </p>

      {/* Email */}
      <div className="mb-8">
        <p className="text-sm  mb-1">Email</p>
        <a
          href="mailto:himanshuvkm252@gmail.com"
          className="text-lg underline hover:opacity-80"
        >
          himanshuvkm252@gmail.com
        </a>
      </div>


      {/* Contact Form (optional) */}
      <div>
        <p className="text-sm  mb-3">Send a message</p>

        <form className="space-y-4" action={formAction}>
          <input
            name="name"
            required
            type="text"
            placeholder="Your Name"
            className="w-full p-2 bg-transparent border border-gray-700 rounded-md"
          />

          <input
            name="email"
            required
            type="email"
            placeholder="Your Email"
            className="w-full p-2 bg-transparent border border-gray-700 rounded-md"
          />

          <textarea
            name="message"
            required
            placeholder="Your Message"
            rows={4}
            className="w-full p-2 bg-transparent border border-gray-700 rounded-md"
          ></textarea>

          <button
            type="submit"
            className="px-4 py-2 border border-gray-700 bg-background rounded-md hover:bg-muted-foreground transition"
          >
            Send Message
          </button>
        </form>

        <p className="text-xs  mt-3">
          This form sends your message straight to my inbox — I’ll get back to you soon!
        </p>
      </div>
    </div>
  );
}