import React from 'react';
import { ProductHero } from '../../components/products/ProductHero';
import { ProductSpecifications } from '../../components/products/ProductSpecifications';
import { RelatedProducts } from '../../components/products/RelatedProducts';
import { ProductCTA } from '../../components/products/ProductCTA';
import { SectionHeading } from '../../components/common/SectionHeading';
import { BookSizeSelector } from '../../components/products/BookSizeSelector';
import { FinishSelector } from '../../components/products/FinishSelector';
import { productsData } from '../../data/products';
import { BookOpen, Sparkles, Layers, ShieldCheck, Check, Maximize } from 'lucide-react';

export const PhotoBookPage: React.FC = () => {
  const product = productsData.find((p) => p.slug === 'photo-book')!;

  const originalBookSizes = [
    {
      size: '5×5 in',
      name: 'Mini Pocket Photo Book',
      description: 'Ideal for pocket-sized keepsakes, office desks, school and college memories, or companion wedding favor books.',
      tag: 'COMPACT',
    },
    {
      size: '6×8 in',
      name: 'Classic Coffee-Table Format',
      description: 'Perfect for anniversary gifts, travel digests, and family milestones with crisp bookstore-grade hardcovers.',
      tag: 'POPULAR',
    },
    {
      size: '9×12 in',
      name: 'Deluxe Portfolio & Wedding Book',
      description: 'An expansive format designed for professional studio showcase albums and client wedding book presentations.',
      tag: 'STUDIO',
    },
    {
      size: '12×18 in',
      name: 'Grand Wedding Photobook Album',
      description: 'Our largest format photobook for couples who desire large-scale photographic grandeur with full-flat opening.',
      tag: 'GRAND',
    },
  ];

  const originalPrintSizes = [
    { size: '4×6 in', use: 'Standard lab print format for mobile & camera collections' },
    { size: '5×7 in', use: 'Classic portrait format for intimate family albums' },
    { size: '6×8 in', use: 'Expanded display prints with personalized photo covers' },
  ];

  const paperFinishes = [
    {
      title: 'Glossy Finish',
      description: 'High-shine, vibrant color saturation that makes photographic highlights pop with brilliance.',
      tag: 'VIBRANT',
    },
    {
      title: 'Matte Finish',
      description: 'Refined, non-reflective surface that eliminates glare and resists fingerprint smudges.',
      tag: 'ELEGANT',
    },
    {
      title: 'Feather-Touch Finish',
      description: 'Ultra-luxurious tactile velvety soft feel that provides an exquisite sensory reading experience.',
      tag: 'LUXURY',
    },
  ];

  const faqs = [
    {
      q: 'What is Non-Tearable paper in Ultraa Albums photobooks?',
      a: 'Non-Tearable paper is a specialized synthetic archival substrate that cannot be ripped or torn during everyday handling, ensuring extreme durability for family, baby, and event photo books.',
    },
    {
      q: 'Can I print photos directly from WhatsApp, Facebook, and mobile phones?',
      a: 'Yes. Our Regular Photo Books are designed to turn digital photos from Facebook, WhatsApp, Instagram, and mobile phones into inexpensive, bookstore-quality hardcovers.',
    },
    {
      q: 'Do your Photo Books feature curved center pages?',
      a: 'No. Our specialty is Full Flat openable books with zero curved pages from the center, ensuring photos printed across spreads remain visible.',
    },
  ];

  return (
    <div className="bg-ivory text-charcoal">
      {/* 1. Hero */}
      <ProductHero
        title="Photo Books"
        subtitle="Bookstore-quality modern hardcovers crafted with non-tearable papers, feather-touch finishes, and true full-flat openable binding without curved center pages."
        categoryTag="Modern Classic Collection"
        image="/images/products/photo-book-hero.jpg"
        imageAlt="Ultraa Albums Photo Book Collection"
        specsSummary={[
          'Non-Tearable Paper',
          'Full Flat Openable',
          'Glossy, Matte & Feather-Touch',
          '5x5 to 12x18 Sizes',
        ]}
      />

      {/* 2. Interactive Available Sizes Comparison */}
      <section className="py-20 lg:py-24 bg-white border-b border-charcoal/5">
        <div className="section-container space-y-12">
          <BookSizeSelector />

          {/* Original Print Sizes Highlight: 4x6, 5x7, 6x8 */}
          <div className="p-8 bg-beige-warm/30 border border-charcoal/10 rounded-sm">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] uppercase tracking-luxury text-secondary font-semibold">
                Lab Prints Menu
              </span>
            </div>
            <h4 className="font-serif text-2xl font-medium text-charcoal mb-4">
              Individual Pro-Lab Loose Print Formats
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
              {originalPrintSizes.map((ps) => (
                <div key={ps.size} className="p-4 bg-white/90 rounded border border-charcoal/5 shadow-soft-sm">
                  <span className="font-serif text-lg font-medium text-charcoal block mb-1">
                    {ps.size} Lab Format
                  </span>
                  <span className="text-secondary leading-relaxed font-light">{ps.use}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Paper Laminations Comparison */}
      <section className="py-20 lg:py-24 bg-ivory border-b border-charcoal/5">
        <div className="section-container">
          <FinishSelector />
        </div>
      </section>

      {/* 6. Technical Specifications */}
      <ProductSpecifications
        specs={product.specs}
        notes="Non-tearable synthetic paper options available upon request. All photobooks include personalized cover design with soft-copy preview before printing."
      />

      {/* 7. FAQs */}
      <section className="py-16 sm:py-20 bg-white border-b border-charcoal/5">
        <div className="section-container max-w-3xl">
          <SectionHeading
            tag="Clarity"
            title="Photo Book FAQs"
            subtitle="Guidance on resolutions, mobile uploads, and hardcover finishes."
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
      <ProductCTA productName="Artisan Photo Book" />
    </div>
  );
};

