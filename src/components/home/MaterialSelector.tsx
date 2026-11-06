import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';

interface MaterialItem {
  id: string;
  name: string;
  categoryTag: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  colorSwatch: string;
}

const materialsData: MaterialItem[] = [
  {
    id: 'leather',
    name: 'Leather',
    categoryTag: 'Full Wrap Italian Leatherette',
    title: 'Supple Italian Full Wrap Leather',
    description: 'Hand-worked full wrap leather with a luxurious, buttery texture available with or without a cameo cutout window. Compatible with precision laser engraving, deep blind debossing, and shining metallic foil stamping.',
    features: ['Cameo window option', 'Foil & laser customization', 'Rich pastel & earth tones', 'Artisan hand-turned corners'],
    image: '/images/materials/leather.jpg',
    colorSwatch: '#F0E5D8',
  },
  {
    id: 'linen',
    name: 'Linen',
    categoryTag: 'Natural Heritage Textile',
    title: 'Heritage Woven Archival Linen',
    description: 'A finely curated collection of breathable, tightly woven natural textiles that resist everyday wear. Imparts an understated, tactile organic serenity to wedding and fine-art family albums.',
    features: ['Natural woven textile', 'Wear-resistant durability', 'Direct foil typography', 'Minimalist Scandinavian aesthetic'],
    image: '/images/materials/linen.jpg',
    colorSwatch: '#DCE5D8',
  },
  {
    id: 'canvas',
    name: 'Canvas',
    categoryTag: 'Varnished Poly-Cotton Blend',
    title: 'Poly-Cotton Canvas with Protective Varnish',
    description: 'Bright white, consistent poly-cotton blend canvas capturing every delicate highlight with incredible sharpness. Finished with our specialized protective varnish coating to defend against moisture, abrasion, and UV light.',
    features: ['Poly-cotton blend canvas', 'Protective varnish seal', 'No color-shift guarantee', 'Rich woven photographic texture'],
    image: '/images/materials/canvas.jpg',
    colorSwatch: '#EAD5D2',
  },
  {
    id: 'acrylic',
    name: 'Acrylic',
    categoryTag: 'Crystal Clear Diamond Polished',
    title: 'Crystal Acrylic with Diamond-Polished Edges',
    description: 'Your hero cover photograph mounted under pure, optical-grade crystal-clear acrylic with finely tapered sides and diamond-polished edges. Complemented by a rounded leatherette spine with italic binding.',
    features: ['Diamond-polished edges', 'Optical glassy depth', 'Rounded spine with italic binding', 'High demand worldwide'],
    image: '/images/materials/acrylic.jpg',
    colorSwatch: '#DCE6EF',
  },
  {
    id: 'wood',
    name: 'Wood',
    categoryTag: 'Natural Hardwood & Companion Casket',
    title: 'Solid Hardwood & Presentation Casket',
    description: 'Warm natural timber grains for rustic celebrations, forest ceremonies, and heritage archives. Beautifully harmonizes with our handcrafted wooden presentation caskets and precision laser engraving.',
    features: ['Solid wood grain texture', 'Companion wooden casket suite', 'Precision laser engraving', 'Organic heirloom permanence'],
    image: '/images/materials/wood.jpg',
    colorSwatch: '#F0E5D8',
  },
  {
    id: 'metal',
    name: 'Metal',
    categoryTag: 'Matte Brushed Silver Plate',
    title: 'Matte Brushed Silver Metal Plate',
    description: 'Modern, architectural elegance. A brushed silver metallic plate printed with couple names or signature portraiture, offering a clean, contemporary lustre that commands attention on any coffee table.',
    features: ['Matte brushed silver finish', 'High-definition plate printing', 'Modern industrial luxury', 'Scratch-resistant sealant'],
    image: '/images/materials/metal.jpg',
    colorSwatch: '#77716C',
  },
];

export const MaterialSelector: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>('leather');

  const activeMaterial = materialsData.find((m) => m.id === selectedId) || materialsData[0];

  return (
    <div className="w-full">
      {/* Selector Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
        {materialsData.map((mat) => {
          const isSelected = mat.id === selectedId;
          return (
            <button
              key={mat.id}
              onClick={() => setSelectedId(mat.id)}
              className={`flex items-center gap-2.5 px-5 py-2.5 rounded-full text-xs uppercase tracking-luxury font-medium transition-all duration-300 ${
                isSelected
                  ? 'bg-charcoal text-white shadow-soft-sm'
                  : 'bg-white text-secondary hover:text-charcoal border border-charcoal/10 hover:border-charcoal/30'
              }`}
            >
              <span
                className="w-3 h-3 rounded-full border border-black/10 shrink-0"
                style={{ backgroundColor: mat.colorSwatch }}
              />
              <span>{mat.name}</span>
            </button>
          );
        })}
      </div>

      {/* Interactive Display Split Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white border border-charcoal/10 rounded-sm p-6 sm:p-10 shadow-card">
        {/* Left: Dynamic Image Display */}
        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeMaterial.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="relative aspect-[16/11] rounded-sm overflow-hidden bg-ivory border border-charcoal/5 shadow-soft-sm"
            >
              <img
                src={activeMaterial.image}
                alt={activeMaterial.title}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[10px] uppercase tracking-luxury font-semibold text-charcoal">
                <Sparkles className="w-3 h-3 text-dusty-rose" />
                <span>{activeMaterial.categoryTag}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right: Dynamic Material Information */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeMaterial.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="space-y-4"
            >
              <span className="text-[10px] uppercase tracking-luxury text-secondary font-semibold">
                Option: {activeMaterial.name}
              </span>
              
              <h3 className="font-serif text-2xl sm:text-3xl font-medium text-charcoal leading-tight">
                {activeMaterial.title}
              </h3>

              <p className="text-xs sm:text-sm text-secondary font-light leading-relaxed">
                {activeMaterial.description}
              </p>

              <div className="pt-4 border-t border-charcoal/5">
                <h4 className="text-[11px] uppercase tracking-subtle font-semibold text-charcoal mb-2.5">
                  Artisan Highlights
                </h4>
                <ul className="space-y-2">
                  {activeMaterial.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-charcoal/90">
                      <Check className="w-3.5 h-3.5 text-secondary shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="pt-4">
            <Link
              to="/contact-us"
              className="btn-luxury-primary text-xs py-3 px-6 w-full sm:w-auto text-center"
            >
              Inquire With {activeMaterial.name} Finish
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

