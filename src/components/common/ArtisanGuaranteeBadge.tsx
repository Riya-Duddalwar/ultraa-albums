import React from 'react';
import { ShieldCheck, Sparkles } from 'lucide-react';

export const ArtisanGuaranteeBadge: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`inline-flex items-center gap-3 px-4 py-2 bg-white/80 backdrop-blur-sm border border-charcoal/10 rounded-full shadow-soft-sm ${className}`}>
      <div className="w-5 h-5 rounded-full bg-sage/60 flex items-center justify-center text-charcoal">
        <ShieldCheck className="w-3.5 h-3.5" />
      </div>
      <div className="flex items-center gap-2 text-[11px] font-medium tracking-subtle text-charcoal">
        <span>100% Quality Guarantee</span>
        <span className="text-secondary opacity-40">|</span>
        <span className="text-secondary font-serif italic flex items-center gap-1">
          <Sparkles className="w-2.5 h-2.5 text-dusty-rose" /> Hand-Bound in Mumbai
        </span>
      </div>
    </div>
  );
};

