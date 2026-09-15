import { affiliatedOrgs } from "../data/portfolio";
import Reveal from "../components/Reveal";
import SafeImage from "../components/SafeImage";
import SectionHeading from "../components/SectionHeading";

export default function Organizations() {
  return (
    <section id="organizations" aria-label="Organizations and communities" className="py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Organizations & Communities"
          title="Teams and communities I've been part of."
          description="Organizations, teams, and platforms I've contributed to or collaborated with."
        />

        <ul className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-4 sm:gap-6">
          {affiliatedOrgs.map((org, index) => (
            <Reveal as="li" key={org.id} delay={Math.min(index * 0.05, 0.3)}>
              <div className="group flex flex-col items-center gap-4 rounded-2xl border border-ink-600 bg-ink-800/50 p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/40 hover:shadow-glow">
                <span className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-white p-3.5 shadow-card transition-transform duration-300 group-hover:scale-105 sm:h-28 sm:w-28">
                  <SafeImage
                    src={org.logo}
                    alt={org.logoAlt}
                    className="h-full w-full object-contain"
                  />
                </span>
                <span className="text-xs font-medium leading-tight text-paper-300 sm:text-sm">
                  {org.name}
                </span>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
