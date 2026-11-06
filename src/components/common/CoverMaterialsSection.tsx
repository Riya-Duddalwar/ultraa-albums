import React from 'react';
import { coverMaterialsList } from '../../data/coverMaterials';
import { Sparkles, Check } from 'lucide-react';

export const CoverMaterialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-ivory border-t border-b border-charcoal/5">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-luxury text-secondary font-medium mb-2">
            <Sparkles className="w-3.5 h-3.5 text-dusty-rose" />
            <span>Artisan Finishes</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-charcoal">
            The Covers — Where the Story Begins
          </h2>
          <p className="text-xs sm:text-sm text-secondary mt-3 leading-relaxed">
            Creating the cover is one of the most exciting moments in the album process. Ultraa Albums offers handmade covers combining tactile materials, precision foil embossing, and master craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coverMaterialsList.map((material, idx) => (
            <div
              key={material.id}
              className="editorial-card p-7 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] tracking-luxury uppercase font-semibold text-secondary">
                    Option 0{idx + 1}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-rose-pastel" />
                </div>
                <h3 className="font-serif text-xl font-medium text-charcoal mb-2.5">
                  {material.name}
                </h3>
                <p className="text-xs text-secondary leading-relaxed mb-6">
                  {material.description}
                </p>
              </div>

              {material.features && (
                <div className="pt-4 border-t border-charcoal/5">
                  <ul className="space-y-1.5">
                    {material.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-[11px] text-charcoal/80">
                        <Check className="w-3 h-3 text-secondary shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

