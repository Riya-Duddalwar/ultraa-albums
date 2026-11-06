import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';

export interface PhotoWork {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  image: string;
}

const defaultPhotos: PhotoWork[] = [
  {
    id: 'p-1',
    category: 'Candid',
    title: 'High Energy Sangeet Celebrations',
    subtitle: 'Capturing the spontaneous joy and energy of wedding celebrations.',
    image: '/images/gallery/celebration-1.jpg',
  },
  {
    id: 'p-2',
    category: 'Traditional',
    title: 'Royal Mandap Ceremony',
    subtitle: 'Formal portraits and cultural rites illuminated with precision.',
    image: '/images/services/photo-traditional.jpg',
  },
  {
    id: 'p-3',
    category: 'Pre-Wedding',
    title: 'Golden Hour Coastline',
    subtitle: 'Intimate pre-wedding session along Goa beach horizons.',
    image: '/images/services/photo-prewedding.jpg',
  },
  {
    id: 'p-4',
    category: 'Cinematography',
    title: '4K Multi-Angle Cinematic Film',
    subtitle: 'Drone perspectives and documentary wedding cinema montage.',
    image: '/images/services/photo-cinematic.svg',
  },
  {
    id: 'p-5',
    category: 'Portraits',
    title: 'Intergenerational Family Legacy',
    subtitle: 'Three generations gathered for an outdoor ancestral portrait.',
    image: '/images/services/photo-portrait.jpg',
  },
  {
    id: 'p-6',
    category: 'Proposals',
    title: 'Surprise Twilight Proposal',
    subtitle: 'Unobtrusive documentation of an unforgettable "Yes".',
    image: '/images/services/photo-proposal.svg',
  },
];

const categories = ['All', 'Candid', 'Traditional', 'Pre-Wedding', 'Cinematography', 'Portraits', 'Proposals'];

export const PhotographyGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = selectedCategory === 'All'
    ? defaultPhotos
    : defaultPhotos.filter((p) => p.category === selectedCategory);

  const nextPhoto = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filtered.length);
    }
  };

  const prevPhoto = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length);
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-ivory border-b border-charcoal/5">
      <div className="section-container">
        <SectionHeading
          tag="Photography Portfolio"
          title="Stories Captured Through Our Lens"
          subtitle="Explore our visual narrative across candid wedding photojournalism, traditional ceremonies, and multi-angle cinematic films."
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 sm:px-5 py-2 text-xs uppercase tracking-luxury font-medium transition-all duration-300 rounded-full ${
                  isSelected
                    ? 'bg-charcoal text-white shadow-soft-sm'
                    : 'bg-white text-secondary hover:text-charcoal border border-charcoal/10'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Masonry Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filtered.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                onClick={() => setLightboxIndex(idx)}
                className="group relative cursor-pointer overflow-hidden rounded-sm bg-white border border-charcoal/10 shadow-soft-sm"
              >
                <div className="aspect-[4/3] overflow-hidden bg-ivory">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                <div className="absolute inset-0 bg-charcoal/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 text-white">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] uppercase tracking-luxury bg-white/20 backdrop-blur-sm px-2.5 py-1 rounded-full font-medium">
                      {item.category}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Maximize2 className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  <div>
                    <h4 className="font-serif text-xl font-medium text-white mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-white/80 font-light">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {lightboxIndex !== null && filtered[lightboxIndex] && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-charcoal/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
              onClick={() => setLightboxIndex(null)}
            >
              <button
                onClick={() => setLightboxIndex(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevPhoto();
                }}
                className="absolute left-4 sm:left-8 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Previous"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextPhoto();
                }}
                className="absolute right-4 sm:right-8 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Next"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <div
                className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative overflow-hidden rounded shadow-2xl max-h-[65vh] w-full flex items-center justify-center bg-black/40">
                  <img
                    src={filtered[lightboxIndex].image}
                    alt={filtered[lightboxIndex].title}
                    className="max-h-[65vh] max-w-full object-contain"
                  />
                </div>

                <div className="mt-4 text-center text-white">
                  <span className="text-[10px] uppercase tracking-luxury text-rose-pastel font-semibold">
                    {filtered[lightboxIndex].category}
                  </span>
                  <h3 className="font-serif text-2xl font-medium mt-1">
                    {filtered[lightboxIndex].title}
                  </h3>
                  <p className="text-xs text-white/70 mt-1 max-w-md mx-auto">
                    {filtered[lightboxIndex].subtitle}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

