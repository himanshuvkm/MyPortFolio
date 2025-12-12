import { Mail, Github, Linkedin } from "lucide-react";
import { SiX } from "react-icons/si";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="pt-16 text-center text-[var(--foreground)]">
      {/* CONNECT CARD */}
      <div
        className="
      max-w-2xl mx-auto p-8 
      border border-[var(--border)] 
      rounded-xl 
      bg-[var(--muted)]
      transition-colors
    "
      >
        <h2 className="text-2xl font-semibold mb-2">Let's Connect</h2>

        <p className="text-[var(--graytext)] mb-6">
          Feel free to reach out through any of these platforms
        </p>

        {/* BUTTON LINKS */}
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="mailto:himanshuvkm252@gmail.com"
            target="_blank"
            className="
    flex items-center gap-2 px-4 py-2 text-sm 
    bg-[var(--muted)] border border-[var(--border)] rounded-lg
    hover:bg-[color-mix(in oklch, var(--muted), black 10%)]
    transition-all
  "
          >
            <Mail size={16} />
            <span className="hidden sm:inline">Email</span>
          </Link>

          <Link
            href="https://github.com/himanshuvkm"
            target="_blank"
            className="
    flex items-center gap-2 px-4 py-2 text-sm 
    bg-[var(--muted)] border border-[var(--border)] rounded-lg
    hover:bg-[color-mix(in oklch, var(--muted), black 10%)]
    transition-all
  "
          >
            <Github size={16} />
            <span className="hidden sm:inline">GitHub</span>
          </Link>

          <Link
            href="https://x.com/Himanshu_10147"
            target="_blank"
            className="
    flex items-center gap-2 px-4 py-2 text-sm 
    bg-[var(--muted)] border border-[var(--border)] rounded-lg
    hover:bg-[color-mix(in oklch, var(--muted), black 10%)]
    transition-all
  "
          >
            <SiX size={14} />
            <span className="hidden sm:inline">Twitter</span>
          </Link>

          <Link
            href="https://www.linkedin.com/in/himanshu-vishwakarma-2275a5354"
            target="_blank"
            className="
    flex items-center gap-2 px-4 py-2 text-sm 
    bg-[var(--muted)] border border-[var(--border)] rounded-lg
    hover:bg-[color-mix(in oklch, var(--muted), black 10%)]
    transition-all
  "
          >
            <Linkedin size={16} />
            <span className="hidden sm:inline">LinkedIn</span>
          </Link>
        </div>
      </div>

      {/* QUOTE */}
      <p className="italic text-[var(--graytext)] text-sm mt-10">
        "Progress beats perfection—every single time"
      </p>

      {/* SIGNATURE */}
      <p className="italic text-[var(--graytext)] text-sm mt-1">
        Designed & Made with <span className="text-pink-500">❤️</span>
      </p>

      {/* BOTTOM ROW */}
      <div className="mt-10 flex justify-between px-8 text-xs text-gray-500">
        <p>2025. All rights reserved</p>
        <p>Always building. Always learning</p>
      </div>
    </footer>
  );
}
