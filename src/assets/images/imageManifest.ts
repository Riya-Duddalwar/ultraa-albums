/**
 * Ultraa Albums Visual Asset Manifest
 * Complete organized registry of all photographic assets, logos, and materials.
 */

export interface ImageAssetMeta {
  id: string;
  category: string;
  localPath: string;
  publicUrl: string;
  altText: string;
  aspectRatio: string;
  sourceType: 'original-brand' | 'curated-photography' | 'generated-editorial';
}

export const imageManifest: Record<string, ImageAssetMeta> = {
  // BRANDING
  brandLogo: {
    id: 'ultraa-brand-logo',
    category: 'branding',
    localPath: 'src/assets/branding/ultraa-logo.webp',
    publicUrl: '/images/logo.webp',
    altText: 'Ultraa Albums — Artisan Heirlooms Established 2012 Mumbai',
    aspectRatio: 'horizontal',
    sourceType: 'original-brand',
  },

  // HERO & HOMEPAGE
  homepageHero: {
    id: 'homepage-wedding-album-hero',
    category: 'hero',
    localPath: 'src/assets/images/hero/homepage-wedding-album-hero.jpg',
    publicUrl: '/images/hero/homepage-wedding-album-hero.jpg',
    altText: 'Open handcrafted panoramic wedding photo album lying on warm ivory linen',
    aspectRatio: '4:3',
    sourceType: 'generated-editorial',
  },
  homepageCraftsmanship: {
    id: 'artisan-workshop-handbinding',
    category: 'about',
    localPath: 'src/assets/images/about/artisan-workshop-handbinding.jpg',
    publicUrl: '/images/hero/hero-craftsmanship.jpg',
    altText: 'Master bookbinder hand-binding wedding album signatures in Mumbai atelier',
    aspectRatio: '4:3',
    sourceType: 'generated-editorial',
  },

  // PRODUCTS
  flushMountHero: {
    id: 'flush-mount-open-spread',
    category: 'products/flush-mount',
    localPath: 'public/images/products/flush-mount-album.jpg',
    publicUrl: '/images/products/flush-mount-album.jpg',
    altText: 'Open flush mount album with archival board pages and zero gutter spread',
    aspectRatio: '4:3',
    sourceType: 'curated-photography',
  },
  layflatHero: {
    id: 'layflat-album-panorama',
    category: 'products/layflat',
    localPath: 'public/images/products/layflat-album.webp',
    publicUrl: '/images/products/layflat-album.webp',
    altText: '180-degree flat opening layflat wedding photo book with continuous panoramic print',
    aspectRatio: '4:3',
    sourceType: 'curated-photography',
  },
  luxuryAlbumHero: {
    id: 'luxury-leather-album',
    category: 'products/luxury',
    localPath: 'public/images/products/luxury-album.jpg',
    publicUrl: '/images/products/luxury-album.jpg',
    altText: 'Bespoke genuine leather wedding album paired with handcrafted presentation casket',
    aspectRatio: '4:3',
    sourceType: 'curated-photography',
  },
  photoBookHero: {
    id: 'photobook-hardcover-collection',
    category: 'products/photo-books',
    localPath: 'src/assets/images/products/photo-books/photobook-hardcover-collection.jpg',
    publicUrl: '/images/products/photo-book-hero.jpg',
    altText: 'Stack of modern bookstore-quality hardcovers and 5x5 pocket mini photo books',
    aspectRatio: '4:3',
    sourceType: 'generated-editorial',
  },
  boxesAndBagsHero: {
    id: 'presentation-box-buckram',
    category: 'products/boxes-bags',
    localPath: 'src/assets/images/products/boxes-bags/presentation-box-buckram.jpg',
    publicUrl: '/images/products/boxes-and-bags-hero.jpg',
    altText: 'Leatherette wooden briefcase album box with handle beside Pearl Buckram display box',
    aspectRatio: '4:3',
    sourceType: 'generated-editorial',
  },
  slipInHero: {
    id: 'slipin-pocket-album',
    category: 'products/slip-in',
    localPath: 'src/assets/images/products/slip-in/slipin-pocket-album.jpg',
    publicUrl: '/images/products/slipin-hero.jpg',
    altText: 'Archival dimpled polypropylene pocket album holding 4x6 inch family photographs',
    aspectRatio: '4:3',
    sourceType: 'generated-editorial',
  },

  // SERVICES
  albumDesigningHero: {
    id: 'design-workstation',
    category: 'services/album-designing',
    localPath: 'src/assets/images/services/album-designing/design-workstation.jpg',
    publicUrl: '/images/services/design-hero.jpg',
    altText: 'Professional album designer workspace with dual monitors showing custom wedding layout',
    aspectRatio: '4:3',
    sourceType: 'generated-editorial',
  },
  weddingPhotographyHero: {
    id: 'candid-wedding-portrait',
    category: 'services/photography',
    localPath: 'src/assets/images/services/photography/candid-wedding-portrait.jpg',
    publicUrl: '/images/services/wedding-photography-hero.jpg',
    altText: 'Cinematic candid golden hour portrait of bride and groom in blush traditional attire',
    aspectRatio: '4:3',
    sourceType: 'generated-editorial',
  },
  aboutWorkshop: {
    id: 'about-workshop-dahisar',
    category: 'about',
    localPath: 'src/assets/images/about/artisan-workshop-handbinding.jpg',
    publicUrl: '/images/about-us/workshop-dahisar.jpg',
    altText: 'Ultraa Albums Dahisar East Mumbai bookbinding atelier and craft workshop',
    aspectRatio: '4:3',
    sourceType: 'generated-editorial',
  },

  // CURATED AUTHENTIC CLIENT & ATELIER PHOTOGRAPHY
  galleryWeddingRoyal: {
    id: 'gallery-wedding-royal',
    category: 'gallery/weddings',
    localPath: 'picturesss/royal heritage weeding.jpg',
    publicUrl: '/images/gallery/wedding-1.jpg',
    altText: 'Royal Heritage Wedding ceremony and palace couple portrait',
    aspectRatio: '3:2',
    sourceType: 'curated-photography',
  },
  galleryWeddingGoa: {
    id: 'gallery-wedding-goa',
    category: 'gallery/weddings',
    localPath: 'picturesss/goa costal celebration.jpg',
    publicUrl: '/images/gallery/wedding-2.jpg',
    altText: 'Goa Coastal Celebration sunset wedding moments',
    aspectRatio: '3:2',
    sourceType: 'curated-photography',
  },
  galleryBabyMilestone: {
    id: 'gallery-baby-milestone',
    category: 'gallery/baby',
    localPath: 'picturesss/first milestone.jpg',
    publicUrl: '/images/gallery/baby-1.jpg',
    altText: 'First Milestones newborn and family baby album portrait',
    aspectRatio: '3:2',
    sourceType: 'curated-photography',
  },
  galleryGenerationalLegacy: {
    id: 'gallery-generational-legacy',
    category: 'gallery/family',
    localPath: 'picturesss/generational legacy.jpg',
    publicUrl: '/images/gallery/family-1.jpg',
    altText: 'Generational Legacy intergenerational portrait album',
    aspectRatio: '3:2',
    sourceType: 'curated-photography',
  },
  galleryCelebrationFusion: {
    id: 'gallery-celebration-fusion',
    category: 'gallery/celebrations',
    localPath: 'picturesss/celebration.jpg',
    publicUrl: '/images/gallery/celebration-1.jpg',
    altText: 'Bespoke Celebration Gala and dance festivities',
    aspectRatio: '3:2',
    sourceType: 'curated-photography',
  },
  galleryAlpineTravel: {
    id: 'gallery-alpine-travel',
    category: 'gallery/travel',
    localPath: 'picturesss/travel.jpg',
    publicUrl: '/images/gallery/travel-1.jpg',
    altText: 'Alpine Travel & Horizons scenic double-spread layflat photography',
    aspectRatio: '16:9',
    sourceType: 'curated-photography',
  },
  materialArtisanLeather: {
    id: 'material-artisan-leather',
    category: 'materials/leather',
    localPath: 'picturesss/leather.jpg',
    publicUrl: '/images/materials/leather.jpg',
    altText: 'Handcrafted premium leather cover material texture',
    aspectRatio: '1:1',
    sourceType: 'curated-photography',
  },
};

