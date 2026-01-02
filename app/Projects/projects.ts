import fintrackimg from "@/public/fintrack.png";
import incblogimg from "@/public/incblog.png";
import readmeaiimg from "@/public/readmeai.png";
import chatimg from "@/public/image.png";

export const projects = [
  {
    emoji: "💸",
    title: "FinTrack (AI Personal Finance App)",
    link: "https://github.com/himanshuvkm/FinTrack",
    demo: "https://fintrack-nine-wine.vercel.app",
    image: fintrackimg,
    category: "Full Stack | Personal",
    description:
      "An AI-powered personal finance tool for tracking expenses, budgets, automations, monthly insights, and dashboards with charts. Integrated with Clerk, Supabase, Prisma, Gemini AI, and Inngest.",
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
