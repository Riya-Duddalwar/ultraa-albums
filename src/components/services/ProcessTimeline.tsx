import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { Check, ArrowRight } from 'lucide-react';

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  highlight?: string;
}

interface ProcessTimelineProps {
  tag?: string;
  title?: string;
  subtitle?: string;
  steps: ProcessStep[];
  className?: string;
}

export const ProcessTimeline: React.FC<ProcessTimelineProps> = ({
  tag = 'Our Methodology',
  title = 'Our Designing Process',
  subtitle = 'From initial digital upload to unlimited revisions and soft-copy approval, our human designers collaborate closely with you.',
  steps,
  className = '',
}) => {
  return (
    <section className={`py-16 sm:py-24 bg-ivory border-b border-charcoal/5 ${className}`}>
      <div className="section-container">
        <SectionHeading tag={tag} title={title} subtitle={subtitle} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((st, idx) => (
            <div
              key={st.step}
              className="editorial-card p-8 bg-white flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-serif text-3xl font-medium text-rose-pastel">
                    {st.step}
                  </span>
                  <span className="text-[10px] uppercase tracking-luxury text-secondary font-semibold">
                    Stage {idx + 1}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-medium text-charcoal mb-2.5">
                  {st.title}
                </h3>

                <p className="text-xs text-secondary leading-relaxed font-light">
                  {st.description}
                </p>
              </div>

              {st.highlight && (
                <div className="mt-6 pt-3 border-t border-charcoal/5 flex items-center gap-2 text-[10px] uppercase tracking-luxury text-charcoal font-semibold">
                  <Check className="w-3.5 h-3.5 text-secondary shrink-0" />
                  <span>{st.highlight}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

