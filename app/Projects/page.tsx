import type { Metadata } from "next";
import Footer from "../_components/footer";
import ProjectCard, { Project } from "./projectcard";
import { projects } from "./projects";

export const metadata: Metadata = {
  title: "Featured Projects & Case Studies",
  description: "Explore the portfolio of full-stack developer Himanshu Vishwakarma. View projects built with Next.js, React, TypeScript, Tailwind CSS, Node.js, and Prisma.",
};

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Projects() {
  return (
    <div className="py-4 sm:py-8 tracking-tight leading-relaxed">
      <div className="mb-6 flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors group"
        >
          <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
          <span>Home</span>
        </Link>
      </div>

      <h1 className="text-3xl sm:text-4xl font-[Instrument_Serif] tracking-wide text-center mb-6 sm:mb-8">
        Projects
      </h1>

      <div className="space-y-6 sm:space-y-8">
        {projects.map((project: Project) => (
          <ProjectCard key={project.title} project={project} titleAs="h2" />
        ))}
      </div>
      <Footer />
    </div>
  );
}
