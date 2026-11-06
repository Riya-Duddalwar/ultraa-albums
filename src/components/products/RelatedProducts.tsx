import React from 'react';
import { productsData } from '../../data/products';
import { ProductCard } from '../common/ProductCard';
import { SectionHeading } from '../common/SectionHeading';

interface RelatedProductsProps {
  currentProductId: string;
  className?: string;
}

export const RelatedProducts: React.FC<RelatedProductsProps> = ({
  currentProductId,
  className = '',
}) => {
  // Filter out current product and UK products, pick up to 3
  const related = productsData
    .filter((p) => !p.isUkProduct && p.id !== currentProductId)
    .slice(0, 3);

  return (
    <section className={`py-16 sm:py-24 bg-white border-b border-charcoal/5 ${className}`}>
      <div className="section-container">
        <SectionHeading
          tag="Curated Suite"
          title="Related Heirlooms & Accessories"
          subtitle="Pair your primary wedding volume with matching companion parent books, display boxes, or portfolio editions."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {related.map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </div>
      </div>
    </section>
  );
};

