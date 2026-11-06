import React from 'react';

interface SectionHeadingProps {
  tag?: string;
  title: string;
  subtitle?: string;
  alignment?: 'center' | 'left';
  className?: string;
  badge?: React.ReactNode;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  tag,
  title,
  subtitle,
  alignment = 'center',
  className = '',
  badge,
}) => {
  const isCenter = alignment === 'center';

  return (
    <div
      className={`mb-12 sm:mb-16 ${isCenter ? 'text-center mx-auto max-w-2xl' : 'text-left max-w-2xl'} ${className}`}
    >
      {badge && <div className={`mb-4 flex ${isCenter ? 'justify-center' : 'justify-start'}`}>{badge}</div>}
      
      {tag && (
        <span className="inline-block text-[10px] sm:text-[11px] uppercase tracking-luxury text-secondary font-semibold mb-2">
          {tag}
        </span>
      )}

      <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-charcoal tracking-tight leading-[1.15]">
        {title}
      </h2>

      {subtitle && (
        <p className="text-xs sm:text-sm text-secondary mt-3 sm:mt-4 leading-relaxed font-light">
          {subtitle}
        </p>
      )}
    </div>
  );
};

