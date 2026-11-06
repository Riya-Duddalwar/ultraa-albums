import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Camera, Film, Sparkles, Check, Heart } from 'lucide-react';

interface TimelinePhase {
  id: string;
  step: string;
  title: string;
  timeframe: string;
  tag: string;
  description: string;
  deliverables: string[];
  gearStrategy: string;
  image: string;
}

const phases: TimelinePhase[] = [
  {
    id: 'prep',
    step: '01',
    title: 'Bridal & Groom Preparations',
    timeframe: 'Morning · 2–3 Hours',
    tag: 'INTIMATE CANDID STORYTELLING',
    description:
      'Documenting the nervous excitement, heirloom jewelry details, makeup touch-ups, laughter with siblings, and the emotional first looks with parents before the grand crowd arrives.',
    deliverables: ['Macro jewelry, shoe & invitation details', 'Candid preparation with bridesmaids & groomsmen', 'Emotional mother-daughter / father-son moments', 'Solo editorial bridal portraits'],
    gearStrategy: 'Prime 35mm & 85mm f/1.4 lenses with soft natural window illumination.',
    image: '/images/gallery/wedding-1.jpg',
  },
  {
    id: 'ceremony',
    step: '02',
    title: 'The Sacred Vows & Mandap Rites',
    timeframe: 'Midday / Evening · 2–4 Hours',
    tag: 'TWO-ANGLE UNINTERRUPTED COVERAGE',
    description:
      'Unobtrusive coverage of sacred rituals, vows exchange, garland ceremonies, and pheras. Synchronized multi-camera setup capturing both bride’s and groom’s expressions simultaneously.',
    deliverables: ['Baraat procession & groom arrival', 'Bridal entry procession beneath floral chadar', 'Sacred fire rituals & blessings', 'Spontaneous tears and family smiles'],
    gearStrategy: 'Dual photographers with 70-200mm telephoto discretion and silent shutters.',
    image: '/images/gallery/wedding-1.jpg',
  },
  {
    id: 'portraits',
    step: '03',
    title: 'Golden Hour Couple Portraits',
    timeframe: 'Sunset · 45–60 Minutes',
    tag: 'DESTINATION CINEMATICS',
    description:
      'A quiet, private window for just the couple away from the celebration. Bathed in golden sunset light, creating magazine-worthy editorial portraits in dream architectural or nature backdrops.',
    deliverables: ['Sweeping panoramic landscape portraits', 'Intimate black-and-white diptychs', 'Slow-motion 4K cinematic film clips', 'Gentle unposed walking interactions'],
    gearStrategy: 'Natural golden hour backlight paired with subtle off-camera diffused fill.',
    image: '/images/gallery/wedding-2.jpg',
  },
  {
    id: 'celebration',
    step: '04',
    title: 'Celebrations, Sangeet & Feasting',
    timeframe: 'Twilight · 2–3 Hours',
    tag: 'HIGH-ENERGY CHOREOGRAPHY',
    description:
      'Capturing the joyous whirlwind of high-spirited family performances, heartfelt speeches, laughter-filled cocktail conversations, and cultural feast traditions.',
    deliverables: ['Stage dance performances & spontaneous reactions', 'Emotional parental toasts & speeches', 'Candid guest interactions and laughter', 'Table decors and culinary artistry'],
    gearStrategy: 'Synchronized radio-triggered multi-point ambient strobe lighting.',
    image: '/images/gallery/celebration-1.jpg',
  },
  {
    id: 'reception',
    step: '05',
    title: 'Reception Gala & Dancefloor Revelry',
    timeframe: 'Night · Until Late',
    tag: 'UNFILTERED JOY & CINEMA',
    description:
      'When formal decorum melts away into pure ecstatic dancing. Live band energy, DJ drops, confetti blasts, and the unforgettable farewell send-off.',
    deliverables: ['Cake cutting & Champagne toasts', 'Romantic first dance under ambient spotlights', 'Packed dancefloor candid revelry', 'Sparkler exit or royal car farewell'],
    gearStrategy: 'Ultra-wide angle dynamic motion blur paired with crisp slow-sync flash.',
    image: '/images/gallery/celebration-1.jpg',
  },
];

export const WeddingDayTimeline: React.FC = () => {
  const [activePhaseId, setActivePhaseId] = useState<string>('ceremony');
  const active = phases.find((p) => p.id === activePhaseId) || phases[1];

  return (
    <div className="bg-white border border-charcoal/10 rounded-sm p-6 sm:p-10 shadow-soft-sm">
      <div className="max-w-3xl mb-8">
        <span className="text-[10px] uppercase tracking-luxury text-secondary font-semibold block mb-1">
          Wedding Narrative Cadence
        </span>
        <h3 className="font-serif text-2xl sm:text-4xl font-medium text-charcoal">
          How We Document Your Day
        </h3>
        <p className="text-xs sm:text-sm text-secondary font-light mt-1">
          Explore how our collective coordinates coverage from sunrise prep to midnight dancing without intruding on your celebration.
        </p>
      </div>

      {/* Horizontal Phase Nav */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 pb-6 border-b border-charcoal/10">
        {phases.map((phase) => (
          <button
            key={phase.id}
            type="button"
            onClick={() => setActivePhaseId(phase.id)}
            className={`p-3 text-left border rounded transition-all ${
              activePhaseId === phase.id
                ? 'bg-beige-warm/30 border-charcoal text-charcoal shadow-soft-sm'
                : 'bg-ivory/50 border-charcoal/10 text-secondary hover:border-charcoal/30'
            }`}
          >
            <span className="font-serif text-xs font-semibold text-rose-pastel block">
              {phase.step}
            </span>
            <div className="font-serif text-sm font-medium text-charcoal mt-0.5 leading-snug">
              {phase.title}
            </div>
            <span className="text-[10px] text-secondary font-mono block mt-1">
              {phase.timeframe}
            </span>
          </button>
        ))}
      </div>

      {/* Active Phase Details */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8"
        >
          {/* Visual Showcase */}
          <div className="lg:col-span-5">
            <div className="aspect-[4/3] rounded-sm overflow-hidden bg-ivory border border-charcoal/10 shadow-soft relative">
              <img
                src={active.image}
                alt={active.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3 bg-charcoal/80 text-white text-[10px] uppercase tracking-luxury px-3 py-1 rounded-full backdrop-blur-sm">
                {active.timeframe}
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-beige-warm/40 border border-charcoal/10 rounded-full text-[10px] uppercase tracking-luxury text-charcoal font-semibold">
              <Sparkles className="w-3 h-3 text-dusty-rose" />
              <span>{active.tag}</span>
            </div>

            <h4 className="font-serif text-2xl font-medium text-charcoal">
              {active.step}. {active.title}
            </h4>

            <p className="text-xs sm:text-sm text-secondary font-light leading-relaxed">
              {active.description}
            </p>

            <div className="space-y-2 pt-2">
              <div className="text-[10px] uppercase tracking-luxury font-semibold text-charcoal">
                Signature Deliverables:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {active.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-charcoal/90">
                    <Check className="w-3.5 h-3.5 text-dusty-rose shrink-0" />
                    <span className="font-light">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-3 bg-ivory border border-charcoal/5 rounded text-xs text-secondary font-light">
              <strong className="font-semibold text-charcoal">Camera & Lighting Setup: </strong>
              {active.gearStrategy}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

