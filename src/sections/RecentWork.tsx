import { ArrowUpRight } from "lucide-react";
import { recentWork } from "../data/portfolio";
import Reveal from "../components/Reveal";
import SafeImage from "../components/SafeImage";
import SectionHeading from "../components/SectionHeading";

export default function RecentWork() {
  return (
    <section id="recent-work" aria-label="Recent work" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Recent Work"
          title="The latest things I've shipped."
          description="A quick look at what I've been building lately — see the Featured Work section below for full case studies."
        />

        <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {recentWork.map((project, index) => {
            const projectUrl = project.links.live || project.links.github || project.links.external;
            return (
              <Reveal as="li" key={project.slug} delay={Math.min(index * 0.07, 0.28)} className="h-full">
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink-600 bg-ink-800/50 transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.02] hover:border-violet-400/50 hover:shadow-glow">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <SafeImage
                      src={project.image}
                      alt={project.imageAlt}
                      className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-display text-lg font-semibold text-paper-100">
                      {project.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-paper-400">
                      {project.shortDescription ?? project.description}
                    </p>

                    {projectUrl ? (
                      <a
                        href={projectUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="mt-4 inline-flex items-center gap-1.5 self-start rounded-full bg-violet-500 px-4 py-2 text-xs font-semibold text-ink-950 transition-colors duration-200 hover:bg-violet-400 focus-visible:outline-2 focus-visible:outline-violet-300 focus-visible:outline-offset-2"
                      >
                        View Project
                        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </a>
                    ) : (
                      <span className="mt-4 inline-flex self-start rounded-full border border-ink-500 px-4 py-2 text-xs font-medium text-paper-500">
                        Link coming soon
                      </span>
                    )}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
