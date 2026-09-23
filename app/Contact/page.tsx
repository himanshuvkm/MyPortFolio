"use client";

import { useActionState } from "react";
import { sendMessage } from "@/lib/action";
import Footer from "../_components/footer";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ContactForm() {
  const [state, formAction] = useActionState(sendMessage, {
    success: false,
    error: null,
  });
  return (
    <div className="py-4 sm:py-8 tracking-tight leading-relaxed max-w-xl w-full">
      <div className="mb-6 flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors group"
        >
          <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
          <span>Home</span>
        </Link>
      </div>

      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl font-[Instrument_Serif] tracking-wide mb-3">
        Contact Me
      </h1>

      {/* Intro */}
      <p className="text-sm sm:text-base text-[var(--graytext)] mb-6 leading-relaxed">
        Whether you want to collaborate, ask a question, or just say hi — feel free to reach out.
        I usually reply within a day.
      </p>

      {/* Email */}
      <div className="mb-8 p-3.5 sm:p-4 rounded-xl border border-[var(--border)] bg-[var(--muted)]">
        <p className="text-xs uppercase font-mono tracking-wider text-muted-foreground mb-1">
          Direct Email
        </p>
        <a
          href="mailto:himanshuvkm252@gmail.com"
          className="text-base sm:text-lg font-medium underline underline-offset-4 hover:opacity-80 break-all text-[var(--foreground)]"
        >
          himanshuvkm252@gmail.com
        </a>
      </div>

      {/* Contact Form */}
      <div>
        <p className="text-sm font-medium mb-3">Send a message</p>

        <form className="space-y-4" action={formAction}>
          <input
            name="name"
            required
            type="text"
            placeholder="Your Name"
            aria-label="Your Name"
            className="w-full p-2.5 sm:p-3 text-sm sm:text-base bg-[var(--background)] border border-[var(--border)] rounded-lg text-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition"
          />

          <input
            name="email"
            required
            type="email"
            placeholder="Your Email"
            aria-label="Your Email"
            className="w-full p-2.5 sm:p-3 text-sm sm:text-base bg-[var(--background)] border border-[var(--border)] rounded-lg text-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition"
          />

          <textarea
            name="message"
            required
            placeholder="Your Message"
            aria-label="Your Message"
            rows={4}
            className="w-full p-2.5 sm:p-3 text-sm sm:text-base bg-[var(--background)] border border-[var(--border)] rounded-lg text-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition resize-y"
          ></textarea>

          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-2.5 bg-foreground text-background font-medium rounded-lg hover:opacity-90 transition text-sm cursor-pointer"
          >
            Send Message
          </button>

          {state?.success && (
            <p className="text-sm text-green-600 dark:text-green-400 mt-2 font-medium">
              Message sent successfully!
            </p>
          )}
          {Boolean(state?.error) && (
            <p className="text-sm text-red-600 dark:text-red-400 mt-2 font-medium">
              {typeof state.error === "string"
                ? state.error
                : "Failed to send message. Please try again."}
            </p>
          )}
        </form>

        <p className="text-xs text-muted-foreground mt-3">
          This form sends your message straight to my inbox — I’ll get back to you soon!
        </p>
      </div>
      <Footer />
    </div>
  );
}