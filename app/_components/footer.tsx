"use client";

import { useEffect, useState } from "react";
import { format } from "date-fns";
import { VisitorCounter } from "@/components/visitor-counter";
import { Mail, Github, Linkedin, Paperclip } from "lucide-react";
import { SiX } from "react-icons/si";
import Link from "next/link";
export default function Footer() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="mt-8 pt-4 text-xs sm:text-sm text-[var(--graytext)]">
      <hr className="pb-4 border-[var(--border)]" />

      <h2 className="text-xl sm:text-2xl font-[Instrument_Serif] tracking-wide text-center">
        Let&apos;s Connect
      </h2>

      {/* Social Links */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 py-4 sm:py-6">
        <Link
          href="https://github.com/himanshuvkm"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[var(--border)] bg-[var(--muted)] hover:text-foreground hover:bg-[color-mix(in oklch,var(--muted),black 8%)] transition-colors text-xs sm:text-sm"
        >
          <Github size={15} />
          <span>GitHub</span>
        </Link>

        <Link
          href="https://x.com/himanshu_9148"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[var(--border)] bg-[var(--muted)] hover:text-foreground hover:bg-[color-mix(in oklch,var(--muted),black 8%)] transition-colors text-xs sm:text-sm"
        >
          <SiX size={13} />
          <span>Twitter</span>
        </Link>

        <Link
          href="https://www.linkedin.com/in/himanshu-vishwakarma-2275a5354"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[var(--border)] bg-[var(--muted)] hover:text-foreground hover:bg-[color-mix(in oklch,var(--muted),black 8%)] transition-colors text-xs sm:text-sm"
        >
          <Linkedin size={15} />
          <span>LinkedIn</span>
        </Link>

        <Link
          href="mailto:himanshuvkm252@gmail.com"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[var(--border)] bg-[var(--muted)] hover:text-foreground hover:bg-[color-mix(in oklch,var(--muted),black 8%)] transition-colors text-xs sm:text-sm"
        >
          <Mail size={15} />
          <span>Mail</span>
        </Link>

        <a
          href="/Himanshu_Resume.pdf"
          download="Himanshu_Vishwakarma_Resume.pdf"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[var(--border)] bg-[var(--muted)] hover:text-foreground hover:bg-[color-mix(in oklch,var(--muted),black 8%)] transition-colors text-xs sm:text-sm"
        >
          <Paperclip size={15} />
          <span>Resume</span>
        </a>
      </div>

      <hr className="pb-4 border-[var(--border)]" />

      {/* Meta */}
      <div className="w-full">
        {/* Top meta */}
        <div className="flex items-center justify-between gap-4 text-xs sm:text-sm">
          {/* Left */}
          <div className="space-y-0.5 text-left">
            <p>
              crafted by{" "}
              <span className="font-medium text-[var(--foreground)]">
                Himanshu
              </span>
            </p>
            <p>
              <span className="font-medium text-[var(--foreground)]">
                Delhi, India
              </span>
            </p>
          </div>

          {/* Right */}
          <div className="space-y-0.5 text-right">
            <div>
              Visits{" "}
              <span className="font-medium text-[var(--foreground)]">
                <VisitorCounter />
              </span>
            </div>
            <p className="text-muted-foreground font-mono text-[11px] sm:text-xs">
              <span className="hidden sm:inline">
                {format(currentTime, "hh:mm:ss a")}
              </span>
              <span className="sm:hidden">
                {format(currentTime, "hh:mm a")}
              </span>
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-4 sm:mt-6 text-center text-[11px] sm:text-xs text-muted-foreground">
          © 2026 Himanshu Vishwakarma.
        </div>
      </div>
    </footer>
  );
}
