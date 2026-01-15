import fintrackimg from "@/public/fintrack.png";
import incblogimg from "@/public/incblog.png";
import readmeaiimg from "@/public/readmeai.png";
import chatimg from "@/public/retrochat.jpg";
import housetrialimg from "@/public/got.png";

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
    emoji: "🚀",
    title: "INcBlog (Tech Blogging Platform)",
    link: "https://github.com/himanshuvkm/IncBlog1",
    demo: "https://inc-blog1.vercel.app",
    image: incblogimg,
    category: "Full Stack | Personal",
    description:
      "A community-driven platform where tech enthusiasts share their journeys, insights, and lessons. Features intuitive content creation, profiles, Blog pages, authentication, and a modern UI.",
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
    emoji: "🐉",
    title: "House_Trial (A Fun Web Experience)",
    link: "https://github.com/himanshuvkm/GOT-House",
    demo: "https://got-house.vercel.app",
    image: housetrialimg,
    category: "Frontend + AI | Interactive Experience",
    description:
      "A cinematic Game of Thrones–style personality experience where users answer dramatic questions and are assigned a House by an AI based on psychological traits. Includes a shareable medieval result card with house sigils and mottos.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Gemini AI",
      "html2canvas",
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
    emoji: "💬",
    title: "Retro_Chat",
    link: "https://github.com/himanshuvkm/ChatApplication",
    demo: "https://retrochat-beta.vercel.app",
    image: chatimg,
    category: "Frontend + Backend | MERN",
    description:
      "A retro-UI chat platform built with Socket.IO and JWT auth, featuring real-time chat, online users, protected routes, editable messages, image sharing, and emoji reactions.",
    tech: ["React", "Tailwind", "Node.js", "Express", "MongoDB", "Socket.IO"],
  },
];
