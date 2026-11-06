import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, ShieldCheck, Sparkles, Check } from 'lucide-react';

export const ThicknessToggle: React.FC = () => {
  const [thickness, setThickness] = useState<'1.0' | '1.5'>('1.5');

  const specs = {
    '1.0': {
      label: '1.0mm Standard Core',
      sublabel: 'Classic Pro Lab Rigidity',
      description:
        'Solid archival core board providing firm, non-bending page stability with a streamlined spine profile. Ideal for albums with higher page counts (up to 80 pages / 40 spreads).',
      feel: 'Rigid & balanced in hand, opens completely flat without flex.',
      layers: [
        'Fuji Crystal Archive Silver Halide Print',
        'Archival Lamination Coating (Velvet / Luster)',
        '1.0mm Pure Acid-Free White Core Board',
        'Fuji Crystal Archive Silver Halide Print (Reverse)',
      ],
      idealFor: 'Complete wedding day coverage, full weekend narratives, 60–80 pages.',
      spineThickness: '~2.8 cm for 25 spreads',
    },
    '1.5': {
      label: '1.5mm Ultra-Thick Core',
      sublabel: 'The Ultimate Heirloom Heft',
      description:
        'Ultra-dense archival mounting board that feels substantial and unyielding, giving every turn of the page a weighted, ceremonial gravity. Unbending even under heavy handling.',
      feel: 'Ceremonial, heavy luxury weight. Zero page flutter.',
      layers: [
        'Fuji Crystal Archive Silver Halide Print',
        'Archival Lamination Coating (Velvet / Luster)',
        '1.5mm High-Density Compressed Archival Board',
        'Fuji Crystal Archive Silver Halide Print (Reverse)',
      ],
      idealFor: 'Flagship wedding heirlooms, highlights suites, 30–50 pages.',
      spineThickness: '~4.2 cm for 25 spreads',
    },
  };

  const current = specs[thickness];

  return (
    <div className="bg-white border border-charcoal/10 rounded-sm p-6 sm:p-10 shadow-soft-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-charcoal/10">
        <div>
          <span className="text-[10px] uppercase tracking-luxury text-secondary font-semibold block mb-1">
            Tactile Core Substrate
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-medium text-charcoal">
            Page Thickness & Rigidity Selector
          </h3>
        </div>

        {/* Toggle Pills */}
        <div className="inline-flex p-1 bg-ivory rounded-full border border-charcoal/10 self-start sm:self-auto">
          <button
            type="button"
            onClick={() => setThickness('1.0')}
            className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
              thickness === '1.0'
                ? 'bg-charcoal text-white shadow-soft-sm'
                : 'text-secondary hover:text-charcoal'
            }`}
          >
            1.0 mm Standard
          </button>
          <button
            type="button"
            onClick={() => setThickness('1.5')}
            className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
              thickness === '1.5'
                ? 'bg-charcoal text-white shadow-soft-sm'
                : 'text-secondary hover:text-charcoal'
            }`}
          >
            1.5 mm Ultra-Thick
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={thickness}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 items-center"
        >
          {/* Visual Schematic Diagram of Cross-section */}
          <div className="lg:col-span-5 bg-ivory/60 border border-charcoal/10 p-6 rounded-sm text-center">
            <span className="text-[10px] uppercase tracking-luxury text-secondary font-semibold block mb-4">
              Micro Cross-Section ({thickness} mm)
            </span>

            {/* Visual Board representation */}
            <div className="max-w-[240px] mx-auto space-y-1.5 py-4">
              {/* Print layer */}
              <div className="h-1.5 bg-dusty-rose/70 rounded-full border border-charcoal/20" title="Photo Layer" />
              {/* Core board with dynamic thickness */}
              <div
                className={`w-full bg-gradient-to-r from-beige-warm via-ivory to-beige-warm border border-charcoal/30 rounded flex items-center justify-center text-[10px] font-mono font-semibold text-charcoal transition-all duration-500 ${
                  thickness === '1.5' ? 'h-14 shadow-soft' : 'h-8'
                }`}
              >
                {thickness}mm Archival Substrate
              </div>
              {/* Reverse print layer */}
              <div className="h-1.5 bg-dusty-rose/70 rounded-full border border-charcoal/20" title="Photo Layer (Reverse)" />
            </div>

            <div className="pt-4 border-t border-charcoal/10 flex justify-between text-xs text-secondary font-mono">
              <span>Spine depth:</span>
              <strong className="text-charcoal">{current.spineThickness}</strong>
            </div>
          </div>

          {/* Descriptive Information */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-beige-warm/40 text-charcoal rounded text-[10px] uppercase tracking-luxury font-medium">
              <Sparkles className="w-3 h-3 text-dusty-rose" />
              <span>{current.sublabel}</span>
            </div>

            <p className="text-xs sm:text-sm text-secondary font-light leading-relaxed">
              {current.description}
            </p>

            <div className="space-y-2 pt-2">
              <div className="text-[10px] uppercase tracking-luxury font-semibold text-charcoal">
                Bonded Substrate Layers:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {current.layers.map((layer, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-charcoal/90">
                    <Check className="w-3.5 h-3.5 text-dusty-rose shrink-0 mt-0.5" />
                    <span className="font-light">{layer}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-3 bg-beige-warm/20 border border-charcoal/5 rounded text-xs text-secondary leading-relaxed font-light">
              <strong className="font-semibold text-charcoal">Recommended for: </strong>
              {current.idealFor}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

