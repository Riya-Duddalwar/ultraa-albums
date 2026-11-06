import React from 'react';
import { ProductHero } from '../../components/products/ProductHero';
import { ProductSpecifications } from '../../components/products/ProductSpecifications';
import { RelatedProducts } from '../../components/products/RelatedProducts';
import { ProductCTA } from '../../components/products/ProductCTA';
import { SectionHeading } from '../../components/common/SectionHeading';
import { BoxLidSelector } from '../../components/products/BoxLidSelector';
import { productsData } from '../../data/products';
import { Box, Sparkles, Check, Briefcase, ShieldAlert, Award } from 'lucide-react';

export const BoxAndBagsPage: React.FC = () => {
  const product = productsData.find((p) => p.slug === 'box-and-bags')!;

  const packagingFeatures = [
    {
      title: 'Designer Hardwood Framing',
      tag: 'STRUCTURAL CORE',
      description: 'Built with a precision-cut solid hardwood structure wrapped smoothly in high-grade leatherette, safeguarding heavy albums against shocks, drops, and temperature shifts.',
      image: '/images/boxes-and-bags/box-wooden-frame.svg',
    },
    {
      title: 'Custom Top Lid Treatments',
      tag: 'AESTHETIC HARMONY',
      description: 'Lids can feature an edge-to-edge full photo wrap, modern crystal acrylic strips, portrait cameos in debossed frames, or full leather with foil stamping to mirror the album within.',
      image: '/images/boxes-and-bags/box-styles.svg',
    },
    {
      title: 'Suitcase Handles & Shoulder Straps',
      tag: 'MOBILITY',
      description: 'Heavy heirloom albums require effortless transit. We offer sturdy suitcase-style briefcase handles and purse-style leather shoulder straps for easy travel.',
      image: '/images/boxes-and-bags/box-handles.svg',
    },
    {
      title: 'Buckram Display Boxes',
      tag: 'GALLERY PRESENTATION',
      description: 'Crafted in archival Pearl or Carbon Buckram cloth for album formats 10×10 and larger. Provides an upscale, bookstore-grade clamshell presentation on coffee tables.',
      image: '/images/boxes-and-bags/box-buckram.svg',
    },
  ];

  const faqs = [
    {
      q: 'Can boxes and bags be purchased independently without an album?',
      a: 'No. Our presentation boxes, carry cases, and bags are handcrafted accessories engineered exclusively to accompany and safeguard Ultraa Albums book orders, and cannot be purchased independently.',
    },
    {
      q: 'What is included standard with every album order?',
      a: 'Every Ultraa Album comes presented in our standard soft protective Leather bag. Studios can choose to upgrade to our wooden frame box, Buckram display box, or fabric carry cases.',
    },
    {
      q: 'Which album sizes support Carry Cases and Buckram Display Boxes?',
      a: 'Display Boxes in Pearl or Carbon Buckram are available for formats 10×10 and larger. Heavy-duty fabric Carry Cases with reinforced handles are available for formats 12×12 and larger.',
    },
  ];

  return (
    <div className="bg-ivory text-charcoal">
      {/* 1. Hero */}
      <ProductHero
        title="Boxes & Bags"
        subtitle="Artisan wooden-frame presentation boxes wrapped in luxury leatherette, Pearl/Carbon Buckram display cases, ergonomic carry handles, and standard protective leather bags."
        categoryTag="Presentation & Transit Packaging"
        image="/images/products/boxes-and-bags-hero.jpg"
        imageAlt="Ultraa Albums Presentation Boxes and Bags"
        specsSummary={[
          'Hardwood Structural Frame',
          'Padded Leatherette Wrap',
          'Pearl & Carbon Buckram',
          'Soft Leather Bag Included',
        ]}
      />

      {/* 2. Packaging Note Callout */}
      <section className="py-6 bg-white border-b border-charcoal/5">
        <div className="section-container">
          <div className="flex items-center gap-3 p-4 bg-beige-warm/30 border border-charcoal/10 rounded-sm text-xs text-charcoal/90">
            <Award className="w-4 h-4 text-charcoal shrink-0" />
            <span>
              <strong>Packaging Note:</strong> Unless you choose to upgrade to a wooden box or Buckram case, all albums are presented in our standard soft Leather bag. These presentation products are crafted exclusively as companions for Ultraa Albums book orders.
            </span>
          </div>
        </div>
      </section>

      {/* 3. Four Core Packaging Pillars */}
      <section className="py-20 lg:py-28 bg-white border-b border-charcoal/5">
        <div className="section-container">
          <SectionHeading
            tag="Atelier Packaging"
            title="Engineered for Heirloom Protection & Prestige"
            subtitle="Presentation elevates the emotional reveal. Our boxes combine hardwood rigidity with supple leatherette and tailored lid treatments."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {packagingFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="editorial-card p-8 flex flex-col justify-between bg-ivory/30"
              >
                <div>
                  <div className="aspect-[16/10] rounded-sm overflow-hidden mb-6 bg-white border border-charcoal/5">
                    <img
                      src={feat.image}
                      alt={feat.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <span className="text-[10px] uppercase tracking-luxury text-secondary font-semibold block mb-1">
                    {feat.tag}
                  </span>

                  <h3 className="font-serif text-2xl font-medium text-charcoal mb-3">
                    {feat.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-secondary font-light leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Interactive Lid Customization Selector */}
      <section className="py-20 lg:py-24 bg-beige-warm/25 border-b border-charcoal/5">
        <div className="section-container">
          <BoxLidSelector />
        </div>
      </section>

      {/* 5. Technical Specifications */}
      <ProductSpecifications
        specs={product.specs}
        notes="Please specify your packaging and carry handle preferences when configuring your album order."
      />

      {/* 6. FAQs */}
      <section className="py-16 sm:py-20 bg-white border-b border-charcoal/5">
        <div className="section-container max-w-3xl">
          <SectionHeading
            tag="Clarity"
            title="Boxes & Packaging FAQs"
            subtitle="Details on sizing, carry handles, and Buckram upgrades."
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
      <ProductCTA productName="Presentation Boxes & Bags" />
    </div>
  );
};

