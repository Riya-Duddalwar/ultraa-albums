import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Check, Sparkles } from 'lucide-react';

interface BookSize {
  id: string;
  name: string;
  dimensions: string;
  cmDimensions: string;
  aspect: string;
  tag: string;
  description: string;
  scaleHeight: string; // for proportional silhouette height
  scaleWidth: string;
  idealFor: string;
  pageRange: string;
}

const sizes: BookSize[] = [
  {
    id: '5x5',
    name: '5×5 Mini Pocket',
    dimensions: '5 × 5 inches',
    cmDimensions: '12.7 × 12.7 cm',
    aspect: 'Square',
    tag: 'POCKET KEEPSAKE',
    description:
      'Compact handheld pocket format designed as thoughtful gifts for wedding guests, bridesmaids, or grandparents. Fits easily in handbags and coffee tables.',
    scaleWidth: 'w-20',
    scaleHeight: 'h-20',
    idealFor: 'Parent gift albums, baby newborn monthly books, engagement teasers.',
    pageRange: '20 to 60 pages',
  },
  {
    id: '6x8',
    name: '6×8 Classic Standard',
    dimensions: '6 × 8 inches',
    cmDimensions: '15.2 × 20.3 cm',
    aspect: 'Portrait / Landscape',
    tag: 'VERSATILE FAVORITE',
    description:
      'The balanced, comfortable everyday format. Excellent for personal portfolio showcases, portrait sessions, and anniversary celebrations.',
    scaleWidth: 'w-24',
    scaleHeight: 'h-32',
    idealFor: 'Senior portraits, lifestyle couple sessions, birthday milestones.',
    pageRange: '20 to 100 pages',
  },
  {
    id: '9x12',
    name: '9×12 Editorial Grand',
    dimensions: '9 × 12 inches',
    cmDimensions: '22.8 × 30.5 cm',
    aspect: 'Landscape / Portrait',
    tag: 'EDITORIAL STATEMENT',
    description:
      'Generous bookstore proportion that gives full-bleed imagery room to breathe. High visual impact with graceful negative space and wide panoramic layouts.',
    scaleWidth: 'w-36',
    scaleHeight: 'h-48',
    idealFor: 'Complete wedding storylines, travel photojournalism, luxury coffee tables.',
    pageRange: '30 to 120 pages',
  },
  {
    id: '12x18',
    name: '12×18 Exhibition Master',
    dimensions: '12 × 18 inches',
    cmDimensions: '30.5 × 45.7 cm',
    aspect: 'Horizontal Exhibition',
    tag: 'MAXIMUM OPULENCE',
    description:
      'Our grandest format. When opened, it reveals an extraordinary 36-inch continuous panorama. Built for landscape photographers, architectural portfolios, and master ceremonies.',
    scaleWidth: 'w-52',
    scaleHeight: 'h-36',
    idealFor: 'Luxury wedding suites, architectural monographs, fine art gallery showcases.',
    pageRange: '30 to 80 pages',
  },
];

export const BookSizeSelector: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>('9x12');
  const activeSize = sizes.find((s) => s.id === selectedId) || sizes[2];

  return (
    <div className="bg-white border border-charcoal/10 rounded-sm p-6 sm:p-10 shadow-soft-sm">
      <div className="max-w-2xl mb-8">
        <span className="text-[10px] uppercase tracking-luxury text-secondary font-semibold block mb-1">
          Interactive Proportions
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl font-medium text-charcoal">
          Photo Book Size Comparison
        </h3>
        <p className="text-xs sm:text-sm text-secondary font-light mt-1">
          Select a format to preview relative scale, dimensions, and ideal storytelling applications.
        </p>
      </div>

      {/* Size Pills */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8">
        {sizes.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => setSelectedId(s.id)}
            className={`p-3 text-left border rounded transition-all ${
              selectedId === s.id
                ? 'bg-beige-warm/30 border-charcoal text-charcoal shadow-soft-sm'
                : 'bg-ivory/50 border-charcoal/10 text-secondary hover:border-charcoal/30'
            }`}
          >
            <span className="text-[9px] uppercase tracking-luxury font-semibold block opacity-70">
              {s.aspect}
            </span>
            <div className="font-serif text-lg font-medium text-charcoal">{s.dimensions}</div>
            <span className="text-[10px] text-secondary/80 block mt-0.5">{s.cmDimensions}</span>
          </button>
        ))}
      </div>

      {/* Comparison Stage: Visual Relative Silhouette vs Detail */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4 border-t border-charcoal/10">
        {/* Scale Stage */}
        <div className="lg:col-span-5 bg-gradient-to-b from-ivory to-beige-warm/20 border border-charcoal/10 rounded-sm p-8 min-h-[280px] flex flex-col items-center justify-center relative">
          <span className="text-[10px] uppercase tracking-luxury text-secondary font-semibold mb-6">
            Relative Physical Silhouette
          </span>

          {/* Interactive animated book silhouette */}
          <div className="h-48 flex items-center justify-center">
            <motion.div
              layout
              transition={{ type: 'spring', stiffness: 260, damping: 25 }}
              className={`${activeSize.scaleWidth} ${activeSize.scaleHeight} bg-white border-2 border-charcoal/40 shadow-soft-lg rounded-sm relative flex items-center justify-center`}
            >
              <div className="absolute inset-1.5 border border-charcoal/10 bg-ivory/30 flex flex-col items-center justify-center text-center p-2">
                <BookOpen className="w-5 h-5 text-charcoal/60 mb-1" />
                <span className="text-[11px] font-serif font-medium text-charcoal leading-tight">
                  {activeSize.dimensions}
                </span>
              </div>
            </motion.div>
          </div>

          <div className="mt-4 text-[11px] text-secondary font-mono">
            Scale reference against standard desk space
          </div>
        </div>

        {/* Selected Details */}
        <div className="lg:col-span-7 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-beige-warm/40 border border-charcoal/10 rounded-full text-[10px] uppercase tracking-luxury text-charcoal font-semibold">
            <Sparkles className="w-3 h-3 text-dusty-rose" />
            <span>{activeSize.tag}</span>
          </div>

          <h4 className="font-serif text-2xl font-medium text-charcoal">
            {activeSize.name} · {activeSize.dimensions}
          </h4>

          <p className="text-xs sm:text-sm text-secondary font-light leading-relaxed">
            {activeSize.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-charcoal/10">
            <div className="p-3 bg-ivory border border-charcoal/5 rounded">
              <span className="text-[10px] uppercase tracking-luxury text-secondary font-semibold block mb-1">
                Ideal Applications
              </span>
              <p className="text-xs text-charcoal font-light leading-snug">{activeSize.idealFor}</p>
            </div>

            <div className="p-3 bg-ivory border border-charcoal/5 rounded">
              <span className="text-[10px] uppercase tracking-luxury text-secondary font-semibold block mb-1">
                Page Capacity
              </span>
              <p className="text-xs text-charcoal font-light leading-snug">{activeSize.pageRange}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

