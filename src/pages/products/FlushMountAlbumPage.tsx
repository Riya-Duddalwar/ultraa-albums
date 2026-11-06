import React from 'react';
import { ProductHero } from '../../components/products/ProductHero';
import { ProductSpecifications } from '../../components/products/ProductSpecifications';
import { RelatedProducts } from '../../components/products/RelatedProducts';
import { ProductCTA } from '../../components/products/ProductCTA';
import { SectionHeading } from '../../components/common/SectionHeading';
import { FullBleedSpreadBanner } from '../../components/common/FullBleedSpreadBanner';
import { ThicknessToggle } from '../../components/products/ThicknessToggle';
import { ProductComparison } from '../../components/products/ProductComparison';
import { productsData } from '../../data/products';
import { Layers, ShieldCheck, Sparkles, BookOpen, Check, Award, Eye } from 'lucide-react';

export const FlushMountAlbumPage: React.FC = () => {
  const product = productsData.find((p) => p.slug === 'flush-mount-album')!;

  const faqs = [
    {
      q: 'What is the main difference between a Flush Mount Album and a Layflat Photo Book?',
      a: 'Flush Mount Albums feature thick, rigid archival board cores between photographic prints, creating heavyweight pages (1.0mm to 1.5mm thick) that do not bend. Layflat books utilize lighter photographic paper without heavy board cores, allowing higher page capacity while still opening 180° flat.',
    },
    {
      q: 'Can I choose between White and Black core substrates?',
      a: 'Yes. We offer both classic white and dramatic black archival substrate cores depending on the aesthetic balance of your album spreads.',
    },
    {
      q: 'What cover materials are available for the Flush Mount series?',
      a: 'Our Flush Mount collection offers the complete range of 9 handmade cover styles: Crystal Acrylic, Woven Linen, Full Wrap Leather, Fine Canvas, Metal Plate, Solid Wood, Hardcover Photo, Raised Embossed, and Gold/Silver/Rose Gold foil stamping.',
    },
    {
      q: 'Do you offer a studio sample discount?',
      a: 'Yes! Under our "We Invest In You" program, professional wedding photographers receive a 10% discount on studio sample albums to showcase to their couples.',
    },
  ];

  return (
    <div className="bg-ivory text-charcoal">
      {/* 1. Hero */}
      <ProductHero
        title="Flush Mount Albums"
        subtitle="Keep your memories alive with a handcrafted flush mount album. Fuji Crystal Archive silver halide prints mounted onto solid 1.0mm-1.5mm rigid boards with zero-gutter panoramic spreads."
        categoryTag="Flagship Heirloom Collection"
        image="/images/products/flush-mount-album.jpg"
        imageAlt="Ultraa Albums Flush Mount Album"
        specsSummary={[
          'Fuji Silver Halide Luster',
          '1.0mm - 1.5mm Rigid Core',
          'Zero Gutter Spread',
          'Hand-Bound in Mumbai',
        ]}
      />

      {/* 2. Section A: Handcrafted Artisan Binding */}
      <section className="py-20 lg:py-24 bg-white border-b border-charcoal/5">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-beige-warm/40 border border-charcoal/10 rounded-full text-[10px] uppercase tracking-luxury text-secondary font-medium">
                <Award className="w-3.5 h-3.5 text-dusty-rose" />
                <span>Section A · Traditional Atelier Binding</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-charcoal leading-tight">
                Individually bound by hand. <br />
                <span className="italic font-normal">Never machine automated.</span>
              </h2>

              <p className="text-xs sm:text-sm text-secondary font-light leading-relaxed">
                Unlike mass-market books that rely solely on surface machine glue, Ultraa Albums creates every single flush mount album individually hand-bound using traditional bookbinding techniques honed over decades in our Mumbai atelier.
              </p>

              <div className="space-y-2.5 pt-2">
                <div className="flex items-start gap-2.5 text-xs text-charcoal">
                  <Check className="w-4 h-4 text-dusty-rose shrink-0 mt-0.5" />
                  <span><strong>Artisan Spine Assembly:</strong> Precision-scored and folded signatures that ensure the album opens effortlessly without spine cracking.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-charcoal">
                  <Check className="w-4 h-4 text-dusty-rose shrink-0 mt-0.5" />
                  <span><strong>Archival pH-Neutral Adhesives:</strong> Prevents page curling, bubbling, and chemical discoloration over decades of family viewing.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-charcoal">
                  <Check className="w-4 h-4 text-dusty-rose shrink-0 mt-0.5" />
                  <span><strong>100% Quality Guarantee:</strong> Every volume is hand-inspected under pro-lab daylight lighting before packaging.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden bg-ivory border border-charcoal/10 shadow-card">
                <img
                  src="/images/hero/hero-craftsmanship.jpg"
                  alt="Handcrafted Binding Technique"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Section B: Full-Bleed 21:9 Panoramic Spread (Break Monotony) */}
      <FullBleedSpreadBanner
        image="/images/flush-mount/fm-spread.jpg"
        tag="Section B · Zero Gutter Gap"
        title="Dramatic Two-Page Panoramic Spreads"
        subtitle="Silver halide photographic prints mounted across a scored center fold create a continuous plane without an unsightly gutter cut or facial distortion."
        quote="Continuous full-bleed panoramic art that lets wedding ceremonies breathe."
        accentBg="bg-gradient-to-b from-beige-warm/30 via-ivory to-rose-light/20"
      />

      {/* 4. Section C: Interactive Page Thickness Selector (1.0mm vs 1.5mm) */}
      <section className="py-20 lg:py-24 bg-white border-b border-charcoal/5">
        <div className="section-container">
          <ThicknessToggle />
        </div>
      </section>

      {/* 5. Section D: Fuji Crystal Archive Silver Halide Science */}
      <section className="py-20 lg:py-24 bg-ivory border-b border-charcoal/5">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden bg-white border border-charcoal/10 shadow-card">
                <img
                  src="/images/gallery/wedding-1.jpg"
                  alt="Fuji Crystal Archive Silver Halide Emulsion"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 space-y-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-charcoal/10 rounded-full text-[10px] uppercase tracking-luxury text-secondary font-medium">
                <Sparkles className="w-3.5 h-3.5 text-dusty-rose" />
                <span>Section D · Pro Lab Emulsion Chemistry</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-charcoal leading-tight">
                Fuji Crystal Archive <br />
                <span className="italic font-normal">Silver Halide Paper</span>
              </h2>

              <p className="text-xs sm:text-sm text-secondary font-light leading-relaxed">
                We print exclusively using continuous-tone optical silver halide pro-lab exposure on Fuji Crystal Archive luster paper. Unlike digital inkjet dot matrices, silver halide chemistry creates pure continuous tonal gradations.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-charcoal">
                <div className="p-3 bg-white border border-charcoal/5 rounded">
                  <strong className="block text-charcoal mb-0.5">Pristine Pure Whites</strong>
                  <span className="text-secondary font-light">Accurate bridal gowns without muddy yellow color casts.</span>
                </div>
                <div className="p-3 bg-white border border-charcoal/5 rounded">
                  <strong className="block text-charcoal mb-0.5">True Skin Tones</strong>
                  <span className="text-secondary font-light">Faithful rendering of delicate melanin and blushing hues.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Product Comparison: Flush Mount vs Layflat */}
      <section className="py-20 lg:py-24 bg-white border-b border-charcoal/5">
        <div className="section-container">
          <ProductComparison />
        </div>
      </section>

      {/* 5. Technical Specifications Table */}
      <ProductSpecifications
        specs={product.specs}
        notes="All flush mount albums come standard in our protective soft leather bag. Upgrades to wooden presentation boxes or Pearl/Carbon Buckram display cases available."
      />

      {/* 6. Frequently Asked Questions */}
      <section className="py-16 sm:py-24 bg-white border-b border-charcoal/5">
        <div className="section-container max-w-3xl">
          <SectionHeading
            tag="Inquiries & Clarity"
            title="Flush Mount Album FAQs"
            subtitle="Common questions from professional photographers regarding page thicknesses, file preparation, and ordering."
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

      {/* 8. Contact & Order CTA */}
      <ProductCTA productName="Flush Mount Album" />
    </div>
  );
};

