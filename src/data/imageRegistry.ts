export interface ImageAsset {
  id: string;
  category: string;
  name: string;
  filename: string;
  path: string;
  alt: string;
  aspectRatio?: 'square' | 'landscape' | 'portrait';
  description?: string;
}

export const imageCategories = [
  'Hero',
  'Flush Mount',
  'Layflat',
  'Luxury Albums',
  'Photo Books',
  'Slip-In Albums',
  'Boxes and Bags',
  'Cover Materials',
  'Wedding Photography',
  'Image Editing',
  'Album Designing',
  'About Us',
  'Team',
] as const;

export type ImageCategory = typeof imageCategories[number];

export const imageRegistry: Record<string, ImageAsset[]> = {
  hero: [
    {
      id: 'hero-main',
      category: 'Hero',
      name: 'Artisan Wedding Photo Book',
      filename: 'hero-artisan-album.jpg',
      path: '/images/hero/hero-artisan-album.jpg',
      alt: 'Handcrafted luxury wedding photo album on warm ivory marble with rose petals',
      aspectRatio: 'landscape',
    },
    {
      id: 'hero-craftsmanship',
      category: 'Hero',
      name: 'Artisan Bookbinding Craftsmanship',
      filename: 'hero-craftsmanship.jpg',
      path: '/images/hero/hero-craftsmanship.jpg',
      alt: 'Close-up of master artisan hand-binding silver halide photographic prints',
      aspectRatio: 'landscape',
    },
  ],
  flushMount: [
    {
      id: 'flush-mount-open',
      category: 'Flush Mount',
      name: 'Flush Mount Panoramic Spread',
      filename: 'flush-mount-panoramic.jpg',
      path: '/images/flush-mount/flush-mount-panoramic.jpg',
      alt: 'Open panoramic double page spread without center gutter cut-off',
      aspectRatio: 'landscape',
    },
    {
      id: 'flush-mount-edge',
      category: 'Flush Mount',
      name: '1.5mm Archival Board Edge Detail',
      filename: 'flush-mount-edge-thickness.jpg',
      path: '/images/flush-mount/flush-mount-edge-thickness.jpg',
      alt: 'Detail of thick rigid page substrate showing 1.0mm - 1.5mm edge thickness',
      aspectRatio: 'square',
    },
  ],
  layflat: [
    {
      id: 'layflat-spread',
      category: 'Layflat',
      name: 'Layflat Seamless Portfolio Spread',
      filename: 'layflat-seamless-spread.jpg',
      path: '/images/layflat/layflat-seamless-spread.jpg',
      alt: '180 degree flat opening photo book on wooden table',
      aspectRatio: 'landscape',
    },
  ],
  luxuryAlbums: [
    {
      id: 'luxury-casket-suite',
      category: 'Luxury Albums',
      name: 'Master Leather Album & Wooden Casket',
      filename: 'luxury-album-casket-suite.jpg',
      path: '/images/luxury-albums/luxury-album-casket-suite.jpg',
      alt: 'Handcrafted leather wedding album paired with engraved solid wood casket',
      aspectRatio: 'landscape',
    },
  ],
  photoBooks: [
    {
      id: 'photobook-hardcover',
      category: 'Photo Books',
      name: 'Artisan Hardcover Photobooks',
      filename: 'photobook-hardcover-collection.jpg',
      path: '/images/photo-books/photobook-hardcover-collection.jpg',
      alt: 'Stack of bookstore-grade modern hardcovers with custom printed jackets',
      aspectRatio: 'square',
    },
  ],
  slipInAlbums: [
    {
      id: 'slipin-album-display',
      category: 'Slip-In Albums',
      name: 'Archival Polypropylene Pocket Album',
      filename: 'slipin-archival-pockets.jpg',
      path: '/images/slip-in-albums/slipin-archival-pockets.jpg',
      alt: 'Moisture-proof dimpled polypropylene pocket album holding 300 prints',
      aspectRatio: 'square',
    },
  ],
  boxesAndBags: [
    {
      id: 'boxes-display-buckram',
      category: 'Boxes and Bags',
      name: 'Pearl Buckram Display Box & Handle Case',
      filename: 'boxes-buckram-display-case.jpg',
      path: '/images/boxes-and-bags/boxes-buckram-display-case.jpg',
      alt: 'Artisan wooden frame box wrapped in Pearl Buckram with leather carry handle',
      aspectRatio: 'landscape',
    },
  ],
  coverMaterials: [
    {
      id: 'cover-acrylic-crystal',
      category: 'Cover Materials',
      name: 'Acrylic-Crystal Diamond Polished Pad',
      filename: 'cover-acrylic-crystal.jpg',
      path: '/images/cover-materials/cover-acrylic-crystal.jpg',
      alt: 'Crystal clear acrylic face with rounded diamond-polished edges',
      aspectRatio: 'square',
    },
    {
      id: 'cover-canvas-varnish',
      category: 'Cover Materials',
      name: 'Varnished Poly-Cotton Canvas Cover',
      filename: 'cover-canvas.jpg',
      path: '/images/cover-materials/cover-canvas.jpg',
      alt: 'Textured canvas cover with protective varnish sheen',
      aspectRatio: 'square',
    },
    {
      id: 'cover-linen-weave',
      category: 'Cover Materials',
      name: 'Natural Woven Linen Cover',
      filename: 'cover-linen.jpg',
      path: '/images/cover-materials/cover-linen.jpg',
      alt: 'Fine archival textile linen in pastel sage and warm beige',
      aspectRatio: 'square',
    },
    {
      id: 'cover-leather-cameo',
      category: 'Cover Materials',
      name: 'Leather Cover with Cameo Window',
      filename: 'cover-leather-cameo.jpg',
      path: '/images/cover-materials/cover-leather-cameo.jpg',
      alt: 'Full wrap leather album cover with debossed photo cameo',
      aspectRatio: 'square',
    },
    {
      id: 'cover-metallic-foil',
      category: 'Cover Materials',
      name: 'Gold & Rose Gold Foil Stamping',
      filename: 'cover-gold-foil.jpg',
      path: '/images/cover-materials/cover-gold-foil.jpg',
      alt: 'Raised shining gold foil typography on ivory and blush covers',
      aspectRatio: 'square',
    },
  ],
  weddingPhotography: [
    {
      id: 'wedding-photo-candid',
      category: 'Wedding Photography',
      name: 'Signature Candid Wedding Moment',
      filename: 'wedding-candid-ceremony.jpg',
      path: '/images/wedding-photography/wedding-candid-ceremony.jpg',
      alt: 'Artistic candid portrait of wedding couple bathed in natural golden hour light',
      aspectRatio: 'portrait',
    },
  ],
  imageEditing: [
    {
      id: 'image-editing-before-after',
      category: 'Image Editing',
      name: 'Skin & Color Retouching Before / After',
      filename: 'editing-before-after.jpg',
      path: '/images/image-editing/editing-before-after.jpg',
      alt: 'Comparison of raw camera file vs color graded and retouched portrait',
      aspectRatio: 'landscape',
    },
  ],
  albumDesigning: [
    {
      id: 'album-designing-themes',
      category: 'Album Designing',
      name: '6-7 Bespoke Album Design Themes',
      filename: 'album-design-themes.jpg',
      path: '/images/album-designing/album-design-themes.jpg',
      alt: 'Display of modern editorial, Indian fusion, and classic album layout templates',
      aspectRatio: 'landscape',
    },
  ],
  aboutUs: [
    {
      id: 'about-studio-heritage',
      category: 'About Us',
      name: 'Ultraa Albums Studio Workshop Mumbai',
      filename: 'about-studio-mumbai.jpg',
      path: '/images/about-us/about-studio-mumbai.jpg',
      alt: 'Artisan workshop in Dahisar East Mumbai crafting handcrafted albums',
      aspectRatio: 'landscape',
    },
  ],
  team: [
    {
      id: 'team-rajiv',
      category: 'Team',
      name: 'Rajiv Panchal — Founder',
      filename: 'team-rajiv-panchal.jpg',
      path: '/images/team/team-rajiv-panchal.jpg',
      alt: 'Rajiv Panchal, Founder of Ultraa Albums',
      aspectRatio: 'square',
    },
    {
      id: 'team-mayank',
      category: 'Team',
      name: 'Mayank Panchal — Co-Founder',
      filename: 'team-mayank-panchal.jpg',
      path: '/images/team/team-mayank-panchal.jpg',
      alt: 'Mayank Panchal, Co-Founder of Ultraa Albums',
      aspectRatio: 'square',
    },
    {
      id: 'team-bhairavi',
      category: 'Team',
      name: 'Bhairavi Panchal — Head of Design',
      filename: 'team-bhairavi-panchal.jpg',
      path: '/images/team/team-bhairavi-panchal.jpg',
      alt: 'Bhairavi Panchal, Head of Designing Department',
      aspectRatio: 'square',
    },
  ],
};

