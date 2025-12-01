import { FaGithub } from "react-icons/fa";
import {
  HoverCard,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import ProjectHoverCard from "./hovercard";
import fintrackimg from  "@/public/fintrack.png" ;
import incblogimg  from"@/public/incblog.png";
import  readmeaiimg  from "@/public/readmeai.png";
import  chatimg  from "@/public/image.png";
export default function Projects() {
  const projects = [
    {
      emoji: "📄",
      title: "ReadmeAi (AI README Generator)",
      link: "https://github.com/himanshuvkm/ReadmeAi",
      demo: "https://readmegen-pz8j.vercel.app/",
      image: readmeaiimg, 
      category: "Frontend + Backend",
      description:
        "A GitHub OAuth-powered tool that generates beautiful, structured READMEs using Gemini AI. Includes repo selection, templates, collaboration options, and automatic markdown formatting.",
      tech: ["React", "Node.js", "Express", "GitHub OAuth", "Gemini AI", "Vite"],
    },
    {
      emoji: "💸",
      title: "FinTrack (AI Personal Finance App)",
      link: "https://github.com/himanshuvkm/FinTrack",
      demo: "https://fintrack-nine-wine.vercel.app",
      image: fintrackimg,
      category: "Full Stack | Personal",
      description:
        "An AI-powered personal finance tool for tracking expenses, budgets, automations, monthly insights, and dashboards with charts. Integrated with Clerk, Supabase, Gemini AI, and Inngest.",
      tech: [
        "Next.js",
        "React",
        "Supabase",
        "Prisma",
        "Tailwind",
        "shadcn/ui",
        "Clerk",
        "Gemini AI",
        "Inngest",
      ],
    },
    {
      emoji: "🚀",
      title: "INcBlog (Tech Blogging Platform)",
      link: "https://github.com/himanshuvkm/IncBlog1",
      demo: "https://inc-blog1.vercel.app",
      image: incblogimg,
      category: "Full Stack | Personal",
      description:
        "A community-driven platform where founders and startup enthusiasts share their journeys, insights, and lessons. Features intuitive content creation, profiles, startup pages, authentication, and a modern UI.",
      tech: [
        "Next.js",
        "TypeScript",
        "Tailwind",
        "shadcn/ui",
        "Prisma",
        "NextAuth",
        "Sentry",
      ],
    },
    {
      emoji: "💬",
      title: "Real-Time Chat Application",
      link: "https://github.com/himanshuvkm/ChatApplication",
      demo: "https://chatapplication-8385.onrender.com",
      image: chatimg,
      category: "Frontend + Backend | MERN",
      description:
        "A real-time chat app with Socket.IO, JWT auth, online/offline status, protected routes, and responsive UI. Supports instant messaging and user presence tracking.",
      tech: ["React", "Tailwind", "Node.js", "Express", "MongoDB", "Socket.IO"],
    },
  ];

  return (
    <div className="py-10 tracking-tight leading-relaxed">
      <h1 className="text-3xl font-serif mb-10">Projects 🚀</h1>

      {projects.map((p) => (
        <HoverCard key={p.title}>
          <HoverCardTrigger asChild>
            <div className="mb-10 cursor-default">
              {/* Title + GitHub icon */}
              <div className="flex items-center gap-3 mb-2">
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-semibold flex items-center gap-2 hover:opacity-80 "
                >
                
                  <span>{p.title}</span>
                </a>

                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-60 hover:opacity-100 transition"
                >
                  <FaGithub size={18} />
                </a>
              </div>

              {/* Category */}
              <p className="text-sm  mb-3">{p.category}</p>

              {/* Description */}
              <p className="max-w-2xl mb-4">{p.description}</p>

              {/* Tech pills */}
              <div className="flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 border border-gray-700 rounded-full text-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <hr className="my-8 border-gray-800" />
            </div>
          </HoverCardTrigger>

          <ProjectHoverCard
            demo={p.demo}
            repo={p.link}
            image={p.image}
            title={p.title}
          />
        </HoverCard>
      ))}
    </div>
  );
}
