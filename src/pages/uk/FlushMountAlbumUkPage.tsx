import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ProductHero } from '../../components/products/ProductHero';
import { ProductSpecifications } from '../../components/products/ProductSpecifications';
import { ProductCTA } from '../../components/products/ProductCTA';
import { UkShippingAssurance } from '../../components/uk/UkShippingAssurance';
import { productsData } from '../../data/products';
import { Globe, ArrowRight } from 'lucide-react';

export const FlushMountAlbumUkPage: React.FC = () => {
  const product = productsData.find((p) => p.slug === 'flush-mount-album-for-uk')!;

  useEffect(() => {
    document.title = 'Flush Mount Album For UK | Hand-Bound Wedding Album Printing UK | Ultraa Albums';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Discover true wedding album printing for the UK. Handcrafted flush mount albums with Fuji Crystal Archive silver halide prints, rigid 1.0mm-1.5mm archival core boards, and panoramic spreads.'
      );
    }
  }, []);

  return (
    <div className="bg-ivory text-charcoal">
      {/* 1. Region Switcher Banner */}
      <div className="bg-white border-b border-charcoal/5 py-3">
        <div className="section-container flex items-center justify-between text-xs text-secondary">
          <div className="flex items-center gap-2">
            <Globe className="w-3.5 h-3.5 text-secondary" />
            <span>Viewing dedicated <strong>United Kingdom Collection</strong> page.</span>
          </div>
          <Link
            to="/flush-mount-album"
            className="inline-flex items-center gap-1 font-medium text-charcoal hover:underline"
          >
            <span>View India / Global Edition</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>

      {/* 2. Hero */}
      <ProductHero
        title="Flush Mount Album For UK"
        subtitle="What better way to preserve your precious memories from past moments than with true wedding album printing for the UK. Handcrafted silver halide prints on rigid 1.0mm–1.5mm archival boards with panoramic spreads."
        categoryTag="UK Heirloom Wedding Collection"
        image="/images/products/flush-mount-album.jpg"
        imageAlt="Ultraa Albums Flush Mount Album For UK"
        specsSummary={[
          'UK Tracked Delivery',
          'Fuji Crystal Archive Luster',
          '1.0mm - 1.5mm Rigid Board',
          'Zero Gutter Spread',
        ]}
      />

      {/* International Logistics Assurance */}
      <UkShippingAssurance />

      {/* 6. Technical Specifications */}
      <ProductSpecifications
        specs={product.specs}
        notes="Export-grade international packaging guarantees your handcrafted flush mount albums arrive in the United Kingdom in perfect, intact condition."
      />

      {/* 7. Product CTA */}
      <ProductCTA productName="Flush Mount Album (UK Collection)" />
    </div>
  );
};

