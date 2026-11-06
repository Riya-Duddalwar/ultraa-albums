import React, { useState } from 'react';

interface LuxuryImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: 'square' | 'video' | 'portrait' | 'auto';
  category?: string;
  caption?: string;
}

export const LuxuryImage: React.FC<LuxuryImageProps> = ({
  src,
  alt,
  className = '',
  aspectRatio = 'auto',
  category,
  caption,
}) => {
  const [hasError, setHasError] = useState(false);

  const aspectClass =
    aspectRatio === 'square'
      ? 'aspect-square'
      : aspectRatio === 'video'
      ? 'aspect-[16/10]'
      : aspectRatio === 'portrait'
      ? 'aspect-[3/4]'
      : '';

  if (hasError || !src) {
    return (
      <div
        className={`relative flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-beige-warm/30 via-ivory to-rose-pastel/20 border border-charcoal/10 rounded-sm overflow-hidden ${aspectClass} ${className}`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(#353535_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.03]" />
        
        {category && (
          <span className="text-[10px] tracking-luxury uppercase font-medium text-secondary mb-2">
            {category}
          </span>
        )}
        
        <div className="w-10 h-10 mb-3 rounded-full border border-charcoal/15 flex items-center justify-center bg-white/60 text-secondary">
          <svg className="w-5 h-5 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        
        <p className="font-serif italic text-sm text-charcoal/80 max-w-[240px] leading-snug">
          {caption || alt}
        </p>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-ivory/60 ${aspectClass} ${className}`}>
      <img
        src={src}
        alt={alt}
        onError={() => setHasError(true)}
        className="w-full h-full object-cover object-center transition-transform duration-700 ease-out hover:scale-[1.02]"
        loading="lazy"
      />
    </div>
  );
};

