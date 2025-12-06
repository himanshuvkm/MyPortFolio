"use client";

import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import { useTheme } from "next-themes";
import logo from "@/public/logome.png";
import Image from "next/image";
import { IoLocationOutline, IoLogoLinkedin } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";
import { Mail, MailsIcon } from "lucide-react";
import { GitHubCalendar } from "react-github-calendar";
import Skills from "./_components/skill";

function Home() {
  const { resolvedTheme } = useTheme();
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-10">
        <div>
          <p className="text-gray-400 text-sm flex items-center gap-1">
            Hey it's me 👋
          </p>
          <h1 className="text-4xl font-semibold mt-1">Himanshu Vishwakarma</h1>
          <span className="inline-block bg-green-600/20 text-green-400 text-xs px-3 py-1 rounded-full mt-2">
            ● Open to Work
          </span>

          <p className="text-sm text-gray-400 mt-3 flex items-center gap-3">
            <span className="flex items-center gap-1">
              <IoLocationOutline /> <span id="localTime">Delhi, India</span>
            </span>
            <span className="flex items-center gap-1">
              <FaRegClock />{" "}
              <span id="localTime">{format(currentTime, "hh:mm:ss a")}</span>
            </span>
          </p>

          <p className="mt-6 max-w-xl leading-relaxed">
            Yup! I'm a{" "}
            <span className="font-semibold">Full Stack Developer.</span> I love
            building clean UIs, smooth interactions, and solving problems. I
            enjoy crafting websites with
            <span className="font-semibold"> React</span>,
            <span className="font-semibold"> TypeScript</span>,
            <span className="font-semibold"> Express</span>, and backend systems
            using
            <span className="font-semibold"> MongoDB</span> &{" "}
            <span className="font-semibold">PostgreSQL</span>.
          </p>

          <p className="mt-4 max-w-xl leading-relaxed">
            I love both{" "}
            <span className="font-semibold">development & design.</span>
            That means I enjoy creating interfaces that look clean and feel
            effortless. Always learning, building, and improving.
          </p>

          <div className="flex items-center gap-4 mt-6">
            {/* Email Button */}
            <Button
              className="
      group relative flex items-center gap-3
      px-8 py-3
      rounded-lg
      bg-[var(--muted)]
      text-[var(--foreground)]
      border border-[var(--border)]
      transition-all
      active:scale-95
      hover:scale-105
      hover:bg-[color-mix(in oklch, var(--muted), black 10%)]
    "
            >
              <MailsIcon
                className="
        w-5 h-5 
        transition-all 
        group-hover:-translate-x-0.5 
        group-hover:scale-110
      "
              />
              <span className="transition-all group-hover:translate-x-0.5">
                Email
              </span>
            </Button>

            {/* LinkedIn Button */}
            <Button
              className="
      group relative flex items-center gap-3
      px-8 py-3
      rounded-lg
      bg-[var(--muted)]
      text-[var(--foreground)]
      border border-[var(--border)]
      transition-all
      active:scale-95
      hover:scale-105
      hover:bg-[color-mix(in oklch, var(--muted), black 10%)]
    "
            >
              <IoLogoLinkedin className="w-5 h-5 transition-all group-hover:scale-110" />

              <span className="transition-all group-hover:translate-x-0.5">
                LinkedIn
              </span>
            </Button>
          </div>
        </div>

        {/* RIGHT SIDE — Avatar */}
        <div className="mt-8 md:mt-0">
          <Image
            src={logo}
            alt="Avatar"
            className="w-32 h-32 rounded-xl border border-gray-700 object-cover"
          />
        </div>
      </div>
      <div className="mb-10">
        <span className="px-3 py-1 text-xs bg-gray-800 border border-gray-700 rounded-md font-mono text-gray-300">
          Skills & Expertise
        </span>

        <h2 className="text-xl font-semibold mt-3">
          Things I’ve Learnt <span className="text-gray-500">& I Know</span>
        </h2>
      </div>
      <Skills />
      <h1 className="font-serif text-2xl tracking-tight mb-6 mt-10">
        {" "}
        GitHub Contributions{" "}
      </h1>{" "}
      <div className="overflow-x-auto pb-5">
        {" "}
        <GitHubCalendar
          username="himanshuvkm"
          colorScheme={resolvedTheme === "dark" ? "dark" : "light"}
        />{" "}
      </div>
    </>
  );
}

export default Home;
