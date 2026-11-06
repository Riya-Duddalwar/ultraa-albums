import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export interface GalleryItem {
  id: string;
  category: 'Weddings' | 'Baby Albums' | 'Family' | 'Travel' | 'Celebrations';
  title: string;
  subtitle: string;
  image: string;
  aspect?: 'tall' | 'wide' | 'square';
}

const galleryData: GalleryItem[] = [
  {
    id: 'g-1',
    category: 'Weddings',
    title: 'Royal Udaipur Heritage Wedding',
    subtitle: 'Flush Mount Album in Acrylic Crystal & Italian Leather',
    image: '/images/gallery/wedding-1.jpg',
    aspect: 'wide',
  },
  {
    id: 'g-2',
    category: 'Weddings',
    title: 'Goa Coastal Celebration',
    subtitle: 'Panoramic Spreads in Sage Heritage Linen',
    image: '/images/gallery/wedding-2.jpg',
    aspect: 'tall',
  },
  {
    id: 'g-3',
    category: 'Baby Albums',
    title: 'First Milestones & Pure Joy',
    subtitle: 'Newborn Milestone Book with Feather Touch Finish',
    image: '/images/gallery/baby-1.jpg',
    aspect: 'square',
  },
  {
    id: 'g-4',
    category: 'Family',
    title: 'Ancestral Generational Legacy',
    subtitle: 'Golden 50th Anniversary Master Album in Wooden Casket',
    image: '/images/gallery/family-1.jpg',
    aspect: 'wide',
  },
  {
    id: 'g-5',
    category: 'Travel',
    title: 'Alpine Expedition & Horizons',
    subtitle: '180° Layflat Panoramic Double-Page Spread',
    image: '/images/gallery/travel-1.jpg',
    aspect: 'wide',
  },
  {
    id: 'g-6',
    category: 'Celebrations',
    title: 'Bespoke Evening Gala',
    subtitle: 'Black Tie Anniversary in Brushed Silver Metal Hardcover',
    image: '/images/gallery/celebration-1.jpg',
    aspect: 'tall',
  },
  {
    id: 'g-7',
    category: 'Weddings',
    title: 'Fine Art Palace Union',
    subtitle: 'Hand-Bound Flush Mount Spread on Fuji Silver Halide Luster',
    image: '/images/carousel/carousel-1.jpg',
    aspect: 'wide',
  },
  {
    id: 'g-8',
    category: 'Celebrations',
    title: 'The Imperial Casket Suite',
    subtitle: 'Hand-Worked Italian Leather with Companion Wooden Chest',
    image: '/images/carousel/carousel-2.jpg',
    aspect: 'wide',
  },
  {
    id: 'g-9',
    category: 'Travel',
    title: 'Panoramic Vistas & Coastlines',
    subtitle: '180° Layflat Spread with Continuous Zero-Gutter Horizon',
    image: '/images/carousel/carousel-3.jpg',
    aspect: 'wide',
  },
];

const categories = ['All', 'Weddings', 'Baby Albums', 'Family', 'Travel', 'Celebrations'] as const;

export const ImageGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const filteredItems = selectedCategory === 'All'
    ? galleryData
    : galleryData.filter((item) => item.category === selectedCategory);

  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const nextLightbox = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevLightbox = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <div className="w-full">
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 sm:px-5 py-2 text-xs uppercase tracking-luxury font-medium transition-all duration-300 rounded-full ${
                isActive
                  ? 'bg-charcoal text-white shadow-soft-sm'
                  : 'bg-white/80 text-secondary hover:text-charcoal border border-charcoal/10 hover:border-charcoal/30'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Masonry / Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              onClick={() => openLightbox(idx)}
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

              {/* Hover Overlay */}
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
                  <h4 className="font-serif text-xl sm:text-2xl font-medium text-white mb-1">
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
        {activeLightboxIndex !== null && filteredItems[activeLightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-charcoal/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevLightbox();
              }}
              className="absolute left-4 sm:left-8 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextLightbox();
              }}
              className="absolute right-4 sm:right-8 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Modal Image & Info */}
            <div
              className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative overflow-hidden rounded shadow-2xl max-h-[65vh] w-full flex items-center justify-center bg-black/40">
                <img
                  src={filteredItems[activeLightboxIndex].image}
                  alt={filteredItems[activeLightboxIndex].title}
                  className="max-h-[65vh] max-w-full object-contain"
                />
              </div>

              <div className="mt-4 text-center text-white">
                <span className="text-[10px] uppercase tracking-luxury text-rose-pastel font-semibold">
                  {filteredItems[activeLightboxIndex].category}
                </span>
                <h3 className="font-serif text-2xl font-medium mt-1">
                  {filteredItems[activeLightboxIndex].title}
                </h3>
                <p className="text-xs text-white/70 mt-1 max-w-md mx-auto">
                  {filteredItems[activeLightboxIndex].subtitle}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

