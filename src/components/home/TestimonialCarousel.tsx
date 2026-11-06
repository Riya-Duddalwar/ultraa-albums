import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  location: string;
  verifiedStudio: boolean;
}

const testimonialsData: Testimonial[] = [
  {
    id: 't-1',
    quote: 'The flush mount album quality and binding finish exceeded all our studio expectations. Rajubhai and Mayank ensured our international order reached intact and ahead of schedule. When our bride unboxed her album, she was moved to tears.',
    author: 'Kunal & Riddhi Studios',
    role: 'Destination Wedding Photographers',
    location: 'Mumbai & Udaipur',
    verifiedStudio: true,
  },
  {
    id: 't-2',
    quote: 'Bhairaviben and the album designing team are phenomenal. No generic online templates, completely bespoke storytelling spreads, and unlimited soft-copy revisions until our client approved. Hands down the best artisan album maker in Mumbai.',
    author: 'Amit Sharma',
    role: 'Fine Art Wedding Studio',
    location: 'Mumbai, India',
    verifiedStudio: true,
  },
  {
    id: 't-3',
    quote: 'We order all our studio sample books and client heirloom boxes through Ultraa Albums. The Fuji Crystal Archive silver halide paper offers exceptional depth, pure clean whites, and the diamond-polished acrylic cover is unmatched.',
    author: 'Elena Morgan',
    role: 'Bespoke Wedding Photography Studio',
    location: 'London, United Kingdom',
    verifiedStudio: true,
  },
  {
    id: 't-4',
    quote: 'Their 180° layflat panoramic books and ultrasonic pocket albums have become essential staples for our client deliverables. Superb attention to craftsmanship, responsive communication, and very reliable worldwide delivery.',
    author: 'Vikramaditya Roy',
    role: 'Wedding Cinematographer & Director',
    location: 'Delhi & Dubai',
    verifiedStudio: true,
  },
];

export const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const current = testimonialsData[currentIndex];

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="bg-white border border-charcoal/10 p-8 sm:p-14 rounded-sm shadow-card relative overflow-hidden">
        {/* Subtle decorative quotation icon */}
        <Quote className="absolute top-6 right-6 w-16 h-16 text-rose-pastel/30 -scale-x-100 pointer-events-none" />

        <div className="flex items-center gap-1 mb-6 text-dusty-rose">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-current" />
          ))}
          <span className="ml-2 text-[10px] uppercase tracking-luxury text-secondary font-medium">
            4.9 / 5.0 Verified Studio Rating
          </span>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="space-y-6"
          >
            <p className="font-serif italic text-lg sm:text-2xl text-charcoal leading-relaxed font-normal">
              "{current.quote}"
            </p>

            <div className="pt-6 border-t border-charcoal/5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h4 className="font-serif text-lg font-medium text-charcoal">
                  {current.author}
                </h4>
                <p className="text-xs text-secondary mt-0.5">
                  {current.role} · <span className="font-medium text-charcoal/80">{current.location}</span>
                </p>
              </div>

              {current.verifiedStudio && (
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-sage-light/60 border border-sage rounded-full text-[10px] uppercase tracking-luxury text-charcoal/80 font-medium">
                  <span>Verified Studio Partner</span>
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Carousel controls */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-charcoal/5">
          {/* Dots */}
          <div className="flex items-center gap-2">
            {testimonialsData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-1.5 transition-all duration-300 rounded-full ${
                  currentIndex === idx ? 'w-8 bg-charcoal' : 'w-2 bg-charcoal/20 hover:bg-charcoal/40'
                }`}
              />
            ))}
          </div>

          {/* Prev / Next buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              aria-label="Previous review"
              className="w-9 h-9 rounded-full border border-charcoal/15 flex items-center justify-center text-charcoal hover:bg-charcoal hover:text-white transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={next}
              aria-label="Next review"
              className="w-9 h-9 rounded-full border border-charcoal/15 flex items-center justify-center text-charcoal hover:bg-charcoal hover:text-white transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
