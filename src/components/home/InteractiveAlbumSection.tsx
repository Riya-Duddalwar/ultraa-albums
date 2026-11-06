import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Maximize2,
  ArrowRight,
  ShieldCheck,
  Layers,
  Palette,
} from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { InteractiveFlipbook } from '../album/InteractiveFlipbook';
import { FullScreenAlbumModal } from '../album/FullScreenAlbumModal';
import { flagshipWeddingAlbum } from '../../data/albumSpreads';

export const InteractiveAlbumSection: React.FC = () => {
  const [activeSpreadIndex, setActiveSpreadIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-b from-ivory via-beige-warm/30 to-ivory border-b border-charcoal/5 overflow-hidden">
      {/* Background luxury ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-rose-pastel/15 rounded-full blur-3xl pointer-events-none" />

      {/* 75% - 85% width container as specified */}
      <div className="w-[92%] sm:w-[88%] lg:w-[82%] max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-white border border-charcoal/10 rounded-full text-[10px] uppercase tracking-luxury text-secondary font-medium mb-3 shadow-soft-xs">
            <Sparkles className="w-3 h-3 text-dusty-rose" />
            <span>Interactive Heirloom Showcase</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-medium text-charcoal tracking-tight leading-[1.15] mb-4">
            More Than Photographs. <br />
            <span className="italic font-normal">A Story to Turn.</span>
          </h2>

          <p className="text-sm sm:text-base text-secondary font-light max-w-xl mx-auto leading-relaxed">
            Explore the beauty of a thoughtfully designed album, where every spread brings a memory to life.
          </p>
        </div>

        {/* Large Scale Interactive Open Album in the Centre */}
        <div className="relative bg-white/60 backdrop-blur-sm p-4 sm:p-8 lg:p-10 rounded-sm border border-charcoal/10 shadow-soft-xl">
          <InteractiveFlipbook
            collection={flagshipWeddingAlbum}
            activeSpreadIndex={activeSpreadIndex}
            onSpreadChange={setActiveSpreadIndex}
            onExploreFullAlbum={() => setIsModalOpen(true)}
          />
        </div>

        {/* Supporting Details & CTAs */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div className="p-5 bg-white border border-charcoal/5 rounded-sm shadow-soft-xs flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-full bg-beige-warm/50 border border-charcoal/10 flex items-center justify-center shrink-0">
              <Layers className="w-4 h-4 text-charcoal" />
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-luxury font-semibold text-charcoal mb-1">
                Rigid 1.5mm Substrate
              </h4>
              <p className="text-xs text-secondary leading-relaxed font-light">
                Pages stay completely flat without curving or warping, guaranteed for over a century.
              </p>
            </div>
          </div>

          <div className="p-5 bg-white border border-charcoal/5 rounded-sm shadow-soft-xs flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-full bg-rose-pastel/40 border border-charcoal/10 flex items-center justify-center shrink-0">
              <Sparkles className="w-4 h-4 text-dusty-rose" />
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-luxury font-semibold text-charcoal mb-1">
                Zero Gutter Panorama
              </h4>
              <p className="text-xs text-secondary leading-relaxed font-light">
                Wide ceremonies flow uninterrupted from edge to edge without any center seam loss.
              </p>
            </div>
          </div>

          <div className="p-5 bg-white border border-charcoal/5 rounded-sm shadow-soft-xs flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-full bg-sage-light/60 border border-charcoal/10 flex items-center justify-center shrink-0">
              <Palette className="w-4 h-4 text-charcoal" />
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-luxury font-semibold text-charcoal mb-1">
                Bespoke Human Design
              </h4>
              <p className="text-xs text-secondary leading-relaxed font-light">
                Arranged by dedicated Mumbai curators with unlimited client soft-copy revisions.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Action Row */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="btn-luxury-primary"
          >
            <Maximize2 className="w-3.5 h-3.5 mr-2" />
            <span>Explore Full Album Experience</span>
          </button>

          <Link to="/album-designing" className="btn-luxury-secondary">
            <span>Our Bespoke Designing Process</span>
            <ArrowRight className="w-3.5 h-3.5 ml-2" />
          </Link>
        </div>
      </div>

      {/* FULL SCREEN MODAL VIEWER */}
      <FullScreenAlbumModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        collection={flagshipWeddingAlbum}
        initialSpreadIndex={activeSpreadIndex}
      />
    </section>
  );
};

