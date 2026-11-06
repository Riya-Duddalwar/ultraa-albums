import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ProductHero } from '../../components/products/ProductHero';
import { ProductSpecifications } from '../../components/products/ProductSpecifications';
import { ProductCTA } from '../../components/products/ProductCTA';
import { SectionHeading } from '../../components/common/SectionHeading';
import { UkShippingAssurance } from '../../components/uk/UkShippingAssurance';
import { productsData } from '../../data/products';
import { Globe, ArrowRight, Layers, ShieldCheck, Zap, Sparkles, CheckCircle2, Bookmark } from 'lucide-react';

export const SlipInAlbumsUkPage: React.FC = () => {
  const product = productsData.find((p) => p.slug === 'slip-in-albums-for-uk')!;

  useEffect(() => {
    document.title = 'Slip in Album For UK | Polypropylene Archival Pocket Albums | Ultraa Albums';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Inexpensive slip-in photo albums for UK studios and photo labs. 200-500 photo capacity, dimpled moisture-proof polypropylene pockets, and ultrasonic sealed covers.'
      );
    }
  }, []);

  const featuresList = [
    {
      title: 'Photo-Safe Dimpled Polypropylene',
      subtitle: 'MOISTURE PROOF ARCHIVAL POCKETS',
      desc: 'We resort to only photo-safe, dimpled-surface polypropylene (moisture-proof) pockets. The micro-embossed textured surface prevents glossy photos from sticking to the sleeve or transferring inks, ensuring your prints last a lifetime.',
      icon: <ShieldCheck className="w-5 h-5 text-secondary" />,
    },
    {
      title: 'No Glue, No Adhesive, Instant Insertion',
      subtitle: 'EFFORTLESS PRESERVATION',
      desc: 'The slip-in album is one of the most popular types of albums. You do not need glue to stick the photos in, and you do not need to fix the pictures in any other way. Simply print your photos and slide them smoothly into the pockets.',
      icon: <Layers className="w-5 h-5 text-secondary" />,
    },
    {
      title: 'Ultrasonic Machine Sealing',
      subtitle: 'INDUSTRIAL TENSILE STRENGTH',
      desc: 'We employ high-precision ultrasonic sealing machines for securing plastic pocket sleeves directly into the spine and covers, guaranteeing high seam strength that will never tear, unravel, or degrade over time.',
      icon: <Zap className="w-5 h-5 text-secondary" />,
    },
    {
      title: 'Marginal Memo Space for Notes',
      subtitle: 'PERSONAL STORYTELLING',
      desc: 'Once you have inserted your photos, you have dedicated lined margins beside each pocket to date, caption, or write handwritten personal notes—adding an intimate touch to every page.',
      icon: <Bookmark className="w-5 h-5 text-secondary" />,
    },
  ];

  return (
    <div className="bg-ivory text-charcoal">
      {/* 1. Region Switcher Banner */}
      <div className="bg-white border-b border-charcoal/5 py-3">
        <div className="section-container flex items-center justify-between text-xs text-secondary">
          <div className="flex items-center gap-2">
            <Globe className="w-3.5 h-3.5 text-secondary" />
            <span>Viewing dedicated <strong>United Kingdom Pocket Album Collection</strong> page.</span>
          </div>
          <Link
            to="/slip-in-albums"
            className="inline-flex items-center gap-1 font-medium text-charcoal hover:underline"
          >
            <span>View India / Global Edition</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>

      {/* 2. Hero */}
      <ProductHero
        title="Slip in Album For UK"
        subtitle="We are engaged in providing a wide range of inexpensive photo albums. Most of us have loose prints lying in boxes or old albums worn down over the years. Our moisture-proof polypropylene slip-in albums hold them safely for life."
        categoryTag="UK Archival Pocket Albums"
        image="/images/products/slipin-hero.jpg"
        imageAlt="Slip in Album For UK Ultraa Albums"
        specsSummary={[
          '200 - 500 Photos (4x6 in)',
          'Dimpled Polypropylene',
          'Ultrasonic Machine Sealing',
          'Studio Gift Custom Branding',
        ]}
      />

      {/* 3. Section: Loose Prints Story */}
      <section className="py-20 lg:py-28 bg-white border-b border-charcoal/5">
        <div className="section-container max-w-4xl space-y-8">
          <div className="text-center space-y-4">
            <span className="text-[10px] uppercase tracking-luxury text-secondary font-semibold">
              The Accessible Family Archive
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-charcoal leading-tight">
              Giving Loose Prints the Safe Home They Deserve
            </h2>
            <p className="text-xs sm:text-base text-secondary font-light leading-relaxed">
              Most of us have loose prints that are just sitting in shoeboxes or lying in disorganized drawers, or vintage family albums that have torn apart over the decades. When we open them, we cherish those memories. Our inexpensive slip-in albums are the best, safest way to hold them neatly in order.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
            <div className="p-8 bg-ivory border border-charcoal/10 rounded-sm space-y-3">
              <h3 className="font-serif text-xl font-medium text-charcoal">
                For Life's Every Everyday Milestone
              </h3>
              <p className="text-xs sm:text-sm text-secondary font-light leading-relaxed">
                Slip-in albums are ideal for college trips, bachelor parties, baby shower gifts, birthday archives, holiday vacations, and relaxed wedding candid snapshots. No mounting tools, photo corners, or glue required.
              </p>
            </div>

            <div className="p-8 bg-ivory border border-charcoal/10 rounded-sm space-y-3">
              <h3 className="font-serif text-xl font-medium text-charcoal">
                High Capacity 200–500 Prints
              </h3>
              <p className="text-xs sm:text-sm text-secondary font-light leading-relaxed">
                Tailored for standard 4×6 inch (10×15 cm) photographic prints. Available in 200, 300, and up to 500 print capacities, displaying 2 to 4 photos per page with memo margin space to write notes and dates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Section: Technical Craftsmanship & Ultrasonic Sealing */}
      <section className="py-20 lg:py-28 bg-ivory border-b border-charcoal/5">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <span className="text-[10px] uppercase tracking-luxury text-secondary font-semibold">
              Engineered for Longevity
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-charcoal leading-tight">
              Why Our Slip-In Albums Outlast the Rest
            </h2>
            <p className="text-xs sm:text-sm text-secondary font-light leading-relaxed">
              Inexpensive does not mean disposable. We manufacture every slip-in album to rigorous photo-lab archival standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuresList.map((item, idx) => (
              <div
                key={idx}
                className="p-8 bg-white border border-charcoal/10 rounded-sm space-y-3 shadow-soft-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-ivory rounded-sm">{item.icon}</div>
                  <span className="text-[10px] uppercase tracking-luxury text-secondary font-semibold">
                    {item.subtitle}
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-medium text-charcoal">{item.title}</h3>
                <p className="text-xs sm:text-sm text-secondary font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Section: Low Cost Gift Albums for UK Photo Labs & Studios */}
      <section className="py-20 lg:py-28 bg-white border-b border-charcoal/5">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="aspect-[4/3] rounded-sm overflow-hidden bg-ivory border border-charcoal/10 shadow-card">
                <img
                  src="/images/uk/slipin-uk.svg"
                  alt="Low Cost Gift Albums for UK Photo Labs"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="text-[10px] uppercase tracking-luxury text-secondary font-semibold">
                Photo Lab & Studio Solutions
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-charcoal leading-tight">
                Low Cost Gift Albums For UK Photo Labs
              </h2>
              <p className="text-xs sm:text-sm text-secondary font-light leading-relaxed">
                UK Photo labs and retail print shops can supply these slip-in albums alongside loose print orders as a branded gift album. The cover is printed with your lab details and logo, turning a practical photo album into an effective, lasting advertisement.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-secondary font-light">
                    <strong>Zero-Defect Quality Track Record:</strong> Our low-cost gift albums are of superior quality and we have never received complaints regarding manufacturing integrity.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-secondary font-light">
                    <strong>Quality Testing Unit Inspection:</strong> Every batch is thoroughly tested in our quality testing units before international dispatch.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-secondary font-light">
                    <strong>Flexible Wholesale Volumes:</strong> UK studios can place orders for any quantity, delivered reliably within stipulated time frames.
                  </p>
                </div>
              </div>

              <div className="p-6 bg-ivory border border-charcoal/10 rounded-sm">
                <p className="text-xs text-secondary font-light leading-relaxed italic">
                  "The professionals hired with us are always courteous with customers and attentive to their exact specifications for low-cost promotional albums."
                </p>
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
        notes="All slip-in albums are constructed with PVC-free, non-stick dimpled polypropylene sleeves to prevent image transfer. Export orders packed in sturdy moisture-barrier cartons."
      />

      {/* 8. Product CTA */}
      <ProductCTA productName="Slip-In Albums (UK Collection)" />
    </div>
  );
};

