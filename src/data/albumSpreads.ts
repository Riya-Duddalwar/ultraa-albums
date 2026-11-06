export interface AlbumPageContent {
  type: 'cover' | 'full-bleed' | 'single' | 'split-vertical' | 'multi-grid' | 'editorial-text';
  image?: string;
  secondaryImage?: string;
  tertiaryImage?: string;
  tag?: string;
  title?: string;
  subtitle?: string;
  quote?: string;
  caption?: string;
  aspect?: string;
  bgTone?: 'ivory' | 'white' | 'beige' | 'rose' | 'sage' | 'charcoal';
}

export interface AlbumSpread {
  id: string;
  spreadNumber: number;
  leftPageNumber: number;
  rightPageNumber: number;
  title: string;
  location?: string;
  date?: string;
  category: 'wedding' | 'travel' | 'photobook' | 'luxury' | 'design-theme';
  isPanoramicBleed?: boolean;
  panoramicImage?: string;
  panoramicCaption?: string;
  leftPage: AlbumPageContent;
  rightPage: AlbumPageContent;
  themeStyle?: string;
}

export interface DigitalAlbumCollection {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  bindingType: string;
  dimensions: string;
  paperType: string;
  coverMaterial: string;
  totalSpreads: number;
  totalPages: number;
  spreads: AlbumSpread[];
}

/**
 * 1. FLAGSHIP WEDDING HEIRLOOM ALBUM (Homepage & Flush Mount Album)
 * A royal Rajasthani palace wedding, hand-bound on 1.5mm rigid core with Fuji silver halide luster.
 */
export const flagshipWeddingAlbum: DigitalAlbumCollection = {
  id: 'royal-heritage-wedding',
  name: 'Ultraa Handcrafted Heirlooms',
  subtitle: 'Artisan Double-Page Spreads',
  description: 'Handcrafted Flush Mount double-page spreads on 1.5mm archival core boards with seamless panoramic layflat binding.',
  bindingType: 'Archival Flush Mount Hand-Binding',
  dimensions: '12" × 18" (Opens to 12" × 36" Panorama)',
  paperType: 'Fuji Crystal Archive HD Silver Halide Luster',
  coverMaterial: 'Artisan Cognac Italian Leather & Raised Gold Foil',
  totalSpreads: 3,
  totalPages: 6,
  spreads: [
    {
      id: 'spread-1',
      spreadNumber: 1,
      leftPageNumber: 1,
      rightPageNumber: 2,
      title: 'Handcrafted Flush Mount Heirloom',
      category: 'wedding',
      isPanoramicBleed: true,
      panoramicImage: '/images/carousel/carousel-1.jpg',
      panoramicCaption: 'Fuji Crystal Archive Silver Halide · 1.5mm Rigid Archival Core',
      leftPage: {
        type: 'full-bleed',
        image: '/images/carousel/carousel-1.jpg',
        tag: 'CONTINUOUS PANORAMA',
        title: 'Handcrafted Flush Mount Heirloom',
      },
      rightPage: {
        type: 'full-bleed',
        image: '/images/carousel/carousel-1.jpg',
        caption: 'Zero center gutter split allows ceremonial vistas to span seamlessly.',
      },
    },
    {
      id: 'spread-2',
      spreadNumber: 2,
      leftPageNumber: 3,
      rightPageNumber: 4,
      title: 'Opulent Presentation Casket Suite',
      category: 'wedding',
      isPanoramicBleed: true,
      panoramicImage: '/images/carousel/carousel-2.jpg',
      panoramicCaption: 'Handcrafted Italian Leather & Companion Wooden Casket',
      leftPage: {
        type: 'full-bleed',
        image: '/images/carousel/carousel-2.jpg',
        tag: 'LUXURY ENSEMBLE',
        title: 'Opulent Presentation Casket Suite',
      },
      rightPage: {
        type: 'full-bleed',
        image: '/images/carousel/carousel-2.jpg',
        caption: 'Hand-worked Italian leather paired with bespoke hardwood casket.',
      },
    },
    {
      id: 'spread-3',
      spreadNumber: 3,
      leftPageNumber: 5,
      rightPageNumber: 6,
      title: 'Seamless Panoramic 180° Spread',
      category: 'wedding',
      isPanoramicBleed: true,
      panoramicImage: '/images/carousel/carousel-3.jpg',
      panoramicCaption: 'Continuous 180° Flat Opening · Zero Center Gutter Interruption',
      leftPage: {
        type: 'full-bleed',
        image: '/images/carousel/carousel-3.jpg',
        tag: '180° LAYFLAT SPREAD',
        title: 'Continuous Panoramic Spread',
      },
      rightPage: {
        type: 'full-bleed',
        image: '/images/carousel/carousel-3.jpg',
        caption: 'Scored fold lies completely flat across full double-page horizon.',
      },
    },
  ],
};

/**
 * 2. DESTINATION LAYFLAT ALBUM (Layflat Album Page)
 * Panoramic spreads, coastal landscapes, and modern 180° open layouts.
 */
export const layflatTravelAlbum: DigitalAlbumCollection = {
  id: 'layflat-destination',
  name: 'Mediterranean & Coastal Journeys',
  subtitle: 'Destination Wedding & Travel Portfolio',
  description: '180° flat opening albums engineered with lightweight core paper for seamless panoramic spreads.',
  bindingType: '180° Layflat Binding with Zero Gutter',
  dimensions: '11" × 14" Landscape',
  paperType: 'Fuji Crystal Archive Luster with UV Protective Coating',
  coverMaterial: 'Heritage Sage Linen with Blind Debossing',
  totalSpreads: 6,
  totalPages: 12,
  spreads: [
    {
      id: 'layflat-1',
      spreadNumber: 1,
      leftPageNumber: 1,
      rightPageNumber: 2,
      title: 'Linen Cover & Coastal Prelude',
      location: 'Amalfi Coast, Italy',
      category: 'travel',
      leftPage: {
        type: 'cover',
        image: '/images/products/layflat-album-hero.jpg',
        tag: 'HERITAGE LINEN',
        title: 'COASTAL LIGHT',
        subtitle: 'A Mediterranean Odyssey',
        bgTone: 'sage',
      },
      rightPage: {
        type: 'editorial-text',
        image: '/images/gallery/travel-1.jpg',
        tag: 'INTRODUCTORY ESSAY',
        title: 'Where The Blue Meets The Cliffs',
        quote: '"To travel is to discover that everyone is wrong about other countries."',
        caption: '180° Layflat Spread Architecture',
        bgTone: 'ivory',
      },
    },
    {
      id: 'layflat-2',
      spreadNumber: 2,
      leftPageNumber: 3,
      rightPageNumber: 4,
      title: 'Panoramic Ocean Horizon',
      location: 'Capri, Italy',
      category: 'travel',
      isPanoramicBleed: true,
      panoramicImage: '/images/gallery/travel-1.jpg',
      panoramicCaption: 'The Faraglioni Rocks · Continuous 180° layflat opening gives unobstructed panoramic depth.',
      leftPage: {
        type: 'full-bleed',
        image: '/images/gallery/travel-1.jpg',
        tag: 'CONTINUOUS 180° BLEED',
        title: 'The Faraglioni at Midday',
      },
      rightPage: {
        type: 'full-bleed',
        image: '/images/gallery/travel-1.jpg',
        caption: 'Zero spine gutter interruption.',
      },
    },
    {
      id: 'layflat-3',
      spreadNumber: 3,
      leftPageNumber: 5,
      rightPageNumber: 6,
      title: 'Coastal Ceremony & Vows',
      location: 'Positano Overlook',
      category: 'travel',
      leftPage: {
        type: 'single',
        image: '/images/gallery/wedding-2.jpg',
        tag: 'COUPLE PORTRAIT',
        title: 'Cliffside Devotion',
        caption: 'Balmy sea breezes and Mediterranean warmth.',
        bgTone: 'white',
      },
      rightPage: {
        type: 'split-vertical',
        image: '/images/services/photo-prewedding.jpg',
        secondaryImage: '/images/gallery/celebration-1.jpg',
        tag: 'SEASIDE CELEBRATION',
        title: 'Lemon Groves & Laughter',
        caption: 'Sun-drenched terraces and timeless toasts.',
        bgTone: 'sage',
      },
    },
    {
      id: 'layflat-4',
      spreadNumber: 4,
      leftPageNumber: 7,
      rightPageNumber: 8,
      title: 'Architectural Shadows & Textures',
      location: 'Ravello Gardens',
      category: 'travel',
      leftPage: {
        type: 'split-vertical',
        image: '/images/services/photo-portrait.jpg',
        secondaryImage: '/images/about-us/workshop-dahisar.jpg',
        tag: 'VILLA RUFOLO',
        title: 'Gothic Arches',
        caption: 'Light piercing through centuries of Roman stone.',
        bgTone: 'ivory',
      },
      rightPage: {
        type: 'single',
        image: '/images/products/layflat-album.webp',
        tag: 'ATELIER ANGLE',
        title: 'Flat Opening Geometry',
        caption: 'Layflat spine technology allows both halves to rest 180° level on table.',
        bgTone: 'white',
      },
    },
    {
      id: 'layflat-5',
      spreadNumber: 5,
      leftPageNumber: 9,
      rightPageNumber: 10,
      title: 'Twilight Over the Bay',
      location: 'Salerno Gulf',
      category: 'travel',
      isPanoramicBleed: true,
      panoramicImage: '/images/gallery/wedding-1.jpg',
      panoramicCaption: 'The Sunset Glow Across The Marina · Optical pro-lab printing preserves subtle gradient sky transitions.',
      leftPage: {
        type: 'full-bleed',
        image: '/images/gallery/wedding-1.jpg',
        tag: 'SUNSET HORIZON',
        title: 'The Evening Amber Hour',
      },
      rightPage: {
        type: 'full-bleed',
        image: '/images/gallery/wedding-1.jpg',
        caption: 'Fuji Crystal Archive Paper.',
      },
    },
    {
      id: 'layflat-6',
      spreadNumber: 6,
      leftPageNumber: 11,
      rightPageNumber: 12,
      title: 'Colophon & Final Spread',
      location: 'Mumbai Atelier',
      category: 'travel',
      leftPage: {
        type: 'single',
        image: '/images/products/layflat-album.webp',
        tag: 'THE VOYAGE COMPLETE',
        title: 'Printed to Remember',
        caption: 'Preserving every journey in vivid color permanence.',
        bgTone: 'white',
      },
      rightPage: {
        type: 'cover',
        image: '/images/products/layflat-album-hero.jpg',
        tag: 'ULTRAA ALBUMS MUMBAI',
        title: 'THE END',
        subtitle: 'Crafted with passion in India',
        quote: 'Engineered for seamless travel storytellers and fine-art photographers.',
        bgTone: 'sage',
      },
    },
  ],
};

/**
 * 3. ARTISAN PHOTO BOOK (Photo Book Page)
 * Bookstore-style hardcover, modern editorial grids, baby & lifestyle portraits.
 */
export const photoBookModernAlbum: DigitalAlbumCollection = {
  id: 'photobook-contemporary',
  name: 'The Modern Lifestyle Journal',
  subtitle: 'Portraits, Milestones & Family Chapters',
  description: 'Bookstore-quality hardcovers with flexible non-tearable paper choices, ideal for modern portraits, senior books, and milestone keepsakes.',
  bindingType: 'Smyth-Sewn Hardcover Photo Book',
  dimensions: '9" × 12" Portrait & 12" × 18" Exhibition',
  paperType: 'Velvet Feather-Touch Matte & Premium Synthetic Non-Tearable',
  coverMaterial: 'Edge-to-Edge Custom Photo Wrap with Matte Soft-Touch UV',
  totalSpreads: 6,
  totalPages: 12,
  spreads: [
    {
      id: 'pb-1',
      spreadNumber: 1,
      leftPageNumber: 1,
      rightPageNumber: 2,
      title: 'Full Wrap Cover & Prologue',
      category: 'photobook',
      leftPage: {
        type: 'cover',
        image: '/images/products/photo-book-hero.jpg',
        tag: 'CUSTOM PHOTO WRAP',
        title: 'CHAPTERS & KEEP-SAKES',
        subtitle: 'A Modern Family Collection',
        bgTone: 'ivory',
      },
      rightPage: {
        type: 'editorial-text',
        image: '/images/gallery/family-1.jpg',
        tag: 'FAMILY PROLOGUE',
        title: 'Life in the In-Between',
        quote: '"The days are long, but the years are short."',
        caption: 'Feather-Touch Matte Lamination',
        bgTone: 'white',
      },
    },
    {
      id: 'pb-2',
      spreadNumber: 2,
      leftPageNumber: 3,
      rightPageNumber: 4,
      title: 'Newborn Milestone & First Whispers',
      category: 'photobook',
      leftPage: {
        type: 'single',
        image: '/images/gallery/baby-1.jpg',
        tag: 'FIRST MILESTONE',
        title: 'Sweetest Slumber',
        caption: 'Ten tiny toes, delicate whispers, and unconditional warmth.',
        bgTone: 'rose',
      },
      rightPage: {
        type: 'split-vertical',
        image: '/images/gallery/family-1.jpg',
        secondaryImage: '/images/services/photo-portrait.jpg',
        tag: 'NURTURING HANDS',
        title: 'Held in Love',
        caption: 'Moments that soften every corner of the heart.',
        bgTone: 'white',
      },
    },
    {
      id: 'pb-3',
      spreadNumber: 3,
      leftPageNumber: 5,
      rightPageNumber: 6,
      title: 'Contemporary Editorial Portraiture',
      category: 'photobook',
      isPanoramicBleed: true,
      panoramicImage: '/images/services/photo-portrait.jpg',
      panoramicCaption: 'High-Key Editorial Portrait · Crisp typography margins paired with tactile matte coating.',
      leftPage: {
        type: 'full-bleed',
        image: '/images/services/photo-portrait.jpg',
        tag: 'MODERN EDITORIAL SPREAD',
        title: 'The Gaze',
      },
      rightPage: {
        type: 'full-bleed',
        image: '/images/services/photo-portrait.jpg',
        caption: 'Printed on non-tearable synthetic paper.',
      },
    },
    {
      id: 'pb-4',
      spreadNumber: 4,
      leftPageNumber: 7,
      rightPageNumber: 8,
      title: 'Playful Candid Triptych',
      category: 'photobook',
      leftPage: {
        type: 'split-vertical',
        image: '/images/gallery/celebration-1.jpg',
        secondaryImage: '/images/gallery/baby-1.jpg',
        tag: 'JOYFUL ENERGY',
        title: 'Unscripted Laughter',
        caption: 'Natural micro-expressions captured in rapid sequence.',
        bgTone: 'white',
      },
      rightPage: {
        type: 'single',
        image: '/images/services/photo-prewedding.jpg',
        tag: 'SUNLIT AFTERNOON',
        title: 'In Good Company',
        caption: 'Casual warmth in natural ambient lighting.',
        bgTone: 'beige',
      },
    },
    {
      id: 'pb-5',
      spreadNumber: 5,
      leftPageNumber: 9,
      rightPageNumber: 10,
      title: 'Minimalist Fine Art Grid',
      category: 'photobook',
      leftPage: {
        type: 'single',
        image: '/images/gallery/wedding-2.jpg',
        tag: 'MINIMAL COMPOSITION',
        title: 'Air & Quietude',
        caption: 'Generous negative margins emphasizing emotional posture.',
        bgTone: 'white',
      },
      rightPage: {
        type: 'editorial-text',
        image: '/images/products/photo-book-hero.jpg',
        tag: 'THE MODERN BOOKSTORE FINISH',
        title: 'Made for Modern Shelves',
        quote: '"A house without books is like a room without windows."',
        caption: 'Lightweight, archival, accessible.',
        bgTone: 'ivory',
      },
    },
    {
      id: 'pb-6',
      spreadNumber: 6,
      leftPageNumber: 11,
      rightPageNumber: 12,
      title: 'Colophon & Back Cover',
      category: 'photobook',
      leftPage: {
        type: 'single',
        image: '/images/gallery/family-1.jpg',
        tag: 'MEMORIES PRESERVED',
        title: 'To Be Continued',
        caption: 'Because every passing year writes another chapter.',
        bgTone: 'white',
      },
      rightPage: {
        type: 'cover',
        image: '/images/products/photo-book-hero.jpg',
        tag: 'ULTRAA ALBUMS',
        title: 'THE END',
        subtitle: 'Artisan Photo Books Since 2012',
        caption: 'Mumbai · Export Quality Delivery',
        bgTone: 'ivory',
      },
    },
  ],
};

/**
 * 4. LUXURY PRESENTATION SUITE (Luxury Albums Page)
 * Deep charcoal, Italian leather, solid teak casket pairing, and opulent wedding imagery.
 */
export const luxuryHeritageAlbum: DigitalAlbumCollection = {
  id: 'luxury-casket-suite',
  name: 'The Royal Casket Presentation Suite',
  subtitle: 'Opulent Handcrafted Ensemble',
  description: 'Supple Italian leather paired with solid hardwood caskets, brass hardware, and personalized cameo inserts.',
  bindingType: 'Luxury Flush Mount in Solid Wooden Casket',
  dimensions: '14" × 20" Imperial Size',
  paperType: 'Fuji Crystal Archive Metallic & Pearl Luster',
  coverMaterial: 'Hand-Antiqued Tuscan Full-Grain Leather & Rosewood Box',
  totalSpreads: 6,
  totalPages: 12,
  spreads: [
    {
      id: 'lux-1',
      spreadNumber: 1,
      leftPageNumber: 1,
      rightPageNumber: 2,
      title: 'The Wooden Casket Unveiling',
      category: 'luxury',
      leftPage: {
        type: 'cover',
        image: '/images/products/luxury-album.jpg',
        tag: 'THE PRESENTATION CASKET',
        title: 'IMPERIAL ENSEMBLE',
        subtitle: 'Hand-carved solid hardwood with recessed leather album',
        bgTone: 'charcoal',
      },
      rightPage: {
        type: 'editorial-text',
        image: '/images/products/luxury-album-hero.jpg',
        tag: 'ROYAL HEIRLOOM INAUGURATION',
        title: 'The Highest Expression',
        quote: '"True luxury is not merely seen. It is felt in the weight of the wood, the aroma of tanned leather, and the unyielding permanence of hand-bound pages."',
        caption: 'Numbered Artisan Edition · Mumbai Workshop',
        bgTone: 'charcoal',
      },
    },
    {
      id: 'lux-2',
      spreadNumber: 2,
      leftPageNumber: 3,
      rightPageNumber: 4,
      title: 'Opulent Palatial Architecture',
      category: 'luxury',
      isPanoramicBleed: true,
      panoramicImage: '/images/gallery/wedding-1.jpg',
      panoramicCaption: 'The Grand Pavilion at Twilight · Flush mount pages remain perfectly flat without spine arc.',
      leftPage: {
        type: 'full-bleed',
        image: '/images/gallery/wedding-1.jpg',
        tag: 'PALATIAL SPLENDOR',
        title: 'The Grand Assembly',
      },
      rightPage: {
        type: 'full-bleed',
        image: '/images/gallery/wedding-1.jpg',
        caption: 'Fuji Crystal Archive Pearl Paper with raised metallic depth.',
      },
    },
    {
      id: 'lux-3',
      spreadNumber: 3,
      leftPageNumber: 5,
      rightPageNumber: 6,
      title: 'Artisan Leather Craft & Gold Foil Detailing',
      category: 'luxury',
      leftPage: {
        type: 'single',
        image: '/images/craft/leather-cover.jpg',
        tag: 'ITALIAN HIDES',
        title: 'Hand-Burnished Patina',
        caption: 'Individually conditioned leathers developing richer depth with age.',
        bgTone: 'charcoal',
      },
      rightPage: {
        type: 'split-vertical',
        image: '/images/about-us/workshop-dahisar.jpg',
        secondaryImage: '/images/services/photo-traditional.jpg',
        tag: 'BESPOKE EMBOSSING',
        title: 'Personalized Monogram',
        caption: 'Solid brass dies pressed with hydraulic heat foil.',
        bgTone: 'charcoal',
      },
    },
    {
      id: 'lux-4',
      spreadNumber: 4,
      leftPageNumber: 7,
      rightPageNumber: 8,
      title: 'Ceremonial Majesty & High Jewelry',
      category: 'luxury',
      leftPage: {
        type: 'single',
        image: '/images/services/photo-traditional.jpg',
        tag: 'REGAL ATTIRE',
        title: 'The Bride of Udaipur',
        caption: 'Handcrafted kundan stones and raw silk motifs in pin-sharp focus.',
        bgTone: 'charcoal',
      },
      rightPage: {
        type: 'single',
        image: '/images/services/photo-prewedding.jpg',
        tag: 'ROYAL CORRIDORS',
        title: 'A Stroll in the Zenana',
        caption: 'Golden evening light reflected off carved limestone jali screens.',
        bgTone: 'charcoal',
      },
    },
    {
      id: 'lux-5',
      spreadNumber: 5,
      leftPageNumber: 9,
      rightPageNumber: 10,
      title: 'Evening Celebration Under Crystal Chandeliers',
      category: 'luxury',
      isPanoramicBleed: true,
      panoramicImage: '/images/gallery/celebration-1.jpg',
      panoramicCaption: 'The Royal Banquet · Continuous tone pro-lab printing ensures deep black richness and vibrant highlights.',
      leftPage: {
        type: 'full-bleed',
        image: '/images/gallery/celebration-1.jpg',
        tag: 'THE IMPERIAL BANQUET',
        title: 'Crystal & Amber',
      },
      rightPage: {
        type: 'full-bleed',
        image: '/images/gallery/celebration-1.jpg',
        caption: 'Zero color fading guaranteed for 100+ years.',
      },
    },
    {
      id: 'lux-6',
      spreadNumber: 6,
      leftPageNumber: 11,
      rightPageNumber: 12,
      title: 'The Final Seal & Hardwood Casket Close',
      category: 'luxury',
      leftPage: {
        type: 'single',
        image: '/images/products/luxury-album.jpg',
        tag: 'ETERNAL REPOSITORY',
        title: 'Enclosed for Centuries',
        caption: 'Velvet-lined compartment guarding your heirlooms from humidity and dust.',
        bgTone: 'charcoal',
      },
      rightPage: {
        type: 'cover',
        image: '/images/craft/leather-cover.jpg',
        tag: 'ULTRAA LUXURY ATELIER',
        title: 'ULTRAA ALBUMS',
        subtitle: 'The Pinnacle of Hand-Bound Photography',
        quote: 'Commissioned by fine art studios and collectors worldwide.',
        bgTone: 'charcoal',
      },
    },
  ],
};

/**
 * 5. ALBUM DESIGNING THEMES (Album Designing Service Page)
 * Interactive theme preview allowing visitors to toggle between Clean, Classic, Indian Fusion, and Western.
 */
export const designThemesAlbum: DigitalAlbumCollection = {
  id: 'album-design-themes',
  name: 'Bespoke Album Designing Studio',
  subtitle: 'Hand-Curated Themes with Unlimited Revisions',
  description: 'Our human album designers carefully arrange each photo without generic automated templates. Preview how different themes transform wedding memories.',
  bindingType: 'Custom Multi-Theme Design Suite',
  dimensions: '12" × 18" Double-Spread',
  paperType: 'Fuji Crystal Archive HD Luster',
  coverMaterial: 'Theme Matched Acrylic, Silk or Leatherette',
  totalSpreads: 5,
  totalPages: 10,
  spreads: [
    {
      id: 'theme-1',
      spreadNumber: 1,
      leftPageNumber: 1,
      rightPageNumber: 2,
      title: 'Theme 01: Indian Classic & Royal Heritage',
      themeStyle: 'Indian Classic',
      category: 'design-theme',
      leftPage: {
        type: 'single',
        image: '/images/services/photo-traditional.jpg',
        tag: 'THEME: INDIAN CLASSIC',
        title: 'Regal Ornamentation',
        caption: 'Traditional borders, royal mandala accents, and opulent gold highlights.',
        bgTone: 'beige',
      },
      rightPage: {
        type: 'split-vertical',
        image: '/images/gallery/wedding-1.jpg',
        secondaryImage: '/images/services/photo-portrait.jpg',
        tag: 'CEREMONIAL SEQUENCE',
        title: 'The Sacred Muhurat',
        caption: 'Honoring customary rituals with balanced, celebratory framing.',
        bgTone: 'ivory',
      },
    },
    {
      id: 'theme-2',
      spreadNumber: 2,
      leftPageNumber: 3,
      rightPageNumber: 4,
      title: 'Theme 02: Clean Minimal & Negative Space',
      themeStyle: 'Clean Minimal',
      category: 'design-theme',
      leftPage: {
        type: 'single',
        image: '/images/services/photo-prewedding.jpg',
        tag: 'THEME: CLEAN MINIMAL',
        title: 'Uncluttered Elegance',
        caption: 'Zero decorative graphics. Large generous white margins letting the photography breathe.',
        bgTone: 'white',
      },
      rightPage: {
        type: 'editorial-text',
        image: '/images/gallery/wedding-2.jpg',
        tag: 'MODERN EDITORIAL',
        title: 'Less is More',
        quote: '"Simplicity is the ultimate sophistication."',
        caption: 'Single hero photograph paired with subtle sans-serif typesetting.',
        bgTone: 'white',
      },
    },
    {
      id: 'theme-3',
      spreadNumber: 3,
      leftPageNumber: 5,
      rightPageNumber: 6,
      title: 'Theme 03: Indian Fusion & Vibrant Storytelling',
      themeStyle: 'Indian Fusion',
      category: 'design-theme',
      leftPage: {
        type: 'split-vertical',
        image: '/images/gallery/celebration-1.jpg',
        secondaryImage: '/images/gallery/wedding-2.jpg',
        tag: 'THEME: INDIAN FUSION',
        title: 'Contemporary Sangeet',
        caption: 'Vibrant overlapping candid frames paired with modern typography balance.',
        bgTone: 'rose',
      },
      rightPage: {
        type: 'single',
        image: '/images/hero/homepage-wedding-album-hero.jpg',
        tag: 'ENERGY & HARMONY',
        title: 'Celebration of Two Families',
        caption: 'Dynamic pacing that carries the rhythm of Indian celebrations.',
        bgTone: 'ivory',
      },
    },
    {
      id: 'theme-4',
      spreadNumber: 4,
      leftPageNumber: 7,
      rightPageNumber: 8,
      title: 'Theme 04: Western Editorial & Fine Art Magazine',
      themeStyle: 'Western Editorial',
      category: 'design-theme',
      isPanoramicBleed: true,
      panoramicImage: '/images/gallery/travel-1.jpg',
      panoramicCaption: 'Theme: Western Editorial · Asymmetric architectural landscape spread with editorial font styling.',
      leftPage: {
        type: 'full-bleed',
        image: '/images/gallery/travel-1.jpg',
        tag: 'THEME: WESTERN EDITORIAL',
        title: 'Candid Cinema',
      },
      rightPage: {
        type: 'full-bleed',
        image: '/images/gallery/travel-1.jpg',
        caption: 'Inspired by international fashion monographs & art books.',
      },
    },
    {
      id: 'theme-5',
      spreadNumber: 5,
      leftPageNumber: 9,
      rightPageNumber: 10,
      title: 'Theme 05: Baby & Milestone Keepsake',
      themeStyle: 'Baby Album Design',
      category: 'design-theme',
      leftPage: {
        type: 'single',
        image: '/images/gallery/baby-1.jpg',
        tag: 'THEME: BABY KEEPSAKE',
        title: 'Tender Milestones',
        caption: 'Soft pastel backgrounds, delicate milestone dates, and sweet candid moments.',
        bgTone: 'rose',
      },
      rightPage: {
        type: 'split-vertical',
        image: '/images/gallery/family-1.jpg',
        secondaryImage: '/images/services/photo-portrait.jpg',
        tag: 'GENERATION STORY',
        title: 'The First Year',
        caption: 'Preserving precious family beginnings with timeless gentleness.',
        bgTone: 'ivory',
      },
    },
  ],
};

