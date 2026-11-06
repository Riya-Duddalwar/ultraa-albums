import React, { useState, useRef, useCallback } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { Sparkles, SlidersHorizontal, Check, Scissors, Sun, Sparkle } from 'lucide-react';

export interface BeforeAfterExample {
  id: string;
  name: string;
  tag: string;
  icon?: string;
  beforeImage: string;
  afterImage: string;
  beforeLabel: string;
  afterLabel: string;
  description: string;
  details: string[];
}

const defaultExamples: BeforeAfterExample[] = [
  {
    id: 'beauty',
    name: 'Skin & Beauty Retouching',
    tag: 'NATURAL TEXTURE PRESERVATION',
    beforeImage: '/images/services/editing-before.svg',
    afterImage: '/images/services/editing-after.svg',
    beforeLabel: 'Raw Backlit Exposure',
    afterLabel: 'Natural Skin & Color Grade',
    description:
      'We never use plastic blurring filters. Frequency separation and micro-dodge/burn ensure natural skin pores and luminous bridal skin tones remain completely lifelike.',
    details: ['Non-destructive frequency separation', 'Even skin tones without blurring pores', 'Subtle blemish & flyaway hair removal', 'Jewelry and eye catchlight enhancement'],
  },
  {
    id: 'clipping',
    name: 'Precision Masking & Cutouts',
    tag: 'VECTOR PEN ACCURACY',
    beforeImage: '/images/services/editing-before.svg',
    afterImage: '/images/services/editing-after.svg',
    beforeLabel: 'Busy Background',
    afterLabel: 'Clean Isolated Subject',
    description:
      'Hand-drawn vector pen tool paths and alpha channel hair masking. Flawless subject isolation for composite banners, ecommerce, and bespoke album spreads.',
    details: ['Sub-pixel vector pen paths', 'Complex hair and veil translucency', 'Zero fringing on dark/light backdrops', 'Transparent PNG or pure white output'],
  },
  {
    id: 'color',
    name: 'Dynamic Range & Color Grading',
    tag: 'HIGHLIGHT & SHADOW RECOVERY',
    beforeImage: '/images/services/editing-before.svg',
    afterImage: '/images/services/editing-after.svg',
    beforeLabel: 'Underexposed Shadows',
    afterLabel: 'Balanced Dynamic Range',
    description:
      'Rescuing blown highlights in bright silk sherwanis and opening dense shadow details in dimly lit mandaps. Pro-lab RGB curves matched across entire wedding sets.',
    details: ['Veil & lace highlight recovery', 'True color accuracy for ceremonial attire', 'Consistent look across 500+ images', 'Warm golden hour tone mapping'],
  },
];

interface BeforeAfterSliderProps {
  examples?: BeforeAfterExample[];
  beforeImage?: string;
  afterImage?: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  examples,
  beforeImage,
  afterImage,
  beforeLabel = 'Original RAW Capture',
  afterLabel = 'Retouched & Color Graded',
  className = '',
}) => {
  const resolvedExamples: BeforeAfterExample[] = examples || (beforeImage && afterImage ? [{
    id: 'custom',
    name: 'Precision Retouching',
    tag: 'STUDIO GRADE',
    beforeImage,
    afterImage,
    beforeLabel,
    afterLabel,
    description: 'Interactive comparison between raw capture and final color-calibrated image.',
    details: ['Non-destructive frequency separation', 'Natural skin texture preservation', 'Pro color calibration'],
  }] : defaultExamples);

  const [activeTab, setActiveTab] = useState<string>(resolvedExamples[0].id);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const active = resolvedExamples.find((e) => e.id === activeTab) || resolvedExamples[0];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.min(Math.max((x / rect.width) * 100, 0), 100);
    setSliderPosition(percent);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    handleMove(e.clientX);
  };

  return (
    <section className={`py-20 lg:py-28 bg-white border-b border-charcoal/5 ${className}`}>
      <div className="section-container">
        <SectionHeading
          tag="Interactive Studio Inspection"
          title="See the Subtle Power of True Color Grading"
          subtitle="Slide horizontally to compare raw camera files with our finished skin retouching, color balance, and continuous tone contrast."
        />

        {/* Multi-Example Tabs (shown when multiple examples are available) */}
        {resolvedExamples.length > 1 && (
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10 max-w-2xl mx-auto">
            {resolvedExamples.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setActiveTab(item.id);
                  setSliderPosition(50);
                }}
                className={`px-5 py-2.5 rounded-full text-xs font-medium transition-all ${
                  activeTab === item.id
                    ? 'bg-charcoal text-white shadow-soft-sm'
                    : 'bg-ivory border border-charcoal/10 text-secondary hover:text-charcoal'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        )}

        <div className="max-w-4xl mx-auto">
          {/* Active Description Pill */}
          <div className="mb-4 flex items-center justify-between text-xs text-secondary">
            <span className="text-[10px] uppercase tracking-luxury font-semibold text-charcoal">
              {active.tag}
            </span>
            <span className="text-secondary font-light hidden sm:inline">
              Drag slider to compare raw vs finished edit
            </span>
          </div>

          {/* Comparison Container */}
          <div
            ref={containerRef}
            onClick={handleClick}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchStart={() => setIsDragging(true)}
            onTouchEnd={() => setIsDragging(false)}
            onTouchMove={handleTouchMove}
            className="relative aspect-[16/10] overflow-hidden rounded-sm select-none cursor-ew-resize border border-charcoal/15 shadow-card bg-ivory"
          >
            {/* After Image (Background layer) */}
            <img
              src={active.afterImage}
              alt="After Retouching"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />
            <span className="absolute bottom-4 right-4 bg-charcoal/80 text-white text-[10px] uppercase tracking-luxury px-3 py-1.5 rounded-full backdrop-blur-sm font-medium z-10 pointer-events-none">
              {active.afterLabel}
            </span>

            {/* Before Image (Clipped overlay) */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={active.beforeImage}
                alt="Before Retouching"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none max-w-none"
                style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%' }}
              />
              <span className="absolute bottom-4 left-4 bg-white/90 text-charcoal text-[10px] uppercase tracking-luxury px-3 py-1.5 rounded-full backdrop-blur-sm font-semibold z-10 border border-charcoal/10">
                {active.beforeLabel}
              </span>
            </div>

            {/* Draggable Divider Line & Knob */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-white shadow-2xl z-20 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white text-charcoal border border-charcoal/20 shadow-soft-lg flex items-center justify-center pointer-events-auto cursor-grab active:cursor-grabbing">
                <SlidersHorizontal className="w-4 h-4 text-charcoal" />
              </div>
            </div>
          </div>

          {/* Feature Specs */}
          <div className="mt-8 p-6 bg-ivory/60 border border-charcoal/10 rounded-sm">
            <p className="text-xs sm:text-sm text-secondary font-light leading-relaxed mb-4">
              {active.description}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {active.details.map((d, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-charcoal/90">
                  <Check className="w-3.5 h-3.5 text-dusty-rose shrink-0" />
                  <span className="font-light">{d}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
