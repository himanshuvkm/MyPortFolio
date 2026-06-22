import type { Metadata } from "next";
import Footer from "../_components/footer";
import ProjectCard, { Project } from "./projectcard";
import { projects } from "./projects";

export const metadata: Metadata = {
  title: "Featured Projects & Case Studies",
  description: "Explore the portfolio of full-stack developer Himanshu Vishwakarma. View projects built with Next.js, React, TypeScript, Tailwind CSS, Node.js, and Prisma.",
};

export default function Projects() {
  return (
    <div className="py-10 mt-5 tracking-tight leading-relaxed">
      <h1 className="text-4xl font-[Instrument_Serif] tracking-wide text-center mb-4 ">
        Projects
      </h1>

      <div className="space-y-10">
        {projects.map((project: Project) => (
          <ProjectCard key={project.title} project={project} titleAs="h2" />
        ))}
      </div>
      <Footer />
    </div>
  );
}
