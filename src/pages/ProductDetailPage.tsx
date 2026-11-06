import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { productsData } from '../data/products';
import { PageHeader } from '../components/common/PageHeader';
import { SpecsTable } from '../components/common/SpecsTable';
import { CoverMaterialsSection } from '../components/common/CoverMaterialsSection';
import { Check, ArrowRight, Globe } from 'lucide-react';

interface ProductDetailPageProps {
  explicitSlug?: string;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ explicitSlug }) => {
  const { slug: routeSlug } = useParams<{ slug: string }>();
  const activeSlug = explicitSlug || routeSlug;

  const product = productsData.find((p) => p.slug === activeSlug);

  if (!product) {
    return <Navigate to="/flush-mount-album" replace />;
  }

  const showCoverMaterials = product.coverOptions && product.coverOptions.length > 0;

  return (
    <div>
      <PageHeader
        category={product.isUkProduct ? 'UK Collection · Handcrafted Heirlooms' : 'Artisan Product Collection'}
        title={product.title}
        subtitle={product.subtitle}
      />

      {/* Cross-region indicator banner if UK/IN counterpart exists */}
      {(product.correspondingUkSlug || product.correspondingInSlug) && (
        <div className="bg-white border-b border-charcoal/5 py-3">
          <div className="section-container flex items-center justify-between text-xs text-secondary">
            <div className="flex items-center gap-2">
              <Globe className="w-3.5 h-3.5 text-secondary" />
              <span>
                {product.isUkProduct
                  ? 'Viewing United Kingdom Edition with UK delivery specs.'
                  : 'Delivering worldwide including the United Kingdom.'}
              </span>
            </div>
            <Link
              to={`/${product.isUkProduct ? product.correspondingInSlug : product.correspondingUkSlug}`}
              className="inline-flex items-center gap-1 font-medium text-charcoal hover:underline"
            >
              <span>{product.isUkProduct ? 'View India / Global Edition' : 'View Dedicated UK Edition'}</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      )}

      {/* Main Product Story Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="section-container max-w-4xl">
          <div className="space-y-6 text-sm sm:text-base text-secondary leading-relaxed font-light">
            {product.fullDescription.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Highlights checklist */}
          <div className="mt-12 p-8 bg-ivory border border-charcoal/10 rounded-sm">
            <h3 className="font-serif text-2xl font-medium text-charcoal mb-4">
              Key Artisan Highlights
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {product.highlights.map((h, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-charcoal/90">
                  <Check className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                  <span className="leading-snug">{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Specs Section */}
      <section className="py-16 bg-ivory border-t border-charcoal/5">
        <div className="section-container max-w-3xl">
          <SpecsTable specs={product.specs} title={`${product.title} Specifications`} />
        </div>
      </section>

      {/* Cover Materials (if applicable) */}
      {showCoverMaterials && <CoverMaterialsSection />}

      {/* CTA */}
      <section className="py-20 bg-white border-t border-charcoal/5">
        <div className="section-container text-center max-w-3xl mx-auto space-y-6">
          <h2 className="font-serif text-3xl sm:text-5xl font-medium text-charcoal leading-tight">
            Order or Inquire for {product.title}
          </h2>
          <p className="text-xs sm:text-sm text-secondary font-light max-w-xl mx-auto leading-relaxed">
            Connect directly with our artisan workshop to discuss your dimensions, cover materials, and custom foil embossing.
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

