import { useState } from "react";
import { Menu } from "lucide-react";
import { navLinks, profile } from "../data/portfolio";
import { useActiveSection } from "../lib/hooks";
import { cn } from "../lib/utils";
import Button from "./Button";
import MobileDrawer from "./MobileDrawer";

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const activeId = useActiveSection(navLinks.map((link) => link.href.replace("#", "")));

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-ink-700/80 bg-ink-950/85 backdrop-blur-md">
        <nav
          aria-label="Primary"
          className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8"
        >
          <a
            href="#home"
            className="flex items-center gap-2.5 rounded-md font-display text-lg font-semibold text-paper-100 focus-visible:outline-2 focus-visible:outline-violet-400 focus-visible:outline-offset-4"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-violet-500 text-sm font-bold text-ink-950">
              {profile.initials}
            </span>
            <span className="hidden sm:inline">{profile.name}</span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = activeId === id;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                      isActive
                        ? "text-violet-300"
                        : "text-paper-400 hover:text-paper-100"
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="hidden lg:block">
            <Button as="a" href="#contact" size="sm">
              Let&rsquo;s Work Together
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            aria-haspopup="dialog"
            aria-expanded={drawerOpen}
            aria-label="Open navigation menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-500 text-paper-200 lg:hidden"
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>
        </nav>
      </header>

      <MobileDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        activeId={activeId}
      />
    </>
  );
}
