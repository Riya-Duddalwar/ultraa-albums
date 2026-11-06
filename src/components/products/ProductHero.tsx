import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ShieldCheck, Globe, Award } from 'lucide-react';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { ArtisanGuaranteeBadge } from '../common/ArtisanGuaranteeBadge';

interface ProductHeroProps {
  title: string;
  subtitle: string;
  categoryTag?: string;
  image: string;
  imageAlt: string;
  specsSummary?: string[];
  ctaPrimaryText?: string;
  ctaPrimaryAnchor?: string;
}

export const ProductHero: React.FC<ProductHeroProps> = ({
  title,
  subtitle,
  categoryTag = 'Handcrafted Heirlooms',
  image,
  imageAlt,
  specsSummary = ['Archival Substrate', 'Hand-Bound in Mumbai', 'Worldwide Shipping'],
  ctaPrimaryText = 'Inquire / Request Quote',
  ctaPrimaryAnchor = '#product-inquiry',
}) => {
  return (
    <section className="relative py-12 lg:py-20 bg-gradient-to-b from-beige-warm/25 via-ivory to-ivory border-b border-charcoal/5">
      <div className="section-container">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Breadcrumbs
            items={[
              { label: 'Products', path: '/flush-mount-album' },
              { label: title },
            ]}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left: Product Overview & Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="flex items-center gap-3">
              <ArtisanGuaranteeBadge />
            </div>

            <div>
              <span className="text-[10px] uppercase tracking-luxury text-secondary font-semibold block mb-2">
                {categoryTag}
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-charcoal tracking-tight leading-[1.15]">
                {title}
              </h1>
            </div>

            <p className="text-sm sm:text-base text-secondary font-light leading-relaxed max-w-xl">
              {subtitle}
            </p>

            {/* Quick Specs Pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              {specsSummary.map((spec, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/80 border border-charcoal/10 rounded-full text-[11px] text-charcoal/80 font-medium"
                >
                  <Sparkles className="w-2.5 h-2.5 text-dusty-rose" />
                  <span>{spec}</span>
                </span>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a href={ctaPrimaryAnchor} className="btn-luxury-primary">
                <span>{ctaPrimaryText}</span>
                <ArrowRight className="w-3.5 h-3.5 ml-2" />
              </a>
              <a href="#product-materials" className="btn-luxury-secondary">
                <span>Explore Covers</span>
              </a>
            </div>

            {/* Studio sample program callout */}
            <div className="pt-4 border-t border-charcoal/10 flex items-center gap-3 text-xs text-secondary">
              <Award className="w-4 h-4 text-charcoal shrink-0" />
              <span>
                <strong>"We Invest In You"</strong> — 10% Studio Sample discount available for professional photographers.
              </span>
            </div>
          </motion.div>

          {/* Right: Large Editorial Showcase Photograph */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-6 relative"
          >
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden bg-white shadow-soft-lg border border-charcoal/10 p-2 sm:p-3">
              <div className="w-full h-full overflow-hidden rounded bg-ivory">
                <img
                  src={image}
                  alt={imageAlt}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-charcoal/10 shadow-soft-sm flex items-center gap-2">
                <Globe className="w-3 h-3 text-secondary" />
                <span className="text-[10px] uppercase tracking-luxury font-medium text-charcoal">
                  100% Artisan Hand-Bound
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

