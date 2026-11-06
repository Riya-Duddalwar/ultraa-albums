import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Volume2,
  VolumeX,
  BookOpen,
  Sparkles,
} from 'lucide-react';
import { AlbumSpread, DigitalAlbumCollection } from '../../data/albumSpreads';
import { AlbumPageRenderer } from './AlbumPageRenderer';

interface InteractiveFlipbookProps {
  collection: DigitalAlbumCollection;
  initialSpreadIndex?: number;
  onExploreFullAlbum?: () => void;
  isFullScreenMode?: boolean;
  scale?: number;
  className?: string;
  onSpreadChange?: (index: number) => void;
  activeSpreadIndex?: number;
}

export const InteractiveFlipbook: React.FC<InteractiveFlipbookProps> = ({
  collection,
  initialSpreadIndex = 0,
  onExploreFullAlbum,
  isFullScreenMode = false,
  scale = 1,
  className = '',
  onSpreadChange,
  activeSpreadIndex,
}) => {
  const [internalIndex, setInternalIndex] = useState(initialSpreadIndex);
  const currentIndex = activeSpreadIndex !== undefined ? activeSpreadIndex : internalIndex;

  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState<'next' | 'prev' | null>(null);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [hoverSide, setHoverSide] = useState<'left' | 'right' | null>(null);

  const touchStartXRef = useRef<number | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);

  // Sync index change callback
  const updateIndex = useCallback(
    (newIndex: number) => {
      setInternalIndex(newIndex);
      if (onSpreadChange) {
        onSpreadChange(newIndex);
      }
    },
    [onSpreadChange]
  );

  // Tactile paper turn sound synthesized with Web Audio API
  const playPageTurnSound = useCallback(() => {
    if (!soundEnabled) return;
    try {
      if (!audioContextRef.current) {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (AudioCtx) {
          audioContextRef.current = new AudioCtx();
        }
      }
      if (audioContextRef.current && audioContextRef.current.state === 'suspended') {
        audioContextRef.current.resume();
      }
      if (!audioContextRef.current) return;

      const ctx = audioContextRef.current;
      const bufferSize = ctx.sampleRate * 0.15; // 150ms gentle rustle
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);

      // Pink noise filtered for soft paper friction
      let b0 = 0, b1 = 0, b2 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        const pink = b0 + b1 + b2 + white * 0.5362;
        const envelope = Math.sin((i / bufferSize) * Math.PI); // Smooth attack & decay
        data[i] = pink * 0.04 * envelope;
      }

      const noise = ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(800, ctx.currentTime);
      filter.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.15);

      noise.connect(filter);
      filter.connect(ctx.destination);
      noise.start();
    } catch {
      // Audio autoplay policy fallback
    }
  }, [soundEnabled]);

  const handleNext = useCallback(() => {
    if (isFlipping || currentIndex >= collection.spreads.length - 1) return;
    setIsFlipping(true);
    setFlipDirection('next');
    playPageTurnSound();

    setTimeout(() => {
      updateIndex(currentIndex + 1);
      setIsFlipping(false);
      setFlipDirection(null);
    }, 600);
  }, [currentIndex, isFlipping, collection.spreads.length, playPageTurnSound, updateIndex]);

  const handlePrev = useCallback(() => {
    if (isFlipping || currentIndex <= 0) return;
    setIsFlipping(true);
    setFlipDirection('prev');
    playPageTurnSound();

    setTimeout(() => {
      updateIndex(currentIndex - 1);
      setIsFlipping(false);
      setFlipDirection(null);
    }, 600);
  }, [currentIndex, isFlipping, playPageTurnSound, updateIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        handleNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  // Touch Swipe Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchStartXRef.current - touchEndX;

    if (Math.abs(diffX) > 40) {
      if (diffX > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartXRef.current = null;
  };

  const currentSpread: AlbumSpread = collection.spreads[currentIndex];
  const nextSpread: AlbumSpread | undefined = collection.spreads[currentIndex + 1];
  const prevSpread: AlbumSpread | undefined = collection.spreads[currentIndex - 1];

  return (
    <div
      className={`relative flex flex-col items-center select-none ${className}`}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* ALBUM STAGE */}
      <div
        className="relative w-full max-w-5xl mx-auto flex items-center justify-center transition-transform duration-300"
        style={{
          perspective: '2200px',
          transform: `scale(${scale})`,
          transformOrigin: 'center center',
        }}
      >
        {/* PHYSICAL ALBUM STRUCTURE CONTAINER */}
        <div className="relative w-full aspect-[16/10] sm:aspect-[21/11] max-h-[72vh] rounded-xs shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35)] p-2 sm:p-3 bg-gradient-to-r from-[#24201D] via-[#352F2B] to-[#24201D] border border-charcoal/30 flex items-stretch">
          {/* Subtle Outer Board Rim (1.5mm archival core simulation) */}
          <div className="absolute inset-0 rounded-xs pointer-events-none border border-white/10" />

          {/* Under-book ambient soft shadow */}
          <div className="absolute -bottom-6 inset-x-8 h-8 bg-black/35 blur-xl pointer-events-none rounded-full" />

          {/* SPREAD HALVES CONTAINER */}
          <div className="relative w-full h-full flex rounded-xs overflow-hidden bg-[#FAF7F2]">
            {/* ============================================================== */}
            {/* UNDERLYING STATIC PAGES (Revealed during page turns) */}
            {/* ============================================================== */}

            {/* Left Static Half */}
            <div className="w-1/2 h-full relative overflow-hidden bg-ivory">
              {flipDirection === 'prev' && prevSpread ? (
                <AlbumPageRenderer
                  content={prevSpread.leftPage}
                  pageNumber={prevSpread.leftPageNumber}
                  isLeft={true}
                  isPanoramic={prevSpread.isPanoramicBleed}
                  panoramicImage={prevSpread.panoramicImage}
                />
              ) : (
                <AlbumPageRenderer
                  content={currentSpread.leftPage}
                  pageNumber={currentSpread.leftPageNumber}
                  isLeft={true}
                  isPanoramic={currentSpread.isPanoramicBleed}
                  panoramicImage={currentSpread.panoramicImage}
                />
              )}

              {/* Shadow falling onto left static page when turning backwards */}
              {isFlipping && flipDirection === 'prev' && (
                <motion.div
                  initial={{ opacity: 0.6 }}
                  animate={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent to-black/40 pointer-events-none z-20"
                />
              )}

              {/* Click / Hover Zone for Previous Page */}
              <button
                type="button"
                onClick={handlePrev}
                disabled={currentIndex === 0 || isFlipping}
                onMouseEnter={() => setHoverSide('left')}
                onMouseLeave={() => setHoverSide(null)}
                aria-label="Previous spread"
                className={`absolute inset-0 z-30 cursor-pointer focus:outline-none transition-opacity ${
                  currentIndex === 0 ? 'cursor-default' : ''
                }`}
              >
                {/* Subtle curl hint on hover */}
                {hoverSide === 'left' && currentIndex > 0 && !isFlipping && (
                  <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-soft-sm border border-charcoal/10 text-[10px] uppercase tracking-luxury text-charcoal flex items-center gap-1.5 opacity-90 transition-all">
                    <ChevronLeft className="w-3 h-3" />
                    <span>Previous Spread</span>
                  </div>
                )}
              </button>
            </div>

            {/* Right Static Half */}
            <div className="w-1/2 h-full relative overflow-hidden bg-ivory border-l border-charcoal/10">
              {flipDirection === 'next' && nextSpread ? (
                <AlbumPageRenderer
                  content={nextSpread.rightPage}
                  pageNumber={nextSpread.rightPageNumber}
                  isLeft={false}
                  isPanoramic={nextSpread.isPanoramicBleed}
                  panoramicImage={nextSpread.panoramicImage}
                />
              ) : (
                <AlbumPageRenderer
                  content={currentSpread.rightPage}
                  pageNumber={currentSpread.rightPageNumber}
                  isLeft={false}
                  isPanoramic={currentSpread.isPanoramicBleed}
                  panoramicImage={currentSpread.panoramicImage}
                />
              )}

              {/* Shadow cast onto right page when turning forward */}
              {isFlipping && flipDirection === 'next' && (
                <motion.div
                  initial={{ opacity: 0.6 }}
                  animate={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className="absolute inset-0 bg-gradient-to-l from-transparent to-black/40 pointer-events-none z-20"
                />
              )}

              {/* Click / Hover Zone for Next Page */}
              <button
                type="button"
                onClick={handleNext}
                disabled={currentIndex >= collection.spreads.length - 1 || isFlipping}
                onMouseEnter={() => setHoverSide('right')}
                onMouseLeave={() => setHoverSide(null)}
                aria-label="Next spread"
                className={`absolute inset-0 z-30 cursor-pointer focus:outline-none transition-opacity ${
                  currentIndex >= collection.spreads.length - 1 ? 'cursor-default' : ''
                }`}
              >
                {/* Subtle curl hint on hover */}
                {hoverSide === 'right' && currentIndex < collection.spreads.length - 1 && !isFlipping && (
                  <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-soft-sm border border-charcoal/10 text-[10px] uppercase tracking-luxury text-charcoal flex items-center gap-1.5 opacity-90 transition-all">
                    <span>Next Spread</span>
                    <ChevronRight className="w-3 h-3" />
                  </div>
                )}
              </button>
            </div>

            {/* ============================================================== */}
            {/* 3D TURNING PAGE LEAF (GPU Accelerated Framer Motion) */}
            {/* ============================================================== */}

            {/* 1. Forward Page Turn (Right page lifts and turns to Left) */}
            <AnimatePresence>
              {isFlipping && flipDirection === 'next' && nextSpread && (
                <motion.div
                  initial={{ rotateY: 0 }}
                  animate={{ rotateY: -180 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                  style={{
                    transformOrigin: 'left center',
                    transformStyle: 'preserve-3d',
                  }}
                  className="absolute right-0 top-0 w-1/2 h-full z-40 shadow-[-15px_0_35px_rgba(0,0,0,0.35)]"
                >
                  {/* FRONT FACE of turning page (Current spread right page) */}
                  <div
                    className="absolute inset-0 w-full h-full backface-hidden overflow-hidden"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <AlbumPageRenderer
                      content={currentSpread.rightPage}
                      pageNumber={currentSpread.rightPageNumber}
                      isLeft={false}
                      isPanoramic={currentSpread.isPanoramicBleed}
                      panoramicImage={currentSpread.panoramicImage}
                    />

                    {/* Dynamic curvature lighting gradient */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 0.45, 0] }}
                      transition={{ duration: 0.6 }}
                      className="absolute inset-0 bg-gradient-to-r from-black/50 via-white/20 to-transparent pointer-events-none"
                    />
                  </div>

                  {/* BACK FACE of turning page (Next spread left page) */}
                  <div
                    className="absolute inset-0 w-full h-full backface-hidden overflow-hidden"
                    style={{
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                    }}
                  >
                    <AlbumPageRenderer
                      content={nextSpread.leftPage}
                      pageNumber={nextSpread.leftPageNumber}
                      isLeft={true}
                      isPanoramic={nextSpread.isPanoramicBleed}
                      panoramicImage={nextSpread.panoramicImage}
                    />

                    {/* Backside shading as it settles */}
                    <motion.div
                      initial={{ opacity: 0.5 }}
                      animate={{ opacity: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="absolute inset-0 bg-gradient-to-l from-black/40 via-transparent to-transparent pointer-events-none"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* 2. Backward Page Turn (Left page lifts and turns to Right) */}
            <AnimatePresence>
              {isFlipping && flipDirection === 'prev' && prevSpread && (
                <motion.div
                  initial={{ rotateY: 0 }}
                  animate={{ rotateY: 180 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                  style={{
                    transformOrigin: 'right center',
                    transformStyle: 'preserve-3d',
                  }}
                  className="absolute left-0 top-0 w-1/2 h-full z-40 shadow-[15px_0_35px_rgba(0,0,0,0.35)]"
                >
                  {/* FRONT FACE of backward turning page (Current spread left page) */}
                  <div
                    className="absolute inset-0 w-full h-full backface-hidden overflow-hidden"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <AlbumPageRenderer
                      content={currentSpread.leftPage}
                      pageNumber={currentSpread.leftPageNumber}
                      isLeft={true}
                      isPanoramic={currentSpread.isPanoramicBleed}
                      panoramicImage={currentSpread.panoramicImage}
                    />

                    {/* Curvature lighting gradient */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 0.45, 0] }}
                      transition={{ duration: 0.6 }}
                      className="absolute inset-0 bg-gradient-to-l from-black/50 via-white/20 to-transparent pointer-events-none"
                    />
                  </div>

                  {/* BACK FACE of backward turning page (Prev spread right page) */}
                  <div
                    className="absolute inset-0 w-full h-full backface-hidden overflow-hidden"
                    style={{
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                    }}
                  >
                    <AlbumPageRenderer
                      content={prevSpread.rightPage}
                      pageNumber={prevSpread.rightPageNumber}
                      isLeft={false}
                      isPanoramic={prevSpread.isPanoramicBleed}
                      panoramicImage={prevSpread.panoramicImage}
                    />

                    {/* Settle shadow */}
                    <motion.div
                      initial={{ opacity: 0.5 }}
                      animate={{ opacity: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent pointer-events-none"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* ============================================================== */}
            {/* CENTER SPINE CREASE & GUTTER DEPTH OVERLAY */}
            {/* ============================================================== */}
            <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-12 pointer-events-none z-20 flex justify-center">
              {/* Deep center shadow slit */}
              <div className="w-1.5 h-full bg-gradient-to-r from-black/35 via-black/45 to-black/35 opacity-90 shadow-sm" />
              {/* Soft lateral gradient simulating paper curving into fold */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/20 to-transparent" />
            </div>

            {/* Bottom spread caption bar on continuous panoramic spreads */}
            {currentSpread.isPanoramicBleed && currentSpread.panoramicCaption && (
              <div className="absolute bottom-3 inset-x-8 z-30 pointer-events-none text-center">
                <span className="inline-block bg-black/60 backdrop-blur-md text-white/90 text-[10px] px-3.5 py-1 rounded-full border border-white/10 tracking-subtle shadow-soft-sm">
                  {currentSpread.panoramicCaption}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* FLOATING PREV / NEXT ARROW BUTTONS */}
        <button
          type="button"
          onClick={handlePrev}
          disabled={currentIndex === 0 || isFlipping}
          aria-label="Previous Spread"
          className={`absolute -left-3 sm:-left-6 lg:-left-7 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/95 text-charcoal border border-charcoal/15 shadow-soft-lg flex items-center justify-center transition-all z-40 hover:bg-ivory hover:scale-105 active:scale-95 disabled:opacity-30 disabled:pointer-events-none`}
        >
          <ChevronLeft className="w-5 h-5 text-charcoal" />
        </button>

        <button
          type="button"
          onClick={handleNext}
          disabled={currentIndex >= collection.spreads.length - 1 || isFlipping}
          aria-label="Next Spread"
          className={`absolute -right-3 sm:-right-6 lg:-right-7 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/95 text-charcoal border border-charcoal/15 shadow-soft-lg flex items-center justify-center transition-all z-40 hover:bg-ivory hover:scale-105 active:scale-95 disabled:opacity-30 disabled:pointer-events-none`}
        >
          <ChevronRight className="w-5 h-5 text-charcoal" />
        </button>
      </div>

      {/* SUB-ALBUM CONTROLS & INFORMATION BAR */}
      <div className="w-full max-w-4xl mx-auto mt-6 flex flex-wrap items-center justify-between gap-4 px-2">
        {/* Left: Spread Details & Page Counter */}
        <div className="flex items-center gap-3">
          <div className="px-3 py-1 bg-white border border-charcoal/10 rounded-full text-[11px] font-mono font-medium text-charcoal shadow-soft-xs flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-dusty-rose" />
            <span>
              Spread {String(currentIndex + 1).padStart(2, '0')} of{' '}
              {String(collection.spreads.length).padStart(2, '0')}
            </span>
            <span className="text-secondary/50">·</span>
            <span className="text-secondary">
              Pages {String(currentSpread.leftPageNumber).padStart(2, '0')}–
              {String(currentSpread.rightPageNumber).padStart(2, '0')}
            </span>
          </div>

          <div className="hidden md:block text-xs text-secondary font-light">
            <span className="font-serif font-medium text-charcoal mr-1.5">
              {currentSpread.title}
            </span>
            {currentSpread.location && (
              <span className="text-[11px] text-secondary">
                ({currentSpread.location})
              </span>
            )}
          </div>
        </div>

        {/* Right: Sound & Action Buttons */}
        <div className="flex items-center gap-2">
          {/* Tactile Audio Toggle */}
          <button
            type="button"
            onClick={() => setSoundEnabled(!soundEnabled)}
            title={soundEnabled ? 'Mute page turn sound' : 'Enable realistic paper turn sound'}
            className="p-2 bg-white border border-charcoal/10 rounded-full text-secondary hover:text-charcoal hover:bg-ivory transition-colors shadow-soft-xs"
          >
            {soundEnabled ? (
              <Volume2 className="w-3.5 h-3.5 text-dusty-rose" />
            ) : (
              <VolumeX className="w-3.5 h-3.5 text-secondary/60" />
            )}
          </button>

          {/* Explore Full Album Modal Trigger (if not already full screen) */}
          {!isFullScreenMode && onExploreFullAlbum && (
            <button
              type="button"
              onClick={onExploreFullAlbum}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-charcoal text-ivory text-xs uppercase tracking-luxury font-medium rounded-full shadow-soft-sm hover:bg-black transition-colors"
            >
              <Maximize2 className="w-3 h-3 text-rose-pastel" />
              <span>Explore Full Album</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

