import { Briefcase } from "lucide-react";
import { experience } from "../data/portfolio";
import Reveal from "../components/Reveal";
import SafeImage from "../components/SafeImage";
import SectionHeading from "../components/SectionHeading";
import Tag from "../components/Tag";

export default function Experience() {
  return (
    <section id="experience" aria-label="Experience timeline" className="py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've spent my time and effort."
        />

        <ol className="relative mt-14 border-l border-ink-600 pl-8 sm:pl-10">
          {experience.map((item, index) => (
            <Reveal as="li" key={item.id} delay={Math.min(index * 0.08, 0.3)} className="relative pb-12 last:pb-0">
              <span
                className="absolute -left-[2.65rem] flex h-10 w-10 items-center justify-center rounded-full border border-ink-500 bg-white p-1.5 shadow-card sm:-left-[3.15rem]"
                aria-hidden="true"
              >
                {item.logo ? (
                  <SafeImage
                    src={item.logo}
                    alt=""
                    className="h-full w-full object-contain"
                  />
                ) : (
                  <Briefcase className="h-4 w-4 text-violet-600" />
                )}
              </span>

              <div className="rounded-2xl border border-ink-600 bg-ink-800/50 p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-display text-lg font-semibold text-paper-100">
                    {item.role} · {item.organization}
                  </h3>
                  <span className="font-mono text-xs uppercase tracking-wide text-violet-400">
                    {item.dateRange}
                  </span>
                </div>

                <p className="mt-3 leading-relaxed text-paper-400">{item.description}</p>

                <ul className="mt-4 flex flex-wrap gap-2" aria-label={`Skills relevant to ${item.role}`}>
                  {item.skills.map((skill) => (
                    <li key={skill}>
                      <Tag>{skill}</Tag>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
