import { useState } from "react";
import { languages, skillGroups } from "../data/portfolio";
import type { SkillLevel } from "../types";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { cn } from "../lib/utils";

const levelStyles: Record<SkillLevel, string> = {
  "Active Practice": "bg-violet-400",
  Experienced: "bg-ember-400",
  "Working Knowledge": "bg-paper-400",
  "Strong Interest": "bg-paper-500",
};

type TabId = "technical" | "creative" | "languages";

const tabs: { id: TabId; label: string }[] = [
  { id: "technical", label: "Technical" },
  { id: "creative", label: "Creative" },
  { id: "languages", label: "Languages" },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState<TabId>("technical");

  return (
    <section id="skills" aria-label="Skills" className="py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Skills"
          title="Tools and disciplines I work with."
          description="Qualitative, honest levels — reflecting real practice rather than arbitrary percentages."
        />

        <div
          role="tablist"
          aria-label="Skill categories"
          className="mt-10 flex flex-wrap gap-2"
        >
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                id={`skills-tab-${tab.id}`}
                aria-selected={isActive}
                aria-controls={`skills-panel-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "rounded-full border px-5 py-2.5 text-sm font-medium transition-colors",
                  isActive
                    ? "border-violet-400 bg-violet-500/15 text-violet-200"
                    : "border-ink-600 text-paper-400 hover:border-ink-500 hover:text-paper-100"
                )}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {skillGroups.map((group) => {
          const tabId: TabId = group.id === "technical" ? "technical" : "creative";
          if (tabId !== activeTab) return null;
          return (
            <div
              key={group.id}
              role="tabpanel"
              id={`skills-panel-${tabId}`}
              aria-labelledby={`skills-tab-${tabId}`}
              className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2"
            >
              {group.skills.map((skill, index) => (
                <Reveal key={skill.name} delay={Math.min(index * 0.05, 0.25)}>
                  <div className="group flex items-center justify-between rounded-xl border border-ink-600 bg-ink-800/50 px-5 py-4 transition-colors hover:border-violet-400/50">
                    <span className="font-medium text-paper-100">{skill.name}</span>
                    <span className="flex items-center gap-2 text-xs text-paper-400">
                      <span
                        className={cn("h-2 w-2 rounded-full", levelStyles[skill.level])}
                        aria-hidden="true"
                      />
                      {skill.level}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          );
        })}

        {activeTab === "languages" && (
          <div
            role="tabpanel"
            id="skills-panel-languages"
            aria-labelledby="skills-tab-languages"
            className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2"
          >
            {languages.map((language, index) => (
              <Reveal key={language.name} delay={Math.min(index * 0.05, 0.25)}>
                <div className="flex items-center justify-between rounded-xl border border-ink-600 bg-ink-800/50 px-5 py-4">
                  <span className="font-medium text-paper-100">{language.name}</span>
                  <span className="text-xs text-paper-400">{language.level}</span>
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
