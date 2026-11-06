import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ProductHero } from '../../components/products/ProductHero';
import { ProductSpecifications } from '../../components/products/ProductSpecifications';
import { ProductCTA } from '../../components/products/ProductCTA';
import { SectionHeading } from '../../components/common/SectionHeading';
import { UkShippingAssurance } from '../../components/uk/UkShippingAssurance';
import { productsData } from '../../data/products';
import { Globe, ArrowRight, Sparkles, Check, Box } from 'lucide-react';

export const LuxuryAlbumsUkPage: React.FC = () => {
  const product = productsData.find((p) => p.slug === 'luxury-albums-for-uk')!;

  useEffect(() => {
    document.title = 'Luxury Album Maker For UK | Handcrafted Wedding Albums & Wooden Caskets | Ultraa Albums';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Luxury wedding albums UK: Handcrafted leather heirlooms and custom solid wooden caskets. Personalized names, flush-mounted silver halide pages, and master presentation for UK studios.'
      );
    }
  }, []);

  return (
    <div className="bg-ivory text-charcoal">
      {/* Region Switcher Banner */}
      <div className="bg-white border-b border-charcoal/5 py-3">
        <div className="section-container flex items-center justify-between text-xs text-secondary">
          <div className="flex items-center gap-2">
            <Globe className="w-3.5 h-3.5 text-secondary" />
            <span>Viewing dedicated <strong>United Kingdom Luxury Collection</strong> page.</span>
          </div>
          <Link
            to="/luxury-albums"
            className="inline-flex items-center gap-1 font-medium text-charcoal hover:underline"
          >
            <span>View India / Global Edition</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>

      {/* Hero */}
      <ProductHero
        title="Luxury Album Maker For UK"
        subtitle="We may have digital screens of iPads and laptops everywhere with functions like 'pinch to zoom' and so on, but you still cannot deny the magic of prints. Handcrafted leather and personalized wooden caskets for UK luxury wedding studios."
        categoryTag="UK Fine Art Luxury Suite"
        image="/images/products/luxury-album.jpg"
        imageAlt="Luxury Wedding Albums UK Ultraa Albums"
        specsSummary={[
          'UK Tracked Air Shipping',
          'Album + Wooden Casket Suite',
          'Handcrafted Leather',
          'Personalized Typography',
        ]}
      />

      {/* Editorial Narrative */}
      <section className="py-20 lg:py-28 bg-white border-b border-charcoal/5">
        <div className="section-container max-w-4xl space-y-8">
          <div className="text-center space-y-4">
            <span className="text-[10px] uppercase tracking-luxury text-secondary font-semibold">
              The Soul of Tangible Prints
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-charcoal leading-tight">
              Some Memories Are Like a Gold Mine.
            </h2>
            <p className="text-xs sm:text-base text-secondary font-light leading-relaxed">
              It’s your wedding, your child’s first birthday, your parents’ golden anniversary, or literally anything you consider precious that deserves a luxurious and safe place. Our luxury wedding albums UK collection keeps all your elegant moments safe so you relive them vividly years from now.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
            <div className="p-8 bg-ivory border border-charcoal/10 rounded-sm space-y-3">
              <h3 className="font-serif text-2xl font-medium text-charcoal">
                Handcrafted Leather & Wooden Casket
              </h3>
              <p className="text-xs text-secondary leading-relaxed font-light">
                We use beautiful handcrafted leather and a wooden casket to make these luxury albums. The casket and album can be personalised with the couple's name in a luxurious font.
              </p>
            </div>

            <div className="p-8 bg-ivory border border-charcoal/10 rounded-sm space-y-3">
              <h3 className="font-serif text-2xl font-medium text-charcoal">
                Flush Mounted Flat Spreads
              </h3>
              <p className="text-xs text-secondary leading-relaxed font-light">
                Printing your photos on flat, flush-mounted pages gives your album a luxurious and elegant look. You say it and we present it — choosing from acrylic, leather, linen, wood, to color and design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* UK International Shipping Assurance */}
      <UkShippingAssurance />

      {/* Specifications */}
      <ProductSpecifications
        specs={product.specs}
        notes="Export-grade transit packaging guarantees the solid wooden casket and leather album reach UK studios without scuffs, knocks, or customs delays."
      />

      {/* CTA */}
      <ProductCTA productName="Luxury Album For UK" />
    </div>
  );
};

