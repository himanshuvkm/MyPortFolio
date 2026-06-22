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
  SiFramer,
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

import Magnet from "@/components/Magnet";

const skills = [
  { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
  { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
  { name: "C", icon: <SiC color="#283593" /> },
  { name: "C++", icon: <SiCplusplus color="#00599C" /> },
  { name: "HTML", icon: <SiHtml5 color="#E44D26" /> },
  { name: "CSS", icon: <SiCss3 color="#264DE4" /> },

  { name: "React", icon: <SiReact color="#61DBFB" /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "Node.js", icon: <SiNodedotjs color="#3C873A" /> },

  { name: "Tailwind CSS", icon: <SiTailwindcss color="#38BDF8" /> },
  { name: "Framer Motion", icon: <SiFramer color="#0055FF" /> },
  { name: "shadcn/ui", icon: <SiTailwindcss /> },

  { name: "MongoDB", icon: <SiMongodb color="#4DB33D" /> },
  { name: "PostgreSQL", icon: <SiPostgresql color="#4169E1" /> },
  { name: "Supabase", icon: <SiSupabase color="#3ECF8E" /> },
  { name: "Prisma", icon: <SiPrisma color="#2D3748" /> },

  { name: "Git", icon: <SiGit color="#F05032" /> },
  { name: "GitHub", icon: <SiGithub /> },
  { name: "VS Code", icon: <VscVscode color="#0078d7" /> },
  { name: "Vercel", icon: <SiVercel /> },
  { name: "Postman", icon: <SiPostman color="#F3702A" /> },
];

export default function Skills() {
  return (
    <section>
      <h2 className="text-2xl font-[Instrument_Serif] tracking-wide mb-4 pb-4">
        Skills
      </h2>

      <div className="flex flex-wrap justify-center sm:justify-start gap-3 mb-4">
        {skills.map((skill) => (
          <Magnet
            key={skill.name}
            padding={24}          // ↓ reduced for mobile
            magnetStrength={10}
          >
            <span
              className="
                flex items-center gap-2
                rounded-lg
                border border-[var(--border)]
                bg-[var(--muted)]
                px-3 py-2
                text-xs font-medium
                cursor-pointer
                transition-all
                md:hover:bg-[color-mix(in oklch, var(--muted), black 10%)]
                md:hover:border-[color-mix(in oklch, var(--border), white 20%)]
              "
            >
              {skill.icon}
              {skill.name}
            </span>
          </Magnet>
        ))}
      </div>
    </section>
  );
}
