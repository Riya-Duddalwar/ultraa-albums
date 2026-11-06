import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, Sparkles, Check } from 'lucide-react';

interface LidStyle {
  id: string;
  name: string;
  subtitle: string;
  tag: string;
  description: string;
  specs: string[];
  previewAccent: string;
  image: string;
}

const lidStyles: LidStyle[] = [
  {
    id: 'photo-wrap',
    name: 'Full Photo Wrap Lid',
    subtitle: 'Edge-to-edge couple portrait with velvet lamination',
    tag: 'SIGNATURE PORTRAIT',
    description:
      'The couple’s signature portrait seamlessly wrapped over the solid wooden box lid with smooth hand-turned edges and protective velvet touch lamination.',
    specs: ['Continuous edge wrap', 'Velvet or luster finish', 'Concealed magnetic seal', 'Satin ribbon lift'],
    previewAccent: 'from-rose-pastel/40 via-ivory to-rose-light/30',
    image: '/images/products/boxes-and-bags-hero.jpg',
  },
  {
    id: 'acrylic-strip',
    name: 'Crystal Acrylic Inset Strip',
    subtitle: 'Diamond-polished bevel with personalized print behind glass',
    tag: 'CONTEMPORARY GLOSS',
    description:
      'A diamond-polished 4mm acrylic glass strip embedded flush into the handcrafted leatherette lid, highlighting the couple’s names, wedding date, or panoramic photo detail.',
    specs: ['4mm diamond-polished acrylic', 'Shatter-resistant mounting', 'Subsurface metallic print', 'Deep tactile contrast'],
    previewAccent: 'from-powder-blue/40 via-ivory to-powder-light/30',
    image: '/images/products/boxes-and-bags-hero.jpg',
  },
  {
    id: 'cameo-window',
    name: 'Cameo Cutout Window',
    subtitle: 'Die-cut portrait aperture framed in fine Italian leatherette',
    tag: 'TIMELESS HEIRLOOM',
    description:
      'A clean die-cut square or rectangular window set into the front lid, revealing an archival photographic portrait mounted slightly recessed for scratch protection.',
    specs: ['Die-cut precision aperture', 'Recessed portrait protection', 'Perimeter accent stitching', 'Magnetic closure'],
    previewAccent: 'from-beige-warm/50 via-ivory to-beige-light/30',
    image: '/images/products/boxes-and-bags-hero.jpg',
  },
  {
    id: 'debossed-leather',
    name: 'Debossed Leatherette & Foil',
    subtitle: 'Deep blind debossing with raised metallic foil calligraphy',
    tag: 'MINIMAL ELEGANCE',
    description:
      'Full wrap textured leatherette lid debossed with a custom brass die, creating crisp indented names and wedding dates accented with shining gold or rose gold foil.',
    specs: ['Custom brass hot-stamp die', 'Raised metallic foil option', 'Full Italian leatherette wrap', 'Handcrafted hardwood core'],
    previewAccent: 'from-charcoal/10 via-ivory to-charcoal/5',
    image: '/images/products/boxes-and-bags-hero.jpg',
  },
];

export const BoxLidSelector: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>('photo-wrap');
  const activeStyle = lidStyles.find((s) => s.id === selectedId) || lidStyles[0];

  return (
    <div className="bg-white border border-charcoal/10 rounded-sm p-6 sm:p-10 shadow-soft-sm">
      <div className="max-w-2xl mb-8">
        <span className="text-[10px] uppercase tracking-luxury text-secondary font-semibold block mb-1">
          Custom Enclosure Architecture
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl font-medium text-charcoal">
          Presentation Box Lid Variations
        </h3>
        <p className="text-xs sm:text-sm text-secondary font-light mt-1">
          Select a lid construction style to see how your presentation box coordinates with the album inside.
        </p>
      </div>

      {/* Selector Pills */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8">
        {lidStyles.map((style) => (
          <button
            key={style.id}
            type="button"
            onClick={() => setSelectedId(style.id)}
            className={`p-3.5 text-left border rounded transition-all ${
              selectedId === style.id
                ? 'bg-beige-warm/30 border-charcoal text-charcoal shadow-soft-sm'
                : 'bg-ivory/50 border-charcoal/10 text-secondary hover:border-charcoal/30'
            }`}
          >
            <span className="text-[9px] uppercase tracking-luxury font-semibold block opacity-70">
              {style.tag}
            </span>
            <div className="font-serif text-base font-medium text-charcoal mt-0.5 leading-snug">
              {style.name}
            </div>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeStyle.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-6 border-t border-charcoal/10"
        >
          {/* Visual Showcase */}
          <div className="lg:col-span-5">
            <div className={`p-8 rounded-sm border border-charcoal/10 bg-gradient-to-br ${activeStyle.previewAccent} shadow-soft relative min-h-[220px] flex flex-col justify-between`}>
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-luxury font-semibold text-charcoal">
                  {activeStyle.tag}
                </span>
                <Box className="w-4 h-4 text-secondary" />
              </div>

              <div className="my-6">
                <h4 className="font-serif text-2xl font-medium text-charcoal mb-1">
                  {activeStyle.name}
                </h4>
                <p className="text-xs text-secondary font-light italic">
                  "{activeStyle.subtitle}"
                </p>
              </div>

              <div className="pt-3 border-t border-charcoal/10 text-[10px] text-charcoal/70 uppercase tracking-luxury">
                Solid Hardwood Core Frame · Magnetic Seal
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-beige-warm/40 border border-charcoal/10 rounded-full text-[10px] uppercase tracking-luxury text-charcoal font-semibold">
              <Sparkles className="w-3 h-3 text-dusty-rose" />
              <span>Artisan Tailored Detail</span>
            </div>

            <p className="text-xs sm:text-sm text-secondary font-light leading-relaxed">
              {activeStyle.description}
            </p>

            <div className="space-y-2 pt-2">
              <div className="text-[10px] uppercase tracking-luxury font-semibold text-charcoal">
                Craftsmanship Features:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activeStyle.specs.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-charcoal/90">
                    <Check className="w-3.5 h-3.5 text-dusty-rose shrink-0" />
                    <span className="font-light">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

