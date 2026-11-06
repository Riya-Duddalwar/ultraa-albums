import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Sun, Eye, ShieldCheck, Check } from 'lucide-react';

interface FinishOption {
  id: string;
  name: string;
  subtitle: string;
  tag: string;
  lightReflection: string;
  fingerprintResistance: string;
  tactileFeel: string;
  description: string;
  bestFor: string;
  gradient: string;
}

const finishes: FinishOption[] = [
  {
    id: 'glossy',
    name: 'Pro-Lab Glossy Lamination',
    subtitle: 'Vibrant, high-contrast clarity',
    tag: 'MAXIMUM PUNCH',
    lightReflection: 'High specular reflection with maximum black density',
    fingerprintResistance: 'Moderate (wipes clean with micro-fiber cloth)',
    tactileFeel: 'Smooth, polished, glass-like surface',
    description:
      'Accentuates vivid reds, shimmering bridal gold embroidery, and evening lighting with unmatched optical depth. Deep blacks and luminous color brilliance make every image pop.',
    bestFor: 'High-energy Indian weddings, night receptions, fireworks, vibrant jewelry portraits.',
    gradient: 'from-amber-100/40 via-white to-amber-50/20',
  },
  {
    id: 'matte',
    name: 'Silky Non-Glare Matte',
    subtitle: 'Zero reflection, subtle editorial refinement',
    tag: 'CONTEMPORARY PURITY',
    lightReflection: 'Ultra-low diffuse reflection, readable in all ambient lighting',
    fingerprintResistance: 'High (resistant to thumb marks and oils)',
    tactileFeel: 'Gentle, silky fine grain without gloss flare',
    description:
      'Eliminates overhead light glares while maintaining delicate pastel nuances and skin tones. The preferred choice of fine art and natural light documentary photographers.',
    bestFor: 'Daylight garden ceremonies, beach weddings, editorial fashion spreads, candid storytelling.',
    gradient: 'from-slate-100/40 via-ivory to-slate-50/20',
  },
  {
    id: 'feather-touch',
    name: 'Feather Touch Velvet',
    subtitle: 'Ultra-soft peach-skin sensory touch',
    tag: 'BESPOKE SENSORY',
    lightReflection: 'Total matte light absorption with zero shine',
    fingerprintResistance: 'Superior oleophobic velvety barrier',
    tactileFeel: 'Sumptuous, ultra-soft peach-skin sensation beneath fingers',
    description:
      'Our most luxurious page lamination. Provides an irresistible, velvety soft touch with every page turn. Scuff-resistant and anti-scratch for generations of gentle handling.',
    bestFor: 'Flagship wedding heirlooms, luxury bridal portfolios, newborn milestone books.',
    gradient: 'from-rose-100/30 via-beige-warm/20 to-ivory',
  },
];

export const FinishSelector: React.FC = () => {
  const [activeFinishId, setActiveFinishId] = useState<string>('feather-touch');
  const active = finishes.find((f) => f.id === activeFinishId) || finishes[2];

  return (
    <div className="bg-white border border-charcoal/10 rounded-sm p-6 sm:p-10 shadow-soft-sm">
      <div className="max-w-2xl mb-8">
        <span className="text-[10px] uppercase tracking-luxury text-secondary font-semibold block mb-1">
          Tactile Substrates & Lamination
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl font-medium text-charcoal">
          Glossy vs. Matte vs. Feather Touch
        </h3>
        <p className="text-xs sm:text-sm text-secondary font-light mt-1">
          Select each finish to explore how ambient lighting and surface texture affect the reading experience.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 pb-6 border-b border-charcoal/10">
        {finishes.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setActiveFinishId(f.id)}
            className={`px-5 py-2.5 rounded-full text-xs font-medium transition-all ${
              activeFinishId === f.id
                ? 'bg-charcoal text-white shadow-soft-sm'
                : 'bg-ivory border border-charcoal/10 text-secondary hover:text-charcoal'
            }`}
          >
            {f.name}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8"
        >
          {/* Surface texture simulation card */}
          <div className="lg:col-span-5">
            <div className={`p-8 rounded-sm border border-charcoal/10 bg-gradient-to-br ${active.gradient} shadow-soft relative min-h-[220px] flex flex-col justify-between`}>
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-luxury font-semibold text-secondary">
                  {active.tag}
                </span>
                <Sparkles className="w-4 h-4 text-dusty-rose" />
              </div>

              <div className="my-6">
                <h4 className="font-serif text-2xl font-medium text-charcoal mb-1">
                  {active.name}
                </h4>
                <p className="text-xs text-secondary font-light italic">
                  "{active.subtitle}"
                </p>
              </div>

              <div className="pt-3 border-t border-charcoal/10 text-[11px] text-charcoal/80 flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-dusty-rose" />
                <span>Anti-fade UV protection integrated</span>
              </div>
            </div>
          </div>

          {/* Details list */}
          <div className="lg:col-span-7 space-y-4">
            <p className="text-xs sm:text-sm text-secondary font-light leading-relaxed">
              {active.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 bg-ivory border border-charcoal/5 rounded">
                <span className="text-[9px] uppercase tracking-luxury text-secondary font-semibold block mb-1">
                  Reflection
                </span>
                <span className="text-xs text-charcoal font-medium leading-tight block">
                  {active.lightReflection}
                </span>
              </div>

              <div className="p-3 bg-ivory border border-charcoal/5 rounded">
                <span className="text-[9px] uppercase tracking-luxury text-secondary font-semibold block mb-1">
                  Fingerprints
                </span>
                <span className="text-xs text-charcoal font-medium leading-tight block">
                  {active.fingerprintResistance}
                </span>
              </div>

              <div className="p-3 bg-ivory border border-charcoal/5 rounded">
                <span className="text-[9px] uppercase tracking-luxury text-secondary font-semibold block mb-1">
                  Tactility
                </span>
                <span className="text-xs text-charcoal font-medium leading-tight block">
                  {active.tactileFeel}
                </span>
              </div>
            </div>

            <div className="p-3 bg-beige-warm/25 border border-charcoal/5 rounded text-xs text-charcoal font-light">
              <strong className="font-semibold">Recommended for: </strong> {active.bestFor}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

