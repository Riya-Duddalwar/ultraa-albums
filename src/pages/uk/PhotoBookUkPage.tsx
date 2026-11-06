import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ProductHero } from '../../components/products/ProductHero';
import { ProductSpecifications } from '../../components/products/ProductSpecifications';
import { ProductCTA } from '../../components/products/ProductCTA';
import { SectionHeading } from '../../components/common/SectionHeading';
import { UkShippingAssurance } from '../../components/uk/UkShippingAssurance';
import { productsData } from '../../data/products';
import { Globe, ArrowRight, BookOpen, Sparkles, Layers, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const PhotoBookUkPage: React.FC = () => {
  const product = productsData.find((p) => p.slug === 'photo-book-for-uk')!;

  useEffect(() => {
    document.title = 'Photo Book For UK | Flat-Open Bookstore Hardcovers | Ultraa Albums';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Custom bookstore-grade photo books for the UK. Full flat openable binding, non-tearable paper in glossy, matte & feather touch, sizes 6x8 to 12x18, and 5x5 mini pocket books.'
      );
    }
  }, []);

  const paperFinishes = [
    {
      title: 'Glossy Lamination',
      tag: 'VIBRANT DEPTH',
      desc: 'High-gloss optical clarity enhancing deep contrast, rich blacks, and vibrant wedding colors for punchy modern spreads.',
    },
    {
      title: 'Velvet Matte Finish',
      tag: 'GLARE FREE',
      desc: 'Silky non-reflective matte finish offering clean viewing under harsh lights with zero fingerprint smudging.',
    },
    {
      title: 'Feather Touch Texture',
      tag: 'TACTILE LUXURY',
      desc: 'Subtle micro-texture paper surface creating an ultra-soft velvety hand-feel reminiscent of fine-art museum catalogs.',
    },
  ];

  const bookSizes = [
    {
      size: '5 × 5 in',
      name: 'Mini Pocket Book',
      desc: 'Perfect pocket-sized companion suited for school, college, friends, and social mobile photos.',
    },
    {
      size: '6 × 8 in',
      name: 'Classic Companion',
      desc: 'Compact everyday volume ideal for family vacations, milestone anniversaries, and baby books.',
    },
    {
      size: '9 × 12 in',
      name: 'Coffee Table Hardcover',
      desc: 'Generous landscape format showcasing editorial layouts with true bookstore aesthetic.',
    },
    {
      size: '12 × 18 in',
      name: 'Grand Wedding Photobook',
      desc: 'Magnificent large-format wedding edition holding dramatic panoramic double-page spreads.',
    },
  ];

  return (
    <div className="bg-ivory text-charcoal">
      {/* 1. Region Switcher Banner */}
      <div className="bg-white border-b border-charcoal/5 py-3">
        <div className="section-container flex items-center justify-between text-xs text-secondary">
          <div className="flex items-center gap-2">
            <Globe className="w-3.5 h-3.5 text-secondary" />
            <span>Viewing dedicated <strong>United Kingdom Photo Book Collection</strong> page.</span>
          </div>
          <Link
            to="/photo-book"
            className="inline-flex items-center gap-1 font-medium text-charcoal hover:underline"
          >
            <span>View India / Global Edition</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>

      {/* 2. Hero */}
      <ProductHero
        title="Photo Book For UK"
        subtitle="Photo Books can be used to treasure precious moments from your child's birth to high school graduation, or exhibiting fine art photography. Bookstore-quality hardcovers with Full Flat openable pages and non-tearable paper."
        categoryTag="UK Bookstore Hardcovers"
        image="/images/products/photo-book-hero.jpg"
        imageAlt="Photo Book For UK Ultraa Albums"
        specsSummary={[
          'Full Flat Openable',
          'Non-Tearable Paper',
          'Glossy, Matte & Feather Touch',
          '5x5 Mini to 12x18 Grand',
        ]}
      />

      {/* 3. Section: Full Flat Openable & Non-Tearable Paper */}
      <section className="py-20 lg:py-28 bg-white border-b border-charcoal/5">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[10px] uppercase tracking-luxury text-secondary font-semibold">
                Core Innovation
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-charcoal leading-tight">
                Our Speciality: Full Flat Openable Books
              </h2>
              <p className="text-xs sm:text-sm text-secondary font-light leading-relaxed">
                Unlike standard commercial books that curl into a deep, dark center gutter, our speciality is Full Flat openable books—no curved pages from the center. You can run wide horizontal bridal landscapes across the entire spread with complete visual continuity.
              </p>
              <p className="text-xs sm:text-sm text-secondary font-light leading-relaxed">
                We print on specialized <strong>Non-Tearable paper</strong> engineered to withstand frequent handling by family, children, and studio clients without tearing, dog-earing, or degrading over the years.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                {paperFinishes.map((item, idx) => (
                  <div key={idx} className="p-4 bg-ivory border border-charcoal/10 rounded-sm space-y-1">
                    <span className="text-[9px] uppercase tracking-wider text-secondary font-semibold">
                      {item.tag}
                    </span>
                    <h4 className="font-serif text-base font-medium text-charcoal">{item.title}</h4>
                    <p className="text-[11px] text-secondary font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="aspect-[4/3] rounded-sm overflow-hidden bg-ivory border border-charcoal/10 shadow-card">
                <img
                  src="/images/uk/photobook-uk.svg"
                  alt="Full Flat Openable Photo Book For UK"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Section: Available Sizes & Formats */}
      <section className="py-20 lg:py-28 bg-ivory border-b border-charcoal/5">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <span className="text-[10px] uppercase tracking-luxury text-secondary font-semibold">
              Versatile Dimensions
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-charcoal leading-tight">
              From 5×5 Mini Pockets to 12×18 Grand Folios
            </h2>
            <p className="text-xs sm:text-sm text-secondary font-light leading-relaxed">
              Customers can buy Photo Books ranging from inexpensive everyday books for mobile snapshots to magnificent coffee-table hardcovers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bookSizes.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 border border-charcoal/10 rounded-sm space-y-3 shadow-soft-sm hover:border-charcoal/20 transition-colors"
              >
                <span className="text-2xl font-serif text-charcoal">{item.size}</span>
                <h3 className="font-serif text-lg font-medium text-charcoal">{item.name}</h3>
                <p className="text-xs text-secondary font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-white border border-charcoal/10 rounded-sm max-w-3xl mx-auto text-center space-y-3">
            <h3 className="font-serif text-xl font-medium text-charcoal">Print Books Option</h3>
            <p className="text-xs sm:text-sm text-secondary font-light leading-relaxed">
              We also give the option of individual print books to our UK customers. Loose prints can be ordered in <strong>4×6, 5×7, or 6×8 sizes</strong> with customized covers, providing an inexpensive, beautiful alternative to traditional albums.
            </p>
          </div>
        </div>
      </section>

      {/* UK International Shipping Assurance */}
      <UkShippingAssurance />

      {/* 7. Technical Specifications */}
      <ProductSpecifications
        specs={product.specs}
        notes="All photo books are constructed with non-tearable synthetic or fine luster core paper. Laminated covers are sealed against water droplets and everyday handling."
      />

      {/* 8. Product CTA */}
      <ProductCTA productName="Photo Book (UK Collection)" />
    </div>
  );
};

