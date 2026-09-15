import { Award } from "lucide-react";
import { achievements } from "../data/portfolio";
import Reveal from "../components/Reveal";
import SafeImage from "../components/SafeImage";
import SectionHeading from "../components/SectionHeading";

export default function Achievements() {
  return (
    <section id="achievements" aria-label="Achievements" className="py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading eyebrow="Achievements" title="Recognitions along the way." />

        <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {achievements.map((achievement, index) => (
            <Reveal as="li" key={achievement.id} delay={Math.min(index * 0.08, 0.28)}>
              <div className="flex h-full items-start gap-4 rounded-2xl border border-ink-600 bg-ink-800/50 p-6 transition-colors hover:border-ember-500/40">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-ink-500 bg-white p-2 shadow-card">
                  {achievement.logo ? (
                    <SafeImage
                      src={achievement.logo}
                      alt={achievement.logoAlt ?? ""}
                      className="h-full w-full object-contain"
                    />
                  ) : (
                    <Award className="h-6 w-6 text-ember-600" aria-hidden="true" />
                  )}
                </span>
                <div>
                  <p className="leading-relaxed text-paper-200">{achievement.title}</p>
                  {achievement.organization && (
                    <p className="mt-2 font-mono text-xs uppercase tracking-wide text-paper-500">
                      {achievement.organization}
                    </p>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
