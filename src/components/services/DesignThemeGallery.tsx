import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '../common/SectionHeading';
import { Sparkles, Check, ArrowRight } from 'lucide-react';

export interface DesignTheme {
  id: string;
  name: string;
  tag: string;
  description: string;
  image: string;
  idealFor: string;
}

const defaultThemes: DesignTheme[] = [
  {
    id: 'classic',
    name: 'Classic Design',
    tag: 'TIMELINK HARMONY',
    description: 'Symmetrical borders, traditional spacing, and graceful serif typography that never goes out of style.',
    image: '/images/services/theme-classic.svg',
    idealFor: 'Traditional church & ballroom weddings',
  },
  {
    id: 'clean',
    name: 'Clean Design',
    tag: 'MINIMALIST PURITY',
    description: 'Generous whitespace with focused negative space, letting standout emotional frames breathe quietly.',
    image: '/images/services/theme-clean.svg',
    idealFor: 'Fine art portraiture & intimate celebrations',
  },
  {
    id: 'contemporary',
    name: 'Contemporary Design',
    tag: 'EDITORIAL FINE ART',
    description: 'Asymmetric artistic layouts inspired by high-fashion magazines and architectural spreads.',
    image: '/images/services/theme-contemporary.svg',
    idealFor: 'Destination weddings & modern couples',
  },
  {
    id: 'indian',
    name: 'Indian Design',
    tag: 'CULTURAL VIBRANCY',
    description: 'Rich, dynamic multi-photo compositions that capture the high energy and colors of multi-day festivities.',
    image: '/images/services/theme-indian.svg',
    idealFor: 'Sangeet, Mehendi & grand Indian celebrations',
  },
  {
    id: 'indian-classic',
    name: 'Indian Classic Design',
    tag: 'ROYAL HERITAGE',
    description: 'Regal framing and thoughtful hierarchy honoring sacred mandap rituals, vows, and family blessings.',
    image: '/images/gallery/wedding-1.jpg',
    idealFor: 'Palace ceremonies & heritage weddings',
  },
  {
    id: 'indian-fusion',
    name: 'Indian Fusion Design',
    tag: 'MODERN HARMONY',
    description: 'Blends warm traditional sentimentality with clean Western editorial negative space.',
    image: '/images/services/theme-indian-fusion.jpg',
    idealFor: 'Cross-cultural weddings & cosmopolitan receptions',
  },
  {
    id: 'elegant',
    name: 'Elegant Design',
    tag: 'POETIC FLOW',
    description: 'Soft pastel background tints, delicate photo vignettes, and poetic narrative pacing from start to finish.',
    image: '/images/services/theme-elegant.svg',
    idealFor: 'Romantic couple sessions & golden anniversaries',
  },
  {
    id: 'western',
    name: 'Western Design',
    tag: 'CINEMATIC SWEEPS',
    description: 'Full-bleed landscape panoramic spreads paired with intimate black-and-white candid diptychs.',
    image: '/images/gallery/wedding-2.jpg',
    idealFor: 'Outdoor coastal & mountain ceremonies',
  },
  {
    id: 'baby-album',
    name: 'Baby Album Design',
    tag: 'TENDER MILESTONES',
    description: 'Playful yet sophisticated layouts recording first smiles, newborn details, and monthly milestones.',
    image: '/images/services/theme-baby.jpg',
    idealFor: 'Newborn portraits & first birthday books',
  },
  {
    id: 'modern',
    name: 'Modern Design',
    tag: 'GRAPHIC PRECISION',
    description: 'Bold geometric grid alignments, modern typography accents, and high-impact full-spread hero shots.',
    image: '/images/services/theme-modern.svg',
    idealFor: 'Fashion portfolios & contemporary celebrations',
  },
];

export const DesignThemeGallery: React.FC = () => {
  const [selectedThemeId, setSelectedThemeId] = useState<string>('classic');

  const activeTheme = defaultThemes.find((t) => t.id === selectedThemeId) || defaultThemes[0];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-charcoal/5">
      <div className="section-container">
        <SectionHeading
          tag="Curated Themes"
          title="Album Design Themes"
          subtitle="Unlike generic automated online software with rigid templates, Ultraa Albums offers 10 distinctive design themes tailored manually by senior artists."
        />

        {/* Theme Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {defaultThemes.map((theme) => {
            const isSelected = theme.id === selectedThemeId;
            return (
              <button
                key={theme.id}
                onClick={() => setSelectedThemeId(theme.id)}
                className={`px-4 py-2 text-xs uppercase tracking-luxury font-medium rounded-full transition-all duration-300 ${
                  isSelected
                    ? 'bg-charcoal text-white shadow-soft-sm'
                    : 'bg-ivory text-secondary hover:text-charcoal border border-charcoal/10'
                }`}
              >
                {theme.name}
              </button>
            );
          })}
        </div>

        {/* Selected Theme Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-ivory border border-charcoal/10 rounded-sm p-6 sm:p-10 shadow-card">
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTheme.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-[16/10] rounded-sm overflow-hidden bg-white border border-charcoal/10 shadow-soft-sm"
              >
                <img
                  src={activeTheme.image}
                  alt={activeTheme.name}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[10px] uppercase tracking-luxury font-semibold text-charcoal">
                  <Sparkles className="w-3 h-3 text-dusty-rose" />
                  <span>{activeTheme.tag}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <span className="text-[10px] uppercase tracking-luxury text-secondary font-semibold">
              Signature Style
            </span>

            <h3 className="font-serif text-3xl font-medium text-charcoal">
              {activeTheme.name}
            </h3>

            <p className="text-xs sm:text-sm text-secondary font-light leading-relaxed">
              {activeTheme.description}
            </p>

            <div className="pt-4 border-t border-charcoal/10 space-y-2">
              <div className="text-[11px] uppercase tracking-subtle font-semibold text-charcoal">
                Recommended For
              </div>
              <div className="flex items-center gap-2 text-xs text-charcoal/90">
                <Check className="w-3.5 h-3.5 text-secondary shrink-0" />
                <span>{activeTheme.idealFor}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-charcoal/90">
                <Check className="w-3.5 h-3.5 text-secondary shrink-0" />
                <span>Unlimited soft-copy corrections included</span>
              </div>
            </div>

            <div className="pt-4">
              <Link to="/contact-us" className="btn-luxury-primary text-xs py-3 px-6 inline-flex items-center">
                <span>Design With This Theme</span>
                <ArrowRight className="w-3.5 h-3.5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

