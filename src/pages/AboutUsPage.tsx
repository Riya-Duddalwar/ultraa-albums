import React from 'react';
import { Link } from 'react-router-dom';
import { ServiceHero } from '../components/services/ServiceHero';
import { BrandTimeline } from '../components/services/BrandTimeline';
import { TeamSection } from '../components/services/TeamSection';
import { SectionHeading } from '../components/common/SectionHeading';
import { companyDetails, valueProps } from '../data/company';
import { Sparkles, Check, Globe, ShieldCheck, HeartHandshake, Award, BookOpen, ArrowRight } from 'lucide-react';

export const AboutUsPage: React.FC = () => {
  const internationalMarkets = [
    'United States',
    'United Kingdom',
    'New Zealand',
    'Canada',
    'Europe',
    'Pan-India',
  ];

  return (
    <div className="bg-ivory text-charcoal">
      {/* 1. Hero */}
      <ServiceHero
        title="Preserving stories since 2012."
        subtitle="Ultraa Albums was founded by working photographers in Mumbai to redefine wedding albums with true color reproduction, pro-lab Fuji silver halide papers, and traditional hand-binding."
        categoryTag="Our Atelier & Heritage"
        image="/images/about-us/workshop-dahisar.jpg"
        imageAlt="Ultraa Albums Atelier Dahisar East Mumbai"
        badges={['Founded 2012 Mumbai', '100% Hand-Bound Craftsmanship', 'Shipping Worldwide']}
        ctaPrimaryText="Let's create something meaningful"
        ctaPrimaryAnchor="#about-inquiry"
        ctaSecondaryText="Explore Our Story"
        ctaSecondaryAnchor="#our-story"
      />

      {/* 2. Editorial Photo Essay: Three Moments of Craftsmanship */}
      <section className="py-20 lg:py-28 bg-white border-b border-charcoal/5">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-[10px] uppercase tracking-luxury text-secondary font-semibold">
              The Atelier Narrative
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-medium text-charcoal leading-tight">
              India's Leading Heirloom Album Atelier
            </h2>
            <p className="text-xs sm:text-base text-secondary font-light max-w-2xl mx-auto leading-relaxed">
              We take pride in being a master maker of high-end handcrafted albums for photography studios worldwide. Every volume is individually personalized to your exact narrative.
            </p>
          </div>

          {/* 3 Visual Moments Composition */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Moment 1: Artisan Hands */}
            <div className="editorial-card p-4 bg-ivory/30 space-y-4">
              <div className="aspect-[4/5] rounded-sm overflow-hidden bg-white border border-charcoal/10 shadow-soft-sm">
                <img
                  src="/images/hero/hero-craftsmanship.jpg"
                  alt="Artisan hands binding album signatures"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-luxury text-dusty-rose font-semibold block mb-1">
                  Moment 01 · Hand-Binding
                </span>
                <h3 className="font-serif text-lg font-medium text-charcoal">
                  Folded by Human Hands
                </h3>
                <p className="text-xs text-secondary font-light leading-relaxed mt-1">
                  Signatures folded, checked, and assembled individually using cold-pressed bookbinding techniques.
                </p>
              </div>
            </div>

            {/* Moment 2: Macro Leather & Embossing */}
            <div className="editorial-card p-4 bg-beige-warm/20 space-y-4">
              <div className="aspect-[4/5] rounded-sm overflow-hidden bg-white border border-charcoal/10 shadow-soft-sm">
                <img
                  src="/images/materials/leather.jpg"
                  alt="Macro Italian leather grain and spine ribs"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-luxury text-charcoal font-semibold block mb-1">
                  Moment 02 · Tactile Leathers
                </span>
                <h3 className="font-serif text-lg font-medium text-charcoal">
                  Supple Italian Textures
                </h3>
                <p className="text-xs text-secondary font-light leading-relaxed mt-1">
                  Full wrap leathers, tactile spine ribs, and deep hot-stamp metallic foil calligraphies.
                </p>
              </div>
            </div>

            {/* Moment 3: The Mumbai Workshop Floor */}
            <div className="editorial-card p-4 bg-ivory/30 space-y-4">
              <div className="aspect-[4/5] rounded-sm overflow-hidden bg-white border border-charcoal/10 shadow-soft-sm">
                <img
                  src="/images/about-us/workshop-dahisar.jpg"
                  alt="Dahisar East Mumbai Atelier"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-luxury text-powder-blue-dark font-semibold block mb-1">
                  Moment 03 · Pro Lab Precision
                </span>
                <h3 className="font-serif text-lg font-medium text-charcoal">
                  Dahisar East Workshop
                </h3>
                <p className="text-xs text-secondary font-light leading-relaxed mt-1">
                  State-of-the-art optical silver halide darkrooms paired with precision woodcraft timber machinery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Founder Story & Pull Quote on Warm Beige Wash */}
      <section id="our-story" className="py-20 lg:py-28 bg-beige-warm/30 border-b border-charcoal/5">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <span className="text-[10px] uppercase tracking-luxury text-secondary font-semibold">
              The Founder's Resolution · 2011
            </span>

            <blockquote className="font-serif text-2xl sm:text-4xl lg:text-5xl font-medium text-charcoal leading-[1.25]">
              "We could not find suitable albums to signify our photos in true colors. Binding was like a pack of playing cards. We took it as a personal challenge to redefine wedding albums with true color that lasts a lifetime."
            </blockquote>

            <div className="pt-2">
              <div className="font-serif italic text-lg text-charcoal">
                Rajiv, Mayank & Bhairavi Panchal
              </div>
              <div className="text-[11px] uppercase tracking-luxury text-secondary mt-1">
                Founders · Ultraa Albums Mumbai
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Section C: Our Journey (Timeline with 2010, 2011, 2012, Present) */}
      <BrandTimeline />

      {/* 5. Section D: Our Craftsmanship */}
      <section className="py-20 lg:py-28 bg-white border-b border-charcoal/5">
        <div className="section-container">
          <SectionHeading
            tag="Artisan Integrity"
            title="Our Craftsmanship Standards"
            subtitle="Why our hand-bound construction outlasts machine-made albums."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="editorial-card p-8 bg-ivory/30">
              <span className="text-[10px] uppercase tracking-luxury text-secondary font-semibold block mb-2">
                Standard 01
              </span>
              <h3 className="font-serif text-2xl font-medium text-charcoal mb-3">
                100% Hand-Bound
              </h3>
              <p className="text-xs sm:text-sm text-secondary font-light leading-relaxed">
                Our album pages aren’t solely relying on glue to secure them in; they rely on traditional bookbinding techniques where each book is individually sewn and turned by skilled artisans.
              </p>
            </div>

            <div className="editorial-card p-8 bg-ivory/30">
              <span className="text-[10px] uppercase tracking-luxury text-secondary font-semibold block mb-2">
                Standard 02
              </span>
              <h3 className="font-serif text-2xl font-medium text-charcoal mb-3">
                Fuji Silver Halide Paper
              </h3>
              <p className="text-xs sm:text-sm text-secondary font-light leading-relaxed">
                Printed exclusively on pro-lab Fuji Crystal Archive silver halide paper with a luster finish for excellent image stability, pure clean whites, and accurate color reproduction.
              </p>
            </div>

            <div className="editorial-card p-8 bg-ivory/30">
              <span className="text-[10px] uppercase tracking-luxury text-secondary font-semibold block mb-2">
                Standard 03
              </span>
              <h3 className="font-serif text-2xl font-medium text-charcoal mb-3">
                Rigid Core Substrates
              </h3>
              <p className="text-xs sm:text-sm text-secondary font-light leading-relaxed">
                Our thick archival boards (0.5mm to 1.0mm) yield finished page thicknesses of 1.0mm standard and 1.5mm extra-thick, guaranteed to withstand the wear and tear of everyday viewing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Section E: Our Team */}
      <TeamSection showCollectiveNote={true} />

      {/* 7. Section F: Our Vision */}
      <section className="py-20 bg-beige-warm/30 border-b border-charcoal/5">
        <div className="section-container max-w-3xl text-center space-y-6">
          <span className="text-[10px] uppercase tracking-luxury text-secondary font-semibold">
            Section F · Our Philosophy
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl font-medium text-charcoal leading-tight">
            "Just as aged wine is tastier, as you go down memory lane, happier you feel."
          </h2>

          <p className="text-xs sm:text-base text-secondary font-light leading-relaxed">
            Our vision at Ultraa Album is to unleash your powerful mission. When you turn pages by pages, you actually revise your memories quietly. A big smile on your face indicates happiness inside you. We facilitate effortlessly ordering, bespoke album designs, creating a masterpiece, and thus connecting with the customer's heart.
          </p>
        </div>
      </section>

      {/* 8. Section G: Why Choose Us (4 Pillars) */}
      <section className="py-20 lg:py-28 bg-white border-b border-charcoal/5">
        <div className="section-container">
          <SectionHeading
            tag="The Ultraa Promise"
            title="Why Choose Ultraa Albums?"
            subtitle="The core values that distinguish our atelier from mass printing factories."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="editorial-card p-8 bg-ivory/40">
              <span className="text-[10px] uppercase tracking-luxury text-secondary font-semibold block mb-2">Value 01</span>
              <h3 className="font-serif text-xl font-medium text-charcoal mb-2">Affordable Albums</h3>
              <p className="text-xs text-secondary leading-relaxed font-light">
                Making expensive flush-mount heirloom wedding albums accessible for every photographer's client package without compromising material standards.
              </p>
            </div>

            <div className="editorial-card p-8 bg-ivory/40">
              <span className="text-[10px] uppercase tracking-luxury text-secondary font-semibold block mb-2">Value 02</span>
              <h3 className="font-serif text-xl font-medium text-charcoal mb-2">Reliable Quality</h3>
              <p className="text-xs text-secondary leading-relaxed font-light">
                Every volume undergoes multi-point inspection. We offer a 100% quality guarantee backed by master artisans who have honed their craft for 15+ years.
              </p>
            </div>

            <div className="editorial-card p-8 bg-ivory/40">
              <span className="text-[10px] uppercase tracking-luxury text-secondary font-semibold block mb-2">Value 03</span>
              <h3 className="font-serif text-xl font-medium text-charcoal mb-2">Customer Centric</h3>
              <p className="text-xs text-secondary leading-relaxed font-light">
                Unlimited digital soft-copy revisions for album designs, fast 24-hour communication responses, and special 10% studio sample discounts.
              </p>
            </div>

            <div className="editorial-card p-8 bg-ivory/40">
              <span className="text-[10px] uppercase tracking-luxury text-secondary font-semibold block mb-2">Value 04</span>
              <h3 className="font-serif text-xl font-medium text-charcoal mb-2">Privacy & Security</h3>
              <p className="text-xs text-secondary leading-relaxed font-light">
                Complete non-disclosure confidentiality and secure cloud storage protocols safeguarding your high-resolution client imagery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Section H: Worldwide Presence */}
      <section className="py-20 lg:py-24 bg-ivory border-b border-charcoal/5">
        <div className="section-container">
          <div className="bg-white border border-charcoal/10 rounded-sm p-8 sm:p-12 shadow-soft-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-[10px] uppercase tracking-luxury text-secondary font-semibold">
                  Global Export Assurance
                </span>

                <h3 className="font-serif text-3xl font-medium text-charcoal">
                  Serving Photographers Across the Globe
                </h3>

                <p className="text-xs sm:text-sm text-secondary font-light leading-relaxed">
                  Since we all know international packaging is paramount for delicate heirlooms, we offer complete assurance to our international clients that albums reach them in perfect, intact condition.
                </p>

                <div className="pt-2">
                  <div className="text-[11px] uppercase tracking-subtle font-semibold text-charcoal mb-2">
                    Established Worldwide Network:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {internationalMarkets.map((market) => (
                      <span
                        key={market}
                        className="px-3 py-1 bg-beige-warm/30 rounded border border-charcoal/10 text-xs text-charcoal font-medium"
                      >
                        {market}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-ivory p-6 rounded border border-charcoal/10 space-y-3">
                <div className="text-xs uppercase tracking-luxury font-semibold text-charcoal">
                  Workshop & Atelier Location
                </div>
                <p className="text-xs text-secondary leading-relaxed font-light">
                  {companyDetails.address}
                </p>
                <div className="text-xs text-secondary pt-2 border-t border-charcoal/10">
                  Direct Line: <strong className="text-charcoal">{companyDetails.phoneNumbers[0]}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Section I: Final CTA */}
      <section id="about-inquiry" className="py-20 lg:py-28 bg-white border-t border-charcoal/5">
        <div className="section-container text-center max-w-3xl mx-auto space-y-6">
          <span className="text-[10px] uppercase tracking-luxury text-secondary font-semibold">
            Partner With Us
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-medium text-charcoal leading-tight">
            "Let's create something meaningful."
          </h2>
          <p className="text-xs sm:text-sm text-secondary font-light max-w-xl mx-auto leading-relaxed">
            Connect directly with Rajiv, Mayank, and Bhairavi Panchal. Whether you need sample swatches, custom album printing, or volume post-production, we are here to support your studio.
          </p>
          <div className="pt-4 flex justify-center">
            <Link to="/contact-us" className="btn-luxury-primary">
              <span>Get in Touch</span>
              <ArrowRight className="w-3.5 h-3.5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
