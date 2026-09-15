import { useRef } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import { navLinks } from "../data/portfolio";
import { useBodyScrollLock, useFocusTrap } from "../lib/hooks";
import { cn } from "../lib/utils";
import Button from "./Button";

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
  activeId: string;
}

export default function MobileDrawer({ open, onClose, activeId }: MobileDrawerProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useBodyScrollLock(open);
  useFocusTrap(panelRef, open, onClose);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <motion.div
            className="absolute inset-0 bg-ink-950/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            className="absolute inset-y-0 right-0 flex w-full max-w-sm flex-col bg-ink-900 p-6 shadow-card"
            initial={shouldReduceMotion ? { opacity: 0 } : { x: "100%" }}
            animate={shouldReduceMotion ? { opacity: 1 } : { x: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { x: "100%" }}
            transition={{ duration: shouldReduceMotion ? 0.15 : 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-lg font-semibold text-paper-100">
                Menu
              </span>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close navigation menu"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-500 text-paper-200"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <ul className="mt-10 flex flex-col gap-2">
              {navLinks.map((link) => {
                const id = link.href.replace("#", "");
                const isActive = activeId === id;
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={onClose}
                      aria-current={isActive ? "true" : undefined}
                      className={cn(
                        "block rounded-xl px-4 py-3 font-display text-xl font-medium transition-colors",
                        isActive
                          ? "bg-ink-700 text-violet-300"
                          : "text-paper-200 hover:bg-ink-800"
                      )}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="mt-auto pt-8">
              <Button as="a" href="#contact" onClick={onClose} className="w-full">
                Let&rsquo;s Work Together
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
