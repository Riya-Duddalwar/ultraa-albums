import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

interface CTASectionProps {
  heading?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  className?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  heading = 'Your memories deserve something extraordinary.',
  description = "Let's create something beautiful together.",
  primaryButtonText = 'Get in Touch',
  primaryButtonLink = '/contact-us',
  secondaryButtonText = 'Explore Products',
  secondaryButtonLink = '/flush-mount-album',
  className = '',
}) => {
  return (
    <section className={`relative py-20 sm:py-28 bg-gradient-to-b from-ivory via-beige-warm/30 to-ivory border-t border-b border-charcoal/5 overflow-hidden ${className}`}>
      {/* Background radial accent */}
      <div className="absolute inset-0 bg-[radial-gradient(#EAD5D2_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />

      <div className="section-container relative text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/80 border border-charcoal/10 rounded-full text-[10px] uppercase tracking-luxury text-secondary font-medium mb-4">
          <Sparkles className="w-3 h-3 text-dusty-rose" />
          <span>Bespoke Heirlooms</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-medium text-charcoal tracking-tight leading-[1.15] mb-4">
          {heading}
        </h2>

        <p className="text-sm sm:text-base text-secondary font-light max-w-xl mx-auto leading-relaxed mb-8">
          {description}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link to={primaryButtonLink} className="btn-luxury-primary">
            <span>{primaryButtonText}</span>
            <ArrowRight className="w-3.5 h-3.5 ml-2" />
          </Link>
          <Link to={secondaryButtonLink} className="btn-luxury-secondary">
            <span>{secondaryButtonText}</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

