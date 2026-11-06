import React from 'react';
import { ProductSpec } from '../../types';
import { SectionHeading } from '../common/SectionHeading';
import { ShieldCheck, Award } from 'lucide-react';

interface ProductSpecificationsProps {
  tag?: string;
  title?: string;
  subtitle?: string;
  specs: ProductSpec[];
  notes?: string;
  className?: string;
}

export const ProductSpecifications: React.FC<ProductSpecificationsProps> = ({
  tag = 'Engineering Specs',
  title = 'Technical & Archival Specifications',
  subtitle = 'Every volume conforms to professional laboratory standards with strict quality verification before dispatch.',
  specs,
  notes,
  className = '',
}) => {
  return (
    <section className={`py-16 sm:py-24 bg-ivory border-b border-charcoal/5 ${className}`}>
      <div className="section-container max-w-4xl">
        <SectionHeading tag={tag} title={title} subtitle={subtitle} />

        <div className="bg-white border border-charcoal/10 rounded-sm shadow-soft-sm overflow-hidden p-6 sm:p-10">
          <div className="divide-y divide-charcoal/10">
            {specs.map((spec, idx) => (
              <div
                key={idx}
                className="py-4 flex flex-col sm:flex-row sm:justify-between text-xs sm:text-sm gap-1 sm:gap-6"
              >
                <span className="font-semibold text-charcoal tracking-subtle uppercase text-[11px] sm:w-1/3">
                  {spec.label}
                </span>
                <span className="text-secondary sm:w-2/3 leading-relaxed font-light">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>

          {notes && (
            <div className="mt-8 pt-6 border-t border-charcoal/10 flex items-start gap-3 bg-beige-warm/30 p-4 rounded-sm text-xs text-secondary">
              <Award className="w-4 h-4 text-charcoal shrink-0 mt-0.5" />
              <span>{notes}</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

