import { aboutInterests, aboutStats } from "../data/portfolio";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import Tag from "../components/Tag";

export default function About() {
  return (
    <section id="about" aria-label="About me" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="About"
          title="A multidisciplinary builder, one discipline at a time."
        />

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal delay={0.05}>
            <p className="text-lg leading-relaxed text-paper-300">
              I&rsquo;m a creative freelancer specializing in video editing,
              graphic design, content writing, and frontend web development. I
              focus on clean visuals, useful interfaces, and smooth digital
              experiences that help people and organizations communicate their
              ideas effectively.
            </p>

            <p className="mt-6 text-sm font-medium uppercase tracking-[0.15em] text-paper-500">
              Interests &amp; working areas
            </p>
            <ul className="mt-4 flex flex-wrap gap-2.5" aria-label="Interests and working areas">
              {aboutInterests.map((interest) => (
                <li key={interest}>
                  <Tag>{interest}</Tag>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.15}>
            <dl className="grid grid-cols-2 gap-4 sm:gap-5">
              {aboutStats.map((stat) => (
                <div
                  key={stat.id}
                  className="rounded-2xl border border-ink-600 bg-ink-800/60 p-5"
                >
                  <dt className="font-display text-2xl font-semibold text-violet-300 sm:text-3xl">
                    {stat.value}
                  </dt>
                  <dd className="mt-2 text-sm leading-snug text-paper-400">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
