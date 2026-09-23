import Hero from "./_components/hero";
import OpenSourceContribution from "./_components/contribution";
import GitHubActivity from "./_components/github-activity";
import Skills from "./_components/skill";
import Link from "next/link";
import ProjectCard from "./Projects/projectcard";
import { projects } from "./Projects/projects";
import Footer from "./_components/footer";

export default function Home() {
  const featuredProject1 = projects[0];
  const featuredProject2 = projects[1];

  return (
    <main className="flex flex-col gap-6">
      <Hero />
      <OpenSourceContribution />
      <Skills />
      <GitHubActivity />

      <section>
        <div className="flex items-baseline justify-between mt-4 mb-4">
          <h2 className="text-2xl font-[Instrument_Serif] tracking-wide">
            Projects
          </h2>

          <Link
            href="/Projects"
            className="
              group inline-flex items-center gap-1
              text-sm
              text-muted-foreground
              transition-colors duration-200
              hover:text-foreground
            "
          >
            <span
              className="
                underline underline-offset-4
                decoration-transparent
                transition-colors duration-200
                group-hover:decoration-current
              "
            >
              View all projects
            </span>

            <span
              className="
                transition-transform duration-200
                group-hover:translate-x-1
              "
            >
              →
            </span>
          </Link>
        </div>

        <div className="flex flex-col gap-4">
          <ProjectCard project={featuredProject1} priority={true} />
          <ProjectCard project={featuredProject2} />
        </div>
      </section>

      <Footer />
    </main>
  );
}
