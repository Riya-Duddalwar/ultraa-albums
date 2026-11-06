import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Minus } from 'lucide-react';

export const ProductComparison: React.FC = () => {
  return (
    <div className="bg-white border border-charcoal/10 rounded-sm overflow-hidden shadow-soft-sm">
      <div className="p-6 sm:p-8 bg-gradient-to-r from-sage-light/40 via-ivory to-rose-light/30 border-b border-charcoal/10">
        <span className="text-[10px] uppercase tracking-luxury text-secondary font-semibold block mb-1">
          Technical Clarity
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl font-medium text-charcoal">
          Flush Mount vs. Layflat: Key Differences
        </h3>
        <p className="text-xs sm:text-sm text-secondary font-light mt-1 max-w-2xl">
          Both offer seamless full-bleed 2-page spreads without center gutter loss, but they serve different aesthetic and handling preferences.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="border-b border-charcoal/10 bg-ivory/50 text-[10px] uppercase tracking-luxury text-secondary font-semibold">
              <th className="py-4 px-6 w-1/3">Feature / Specification</th>
              <th className="py-4 px-6 w-1/3 bg-beige-warm/20 text-charcoal">
                Flush Mount Album (Flagship)
              </th>
              <th className="py-4 px-6 w-1/3 bg-sage-light/30 text-charcoal">
                Premium Layflat Album
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-charcoal/5">
            <tr>
              <td className="py-4 px-6 font-medium text-charcoal">Page Substrate</td>
              <td className="py-4 px-6 bg-beige-warm/10 font-light text-secondary">
                Rigid 1.0mm or 1.5mm archival core board. Pages do not bend.
              </td>
              <td className="py-4 px-6 bg-sage-light/10 font-light text-secondary">
                Flexible archival substrate bonded back-to-back. Lighter feel.
              </td>
            </tr>
            <tr>
              <td className="py-4 px-6 font-medium text-charcoal">Panoramic Spread</td>
              <td className="py-4 px-6 bg-beige-warm/10 font-light text-secondary">
                Continuous pro-lab print scored across center. Zero gutter gap.
              </td>
              <td className="py-4 px-6 bg-sage-light/10 font-light text-secondary">
                True 180° flat opening. Full horizontal landscape view.
              </td>
            </tr>
            <tr>
              <td className="py-4 px-6 font-medium text-charcoal">Print Medium</td>
              <td className="py-4 px-6 bg-beige-warm/10 font-light text-secondary">
                True optical Fuji Crystal Archive Silver Halide photographic paper.
              </td>
              <td className="py-4 px-6 bg-sage-light/10 font-light text-secondary">
                Silver halide or fine art pro-lab luster press printing.
              </td>
            </tr>
            <tr>
              <td className="py-4 px-6 font-medium text-charcoal">Max Page Capacity</td>
              <td className="py-4 px-6 bg-beige-warm/10 font-light text-secondary">
                Up to 80 pages (40 spreads) to maintain spine integrity.
              </td>
              <td className="py-4 px-6 bg-sage-light/10 font-light text-secondary">
                Up to 120 pages (60 spreads) due to slimmer page profile.
              </td>
            </tr>
            <tr>
              <td className="py-4 px-6 font-medium text-charcoal">Weight & Handling</td>
              <td className="py-4 px-6 bg-beige-warm/10 font-light text-secondary">
                Ceremonial, heavy luxury heft. Heirloom display piece.
              </td>
              <td className="py-4 px-6 bg-sage-light/10 font-light text-secondary">
                Lightweight, comfortable coffee-table reading and sharing.
              </td>
            </tr>
            <tr>
              <td className="py-4 px-6 font-medium text-charcoal">Best Suited For</td>
              <td className="py-4 px-6 bg-beige-warm/10 font-light text-secondary">
                Primary Master Wedding Albums, Luxury Suites, Milestone Celebrations.
              </td>
              <td className="py-4 px-6 bg-sage-light/10 font-light text-secondary">
                Destination Weddings, Travel Portfolios, Parent Books, Family Keepsakes.
              </td>
            </tr>
            <tr className="bg-ivory/30">
              <td className="py-4 px-6 font-medium text-charcoal">Explore Product</td>
              <td className="py-4 px-6 bg-beige-warm/20">
                <Link
                  to="/flush-mount-album"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-luxury text-charcoal hover:underline"
                >
                  <span>Flush Mount Specs</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </td>
              <td className="py-4 px-6 bg-sage-light/30">
                <Link
                  to="/layflat"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-luxury text-charcoal hover:underline"
                >
                  <span>Layflat Specs</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

