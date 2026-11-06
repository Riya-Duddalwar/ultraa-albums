import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroSlide {
  id: string;
  image: string;
  tag: string;
  caption: string;
}

const slides: HeroSlide[] = [
  {
    id: 'slide-1',
    image: '/images/carousel/carousel-1.jpg',
    tag: 'FLAGSHIP HEIRLOOM',
    caption: 'Hand-Bound Flush Mount Spread on Fuji Silver Halide Luster',
  },
  {
    id: 'slide-2',
    image: '/images/carousel/carousel-2.jpg',
    tag: 'OPULENT SUITE',
    caption: 'Hand-Worked Italian Leather & Presentation Casket',
  },
  {
    id: 'slide-3',
    image: '/images/carousel/carousel-3.jpg',
    tag: 'ZERO GUTTER PANORAMA',
    caption: '180° Layflat Opening with Seamless Center Fold',
  },
];

export const HeroCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  // Autoplay
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 5500);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  const current = slides[currentIndex];

  return (
    <div
      className="relative aspect-[4/3] rounded-sm overflow-hidden bg-white shadow-soft-lg border border-charcoal/10 p-2 sm:p-3 group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative w-full h-full overflow-hidden rounded bg-ivory">
        <AnimatePresence mode="wait">
          <motion.img
            key={current.id}
            src={current.image}
            alt={current.caption}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="w-full h-full object-cover object-center"
          />
        </AnimatePresence>

        {/* Ambient subtle vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />

        {/* Floating caption pill */}
        <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-md bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-full border border-charcoal/10 shadow-soft-sm flex items-center justify-between gap-3 pointer-events-none z-10">
          <div className="flex items-center gap-2 truncate">
            <Sparkles className="w-3.5 h-3.5 text-dusty-rose shrink-0" />
            <span className="text-[10px] sm:text-[11px] uppercase tracking-luxury font-medium text-charcoal truncate">
              {current.caption}
            </span>
          </div>
          <span className="text-[9px] font-mono text-secondary bg-ivory px-2 py-0.5 rounded-full shrink-0">
            {currentIndex + 1} / {slides.length}
          </span>
        </div>

        {/* Navigation Arrows */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous slide"
          className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm text-charcoal border border-charcoal/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-white hover:scale-105 active:scale-95 shadow-soft-sm z-20"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm text-charcoal border border-charcoal/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-white hover:scale-105 active:scale-95 shadow-soft-sm z-20"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        {/* Dot Indicators */}
        <div className="absolute top-4 right-4 flex items-center gap-1.5 z-20 bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full">
          {slides.map((s, idx) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                currentIndex === idx
                  ? 'w-5 bg-rose-pastel'
                  : 'w-1.5 bg-white/60 hover:bg-white'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

