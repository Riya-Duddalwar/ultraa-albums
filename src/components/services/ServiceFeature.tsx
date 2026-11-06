import React from 'react';
import { Check, Sparkles } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';

export interface ServiceScopeItem {
  title: string;
  description: string;
  tag?: string;
  icon?: React.ReactNode;
}

interface ServiceFeatureProps {
  id?: string;
  tag?: string;
  title?: string;
  subtitle?: string;
  features: ServiceScopeItem[];
  className?: string;
}

export const ServiceFeature: React.FC<ServiceFeatureProps> = ({
  id = 'service-scope',
  tag = 'Capabilities & Scope',
  title = 'Services We Offer',
  subtitle = 'Comprehensive studio services tailored to elevate photographers, cinematographers, and discerning couples.',
  features,
  className = '',
}) => {
  return (
    <section id={id} className={`py-16 sm:py-24 bg-white border-b border-charcoal/5 ${className}`}>
      <div className="section-container">
        <SectionHeading tag={tag} title={title} subtitle={subtitle} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat, idx) => (
            <div
              key={idx}
              className="editorial-card p-7 flex flex-col justify-between bg-ivory/30"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] tracking-luxury uppercase font-semibold text-secondary">
                    {feat.tag || `Scope 0${idx + 1}`}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white border border-charcoal/10 flex items-center justify-center text-charcoal">
                    {feat.icon || <Sparkles className="w-3.5 h-3.5 text-dusty-rose" />}
                  </div>
                </div>

                <h3 className="font-serif text-xl font-medium text-charcoal mb-2.5">
                  {feat.title}
                </h3>

                <p className="text-xs text-secondary leading-relaxed font-light">
                  {feat.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-charcoal/5 flex items-center gap-2 text-[10px] uppercase tracking-luxury text-charcoal font-medium">
                <Check className="w-3 h-3 text-secondary" />
                <span>Included in Service</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

