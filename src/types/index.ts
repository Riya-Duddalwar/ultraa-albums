export interface ProductSpec {
  label: string;
  value: string;
}

export interface CoverOption {
  id: string;
  name: string;
  description: string;
  features?: string[];
  imagePlaceholder?: string;
}

export interface Product {
  id: string;
  title: string;
  subtitle: string;
  slug: string;
  category: 'albums' | 'books' | 'packaging';
  shortDescription: string;
  fullDescription: string[];
  highlights: string[];
  specs: ProductSpec[];
  coverOptions?: string[];
  pricingNote?: string;
  isUkProduct?: boolean;
  correspondingUkSlug?: string;
  correspondingInSlug?: string;
  images: {
    hero: string;
    gallery: string[];
  };
}

export interface Service {
  id: string;
  title: string;
  subtitle: string;
  slug: string;
  description: string[];
  features: string[];
  themesOrStyles?: string[];
  packagesNote?: string;
  isUkService?: boolean;
  images: {
    hero: string;
    samples: string[];
  };
}

export interface TeamMember {
  name: string;
  role: string;
  bio?: string;
  image?: string;
}

export interface NavigationItem {
  name: string;
  path: string;
  children?: {
    name: string;
    path: string;
    description?: string;
  }[];
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  foundedYear: number;
  location: string;
  address: string;
  phoneNumbers: string[];
  emails: string[];
  worldwideDeliveryCountries: string[];
  paypalUrl: string;
}

