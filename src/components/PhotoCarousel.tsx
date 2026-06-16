"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";

const images = [
  "/images/about/climbing.jpg",
  "/images/about/mountain.jpg",
  "/images/about/ropes.jpg",
  "/images/about/training.jpg",
  "/images/about/landscape.jpg",
];

export default function PhotoCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
  });

  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <div
      ref={emblaRef}
      className="overflow-hidden rounded-3xl border border-zinc-800"
    >
      <div className="flex">
        {images.map((src) => (
          <div
            key={src}
            className="relative min-w-full h-[500px]"
          >
            <Image
              src={src}
              alt="Alejandro"
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}