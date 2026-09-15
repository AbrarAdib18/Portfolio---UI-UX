import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "../lib/utils";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > 640);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={cn(
        "fixed bottom-6 right-5 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-ink-500 bg-ink-800/90 text-paper-200 backdrop-blur transition-all duration-300 hover:border-violet-400 hover:text-violet-300 focus-visible:outline-2 focus-visible:outline-violet-400 focus-visible:outline-offset-2 sm:bottom-8 sm:right-8",
        visible ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-3"
      )}
    >
      <ArrowUp className="h-5 w-5" aria-hidden="true" />
    </button>
  );
}
