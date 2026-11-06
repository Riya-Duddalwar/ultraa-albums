import React from 'react';
import { ArtisanGuaranteeBadge } from './ArtisanGuaranteeBadge';

interface PageHeaderProps {
  category?: string;
  title: string;
  subtitle?: string;
  showGuarantee?: boolean;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  category,
  title,
  subtitle,
  showGuarantee = true,
}) => {
  return (
    <div className="relative py-16 sm:py-24 bg-gradient-to-b from-beige-warm/30 via-ivory to-ivory border-b border-charcoal/5">
      <div className="section-container text-center max-w-4xl mx-auto">
        {category && (
          <span className="inline-block text-[10px] sm:text-xs uppercase tracking-luxury text-secondary font-medium mb-3">
            {category}
          </span>
        )}
        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-medium text-charcoal tracking-tight leading-[1.15]">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xs sm:text-sm md:text-base text-secondary mt-4 sm:mt-6 leading-relaxed max-w-2xl mx-auto font-sans font-light">
            {subtitle}
          </p>
        )}
        {showGuarantee && (
          <div className="mt-8 flex justify-center">
            <ArtisanGuaranteeBadge />
          </div>
        )}
      </div>
    </div>
  );
};

