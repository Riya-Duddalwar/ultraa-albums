import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Image as ImageIcon, ShieldCheck, Check } from 'lucide-react';

interface CapacityTier {
  photos: number;
  label: string;
  pages: number;
  pocketsPerPage: string;
  dimensions: string;
  spineWidth: string;
  description: string;
  idealFor: string;
}

const tiers: CapacityTier[] = [
  {
    photos: 200,
    label: '200 Prints Volume',
    pages: 50,
    pocketsPerPage: '2 per page (4 per double-spread)',
    dimensions: '9.5 × 8.5 inches',
    spineWidth: '4.5 cm spine',
    description:
      'A compact, cozy family volume. Perfect for holiday vacations, baby first-year milestones, and golden anniversary memories.',
    idealFor: 'Annual family yearbooks, newborn baby milestones, intimate vacations.',
  },
  {
    photos: 300,
    label: '300 Prints Volume',
    pages: 50,
    pocketsPerPage: '3 per page (6 per double-spread)',
    dimensions: '13.5 × 8.5 inches',
    spineWidth: '5.5 cm spine',
    description:
      'Our most popular archival archive tier. Holds 6 photos per double spread with dedicated memo margin space for handwritten dates and locations.',
    idealFor: 'Complete wedding party candids, multi-year family chronicles, graduation memories.',
  },
  {
    photos: 500,
    label: '500 Prints Master Volume',
    pages: 50,
    pocketsPerPage: '5 per page (10 per double-spread)',
    dimensions: '13.5 × 13.5 inches',
    spineWidth: '7.5 cm reinforced spine',
    description:
      'The comprehensive ancestral archive. Reinforced heavy-duty spine with double-riveted binding to hold 500 lifetime memories without pocket sag or tear.',
    idealFor: 'Ancestral generational family archives, multi-day Indian weddings, lifelong print collections.',
  },
];

export const CapacitySelector: React.FC = () => {
  const [activeTier, setActiveTier] = useState<number>(300);
  const current = tiers.find((t) => t.photos === activeTier) || tiers[1];

  return (
    <div className="bg-white border border-charcoal/10 rounded-sm p-6 sm:p-10 shadow-soft-sm">
      <div className="max-w-2xl mb-8">
        <span className="text-[10px] uppercase tracking-luxury text-secondary font-semibold block mb-1">
          Archival Capacity Options
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl font-medium text-charcoal">
          Select Your Storage Volume
        </h3>
        <p className="text-xs sm:text-sm text-secondary font-light mt-1">
          Compare page capacity, pocket layout, and album dimensions for standard 4×6 inch prints.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 pb-6 border-b border-charcoal/10">
        {tiers.map((t) => (
          <button
            key={t.photos}
            type="button"
            onClick={() => setActiveTier(t.photos)}
            className={`px-5 py-2.5 rounded-full text-xs font-medium transition-all ${
              activeTier === t.photos
                ? 'bg-charcoal text-white shadow-soft-sm'
                : 'bg-ivory border border-charcoal/10 text-secondary hover:text-charcoal'
            }`}
          >
            {t.photos} Photos Capacity
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={current.photos}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8"
        >
          {/* Visual capacity counter */}
          <div className="lg:col-span-5 bg-gradient-to-br from-beige-warm/30 via-ivory to-rose-light/20 border border-charcoal/10 rounded-sm p-8 text-center">
            <span className="text-[10px] uppercase tracking-luxury text-secondary font-semibold block mb-2">
              Maximum Archival Storage
            </span>
            <div className="font-serif text-5xl sm:text-6xl font-medium text-charcoal tracking-tight my-2">
              {current.photos}
            </div>
            <div className="text-xs font-serif italic text-secondary mb-6">
              Individual 4×6 inch archival pockets
            </div>

            <div className="pt-4 border-t border-charcoal/10 space-y-2 text-xs text-secondary text-left font-light">
              <div className="flex justify-between">
                <span>Layout Spreads:</span>
                <strong className="text-charcoal">{current.pocketsPerPage}</strong>
              </div>
              <div className="flex justify-between">
                <span>Dimensions:</span>
                <strong className="text-charcoal">{current.dimensions}</strong>
              </div>
              <div className="flex justify-between">
                <span>Spine Width:</span>
                <strong className="text-charcoal">{current.spineWidth}</strong>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-beige-warm/40 border border-charcoal/10 rounded-full text-[10px] uppercase tracking-luxury text-charcoal font-semibold">
              <ShieldCheck className="w-3 h-3 text-dusty-rose" />
              <span>Moisture-Proof Polypropylene</span>
            </div>

            <h4 className="font-serif text-2xl font-medium text-charcoal">
              {current.label}
            </h4>

            <p className="text-xs sm:text-sm text-secondary font-light leading-relaxed">
              {current.description}
            </p>

            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2 text-xs text-charcoal/90">
                <Check className="w-3.5 h-3.5 text-dusty-rose shrink-0" />
                <span>Optically clear dimpled pockets prevent photos from sticking</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-charcoal/90">
                <Check className="w-3.5 h-3.5 text-dusty-rose shrink-0" />
                <span>Heavy-duty ultrasonically welded pocket seams</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-charcoal/90">
                <Check className="w-3.5 h-3.5 text-dusty-rose shrink-0" />
                <span>Acid-free, PVC-free archival polymer</span>
              </div>
            </div>

            <div className="p-3 bg-ivory border border-charcoal/5 rounded text-xs text-secondary leading-relaxed font-light">
              <strong className="font-semibold text-charcoal">Best Suited For: </strong>
              {current.idealFor}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

