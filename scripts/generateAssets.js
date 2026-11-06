import fs from 'node:fs';
import path from 'node:path';

function createSvg({ title, subtitle, tag, color1, color2, iconType = 'book' }) {
  let iconSvg = '';
  if (iconType === 'book') {
    iconSvg = `<rect x="300" y="220" width="360" height="260" rx="6" fill="#FFFFFF" stroke="#353535" stroke-width="2" opacity="0.9"/>
    <line x1="480" y1="220" x2="480" y2="480" stroke="#EAD5D2" stroke-width="3"/>
    <rect x="320" y="240" width="140" height="220" fill="${color2}" opacity="0.3" rx="2"/>
    <rect x="500" y="240" width="140" height="220" fill="${color2}" opacity="0.3" rx="2"/>
    <line x1="335" y1="360" x2="445" y2="360" stroke="#77716C" stroke-width="1.5" stroke-dasharray="4 4"/>
    <line x1="515" y1="360" x2="625" y2="360" stroke="#77716C" stroke-width="1.5" stroke-dasharray="4 4"/>`;
  } else if (iconType === 'craft') {
    iconSvg = `<circle cx="480" cy="350" r="140" fill="${color2}" opacity="0.25" stroke="#353535" stroke-width="1.5"/>
    <path d="M420 330 L480 390 L540 310" fill="none" stroke="#353535" stroke-width="3" stroke-linecap="round"/>
    <rect x="400" y="270" width="160" height="160" rx="8" fill="none" stroke="#77716C" stroke-width="1.5" stroke-dasharray="6 6"/>`;
  } else if (iconType === 'material') {
    iconSvg = `<rect x="340" y="240" width="280" height="220" rx="12" fill="${color2}" stroke="#353535" stroke-width="2" opacity="0.85"/>
    <rect x="360" y="260" width="240" height="180" rx="6" fill="#FFFFFF" opacity="0.7"/>
    <circle cx="480" cy="350" r="45" fill="${color1}" opacity="0.5"/>
    <text x="480" y="356" font-family="'Playfair Display', serif" font-size="14" fill="#353535" text-anchor="middle" letter-spacing="2">SWATCH</text>`;
  } else if (iconType === 'photo') {
    iconSvg = `<rect x="280" y="200" width="400" height="280" rx="8" fill="#FFFFFF" stroke="#353535" stroke-width="2"/>
    <rect x="300" y="220" width="360" height="240" fill="${color2}" opacity="0.35" rx="4"/>
    <circle cx="480" cy="320" r="40" fill="${color1}" opacity="0.6"/>
    <path d="M310 440 Q 420 360, 480 400 T 650 430" fill="none" stroke="#77716C" stroke-width="2"/>`;
  }

  return `<svg width="960" height="680" viewBox="0 0 960 680" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${color1}" />
      <stop offset="50%" stop-color="#F8F5F0" />
      <stop offset="100%" stop-color="${color2}" />
    </linearGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#353535" stroke-width="0.5" stroke-opacity="0.04"/>
    </pattern>
  </defs>

  <rect width="960" height="680" fill="url(#grad)"/>
  <rect width="960" height="680" fill="url(#grid)"/>

  <rect x="36" y="36" width="888" height="608" rx="4" fill="none" stroke="#353535" stroke-opacity="0.12" stroke-width="1"/>
  <rect x="44" y="44" width="872" height="592" rx="2" fill="none" stroke="#353535" stroke-opacity="0.06" stroke-width="1"/>

  ${iconSvg}

  <!-- Header text -->
  <text x="480" y="120" font-family="'Inter', sans-serif" font-size="11" font-weight="600" fill="#77716C" text-anchor="middle" letter-spacing="4" text-transform="uppercase">${tag}</text>
  <text x="480" y="160" font-family="'Playfair Display', Georgia, serif" font-size="32" font-weight="500" fill="#353535" text-anchor="middle">${title}</text>

  <!-- Footer text -->
  <text x="480" y="550" font-family="'Inter', sans-serif" font-size="13" font-weight="400" fill="#77716C" text-anchor="middle" letter-spacing="1">${subtitle}</text>
  <text x="480" y="580" font-family="'Inter', sans-serif" font-size="10" font-weight="500" fill="#353535" text-anchor="middle" letter-spacing="3" opacity="0.6">ULTRAA ALBUMS · HANDCRAFTED IN MUMBAI</text>
</svg>`;
}

const assets = [
  // Hero
  { file: 'public/images/hero/hero-artisan-album.svg', title: 'Artisan Wedding Photo Album', subtitle: 'Handcrafted Heirlooms with Fuji Silver Halide Prints', tag: 'SIGNATURE COLLECTION', color1: '#EAD5D2', color2: '#F0E5D8', iconType: 'book' },
  { file: 'public/images/hero/hero-craftsmanship.svg', title: 'Hand-Bound Bookbinding', subtitle: 'Traditional Italian Binding Techniques Since 2012', tag: 'MUMBAI WORKSHOP', color1: '#DCE5D8', color2: '#F8F5F0', iconType: 'craft' },

  // Products
  { file: 'public/images/products/flush-mount.svg', title: 'Flush Mount Album', subtitle: 'Rigid 1.0mm-1.5mm Archival Substrate · Panoramic Spreads', tag: 'FLAGSHIP HEIRLOOM', color1: '#EAD5D2', color2: '#FFFFFF', iconType: 'book' },
  { file: 'public/images/products/layflat.svg', title: 'Premium Layflat Album', subtitle: '180° Seamless Double-Page Spreads · Zero Center Gutter', tag: 'PANORAMIC PORTFOLIO', color1: '#DCE5D8', color2: '#FFFFFF', iconType: 'book' },
  { file: 'public/images/products/luxury.svg', title: 'Luxury Album & Casket', subtitle: 'Hand-Worked Leather Paired with Solid Hardwood Casket', tag: 'FINE ART BESPOKE', color1: '#F0E5D8', color2: '#EAD5D2', iconType: 'book' },
  { file: 'public/images/products/photobook.svg', title: 'Artisan Photo Books', subtitle: 'Bookstore-Quality Hardcovers · Non-Tearable Substrates', tag: 'MODERN CLASSIC', color1: '#DCE6EF', color2: '#FFFFFF', iconType: 'book' },
  { file: 'public/images/products/slipin.svg', title: 'Slip-In Pocket Albums', subtitle: 'Photo-Safe Polypropylene Sleeves Up to 500 Photos', tag: 'ARCHIVAL STORAGE', color1: '#E7E0EF', color2: '#FFFFFF', iconType: 'book' },
  { file: 'public/images/products/boxes.svg', title: 'Boxes & Buckram Cases', subtitle: 'Artisan Wooden Display Cases, Pearl Buckram & Carry Handles', tag: 'PRESENTATION PACKAGING', color1: '#F0E5D8', color2: '#DCE5D8', iconType: 'book' },

  // Materials
  { file: 'public/images/materials/leather.svg', title: 'Full Wrap Italian Leather', subtitle: 'Supple Hand-Dyed Leatherette with Cameo & Foil Stamping', tag: 'MATERIAL SWATCH', color1: '#F0E5D8', color2: '#EAD5D2', iconType: 'material' },
  { file: 'public/images/materials/linen.svg', title: 'Heritage Archival Linen', subtitle: 'Natural Woven Textile Resistant to Everyday Wear', tag: 'MATERIAL SWATCH', color1: '#DCE5D8', color2: '#F8F5F0', iconType: 'material' },
  { file: 'public/images/materials/canvas.svg', title: 'Poly-Cotton Canvas', subtitle: 'Fine Texture Finished with Protective Anti-UV Varnish', tag: 'MATERIAL SWATCH', color1: '#EAD5D2', color2: '#F0E5D8', iconType: 'material' },
  { file: 'public/images/materials/acrylic.svg', title: 'Crystal Diamond Acrylic', subtitle: 'Pure Glassy Depth with Diamond-Polished Rounded Edges', tag: 'MATERIAL SWATCH', color1: '#DCE6EF', color2: '#FFFFFF', iconType: 'material' },
  { file: 'public/images/materials/wood.svg', title: 'Solid Hardwood & Case', subtitle: 'Natural Rich Timber Grain with Precision Laser Engraving', tag: 'MATERIAL SWATCH', color1: '#F0E5D8', color2: '#353535', iconType: 'material' },
  { file: 'public/images/materials/metal.svg', title: 'Matte Brushed Silver Metal', subtitle: 'Modern High-Definition Metal Plate with Brushed Finish', tag: 'MATERIAL SWATCH', color1: '#DCE6EF', color2: '#77716C', iconType: 'material' },

  // Craftsmanship
  { file: 'public/images/craft/binding.svg', title: 'Traditional Hand-Binding', subtitle: 'Folded and sewn by skilled artisans without machine shortcuts', tag: 'STEP 01: CRAFTSMANSHIP', color1: '#EAD5D2', color2: '#F8F5F0', iconType: 'craft' },
  { file: 'public/images/craft/printing.svg', title: 'Fuji Silver Halide Printing', subtitle: 'Pro-lab optical continuous tone with pure clean whites', tag: 'STEP 02: PRINT FIDELITY', color1: '#DCE5D8', color2: '#F0E5D8', iconType: 'craft' },
  { file: 'public/images/craft/leather-cover.svg', title: 'Hand-Stitched Leather Covers', subtitle: 'Tension-wrapped around solid wooden framing cores', tag: 'STEP 03: COVER ASSEMBLY', color1: '#F0E5D8', color2: '#EAD5D2', iconType: 'craft' },
  { file: 'public/images/craft/finishing.svg', title: 'Velvet & Silk Page Finishing', subtitle: '1.0mm-1.5mm archival core boards with sealed edges', tag: 'STEP 04: PAGE MOUNTING', color1: '#DCE6EF', color2: '#F8F5F0', iconType: 'craft' },
  { file: 'public/images/craft/details.svg', title: 'Raised Foil & Cameo Registration', subtitle: 'Individual quality inspection and export packaging', tag: 'STEP 05: DETAIL PRECISION', color1: '#E7E0EF', color2: '#F0E5D8', iconType: 'craft' },

  // Gallery
  { file: 'public/images/gallery/wedding-1.svg', title: 'Royal Heritage Wedding', subtitle: 'Udaipur Palace Ceremony in Flush Mount Crystal Acrylic', tag: 'WEDDINGS GALLERY', color1: '#EAD5D2', color2: '#F0E5D8', iconType: 'photo' },
  { file: 'public/images/gallery/wedding-2.svg', title: 'Goa Coastal Celebration', subtitle: 'Sunset Beach Nuptials in Full Wrap Sage Linen', tag: 'WEDDINGS GALLERY', color1: '#DCE5D8', color2: '#DCE6EF', iconType: 'photo' },
  { file: 'public/images/gallery/baby-1.svg', title: 'First Milestones & Joy', subtitle: 'Newborn Portrait Book in Pastel Powder Blue Linen', tag: 'BABY ALBUMS', color1: '#DCE6EF', color2: '#E7E0EF', iconType: 'photo' },
  { file: 'public/images/gallery/family-1.svg', title: 'Generational Ancestral Legacy', subtitle: 'Golden 50th Anniversary in Hand-Worked Leather Casket', tag: 'FAMILY ARCHIVES', color1: '#F0E5D8', color2: '#EAD5D2', iconType: 'photo' },
  { file: 'public/images/gallery/travel-1.svg', title: 'Alpine Journey & Landscapes', subtitle: '180° Panoramic Layflat Double Page Landscape Spread', tag: 'TRAVEL MEMORIES', color1: '#DCE5D8', color2: '#FFFFFF', iconType: 'photo' },
  { file: 'public/images/gallery/celebration-1.svg', title: 'Bespoke Evening Gala', subtitle: 'Black Tie Celebration in Brushed Silver Metal Hardcover', tag: 'CELEBRATIONS', color1: '#E7E0EF', color2: '#F0E5D8', iconType: 'photo' },
];

for (const asset of assets) {
  const dir = path.dirname(asset.file);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  const content = createSvg(asset);
  fs.writeFileSync(asset.file, content, 'utf8');
}

console.log(`Generated ${assets.length} high-fidelity SVG assets successfully.`);

