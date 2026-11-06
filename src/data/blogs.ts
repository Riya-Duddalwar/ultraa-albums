export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishDate?: string; // Optional: publication dates only where genuine dates exist
  author: string;
  image: string;
  content: string[];
  isOriginalContent?: boolean;
}

export const originalBlogsIntro = {
  heading: 'Our Blogs',
  quote:
    'Are you looking for anyone who can do retouching for your photographs as per your convenience? Don’t hesitate just call us. We have a team of highly skilled & expert professionals who can give you best photo editing services. We are one of leading Album designing and manufacturing company in India having situated in Mumbai.',
};

export const blogPosts: BlogPost[] = [
  {
    id: 'photo-editing-and-album-manufacturing',
    slug: 'photo-editing-and-album-manufacturing-services',
    title: 'Photo Retouching & Professional Album Manufacturing Services in Mumbai',
    excerpt:
      'Are you looking for anyone who can do retouching for your photographs as per your convenience? Ultraa Albums provides skilled & expert professionals giving you best photo editing services.',
    category: 'Studio Services',
    readTime: '3 min read',
    author: 'Ultraa Albums Studio',
    image: '/images/services/design-hero.jpg',
    isOriginalContent: true,
    content: [
      'Are you looking for anyone who can do retouching for your photographs as per your convenience? Don’t hesitate just call us.',
      'We have a team of highly skilled & expert professionals who can give you best photo editing services. Digital restoration and image enhancements at Ultraa can restore poor images, remove blemishes, repair scratches and creases, and balance exposures without harming the original print.',
      'Just go through our website www.ultraaAlbums.com. We are one of the leading Album designing and manufacturing companies in India having situated in Mumbai.',
      'Our designers possess more than 10 years of experience and deep expertise in professional editing tools like Adobe Lightroom and Photoshop, delivering responsive service and unmatched value for photographers across the globe.'
    ],
  },
  {
    id: 'flush-mount-vs-photobook',
    slug: 'flush-mount-vs-traditional-photo-books',
    title: 'Flush Mount Albums vs. Traditional Photo Books: The Structural Difference',
    excerpt:
      'Explore why archival 1.0mm-1.5mm rigid core substrates and Fuji Crystal Archive silver halide prints create heirloms that never warp or yellow.',
    category: 'Craftsmanship',
    readTime: '5 min read',
    author: 'Rajiv Panchal',
    image: '/images/products/flush-mount-hero.jpg',
    content: [
      'The difference between a mass-market photo book and a professional flush mount album lies at the heart of photographic permanence.',
      'Standard photo books use flexible, press-printed paper sheets bound with adhesive into a curved center spine gutter. Over time, frequent viewing can cause binding separation and page curl.',
      'In contrast, an Ultraa flush mount album is individually hand-bound with continuous silver halide photographic prints mounted onto 0.5mm–1.0mm archival core boards, yielding rigid 1.0mm to 1.5mm pages that open completely flat with zero gutter cut-through.',
      'Combined with Fuji Crystal Archive luster paper, colors remain vivid, whites remain pure, and memories are protected across generations.'
    ],
  },
  {
    id: 'cover-materials-guide',
    slug: 'tactile-cover-materials-acrylic-leather-linen',
    title: 'Tactile Cover Materials: From Diamond-Polished Acrylic to Full-Wrap Leather',
    excerpt:
      'A tactile overview of our 9 cover finishes: crystal acrylic, supple leather, natural linens, solid wood caskets, and metallic foil typography.',
    category: 'Materials & Finishes',
    readTime: '4 min read',
    author: 'Bhairavi Panchal',
    image: '/images/products/luxury-album-hero.jpg',
    content: [
      'Creating the cover is one of the most exciting moments in the album creation process. It establishes the tactile tone before the first spread is revealed.',
      'For sleek modern celebrations, diamond-polished Crystal Acrylic panels offer glassy optical depth with beveled edges and rounded spine wrapping.',
      'For couples seeking organic warmth, our heritage woven linens and solid hardwood timber caskets provide timeless elegance and heirloom permanence.',
      'All covers support bespoke personalization including gold, rose gold, and silver foil hot stamping or laser-etched typography.'
    ],
  },
];

export const upcomingJournalStories = [
  {
    title: 'The Science of Silver Halide: Why Continuous Tone Prints Beat Inkjet for Longevity',
    category: 'Print Science',
    status: 'In Editorial Preparation',
  },
  {
    title: 'Designing Without Templates: Inside Ultraa Albums’ Bespoke Layout Philosophy',
    category: 'Album Designing',
    status: 'Atelier Spotlight',
  },
  {
    title: 'Zero Gutter Panoramic Spreads: How Precision Bookbinding Eliminates Center Cuts',
    category: 'Artisan Technique',
    status: 'Craftsmanship Series',
  },
];
