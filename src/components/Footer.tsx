import { ArrowUp, Briefcase, Github, Linkedin, Mail, Youtube } from "lucide-react";
import { navLinks, portfolioLinks, profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-ink-700 bg-ink-900/60">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-display text-lg font-semibold text-paper-100">
              {profile.name}
            </p>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-paper-500">
              Creative developer and multidisciplinary freelancer building
              thoughtful digital experiences from Dhaka, Bangladesh.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2 sm:grid-cols-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-paper-400 transition-colors hover:text-paper-100"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col gap-3">
            <a
              href={portfolioLinks.email}
              className="flex items-center gap-2 text-sm text-paper-400 transition-colors hover:text-paper-100"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              {portfolioLinks.emailRaw}
            </a>
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
            {portfolioLinks.youtube && (
              <a
                href={portfolioLinks.youtube}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-2 text-sm text-paper-400 transition-colors hover:text-paper-100"
              >
                <Youtube className="h-4 w-4" aria-hidden="true" />
                YouTube
              </a>
            )}
            {portfolioLinks.fiverr && (
              <a
                href={portfolioLinks.fiverr}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-2 text-sm text-paper-400 transition-colors hover:text-paper-100"
              >
                <Briefcase className="h-4 w-4" aria-hidden="true" />
                Fiverr
              </a>
            )}
          </div>
        </div>

        <div className="mt-12 flex flex-col-reverse items-center gap-4 border-t border-ink-700 pt-6 sm:flex-row sm:justify-between">
          <p className="text-xs text-paper-500">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <a
            href="#home"
            className="flex items-center gap-1.5 text-xs text-paper-400 transition-colors hover:text-paper-100"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
