import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';

export interface GalleryPhoto {
  title: string;
  subtitle: string;
  image: string;
  aspect?: 'wide' | 'square' | 'portrait';
}

interface ProductGalleryProps {
  tag?: string;
  title?: string;
  subtitle?: string;
  photos: GalleryPhoto[];
  className?: string;
}

export const ProductGallery: React.FC<ProductGalleryProps> = ({
  tag = 'Visual Archive',
  title = 'Artisan Details & Angles',
  subtitle = 'Observe the precision corner folds, zero-gutter panoramic flat spreads, and tactile material textures.',
  photos,
  className = '',
}) => {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setActiveLightboxIndex(index);
  const closeLightbox = () => setActiveLightboxIndex(null);

  const nextLightbox = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % photos.length);
    }
  };

  const prevLightbox = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex - 1 + photos.length) % photos.length);
    }
  };

  return (
    <section className={`py-16 sm:py-24 bg-ivory border-b border-charcoal/5 ${className}`}>
      <div className="section-container">
        <SectionHeading tag={tag} title={title} subtitle={subtitle} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, idx) => (
            <div
              key={idx}
              onClick={() => openLightbox(idx)}
              className="group relative cursor-pointer overflow-hidden rounded-sm bg-white border border-charcoal/10 shadow-soft-sm"
            >
              <div className="aspect-[4/3] overflow-hidden bg-ivory">
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-charcoal/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 text-white">
                <div className="flex justify-end">
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Maximize2 className="w-4 h-4 text-white" />
                  </div>
                </div>

                <div>
                  <h4 className="font-serif text-xl font-medium text-white mb-1">
                    {photo.title}
                  </h4>
                  <p className="text-xs text-white/80 font-light">
                    {photo.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {activeLightboxIndex !== null && photos[activeLightboxIndex] && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-charcoal/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
              onClick={closeLightbox}
            >
              <button
                onClick={closeLightbox}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>

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

              <div
                className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative overflow-hidden rounded shadow-2xl max-h-[65vh] w-full flex items-center justify-center bg-black/40">
                  <img
                    src={photos[activeLightboxIndex].image}
                    alt={photos[activeLightboxIndex].title}
                    className="max-h-[65vh] max-w-full object-contain"
                  />
                </div>

                <div className="mt-4 text-center text-white">
                  <h3 className="font-serif text-2xl font-medium mt-1">
                    {photos[activeLightboxIndex].title}
                  </h3>
                  <p className="text-xs text-white/70 mt-1 max-w-md mx-auto font-light">
                    {photos[activeLightboxIndex].subtitle}
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

