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
import Magnet from "@/components/Magnet";

type Skill = { name: string; icon: React.ReactNode };
type CategoryProps = { title: string; skills: Skill[] };

const SkillCategory: React.FC<CategoryProps> = ({ title, skills }) => (

  <div className="mb-6">
    <h3 className="text-sm text-[var(--graytext)] mb-3 tracking-wider font-medium">

      &lt; {title} /&gt;
    </h3>

    <div className="flex flex-wrap gap-3">
      
      {skills.map((skill) => (
        <Magnet padding={50} disabled={false} magnetStrength={8}>


        <span
          className="
      px-3 py-1.5 
    rounded-lg 
    bg-[var(--muted)] 
    border border-[var(--border)]
    text-xs flex items-center gap-2 
    hover:bg-[color-mix(in oklch, var(--muted), black 10%)]
    hover:border-[color-mix(in oklch, var(--border), white 20%)]
    transition-all
    cursor-pointer
    "
        >
          {skill.icon}

          <span className="font-medium">{skill.name}</span>
        </span>
        </Magnet>
      ))}
    </div>
  </div>
);

export default function Skills() {
  return (
    <>
      {/* LANGUAGES */}{" "}
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
      />{" "}
      {/* FRAMEWORKS */}{" "}
      <SkillCategory
        title="FRAMEWORKS / LIBRARIES"
        skills={[
          { name: "React", icon: <SiReact color="#61DBFB" /> },
          { name: "Next.js", icon: <SiNextdotjs /> },
          { name: "Express.js", icon: <SiExpress /> },
          { name: "TailwindCSS", icon: <SiTailwindcss color="#38BDF8" /> },
          { name: "Framer Motion", icon: <SiFramer color="#0055FF" /> },
          { name: "shadcn/ui", icon: <SiTailwindcss color="#ffffff" /> },
        ]}
      />{" "}
      {/* BACKEND */}{" "}
      <SkillCategory
        title="BACKEND & RUNTIME"
        skills={[
          { name: "Node.js", icon: <SiNodedotjs color="#3C873A" /> },
          { name: "REST APIs", icon: <SiExpress /> },
          { name: "Server Actions", icon: <SiNextdotjs /> },
        ]}
      />{" "}
      {/* DATABASE */}{" "}
      <SkillCategory
        title="DATABASE"
        skills={[
          { name: "MongoDB", icon: <SiMongodb color="#4DB33D" /> },
          { name: "PostgreSQL", icon: <SiPostgresql color="#4169E1" /> },
          { name: "Supabase DB", icon: <SiSupabase color="#3ECF8E" /> },
          { name: "Prisma ORM", icon: <SiPrisma color="#2D3748" /> },
        ]}
      />{" "}
      {/* DEVTOOLS */}{" "}
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
    </>
  );
}
