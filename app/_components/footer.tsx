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
    <footer className="mt-6 pt-4 text-sm text-[var(--graytext)]">
      <hr className="pb-4" />

      <h1 className="text-2xl font-[Instrument_Serif] tracking-wide text-center">
        Let&apos;s Connect
      </h1>

      {/* Social Links */}
      <div className="flex flex-wrap items-center justify-center gap-5 text-sm py-6">
        <Link
          href="https://github.com/himanshuvkm"
          target="_blank"
          className="flex items-center gap-2 hover:text-strong transition-colors"
        >
          <Github size={16} />
          <span>GitHub</span>
        </Link>

        <Link
          href="https://x.com/himanshu_9148"
          target="_blank"
          className="flex items-center gap-2 hover:text-strong transition-colors"
        >
          <SiX size={14} />
          <span>Twitter</span>
        </Link>

        <Link
          href="https://www.linkedin.com/in/himanshu-vishwakarma-2275a5354"
          target="_blank"
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

        <Link
          href="/resume.pdf"
          target="_blank"
          className="flex items-center gap-2 hover:text-strong transition-colors"
        >
          <Paperclip size={16} />
          <span>Resume</span>
        </Link>
      </div>

      <hr className="pb-4" />

      {/* Meta */}
<div className="max-w-6xl mx-auto px-4">
  {/* Top meta */}
  <div
    className="
      flex items-start justify-between
      gap-4
      text-xs sm:text-sm
    "
  >
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
      <p>
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
  <div className="mt-6 text-center text-xs ">
    © 2026 Himanshu Vishwakarma.
  </div>
</div>

    </footer>
  );
}
