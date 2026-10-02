"use client";

import { useSyncExternalStore } from "react";
import { format } from "date-fns";
import { VisitorCounter } from "@/components/visitor-counter";
import { Mail, Github, Linkedin, Paperclip } from "lucide-react";
import { SiX } from "react-icons/si";
import Link from "next/link";

let cachedTime: string | null = null;
const listeners = new Set<() => void>();
let timerId: ReturnType<typeof setInterval> | null = null;

function subscribeToTimer(callback: () => void) {
  listeners.add(callback);
  if (listeners.size === 1) {
    cachedTime = format(new Date(), "hh:mm:ss a");
    timerId = setInterval(() => {
      cachedTime = format(new Date(), "hh:mm:ss a");
      listeners.forEach((l) => l());
    }, 1000);
  }
  return () => {
    listeners.delete(callback);
    if (listeners.size === 0 && timerId) {
      clearInterval(timerId);
      timerId = null;
      cachedTime = null;
    }
  };
}

function getClientTime(): string | null {
  if (cachedTime === null) {
    cachedTime = format(new Date(), "hh:mm:ss a");
  }
  return cachedTime;
}

function getServerTime(): string | null {
  return null;
}

export default function Footer() {
  const currentTime = useSyncExternalStore(
    subscribeToTimer,
    getClientTime,
    getServerTime
  );

  return (
    <footer className="mt-6 pt-4 text-sm text-[var(--graytext)]">
      <hr className="pb-4 border-[var(--border)]" />

      <h2 className="text-2xl font-[Instrument_Serif] tracking-wide text-center">
        Let&apos;s Connect
      </h2>

      {/* Social Links */}
      <div className="flex flex-wrap items-center justify-center gap-5 text-sm py-6">
        <Link
          href="https://github.com/himanshuvkm"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-strong transition-colors"
        >
          <Github size={16} />
          <span>GitHub</span>
        </Link>

        <Link
          href="https://x.com/himanshu_9148"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-strong transition-colors"
        >
          <SiX size={14} />
          <span>Twitter</span>
        </Link>

        <Link
          href="https://www.linkedin.com/in/himanshu-vishwakarma-2275a5354"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-strong transition-colors"
        >
          <Linkedin size={16} />
          <span>LinkedIn</span>
        </Link>

        <Link
          href="mailto:himanshuvkm252@gmail.com"
          className="flex items-center gap-2 hover:text-strong transition-colors"
        >
          <Mail size={16} />
          <span>Mail</span>
        </Link>

        <a
          href="/Himanshu_Vishwakarma_Resume.pdf"
          download="Himanshu_Vishwakarma_Resume.pdf"
          className="flex items-center gap-2 hover:text-strong transition-colors"
        >
          <Paperclip size={16} />
          <span>Resume</span>
        </a>
      </div>

      <hr className="pb-4 border-[var(--border)]" />

      {/* Meta */}
      <div className="w-full">
        {/* Top meta */}
        <div className="flex items-start justify-between gap-4 text-xs sm:text-sm">
          {/* Left */}
          <div className="space-y-1 text-left">
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
          <div className="space-y-1 text-right">
            <div>
              Visits{" "}
              <span className="font-medium text-[var(--foreground)]">
                <VisitorCounter />
              </span>
            </div>
            <p className="font-mono">
              {currentTime ? (
                <>
                  <span className="hidden sm:inline">
                    {currentTime}
                  </span>
                  <span className="sm:hidden">
                    {currentTime.replace(/:\d{2} /, " ")}
                  </span>
                </>
              ) : (
                <span>--:--:-- --</span>
              )}
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-6 text-center text-xs">
          © 2026 Himanshu Vishwakarma.
        </div>
      </div>
    </footer>
  );
}
