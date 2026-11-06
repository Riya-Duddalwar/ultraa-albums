import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ProductHero } from '../../components/products/ProductHero';
import { ProductSpecifications } from '../../components/products/ProductSpecifications';
import { ProductCTA } from '../../components/products/ProductCTA';
import { SectionHeading } from '../../components/common/SectionHeading';
import { UkShippingAssurance } from '../../components/uk/UkShippingAssurance';
import { productsData } from '../../data/products';
import { Globe, ArrowRight, Box, ShieldCheck, Briefcase, Award, CheckCircle } from 'lucide-react';

export const BoxAndBagsUkPage: React.FC = () => {
  const product = productsData.find((p) => p.slug === 'box-and-bags-for-uk')!;

  useEffect(() => {
    document.title = 'Box and Bags For UK | Presentation Boxes & Display Cases | Ultraa Albums';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Custom presentation boxes and Buckram display cases for UK wedding albums. Handcrafted wooden frame with leatherette wrap, suitcase handles, and soft leather bags.'
      );
    }
  }, []);

  const topLidStyles = [
    {
      title: 'Full Photo Wrap',
      desc: 'Seamless edge-to-edge photographic print wrapped across the entire top lid with protective matte or luster film lamination.',
      tag: 'PHOTO WRAP',
    },
    {
      title: 'Crystal Acrylic Strip',
      desc: 'A modern diamond-polished acrylic panel integrated into the lid, creating a high-gloss jewel window for a signature wedding portrait.',
      tag: 'ACRYLIC ACCENT',
    },
    {
      title: 'Cameo Window',
      desc: 'An inset beveled cameo aperture framed by rich leatherette that showcases a focal portrait beneath museum-grade protective acrylic.',
      tag: 'CAMEO APERTURE',
    },
    {
      title: 'Full Leather Wrap with Debossing',
      desc: 'Luxurious tactile leatherette wrapping the entire box, debossed with couple names, wedding date, or bespoke studio monogram in gold or silver foil.',
      tag: 'LEATHER & FOIL',
    },
    {
      title: 'Bespoke Custom Hybrid',
      desc: 'A tailored combination pairing leather spine wrapping with an acrylic photo faceplate or dual-tone buckram accents for bespoke UK studio collections.',
      tag: 'BESPOKE HYBRID',
    },
  ];

  return (
    <div className="bg-ivory text-charcoal">
      {/* 1. Region Switcher Banner */}
      <div className="bg-white border-b border-charcoal/5 py-3">
        <div className="section-container flex items-center justify-between text-xs text-secondary">
          <div className="flex items-center gap-2">
            <Globe className="w-3.5 h-3.5 text-secondary" />
            <span>Viewing dedicated <strong>United Kingdom Packaging Collection</strong> page.</span>
          </div>
          <Link
            to="/box-and-bags"
            className="inline-flex items-center gap-1 font-medium text-charcoal hover:underline"
          >
            <span>View India / Global Edition</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>

      {/* 2. Hero */}
      <ProductHero
        title="Box and Bags For UK"
        subtitle="Refined over the years, our regular box has been a popular feature of our range. A modern way of packaging combining a designer hardwood structure frame wrapped in leatherette material with a beautiful top photo cover."
        categoryTag="UK Presentation & Packaging"
        image="/images/products/boxes-and-bags-hero.jpg"
        imageAlt="Ultraa Albums Box and Bags For UK"
        specsSummary={[
          'Hardwood Wooden Core',
          'Suitcase & Purse Handles',
          'Pearl & Carbon Buckram',
          'Soft Leather Bag Included',
        ]}
      />

      {/* 3. Section: Modern Packaging Concept */}
      <section className="py-20 lg:py-28 bg-white border-b border-charcoal/5">
        <div className="section-container max-w-4xl space-y-8">
          <div className="text-center space-y-4">
            <span className="text-[10px] uppercase tracking-luxury text-secondary font-semibold">
              Modern Heirloom Protection
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-charcoal leading-tight">
              A Refined Way of Packaging for UK Studios
            </h2>
            <p className="text-xs sm:text-base text-secondary font-light leading-relaxed">
              Refined over more than a decade, our presentation box is a centerpiece of our heirloom range. It unites two essential elements: a designer hardwood structural frame wrapped in supple leatherette material, and an evocative fine-art photograph on the top cover.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
            <div className="p-8 bg-ivory border border-charcoal/10 rounded-sm space-y-3">
              <div className="flex items-center gap-2 text-charcoal font-medium">
                <Box className="w-5 h-5 text-secondary" />
                <h3 className="font-serif text-xl">Architectural Hardwood Core</h3>
              </div>
              <p className="text-xs sm:text-sm text-secondary font-light leading-relaxed">
                Unlike lightweight cardboard slipcases, each box is built around a precision-cut solid timber frame that shields your album against corner impacts, weight pressure, and seasonal humidity changes during shipping to Britain.
              </p>
            </div>

            <div className="p-8 bg-ivory border border-charcoal/10 rounded-sm space-y-3">
              <div className="flex items-center gap-2 text-charcoal font-medium">
                <ShieldCheck className="w-5 h-5 text-secondary" />
                <h3 className="font-serif text-xl">Standard Soft Leather Bag</h3>
              </div>
              <p className="text-xs sm:text-sm text-secondary font-light leading-relaxed">
                Unless an upgrade is selected, all Ultraa Albums are presented nestled within our standard soft protective leather bag. Please note: these packaging products are designed exclusively for our albums and cannot be purchased independently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Section: Top Cover Options For United Kingdom */}
      <section className="py-20 lg:py-28 bg-ivory border-b border-charcoal/5">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <span className="text-[10px] uppercase tracking-luxury text-secondary font-semibold">
              Cover Styles For United Kingdom
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-charcoal leading-tight">
              The Cover Can Have
            </h2>
            <p className="text-xs sm:text-sm text-secondary font-light leading-relaxed">
              Every wedding is unique. Choose from five distinguished lid styling options to complement your album's exterior aesthetic.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topLidStyles.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-8 border border-charcoal/10 rounded-sm space-y-3 shadow-soft-sm hover:border-charcoal/20 transition-colors"
              >
                <span className="text-[10px] uppercase tracking-luxury text-secondary font-semibold">
                  {item.tag}
                </span>
                <h3 className="font-serif text-2xl font-medium text-charcoal">{item.title}</h3>
                <p className="text-xs sm:text-sm text-secondary font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}

            {/* Packaging Specification Note Card */}
            <div className="bg-charcoal text-ivory p-8 rounded-sm space-y-3 flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-luxury text-dusty-rose font-semibold">
                  Studio Ordering Note
                </span>
                <h3 className="font-serif text-2xl font-medium text-ivory mt-2">
                  Packaging Specification
                </h3>
                <p className="text-xs sm:text-sm text-ivory/70 font-light leading-relaxed mt-2">
                  Please specify your packaging choice when you place your order with our team. Each packaging piece is crafted custom to match your album's exact page count and dimensions.
                </p>
              </div>
              <div className="pt-4 border-t border-ivory/10 flex items-center gap-2 text-xs text-dusty-rose">
                <CheckCircle className="w-4 h-4" />
                <span>Custom fitted to exact album depth</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Section: Carry Options & Display Boxes */}
      <section className="py-20 lg:py-28 bg-white border-b border-charcoal/5">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[10px] uppercase tracking-luxury text-secondary font-semibold">
                Portability & Functionality
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-charcoal leading-tight">
                Box With Carry Options For United Kingdom
              </h2>
              <p className="text-xs sm:text-sm text-secondary font-light leading-relaxed">
                A heavy, multi-spread flush mount album safely housed in a solid hardwood box can often be heavy to carry. For this reason, we offer dedicated ergonomic transport options:
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-5 bg-ivory border border-charcoal/10 rounded-sm flex items-start gap-4">
                  <Briefcase className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-serif text-lg font-medium text-charcoal">Suitcase Handle Option</h4>
                    <p className="text-xs text-secondary font-light leading-relaxed mt-1">
                      Reinforced briefcase-style top handle crafted from matching leatherette, engineered to carry albums up to 10kg with ease.
                    </p>
                  </div>
                </div>

                <div className="p-5 bg-ivory border border-charcoal/10 rounded-sm flex items-start gap-4">
                  <Award className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-serif text-lg font-medium text-charcoal">Ladies Purse Strap Option</h4>
                    <p className="text-xs text-secondary font-light leading-relaxed mt-1">
                      An elegant shoulder strap option designed like a fine handbag, allowing effortless hands-free mobility during client reveals and consultations.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-charcoal/10 space-y-3">
                <h4 className="font-serif text-xl font-medium text-charcoal">
                  Display Boxes & Carry Cases For United Kingdom
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-secondary font-light">
                  <li className="flex items-start gap-2">
                    <span className="text-charcoal font-semibold">•</span>
                    <span><strong>Display Boxes (Formats 10×10 & Larger):</strong> Available in exquisite <em>Pearl Buckram</em> or <em>Carbon Buckram</em> with fine interior ribbon release.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-charcoal font-semibold">•</span>
                    <span><strong>Carry Cases (Formats 12×12 & Larger):</strong> Offered in durable, weather-resistant black fabric with an integrated practical carry handle for large format folios.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="aspect-[4/3] rounded-sm overflow-hidden bg-ivory border border-charcoal/10 shadow-card">
                <img
                  src="/images/uk/boxes-uk.svg"
                  alt="Ultraa Albums Box and Bags For United Kingdom"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UK International Shipping Assurance */}
      <UkShippingAssurance />

      {/* 7. Technical Specifications */}
      <ProductSpecifications
        specs={product.specs}
        notes="All presentation boxes, Buckram display cases, and carry bags are manufactured concurrently with your album order to ensure an exact, tailored tolerance fit. Export packaging guarantees safe arrival across the UK."
      />

      {/* 8. Product CTA */}
      <ProductCTA productName="Box and Bags (UK Collection)" />
    </div>
  );
};

