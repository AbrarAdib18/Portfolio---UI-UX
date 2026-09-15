import {
  BookOpen,
  Bot,
  Box,
  BrainCircuit,
  Clapperboard,
  Code2,
  LayoutPanelLeft,
  Palette,
  type LucideIcon,
} from "lucide-react";
import { services } from "../data/portfolio";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

const iconMap: Record<string, LucideIcon> = {
  "code-2": Code2,
  "layout-panel-left": LayoutPanelLeft,
  clapperboard: Clapperboard,
  palette: Palette,
  "pen-line": BookOpen,
  "brain-circuit": BrainCircuit,
  bot: Bot,
  box: Box,
};

export default function Services() {
  return (
    <section id="services" aria-label="Services" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="Services" title="What I can help with." />

        <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] ?? Code2;
            return (
              <Reveal as="li" key={service.id} delay={Math.min(index * 0.06, 0.3)} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-ink-600 bg-ink-800/50 p-6 transition-colors hover:border-violet-400/40">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-violet-500/30 bg-violet-500/10 text-violet-300">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-display text-base font-semibold text-paper-100">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-paper-400">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
