'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Article } from '@/types';
import { cn } from '@/lib/utils';

interface HeroCarouselProps {
  slides: Article[];
}

export default function HeroCarousel({ slides }: HeroCarouselProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  if (!slides.length) return null;

  return (
    <div className="relative h-[500px] w-full overflow-hidden rounded-2xl">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={cn(
            'absolute inset-0 transition-opacity duration-1000',
            index === current ? 'opacity-100' : 'opacity-0'
          )}
        >
          <Image
            src={slide.featuredImage}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-carbon to-transparent" />
          <div className="absolute bottom-0 left-0 p-8 max-w-2xl">
            <span
              className="inline-block px-3 py-1 text-sm font-bold rounded"
              style={{ backgroundColor: slide.category.color }}
            >
              {slide.category.name}
            </span>
            <h2 className="text-4xl font-bold mt-2">{slide.title}</h2>
            <p className="text-gray-300 mt-2">{slide.excerpt}</p>
            <Link
              href={`/article/${slide.slug}`}
              className="mt-4 inline-block bg-f1-red hover:bg-red-700 text-white font-semibold px-6 py-2 rounded transition"
            >
              Read More
            </Link>
          </div>
        </div>
      ))}
      {/* Dots indicator */}
      <div className="absolute bottom-4 right-4 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            className={cn(
              'w-3 h-3 rounded-full transition',
              i === current ? 'bg-white' : 'bg-white/40'
            )}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </div>
  );
}
