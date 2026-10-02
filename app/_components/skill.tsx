"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiCplusplus,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiSupabase,
  SiPrisma,
  SiDocker,
  SiGit,
  SiGithub,
  SiGooglegemini,
  SiNumpy,
  SiPandas,
  SiVitest,
  SiVercel,
  SiPostman,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import {
  Network,
  Radio,
  Database,
  Layers,
  Boxes,
  Code2,
  Workflow,
  Sparkles,
} from "lucide-react";
import Magnet from "@/components/Magnet";

type Category = "All" | "Frontend" | "Backend" | "Database" | "DevOps & Tools" | "Core & AI";

interface SkillItem {
  name: string;
  icon: React.ReactNode;
  categories: Category[];
}

const CATEGORIES: Category[] = [
  "All",
  "Frontend",
  "Backend",
  "Database",
  "DevOps & Tools",
  "Core & AI",
];

const SKILLS_LIST: SkillItem[] = [
  { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" />, categories: ["Frontend"] },
  { name: "TypeScript", icon: <SiTypescript color="#3178C6" />, categories: ["Frontend", "Backend"] },
  { name: "Python", icon: <SiPython color="#3776AB" />, categories: ["Backend", "Core & AI"] },
  { name: "Java", icon: <FaJava color="#ED8B00" />, categories: ["Backend"] },
  { name: "C++", icon: <SiCplusplus color="#00599C" />, categories: ["Core & AI"] },
  { name: "React", icon: <SiReact color="#61DAFB" />, categories: ["Frontend"] },
  { name: "Next.js", icon: <SiNextdotjs />, categories: ["Frontend", "Backend"] },
  { name: "Node.js", icon: <SiNodedotjs color="#339933" />, categories: ["Backend"] },
  { name: "Express.js", icon: <SiExpress />, categories: ["Backend"] },
  { name: "Tailwind", icon: <SiTailwindcss color="#06B6D4" />, categories: ["Frontend"] },
  { name: "PostgreSQL", icon: <SiPostgresql color="#4169E1" />, categories: ["Database"] },
  { name: "MongoDB", icon: <SiMongodb color="#47A248" />, categories: ["Database"] },
  { name: "Redis", icon: <SiRedis color="#DC382D" />, categories: ["Database", "Backend"] },
  { name: "Supabase", icon: <SiSupabase color="#3ECF8E" />, categories: ["Database", "Backend"] },
  { name: "Prisma", icon: <SiPrisma color="#2D3748" />, categories: ["Database", "Backend"] },
  { name: "Docker", icon: <SiDocker color="#2496ED" />, categories: ["DevOps & Tools"] },
  { name: "Git", icon: <SiGit color="#F05032" />, categories: ["DevOps & Tools"] },
  { name: "GitHub", icon: <SiGithub />, categories: ["DevOps & Tools"] },
  { name: "REST APIs", icon: <Network size={14} className="text-blue-500" />, categories: ["Backend"] },
  { name: "WebSockets", icon: <Radio size={14} className="text-pink-500" />, categories: ["Backend"] },
  { name: "SQL", icon: <Database size={14} className="text-sky-500" />, categories: ["Database"] },
  { name: "System Design", icon: <Layers size={14} className="text-purple-500" />, categories: ["Core & AI", "Backend"] },
  { name: "Distributed Systems", icon: <Boxes size={14} className="text-indigo-500" />, categories: ["Core & AI", "Backend"] },
  { name: "DSA", icon: <Code2 size={14} className="text-emerald-500" />, categories: ["Core & AI"] },
  { name: "Gemini", icon: <SiGooglegemini color="#4E89FF" />, categories: ["Core & AI"] },
  { name: "Inngest", icon: <Workflow size={14} className="text-purple-400" />, categories: ["Backend", "DevOps & Tools"] },
  { name: "NumPy", icon: <SiNumpy color="#013243" />, categories: ["Core & AI"] },
  { name: "Pandas", icon: <SiPandas color="#150458" />, categories: ["Core & AI"] },
  { name: "Vitest", icon: <SiVitest color="#FCC72B" />, categories: ["DevOps & Tools"] },
  { name: "Vercel", icon: <SiVercel />, categories: ["DevOps & Tools"] },
  { name: "Postman", icon: <SiPostman color="#FF6C37" />, categories: ["DevOps & Tools", "Backend"] },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [hoveredCategory, setHoveredCategory] = useState<Category | null>(null);

  const currentCategory = hoveredCategory ?? activeCategory;

  // Re-order skills so matching ones slide to the beginning
  const sortedSkills = useMemo(() => {
    if (currentCategory === "All") {
      return SKILLS_LIST;
    }

    const matches: SkillItem[] = [];
    const nonMatches: SkillItem[] = [];

    for (const skill of SKILLS_LIST) {
      if (skill.categories.includes(currentCategory)) {
        matches.push(skill);
      } else {
        nonMatches.push(skill);
      }
    }

    return [...matches, ...nonMatches];
  }, [currentCategory]);

  return (
    <section className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
        <h2 className="text-2xl font-[Instrument_Serif] tracking-wide">
          Skills
        </h2>
        <span className="text-xs text-muted-foreground hidden sm:inline-flex items-center gap-1">
          <Sparkles size={12} className="text-amber-500" />
          Hover or click tags to rearrange
        </span>
      </div>

      {/* Category Tags */}
      <div
        className="flex flex-wrap items-center gap-1.5 sm:gap-2 pb-1"
        onMouseLeave={() => setHoveredCategory(null)}
      >
        {CATEGORIES.map((cat) => {
          const isSelected = currentCategory === cat;
          const isPinned = activeCategory === cat;

          return (
            <button
              key={cat}
              type="button"
              onMouseEnter={() => setHoveredCategory(cat)}
              onClick={() => {
                setActiveCategory((prev) => (prev === cat && cat !== "All" ? "All" : cat));
              }}
              className={`
                px-2.5 py-1 text-xs rounded-lg transition-all duration-200 cursor-pointer
                border select-none
                ${
                  isSelected
                    ? "bg-foreground text-background border-foreground font-medium shadow-xs scale-[1.02]"
                    : "bg-[var(--muted)] text-[var(--graytext)] border-[var(--border)] hover:text-foreground hover:border-foreground/30 hover:scale-[1.02]"
                }
                ${isPinned && !isSelected ? "ring-1 ring-foreground/20" : ""}
              `}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Skills Grid / Tag Cloud with Layout Animation */}
      <motion.div
        layout
        className="flex flex-wrap items-center justify-start gap-2 sm:gap-2.5 min-h-[140px]"
      >
        <AnimatePresence>
          {sortedSkills.map((skill) => {
            const isMatch =
              currentCategory === "All" || skill.categories.includes(currentCategory);

            return (
              <motion.div
                key={skill.name}
                layout
                layoutId={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: isMatch ? 1 : 0.35,
                  scale: isMatch ? 1 : 0.96,
                }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{
                  type: "spring",
                  stiffness: 350,
                  damping: 26,
                  mass: 0.8,
                }}
              >
                <Magnet padding={16} magnetStrength={8}>
                  <span
                    className={`
                      inline-flex items-center gap-1.5 sm:gap-2
                      rounded-lg
                      px-2.5 sm:px-3 py-1.5 sm:py-2
                      text-xs font-medium
                      cursor-pointer
                      transition-all duration-200
                      border
                      ${
                        isMatch
                          ? "bg-[var(--muted)] text-[var(--foreground)] border-[var(--border)] md:hover:bg-[color-mix(in_oklch,var(--muted),white_8%)] dark:md:hover:bg-[color-mix(in_oklch,var(--muted),white_8%)] md:hover:border-foreground/30"
                          : "bg-[var(--muted)]/60 text-muted-foreground border-[var(--border)]/50"
                      }
                    `}
                  >
                    <span className="text-sm shrink-0">{skill.icon}</span>
                    <span className="whitespace-nowrap">{skill.name}</span>
                  </span>
                </Magnet>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
