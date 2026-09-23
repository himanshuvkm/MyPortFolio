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

const calendarTheme = {
  light: ["#ebebeb", "#c6c5c5", "#999999", "#555555", "#000000"],
  dark: ["#161b22", "#3a3a3c", "#6e6e73", "#aeaeb2", "#ffffff"],
};

export default function Home() {
  const featuredProject1 = projects[0];
  const featuredProject2 = projects[1];

  const { resolvedTheme } = useTheme();
  return (
    <motion.div layout className="flex flex-col gap-6 sm:gap-8">
      <Hero />
      <OpenSourceContribution />
      <Skills />
      
      <div className="w-full">
        <h2 className="text-xl sm:text-2xl font-[Instrument_Serif] tracking-wide mb-3 sm:mb-4">
          Github Activities
        </h2>
        <div className="w-full overflow-x-auto pb-2 rounded-xl border border-[var(--border)] bg-[var(--muted)] p-3 sm:p-4">
          <div className="min-w-[650px] flex justify-center">
            <GitHubCalendar
              username="himanshuvkm"
              colorScheme={resolvedTheme === "dark" ? "dark" : "light"}
              theme={calendarTheme}
              fontSize={12}
              blockSize={11}
              blockMargin={4}
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mt-2 sm:mt-4">
        <h2 className="text-xl sm:text-2xl font-[Instrument_Serif] tracking-wide">
          Projects
        </h2>

        <Link
          href="/Projects"
          className="
            group inline-flex items-center gap-1
            text-xs sm:text-sm
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

      <ProjectCard project={featuredProject1} />
      <ProjectCard project={featuredProject2} />

      <Footer />
    </motion.div>
  );
}
