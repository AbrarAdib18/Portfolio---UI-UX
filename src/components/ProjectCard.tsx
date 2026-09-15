import { ArrowUpRight, ExternalLink, Github, Maximize2 } from "lucide-react";
import type { Project } from "../types";
import SafeImage from "./SafeImage";
import Tag from "./Tag";

interface ProjectCardProps {
  project: Project;
  onOpenCaseStudy: (project: Project) => void;
}

export default function ProjectCard({ project, onOpenCaseStudy }: ProjectCardProps) {
  const { title, categoryLabel, description, tags, image, imageAlt, links, status } = project;

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-ink-600 bg-ink-800/50 transition-all duration-300 hover:-translate-y-1.5 hover:border-violet-400/50 hover:shadow-glow">
      <div className="relative aspect-[16/10] overflow-hidden">
        <SafeImage
          src={image}
          alt={imageAlt}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />
        {status && (
          <span className="absolute left-4 top-4 rounded-full border border-ember-500/40 bg-ink-950/80 px-3 py-1 text-xs font-medium text-ember-400 backdrop-blur">
            {status}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="font-mono text-xs uppercase tracking-wide text-violet-400">
          {categoryLabel}
        </p>
        <h3 className="mt-2 font-display text-xl font-semibold text-paper-100">
          {title}
        </h3>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-paper-400">
          {description}
        </p>

        <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${title} tags`}>
          {tags.slice(0, 4).map((tag) => (
            <li key={tag}>
              <Tag>{tag}</Tag>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap items-center gap-3 pt-1">
          <button
            type="button"
            onClick={() => onOpenCaseStudy(project)}
            className="inline-flex items-center gap-1.5 rounded-full bg-violet-500 px-4 py-2 text-xs font-semibold text-ink-950 transition-transform duration-200 group-hover:translate-x-0.5 hover:bg-violet-400 focus-visible:outline-2 focus-visible:outline-violet-300 focus-visible:outline-offset-2"
          >
            View Case Study
            <Maximize2 className="h-3.5 w-3.5" aria-hidden="true" />
          </button>

          {links.live && (
            <a
              href={links.live}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 rounded-full border border-ink-500 px-4 py-2 text-xs font-medium text-paper-200 transition-colors hover:border-violet-400 hover:text-violet-200"
            >
              Live Website
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          )}

          {links.github && (
            <a
              href={links.github}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 rounded-full border border-ink-500 px-4 py-2 text-xs font-medium text-paper-200 transition-colors hover:border-violet-400 hover:text-violet-200"
            >
              <Github className="h-3.5 w-3.5" aria-hidden="true" />
              GitHub
            </a>
          )}

          {links.external && (
            <a
              href={links.external}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 rounded-full border border-ink-500 px-4 py-2 text-xs font-medium text-paper-200 transition-colors hover:border-violet-400 hover:text-violet-200"
            >
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              External Link
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
