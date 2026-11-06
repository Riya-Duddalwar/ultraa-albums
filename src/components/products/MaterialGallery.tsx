import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';
import { coverMaterialsList } from '../../data/coverMaterials';
import { SectionHeading } from '../common/SectionHeading';

interface MaterialGalleryProps {
  title?: string;
  subtitle?: string;
  allowedIds?: string[];
  className?: string;
}

export const MaterialGallery: React.FC<MaterialGalleryProps> = ({
  title = 'Handmade Cover Collection',
  subtitle = 'Creating the cover is one of the most exciting moments in the album design process. Every cover is individually handmade with aesthetic sensibility.',
  allowedIds,
  className = '',
}) => {
  const materials = allowedIds
    ? coverMaterialsList.filter((m) => allowedIds.includes(m.id))
    : coverMaterialsList;

  const [activeMaterialId, setActiveMaterialId] = useState<string>(materials[0]?.id || 'leather');

  const activeMaterial = materials.find((m) => m.id === activeMaterialId) || materials[0];

  // Map cover id to image
  const getImageForCover = (id: string) => {
    switch (id) {
      case 'acrylic-crystal':
        return '/images/materials/acrylic.svg';
      case 'canvas':
        return '/images/materials/canvas.svg';
      case 'linen':
        return '/images/materials/linen.svg';
      case 'leather':
        return '/images/materials/leather.svg';
      case 'photo-wrap':
        return '/images/products/photobook.svg';
      case 'metal':
        return '/images/materials/metal.svg';
      case 'wooden':
        return '/images/materials/wood.svg';
      case 'embossed':
        return '/images/craft/details.svg';
      case 'foil-embossing':
        return '/images/materials/leather.svg';
      default:
        return '/images/materials/leather.svg';
    }
  };

  return (
    <section id="product-materials" className={`py-16 sm:py-24 bg-white border-b border-charcoal/5 ${className}`}>
      <div className="section-container">
        <SectionHeading
          tag="Cover Collection"
          title={title}
          subtitle={subtitle}
        />

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {materials.map((m) => {
            const isSelected = m.id === activeMaterialId;
            return (
              <button
                key={m.id}
                onClick={() => setActiveMaterialId(m.id)}
                className={`px-4 py-2 text-xs uppercase tracking-luxury font-medium rounded-full transition-all duration-300 ${
                  isSelected
                    ? 'bg-charcoal text-white shadow-soft-sm'
                    : 'bg-ivory text-secondary hover:text-charcoal border border-charcoal/10'
                }`}
              >
                {m.name.split(' ')[0]}
              </button>
            );
          })}
        </div>

        {/* Active Material Showcase Split */}
        {activeMaterial && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-ivory border border-charcoal/10 rounded-sm p-6 sm:p-10 shadow-card">
            <div className="lg:col-span-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeMaterial.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="relative aspect-[4/3] rounded-sm overflow-hidden bg-white border border-charcoal/10 shadow-soft-sm"
                >
                  <img
                    src={getImageForCover(activeMaterial.id)}
                    alt={activeMaterial.name}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 bg-white/95 rounded-full text-[10px] uppercase tracking-luxury font-semibold text-charcoal">
                    <Sparkles className="w-3 h-3 text-dusty-rose" />
                    <span>Handmade Atelier Cover</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <span className="text-[10px] uppercase tracking-luxury text-secondary font-semibold">
                Finish Specification
              </span>

              <h3 className="font-serif text-2xl sm:text-3xl font-medium text-charcoal">
                {activeMaterial.name}
              </h3>

              <p className="text-xs sm:text-sm text-secondary font-light leading-relaxed">
                {activeMaterial.description}
              </p>

              {activeMaterial.features && (
                <div className="pt-4 border-t border-charcoal/10">
                  <h4 className="text-[11px] uppercase tracking-subtle font-semibold text-charcoal mb-2">
                    Key Finish Characteristics
                  </h4>
                  <ul className="space-y-1.5">
                    {activeMaterial.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-xs text-charcoal/90">
                        <Check className="w-3.5 h-3.5 text-secondary shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

