import React from 'react';
import { ProductHero } from '../../components/products/ProductHero';
import { ProductSpecifications } from '../../components/products/ProductSpecifications';
import { RelatedProducts } from '../../components/products/RelatedProducts';
import { ProductCTA } from '../../components/products/ProductCTA';
import { SectionHeading } from '../../components/common/SectionHeading';
import { productsData } from '../../data/products';
import { Sparkles, Check, Box, Award, ShieldCheck, Heart } from 'lucide-react';

export const LuxuryAlbumsPage: React.FC = () => {
  const product = productsData.find((p) => p.slug === 'luxury-albums')!;

  const luxurySuitePillars = [
    {
      title: 'Handcrafted Italian Leather',
      tag: 'MASTER COVER',
      description: 'Hand-worked full wrap genuine and Italian leatherette covers featuring tactile spine ribs, fine accent perimeter stitching, and optional portrait cameo cutouts.',
      image: '/images/materials/leather.jpg',
    },
    {
      title: 'Solid Wooden Presentation Casket',
      tag: 'HEIRLOOM SUITE',
      description: 'Every luxury album is ensconced within a custom-built solid hardwood casket or presentation chest featuring concealed magnetic closures and satin ribbon lifts.',
      image: '/images/products/luxury-album.jpg',
    },
    {
      title: 'Personalized Names in Majestic Fonts',
      tag: 'BESPOKE FOIL',
      description: 'Both the album face and matching wooden casket can be personalized with the couple’s names or family crest in shining gold, rose gold, or precision laser engraving.',
      image: '/images/luxury-albums/lux-names.svg',
    },
  ];

  const faqs = [
    {
      q: 'Does the Luxury Album suite always include the wooden casket?',
      a: 'Yes. Our Luxury Album is an integrated heirloom suite containing both the master handcrafted album and its companion solid wooden presentation casket, both personalized to match.',
    },
    {
      q: 'What personalization methods are available on the wooden casket?',
      a: 'We offer precision laser engraving into the solid wood grain, deep metallic gold/silver foil stamping, and raised acrylic typography.',
    },
    {
      q: 'Can we order parent albums to match the luxury suite?',
      a: 'Absolutely. We provide matching parent books and mini replica albums in identical cover leathers and layout formatting.',
    },
  ];

  return (
    <div className="bg-ivory text-charcoal">
      {/* 1. Hero */}
      <ProductHero
        title="Luxury Album Maker"
        subtitle="The pinnacle of bespoke wedding heirlooms. Handcrafted Italian leather covers paired with personalized solid wooden presentation caskets and flush-mounted silver halide pages."
        categoryTag="Fine Art Bespoke Suite"
        image="/images/products/luxury-album.jpg"
        imageAlt="Ultraa Albums Luxury Album and Wooden Casket"
        specsSummary={[
          'Album + Wooden Casket Suite',
          'Handcrafted Leather',
          'Personalized Gold Foil',
          'Flush-Mounted Spreads',
        ]}
      />

      {/* 2. Deep Charcoal Centerpiece: The Bespoke Presentation Casket Sequence */}
      <section className="py-20 lg:py-28 bg-[#2A2928] text-[#F8F5F0] border-b border-white/10">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center space-y-5 mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 border border-white/15 rounded-full text-[10px] uppercase tracking-luxury text-rose-pastel font-medium">
              <Sparkles className="w-3.5 h-3.5 text-rose-pastel" />
              <span>The Heirloom Casket Ensemble</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.1]">
              Some memories are like gold mines. <br />
              <span className="italic font-normal text-rose-pastel">They deserve extraordinary protection.</span>
            </h2>

            <p className="text-xs sm:text-base text-ivory/80 font-light leading-relaxed max-w-2xl mx-auto">
              We live in a world of fleeting digital scrolls. Nothing replaces the quiet reverence of opening a solid hardwood timber chest to reveal a master-bound leather album nestled inside.
            </p>
          </div>

          {/* 3-Part Unboxing Sequence */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1: Closed Engraved Casket */}
            <div className="p-6 bg-white/5 border border-white/10 rounded-sm flex flex-col justify-between group hover:border-white/20 transition-all">
              <div>
                <div className="aspect-[4/3] rounded-sm overflow-hidden mb-6 bg-black/40 border border-white/10">
                  <img
                    src="/images/products/luxury-album.jpg"
                    alt="Closed Solid Hardwood Casket"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] uppercase tracking-luxury text-rose-pastel font-semibold">
                    Sequence 01
                  </span>
                  <span className="text-[10px] text-ivory/60 font-mono">Exterior</span>
                </div>
                <h3 className="font-serif text-2xl font-medium text-white mb-2">
                  Solid Hardwood Casket
                </h3>
                <p className="text-xs text-ivory/70 font-light leading-relaxed">
                  Precision-milled timber casket featuring laser engraved family crest or couple monograms. Weighted magnetic closures seal out dust and moisture.
                </p>
              </div>
            </div>

            {/* Step 2: Unboxing Lift */}
            <div className="p-6 bg-white/5 border border-white/10 rounded-sm flex flex-col justify-between group hover:border-white/20 transition-all">
              <div>
                <div className="aspect-[4/3] rounded-sm overflow-hidden mb-6 bg-black/40 border border-white/10">
                  <img
                    src="/images/materials/leather.jpg"
                    alt="Italian Full Wrap Leather Cover"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] uppercase tracking-luxury text-rose-pastel font-semibold">
                    Sequence 02
                  </span>
                  <span className="text-[10px] text-ivory/60 font-mono">Tactility</span>
                </div>
                <h3 className="font-serif text-2xl font-medium text-white mb-2">
                  Italian Hand-Worked Leather
                </h3>
                <p className="text-xs text-ivory/70 font-light leading-relaxed">
                  Full wrap genuine or supple Italian leatherette covers featuring tactile spine ribs, blind debossing, and artisan corner foldings.
                </p>
              </div>
            </div>

            {/* Step 3: Album Displayed Inside */}
            <div className="p-6 bg-white/5 border border-white/10 rounded-sm flex flex-col justify-between group hover:border-white/20 transition-all">
              <div>
                <div className="aspect-[4/3] rounded-sm overflow-hidden mb-6 bg-black/40 border border-white/10">
                  <img
                    src="/images/products/luxury-album.jpg"
                    alt="Album Displayed in Casket"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] uppercase tracking-luxury text-rose-pastel font-semibold">
                    Sequence 03
                  </span>
                  <span className="text-[10px] text-ivory/60 font-mono">Ceremony</span>
                </div>
                <h3 className="font-serif text-2xl font-medium text-white mb-2">
                  The Complete Heirloom Suite
                </h3>
                <p className="text-xs text-ivory/70 font-light leading-relaxed">
                  Lifting the satin pull reveals flush-mounted silver halide pages with metallic gold leaf edges, resting securely inside its velvet-lined protective cradle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Technical Specifications */}
      <ProductSpecifications
        specs={product.specs}
        notes="Every luxury album includes a bespoke wooden presentation casket, protective cotton slip bag, and an artisan guarantee seal."
      />

      {/* 6. FAQs */}
      <section className="py-16 sm:py-20 bg-white border-b border-charcoal/5">
        <div className="section-container max-w-3xl">
          <SectionHeading
            tag="Clarity"
            title="Luxury Suite FAQs"
            subtitle="Details on casket customization, lead times, and parent albums."
          />

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="p-6 bg-ivory border border-charcoal/10 rounded-sm">
                <h4 className="font-serif text-lg font-medium text-charcoal mb-2">
                  {faq.q}
                </h4>
                <p className="text-xs text-secondary leading-relaxed font-light">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Related Products */}
      <RelatedProducts currentProductId={product.id} />

      {/* 8. Product CTA */}
      <ProductCTA productName="Luxury Album & Wooden Casket Suite" />
    </div>
  );
};

