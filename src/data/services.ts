import { Service } from '../types';

export const servicesData: Service[] = [
  {
    id: 'album-designing',
    title: 'Professional Album Designing',
    subtitle: 'Human-curated, bespoke album layouts tailored to your visual narrative with unlimited soft-copy revisions.',
    slug: 'album-designing',
    description: [
      'Many album manufacturing companies offer automated online software claiming you can design your album yourself. In reality, photographers waste days learning complex tools only to discover rigid, generic templates with flat photo placements.',
      'At Ultraa Albums, an experienced professional designer manually reviews your photographs, curates the standout storytelling frames, and designs balanced, artistic spreads tailored to your aesthetic.',
      'We provide 6 to 7 distinct signature design themes to choose from. You receive soft-copy digital previews for feedback, with unlimited revisions until you are completely satisfied — offered free with our album manufacturing orders.'
    ],
    features: [
      'Manual human curation by senior album designers with 10+ years experience',
      'Non-template, bespoke page layouts tailored to your unique event',
      '6 to 7 distinct visual themes to match any cultural or modern aesthetic',
      'Unlimited digital soft-copy revisions prior to final print approval',
      'Complimentary album design service included with print manufacturing'
    ],
    themesOrStyles: [
      'Classic Design',
      'Clean Minimalist Design',
      'Contemporary Fine Art',
      'Indian Traditional Heritage',
      'Indian Classic Design',
      'Indian Fusion Style',
      'Modern Editorial',
      'Baby & Family Milestone'
    ],
    packagesNote: 'Complimentary with album printing orders. Contact us for standalone digital design files.',
    isUkService: false,
    images: {
      hero: '/images/services/album-design-hero.jpg',
      samples: [
        '/images/services/design-sample-1.jpg',
        '/images/services/design-sample-2.jpg',
      ],
    },
  },
  {
    id: 'image-editing',
    title: 'Professional Image Editing & Retouching',
    subtitle: 'Master color grading, skin retouching, and photographic restoration powered by 10+ years of studio expertise.',
    slug: 'image-editing',
    description: [
      'Ultraa Albums provides comprehensive digital image correction and high-end retouching for photographers and studios worldwide. Our team of skilled artists takes utmost care of every subtle nuance, faithfully enhancing your imagery without harming its natural character.',
      'Our team is deeply versed in industry-standard software including Adobe Lightroom and Photoshop, delivering responsive, reliable turnarounds for weddings, fashion, beauty, commercial, and restoration assignments.',
      'Test our work risk-free: Send us 1 or 2 RAW files with your styling instructions, and we will complete them as a complimentary free sample so our quality speaks for itself.'
    ],
    features: [
      'Advanced image cutouts and precision clipping paths',
      'Dynamic range, brightness, and shadow balance',
      'Restoration of scratches, dust spots, creases, and aging damage',
      'True-tone light and color grading for consistent wedding galleries',
      'High-end beauty & glamour skin frequency separation retouching',
      'Distraction and unwanted object removal',
      'E-Commerce commercial product editing',
      'Cinematic video editing and color grading'
    ],
    packagesNote: 'Complimentary trial: Submit 1-2 RAW files with instructions for a free test edit.',
    isUkService: false,
    images: {
      hero: '/images/services/image-editing-hero.jpg',
      samples: [
        '/images/services/retouch-before.jpg',
        '/images/services/retouch-after.jpg',
      ],
    },
  },
  {
    id: 'wedding-photography',
    title: 'Wedding Photography & Cinematography',
    subtitle: 'Pan-India and destination wedding storytellers capturing emotional heirlooms through candid lens and multi-angle cinema.',
    slug: 'photography',
    description: [
      'Capture the true essence and raw emotion of your wedding celebration. Our collective of 15+ skilled photographers and cinematographers travels across India and internationally to document life’s most sacred milestones.',
      'We combine intimate candid moments with timeless formal portraits of your family and guests. Every smile, emotional tear, and heartfelt exchange is preserved as an artistic visual signature totally unique to your love story.',
      'Beyond weddings, we also document proposals, pre- and post-wedding destination sessions, save-the-date films, bar/bat mitzvahs, anniversaries, and outdoor family portraits.'
    ],
    features: [
      'Team of 15+ seasoned photographers and cinematographers',
      'Candid photojournalism blended with editorial couple portraits',
      'Multi-angle traditional & cinematic video coverage',
      'Pan-India and international destination travel capabilities',
      'Seamless companion integration with our handcrafted album printing',
      'Guaranteed inquiry response time within 24 hours'
    ],
    packagesNote: 'Custom packages tailored for every budget and scope. Contact us to schedule a portfolio review and consultation.',
    isUkService: false,
    images: {
      hero: '/images/services/photography-hero.jpg',
      samples: [
        '/images/services/photo-sample-1.jpg',
        '/images/services/photo-sample-2.jpg',
      ],
    },
  },

  // UK SERVICES
  {
    id: 'image-editing-uk',
    title: 'Image Editing Work For UK',
    subtitle: 'Dedicated post-production and retouching services for UK professional photographers and wedding studios.',
    slug: 'image-editing-for-uk',
    description: [
      'Dedicated post-production partner for UK wedding and portrait photographers facing tight seasonal delivery schedules.',
      'From bulk wedding culling and Lightroom color grading to master Photoshop skin retouching, we deliver consistent, responsive post-production aligned with your studio style.',
      'UK Free Sample: Send us 1-2 RAW images via WeTransfer with your studio profile, and we will edit them completely free.'
    ],
    features: [
      'Wedding batch culling & Lightroom color harmonization',
      'Natural skin retouching and stray hair cleanup',
      'Sky replacements and background object removal',
      'Free 1-2 image test edit for UK photographers',
      'Quick turnaround via cloud transfer'
    ],
    isUkService: true,
    images: {
      hero: '/images/services/image-editing-hero.jpg',
      samples: ['/images/services/retouch-after.jpg'],
    },
  },
  {
    id: 'wedding-photography-uk',
    title: 'Photography & Cinema For UK',
    subtitle: 'Destination wedding and lifestyle photography services for UK couples and international celebrations.',
    slug: 'photography-for-uk',
    description: [
      'Comprehensive wedding videography and photography for UK couples planning destination celebrations or UK nuptials.',
      'Our team captures formal family portraits alongside emotive candid moments, delivering an artistic cinematic film and print-ready photo gallery.'
    ],
    features: [
      'Destination wedding specialists covering UK and global venues',
      'Cinematic multi-camera documentary films',
      'Engagement, pre-wedding, and family lifestyle sessions',
      'Response within 24 hours for all UK inquiries'
    ],
    isUkService: true,
    images: {
      hero: '/images/services/photography-hero.jpg',
      samples: ['/images/services/photo-sample-1.jpg'],
    },
  },
];

