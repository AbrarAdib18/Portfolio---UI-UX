import { ArrowUpRight, ExternalLink, Github, Trophy } from "lucide-react";
import type { Project } from "../types";
import SafeImage from "./SafeImage";
import Tag from "./Tag";

interface ProjectDetailProps {
  project: Project;
  titleId: string;
}

export default function ProjectDetail({ project, titleId }: ProjectDetailProps) {
  const { title, categoryLabel, description, achievement, features, tags, image, imageAlt, links, status } =
    project;

  return (
    <div>
      <div className="overflow-hidden rounded-2xl border border-ink-600">
        <SafeImage src={image} alt={imageAlt} className="h-56 w-full object-cover sm:h-72" />
      </div>

      <p className="mt-6 font-mono text-xs uppercase tracking-wide text-violet-400">
        {categoryLabel}
      </p>
      <h3 id={titleId} className="mt-2 font-display text-2xl font-semibold text-paper-100 sm:text-3xl">
        {title}
      </h3>

      {status && (
        <span className="mt-3 inline-flex rounded-full border border-ember-500/40 bg-ember-500/10 px-3 py-1 text-xs font-medium text-ember-400">
          {status}
        </span>
      )}

      <p className="mt-4 leading-relaxed text-paper-300">{description}</p>

      {achievement && (
        <div className="mt-5 flex items-start gap-3 rounded-xl border border-ember-500/30 bg-ember-500/10 p-4">
          <Trophy className="mt-0.5 h-5 w-5 shrink-0 text-ember-400" aria-hidden="true" />
          <p className="text-sm leading-relaxed text-ember-200">{achievement}</p>
        </div>
      )}

      {features && features.length > 0 && (
        <div className="mt-6">
          <p className="text-sm font-medium uppercase tracking-[0.15em] text-paper-500">
            Key areas
          </p>
          <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {features.map((feature) => (
              <li
                key={feature}
                className="rounded-lg border border-ink-600 bg-ink-800/60 px-3 py-2 text-sm text-paper-300"
              >
                {feature}
              </li>
            ))}
          </ul>
        </div>
      )}

      <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${title} technology tags`}>
        {tags.map((tag) => (
          <li key={tag}>
            <Tag variant="accent">{tag}</Tag>
          </li>
        ))}
      </ul>

      <div className="mt-7 flex flex-wrap gap-3 border-t border-ink-700 pt-6">
        {links.live && (
          <a
            href={links.live}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-1.5 rounded-full bg-violet-500 px-4 py-2 text-xs font-semibold text-ink-950 hover:bg-violet-400"
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
            className="inline-flex items-center gap-1.5 rounded-full border border-ink-500 px-4 py-2 text-xs font-medium text-paper-200 hover:border-violet-400 hover:text-violet-200"
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
            className="inline-flex items-center gap-1.5 rounded-full border border-ink-500 px-4 py-2 text-xs font-medium text-paper-200 hover:border-violet-400 hover:text-violet-200"
          >
            <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            External Link
          </a>
        )}
        {!links.live && !links.github && !links.external && (
          <p className="text-sm text-paper-500">
            No public link is available for this project yet.
          </p>
        )}
      </div>
    </div>
  );
}
