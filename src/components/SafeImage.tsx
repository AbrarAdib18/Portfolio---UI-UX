import { useState, type ImgHTMLAttributes } from "react";
import { ImageOff } from "lucide-react";
import { cn } from "../lib/utils";

interface SafeImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

/** Renders an <img>, falling back to a neutral placeholder if the asset fails to load. */
export default function SafeImage({ src, alt, className, ...rest }: SafeImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return (
      <div
        className={cn(
          "flex items-center justify-center bg-ink-800 text-paper-500",
          className
        )}
        role="img"
        aria-label={alt}
      >
        <ImageOff className="h-8 w-8" aria-hidden="true" />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      {...rest}
    />
  );
}
