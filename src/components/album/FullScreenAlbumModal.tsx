import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Maximize,
  Minimize,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Sparkles,
  Info,
} from 'lucide-react';
import { DigitalAlbumCollection } from '../../data/albumSpreads';
import { InteractiveFlipbook } from './InteractiveFlipbook';
import { AlbumThumbnailStrip } from './AlbumThumbnailStrip';

interface FullScreenAlbumModalProps {
  isOpen: boolean;
  onClose: () => void;
  collection: DigitalAlbumCollection;
  initialSpreadIndex?: number;
}

export const FullScreenAlbumModal: React.FC<FullScreenAlbumModalProps> = ({
  isOpen,
  onClose,
  collection,
  initialSpreadIndex = 0,
}) => {
  const [spreadIndex, setSpreadIndex] = useState(initialSpreadIndex);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [isBrowserFullScreen, setIsBrowserFullScreen] = useState(false);
  const [showControls, setShowControls] = useState(true);

  const containerRef = useRef<HTMLDivElement>(null);
  const hideControlsTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Sync initial spread index
  useEffect(() => {
    if (isOpen) {
      setSpreadIndex(initialSpreadIndex);
      setZoomLevel(1);
      setPanOffset({ x: 0, y: 0 });
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, initialSpreadIndex]);

  // Auto-hide controls after inactivity
  const resetHideTimer = useCallback(() => {
    setShowControls(true);
    if (hideControlsTimerRef.current) {
      clearTimeout(hideControlsTimerRef.current);
    }
    hideControlsTimerRef.current = setTimeout(() => {
      if (zoomLevel === 1) {
        setShowControls(false);
      }
    }, 4000);
  }, [zoomLevel]);

  useEffect(() => {
    if (!isOpen) return;
    window.addEventListener('mousemove', resetHideTimer);
    return () => {
      window.removeEventListener('mousemove', resetHideTimer);
      if (hideControlsTimerRef.current) clearTimeout(hideControlsTimerRef.current);
    };
  }, [isOpen, resetHideTimer]);

  // Fullscreen API toggle
  const toggleBrowserFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsBrowserFullScreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
        setIsBrowserFullScreen(false);
      }
    }
  };

  // Zoom handlers
  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.35, 2.4));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => {
      const next = Math.max(prev - 0.35, 1);
      if (next === 1) setPanOffset({ x: 0, y: 0 });
      return next;
    });
  };

  const handleResetZoom = () => {
    setZoomLevel(1);
    setPanOffset({ x: 0, y: 0 });
  };

  // Panning when zoomed in
  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoomLevel > 1) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - panOffset.x, y: e.clientY - panOffset.y });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && zoomLevel > 1) {
      setPanOffset({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (zoomLevel > 1) {
          handleResetZoom();
        } else {
          onClose();
        }
      } else if (e.key === '+' || e.key === '=') {
        handleZoomIn();
      } else if (e.key === '-') {
        handleZoomOut();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, zoomLevel, onClose]);

  if (!isOpen) return null;

  const currentSpread = collection.spreads[spreadIndex];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        className="fixed inset-0 z-50 bg-[#161412]/98 backdrop-blur-2xl text-ivory flex flex-col justify-between overflow-hidden select-none"
        style={{ cursor: zoomLevel > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default' }}
      >
        {/* TOP CONTROLS BAR */}
        <motion.header
          animate={{ opacity: showControls ? 1 : 0.15, y: showControls ? 0 : -8 }}
          transition={{ duration: 0.3 }}
          className="relative z-50 flex items-center justify-between px-6 py-4 bg-gradient-to-b from-black/80 via-black/40 to-transparent border-b border-white/10"
        >
          {/* Left: Album Title & Specifications */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white/10 border border-white/15 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-rose-pastel" />
            </div>
            <div>
              <h2 className="font-serif text-base sm:text-lg font-medium text-white tracking-tight">
                {collection.name}
              </h2>
              <p className="text-[10px] sm:text-[11px] text-white/60 font-light hidden sm:block">
                {collection.bindingType} · {collection.dimensions}
              </p>
            </div>
          </div>

          {/* Center: Page Counter Pill */}
          <div className="hidden md:flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-mono text-white/90">
            <span>
              Spread {String(spreadIndex + 1).padStart(2, '0')} of{' '}
              {String(collection.spreads.length).padStart(2, '0')}
            </span>
            <span className="text-white/40">·</span>
            <span className="text-rose-pastel">
              Pages {String(currentSpread.leftPageNumber).padStart(2, '0')}–
              {String(currentSpread.rightPageNumber).padStart(2, '0')}
            </span>
          </div>

          {/* Right: Zoom, Fullscreen & Close Controls */}
          <div className="flex items-center gap-2">
            {/* Zoom Controls */}
            <div className="flex items-center bg-white/10 border border-white/15 rounded-full p-0.5">
              <button
                type="button"
                onClick={handleZoomOut}
                disabled={zoomLevel <= 1}
                title="Zoom Out (-)"
                className="p-1.5 text-white/70 hover:text-white disabled:opacity-30 disabled:pointer-events-none rounded-full"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={handleResetZoom}
                title="Reset Zoom (1:1)"
                className="px-2 py-0.5 text-[10px] font-mono text-white/90 hover:text-white"
              >
                {Math.round(zoomLevel * 100)}%
              </button>
              <button
                type="button"
                onClick={handleZoomIn}
                disabled={zoomLevel >= 2.4}
                title="Zoom In (+)"
                className="p-1.5 text-white/70 hover:text-white disabled:opacity-30 disabled:pointer-events-none rounded-full"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Browser Fullscreen Toggle */}
            <button
              type="button"
              onClick={toggleBrowserFullScreen}
              title={isBrowserFullScreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
              className="p-2 bg-white/10 hover:bg-white/20 border border-white/15 rounded-full text-white/80 hover:text-white transition-colors"
            >
              {isBrowserFullScreen ? (
                <Minimize className="w-4 h-4" />
              ) : (
                <Maximize className="w-4 h-4" />
              )}
            </button>

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              title="Close Album Viewer (Esc)"
              className="p-2 bg-rose-pastel/20 hover:bg-rose-pastel/30 border border-rose-pastel/30 rounded-full text-rose-pastel hover:text-white transition-colors ml-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.header>

        {/* CENTER STAGE: FLIPBOOK */}
        <div className="relative flex-1 flex items-center justify-center p-4 sm:p-8 lg:p-12 overflow-hidden">
          <div
            style={{
              transform: `translate(${panOffset.x}px, ${panOffset.y}px)`,
              transition: isDragging ? 'none' : 'transform 0.2s ease-out',
            }}
            className="w-full max-w-6xl"
          >
            <InteractiveFlipbook
              collection={collection}
              activeSpreadIndex={spreadIndex}
              onSpreadChange={setSpreadIndex}
              isFullScreenMode={true}
              scale={zoomLevel}
            />
          </div>
        </div>

        {/* BOTTOM THUMBNAIL & CAPTION BAR */}
        <motion.footer
          animate={{ opacity: showControls ? 1 : 0.15, y: showControls ? 0 : 8 }}
          transition={{ duration: 0.3 }}
          className="relative z-50 py-3 bg-gradient-to-t from-black/90 via-black/60 to-transparent border-t border-white/10 space-y-2"
        >
          {/* Spread Location / Information */}
          <div className="text-center px-4">
            <span className="font-serif text-xs sm:text-sm text-white/90">
              {currentSpread.title}
            </span>
            {currentSpread.location && (
              <span className="text-[10px] text-white/50 ml-2">
                · {currentSpread.location}
              </span>
            )}
          </div>

          {/* Thumbnail Strip */}
          <AlbumThumbnailStrip
            spreads={collection.spreads}
            currentIndex={spreadIndex}
            onSelectSpread={(idx) => {
              setSpreadIndex(idx);
              handleResetZoom();
            }}
            isDark={true}
          />
        </motion.footer>
      </motion.div>
    </AnimatePresence>
  );
};
