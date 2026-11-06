import React from 'react';
import { Link } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  Award,
  Globe,
  ShieldCheck,
  HeartHandshake,
  Check,
  Layers,
  Palette,
  Camera,
  Package,
  Clock,
  ArrowUpRight,
} from 'lucide-react';
import { productsData } from '../data/products';
import { SectionHeading } from '../components/common/SectionHeading';
import { ProductCard } from '../components/common/ProductCard';
import { CTASection } from '../components/common/CTASection';
import { ImageGallery } from '../components/common/ImageGallery';
import { FullBleedSpreadBanner } from '../components/common/FullBleedSpreadBanner';
import { InteractiveAlbumSection } from '../components/home/InteractiveAlbumSection';
import { MaterialSelector } from '../components/home/MaterialSelector';
import { TestimonialCarousel } from '../components/home/TestimonialCarousel';
import { ArtisanGuaranteeBadge } from '../components/common/ArtisanGuaranteeBadge';

export const HomePage: React.FC = () => {
  // Editorial Staggered Animation Variants
  const heroContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.08,
      },
    },
  };

  const heroItemVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        ease: 'easeOut',
      },
    },
  };

  // Get the 6 featured core products (non-UK versions)
  const featuredProducts = productsData.filter((p) => !p.isUkProduct).slice(0, 6);

  const whyChooseUsFeatures = [
    {
      icon: <Award className="w-6 h-6 text-charcoal" />,
      title: 'Premium Craftsmanship',
      description: 'Handcrafted heirlooms individually constructed in our Mumbai workshop since 2012, blending traditional binding with modern precision.',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-charcoal" />,
      title: 'Reliable Quality',
      description: 'Rigid 1.0mm-1.5mm archival core boards, non-tearable substrates, and a 100% Quality Guarantee on every finished album.',
    },
    {
      icon: <Globe className="w-6 h-6 text-charcoal" />,
      title: 'Worldwide Delivery',
      description: 'Multi-layer export-grade protective packaging ensuring albums reach studios across the US, UK, NZ, Canada, and Europe in intact condition.',
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-charcoal" />,
      title: 'Personalized Service',
      description: 'Dedicated in-house designers, 6-7 custom themes, unlimited digital soft-copy revisions, and a 10% Studio Sample program.',
    },
  ];

  return (
    <div className="bg-ivory text-charcoal overflow-x-hidden">
      {/* 2. HERO SECTION */}
      <section className="relative min-h-[85vh] lg:min-h-[92vh] flex items-center bg-gradient-to-b from-beige-warm/25 via-ivory to-ivory py-16 lg:py-24 border-b border-charcoal/5">
        <div className="section-container w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            {/* Left: Editorial Staggered Hero Content */}
            <motion.div
              variants={heroContainerVariants}
              initial="hidden"
              animate="visible"
              className="lg:col-span-6 space-y-6 text-left"
            >
              <motion.div variants={heroItemVariants} className="flex items-center gap-2">
                <ArtisanGuaranteeBadge />
              </motion.div>

              <motion.h1
                variants={heroItemVariants}
                className="font-serif text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-charcoal leading-[1.1]"
              >
                Memories, <br className="hidden sm:inline" />
                <span className="italic font-normal">beautifully preserved.</span>
              </motion.h1>

              <motion.p
                variants={heroItemVariants}
                className="text-sm sm:text-base md:text-lg text-secondary font-light max-w-xl leading-relaxed"
              >
                Premium handcrafted photo albums designed to hold your most precious moments. Every page tells a story, every detail lasts a lifetime.
              </motion.p>

              <motion.div variants={heroItemVariants} className="pt-2 flex flex-wrap items-center gap-4">
                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href="#featured-products"
                  className="btn-luxury-primary"
                >
                  <span>Explore Our Collection</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-2" />
                </motion.a>
                <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                  <Link to="/about-us" className="btn-luxury-secondary">
                    <span>Discover Our Story</span>
                  </Link>
                </motion.div>
              </motion.div>

              <motion.div
                variants={heroItemVariants}
                className="pt-6 border-t border-charcoal/10 flex items-center gap-8 text-[11px] uppercase tracking-luxury text-secondary"
              >
                <div>
                  <span className="block font-semibold text-charcoal">Est. 2012</span>
                  <span>Mumbai Workshop</span>
                </div>
                <div className="w-px h-6 bg-charcoal/15" />
                <div>
                  <span className="block font-semibold text-charcoal">Fuji Film</span>
                  <span>Silver Halide Luster</span>
                </div>
                <div className="w-px h-6 bg-charcoal/15" />
                <div>
                  <span className="block font-semibold text-charcoal">Global Shipping</span>
                  <span>USA, UK, NZ & EU</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right: Large Editorial Product Video Showcase with Ambient Breathing Glow & Atelier Seal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.15, ease: 'easeOut' }}
              className="lg:col-span-6 relative"
            >
              {/* Subtle Breathing Ambient Aura behind video */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.35, 0.55, 0.35],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -inset-4 sm:-inset-6 bg-gradient-to-tr from-rose-pastel/25 via-beige-warm/35 to-powder-blue/20 rounded-2xl blur-3xl -z-10 pointer-events-none"
              />

              {/* Gentle Floating Breathing Frame */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative"
              >
                {/* Rotating Atelier Seal Stamp */}
                <div className="absolute -top-6 -right-6 sm:-top-8 sm:-right-8 z-20 pointer-events-none">
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                      className="absolute inset-0 text-charcoal/60"
                    >
                      <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
                        <path
                          id="stampCirclePath"
                          d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                          fill="none"
                        />
                        <text className="text-[7.5px] uppercase tracking-[2.2px] font-sans font-medium">
                          <textPath href="#stampCirclePath" startOffset="0%">
                            • ULTRAA ALBUMS MUMBAI • EST. 2012 • HAND-BOUND •
                          </textPath>
                        </text>
                      </svg>
                    </motion.div>
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/90 backdrop-blur-md border border-charcoal/10 shadow-soft-sm flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-dusty-rose" />
                    </div>
                  </div>
                </div>

                <div className="relative aspect-[4/3] rounded-sm overflow-hidden bg-white shadow-soft-lg border border-charcoal/10 p-2 sm:p-3">
                  <div className="w-full h-full overflow-hidden rounded bg-ivory relative">
                    <video
                      src="/videos/heroiccc.mp4"
                      poster="/images/hero/homepage-wedding-album-hero.jpg"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover object-center"
                    />
                  </div>

                  {/* Floating caption pill */}
                  <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full border border-charcoal/10 shadow-soft-sm flex items-center gap-2 pointer-events-none">
                    <Sparkles className="w-3.5 h-3.5 text-dusty-rose" />
                    <span className="text-[10px] uppercase tracking-luxury font-medium text-charcoal">
                      Hand-Bound Flush Mount Spread
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Minimalist Scroll Prompt */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.9 }}
          className="absolute bottom-3 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 pointer-events-none"
        >
          <span className="text-[9px] uppercase tracking-luxury text-secondary/60 font-medium">
            Scroll to Discover
          </span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-6 bg-gradient-to-b from-charcoal/30 to-transparent"
          />
        </motion.div>
      </section>

      {/* 3. INTRODUCTION SECTION */}
      <section className="py-20 lg:py-28 bg-white border-b border-charcoal/5">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Split Left: Workshop Craftsmanship Visual */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-charcoal/10 shadow-card bg-ivory">
                <img
                  src="/images/hero/hero-craftsmanship.jpg"
                  alt="Ultraa Albums artisan workshop hand-binding wedding albums in Mumbai"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-charcoal/5 pointer-events-none" />
              </div>
            </div>

            {/* Split Right: Story Narrative */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 lg:pl-6">
              <div className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-luxury text-secondary font-semibold">
                <Sparkles className="w-3 h-3 text-dusty-rose" />
                <span>The Ultraa Albums Heritage</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-charcoal leading-tight">
                More than an album. <br />
                <span className="italic font-normal">A lifetime of memories.</span>
              </h2>

              <p className="text-sm sm:text-base text-secondary font-light leading-relaxed">
                Founded in 2012 by working photographers in Mumbai, Ultraa Albums began with a singular mission: to eliminate fragile binding and poor color fidelity by crafting heirloom-grade photo albums worthy of once-in-a-lifetime milestones.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-ivory border border-charcoal/5 rounded-sm">
                  <h4 className="text-xs uppercase tracking-luxury font-semibold text-charcoal mb-1">
                    Handcrafted Albums
                  </h4>
                  <p className="text-xs text-secondary leading-relaxed">
                    Individually hand-bound using traditional techniques honed to outlast automated machinery.
                  </p>
                </div>

                <div className="p-4 bg-ivory border border-charcoal/5 rounded-sm">
                  <h4 className="text-xs uppercase tracking-luxury font-semibold text-charcoal mb-1">
                    Premium Materials
                  </h4>
                  <p className="text-xs text-secondary leading-relaxed">
                    Fuji Crystal Archive silver halide papers, Italian leathers, and diamond-polished acrylic.
                  </p>
                </div>

                <div className="p-4 bg-ivory border border-charcoal/5 rounded-sm">
                  <h4 className="text-xs uppercase tracking-luxury font-semibold text-charcoal mb-1">
                    Bespoke Designing
                  </h4>
                  <p className="text-xs text-secondary leading-relaxed">
                    In-house human curators offering 6-7 layout themes with unlimited soft-copy revisions.
                  </p>
                </div>

                <div className="p-4 bg-ivory border border-charcoal/5 rounded-sm">
                  <h4 className="text-xs uppercase tracking-luxury font-semibold text-charcoal mb-1">
                    Worldwide Delivery
                  </h4>
                  <p className="text-xs text-secondary leading-relaxed">
                    Assurance of intact arrival across the US, UK, NZ, Canada, Europe, and Pan-India.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link to="/about-us" className="inline-flex items-center gap-2 text-xs uppercase tracking-luxury font-medium text-charcoal hover:underline">
                  <span>Read our full founding story</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED PRODUCTS BENTO SECTION */}
      <section id="featured-products" className="py-20 lg:py-28 bg-ivory border-b border-charcoal/5">
        <div className="section-container">
          <SectionHeading
            tag="Artisan Catalog"
            title="Made to hold your memories."
            subtitle="Explore our six core handcrafted collections, ranging from rigid panoramic flush mount albums to opulent wooden casket suites."
          />

          {/* Editorial Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-stretch">
            {/* 1. Flush Mount Albums (Prominent Flagship - 8 cols on large screens) */}
            <div className="lg:col-span-8 editorial-card p-6 sm:p-8 bg-white flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] uppercase tracking-luxury text-dusty-rose font-semibold bg-rose-pastel/20 px-3 py-1 rounded-full">
                    Flagship Heirloom
                  </span>
                  <span className="text-[11px] font-mono text-secondary">
                    Fuji Silver Halide · 1.0–1.5mm Core
                  </span>
                </div>

                <div className="relative aspect-[16/9] sm:aspect-[21/10] rounded-sm overflow-hidden mb-6 bg-ivory border border-charcoal/10 shadow-soft">
                  <img
                    src="/images/products/flush-mount-album.jpg"
                    alt="Flush Mount Album Panoramic Spread"
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] uppercase tracking-luxury font-medium text-rose-pastel block">
                      The Benchmark
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-medium">
                      Flush Mount Albums
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-secondary font-light leading-relaxed mb-4">
                  Our signature volume. Individually hand-bound using archival Fuji Crystal Archive paper mounted onto solid core boards. Zero center gutter split allows wide ceremony images to span seamlessly across 2 pages.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 py-3 border-t border-charcoal/10 text-xs text-charcoal/90">
                  <div>✓ Traditional hand-binding</div>
                  <div>✓ 1.0mm & 1.5mm substrates</div>
                  <div>✓ 100% Quality Guarantee</div>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/flush-mount-album"
                  className="btn-luxury-primary text-xs py-3 px-6 w-full sm:w-auto inline-flex items-center justify-center"
                >
                  <span>Explore Flush Mount Collection</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-2" />
                </Link>
              </div>
            </div>

            {/* 2. Luxury Albums (4 cols - Opulent dark casket suite) */}
            <div className="lg:col-span-4 editorial-card p-6 sm:p-8 bg-gradient-to-br from-charcoal to-[#242322] text-ivory flex flex-col justify-between group">
              <div>
                <span className="text-[10px] uppercase tracking-luxury text-rose-pastel font-semibold block mb-2">
                  Opulent Presentation Suite
                </span>

                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-white mb-2">
                  Luxury Albums
                </h3>

                <p className="text-xs text-ivory/75 font-light leading-relaxed mb-6">
                  Supple Italian hand-worked leather covers ensconced within custom personalized solid wooden presentation caskets.
                </p>

                <div className="aspect-[4/3] rounded-sm overflow-hidden mb-6 border border-white/10 shadow-soft">
                  <img
                    src="/images/products/luxury-album.jpg"
                    alt="Luxury Album and Wooden Casket"
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
              </div>

              <Link
                to="/luxury-albums"
                className="inline-flex items-center justify-between text-xs uppercase tracking-luxury font-medium text-rose-pastel hover:text-white pt-3 border-t border-white/15 transition-colors"
              >
                <span>View Luxury Suite</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* 3. Layflat Albums (6 cols - Sage accent) */}
            <div className="lg:col-span-6 md:col-span-6 editorial-card p-6 sm:p-7 bg-gradient-to-b from-sage-light/35 via-white to-white flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] uppercase tracking-luxury text-secondary font-semibold">
                    180° Panoramic
                  </span>
                  <span className="text-[10px] bg-sage/40 text-charcoal px-2 py-0.5 rounded font-mono">
                    Zero Gutter
                  </span>
                </div>

                <div className="aspect-[16/10] rounded-sm overflow-hidden mb-5 bg-ivory border border-charcoal/10 shadow-soft-sm">
                  <img
                    src="/images/products/layflat-album.webp"
                    alt="Layflat Album"
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                <h3 className="font-serif text-2xl font-medium text-charcoal mb-2">
                  Premium Layflat Albums
                </h3>

                <p className="text-xs sm:text-sm text-secondary font-light leading-relaxed mb-4">
                  Lighter coffee-table construction opening completely flat. Perfect for destination weddings, landscape horizons, and travel portfolios.
                </p>
              </div>

              <Link
                to="/layflat"
                className="inline-flex items-center gap-1.5 text-xs uppercase tracking-luxury font-medium text-charcoal hover:underline pt-4 mt-2 border-t border-charcoal/5"
              >
                <span>Discover Layflat</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* 4. Photo Books (6 cols - Bookstore style) */}
            <div className="lg:col-span-6 md:col-span-6 editorial-card p-6 sm:p-7 bg-white flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] uppercase tracking-luxury text-secondary font-semibold">
                    Modern Classic
                  </span>
                  <span className="text-[10px] text-secondary font-mono">
                    4 Standard Sizes
                  </span>
                </div>

                <div className="aspect-[16/10] rounded-sm overflow-hidden mb-5 bg-ivory border border-charcoal/10 shadow-soft-sm">
                  <img
                    src="/images/products/photo-book-hero.jpg"
                    alt="Artisan Photo Books"
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                <h3 className="font-serif text-2xl font-medium text-charcoal mb-2">
                  Artisan Photo Books
                </h3>

                <p className="text-xs sm:text-sm text-secondary font-light leading-relaxed mb-4">
                  Bookstore-grade hardcovers with non-tearable paper choices, ideal for senior portraits, guestbooks, and baby keepsakes.
                </p>
              </div>

              <Link
                to="/photo-book"
                className="inline-flex items-center gap-1.5 text-xs uppercase tracking-luxury font-medium text-charcoal hover:underline pt-4 mt-2 border-t border-charcoal/5"
              >
                <span>Explore Photo Books</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* 5. Boxes & Bags (6 cols - Presentation Packaging) */}
            <div className="lg:col-span-6 md:col-span-6 editorial-card p-6 sm:p-7 bg-white flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] uppercase tracking-luxury text-secondary font-semibold">
                    Presentation & Transit Packaging
                  </span>
                  <span className="text-[10px] bg-beige-warm/50 text-charcoal px-2 py-0.5 rounded font-mono">
                    Hardwood Frame
                  </span>
                </div>

                <div className="aspect-[16/10] rounded-sm overflow-hidden mb-5 bg-ivory border border-charcoal/10 shadow-soft-sm">
                  <img
                    src="/images/products/boxes-and-bags-hero.jpg"
                    alt="Boxes & Bags Handcrafted Presentation Packaging"
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                <h3 className="font-serif text-2xl font-medium text-charcoal mb-2">
                  Boxes & Bags
                </h3>

                <p className="text-xs sm:text-sm text-secondary font-light leading-relaxed mb-4">
                  Artisan wooden-frame presentation boxes wrapped in luxury leatherette, Pearl/Carbon Buckram display cases, ergonomic carry handles, and standard protective leather bags.
                </p>
              </div>

              <Link
                to="/box-and-bags"
                className="inline-flex items-center gap-1.5 text-xs uppercase tracking-luxury font-medium text-charcoal hover:underline pt-4 mt-2 border-t border-charcoal/5"
              >
                <span>Explore Boxes & Bags</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* 6. Slip-In Albums (6 cols - Photo-Safe Archival Storage) */}
            <div className="lg:col-span-6 md:col-span-6 editorial-card p-6 sm:p-7 bg-gradient-to-b from-beige-warm/25 via-white to-white flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] uppercase tracking-luxury text-secondary font-semibold">
                    Photo-Safe Archival Storage
                  </span>
                  <span className="text-[10px] bg-rose-pastel/30 text-charcoal px-2 py-0.5 rounded font-mono">
                    200–500 Photos
                  </span>
                </div>

                <div className="aspect-[16/10] rounded-sm overflow-hidden mb-5 bg-ivory border border-charcoal/10 shadow-soft-sm">
                  <img
                    src="/images/products/slipin-hero.jpg"
                    alt="Slip-In Pocket Albums"
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                <h3 className="font-serif text-2xl font-medium text-charcoal mb-2">
                  Slip-In Pocket Albums
                </h3>

                <p className="text-xs sm:text-sm text-secondary font-light leading-relaxed mb-4">
                  Inexpensive, photo-safe archival pocket albums featuring dimpled polypropylene moisture-proof sleeves, ultrasonic machine sealing, and 200 to 500 photo capacity.
                </p>
              </div>

              <Link
                to="/slip-in-albums"
                className="inline-flex items-center gap-1.5 text-xs uppercase tracking-luxury font-medium text-charcoal hover:underline pt-4 mt-2 border-t border-charcoal/5"
              >
                <span>Explore Slip-In Albums</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link to="/flush-mount-album" className="btn-luxury-secondary text-xs py-3 px-8">
              <span>View Full Product Specifications</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. SIGNATURE INTERACTIVE DIGITAL ALBUM EXPERIENCE */}
      <InteractiveAlbumSection />

      {/* 6. MATERIAL CUSTOMIZATION SECTION */}
      <section className="py-20 lg:py-28 bg-ivory border-b border-charcoal/5">
        <div className="section-container">
          <SectionHeading
            tag="Tactile Finishes"
            title="Your album. Your expression."
            subtitle="Interact with our curated palette of cover materials — from diamond-polished crystal acrylic to fine Italian leathers and solid hardwood."
          />

          <MaterialSelector />
        </div>
      </section>

      {/* 7. PROFESSIONAL PHOTOGRAPHERS SECTION */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-charcoal to-black text-ivory">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-[10px] uppercase tracking-luxury text-rose-pastel font-medium">
                <Sparkles className="w-3 h-3" />
                <span>Partner With Ultraa Albums</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl font-medium text-white tracking-tight leading-tight">
                Your vision deserves <br />
                <span className="italic font-normal text-rose-pastel">the finest finish.</span>
              </h2>

              <p className="text-sm sm:text-base text-ivory/80 font-light leading-relaxed max-w-xl">
                We empower professional photographers and studios worldwide with complete end-to-end album manufacturing, non-template human album designing, and high-end photo retouching.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs">
                <div className="p-4 bg-white/5 border border-white/10 rounded-sm">
                  <div className="font-semibold text-white uppercase tracking-subtle mb-1">
                    Album Manufacturing
                  </div>
                  <div className="text-ivory/70 leading-relaxed">
                    Fuji silver halide pro lab printing, hand-binding, zero gutter panoramic spreads.
                  </div>
                </div>

                <div className="p-4 bg-white/5 border border-white/10 rounded-sm">
                  <div className="font-semibold text-white uppercase tracking-subtle mb-1">
                    Album Designing
                  </div>
                  <div className="text-ivory/70 leading-relaxed">
                    6-7 signature themes, manual photo curation, unlimited client revisions.
                  </div>
                </div>

                <div className="p-4 bg-white/5 border border-white/10 rounded-sm">
                  <div className="font-semibold text-white uppercase tracking-subtle mb-1">
                    Photo Retouching
                  </div>
                  <div className="text-ivory/70 leading-relaxed">
                    10+ years experience, Lightroom/Photoshop color science, free test RAW edit.
                  </div>
                </div>

                <div className="p-4 bg-white/5 border border-white/10 rounded-sm">
                  <div className="font-semibold text-white uppercase tracking-subtle mb-1">
                    Studio Samples & Shipping
                  </div>
                  <div className="text-ivory/70 leading-relaxed">
                    10% Off Studio Sample program with tracked global courier delivery.
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact-us"
                  className="inline-flex items-center justify-center px-8 py-3.5 text-xs tracking-luxury uppercase font-medium bg-white text-charcoal hover:bg-ivory transition-colors"
                >
                  <span>Become Our Partner</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-2" />
                </Link>
                <Link
                  to="/image-editing"
                  className="inline-flex items-center justify-center px-7 py-3.5 text-xs tracking-luxury uppercase font-medium border border-white/30 text-white hover:bg-white/10 transition-colors"
                >
                  <span>Claim Free RAW Sample</span>
                </Link>
              </div>
            </div>

            {/* Right: Studio Sample Card */}
            <div className="lg:col-span-5">
              <div className="bg-white/5 border border-white/15 p-8 sm:p-10 rounded-sm backdrop-blur-sm space-y-6">
                <span className="text-[10px] uppercase tracking-luxury text-rose-pastel font-semibold">
                  "We Invest In You"
                </span>
                
                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-white">
                  10% Off Studio Samples
                </h3>

                <p className="text-xs text-ivory/75 leading-relaxed font-light">
                  Every professional wedding photographer deserves a showcase sample that mesmerizes clients during initial consultations. Claim your studio sample discount today.
                </p>

                <div className="space-y-2 text-xs text-ivory/80 pt-2 border-t border-white/10">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-rose-pastel" />
                    <span>Includes matching presentation casket or carry box</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-rose-pastel" />
                    <span>Free soft-copy digital preview before print</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-rose-pastel" />
                    <span>Multi-region express export packaging</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. OUR WORK GALLERY SECTION */}
      <section className="py-20 lg:py-28 bg-white border-b border-charcoal/5">
        <div className="section-container">
          <SectionHeading
            tag="Heirloom Archive"
            title="Stories worth keeping."
            subtitle="Browse real heirloom albums crafted across weddings, milestone celebrations, newborn stories, and landscape travels."
          />

          <ImageGallery />
        </div>
      </section>

      {/* 9. WHY CHOOSE US SECTION */}
      <section className="py-20 lg:py-28 bg-ivory border-b border-charcoal/5">
        <div className="section-container">
          <SectionHeading
            tag="The Ultraa Standard"
            title="Why leading studios trust Ultraa Albums."
            subtitle="Our commitment to true color permanence, handcrafted integrity, and client satisfaction defines every volume that leaves our atelier."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUsFeatures.map((feat) => (
              <div
                key={feat.title}
                className="editorial-card p-8 bg-white flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-full bg-beige-warm/40 border border-charcoal/10 flex items-center justify-center mb-6">
                    {feat.icon}
                  </div>

                  <h3 className="font-serif text-xl font-medium text-charcoal mb-3">
                    {feat.title}
                  </h3>

                  <p className="text-xs text-secondary leading-relaxed font-light">
                    {feat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. TESTIMONIALS SECTION */}
      <section className="py-20 lg:py-28 bg-white border-b border-charcoal/5">
        <div className="section-container">
          <SectionHeading
            tag="Studio Word of Mouth"
            title="Loved by fine art storytellers."
            subtitle="Genuine feedback from professional wedding photographers and studios who trust us with their life's work."
          />

          <TestimonialCarousel />
        </div>
      </section>

      {/* 10. FINAL CTA SECTION */}
      <CTASection
        heading="Your memories deserve something extraordinary."
        description="Let's create something beautiful together."
        primaryButtonText="Get in Touch"
        primaryButtonLink="/contact-us"
        secondaryButtonText="Explore Products"
        secondaryButtonLink="/flush-mount-album"
      />
    </div>
  );
};
