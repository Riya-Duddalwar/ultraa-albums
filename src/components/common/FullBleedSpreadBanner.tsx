import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface FullBleedSpreadBannerProps {
  image: string;
  imageAlt?: string;
  tag?: string;
  title: string;
  subtitle?: string;
  quote?: string;
  accentBg?: string; // e.g. 'bg-sage-light/60', 'bg-rose-light/50', 'bg-beige-warm/40'
}

export const FullBleedSpreadBanner: React.FC<FullBleedSpreadBannerProps> = ({
  image,
  imageAlt = 'Panoramic Double-Page Album Spread',
  tag = 'Panoramic Horizon',
  title,
  subtitle,
  quote,
  accentBg = 'bg-gradient-to-b from-ivory via-beige-warm/25 to-ivory',
}) => {
  return (
    <section className={`relative py-16 sm:py-24 border-t border-b border-charcoal/5 ${accentBg} overflow-hidden`}>
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center space-y-4 mb-10 sm:mb-14">
          {tag && (
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/80 border border-charcoal/10 rounded-full text-[10px] uppercase tracking-luxury text-secondary font-medium">
              <Sparkles className="w-3 h-3 text-dusty-rose" />
              <span>{tag}</span>
            </div>
          )}

          <h2 className="font-serif text-3xl sm:text-5xl font-medium text-charcoal leading-tight">
            {title}
          </h2>

          {subtitle && (
            <p className="text-xs sm:text-base text-secondary font-light max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        {/* 21:9 Ultra-Wide Cinematic Spread Display */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative aspect-[21/9] rounded-sm overflow-hidden bg-white shadow-soft-lg border border-charcoal/10 group"
        >
          <img
            src={image}
            alt={imageAlt}
            loading="lazy"
            className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.02]"
          />

          {/* Center binding crease simulation */}
          <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-r from-black/10 via-black/25 to-black/10 pointer-events-none opacity-40 shadow-[0_0_8px_rgba(0,0,0,0.15)]" />

          {/* Floating Subtle Badge */}
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-charcoal/10 shadow-soft-sm text-[10px] uppercase tracking-luxury text-charcoal font-medium">
            Continuous Full-Bleed Panorama · Zero Gutter Split
          </div>
        </motion.div>

        {quote && (
          <div className="mt-8 text-center">
            <p className="font-serif italic text-lg sm:text-xl text-secondary max-w-xl mx-auto">
              "{quote}"
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

