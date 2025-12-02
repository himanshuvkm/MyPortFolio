"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";

export default function Home() {
  const { theme, systemTheme } = useTheme();

 
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light");


  useEffect(() => {
    const current = theme === "system" ? systemTheme : theme;
    setResolvedTheme(current === "dark" ? "dark" : "light");
  }, [theme, systemTheme]);

 
  useEffect(() => {
    const element = document.getElementById("typing");
    if (!element) return;

    const words = ["20, tech nerd.", "20, web dev.", "20, designer.", "20, builder."];
    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function type() {
      const currentWord = words[wordIndex];
    if(!element)return;
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
    }

    type();
  }, []);

  return (
    <div className="py-5 tracking-tight leading-relaxed">
      <h1 className="font-serif text-2xl tracking-tight">
        Sup, I'm Himanshu Vishwakarma 👋
      </h1>

      <p className="text-lg mb-6">
        <span id="typing" className="border-r border-gray-500 pr-1"></span>
      </p>

      <hr className="mb-8" />

      <h2 className="font-serif text-xl mb-4">About Me</h2>

      <p className="max-w-2xl mb-5">
        I'm a web developer who loves clean UI, smooth interactions, and building things
        that feel effortless to use. I enjoy taking ideas and turning them into simple,
        functional, and visually pleasing interfaces.
      </p>

      <p className="max-w-2xl mb-5">
        Right now, I'm focused on improving my design-engineering skills — exploring
        better ways to craft minimal, thoughtful web experiences using tools like Next.js,
        Tailwind CSS and shadcn/ui.
      </p>

      <p className="max-w-2xl mb-8">
        You’ll usually find me experimenting with side-projects, learning new frameworks,
        or polishing UI components at 2 AM.  
        If you want to reach out, email me at{" "}
        <a  href="mailto:himanshuvkm252@gmail.com"
          className="text-lg underline  hover:opacity-80">
          himanshuvkm252@gmail.com
        </a>.
      </p>

      {/* Skills */}
      <h2 className="font-sans text-xl mb-3">Skills</h2>

      <div className="flex flex-wrap gap-3 text-sm mb-6">
        {[
          "React", "Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui",
          "Node.js", "Prisma", "Supabase", "UI/UX Design",
          "MongoDB", "Figma", "Framer Motion"
        ].map(skill => (
          <span key={skill} className="px-3 py-1 border border-gray-700 rounded-full">
            {skill}
          </span>
        ))}
      </div>

      <hr className="my-6" />

      <h1 className="font-serif text-2xl tracking-tight mb-6">
        GitHub Contributions
      </h1>

      <div className="overflow-x-auto pb-5">
        <GitHubCalendar
          username="himanshuvkm"
          colorScheme={resolvedTheme}   // ⭐ updates based on theme
        />
      </div>

      <h2 className="font-serif text-2xl mb-3 mt-10">What I'm Working On</h2>

       <p className="max-w-2xl mb-10">
        Currently building small tools, exploring UI animations, and rewriting older
        projects with cleaner code. I'm also experimenting with design systems, working
        on personal side-projects, and slowly getting deeper into Web3 development.
        Learning a little every day.
      </p>
    </div>
  );
}

