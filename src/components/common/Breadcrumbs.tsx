import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className = '' }) => {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`py-3 text-[11px] uppercase tracking-luxury text-secondary ${className}`}
    >
      <ol className="flex items-center flex-wrap gap-2">
        <li className="flex items-center">
          <Link
            to="/"
            className="flex items-center hover:text-charcoal transition-colors"
            title="Home"
          >
            <Home className="w-3 h-3 mr-1" />
            <span>Home</span>
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="flex items-center">
              <ChevronRight className="w-3 h-3 mx-1 opacity-40 shrink-0" />
              {isLast || !item.path ? (
                <span className="font-semibold text-charcoal">{item.label}</span>
              ) : (
                <Link
                  to={item.path}
                  className="hover:text-charcoal transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

