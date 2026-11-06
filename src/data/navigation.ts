import { NavigationItem } from '../types';

export const mainNavigation: NavigationItem[] = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Our Products',
    path: '/flush-mount-album',
    children: [
      {
        name: 'Flush Mount Album',
        path: '/flush-mount-album',
        description: 'Hand-bound silver halide heirloom albums with rigid archival substrate.',
      },
      {
        name: 'Layflat Albums',
        path: '/layflat',
        description: 'Seamless panoramic two-page spreads with slim, lightweight boards.',
      },
      {
        name: 'Photo Book',
        path: '/photo-book',
        description: 'Bookstore-quality modern hardcovers with non-tearable paper options.',
      },
      {
        name: 'Luxury Albums',
        path: '/luxury-albums',
        description: 'Ultra-luxurious handcrafted leather and bespoke wooden casket ensembles.',
      },
      {
        name: 'Boxes & Bags',
        path: '/box-and-bags',
        description: 'Artisan presentation display boxes, carry cases, and soft leather bags.',
      },
      {
        name: 'Slip-In Albums',
        path: '/slip-in-albums',
        description: 'Photo-safe dimpled polypropylene archival pocket albums up to 300 photos.',
      },
    ],
  },
  {
    name: 'Services',
    path: '/image-editing',
    children: [
      {
        name: 'Album Designing',
        path: '/album-designing',
        description: 'Bespoke, non-template album design with unlimited client revisions.',
      },
      {
        name: 'Image Editing & Retouching',
        path: '/image-editing',
        description: 'Professional color grading, retouching, and restoration with free raw sample.',
      },
      {
        name: 'Wedding Photography',
        path: '/photography',
        description: 'Pan-India and international candid wedding photography & cinematic film team.',
      },
    ],
  },
  {
    name: 'UK Collection',
    path: '/flush-mount-album-for-uk',
    children: [
      {
        name: 'Flush Mount Album (UK)',
        path: '/flush-mount-album-for-uk',
        description: 'Handcrafted heirloom albums tailored with expedited delivery to the United Kingdom.',
      },
      {
        name: 'Luxury Albums (UK)',
        path: '/luxury-albums-for-uk',
        description: 'Artisan leather and wooden casket luxury albums for UK photographers.',
      },
      {
        name: 'Photo Book (UK)',
        path: '/photo-book-for-uk',
        description: 'Full-flat openable bespoke photobooks for UK clients.',
      },
      {
        name: 'Boxes & Bags (UK)',
        path: '/box-and-bags-for-uk',
        description: 'Buckram display boxes and presentation packaging for UK studios.',
      },
      {
        name: 'Slip-In Albums (UK)',
        path: '/slip-in-albums-for-uk',
        description: 'Pocket gift albums and studio promotional collections.',
      },
      {
        name: 'Image Editing (UK)',
        path: '/image-editing-for-uk',
        description: 'Dedicated post-production and retouching services for UK photographers.',
      },
      {
        name: 'Photography (UK)',
        path: '/photography-for-uk',
        description: 'Bespoke wedding and destination event coverage for UK couples.',
      },
    ],
  },
  {
    name: 'About Us',
    path: '/about-us',
  },
  {
    name: 'Blogs',
    path: '/blogs',
  },
  {
    name: 'Contact Us',
    path: '/contact-us',
  },
];

export const allPagesInventory = [
  { id: 1, name: 'Home', path: '/', category: 'Core' },
  { id: 2, name: 'About Us', path: '/about-us', category: 'Core' },
  { id: 3, name: 'Flush Mount Album', path: '/flush-mount-album', category: 'Products' },
  { id: 4, name: 'Layflat', path: '/layflat', category: 'Products' },
  { id: 5, name: 'Photo Book', path: '/photo-book', category: 'Products' },
  { id: 6, name: 'Luxury Albums', path: '/luxury-albums', category: 'Products' },
  { id: 7, name: 'Box and Bags', path: '/box-and-bags', category: 'Products' },
  { id: 8, name: 'Slip-In Albums', path: '/slip-in-albums', category: 'Products' },
  { id: 9, name: 'Image Editing', path: '/image-editing', category: 'Services' },
  { id: 10, name: 'Wedding Photography', path: '/photography', category: 'Services' },
  { id: 11, name: 'Flush Mount Album For UK', path: '/flush-mount-album-for-uk', category: 'UK' },
  { id: 12, name: 'Luxury Albums For UK', path: '/luxury-albums-for-uk', category: 'UK' },
  { id: 13, name: 'Box and Bags For UK', path: '/box-and-bags-for-uk', category: 'UK' },
  { id: 14, name: 'Slip-In Albums For UK', path: '/slip-in-albums-for-uk', category: 'UK' },
  { id: 15, name: 'Image Editing For UK', path: '/image-editing-for-uk', category: 'UK' },
  { id: 16, name: 'Photo Book For UK', path: '/photo-book-for-uk', category: 'UK' },
  { id: 17, name: 'Photography For UK', path: '/photography-for-uk', category: 'UK' },
  { id: 18, name: 'Album Designing', path: '/album-designing', category: 'Services' },
  { id: 19, name: 'Contact Us', path: '/contact-us', category: 'Core' },
  { id: 20, name: 'Blogs', path: '/blogs', category: 'Core' },
];

