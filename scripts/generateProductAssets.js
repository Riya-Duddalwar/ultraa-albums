import fs from 'node:fs';
import path from 'node:path';

function createSvg({ title, subtitle, tag, color1, color2, iconType = 'book' }) {
  let iconSvg = '';
  if (iconType === 'book') {
    iconSvg = `<rect x="300" y="220" width="360" height="260" rx="6" fill="#FFFFFF" stroke="#353535" stroke-width="2" opacity="0.95"/>
    <line x1="480" y1="220" x2="480" y2="480" stroke="#EAD5D2" stroke-width="3"/>
    <rect x="320" y="240" width="140" height="220" fill="${color2}" opacity="0.3" rx="2"/>
    <rect x="500" y="240" width="140" height="220" fill="${color2}" opacity="0.3" rx="2"/>
    <line x1="335" y1="360" x2="445" y2="360" stroke="#77716C" stroke-width="1.5" stroke-dasharray="4 4"/>
    <line x1="515" y1="360" x2="625" y2="360" stroke="#77716C" stroke-width="1.5" stroke-dasharray="4 4"/>`;
  } else if (iconType === 'box') {
    iconSvg = `<rect x="320" y="220" width="320" height="240" rx="4" fill="#FFFFFF" stroke="#353535" stroke-width="2"/>
    <rect x="300" y="200" width="360" height="60" rx="6" fill="${color2}" stroke="#353535" stroke-width="2" opacity="0.85"/>
    <path d="M430 200 L430 180 Q 430 170, 440 170 L520 170 Q 530 170, 530 180 L530 200" fill="none" stroke="#353535" stroke-width="3"/>
    <rect x="420" y="290" width="120" height="90" rx="4" fill="${color1}" opacity="0.5"/>`;
  } else if (iconType === 'pocket') {
    iconSvg = `<rect x="300" y="200" width="360" height="280" rx="8" fill="#FFFFFF" stroke="#353535" stroke-width="2"/>
    <line x1="480" y1="200" x2="480" y2="480" stroke="#353535" stroke-width="1.5" stroke-dasharray="6 6"/>
    <rect x="320" y="220" width="135" height="110" rx="4" fill="${color2}" opacity="0.4" stroke="#77716C" stroke-width="1"/>
    <rect x="320" y="345" width="135" height="110" rx="4" fill="${color2}" opacity="0.4" stroke="#77716C" stroke-width="1"/>
    <rect x="505" y="220" width="135" height="110" rx="4" fill="${color2}" opacity="0.4" stroke="#77716C" stroke-width="1"/>
    <rect x="505" y="345" width="135" height="110" rx="4" fill="${color2}" opacity="0.4" stroke="#77716C" stroke-width="1"/>`;
  } else if (iconType === 'spread') {
    iconSvg = `<path d="M 220 340 Q 480 370, 740 340 L 740 460 Q 480 490, 220 460 Z" fill="#FFFFFF" stroke="#353535" stroke-width="2"/>
    <line x1="480" y1="355" x2="480" y2="475" stroke="#EAD5D2" stroke-width="2.5"/>
    <text x="480" y="290" font-family="'Playfair Display', serif" font-size="18" fill="#353535" text-anchor="middle" letter-spacing="2">180° PANORAMIC SPREAD</text>`;
  } else if (iconType === 'spec') {
    iconSvg = `<rect x="280" y="220" width="400" height="240" rx="8" fill="#FFFFFF" stroke="#353535" stroke-width="2"/>
    <line x1="320" y1="280" x2="640" y2="280" stroke="#EAD5D2" stroke-width="1.5"/>
    <line x1="320" y1="340" x2="640" y2="340" stroke="#EAD5D2" stroke-width="1.5"/>
    <line x1="320" y1="400" x2="640" y2="400" stroke="#EAD5D2" stroke-width="1.5"/>
    <circle cx="305" cy="280" r="4" fill="#353535"/>
    <circle cx="305" cy="340" r="4" fill="#353535"/>
    <circle cx="305" cy="400" r="4" fill="#353535"/>`;
  }

  return `<svg width="960" height="680" viewBox="0 0 960 680" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad_${tag.replace(/[^a-zA-Z0-9]/g, '_')}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${color1}" />
      <stop offset="50%" stop-color="#F8F5F0" />
      <stop offset="100%" stop-color="${color2}" />
    </linearGradient>
    <pattern id="grid_${tag.replace(/[^a-zA-Z0-9]/g, '_')}" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#353535" stroke-width="0.5" stroke-opacity="0.04"/>
    </pattern>
  </defs>

  <rect width="960" height="680" fill="url(#grad_${tag.replace(/[^a-zA-Z0-9]/g, '_')})"/>
  <rect width="960" height="680" fill="url(#grid_${tag.replace(/[^a-zA-Z0-9]/g, '_')})"/>

  <rect x="36" y="36" width="888" height="608" rx="4" fill="none" stroke="#353535" stroke-opacity="0.12" stroke-width="1"/>
  <rect x="44" y="44" width="872" height="592" rx="2" fill="none" stroke="#353535" stroke-opacity="0.06" stroke-width="1"/>

  ${iconSvg}

  <!-- Header text -->
  <text x="480" y="115" font-family="'Inter', sans-serif" font-size="11" font-weight="600" fill="#77716C" text-anchor="middle" letter-spacing="4" text-transform="uppercase">${tag}</text>
  <text x="480" y="155" font-family="'Playfair Display', Georgia, serif" font-size="30" font-weight="500" fill="#353535" text-anchor="middle">${title}</text>

  <!-- Footer text -->
  <text x="480" y="555" font-family="'Inter', sans-serif" font-size="13" font-weight="400" fill="#77716C" text-anchor="middle" letter-spacing="1">${subtitle}</text>
  <text x="480" y="585" font-family="'Inter', sans-serif" font-size="10" font-weight="500" fill="#353535" text-anchor="middle" letter-spacing="3" opacity="0.6">ULTRAA ALBUMS · HANDCRAFTED IN MUMBAI</text>
</svg>`;
}

const assets = [
  // Flush Mount Details
  { file: 'public/images/flush-mount/fm-binding.svg', title: 'Traditional Italian Hand-Binding', subtitle: 'Sewn by artisans with reinforced spine structure', tag: 'CRAFTSMANSHIP', color1: '#EAD5D2', color2: '#F8F5F0', iconType: 'book' },
  { file: 'public/images/flush-mount/fm-spread.svg', title: 'Zero-Gutter Panoramic View', subtitle: 'Edge-to-edge uninterrupted 2-page spreads', tag: 'PANORAMIC', color1: '#DCE5D8', color2: '#FFFFFF', iconType: 'spread' },
  { file: 'public/images/flush-mount/fm-thickness.svg', title: '1.0mm Standard & 1.5mm Extra-Thick Boards', subtitle: 'Rigid white/black archival core prevents curling', tag: 'SUBSTRATE', color1: '#F0E5D8', color2: '#EAD5D2', iconType: 'spec' },
  { file: 'public/images/flush-mount/fm-paper.svg', title: 'Fuji Crystal Archive Silver Halide', subtitle: 'Pro lab optical luster finish with pure whites', tag: 'PHOTO PAPER', color1: '#DCE6EF', color2: '#F8F5F0', iconType: 'spec' },

  // Layflat Details
  { file: 'public/images/layflat/layflat-spread-detail.svg', title: '180° Layflat Flat-Opening Spread', subtitle: 'Slim, lightweight core allows up to 120 pages', tag: 'PANORAMIC SPREAD', color1: '#DCE5D8', color2: '#FFFFFF', iconType: 'spread' },
  { file: 'public/images/layflat/layflat-wedding.svg', title: 'Wedding Ceremonies & Panoramas', subtitle: 'Double-page spreads capture grand mandaps & aisles', tag: 'USE CASE: WEDDINGS', color1: '#EAD5D2', color2: '#F0E5D8', iconType: 'book' },
  { file: 'public/images/layflat/layflat-travel.svg', title: 'Travel & Milestone Expeditions', subtitle: 'Wide landscapes display without center distortion', tag: 'USE CASE: TRAVEL', color1: '#DCE6EF', color2: '#FFFFFF', iconType: 'book' },
  { file: 'public/images/layflat/layflat-portfolio.svg', title: 'Designer, Model & Artist Portfolios', subtitle: 'Acts as the cherry on top for client presentations', tag: 'USE CASE: PORTFOLIOS', color1: '#F0E5D8', color2: '#353535', iconType: 'book' },

  // Photo Books Details
  { file: 'public/images/photo-books/pb-sizes.svg', title: 'Standard Sizes: 5x5, 6x8, 9x12, 12x18', subtitle: 'From compact gift books to grand coffee-table editions', tag: 'AVAILABLE SIZES', color1: '#DCE6EF', color2: '#FFFFFF', iconType: 'spec' },
  { file: 'public/images/photo-books/pb-prints.svg', title: 'Print Formats: 4x6, 5x7, 6x8', subtitle: 'Crisp lab printing for prints from cameras and mobile', tag: 'PRINT OPTIONS', color1: '#E7E0EF', color2: '#F8F5F0', iconType: 'spec' },
  { file: 'public/images/photo-books/pb-finishes.svg', title: 'Glossy, Matte & Feather-Touch Laminations', subtitle: 'Non-tearable paper substrate with sealed edges', tag: 'PAPER FINISHES', color1: '#EAD5D2', color2: '#DCE5D8', iconType: 'spec' },
  { file: 'public/images/photo-books/pb-hardcover.svg', title: 'Bookstore-Grade Personalized Hardcovers', subtitle: 'Edge-to-edge custom photo wrap or elegant linen', tag: 'BINDING', color1: '#F0E5D8', color2: '#FFFFFF', iconType: 'book' },

  // Luxury Albums Details
  { file: 'public/images/luxury-albums/lux-casket.svg', title: 'Solid Wooden Presentation Casket', subtitle: 'Handcrafted timber box with magnetic closure & ribbon', tag: 'PRESENTATION SUITE', color1: '#F0E5D8', color2: '#353535', iconType: 'box' },
  { file: 'public/images/luxury-albums/lux-leather.svg', title: 'Handcrafted Italian Full Wrap Leather', subtitle: 'Hand-worked edges with custom spine ribs & cameos', tag: 'LEATHER COVER', color1: '#EAD5D2', color2: '#F0E5D8', iconType: 'book' },
  { file: 'public/images/luxury-albums/lux-names.svg', title: 'Personalized Names in Luxurious Fonts', subtitle: 'Gold foil, rose gold, or laser engraving on box & book', tag: 'PERSONALIZATION', color1: '#E7E0EF', color2: '#F8F5F0', iconType: 'spec' },

  // Boxes & Bags Details
  { file: 'public/images/boxes-and-bags/box-wooden-frame.svg', title: 'Designer Hardwood Framing & Leatherette', subtitle: 'Rigid structure with padded faux-leather wrapping', tag: 'BOX CONSTRUCTION', color1: '#F0E5D8', color2: '#DCE5D8', iconType: 'box' },
  { file: 'public/images/boxes-and-bags/box-styles.svg', title: 'Photo Wrap, Acrylic Strip & Cameo Options', subtitle: 'Customizable top lid treatments to match albums', tag: 'LID STYLES', color1: '#EAD5D2', color2: '#FFFFFF', iconType: 'box' },
  { file: 'public/images/boxes-and-bags/box-handles.svg', title: 'Suitcase Carry Handle & Shoulder Straps', subtitle: 'Ergonomic carry options for heavy large-format albums', tag: 'CARRY OPTIONS', color1: '#353535', color2: '#F0E5D8', iconType: 'box' },
  { file: 'public/images/boxes-and-bags/box-buckram.svg', title: 'Pearl & Carbon Buckram Display Boxes', subtitle: 'Available for album formats 10x10 and 12x12+', tag: 'DISPLAY CASES', color1: '#DCE6EF', color2: '#77716C', iconType: 'box' },

  // Slip-In Albums Details
  { file: 'public/images/slip-in-albums/slipin-pockets.svg', title: 'Dimpled Polypropylene PVC Pockets', subtitle: 'Moisture-proof, photo-safe pockets prevent sticking', tag: 'POCKET SAFETY', color1: '#DCE5D8', color2: '#FFFFFF', iconType: 'pocket' },
  { file: 'public/images/slip-in-albums/slipin-capacity.svg', title: '200 to 500 Photos Capacity (4x6 in / 10x15 cm)', subtitle: '2 to 4 photos per page with memo margin space', tag: 'CAPACITY', color1: '#EAD5D2', color2: '#F8F5F0', iconType: 'pocket' },
  { file: 'public/images/slip-in-albums/slipin-sealing.svg', title: 'Ultrasonic Machine-Sealed Durability', subtitle: 'High tensile sleeve sealing tested for everyday handling', tag: 'ULTRASONIC SEALING', color1: '#E7E0EF', color2: '#DCE6EF', iconType: 'pocket' },
  { file: 'public/images/slip-in-albums/slipin-gifts.svg', title: 'Low-Cost Gift Albums for Photo Labs', subtitle: 'Lab branding on covers as elegant customer gifts', tag: 'STUDIO GIFTS', color1: '#F0E5D8', color2: '#FFFFFF', iconType: 'pocket' },
];

for (const asset of assets) {
  const dir = path.dirname(asset.file);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  const content = createSvg(asset);
  fs.writeFileSync(asset.file, content, 'utf8');
}

console.log(`Generated ${assets.length} product-specific detail SVG assets.`);

