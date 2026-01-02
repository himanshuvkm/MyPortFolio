"use client";

import { ThemeTogglerButton } from "@/components/animate-ui/components/buttons/theme-toggler";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-[var(--border)] backdrop-blur-sm ">
      <div className="relative mx-auto max-w-6xl px-4 py-4">
        {/* Center Nav */}
        <ul className="flex justify-center gap-6 font-medium">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/Projects">Projects</Link>
          </li>
          <li>
            <Link href="/Blog">Blog</Link>
          </li>
          <li>
            <Link href="/Contact">Contact</Link>
          </li>
        </ul>

        {/* Right Theme Toggle */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2">
          <ThemeTogglerButton
            variant="accent"
            modes={["dark", "light"]}
          />
        </div>
      </div>
    </header>
  );
}
