import React, { useState } from 'react';
import { Sparkles, Maximize2, ArrowRight } from 'lucide-react';
import { DigitalAlbumCollection } from '../../data/albumSpreads';
import { InteractiveFlipbook } from './InteractiveFlipbook';
import { FullScreenAlbumModal } from './FullScreenAlbumModal';

interface ProductAlbumViewerProps {
  collection: DigitalAlbumCollection;
  tag?: string;
  title?: string;
  subtitle?: string;
  bgClass?: string;
  showThemeSelector?: boolean;
}

export const ProductAlbumViewer: React.FC<ProductAlbumViewerProps> = ({
  collection,
  tag = 'Interactive Digital Inspection',
  title = 'Browse the Album in 3D',
  subtitle = 'Turn pages by clicking the edges, using the arrows, or swiping on touch screens.',
  bgClass = 'bg-ivory',
  showThemeSelector = false,
}) => {
  const [spreadIndex, setSpreadIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className={`py-20 lg:py-28 border-b border-charcoal/5 ${bgClass}`}>
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/80 border border-charcoal/10 rounded-full text-[10px] uppercase tracking-luxury text-secondary font-medium mb-3">
            <Sparkles className="w-3 h-3 text-dusty-rose" />
            <span>{tag}</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-charcoal leading-tight mb-3">
            {title}
          </h2>

          <p className="text-xs sm:text-sm text-secondary font-light max-w-xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Theme Selector for Album Designing */}
        {showThemeSelector && (
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8 max-w-2xl mx-auto">
            {collection.spreads.map((spread, idx) => (
              <button
                key={spread.id}
                type="button"
                onClick={() => setSpreadIndex(idx)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                  spreadIndex === idx
                    ? 'bg-charcoal text-white shadow-soft-sm'
                    : 'bg-white border border-charcoal/10 text-secondary hover:text-charcoal'
                }`}
              >
                {spread.themeStyle || `Theme 0${idx + 1}`}
              </button>
            ))}
          </div>
        )}

        {/* Flipbook Container */}
        <div className="bg-white/80 backdrop-blur-sm p-4 sm:p-8 rounded-sm border border-charcoal/10 shadow-soft-md max-w-5xl mx-auto">
          <InteractiveFlipbook
            collection={collection}
            activeSpreadIndex={spreadIndex}
            onSpreadChange={setSpreadIndex}
            onExploreFullAlbum={() => setIsModalOpen(true)}
          />
        </div>

        {/* Full Screen CTA button */}
        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="btn-luxury-secondary text-xs py-3 px-7 inline-flex items-center gap-2"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span>Open Immersive Full-Screen Experience</span>
          </button>
        </div>
      </div>

      {/* Modal */}
      <FullScreenAlbumModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        collection={collection}
        initialSpreadIndex={spreadIndex}
      />
    </section>
  );
};

