"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "../utils/utils";

interface ImageCarouselProps {
  images: {
    src: string;
    alt: string;
  }[];
  className?: string;
  /**
   * Height of the carousel in pixels
   * @default 400
   */
  height?: number;
}

export function ImageCarousel({
  images,
  className,
  height = 400,
}: ImageCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    
    // Auto-scroll every 5 seconds
    const intervalId = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);

    return () => {
      emblaApi.off("select", onSelect);
      clearInterval(intervalId);
    };
  }, [emblaApi]);

  return (
    <div className={cn("relative w-full", className)}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {images.map((image, index) => (
            <div
              className="relative flex-[0_0_100%]"
              style={{ height: `${height}px` }}
              key={index}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="absolute inset-0 h-full w-full object-cover transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-md transition-transform hover:scale-110 active:scale-95"
        onClick={scrollPrev}
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-md transition-transform hover:scale-110 active:scale-95"
        onClick={scrollNext}
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={cn(
              "h-2 w-2 rounded-full transition-all",
              selectedIndex === index
                ? "bg-white w-6"
                : "bg-white/50 hover:bg-white/75"
            )}
            onClick={() => emblaApi?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
}