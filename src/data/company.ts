import { CompanyInfo, TeamMember } from '../types';

export const companyDetails: CompanyInfo = {
  name: 'Ultraa Albums',
  tagline: 'Handcrafted Heirlooms & Artisan Album Manufacturing',
  foundedYear: 2012,
  location: 'Mumbai, India',
  address: 'Shree Krishna Ind. Estate, Near Toll Naka, 211, Western Express Hwy, Dahisar East, Mumbai 400068, INDIA',
  phoneNumbers: ['+91-93222 54315', '+91-93200 54315'],
  emails: ['ultraaalbums@gmail.com', 'ultraadesignes@gmail.com'],
  worldwideDeliveryCountries: [
    'United States',
    'United Kingdom',
    'New Zealand',
    'Canada',
    'Europe',
    'India',
    'Worldwide',
  ],
  paypalUrl: 'https://www.paypal.com',
};

export const teamMembers: TeamMember[] = [
  {
    name: 'Rajiv Panchal',
    role: 'Founder',
    bio: 'Pioneered Ultraa Albums with a commitment to providing photographers world-class color fidelity and archival hand-bound craftsmanship.',
  },
  {
    name: 'Mayank Panchal',
    role: 'Co-Founder',
    bio: 'Oversees precision production operations and international packaging ensuring flawless worldwide delivery.',
  },
  {
    name: 'Bhairavi Panchal',
    role: 'Head of Designing Department',
    bio: 'Directs the bespoke album design studio, offering custom non-template layouts and unlimited client revisions.',
  },
];

export const companyMilestones = [
  {
    year: '2010',
    title: 'The Photography Beginning',
    description: 'Began as active professional photographers executing assignments across India and globally.',
  },
  {
    year: '2011',
    title: 'The Quality Dilemma',
    description: 'Faced industry-wide limitations where available albums lacked true color representation and durable binding, while high-end imports were cost-prohibitive.',
  },
  {
    year: '2012',
    title: 'Ultraa Album Founded',
    description: 'Founded to redefine wedding albums with true color reproduction, archival Fuji silver halide papers, and traditional hand-binding at accessible pricing.',
  },
  {
    year: 'Present',
    title: 'Global Artisan Presence',
    description: 'Serving leading wedding photographers across India, the UK, US, Canada, Europe, and New Zealand with tailored album design and manufacturing.',
  },
];

export const valueProps = [
  {
    title: 'Hand-Bound Craftsmanship',
    description: 'Every album is individually constructed by skilled artisans using traditional bookbinding techniques, not automated assembly lines.',
  },
  {
    title: 'Silver Halide Pro Lab Quality',
    description: 'Printed exclusively on archival Fuji Crystal Archive silver halide paper with luster finish for pure clean whites and enduring color accuracy.',
  },
  {
    title: 'Unlimited Design Revisions',
    description: 'Our in-house design team crafts bespoke layouts with 6-7 distinct styling themes and provides unlimited soft-copy revisions prior to print.',
  },
  {
    title: 'Global Export-Grade Packaging',
    description: 'Engineered protective packaging guarantees albums arrive in pristine condition anywhere across the world.',
  },
  {
    title: '10% Studio Sample Discount',
    description: '"We Invest In You" — every professional photographer receives a special 10% studio sample discount to showcase to their couples.',
  },
  {
    title: '100% Quality Guarantee',
    description: 'Backed by our rigorous multi-stage artisan inspection and strict image privacy security protocols.',
  },
];

