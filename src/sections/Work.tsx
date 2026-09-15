import { useMemo, useState } from "react";
import { projects } from "../data/portfolio";
import type { FilterCategory, Project } from "../types";
import Modal from "../components/Modal";
import ProjectCard from "../components/ProjectCard";
import ProjectDetail from "../components/ProjectDetail";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { cn } from "../lib/utils";

export default function Work() {
  const availableCategories = useMemo(() => {
    const set = new Set<FilterCategory>();
    projects.forEach((project) => project.filterCategories.forEach((cat) => set.add(cat)));
    return Array.from(set);
  }, []);

  const [activeFilter, setActiveFilter] = useState<FilterCategory | "All">("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.filterCategories.includes(activeFilter));

  return (
    <section id="work" aria-label="Featured work" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Featured Work"
            title="Projects across robotics, software, and design."
            description="A selection of the platforms and systems I've built or contributed to — spanning full-stack development, machine learning, and hardware."
          />
        </div>

        <div
          className="mt-10 flex flex-wrap gap-2"
          role="group"
          aria-label="Filter projects by category"
        >
          {(["All", ...availableCategories] as const).map((category) => {
            const isActive = activeFilter === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveFilter(category)}
                aria-pressed={isActive}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "border-violet-400 bg-violet-500/15 text-violet-200"
                    : "border-ink-600 text-paper-400 hover:border-ink-500 hover:text-paper-100"
                )}
              >
                {category}
              </button>
            );
          })}
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <Reveal as="li" key={project.slug} delay={Math.min(index * 0.08, 0.32)}>
              <ProjectCard project={project} onOpenCaseStudy={setSelectedProject} />
            </Reveal>
          ))}
        </ul>
      </div>

      <Modal
        open={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
        titleId="project-detail-title"
      >
        {selectedProject && (
          <ProjectDetail project={selectedProject} titleId="project-detail-title" />
        )}
      </Modal>
    </section>
  );
}
