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
  } else if (iconType === 'camera') {
    iconSvg = `<rect x="340" y="250" width="280" height="190" rx="16" fill="#FFFFFF" stroke="#353535" stroke-width="2"/>
    <rect x="420" y="220" width="120" height="30" rx="4" fill="${color2}" stroke="#353535" stroke-width="2"/>
    <circle cx="480" cy="345" r="50" fill="${color1}" opacity="0.4" stroke="#353535" stroke-width="2"/>
    <circle cx="480" cy="345" r="28" fill="#FFFFFF" opacity="0.9"/>`;
  } else if (iconType === 'retouch') {
    iconSvg = `<rect x="280" y="210" width="400" height="260" rx="6" fill="#FFFFFF" stroke="#353535" stroke-width="2"/>
    <circle cx="480" cy="320" r="50" fill="${color1}" opacity="0.5"/>
    <path d="M320 440 Q 420 340, 480 380 T 640 430" fill="none" stroke="#353535" stroke-width="2"/>`;
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
  <text x="480" y="585" font-family="'Inter', sans-serif" font-size="10" font-weight="500" fill="#353535" text-anchor="middle" letter-spacing="3" opacity="0.6">ULTRAA ALBUMS · WORLDWIDE DELIVERY TO THE UNITED KINGDOM</text>
</svg>`;
}

const assets = [
  { file: 'public/images/uk/flush-mount-uk.svg', title: 'Flush Mount Album For UK', subtitle: 'Hand-Bound Silver Halide Wedding Albums Delivered to the UK', tag: 'UK HEIRLOOM COLLECTION', color1: '#EAD5D2', color2: '#F8F5F0', iconType: 'book' },
  { file: 'public/images/uk/luxury-uk.svg', title: 'Luxury Album Maker For UK', subtitle: 'Handcrafted Leather Albums & Personalized Wooden Caskets for UK Studios', tag: 'UK LUXURY SUITE', color1: '#F0E5D8', color2: '#353535', iconType: 'box' },
  { file: 'public/images/uk/boxes-uk.svg', title: 'Box and Bags For UK', subtitle: 'Hardwood Frames, Pearl Buckram Cases & Carry Handles for UK Weddings', tag: 'UK PRESENTATION PACKAGING', color1: '#DCE6EF', color2: '#77716C', iconType: 'box' },
  { file: 'public/images/uk/slipin-uk.svg', title: 'Slip in Album For UK', subtitle: 'Dimpled Polypropylene Moisture-Proof Pocket Albums for UK Studios', tag: 'UK ARCHIVAL STORAGE', color1: '#DCE5D8', color2: '#FFFFFF', iconType: 'pocket' },
  { file: 'public/images/uk/editing-uk.svg', title: 'Image Editing Work For UK', subtitle: 'Post-Production, Color Grading & Free 1-2 RAW Test Edits for UK Photographers', tag: 'UK RETOUCHING SERVICES', color1: '#E7E0EF', color2: '#EAD5D2', iconType: 'retouch' },
  { file: 'public/images/uk/photobook-uk.svg', title: 'Photo Book For UK', subtitle: 'Bookstore-Grade Hardcovers with Non-Tearable Paper for UK Clients', tag: 'UK PHOTO BOOKS', color1: '#DCE6EF', color2: '#F8F5F0', iconType: 'book' },
  { file: 'public/images/uk/photography-uk.svg', title: 'PHOTOGRAPHY For UK', subtitle: 'Destination Wedding Photography & Cinematic Video for UK Nuptials', tag: 'UK DESTINATION CINEMA', color1: '#F0E5D8', color2: '#EAD5D2', iconType: 'camera' },
];

for (const asset of assets) {
  const dir = path.dirname(asset.file);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  const content = createSvg(asset);
  fs.writeFileSync(asset.file, content, 'utf8');
}

console.log(`Generated ${assets.length} UK-specific SVG assets successfully.`);

