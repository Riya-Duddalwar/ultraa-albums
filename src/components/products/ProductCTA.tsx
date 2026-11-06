import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Mail, ShieldCheck } from 'lucide-react';

interface ProductCTAProps {
  productName: string;
  className?: string;
}

export const ProductCTA: React.FC<ProductCTAProps> = ({
  productName,
  className = '',
}) => {
  return (
    <section id="product-inquiry" className={`py-20 lg:py-28 bg-white border-t border-charcoal/5 ${className}`}>
      <div className="section-container">
        <div className="bg-gradient-to-b from-beige-warm/30 via-ivory to-white border border-charcoal/10 rounded-sm p-8 sm:p-14 text-center max-w-4xl mx-auto shadow-soft-sm">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-charcoal/10 rounded-full text-[10px] uppercase tracking-luxury text-secondary font-medium mb-4">
            <Sparkles className="w-3 h-3 text-dusty-rose" />
            <span>Bespoke Heirlooms</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-medium text-charcoal leading-tight mb-4">
            Ready to order your {productName}?
          </h2>

          <p className="text-xs sm:text-base text-secondary font-light max-w-xl mx-auto leading-relaxed mb-8">
            Tell us about your project specifications, cover material preference, or studio sample requirements. Our Mumbai workshop team responds within 24 hours.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact-us"
              className="btn-luxury-primary"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-3.5 h-3.5 ml-2" />
            </Link>
            <Link
              to="/about-us"
              className="btn-luxury-secondary"
            >
              <span>Learn About Our Atelier</span>
            </Link>
          </div>

          <div className="mt-8 pt-6 border-t border-charcoal/10 flex flex-wrap items-center justify-center gap-6 text-[11px] uppercase tracking-luxury text-secondary">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-charcoal" />
              <span>100% Quality Guarantee</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-dusty-rose" />
              <span>Free Soft-Copy Proofing</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-secondary" />
              <span>24-Hour Studio Response</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
