import { GraduationCap } from "lucide-react";
import { education } from "../data/portfolio";
import Reveal from "../components/Reveal";
import SafeImage from "../components/SafeImage";
import SectionHeading from "../components/SectionHeading";

export default function Education() {
  return (
    <section id="education" aria-label="Education" className="py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <SectionHeading eyebrow="Education" title="Academic background." />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {education.map((item, index) => (
            <Reveal key={item.id} delay={Math.min(index * 0.08, 0.24)}>
              <div className="flex h-full flex-col rounded-2xl border border-ink-600 bg-ink-800/50 p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-ink-500 bg-white p-2 shadow-card">
                  {item.logo ? (
                    <SafeImage
                      src={item.logo}
                      alt=""
                      className="h-full w-full object-contain"
                    />
                  ) : (
                    <GraduationCap className="h-5 w-5 text-violet-600" />
                  )}
                </span>

                <h3 className="mt-4 font-display text-base font-semibold text-paper-100">
                  {item.institution}
                </h3>
                <p className="mt-1 font-mono text-xs uppercase tracking-wide text-violet-400">
                  {item.dateRange}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-paper-400">
                  {item.credential}
                  {item.inProgress && (
                    <span className="ml-1.5 rounded-full border border-ember-500/40 bg-ember-500/10 px-2 py-0.5 text-[0.65rem] font-medium uppercase tracking-wide text-ember-400">
                      In progress
                    </span>
                  )}
                </p>
                {item.detail && (
                  <p className="mt-2 text-sm text-paper-500">{item.detail}</p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
