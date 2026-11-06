import React from 'react';
import { AlbumPageContent } from '../../data/albumSpreads';
import { Sparkles } from 'lucide-react';

interface AlbumPageRendererProps {
  content: AlbumPageContent;
  pageNumber: number;
  isLeft: boolean;
  isPanoramic?: boolean;
  panoramicImage?: string;
}

export const AlbumPageRenderer: React.FC<AlbumPageRendererProps> = ({
  content,
  pageNumber,
  isLeft,
  isPanoramic = false,
  panoramicImage,
}) => {
  // If this spread is a continuous panoramic bleed
  if (isPanoramic && panoramicImage) {
    return (
      <div className="relative w-full h-full overflow-hidden bg-[#1E1C1A] select-none">
        {/* Continuous half of panoramic image */}
        <div
          className="absolute inset-0 w-[200%] h-full bg-cover bg-center transition-transform duration-300"
          style={{
            backgroundImage: `url(${panoramicImage})`,
            transform: isLeft ? 'translateX(0%)' : 'translateX(-50%)',
          }}
        />

        {/* Paper texture overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/25 pointer-events-none" />

        {/* Subtle page number */}
        <div
          className={`absolute bottom-3 ${
            isLeft ? 'left-4' : 'right-4'
          } text-[10px] font-mono tracking-widest text-white/80 bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded pointer-events-none`}
        >
          {String(pageNumber).padStart(2, '0')}
        </div>

        {/* Gutter inner shadow for fold depth */}
        <div
          className={`absolute inset-y-0 ${
            isLeft ? 'right-0' : 'left-0'
          } w-8 pointer-events-none ${
            isLeft
              ? 'bg-gradient-to-l from-black/30 to-transparent'
              : 'bg-gradient-to-r from-black/30 to-transparent'
          }`}
        />
      </div>
    );
  }

  // Cover Page Style
  if (content.type === 'cover') {
    return (
      <div className="relative w-full h-full p-6 sm:p-8 flex flex-col justify-between overflow-hidden bg-gradient-to-br from-[#2E2824] via-[#201C19] to-[#161412] text-ivory select-none">
        {/* Background leather/casket texture */}
        {content.image && (
          <div
            className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay"
            style={{ backgroundImage: `url(${content.image})` }}
          />
        )}
        <div className="absolute inset-0 border-[6px] border-[#3F3630]/60 pointer-events-none m-2 sm:m-3" />
        <div className="absolute inset-0 border border-[#D4AF37]/30 pointer-events-none m-3 sm:m-4" />

        <div className="relative z-10">
          {content.tag && (
            <span className="inline-block text-[9px] uppercase tracking-luxury text-[#EAD5D2] font-semibold bg-white/5 border border-white/10 px-2.5 py-1 rounded-sm">
              {content.tag}
            </span>
          )}
        </div>

        <div className="relative z-10 text-center my-auto py-6">
          <div className="w-8 h-8 mx-auto mb-4 rounded-full border border-[#D4AF37]/40 flex items-center justify-center">
            <Sparkles className="w-3.5 h-3.5 text-[#EAD5D2]" />
          </div>
          <h2 className="font-serif text-xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-white mb-2 leading-tight">
            {content.title}
          </h2>
          {content.subtitle && (
            <p className="text-[11px] sm:text-xs text-[#EAD5D2]/80 uppercase tracking-luxury font-light">
              {content.subtitle}
            </p>
          )}
          {content.quote && (
            <p className="mt-4 text-[10px] sm:text-xs text-white/70 italic font-serif max-w-xs mx-auto leading-relaxed">
              {content.quote}
            </p>
          )}
        </div>

        <div className="relative z-10 flex items-center justify-between text-[9px] uppercase tracking-luxury text-white/50 border-t border-white/10 pt-3">
          <span>{content.caption || 'Ultraa Albums'}</span>
          <span className="font-mono">{String(pageNumber).padStart(2, '0')}</span>
        </div>
      </div>
    );
  }

  // Split-Vertical / Multi-Image Layout
  if (content.type === 'split-vertical') {
    return (
      <div className="relative w-full h-full p-4 sm:p-6 bg-[#FCFAF7] flex flex-col justify-between overflow-hidden select-none border border-charcoal/5">
        <div>
          {content.tag && (
            <span className="text-[8px] sm:text-[9px] uppercase tracking-luxury text-secondary font-semibold block mb-2">
              {content.tag}
            </span>
          )}
          {content.title && (
            <h3 className="font-serif text-base sm:text-xl font-medium text-charcoal mb-2 leading-snug">
              {content.title}
            </h3>
          )}
        </div>

        <div className="grid grid-cols-2 gap-2 sm:gap-3 my-auto">
          {content.image && (
            <div className="aspect-[3/4] rounded-xs overflow-hidden bg-ivory shadow-soft-sm border border-charcoal/10">
              <img
                src={content.image}
                alt={content.title || 'Wedding detail'}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          )}
          {content.secondaryImage && (
            <div className="aspect-[3/4] rounded-xs overflow-hidden bg-ivory shadow-soft-sm border border-charcoal/10">
              <img
                src={content.secondaryImage}
                alt={content.title || 'Wedding portrait'}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          )}
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-charcoal/10 text-[9px] text-secondary">
          <p className="line-clamp-1 italic font-serif text-[10px] text-charcoal/80">
            {content.caption}
          </p>
          <span className="font-mono ml-2 shrink-0">{String(pageNumber).padStart(2, '0')}</span>
        </div>
      </div>
    );
  }

  // Editorial Text & Quote Layout
  if (content.type === 'editorial-text') {
    return (
      <div className="relative w-full h-full p-6 sm:p-8 bg-[#FBF8F4] flex flex-col justify-between overflow-hidden select-none border border-charcoal/5">
        <div className="flex items-center justify-between">
          {content.tag && (
            <span className="text-[8px] sm:text-[9px] uppercase tracking-luxury text-secondary font-semibold">
              {content.tag}
            </span>
          )}
          <span className="font-mono text-[9px] text-secondary">
            {String(pageNumber).padStart(2, '0')}
          </span>
        </div>

        <div className="my-auto py-4 space-y-4 max-w-sm mx-auto text-center">
          {content.image && (
            <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-full overflow-hidden border-2 border-beige-warm/60 shadow-soft-sm">
              <img
                src={content.image}
                alt="Editorial vignette"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          )}

          {content.title && (
            <h3 className="font-serif text-lg sm:text-2xl font-medium text-charcoal leading-tight">
              {content.title}
            </h3>
          )}

          {content.quote && (
            <blockquote className="font-serif italic text-xs sm:text-sm text-charcoal/85 leading-relaxed border-y border-charcoal/10 py-3">
              {content.quote}
            </blockquote>
          )}

          {content.subtitle && (
            <p className="text-[10px] sm:text-xs text-secondary font-light leading-relaxed">
              {content.subtitle}
            </p>
          )}
        </div>

        <div className="text-center text-[9px] uppercase tracking-luxury text-secondary border-t border-charcoal/10 pt-2">
          {content.caption || 'Ultraa Albums Heirloom Collection'}
        </div>
      </div>
    );
  }

  // Single Large Hero Photo with Editorial Margin (Default)
  return (
    <div className="relative w-full h-full p-4 sm:p-6 bg-[#FAF7F2] flex flex-col justify-between overflow-hidden select-none border border-charcoal/5">
      <div className="flex items-center justify-between mb-2">
        {content.tag ? (
          <span className="text-[8px] sm:text-[9px] uppercase tracking-luxury text-secondary font-semibold">
            {content.tag}
          </span>
        ) : (
          <span />
        )}
        <span className="font-mono text-[9px] text-secondary">
          {String(pageNumber).padStart(2, '0')}
        </span>
      </div>

      <div className="relative my-auto w-full flex-1 max-h-[78%] rounded-xs overflow-hidden bg-ivory shadow-soft-sm border border-charcoal/10">
        {content.image && (
          <img
            src={content.image}
            alt={content.title || 'Album photograph'}
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
        )}
      </div>

      <div className="pt-2 flex items-center justify-between text-[9px] text-secondary">
        <div>
          {content.title && (
            <span className="font-serif text-[11px] sm:text-xs text-charcoal font-medium mr-2">
              {content.title}
            </span>
          )}
          {content.caption && (
            <span className="hidden sm:inline italic text-[10px] text-secondary font-light">
              — {content.caption}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

