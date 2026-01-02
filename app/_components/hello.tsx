"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { useTheme } from "next-themes";

import logo from "@/public/logome.png";
import { GitHubCalendar } from "react-github-calendar";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";

import Skills from "./_components/skill";
import TextType from "@/components/TextType";
import Projects from "./Projects/page";

export default function Home() {
  const { resolvedTheme } = useTheme();
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen px-16 py-20">
      <div className="max-w-xl">

        {/* Avatar with hover pop animation */}
        <div className="group relative inline-block">
          {/* Glow ring */}
          <div
            className="
              absolute inset-0 rounded-full
              bg-gradient-to-tr from-indigo-500/40 to-purple-500/40
              blur-xl opacity-0
              transition-opacity duration-500
              group-hover:opacity-100
            "
          />

          <Image
            src={logo}
            alt="Avatar"
            className="
              relative z-10
              w-24 h-24 rounded-full object-cover
              grayscale
              transition-all duration-500 ease-out
              transform-gpu
              group-hover:grayscale-0
              group-hover:scale-150
              group-hover:-translate-y-2
              shadow-sm
              group-hover:shadow-2xl
            "
          />
        </div>

        {/* Name */}
        <h1 className="mt-6 text-5xl font-serif font-medium tracking-tight">
          <TextType
            text={["Himanshu Vishwakarma"]}
            typingSpeed={80}
            pauseDuration={1000}
            showCursor={false}
          />
        </h1>

        {/* Status */}
        <p className="mt-2 text-sm text-gray-500">
          ● Open to Work
        </p>

        {/* Meta */}
        <p className="mt-3 text-sm text-gray-500 flex items-center gap-4">
          <span className="flex items-center gap-1">
            <IoLocationOutline /> Delhi, India
          </span>
          <span className="flex items-center gap-1">
            <FaRegClock /> {format(currentTime, "hh:mm:ss a")}
          </span>
        </p>

        {/* Bio */}
        <div className="mt-8 space-y-4 text-gray-300 leading-relaxed">
          <p>
            Yup! I'm a{" "}
            <span className="text-white font-medium">Full Stack Developer.</span>{" "}
            I love building clean UIs, smooth interactions, and solving problems.
            I enjoy crafting websites with{" "}
            <span className="text-white">React</span>,{" "}
            <span className="text-white">TypeScript</span>,{" "}
            <span className="text-white">Express</span>, and backend systems using{" "}
            <span className="text-white">MongoDB</span> &{" "}
            <span className="text-white">PostgreSQL</span>.
          </p>

          <p>
            I love both{" "}
            <span className="text-white font-medium">
              development & design.
            </span>{" "}
            That means I enjoy creating interfaces that look clean and feel
            effortless. Always learning, building, and improving.
          </p>
        </div>

        {/* Social links */}
        <div className="mt-6 flex items-center gap-6 text-sm text-gray-400">
          <Link
            href="https://github.com/himanshuvkm"
            target="_blank"
            className="hover:text-white transition-colors"
          >
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/himanshu-vishwakarma-2275a5354"
            target="_blank"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </Link>
          <Link
            href="https://x.com/"
            target="_blank"
            className="hover:text-white transition-colors"
          >
            Twitter
          </Link>
          <Link
            href="mailto:himanshuvkm252@gmail.com"
            className="hover:text-white transition-colors"
          >
            Email
          </Link>
        </div>

        {/* Projects */}
        <section className="mt-16">
          <Projects />
        </section>

        {/* Skills */}
        <section className="mt-16">
          <p className="text-sm text-gray-500 mb-4">Skills</p>
          <Skills />
        </section>

        {/* GitHub contributions */}
        <section className="mt-20">
          <p className="text-sm text-gray-500 mb-4">
            GitHub Contributions
          </p>
          <GitHubCalendar
            username="himanshuvkm"
            colorScheme={resolvedTheme === "dark" ? "dark" : "light"}
          />
        </section>
      </div>
    </main>
  );
}






import { Mail, Github, Linkedin } from "lucide-react";
import { SiX } from "react-icons/si";
import Link from "next/link";
import { VisitorCounter } from "@/components/visitor-counter";

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
      <div className="mt-10 flex justify-between items-center text-xs text-gray-500">
        <p>2025. All rights reserved</p>
        <VisitorCounter />
      </div>
    </footer>
  );
}

