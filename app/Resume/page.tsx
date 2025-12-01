import { Button } from "@/components/ui/button";

export default function Resume() {
  return (
    <div className="py-10 tracking-tight leading-relaxed max-w-3xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-3xl font-serif">My Resume </h1>

        <Button
          variant="outline"
          asChild
          className="px-4 py-2 border rounded-md hover:bg-gray-200"
        >
          <a href="/resume.pdf" download>
           Print / Download 
          </a>
        </Button>
      </div>

  
      <section className="mb-10">
        <h2 className="text-xl font-serif mb-3">Summary</h2>
        <p className="max-w-2xl">
          Full Stack Developer skilled in building scalable web applications,
          creating clean UI/UX experiences, and delivering high-impact
          solutions. Passionate about learning, mentoring, and building products
          that help people. Experienced in both frontend and backend development
          with modern frameworks and tools.
        </p>
      </section>

      {/* Work Experience */}
      <section className="mb-12">
        <h2 className="text-xl font-serif mb-5">Work Experience</h2>

        {/* Job Item Template */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            ReadmeAi — AI Documentation Tool
          </h3>
          <p className="text-sm  mb-2">Creator | 2024 – Present | Remote</p>
          <p className="mb-2">
            Built an AI-powered README generator using Gemini + GitHub OAuth.
            Helps developers generate clean, professional documentation in
            minutes.
          </p>

          <p className="text-sm mb-2">Tech:</p>
          <div className="flex flex-wrap gap-2 mb-3 text-sm">
            {[
              "React",
              "Vite",
              "Node.js",
              "Express",
              "GitHub OAuth",
              "Gemini API",
            ].map((t) => (
              <span
                key={t}
                className="px-3 py-1 border border-gray-700 rounded-full"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            INcBlog — Tech Blogging Platform
          </h3>
          <p className="text-sm  mb-2">Creator | 2024 – Present | Remote</p>
          <p className="mb-2">
            A community-driven content platform where users can write, explore,
            and engage with tech blogs. Focus on UX, performance, and clean
            design.
          </p>

          <p className="text-sm mb-2">Tech:</p>
          <div className="flex flex-wrap gap-2 mb-3 text-sm">
            {[
              "Next.js",
              "TypeScript",
              "Prisma",
              "NextAuth",
              "Tailwind CSS",
              "shadcn/ui",
            ].map((t) => (
              <span
                key={t}
                className="px-3 py-1 border border-gray-700 rounded-full"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            Real-Time Chat Application
          </h3>
          <p className="text-sm  mb-2">Developer | 2023 – 2024 | Remote</p>
          <p className="mb-2">
            Built a real-time chat app with Socket.IO, user authentication, and
            live online/offline status. Fully responsive UI with secure APIs.
          </p>

          <p className="text-sm mb-2">Tech:</p>
          <div className="flex flex-wrap gap-2 mb-3 text-sm">
            {[
              "React",
              "Node.js",
              "MongoDB",
              "Express",
              "Socket.IO",
              "Tailwind",
            ].map((t) => (
              <span
                key={t}
                className="px-3 py-1 border border-gray-700 rounded-full"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            FinTrack — AI Finance Manager
          </h3>
          <p className="text-sm  mb-2">Creator | 2024 – Present | Remote</p>
          <p className="mb-2">
            AI-powered personal finance app with budgeting, analytics, charts,
            recurring transactions, and monthly insights powered by Gemini.
          </p>

          <p className="text-sm mb-2">Tech:</p>
          <div className="flex flex-wrap gap-2 mb-3 text-sm">
            {[
              "Next.js",
              "Supabase",
              "Prisma",
              "Clerk",
              "Tailwind",
              "shadcn/ui",
              "Gemini AI",
            ].map((t) => (
              <span
                key={t}
                className="px-3 py-1 border border-gray-700 rounded-full"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="mb-12">
        <h2 className="text-xl font-serif mb-3">Education</h2>

        <div className="mb-5">
          <h3 className="font-semibold">
            Maharaja Agrasen Institute of Technology
          </h3>
          <p className="text-sm ">B.Tech CSE | 2024 – Present | Delhi, India</p>
        </div>
      </section>
    </div>
  );
}
