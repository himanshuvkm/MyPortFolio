"use client";

import Image from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export interface Project {
  image: string;
  title: string;
  demo: string;
  link: string;
  description: string;
  tech: string[];
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
   <div
  className="
    group                    /* 👈 IMPORTANT: enables group-hover */
    flex flex-col md:flex-row gap-6
    p-4 rounded-xl border border-gray-800 bg-[#0a0a0a]
    transition-all duration-500
    hover:bg-[#111]
    hover:scale-[1.015]
    hover:shadow-[0_0_35px_rgba(138,43,226,0.25)]
   
  "
>
      {/* Left Image */}
 <div
  className="
    relative w-full md:w-1/2 aspect-video overflow-hidden 
    rounded-lg border border-gray-800
    transition-all duration-500
    group-hover:border-purple-500/40
    group-hover:shadow-[0_0_25px_rgba(138,43,226,0.35)]
  "
>
  <Image
    src={project.image}
    alt={project.title}
    fill
    placeholder="blur"
    className="
      object-cover rounded-lg 
      transition-all duration-500 ease-out
      group-hover:scale-105
      group-hover:brightness-110
    "
  />
</div>


      {/* Right Content */}
      <div className="flex flex-col md:w-1/2">
        {/* Title + Buttons */}
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            {project.title}
           
          </h2>

          <div className="flex items-center gap-3">
            {/* LIVE BUTTON */}
            <a
              href={project.demo}
              target="_blank"
              className="
                px-3 py-1 text-xs rounded-md bg-gray-800 border border-gray-700
                hover:bg-gray-700 transition
              "
            >
              <FaExternalLinkAlt />
            </a>

            {/* GITHUB BUTTON */}
            <a
              href={project.link}
              target="_blank"
              className="
                px-3 py-1 flex items-center gap-1 text-xs rounded-md
                bg-gray-800 border border-gray-700 hover:bg-gray-700 transition
              "
            >
              <FaGithub size={16} />
            </a>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-xs mb-3">{project.description}</p>

        <p className="text-gray-400 text-xs font-semibold mb-2">
          Technologies Used:
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="
                px-3 py-1 text-xs rounded-md
                bg-gray-800 border border-gray-700
              "
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
