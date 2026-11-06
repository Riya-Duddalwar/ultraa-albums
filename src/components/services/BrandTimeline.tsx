import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { companyMilestones } from '../../data/company';
import { Calendar, Sparkles } from 'lucide-react';

interface BrandTimelineProps {
  className?: string;
}

export const BrandTimeline: React.FC<BrandTimelineProps> = ({ className = '' }) => {
  return (
    <section className={`py-20 lg:py-28 bg-ivory border-b border-charcoal/5 ${className}`}>
      <div className="section-container">
        <SectionHeading
          tag="Our Milestone Timeline"
          title="From Working Photographers to Global Manufacturers"
          subtitle="How a team of passionate photographers turned a binding frustration in 2011 into an enduring international heirloom brand."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {companyMilestones.map((m, idx) => (
            <div
              key={m.year}
              className="editorial-card p-8 bg-white flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-serif text-4xl font-medium text-rose-pastel">
                    {m.year}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-beige-warm/40 border border-charcoal/10 flex items-center justify-center">
                    <Calendar className="w-3.5 h-3.5 text-secondary" />
                  </div>
                </div>

                <h3 className="font-serif text-xl font-medium text-charcoal mb-2.5">
                  {m.title}
                </h3>

                <p className="text-xs text-secondary leading-relaxed font-light">
                  {m.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-charcoal/5 text-[10px] uppercase tracking-luxury text-secondary font-semibold">
                Milestone 0{idx + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

