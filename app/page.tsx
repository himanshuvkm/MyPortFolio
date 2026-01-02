"use client";
import { motion } from "framer-motion";
import Hero from "./_components/hero";
import OpenSourceContribution from "./_components/contribution";
import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";
import Skills from "./_components/skill";
import Link from "next/link";
import ProjectCard from "./Projects/projectcard";
import { projects } from "./Projects/projects";
import Footer from "./_components/footer";

export default function Home() {
  const featuredProject = projects[0];
  const { resolvedTheme } = useTheme();
  return (
    <motion.div layout className="flex flex-col gap-6">
      <Hero />
      <OpenSourceContribution />
      <Skills />
      <div>
        <h1 className="text-2xl font-[Instrument_Serif] tracking-wide mb-4">
          Github Activities
        </h1>
        <GitHubCalendar
          username="himanshuvkm"
          colorScheme={resolvedTheme === "dark" ? "dark" : "light"}
        />
      </div>

      <div className="flex items-baseline justify-between mt-4">
        <h2 className="text-2xl font-[Instrument_Serif] tracking-wide">
          Projects
        </h2>

        <Link
          href="/projects"
          className="
    group inline-flex items-center gap-1
    text-sm
    text-muted-foreground
    transition-colors duration-200
    hover:text-foreground
  "
        >
          <span
            className="
      underline underline-offset-4
      decoration-transparent
      transition-colors duration-200
      group-hover:decoration-current
    "
          >
            View all projects
          </span>

          <span
            className="
      transition-transform duration-200
      group-hover:translate-x-1
    "
          >
            →
          </span>
        </Link>
      </div>

      <ProjectCard project={featuredProject} />

      {/* View all button */}
      <Footer />
    </motion.div>
  );
}
