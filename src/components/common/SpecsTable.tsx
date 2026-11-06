import React from 'react';
import { ProductSpec } from '../../types';

interface SpecsTableProps {
  specs: ProductSpec[];
  title?: string;
}

export const SpecsTable: React.FC<SpecsTableProps> = ({
  specs,
  title = 'Artisan Specifications & Details',
}) => {
  return (
    <div className="bg-white border border-charcoal/10 p-6 sm:p-8 rounded-sm shadow-soft-sm">
      <h3 className="font-serif text-xl sm:text-2xl font-medium text-charcoal mb-6 border-b border-charcoal/5 pb-4">
        {title}
      </h3>
      <div className="divide-y divide-charcoal/5">
        {specs.map((spec, idx) => (
          <div key={idx} className="py-3.5 flex flex-col sm:flex-row sm:justify-between text-xs gap-1 sm:gap-4">
            <span className="font-medium text-charcoal tracking-subtle uppercase text-[11px] sm:w-1/3">
              {spec.label}
            </span>
            <span className="text-secondary sm:w-2/3 leading-relaxed">
              {spec.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

