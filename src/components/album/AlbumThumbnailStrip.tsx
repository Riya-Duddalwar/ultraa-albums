import React, { useRef, useEffect } from 'react';
import { AlbumSpread } from '../../data/albumSpreads';

interface AlbumThumbnailStripProps {
  spreads: AlbumSpread[];
  currentIndex: number;
  onSelectSpread: (index: number) => void;
  className?: string;
  isDark?: boolean;
}

export const AlbumThumbnailStrip: React.FC<AlbumThumbnailStripProps> = ({
  spreads,
  currentIndex,
  onSelectSpread,
  className = '',
  isDark = true,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll the active thumbnail into view
  useEffect(() => {
    if (!scrollContainerRef.current) return;
    const activeEl = scrollContainerRef.current.children[currentIndex] as HTMLElement | undefined;
    if (activeEl) {
      activeEl.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  }, [currentIndex]);

  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <div
        ref={scrollContainerRef}
        className="flex items-center gap-3 overflow-x-auto py-2 px-4 no-scrollbar justify-start md:justify-center"
      >
        {spreads.map((spread, idx) => {
          const isActive = idx === currentIndex;
          const previewImage =
            spread.panoramicImage ||
            spread.rightPage.image ||
            spread.leftPage.image ||
            '/images/products/flush-mount-album.jpg';

          return (
            <button
              key={spread.id}
              type="button"
              onClick={() => onSelectSpread(idx)}
              className={`group relative shrink-0 flex flex-col items-center focus:outline-none transition-all duration-200 ${
                isActive ? 'scale-105' : 'opacity-70 hover:opacity-100 hover:scale-102'
              }`}
            >
              {/* Miniature Double-Spread Card */}
              <div
                className={`relative w-20 sm:w-24 aspect-[16/10] rounded-xs overflow-hidden border transition-all ${
                  isActive
                    ? 'border-dusty-rose ring-2 ring-dusty-rose/40 shadow-soft-sm'
                    : isDark
                    ? 'border-white/20 bg-black/40'
                    : 'border-charcoal/15 bg-ivory'
                }`}
              >
                {/* Simulated Center Fold Line */}
                <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-0.5 bg-black/40 z-10 pointer-events-none" />

                <img
                  src={previewImage}
                  alt={`Spread ${idx + 1}`}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />

                {/* Number Badge */}
                <div className="absolute bottom-1 right-1 px-1 py-0.2 bg-black/70 backdrop-blur-xs text-[8px] font-mono text-white rounded">
                  {String(idx + 1).padStart(2, '0')}
                </div>
              </div>

              {/* Spread Label */}
              <span
                className={`text-[9px] font-mono mt-1 transition-colors ${
                  isActive
                    ? 'text-dusty-rose font-medium'
                    : isDark
                    ? 'text-white/60 group-hover:text-white'
                    : 'text-secondary group-hover:text-charcoal'
                }`}
              >
                {String(spread.leftPageNumber).padStart(2, '0')}–{String(spread.rightPageNumber).padStart(2, '0')}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

