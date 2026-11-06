import { Product } from '../types';

export const productsData: Product[] = [
  {
    id: 'flush-mount-album',
    title: 'Flush Mount Album',
    subtitle: 'Archival silver halide photographic prints mounted on solid rigid substrate with handcrafted panoramic spreads.',
    slug: 'flush-mount-album',
    category: 'albums',
    shortDescription: 'Our flagship hand-bound heirloom album with Fuji Crystal Archive silver halide prints and thick 1.0mm-1.5mm panoramic pages.',
    fullDescription: [
      'Keep your memories alive with our signature Flush Mount Album. Unlike automated machine-made books that rely solely on glue, Ultraa Albums creates every single album individually hand-bound using traditional bookbinding techniques honed over generations.',
      'Our flush mount albums feature Fuji Crystal Archive silver halide photo paper with a delicate luster finish for exceptional image stability, pure clean whites, and true-to-life color reproduction. The prints are mounted onto thick 0.5mm-1.0mm archival core boards, resulting in a finished page thickness of 1.0mm standard (or 1.5mm extra-thick) designed to withstand a lifetime of viewing without bending or warping.',
      'With a seamless panoramic flat spread, your wide wedding ceremonies and landscape spreads flow effortlessly across two full pages without an unsightly center gutter.'
    ],
    highlights: [
      '100% individually hand-bound by master artisans',
      'True Fuji Crystal Archive Silver Halide luster prints',
      'Solid archival board substrate (1.0mm - 1.5mm finished page thickness)',
      'Zero gutter gap — true panoramic 2-page flat opening',
      'Extensive cover customizations: Acrylic, Linen, Leather, Canvas, Metal, Wood, and Foil',
      '100% Quality Guarantee backed by 15+ years of album manufacturing'
    ],
    specs: [
      { label: 'Paper Type', value: 'Fuji Crystal Archive Silver Halide (Luster finish)' },
      { label: 'Page Thickness', value: '1.0 mm Standard (0.5mm print + board) or 1.5 mm Extra Thick' },
      { label: 'Binding Style', value: 'Hand-bound Italian panoramic spread, zero gutter' },
      { label: 'Laminations Available', value: 'UV, Thermal Matte, High Gloss, Velvet, Silk Touch' },
      { label: 'Popular Sizes', value: '8x12, 10x10, 12x12, 12x15, 12x18 inches' },
      { label: 'Cover Styles', value: 'Acrylic Diamond Polished, Genuine Leather, Linen, Canvas, Wood, Photo' },
    ],
    coverOptions: ['acrylic-crystal', 'canvas', 'linen', 'leather', 'photo-wrap', 'metal', 'wooden', 'embossed', 'foil-embossing'],
    pricingNote: 'Competitive artisan pricing with 10% studio sample discount for professional photographers.',
    isUkProduct: false,
    correspondingUkSlug: 'flush-mount-album-for-uk',
    images: {
      hero: '/images/products/flush-mount-album.jpg',
      gallery: [
        '/images/products/flush-mount-album.jpg',
      ],
    },
  },
  {
    id: 'layflat-album',
    title: 'Premium Layflat Albums',
    subtitle: 'Lighter-weight panoramic photo books opening flat for double-page spreads without center bulging.',
    slug: 'layflat',
    category: 'albums',
    shortDescription: 'A lighter, economical counterpart to the Flush Mount album, offering seamless 2-page panoramic viewing with higher page count capacity.',
    fullDescription: [
      'Our Layflat Albums are closely related to our Flush Mount Albums, but crafted with a slimmer, lighter substrate. This allows for significantly higher page capacities while maintaining an accessible price point.',
      'The book opens completely flat on any coffee table or desk without center gutter bulging. Panoramic landscape shots, bridal group portraits, and editorial spreads flow across both pages seamlessly.',
      'Printed with rich, high-density pro-lab colors on durable archival papers, Layflat books are ideal not only for weddings, but also for fashion portfolios, interior designer showcases, baby milestone years, and travel coffee-table books.'
    ],
    highlights: [
      'Seamless 2-page layflat opening without page curvature',
      'Pro-lab color density with true-to-tone reproduction',
      'Accommodates more pages per volume than heavy flush-mount boards',
      'Superior choice for creative portfolios and family heirlooms',
      'Full range of handcrafted cover options identical to flush mount series'
    ],
    specs: [
      { label: 'Paper Weight', value: 'Archival heavy art paper with layflat hinge technology' },
      { label: 'Page Opening', value: '180° complete layflat panoramic spread' },
      { label: 'Capacity', value: 'Up to 120 pages (60 spreads)' },
      { label: 'Finishes', value: 'Luster, Deep Matte, Feather Touch' },
      { label: 'Cover Compatibility', value: 'Full wrap leather, acrylic, linen, canvas, hardcover' },
    ],
    coverOptions: ['acrylic-crystal', 'canvas', 'linen', 'leather', 'photo-wrap', 'metal', 'wooden', 'embossed', 'foil-embossing'],
    isUkProduct: false,
    images: {
      hero: '/images/products/layflat-album.webp',
      gallery: [
        '/images/products/layflat-album.webp',
      ],
    },
  },
  {
    id: 'photo-book',
    title: 'Artisan Photo Books',
    subtitle: 'Bookstore-quality modern hardcovers featuring tear-resistant papers, feather-touch finishes, and bespoke sizes.',
    slug: 'photo-book',
    category: 'books',
    shortDescription: 'Versatile coffee-table style photobooks ranging from compact pocket sizes to expansive 12x18 wedding albums.',
    fullDescription: [
      'Ultraa Albums is recognized as a premier photobook manufacturer in India, catering to both professional wedding studios and everyday memory keepers.',
      'Our modern photo books feature specialized non-tearable paper printed with glossy, matte, or luxury feather-touch laminations. Our specialty is full flat openable books with zero center page curving.',
      'Available across versatile size profiles: compact 5x5 pocket books for office and gifts, classic 6x8 and 9x12 coffee-table formats, up to grand 12x18 wedding presentation editions.'
    ],
    highlights: [
      'Full flat openable structure without curve distortions',
      'Non-tearable high durability substrate options',
      'Finishes available: Feather Touch, Smooth Matte, Vibrant Gloss',
      'Sizes ranging from 5x5 mini books up to 12x18 wedding formats',
      'Custom printed hardcovers with edge-to-edge lamination'
    ],
    specs: [
      { label: 'Paper Varieties', value: 'Non-tearable synthetic, archival luster, silk' },
      { label: 'Sizes Available', value: '5x5, 6x8, 8x12, 9x12, 12x15, 12x18 inches' },
      { label: 'Binding', value: 'Reinforced bookstore hardcover binding' },
      { label: 'Cover Styles', value: 'Hardcover Photo Wrap, Linen, Leatherette, Acrylic' },
    ],
    coverOptions: ['acrylic-crystal', 'canvas', 'linen', 'leather', 'photo-wrap', 'wooden', 'embossed'],
    isUkProduct: false,
    correspondingUkSlug: 'photo-book-for-uk',
    images: {
      hero: '/images/products/photo-book-hero.jpg',
      gallery: [
        '/images/products/photo-book-hero.jpg',
      ],
    },
  },
  {
    id: 'luxury-albums',
    title: 'Luxury Albums & Wooden Casket',
    subtitle: 'The pinnacle of bespoke album craftsmanship, paired with handcrafted leather cases and personalized solid wood caskets.',
    slug: 'luxury-albums',
    category: 'albums',
    shortDescription: 'Our most opulent album ensemble featuring hand-worked leather, flush-mounted silver halide pages, and a personalized presentation casket.',
    fullDescription: [
      'Digital screens can never match the tangible emotion and prestige of a master luxury album. Some milestones occur only once in a lifetime — weddings, golden anniversaries, ancestral milestones — and deserve nothing less than extraordinary heirloom preservation.',
      'Our Luxury Album collection combines handcrafted Italian leather covers with a custom-built solid wooden casket or presentation box. Both the album and the casket can be laser-engraved or foil-embossed with your client’s names in majestic serif typography.',
      'Every spread is printed on rigid flush-mounted archival silver halide boards, creating an enduring statement piece meant to be passed down through generations.'
    ],
    highlights: [
      'Complete luxury heirloom suite: Album + Matching Presentation Casket',
      'Handcrafted genuine leather with customized spine and accent stitching',
      'Solid wood presentation casket with magnetic closures or satin ribbon pulls',
      'Full personalization with laser engraving, gold, silver, or rose gold foil',
      'Flush-mount archival silver halide core boards with velvet or silk lamination'
    ],
    specs: [
      { label: 'Suite Components', value: 'Master Album + Custom Handcrafted Presentation Casket' },
      { label: 'Materials', value: 'Handcrafted leather, solid hardwood, crystal acrylic' },
      { label: 'Spreads', value: 'Archival rigid panoramic boards' },
      { label: 'Personalization', value: 'Laser engraving, raised lettering, metallic foil embossing' },
      { label: 'Included Accessories', value: 'Protective cotton slip bag, care guide' },
    ],
    coverOptions: ['acrylic-crystal', 'canvas', 'linen', 'leather', 'photo-wrap', 'metal', 'wooden', 'embossed', 'foil-embossing'],
    isUkProduct: false,
    correspondingUkSlug: 'luxury-albums-for-uk',
    images: {
      hero: '/images/products/luxury-album.jpg',
      gallery: [
        '/images/products/luxury-album.jpg',
      ],
    },
  },
  {
    id: 'box-and-bags',
    title: 'Boxes, Bags & Presentation Cases',
    subtitle: 'Heirloom display boxes, Buckram cases, and soft leather carry bags engineered for luxury and secure transit.',
    slug: 'box-and-bags',
    category: 'packaging',
    shortDescription: 'Artisan wooden-frame presentation boxes wrapped in leatherette, Pearl/Carbon Buckram display cases, and carry bags.',
    fullDescription: [
      'Presentation elevates craftsmanship. Refined over a decade, our presentation box range has become an indispensable signature companion for professional wedding albums.',
      'Our standard boxes unite a sturdy hardwood structural core wrapped in luxury leatherette, topped with a photo wrap, crystal acrylic accent, or cameo window. For mobility, stylish suitcase-style carry handles and ladies-purse straps are available.',
      'Albums come presented in our standard soft leather bag. Studios can upgrade to Buckram display boxes (in Pearl or Carbon) for 10x10+ sizes, or durable fabric carry cases for 12x12+ sizes.'
    ],
    highlights: [
      'Designer hardwood structure frame wrapped in premium leatherette',
      'Multiple top lid styles: full photo wrap, acrylic strip, cameo window, full leather',
      'Ergonomic carry options: briefcase handle or purse-style shoulder strap',
      'Buckram display boxes available in Pearl or Carbon finishes',
      'Heavy-duty travel carry cases for larger format 12x12+ albums'
    ],
    specs: [
      { label: 'Construction', value: 'Rigid wooden frame with padded leatherette wrapping' },
      { label: 'Top Lid Options', value: 'Full Photo Wrap, Acrylic Strip, Cameo Cutout, Leather Deboss' },
      { label: 'Carry Extras', value: 'Integrated leather handle or durable canvas strap' },
      { label: 'Display Box Finishes', value: 'Pearl Buckram, Carbon Buckram' },
      { label: 'Standard Inclusion', value: 'Soft protective leather storage bag with every album' },
    ],
    isUkProduct: false,
    correspondingUkSlug: 'box-and-bags-for-uk',
    images: {
      hero: '/images/products/boxes-and-bags-hero.jpg',
      gallery: [
        '/images/products/boxes-and-bags-hero.jpg',
      ],
    },
  },
  {
    id: 'slip-in-albums',
    title: 'Slip-In Archival Pocket Albums',
    subtitle: 'Photo-safe polypropylene pocket albums holding 200–500 prints with ultrasonic sealing technology.',
    slug: 'slip-in-albums',
    category: 'packaging',
    shortDescription: 'High-capacity, moisture-proof pocket albums with dimpled polypropylene sleeves for quick, glue-free print preservation.',
    fullDescription: [
      'Preserve boxes of loose family prints and photo lab prints safely without glue, tape, or mounting hardware. Our slip-in albums provide an accessible, photo-safe sanctuary for treasured photographs.',
      'Constructed with dimpled-surface polypropylene (PVC-free, moisture-proof) archival sleeves that prevent prints from sticking to the pockets. Covers range from floral decorative hardcovers to elegant colored leather and full-wrap custom photo covers.',
      'Manufactured using high-precision ultrasonic sealing machines, ensuring long-lasting durability. Available in 200, 300, and up to 500 photo capacities (2-4 photos per page for 4x6 / 10x15cm prints).'
    ],
    highlights: [
      'Photo-safe, dimpled surface polypropylene pockets (moisture proof)',
      'No glue or adhesives required — slide prints in effortlessly',
      'Ultrasonic machine-sealed sleeves for high tensile strength',
      'Capacities ranging from 200 to 500 prints (4x6 / 10x15cm format)',
      'Ideal for photo lab client gifts, studio promotional packages, and travel prints'
    ],
    specs: [
      { label: 'Capacity', value: '200 to 500 photos (4x6 in / 10x15 cm)' },
      { label: 'Pocket Material', value: 'Dimpled moisture-proof polypropylene' },
      { label: 'Page Layout', value: '2 to 4 photos per page with memo margin space' },
      { label: 'Cover Styles', value: 'Rich leatherette, custom photo wrap, decorative print' },
      { label: 'Sealing Technique', value: 'Ultrasonic heat sealing' },
    ],
    isUkProduct: false,
    correspondingUkSlug: 'slip-in-albums-for-uk',
    images: {
      hero: '/images/products/slipin-hero.jpg',
      gallery: [
        '/images/products/slipin-hero.jpg',
      ],
    },
  },

  // UK EDITIONS
  {
    id: 'flush-mount-album-uk',
    title: 'Flush Mount Album (UK)',
    subtitle: 'Hand-bound silver halide wedding albums crafted for professional photographers across the United Kingdom.',
    slug: 'flush-mount-album-for-uk',
    category: 'albums',
    shortDescription: 'Archival silver halide heirloom albums with expedited DHL/FedEx insured delivery to the United Kingdom.',
    fullDescription: [
      'Preserve your couples’ most cherished wedding moments with genuine hand-bound album printing tailored for UK wedding photographers.',
      'Every album is individually constructed by our artisan bookbinders using heavy archival boards and genuine Fuji Crystal Archive silver halide photographic paper. The panoramic 2-page spreads open completely flat with zero gutter cut-through.',
      'Includes duty-handled secure international shipping with robust transit packaging, providing UK studios exceptional quality at compelling value.'
    ],
    highlights: [
      'Direct artisan manufacturing for UK wedding photographers & studios',
      'Fuji Crystal Archive Silver Halide luster prints',
      'Rigid 1.0mm - 1.5mm archival core pages with zero gutter',
      'Fast, tracked international shipping to London, Manchester, Edinburgh, and across the UK',
      '10% Studio Sample program for UK photographers'
    ],
    specs: [
      { label: 'Paper Grade', value: 'Fuji Crystal Archive Silver Halide (Luster finish)' },
      { label: 'Page Substrate', value: '0.5mm - 1.0mm rigid core archival board' },
      { label: 'UK Shipping', value: 'Tracked express courier with customs clearance assistance' },
      { label: 'Cover Selection', value: 'Crystal Acrylic, Italian Leather, Heritage Linen, Canvas, Wood' },
    ],
    coverOptions: ['acrylic-crystal', 'canvas', 'linen', 'leather', 'photo-wrap', 'metal', 'wooden', 'embossed', 'foil-embossing'],
    isUkProduct: true,
    correspondingInSlug: 'flush-mount-album',
    images: {
      hero: '/images/products/flush-mount-album.jpg',
      gallery: ['/images/products/flush-mount-album.jpg'],
    },
  },
  {
    id: 'luxury-albums-uk',
    title: 'Luxury Albums For UK',
    subtitle: 'Artisan leather wedding albums and matching wooden caskets tailored for discerning UK weddings.',
    slug: 'luxury-albums-for-uk',
    category: 'albums',
    shortDescription: 'Bespoke heirloom leather albums with personalized wooden presentation caskets for UK luxury wedding studios.',
    fullDescription: [
      'Touch and permanence remain the soul of luxury wedding memories. Our Luxury Album collection for the United Kingdom pairs handcrafted leather covers with personalized wooden presentation caskets.',
      'Engineered with flush-mount silver halide pages and personalized laser engraving or gleaming foil typography, these bespoke suites are beloved by fine-art wedding photographers throughout Britain.'
    ],
    highlights: [
      'Master album + handcrafted solid wooden casket ensemble',
      'Bespoke personalization in metallic gold, rose gold, or laser engraving',
      'Hand-bound with archival silver halide prints',
      'Express courier delivery across England, Scotland, Wales, and Northern Ireland'
    ],
    specs: [
      { label: 'Ensemble', value: 'Master Flush Album + Matching Solid Hardwood Casket' },
      { label: 'Finishes', value: 'Handcrafted leather, acrylic face, brushed metal, linen' },
      { label: 'Paper', value: 'Archival silver halide with velvet or silk lamination' },
    ],
    coverOptions: ['acrylic-crystal', 'canvas', 'linen', 'leather', 'photo-wrap', 'metal', 'wooden', 'embossed', 'foil-embossing'],
    isUkProduct: true,
    correspondingInSlug: 'luxury-albums',
    images: {
      hero: '/images/products/luxury-album.jpg',
      gallery: ['/images/products/luxury-album.jpg'],
    },
  },
  {
    id: 'photo-book-uk',
    title: 'Photo Book For UK',
    subtitle: 'Modern bookstore-quality flat-openable photobooks delivered across the United Kingdom.',
    slug: 'photo-book-for-uk',
    category: 'books',
    shortDescription: 'Custom hardcovers with non-tearable paper and true flat-open panoramic spreads for UK clients.',
    fullDescription: [
      'Bespoke photobooks engineered with bookstore-grade hardcover craftsmanship and tear-resistant substrates for UK clients and photographers.',
      'Features full flat opening technology without curved gutters, available from compact pocket books to grand 12x18 formats.'
    ],
    highlights: [
      'Full flat openable binding without center curvature',
      'Non-tearable high-definition papers',
      'Full range of sizes from 6x8 to 12x18 inches',
      'Safe worldwide shipping with intact condition guarantee'
    ],
    specs: [
      { label: 'Paper Type', value: 'Non-tearable synthetic or fine luster' },
      { label: 'Sizes', value: '6x8, 8x12, 9x12, 12x18 inches' },
      { label: 'Binding', value: 'Flat open bookstore hardcover' },
    ],
    coverOptions: ['acrylic-crystal', 'canvas', 'linen', 'leather', 'photo-wrap', 'wooden', 'embossed'],
    isUkProduct: true,
    correspondingInSlug: 'photo-book',
    images: {
      hero: '/images/products/photo-book-hero.jpg',
      gallery: ['/images/products/photo-book-hero.jpg'],
    },
  },
  {
    id: 'box-and-bags-uk',
    title: 'Box and Bags For UK',
    subtitle: 'Buckram display boxes, designer wooden frame cases, and soft leather bags for UK wedding photographers.',
    slug: 'box-and-bags-for-uk',
    category: 'packaging',
    shortDescription: 'Presentation boxes and Buckram display cases sized for 10x10 and 12x12 albums with UK courier shipping.',
    fullDescription: [
      'Sophisticated presentation packaging for wedding albums delivered directly to UK studios. Features wooden frame construction, leatherette wrapping, and optional Pearl or Carbon Buckram display boxes.'
    ],
    highlights: [
      'Designer wooden frame with leatherette wrap',
      'Optional briefcase carry handles or shoulder straps',
      'Buckram display boxes in Pearl or Carbon for 10x10+ sizes',
      'Standard soft leather protection bag included with every album'
    ],
    specs: [
      { label: 'Materials', value: 'Hardwood frame, padded leatherette, Buckram cloth' },
      { label: 'Lid Styles', value: 'Photo wrap, acrylic bar, cameo cutout, debossed leather' },
    ],
    isUkProduct: true,
    correspondingInSlug: 'box-and-bags',
    images: {
      hero: '/images/products/boxes-and-bags-hero.jpg',
      gallery: ['/images/products/boxes-and-bags-hero.jpg'],
    },
  },
  {
    id: 'slip-in-albums-uk',
    title: 'Slip In Albums For UK',
    subtitle: 'Inexpensive, photo-safe dimpled polypropylene pocket albums for 200–500 prints.',
    slug: 'slip-in-albums-for-uk',
    category: 'packaging',
    shortDescription: 'Moisture-proof pocket albums with ultrasonic sealing for UK photo studios and print gift packages.',
    fullDescription: [
      'High capacity archival pocket albums holding 200 to 500 loose 4x6 in prints. Photo-safe polypropylene sleeves prevent prints from deteriorating, making them an ideal client gift or studio merchandising option for UK labs and photographers.'
    ],
    highlights: [
      'Photo-safe polypropylene sleeves (moisture proof)',
      'Ultrasonic sealed pockets holding up to 500 loose prints',
      'Customized studio branding available on covers',
      'Economical bulk packaging for UK photo studios'
    ],
    specs: [
      { label: 'Capacity', value: '200 - 500 photos (4x6 in / 10x15 cm)' },
      { label: 'Pockets', value: 'Ultrasonic sealed white PVC/Polypropylene' },
    ],
    isUkProduct: true,
    correspondingInSlug: 'slip-in-albums',
    images: {
      hero: '/images/products/slipin-hero.jpg',
      gallery: ['/images/products/slipin-hero.jpg'],
    },
  },
];

