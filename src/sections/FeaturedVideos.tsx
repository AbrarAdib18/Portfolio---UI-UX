import { useState } from "react";
import { Play } from "lucide-react";
import { featuredVideos } from "../data/portfolio";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

export default function FeaturedVideos() {
  const [playingId, setPlayingId] = useState<string | null>(null);

  return (
    <section id="featured-videos" aria-label="Featured videos" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Featured Videos"
          title="A few edits worth watching."
          description="Click a thumbnail to play — nothing loads or plays until you choose to."
        />

        <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredVideos.map((video, index) => {
            const isPlaying = playingId === video.id;
            const params = new URLSearchParams({
              autoplay: "1",
              loop: "1",
              playlist: video.youtubeId,
              rel: "0",
              modestbranding: "1",
              playsinline: "1",
            });

            return (
              <Reveal as="li" key={video.id} delay={Math.min(index * 0.08, 0.3)}>
                <figure className="group overflow-hidden rounded-2xl border border-ink-600 bg-ink-800/50 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/50 hover:shadow-glow">
                  <div className="relative aspect-video w-full overflow-hidden bg-ink-900">
                    {isPlaying ? (
                      <iframe
                        className="h-full w-full"
                        src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?${params.toString()}`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      <button
                        type="button"
                        onClick={() => setPlayingId(video.id)}
                        className="absolute inset-0 h-full w-full"
                        aria-label={`Play video: ${video.title}`}
                      >
                        <img
                          src={`https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`}
                          alt=""
                          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                          loading="lazy"
                        />
                        <span className="absolute inset-0 flex items-center justify-center bg-ink-950/25 transition-colors duration-300 group-hover:bg-ink-950/10">
                          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-500 text-ink-950 shadow-glow transition-transform duration-300 group-hover:scale-110">
                            <Play className="h-6 w-6 fill-current" aria-hidden="true" />
                          </span>
                        </span>
                      </button>
                    )}
                  </div>
                  <figcaption className="p-4 text-sm font-medium text-paper-300">
                    {video.title}
                  </figcaption>
                </figure>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
