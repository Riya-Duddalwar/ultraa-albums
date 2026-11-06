import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

interface MegaMenuProduct {
  name: string;
  path: string;
  subtitle: string;
  image: string;
  tag: string;
}

const productsList: MegaMenuProduct[] = [
  {
    name: 'Flush Mount Albums',
    path: '/flush-mount-album',
    subtitle: 'Archival silver halide prints mounted on rigid 1.0mm-1.5mm substrate.',
    image: '/images/products/flush-mount.svg',
    tag: 'Flagship Heirloom',
  },
  {
    name: 'Layflat Albums',
    path: '/layflat',
    subtitle: '180° flat opening with zero center gutter interruption.',
    image: '/images/products/layflat.svg',
    tag: 'Panoramic Spread',
  },
  {
    name: 'Luxury Albums',
    path: '/luxury-albums',
    subtitle: 'Hand-worked leather paired with bespoke wooden presentation casket.',
    image: '/images/products/luxury.svg',
    tag: 'Opulent Ensemble',
  },
  {
    name: 'Photo Books',
    path: '/photo-book',
    subtitle: 'Bookstore-quality hardcovers with non-tearable paper choices.',
    image: '/images/products/photobook.svg',
    tag: 'Modern Classic',
  },
  {
    name: 'Boxes & Bags',
    path: '/box-and-bags',
    subtitle: 'Hardwood leatherette boxes, Buckram cases, and soft travel bags.',
    image: '/images/products/boxes.svg',
    tag: 'Presentation',
  },
  {
    name: 'Slip-In Albums',
    path: '/slip-in-albums',
    subtitle: 'Moisture-proof polypropylene dimpled pockets holding up to 500 prints.',
    image: '/images/products/slipin.svg',
    tag: 'Archival Storage',
  },
];

interface MegaMenuProps {
  onClose: () => void;
}

export const MegaMenu: React.FC<MegaMenuProps> = ({ onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 6 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="absolute top-full left-0 w-full bg-white border-b border-charcoal/10 shadow-soft-lg z-50 overflow-hidden"
      onMouseLeave={onClose}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main 6 products grid */}
          <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-6">
            {productsList.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={onClose}
                className="group flex flex-col p-3 rounded hover:bg-ivory/60 transition-colors border border-transparent hover:border-charcoal/5"
              >
                {/* Small Product Thumbnail */}
                <div className="relative aspect-[16/10] overflow-hidden rounded-sm bg-ivory mb-3 border border-charcoal/5">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute top-2 left-2 text-[8px] uppercase tracking-luxury px-1.5 py-0.5 bg-white/90 font-medium text-secondary">
                    {item.tag}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-semibold tracking-subtle text-charcoal group-hover:text-black">
                    {item.name}
                  </h4>
                  <ArrowRight className="w-3 h-3 text-secondary opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                </div>

                <p className="text-[11px] text-secondary mt-1 line-clamp-2 leading-relaxed font-light">
                  {item.subtitle}
                </p>
              </Link>
            ))}
          </div>

          {/* Right Featured Column: Studio Sample Offer */}
          <div className="bg-beige-warm/30 border border-charcoal/5 p-6 rounded-sm flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-luxury text-secondary font-semibold mb-3">
                <Sparkles className="w-3.5 h-3.5 text-dusty-rose" />
                <span>Photographer Program</span>
              </div>
              
              <h4 className="font-serif text-xl font-medium text-charcoal mb-2">
                "We Invest In You"
              </h4>
              
              <p className="text-xs text-secondary leading-relaxed font-light mb-4">
                10% Off on Studio Samples for professional wedding photographers to showcase to their couples.
              </p>

              <div className="text-[11px] text-charcoal/80 space-y-1">
                <div>✓ Fuji Crystal Archive Paper</div>
                <div>✓ 100% Hand-Bound Guarantee</div>
                <div>✓ Free Bespoke Layout Design</div>
              </div>
            </div>

            <div className="pt-6 border-t border-charcoal/10 mt-6">
              <Link
                to="/contact-us"
                onClick={onClose}
                className="btn-luxury-primary w-full text-[10px] py-2.5 justify-center"
              >
                <span>Request Sample Kit</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

