import React from 'react';
import { ProductHero } from '../../components/products/ProductHero';
import { ProductSpecifications } from '../../components/products/ProductSpecifications';
import { RelatedProducts } from '../../components/products/RelatedProducts';
import { ProductCTA } from '../../components/products/ProductCTA';
import { SectionHeading } from '../../components/common/SectionHeading';
import { FullBleedSpreadBanner } from '../../components/common/FullBleedSpreadBanner';
import { ProductComparison } from '../../components/products/ProductComparison';
import { productsData } from '../../data/products';
import { Check, Sparkles, Layers, Compass, Palette, Camera, Heart } from 'lucide-react';

export const LayflatAlbumPage: React.FC = () => {
  const product = productsData.find((p) => p.slug === 'layflat')!;

  const useCases = [
    {
      title: 'Wedding Memories & Panoramic Aisles',
      category: 'Weddings',
      icon: <Heart className="w-5 h-5 text-rose-pastel" />,
      description: 'Capture the grandeur of wedding processions, wide architectural mandaps, and dramatic outdoor ceremony vistas across full 2-page spreads without any center cut-off.',
      image: '/images/gallery/wedding-2.jpg',
    },
    {
      title: 'Travel Adventures & Horizons',
      category: 'Expeditions & Travel',
      icon: <Compass className="w-5 h-5 text-sage" />,
      description: 'Relive your adventures down memory lane. Panoramic mountain ranges, vibrant cityscapes, and ocean sunsets spread elegantly across your coffee table.',
      image: '/images/layflat/layflat-travel.jpg',
    },
    {
      title: 'Professional Design Portfolios',
      category: 'Portfolios & Art',
      icon: <Palette className="w-5 h-5 text-powder-blue" />,
      description: 'For interior designers, fashion stylists, makeup artists, and commercial photographers. Acts as the cherry on the cake for presenting client work with unmatched prestige.',
      image: '/images/layflat/layflat-portfolio.svg',
    },
  ];

  const faqs = [
    {
      q: 'How does Layflat compare in weight to Flush Mount Albums?',
      a: 'Layflat Albums feature a slimmer, lighter substrate than Flush Mount Albums. This makes them significantly lighter in weight and more portable, allowing you to include more pages (up to 120 pages) while maintaining an economical price point.',
    },
    {
      q: 'Will double-page panoramic images be cut off in the center?',
      a: 'No. The 180° layflat binding technology ensures the pages lie completely flat without a center gutter gap or curved page bulging.',
    },
    {
      q: 'What paper finish is recommended for Layflat books?',
      a: 'We offer Pro-Lab Luster, Deep Matte, and Feather-Touch laminations. Luster is the most popular for weddings, while Deep Matte is favored for fine-art architecture and design portfolios.',
    },
  ];

  return (
    <div className="bg-ivory text-charcoal">
      {/* 1. Panoramic Album Hero */}
      <ProductHero
        title="Premium Layflat Albums"
        subtitle="Stunning 2-page panoramic spreads with zero center gutter interruption. A lighter, economical counterpart to the Flush Mount album, crafted to lie completely flat on any surface."
        categoryTag="Panoramic Portfolio Collection"
        image="/images/products/layflat-album.webp"
        imageAlt="Ultraa Albums Premium Layflat Album"
        specsSummary={[
          '180° True Layflat Opening',
          'Zero Gutter Distortion',
          'Up to 120 Pages Capacity',
          'Lightweight Construction',
        ]}
      />

      {/* 2. Full-Width 180° Panoramic Horizon Spread */}
      <FullBleedSpreadBanner
        image="/images/products/layflat-album.webp"
        tag="180° Layflat Experience"
        title="Zero Bulging. Zero Gutter. Pure Panoramic Flow."
        subtitle="Full-bleed continuous photographic printing designed to rest horizontally without curved page distortion or center spine gap."
        quote="A lighter, contemporary coffee-table volume crafted to hold up to 120 pages of your life's journey."
        accentBg="bg-gradient-to-b from-sage-light/40 via-ivory to-sage-light/20"
      />

      {/* 3. Use-Case Section with Varied Aspect Ratios */}
      <section className="py-20 lg:py-24 bg-white border-b border-charcoal/5">
        <div className="section-container">
          <SectionHeading
            tag="Versatile Applications"
            title="Designed for Every Visual Story"
            subtitle="Whether an intimate coastal wedding, alpine travel horizons, or high-fashion design portfolios, layflat books do justice to your art."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Wedding: Wide Spread 16:9 */}
            <div className="editorial-card p-6 flex flex-col justify-between bg-ivory/30">
              <div>
                <div className="aspect-[16/9] rounded-sm overflow-hidden mb-6 bg-white border border-charcoal/5 shadow-soft-sm">
                  <img
                    src={useCases[0].image}
                    alt={useCases[0].title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <span className="text-[10px] uppercase tracking-luxury text-secondary font-semibold block mb-1">
                  {useCases[0].category}
                </span>
                <h3 className="font-serif text-xl font-medium text-charcoal mb-2 leading-snug">
                  {useCases[0].title}
                </h3>
                <p className="text-xs text-secondary font-light leading-relaxed">
                  {useCases[0].description}
                </p>
              </div>
            </div>

            {/* Travel: Vertical Portrait 3:4 */}
            <div className="editorial-card p-6 flex flex-col justify-between bg-sage-light/20">
              <div>
                <div className="aspect-[3/4] rounded-sm overflow-hidden mb-6 bg-white border border-charcoal/5 shadow-soft-sm">
                  <img
                    src={useCases[1].image}
                    alt={useCases[1].title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <span className="text-[10px] uppercase tracking-luxury text-secondary font-semibold block mb-1">
                  {useCases[1].category}
                </span>
                <h3 className="font-serif text-xl font-medium text-charcoal mb-2 leading-snug">
                  {useCases[1].title}
                </h3>
                <p className="text-xs text-secondary font-light leading-relaxed">
                  {useCases[1].description}
                </p>
              </div>
            </div>

            {/* Portfolio: Classic 4:3 */}
            <div className="editorial-card p-6 flex flex-col justify-between bg-ivory/30">
              <div>
                <div className="aspect-[4/3] rounded-sm overflow-hidden mb-6 bg-white border border-charcoal/5 shadow-soft-sm">
                  <img
                    src={useCases[2].image}
                    alt={useCases[2].title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <span className="text-[10px] uppercase tracking-luxury text-secondary font-semibold block mb-1">
                  {useCases[2].category}
                </span>
                <h3 className="font-serif text-xl font-medium text-charcoal mb-2 leading-snug">
                  {useCases[2].title}
                </h3>
                <p className="text-xs text-secondary font-light leading-relaxed">
                  {useCases[2].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Product Comparison (Layflat vs Flush Mount) */}
      <section className="py-20 lg:py-24 bg-sage-light/20 border-b border-charcoal/5">
        <div className="section-container">
          <ProductComparison />
        </div>
      </section>

      {/* 6. Technical Specifications */}
      <ProductSpecifications
        specs={product.specs}
        notes="Layflat albums include a standard protective storage bag. Optional carry handles and presentation display boxes available."
      />

      {/* 7. FAQs */}
      <section className="py-16 sm:py-20 bg-white border-b border-charcoal/5">
        <div className="section-container max-w-3xl">
          <SectionHeading
            tag="Clarity"
            title="Layflat Album FAQs"
            subtitle="Details on page counts, substrates, and formatting options."
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

      {/* 8. Related Products */}
      <RelatedProducts currentProductId={product.id} />

      {/* 9. Product CTA */}
      <ProductCTA productName="Premium Layflat Album" />
    </div>
  );
};

