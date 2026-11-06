import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Product } from '../../types';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, className = '' }) => {
  return (
    <div
      className={`group editorial-card flex flex-col justify-between overflow-hidden bg-white ${className}`}
    >
      <div>
        {/* Large Product Image Container */}
        <Link
          to={`/${product.slug}`}
          className="block relative aspect-[4/3] overflow-hidden bg-ivory"
        >
          <img
            src={product.images.hero}
            alt={product.title}
            className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/5 transition-colors duration-300" />
          
          <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm border border-charcoal/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-soft-sm">
            <ArrowUpRight className="w-4 h-4 text-charcoal" />
          </div>
        </Link>

        {/* Card Content */}
        <div className="p-6 sm:p-7">
          <div className="flex items-center justify-between text-[10px] uppercase tracking-luxury text-secondary font-medium mb-2">
            <span>{product.category}</span>
            <span className="text-dusty-rose font-bold">·</span>
            <span>Artisan Made</span>
          </div>

          <h3 className="font-serif text-xl sm:text-2xl font-medium text-charcoal group-hover:text-black transition-colors mb-2">
            <Link to={`/${product.slug}`}>
              {product.title}
            </Link>
          </h3>

          <p className="text-xs text-secondary leading-relaxed line-clamp-2 mb-4 font-light">
            {product.shortDescription}
          </p>
        </div>
      </div>

      {/* Card Footer */}
      <div className="px-6 sm:px-7 pb-6 pt-2 border-t border-charcoal/5 flex items-center justify-between">
        <Link
          to={`/${product.slug}`}
          className="text-[11px] uppercase tracking-luxury font-medium text-charcoal group-hover:text-black flex items-center gap-1.5 transition-colors"
        >
          <span>Explore Specifications</span>
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </div>
  );
};

