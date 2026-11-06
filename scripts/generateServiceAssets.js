import fs from 'node:fs';
import path from 'node:path';

function createSvg({ title, subtitle, tag, color1, color2, iconType = 'service' }) {
  let iconSvg = '';
  if (iconType === 'layout') {
    iconSvg = `<rect x="280" y="210" width="400" height="260" rx="4" fill="#FFFFFF" stroke="#353535" stroke-width="2"/>
    <line x1="480" y1="210" x2="480" y2="470" stroke="#EAD5D2" stroke-width="2"/>
    <rect x="300" y="230" width="160" height="130" fill="${color2}" opacity="0.4" rx="2"/>
    <rect x="300" y="380" width="160" height="70" fill="${color2}" opacity="0.25" rx="2"/>
    <rect x="500" y="230" width="160" height="220" fill="${color1}" opacity="0.35" rx="2"/>
    <circle cx="580" cy="340" r="30" fill="#FFFFFF" opacity="0.8"/>
    <path d="M565 340 L595 340 M580 325 L580 355" stroke="#353535" stroke-width="1.5"/>`;
  } else if (iconType === 'slider-before') {
    iconSvg = `<rect x="260" y="190" width="440" height="300" rx="6" fill="#F0E5D8" stroke="#353535" stroke-width="2"/>
    <circle cx="480" cy="310" r="60" fill="#DCE5D8" opacity="0.7"/>
    <path d="M300 450 Q 420 340, 480 380 T 660 440" fill="none" stroke="#77716C" stroke-width="2"/>
    <text x="320" y="240" font-family="'Inter', sans-serif" font-size="12" font-weight="600" fill="#77716C" letter-spacing="2">RAW CAMERA CAPTURE</text>
    <text x="320" y="260" font-family="'Inter', sans-serif" font-size="10" fill="#77716C">Flat profile · Underexposed shadows</text>`;
  } else if (iconType === 'slider-after') {
    iconSvg = `<rect x="260" y="190" width="440" height="300" rx="6" fill="#FFFFFF" stroke="#353535" stroke-width="2"/>
    <circle cx="480" cy="310" r="60" fill="#EAD5D2" opacity="0.85"/>
    <path d="M300 450 Q 420 320, 480 360 T 660 420" fill="none" stroke="#353535" stroke-width="2.5"/>
    <text x="320" y="240" font-family="'Inter', sans-serif" font-size="12" font-weight="600" fill="#353535" letter-spacing="2">STUDIO COLOR GRADED</text>
    <text x="320" y="260" font-family="'Inter', sans-serif" font-size="10" fill="#77716C">Frequency separation · Natural skin warmth · Pro contrast</text>`;
  } else if (iconType === 'camera') {
    iconSvg = `<rect x="340" y="250" width="280" height="190" rx="16" fill="#FFFFFF" stroke="#353535" stroke-width="2"/>
    <rect x="420" y="220" width="120" height="30" rx="4" fill="${color2}" stroke="#353535" stroke-width="2"/>
    <circle cx="480" cy="345" r="50" fill="${color1}" opacity="0.4" stroke="#353535" stroke-width="2"/>
    <circle cx="480" cy="345" r="28" fill="#FFFFFF" opacity="0.9"/>
    <circle cx="580" cy="280" r="8" fill="#EAD5D2"/>`;
  } else if (iconType === 'team') {
    iconSvg = `<circle cx="480" cy="310" r="65" fill="${color2}" stroke="#353535" stroke-width="2"/>
    <circle cx="480" cy="290" r="30" fill="${color1}" opacity="0.6"/>
    <path d="M430 360 C 430 335, 530 335, 530 360 Z" fill="#353535"/>
    <rect x="400" y="400" width="160" height="40" rx="20" fill="#FFFFFF" stroke="#353535" stroke-width="1.5"/>
    <text x="480" y="425" font-family="'Inter', sans-serif" font-size="11" font-weight="600" fill="#353535" text-anchor="middle" letter-spacing="2">${tag}</text>`;
  } else {
    iconSvg = `<rect x="300" y="220" width="360" height="240" rx="8" fill="#FFFFFF" stroke="#353535" stroke-width="2"/>
    <circle cx="480" cy="340" r="45" fill="${color1}" opacity="0.4"/>`;
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
  <text x="480" y="585" font-family="'Inter', sans-serif" font-size="10" font-weight="500" fill="#353535" text-anchor="middle" letter-spacing="3" opacity="0.6">ULTRAA ALBUMS · EST. 2012 MUMBAI</text>
</svg>`;
}

const assets = [
  // Services Main Heroes
  { file: 'public/images/services/album-design-hero.svg', title: 'Professional Album Designing', subtitle: 'Bespoke Non-Template Spreads with Unlimited Client Revisions', tag: 'BESPOKE DESIGN', color1: '#EAD5D2', color2: '#F0E5D8', iconType: 'layout' },
  { file: 'public/images/services/editing-hero.svg', title: 'High-End Image Retouching', subtitle: 'Precision Photoshop & Lightroom Color Science by 10+ Yr Artists', tag: 'POST-PRODUCTION', color1: '#DCE5D8', color2: '#DCE6EF', iconType: 'slider-after' },
  { file: 'public/images/services/photo-hero.svg', title: 'Wedding Photography & Cinema', subtitle: 'Pan-India & International Storytellers (15+ Professional Team)', tag: 'PHOTOGRAPHY STUDIO', color1: '#F0E5D8', color2: '#EAD5D2', iconType: 'camera' },

  // Image Editing Before / After
  { file: 'public/images/services/editing-before.svg', title: 'RAW Camera Capture (Before)', subtitle: 'Original flat contrast, mixed ambient tint, minor blemishes', tag: 'BEFORE RETOUCH', color1: '#F0E5D8', color2: '#DCE5D8', iconType: 'slider-before' },
  { file: 'public/images/services/editing-after.svg', title: 'Master Retouched & Graded (After)', subtitle: 'Clean luminous skin, true Fuji color tones, pristine highlights', tag: 'AFTER RETOUCH', color1: '#EAD5D2', color2: '#FFFFFF', iconType: 'slider-after' },

  // Design Themes (10 Themes from specification)
  { file: 'public/images/services/theme-classic.svg', title: 'Classic Design Theme', subtitle: 'Timeless symmetrical margins with elegant serif captioning', tag: 'THEME 01', color1: '#EAD5D2', color2: '#F8F5F0', iconType: 'layout' },
  { file: 'public/images/services/theme-clean.svg', title: 'Clean Design Theme', subtitle: 'Minimalist whitespace with generous negative space', tag: 'THEME 02', color1: '#DCE6EF', color2: '#FFFFFF', iconType: 'layout' },
  { file: 'public/images/services/theme-contemporary.svg', title: 'Contemporary Design Theme', subtitle: 'Fine-art editorial asymmetric layouts for modern weddings', tag: 'THEME 03', color1: '#DCE5D8', color2: '#F0E5D8', iconType: 'layout' },
  { file: 'public/images/services/theme-indian.svg', title: 'Indian Design Theme', subtitle: 'Vibrant cultural celebrations with dynamic multi-photo spreads', tag: 'THEME 04', color1: '#F0E5D8', color2: '#EAD5D2', iconType: 'layout' },
  { file: 'public/images/services/theme-indian-classic.svg', title: 'Indian Classic Design', subtitle: 'Royal mandap ceremonies, ritual highlights, and ornate borders', tag: 'THEME 05', color1: '#EAD5D2', color2: '#DCE6EF', iconType: 'layout' },
  { file: 'public/images/services/theme-indian-fusion.svg', title: 'Indian Fusion Design', subtitle: 'Harmonious blend of traditional warmth with modern minimalism', tag: 'THEME 06', color1: '#E7E0EF', color2: '#F8F5F0', iconType: 'layout' },
  { file: 'public/images/services/theme-elegant.svg', title: 'Elegant Design Theme', subtitle: 'Subtle pastel background accents and poetic pacing', tag: 'THEME 07', color1: '#DCE5D8', color2: '#FFFFFF', iconType: 'layout' },
  { file: 'public/images/services/theme-western.svg', title: 'Western Design Theme', subtitle: 'Full-bleed bridal portraits and cinematic landscape sweeps', tag: 'THEME 08', color1: '#DCE6EF', color2: '#F0E5D8', iconType: 'layout' },
  { file: 'public/images/services/theme-baby.svg', title: 'Baby Album Design', subtitle: 'Soft joyful palettes, milestone tracking, and tender pacing', tag: 'THEME 09', color1: '#E7E0EF', color2: '#EAD5D2', iconType: 'layout' },
  { file: 'public/images/services/theme-modern.svg', title: 'Modern Design Theme', subtitle: 'Sharp typographic alignments and magazine-style spreads', tag: 'THEME 10', color1: '#353535', color2: '#F0E5D8', iconType: 'layout' },

  // Photography Gallery (6 categories)
  { file: 'public/images/services/photo-candid.svg', title: 'Candid Wedding Emotions', subtitle: 'Unposed, authentic smiles, laughter, and emotional tears', tag: 'CANDID MOMENTS', color1: '#EAD5D2', color2: '#F8F5F0', iconType: 'camera' },
  { file: 'public/images/services/photo-traditional.svg', title: 'Traditional Sacred Rituals', subtitle: 'Formal family portraits, ceremony mandap, and cultural rites', tag: 'TRADITIONAL', color1: '#F0E5D8', color2: '#EAD5D2', iconType: 'camera' },
  { file: 'public/images/services/photo-prewedding.svg', title: 'Pre-Wedding & Engagement', subtitle: 'Romantic destination shoots bathed in golden hour light', tag: 'PRE-WEDDING', color1: '#DCE6EF', color2: '#E7E0EF', iconType: 'camera' },
  { file: 'public/images/services/photo-cinematic.svg', title: 'Cinematic Wedding Films', subtitle: 'Multi-angle cinematic drone and 4K film coverage', tag: 'CINEMATOGRAPHY', color1: '#353535', color2: '#DCE5D8', iconType: 'camera' },
  { file: 'public/images/services/photo-portrait.svg', title: 'Outdoor Family Portraits', subtitle: 'Intergenerational milestones and timeless heirlooms', tag: 'FAMILY PORTRAITS', color1: '#DCE5D8', color2: '#FFFFFF', iconType: 'camera' },
  { file: 'public/images/services/photo-proposal.svg', title: 'Surprise Proposals & Events', subtitle: 'Discrete capture of unforgettable once-in-a-lifetime vows', tag: 'SPECIAL EVENTS', color1: '#EAD5D2', color2: '#F0E5D8', iconType: 'camera' },

  // About Us & Team
  { file: 'public/images/about-us/about-hero.svg', title: 'Preserving Stories Since 2012', subtitle: 'Mumbai Atelier Dedicated to Archival Heirlooms & Master Bookbinding', tag: 'OUR HERITAGE', color1: '#F0E5D8', color2: '#EAD5D2', iconType: 'service' },
  { file: 'public/images/about-us/workshop-dahisar.svg', title: 'Mumbai Dahisar Workshop', subtitle: 'Shree Krishna Ind. Estate, Western Express Highway', tag: 'WORKSHOP ATELIER', color1: '#DCE5D8', color2: '#F8F5F0', iconType: 'service' },
  { file: 'public/images/team/rajiv-panchal.svg', title: 'Rajiv Panchal', subtitle: 'Founder of Ultraa Albums · Photography Veteran Since 2010', tag: 'FOUNDER', color1: '#F0E5D8', color2: '#353535', iconType: 'team' },
  { file: 'public/images/team/mayank-panchal.svg', title: 'Mayank Panchal', subtitle: 'Co-Founder · Operations & International Packaging Lead', tag: 'CO-FOUNDER', color1: '#DCE6EF', color2: '#77716C', iconType: 'team' },
  { file: 'public/images/team/bhairavi-panchal.svg', title: 'Bhairavi Panchal', subtitle: 'Head of Designing Department · Creative Narrative Director', tag: 'HEAD OF DESIGN', color1: '#EAD5D2', color2: '#E7E0EF', iconType: 'team' },
];

for (const asset of assets) {
  const dir = path.dirname(asset.file);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  const content = createSvg(asset);
  fs.writeFileSync(asset.file, content, 'utf8');
}

console.log(`Generated ${assets.length} service, about us, and team SVG assets.`);

