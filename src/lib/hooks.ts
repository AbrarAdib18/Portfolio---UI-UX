import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Tracks which section is currently most visible in the viewport so the
 * navigation can highlight the active link while scrolling.
 */
export function useActiveSection(sectionIds: string[]): string {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? "");

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
}

/** Locks body scroll while `locked` is true (used by the mobile drawer and modal). */
export function useBodyScrollLock(locked: boolean): void {
  useEffect(() => {
    if (!locked) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [locked]);
}

/** Traps Tab focus within a container and calls `onClose` on Escape. */
export function useFocusTrap(
  containerRef: React.RefObject<HTMLElement | null>,
  active: boolean,
  onClose: () => void
): void {
  useEffect(() => {
    if (!active) return;
    const container = containerRef.current;
    if (!container) return;

    const focusableSelector =
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const focusables = Array.from(
      container.querySelectorAll<HTMLElement>(focusableSelector)
    );
    focusables[0]?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab") return;
      const items = Array.from(
        container?.querySelectorAll<HTMLElement>(focusableSelector) ?? []
      );
      if (items.length === 0) return;

      const first = items[0];
      const last = items[items.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      previouslyFocused?.focus();
    };
  }, [active, containerRef, onClose]);
}

/** Copies text to the clipboard and exposes a transient "copied" state for UI feedback. */
export function useCopyToClipboard(resetDelay = 2000) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const copy = useCallback(
    async (text: string) => {
      try {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => setCopied(false), resetDelay);
      } catch {
        setCopied(false);
      }
    },
    [resetDelay]
  );

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return { copied, copy };
}

interface PinterestWindow extends Window {
  PinUtils?: { build: () => void };
}

/**
 * Module-scoped (not component state) so React 18 StrictMode's intentional
 * dev-only mount→unmount→remount cycle can't trigger `build()` twice — a
 * second concurrent pass races with Pinterest's own async DOM writes from
 * the first and throws inside its minified script. Harmless in production
 * (StrictMode only double-invokes in development), but this keeps the dev
 * console clean too. The list is static, so "once per page load" is enough.
 */
let pinterestBuildRequested = false;

/**
 * Pinterest's embed script (pinit.js) scans the DOM for `data-pin-do`
 * anchors on its own load, which can race with React mounting them, and it
 * silently leaves some pins un-embedded (deleted/private pins, ad blockers,
 * rate limits). This polls for the script's global to trigger the initial
 * scan, then watches the gallery with a MutationObserver so it can tell
 * embedded pins (which Pinterest replaces with its own markup) apart from
 * ones that never got touched — those are rewritten to a working fallback
 * link once the widget has had a fair chance to finish.
 */
export function usePinterestGallery(
  containerId: string,
  fallbackHref: string,
  fallbackText: string
): void {
  useEffect(() => {
    const container = document.getElementById(containerId);
    if (!container) return;

    let finished = false;
    const timers: {
      settle: ReturnType<typeof setTimeout> | undefined;
      hardCap: ReturnType<typeof setTimeout> | undefined;
    } = { settle: undefined, hardCap: undefined };

    function rewriteUnembeddedPins() {
      if (finished) return;
      finished = true;
      observer.disconnect();
      window.clearTimeout(timers.settle);
      window.clearTimeout(timers.hardCap);

      container
        ?.querySelectorAll<HTMLAnchorElement>('a[data-pin-do="embedPin"]')
        .forEach((anchor) => {
          anchor.href = fallbackHref;
          anchor.textContent = fallbackText;
          anchor.target = "_blank";
          anchor.rel = "noreferrer noopener";
        });
    }

    const observer = new MutationObserver(() => {
      window.clearTimeout(timers.settle);
      timers.settle = window.setTimeout(rewriteUnembeddedPins, 1500);
    });
    observer.observe(container, { childList: true, subtree: true });

    let attempts = 0;
    const pollId = window.setInterval(() => {
      attempts += 1;
      const pinUtils = (window as PinterestWindow).PinUtils;
      if (pinUtils) {
        if (!pinterestBuildRequested) {
          pinterestBuildRequested = true;
          pinUtils.build();
        }
        window.clearInterval(pollId);
      } else if (attempts > 20) {
        window.clearInterval(pollId);
      }
    }, 250);

    timers.hardCap = window.setTimeout(rewriteUnembeddedPins, 8000);

    return () => {
      observer.disconnect();
      window.clearInterval(pollId);
      window.clearTimeout(timers.settle);
      window.clearTimeout(timers.hardCap);
    };
  }, [containerId, fallbackHref, fallbackText]);
}
