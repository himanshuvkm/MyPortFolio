"use client";

import Footer from "../_components/footer";
import ProjectCard from "./projectcard"
import { projects } from "./projects";


export default function Projects() {

  return (
    <div className="py-10 mt-5 tracking-tight leading-relaxed">
            <h1 className="text-4xl font-[Instrument_Serif] tracking-wide text-center mb-4 ">Projects</h1>


    <div className="space-y-10">
  {projects.map((project: any) => (
    <ProjectCard key={project.title} project={project} />
  ))}
</div>
       <Footer />
    </div>
  );
}
