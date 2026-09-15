import type { ReactNode } from "react";
import { ArrowRight, Download, Github, Linkedin, MapPin, Mail } from "lucide-react";
import { profile, portfolioLinks } from "../data/portfolio";
import Button from "../components/Button";
import SafeImage from "../components/SafeImage";

const ORBIT_RADIUS = 168;

interface OrbitItem {
  id: string;
  angleDeg: number;
  className: string;
  content: ReactNode;
}

const orbitItems: OrbitItem[] = [
  {
    id: "achievement",
    angleDeg: -90,
    className: "text-ember-400",
    content: <>🏆 3rd @ URC 2026</>,
  },
  {
    id: "uiux",
    angleDeg: -30,
    className: "text-paper-300",
    content: "UI/UX",
  },
  {
    id: "robotics",
    angleDeg: 30,
    className: "text-paper-300",
    content: "Robotics",
  },
  {
    id: "video",
    angleDeg: 90,
    className: "text-paper-300",
    content: "Video Editing",
  },
  {
    id: "frontend",
    angleDeg: 150,
    className: "text-paper-300",
    content: "Frontend Dev",
  },
  {
    id: "location",
    angleDeg: 210,
    className: "text-paper-300",
    content: (
      <span className="flex items-center gap-1.5">
        <MapPin className="h-3.5 w-3.5 text-violet-400" aria-hidden="true" />
        Dhaka, Bangladesh
      </span>
    ),
  },
];

function orbitStyle(angleDeg: number): React.CSSProperties {
  const angleRad = (angleDeg * Math.PI) / 180;
  const x = ORBIT_RADIUS * Math.cos(angleRad);
  const y = ORBIT_RADIUS * Math.sin(angleRad);
  return {
    left: "50%",
    top: "50%",
    transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
  };
}

export default function Hero() {
  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-32 -top-40 h-[26rem] w-[26rem] rounded-full bg-violet-500/20 blur-[100px] animate-drift-slow" />
        <div
          className="absolute -right-24 top-1/4 h-[22rem] w-[22rem] rounded-full bg-ember-500/15 blur-[100px] animate-drift-slow"
          style={{ animationDelay: "5s" }}
        />
        <div className="absolute inset-0 bg-grain opacity-40" />
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-violet-400">
            Creative Developer • Designer • Builder
          </p>

          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.08] text-paper-100 text-balance sm:text-5xl md:text-6xl">
            I build thoughtful digital experiences where technology meets
            creativity.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-paper-400 sm:text-lg">
            I&rsquo;m Abrar Habib Adib, a multidisciplinary developer and
            creative freelancer from Dhaka, Bangladesh. I work across frontend
            development, UI/UX design, machine learning, robotics, video
            editing, graphic design, and content creation.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button as="a" href="#work" icon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}>
              View My Work
            </Button>
            <Button as="a" href="#contact" variant="secondary">
              Let&rsquo;s Connect
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-5">
            {portfolioLinks.github && (
              <a
                href={portfolioLinks.github}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-2 text-sm text-paper-400 transition-colors hover:text-paper-100"
              >
                <Github className="h-4 w-4" aria-hidden="true" />
                GitHub
              </a>
            )}
            {portfolioLinks.linkedin && (
              <a
                href={portfolioLinks.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-2 text-sm text-paper-400 transition-colors hover:text-paper-100"
              >
                <Linkedin className="h-4 w-4" aria-hidden="true" />
                LinkedIn
              </a>
            )}
            <a
              href={portfolioLinks.email}
              className="flex items-center gap-2 text-sm text-paper-400 transition-colors hover:text-paper-100"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Email
            </a>
            {portfolioLinks.cv && (
              <a
                href={portfolioLinks.cv}
                download
                className="flex items-center gap-2 text-sm text-paper-400 transition-colors hover:text-paper-100"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Download CV
              </a>
            )}
          </div>
        </div>

        <div className="relative mx-auto flex w-full max-w-[300px] items-center justify-center py-6 lg:mx-0">
          <div
            className="absolute h-[110%] w-[110%] rounded-full border border-violet-500/20 animate-orbit-slow"
            aria-hidden="true"
          />
          <div
            className="absolute h-[130%] w-[130%] rounded-full border border-dashed border-ember-500/15 animate-orbit-slower"
            aria-hidden="true"
          />

          <div className="relative aspect-square w-full overflow-hidden rounded-full border border-ink-500 bg-ink-800 shadow-card">
            <SafeImage
              src={profile.image}
              alt={profile.imageAlt}
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>

          {orbitItems.map((item, index) => (
            <div
              key={item.id}
              className={`absolute hidden animate-pulse-soft whitespace-nowrap rounded-full border border-ink-500 bg-ink-900/90 px-3 py-1.5 text-xs font-mono font-medium shadow-card backdrop-blur md:block ${item.className}`}
              style={{ ...orbitStyle(item.angleDeg), animationDelay: `${index * 0.35}s` }}
            >
              {item.content}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
