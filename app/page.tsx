"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { VscVscode } from "react-icons/vsc";
import {
  SiJavascript,
  SiTypescript,
  SiC,
  SiCplusplus,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNextdotjs,
  SiExpress,
  SiTailwindcss,
  SiReactquery,
  SiFramer,
  SiGreensock,
  SiNodedotjs,
  SiMongodb,
  SiGit,
  SiGithub,
  SiVercel,
  SiPostman,
  SiSupabase,
  SiPrisma,
  SiPostgresql,
} from "react-icons/si";

type Skill = {
  name: string;
  icon: React.ReactNode;
};

type CategoryProps = {
  title: string;
  skills: Skill[];
};

const SkillCategory: React.FC<CategoryProps> = ({ title, skills }) => (
  <div className="mb-10">
    <h3 className="text-graytext text-sm mb-2 font-mono tracking-wide">
      &lt; {title} /&gt;
    </h3>

    <div className="flex flex-wrap gap-3">
      {skills.map((skill) => (
        <span
          key={skill.name}
          className="px-4 py-2 rounded-lg bg-background border border-gray-800 
          text-xs flex items-center gap-2 hover:border-gray-600 transition"
        >
          {skill.icon}
          {skill.name}
        </span>
      ))}
    </div>
  </div>
);

export default function Home() {
  const { theme, systemTheme } = useTheme();
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const current = theme === "system" ? systemTheme : theme;
    setResolvedTheme(current === "dark" ? "dark" : "light");
  }, [theme, systemTheme]);

  // Typing Animation
  useEffect(() => {
    const element = document.getElementById("typing");
    if (!element) return;

    const words = [
      "20, tech nerd.",
      "20, web dev.",
      "20, designer.",
      "20, builder.",
    ];
    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    const type = () => {
      const currentWord = words[wordIndex];
      if (!element) return;

      if (!deleting) {
        element.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentWord.length) {
          deleting = true;
          setTimeout(type, 1200);
          return;
        }
      } else {
        element.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
          deleting = false;
          wordIndex = (wordIndex + 1) % words.length;
        }
      }

      setTimeout(type, deleting ? 60 : 120);
    };

    type();
  }, []);

  return (
    <div className="py-5 tracking-tight leading-relaxed">
      {/* Header */}
      <h1 className="font-serif text-2xl tracking-tight">
        Sup, I'm Himanshu Vishwakarma 👋
      </h1>

      <p className="text-lg mb-6">
        <span id="typing" className="border-r border-gray-500 pr-1"></span>
      </p>

      <hr className="mb-8" />

      {/* About */}
      <h2 className="font-serif text-xl mb-4">About Me</h2>

      <p className="max-w-2xl mb-5">
        I'm a web developer who loves clean UI, smooth interactions, and
        building things that feel effortless to use.
      </p>

      <p className="max-w-2xl mb-5">
        Currently improving my design-engineering skills and crafting minimal,
        thoughtful web experiences using Next.js, Tailwind CSS, and shadcn/ui.
      </p>

      <p className="max-w-2xl mb-8">
        Contact me at{" "}
        <a
          href="mailto:himanshuvkm252@gmail.com"
          className="text-lg underline hover:opacity-80"
        >
          himanshuvkm252@gmail.com
        </a>
        .
      </p>

      <section className="mt-10">
        {/* Heading exactly like screenshot */}
        <h2 className={`text-4xl mb-2  `}>
          Skills{" "}
          <span className="text-gray-500 text-sm tracking-normal font-sans">
            Which I use/know
          </span>
        </h2>

        <p className="text-gray-400 mb-8 max-w-xl">
          These are the technologies I've learned and worked with. This list is
          constantly evolving as I grow as a developer.
        </p>

        {/* LANGUAGES */}
        <SkillCategory
          title="LANGUAGES"
          skills={[
            { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
            { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
            { name: "C", icon: <SiC color="#283593" /> },
            { name: "C++", icon: <SiCplusplus color="#00599C" /> },
            { name: "HTML", icon: <SiHtml5 color="#E44D26" /> },
            { name: "CSS", icon: <SiCss3 color="#264DE4" /> },
          ]}
        />

        {/* FRAMEWORKS */}
        <SkillCategory
          title="FRAMEWORKS / LIBRARIES"
          skills={[
            { name: "React", icon: <SiReact color="#61DBFB" /> },
            { name: "Next.js", icon: <SiNextdotjs /> },
            { name: "Express.js", icon: <SiExpress /> },
            { name: "TailwindCSS", icon: <SiTailwindcss color="#38BDF8" /> },
            { name: "Framer Motion", icon: <SiFramer color="#0055FF" /> },
          ]}
        />

        {/* BACKEND */}
        <SkillCategory
          title="BACKEND & RUNTIME"
          skills={[
            { name: "Node.js", icon: <SiNodedotjs color="#3C873A" /> },
            { name: "REST APIs", icon: <SiExpress /> },
            { name: "Server Actions", icon: <SiNextdotjs /> },
          ]}
        />

        {/* DATABASE */}
        <SkillCategory
          title="DATABASE"
          skills={[
            { name: "MongoDB", icon: <SiMongodb color="#4DB33D" /> },
            { name: "PostgreSQL", icon: <SiPostgresql color="#4169E1" /> },
            { name: "Supabase DB", icon: <SiSupabase color="#3ECF8E" /> },
            { name: "Prisma ORM", icon: <SiPrisma color="#2D3748" /> },
          ]}
        />

        {/* DEVTOOLS */}
        <SkillCategory
          title="DEVELOPER TOOLS"
          skills={[
            { name: "Git", icon: <SiGit color="#F05032" /> },
            { name: "GitHub", icon: <SiGithub /> },
            { name: "VS Code", icon: <VscVscode color="#0078d7" /> },
            { name: "Vercel", icon: <SiVercel /> },
            { name: "Postman", icon: <SiPostman color="#F3702A" /> },
          ]}
        />
      </section>

      {/* GitHub Calendar */}
      <h1 className="font-serif text-2xl tracking-tight mb-6 mt-10">
        GitHub Contributions
      </h1>

      <div className="overflow-x-auto pb-5">
        <GitHubCalendar username="himanshuvkm" colorScheme={resolvedTheme} />
      </div>

      {/* Working On */}
      <h2 className="font-serif text-2xl mb-3 mt-10">What I'm Working On</h2>

      <p className="max-w-2xl mb-10">
        Building small tools, exploring UI animations, and rewriting older
        projects with cleaner code. Learning a little every day.
      </p>
    </div>
  );
}
