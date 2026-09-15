import { pinterestPins, portfolioLinks } from "../data/portfolio";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { usePinterestGallery } from "../lib/hooks";

const GALLERY_ID = "design-gallery-grid";

export default function DesignGallery() {
  usePinterestGallery(GALLERY_ID, portfolioLinks.pinterest, "View my Pinterest profile");

  return (
    <section id="design-gallery" aria-label="Pinterest design gallery" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Design Gallery"
          title="Creative work with real reach."
          description="A selection of design and content work from my Pinterest."
        />

        <div className="mt-8 flex flex-col items-center gap-1 text-center sm:flex-row sm:items-baseline sm:gap-3">
          <span className="font-display text-6xl font-bold leading-none text-violet-300 sm:text-7xl">
            7M+
          </span>
          <span className="text-base font-medium text-paper-300 sm:text-lg">
            total views across my Pinterest design content
          </span>
        </div>

        <div id={GALLERY_ID} className="mt-10 columns-1 gap-6 sm:columns-2 lg:columns-3">
          {pinterestPins.map((pin, index) => (
            <Reveal
              key={pin.id}
              delay={Math.min(index * 0.04, 0.32)}
              className="mb-6 break-inside-avoid"
            >
              <div className="flex justify-center overflow-hidden rounded-2xl border border-ink-600 bg-ink-800/50 p-2 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/40 hover:shadow-glow">
                <a
                  data-pin-do="embedPin"
                  data-pin-width="small"
                  href={pin.url}
                  className="text-xs text-paper-400 underline underline-offset-2 hover:text-paper-200"
                >
                  View design on Pinterest
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href={portfolioLinks.pinterest}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-full border border-ink-500 px-5 py-2.5 text-sm font-medium text-paper-200 transition-colors hover:border-violet-400 hover:text-violet-200"
          >
            See more on Pinterest
          </a>
        </div>
      </div>
    </section>
  );
}
