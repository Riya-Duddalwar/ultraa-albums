import React from 'react';
import { ProductHero } from '../../components/products/ProductHero';
import { ProductSpecifications } from '../../components/products/ProductSpecifications';
import { RelatedProducts } from '../../components/products/RelatedProducts';
import { ProductCTA } from '../../components/products/ProductCTA';
import { SectionHeading } from '../../components/common/SectionHeading';
import { CapacitySelector } from '../../components/products/CapacitySelector';
import { productsData } from '../../data/products';
import { Check, ShieldCheck, Sparkles, Heart, Gift, Camera, Calendar, Award } from 'lucide-react';

export const SlipInAlbumsPage: React.FC = () => {
  const product = productsData.find((p) => p.slug === 'slip-in-albums')!;

  const howItWorksSteps = [
    {
      step: '01',
      title: 'Slide In Without Glue or Adhesives',
      description: 'You do not need glue to stick the photos in, and you do not need mounting corners. Just print your photos and slip them effortlessly into the precision pockets.',
    },
    {
      step: '02',
      title: 'Moisture-Proof Polypropylene Safety',
      description: 'We resort exclusively to photo-safe, dimpled surface polypropylene pockets. This specialized texture prevents prints from sticking to sleeves or deteriorating over time.',
    },
    {
      step: '03',
      title: 'Caption Space & Personal Touch',
      description: 'Once inserted, memo margin spaces allow you to write dates, captions, and personal anecdotes beside each photograph to document your journey.',
    },
    {
      step: '04',
      title: 'Ultrasonic Machine Sealing',
      description: 'Our sleeves are fused with advanced ultrasonic sealing technology, guaranteeing high tensile strength that withstands frequent page flipping.',
    },
  ];

  const suitableOccasions = [
    { name: 'College Trips & Friends Outings', icon: <Camera className="w-5 h-5 text-powder-blue" /> },
    { name: 'Bachelor & Bachelorette Parties', icon: <Sparkles className="w-5 h-5 text-rose-pastel" /> },
    { name: 'Wedding Guest Print Archives', icon: <Heart className="w-5 h-5 text-rose-pastel" /> },
    { name: 'Baby Shower & Milestone Gifts', icon: <Gift className="w-5 h-5 text-sage" /> },
    { name: 'Birthday & Anniversary Albums', icon: <Calendar className="w-5 h-5 text-charcoal" /> },
    { name: 'Photo Lab Customer Giveaways', icon: <Award className="w-5 h-5 text-amber-600" /> },
  ];

  const faqs = [
    {
      q: 'What is the photograph capacity of Ultraa Albums slip-in books?',
      a: 'Our slip-in albums are available in capacities ranging from 200, 300, and up to 500 photos for standard 4×6 inch (10×15 cm) prints, displaying 2 to 4 photos per page.',
    },
    {
      q: 'How do dimpled polypropylene pockets protect photographs?',
      a: 'Smooth PVC pockets often trap humidity and fuse chemically to photographic emulsions, ruining prints. Our dimpled polypropylene pockets allow micro-airflow and are 100% moisture-proof and acid-free.',
    },
    {
      q: 'Can photo labs print custom branding onto the covers?',
      a: 'Yes. Photo labs and studios can order slip-in gift albums in custom quantities with their lab logo and contact details printed on the cover for client gifting and advertising.',
    },
  ];

  return (
    <div className="bg-ivory text-charcoal">
      {/* 1. Hero */}
      <ProductHero
        title="Slip-In Albums"
        subtitle="Inexpensive, photo-safe archival pocket albums featuring dimpled polypropylene moisture-proof sleeves, ultrasonic machine sealing, and 200 to 500 photo capacity."
        categoryTag="Photo-Safe Archival Storage"
        image="/images/products/slipin-hero.jpg"
        imageAlt="Ultraa Albums Slip-In Pocket Albums"
        specsSummary={[
          'Dimpled Polypropylene',
          '200 - 500 Photos (4x6 in)',
          'Ultrasonic Heat Sealing',
          'No Adhesives Required',
        ]}
      />

      {/* 2. Interactive Capacity Selector */}
      <section className="py-20 lg:py-24 bg-beige-warm/30 border-b border-charcoal/5">
        <div className="section-container">
          <CapacitySelector />
        </div>
      </section>

      {/* 3. How Slip-In Albums Work */}
      <section className="py-20 lg:py-28 bg-white border-b border-charcoal/5">
        <div className="section-container">
          <SectionHeading
            tag="Effortless Archival"
            title="How Slip-In Albums Work"
            subtitle="Most of us have loose prints lying in drawers or aging albums deteriorating over time. Our pocket albums provide an effortless, glue-free sanctuary."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorksSteps.map((item) => (
              <div
                key={item.step}
                className="editorial-card p-6 flex flex-col justify-between bg-ivory/30"
              >
                <div>
                  <span className="font-serif text-3xl font-medium text-rose-pastel block mb-2">
                    {item.step}
                  </span>
                  <h3 className="font-serif text-lg font-medium text-charcoal mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-secondary leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Photo Lab Gift Albums Highlight */}
      <section className="py-16 sm:py-24 bg-beige-warm/30 border-b border-charcoal/5">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6">
              <div className="aspect-[4/3] rounded-sm overflow-hidden bg-white border border-charcoal/10 shadow-soft-sm">
                <img
                  src="/images/slip-in-albums/slipin-gifts.svg"
                  alt="Low Cost Gift Albums for Photo Labs"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <span className="text-[10px] uppercase tracking-luxury text-secondary font-semibold">
                Photo Lab Merchandising
              </span>

              <h2 className="font-serif text-3xl font-medium text-charcoal leading-tight">
                Low-Cost Gift Albums for Studios & Labs
              </h2>

              <p className="text-xs sm:text-sm text-secondary font-light leading-relaxed">
                Photo labs and wedding photographers can provide these albums along with loose print orders as complimentary client gift books. The cover is printed with your studio details, making gifting an album an exceptional means of long-term branding.
              </p>

              <div className="pt-2 text-xs text-charcoal/80 space-y-2">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-secondary" />
                  <span>Place bulk orders for any quantity with guaranteed delivery windows</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-secondary" />
                  <span>Quality checked thoroughly in units before dispatching</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-secondary" />
                  <span>Available in rich leatherette or full wrap photo printed hardcovers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Suitable Occasions Grid */}
      <section className="py-20 lg:py-28 bg-white border-b border-charcoal/5">
        <div className="section-container">
          <SectionHeading
            tag="Versatile Storage"
            title="Perfect for Every Celebration"
            subtitle="Slip-in albums are relatively inexpensive, durable, and ideal for organizing loose memories from all walks of life."
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {suitableOccasions.map((occ, idx) => (
              <div
                key={idx}
                className="p-5 bg-ivory border border-charcoal/5 rounded-sm text-center flex flex-col items-center justify-center space-y-3"
              >
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-soft-sm">
                  {occ.icon}
                </div>
                <span className="text-xs font-medium text-charcoal leading-tight">
                  {occ.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Technical Specifications */}
      <ProductSpecifications
        specs={product.specs}
        notes="Personalized slip-in photo albums accommodate 200–500 prints (4×6 in / 10×15 cm). Custom cover branding available for volume orders."
      />

      {/* 7. FAQs */}
      <section className="py-16 sm:py-20 bg-white border-b border-charcoal/5">
        <div className="section-container max-w-3xl">
          <SectionHeading
            tag="Clarity"
            title="Slip-In Album FAQs"
            subtitle="Details on pocket materials, print counts, and lab bulk pricing."
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
      <ProductCTA productName="Slip-In Pocket Album" />
    </div>
  );
};

