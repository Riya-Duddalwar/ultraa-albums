import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, ArrowUpRight, Phone, Globe } from 'lucide-react';
import { companyDetails } from '../data/company';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [ukDropdownOpen, setUkDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setProductsDropdownOpen(false);
    setServicesDropdownOpen(false);
    setUkDropdownOpen(false);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isProductsActive = [
    '/flush-mount-album',
    '/layflat',
    '/photo-book',
    '/luxury-albums',
    '/box-and-bags',
    '/slip-in-albums',
  ].includes(location.pathname);

  const isServicesActive = [
    '/album-designing',
    '/image-editing',
    '/photography',
  ].includes(location.pathname);

  const isUkActive = location.pathname.includes('-for-uk');

  const productMenuItems = [
    {
      name: 'Flush Mount Albums',
      path: '/flush-mount-album',
      subtitle: 'Archival silver halide prints mounted on rigid substrate.',
    },
    {
      name: 'Layflat Albums',
      path: '/layflat',
      subtitle: '180° flat opening with zero center gutter interruption.',
    },
    {
      name: 'Luxury Albums',
      path: '/luxury-albums',
      subtitle: 'Hand-worked leather paired with bespoke wooden casket.',
    },
    {
      name: 'Photo Books',
      path: '/photo-book',
      subtitle: 'Bookstore-quality hardcovers with non-tearable paper.',
    },
    {
      name: 'Boxes & Bags',
      path: '/box-and-bags',
      subtitle: 'Hardwood leatherette boxes, Buckram cases & soft bags.',
    },
    {
      name: 'Slip-In Albums',
      path: '/slip-in-albums',
      subtitle: 'Moisture-proof pocket albums holding up to 500 prints.',
    },
  ];

  const ukMenuItems = [
    {
      name: 'Flush Mount Album (UK)',
      path: '/flush-mount-album-for-uk',
      subtitle: 'Hand-bound silver halide wedding albums with UK tracked delivery.',
    },
    {
      name: 'Luxury Albums (UK)',
      path: '/luxury-albums-for-uk',
      subtitle: 'Artisan leather & personalized wooden casket suite.',
    },
    {
      name: 'Boxes & Bags (UK)',
      path: '/box-and-bags-for-uk',
      subtitle: 'Hardwood frames, Buckram display boxes & carry handles.',
    },
    {
      name: 'Slip-In Albums (UK)',
      path: '/slip-in-albums-for-uk',
      subtitle: 'Moisture-proof pocket albums holding 200–500 loose prints.',
    },
    {
      name: 'Image Editing (UK)',
      path: '/image-editing-for-uk',
      subtitle: 'Post-production retouching with free 1-2 RAW test edits.',
    },
    {
      name: 'Photo Book (UK)',
      path: '/photo-book-for-uk',
      subtitle: 'Flat-openable hardcovers with non-tearable paper.',
    },
    {
      name: 'Photography (UK)',
      path: '/photography-for-uk',
      subtitle: 'Destination wedding photography & multi-angle cinematics.',
    },
  ];

  return (
    <header
      className={`sticky top-0 z-50 bg-ivory/95 backdrop-blur-md transition-all duration-300 ${
        scrolled ? 'border-b border-charcoal/10 shadow-soft-sm' : 'border-b border-charcoal/5'
      }`}
    >
      {/* Top subtle bar */}
      <div className="bg-charcoal text-ivory text-[10px] sm:text-[11px] py-1 px-4 tracking-subtle border-b border-charcoal/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline">Handcrafted In Mumbai · Fuji Silver Halide Prints</span>
            <span className="hidden sm:inline text-dusty-rose">·</span>
            <span>Worldwide Delivery (US, UK, NZ, CA, EU)</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${companyDetails.phoneNumbers[0].replace(/\s+/g, '')}`}
              className="flex items-center gap-1 hover:text-white transition-colors"
            >
              <Phone className="w-2.5 h-2.5 opacity-70" />
              <span className="hidden md:inline">{companyDetails.phoneNumbers[0]}</span>
            </a>
            <span className="text-secondary opacity-40">|</span>
            <a
              href={companyDetails.paypalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-white transition-colors text-rose-pastel font-medium"
            >
              <span>Pay Online</span>
              <ArrowUpRight className="w-2.5 h-2.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Bar */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-18 sm:h-20">
          {/* Logo on the Left */}
          <Link to="/" className="flex items-center shrink-0 py-1" aria-label="Ultraa Albums Home">
            <img
              src="/images/logo.webp"
              alt="Ultraa Albums"
              className="h-9 sm:h-11 w-auto object-contain transition-opacity hover:opacity-90"
            />
          </Link>

          {/* Navigation in the Middle */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-6 xl:gap-7 text-xs uppercase tracking-luxury font-medium"
          >
            {/* HOME */}
            <Link
              to="/"
              className={`py-2 transition-colors ${
                location.pathname === '/' ? 'text-charcoal border-b border-charcoal' : 'text-secondary hover:text-charcoal'
              }`}
            >
              Home
            </Link>

            {/* PRODUCTS Dropdown (Structured same as Services) */}
            <div
              className="relative py-2"
              onMouseEnter={() => {
                setProductsDropdownOpen(true);
                setServicesDropdownOpen(false);
                setUkDropdownOpen(false);
              }}
              onMouseLeave={() => setProductsDropdownOpen(false)}
            >
              <button
                type="button"
                aria-expanded={productsDropdownOpen}
                onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                className={`flex items-center gap-1 transition-colors ${
                  isProductsActive || productsDropdownOpen
                    ? 'text-charcoal border-b border-charcoal'
                    : 'text-secondary hover:text-charcoal'
                }`}
              >
                <span>Products</span>
                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${productsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {productsDropdownOpen && (
                <div className="absolute top-full left-0 w-80 pt-2 z-50">
                  <div className="bg-white border border-charcoal/10 shadow-soft-lg p-3 rounded-sm space-y-1">
                    {productMenuItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="block p-2.5 hover:bg-ivory/80 rounded transition-colors group"
                      >
                        <div className="text-xs font-semibold text-charcoal group-hover:text-black">
                          {item.name}
                        </div>
                        <div className="text-[11px] text-secondary mt-0.5 line-clamp-1">
                          {item.subtitle}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* SERVICES Dropdown */}
            <div
              className="relative py-2"
              onMouseEnter={() => {
                setServicesDropdownOpen(true);
                setProductsDropdownOpen(false);
                setUkDropdownOpen(false);
              }}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                type="button"
                aria-expanded={servicesDropdownOpen}
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className={`flex items-center gap-1 transition-colors ${
                  isServicesActive || servicesDropdownOpen
                    ? 'text-charcoal border-b border-charcoal'
                    : 'text-secondary hover:text-charcoal'
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-72 pt-2 z-50">
                  <div className="bg-white border border-charcoal/10 shadow-soft-lg p-3 rounded-sm space-y-1">
                    <Link
                      to="/album-designing"
                      className="block p-2.5 hover:bg-ivory/80 rounded transition-colors group"
                    >
                      <div className="text-xs font-semibold text-charcoal group-hover:text-black">
                        Album Designing
                      </div>
                      <div className="text-[11px] text-secondary mt-0.5 line-clamp-1">
                        Bespoke layouts with unlimited soft-copy revisions.
                      </div>
                    </Link>

                    <Link
                      to="/image-editing"
                      className="block p-2.5 hover:bg-ivory/80 rounded transition-colors group"
                    >
                      <div className="text-xs font-semibold text-charcoal group-hover:text-black">
                        Image Editing
                      </div>
                      <div className="text-[11px] text-secondary mt-0.5 line-clamp-1">
                        Pro color grading & retouching with free RAW sample.
                      </div>
                    </Link>

                    <Link
                      to="/photography"
                      className="block p-2.5 hover:bg-ivory/80 rounded transition-colors group"
                    >
                      <div className="text-xs font-semibold text-charcoal group-hover:text-black">
                        Wedding Photography
                      </div>
                      <div className="text-[11px] text-secondary mt-0.5 line-clamp-1">
                        15+ skilled photographers & cinematography team.
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* ABOUT US */}
            <Link
              to="/about-us"
              className={`py-2 transition-colors ${
                location.pathname === '/about-us' ? 'text-charcoal border-b border-charcoal' : 'text-secondary hover:text-charcoal'
              }`}
            >
              About Us
            </Link>

            {/* UK Mega / Dropdown Menu */}
            <div
              className="relative py-2"
              onMouseEnter={() => {
                setUkDropdownOpen(true);
                setProductsDropdownOpen(false);
                setServicesDropdownOpen(false);
              }}
              onMouseLeave={() => setUkDropdownOpen(false)}
            >
              <button
                type="button"
                aria-expanded={ukDropdownOpen}
                onClick={() => setUkDropdownOpen(!ukDropdownOpen)}
                className={`flex items-center gap-1 transition-colors ${
                  isUkActive || ukDropdownOpen
                    ? 'text-charcoal border-b border-charcoal'
                    : 'text-secondary hover:text-charcoal'
                }`}
              >
                <span>UK</span>
                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${ukDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {ukDropdownOpen && (
                <div className="absolute top-full -left-12 w-80 pt-2 z-50">
                  <div className="bg-white border border-charcoal/10 shadow-soft-lg p-3 rounded-sm space-y-1">
                    <div className="px-2.5 py-1.5 border-b border-charcoal/5 flex items-center justify-between">
                      <span className="text-[9px] uppercase tracking-luxury font-semibold text-secondary">
                        UK Collection
                      </span>
                      <span className="text-[9px] text-charcoal/70 bg-ivory px-2 py-0.5 rounded">
                        Tracked UK Shipping
                      </span>
                    </div>

                    {ukMenuItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="block p-2 hover:bg-ivory/80 rounded transition-colors group"
                      >
                        <div className="text-xs font-semibold text-charcoal group-hover:text-black">
                          {item.name}
                        </div>
                        <div className="text-[10px] text-secondary mt-0.5 line-clamp-1 font-light">
                          {item.subtitle}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* JOURNAL */}
            <Link
              to="/blogs"
              className={`py-2 transition-colors ${
                location.pathname === '/blogs' ? 'text-charcoal border-b border-charcoal' : 'text-secondary hover:text-charcoal'
              }`}
            >
              Journal
            </Link>

            {/* CONTACT */}
            <Link
              to="/contact-us"
              className={`py-2 transition-colors ${
                location.pathname === '/contact-us' ? 'text-charcoal border-b border-charcoal' : 'text-secondary hover:text-charcoal'
              }`}
            >
              Contact
            </Link>

            {/* PAY ONLINE */}
            <a
              href={companyDetails.paypalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 text-secondary hover:text-charcoal inline-flex items-center gap-1 transition-colors"
            >
              <span>Pay Online</span>
              <ArrowUpRight className="w-2.5 h-2.5 opacity-60" />
            </a>
          </nav>

          {/* Contact Us CTA on the Right */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/contact-us"
              className="btn-luxury-primary text-[11px] py-2.5 px-6"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              to="/contact-us"
              className="btn-luxury-primary text-[10px] py-2 px-3.5"
            >
              Contact
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-charcoal hover:text-black focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-charcoal/10 px-6 py-6 shadow-soft-lg max-h-[85vh] overflow-y-auto">
          <div className="space-y-4">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-xs uppercase tracking-luxury font-medium text-charcoal py-2 border-b border-charcoal/5"
            >
              Home
            </Link>

            {/* Products Accordion */}
            <div className="border-b border-charcoal/5 pb-3">
              <div className="text-[10px] uppercase tracking-luxury font-semibold text-secondary mb-2">
                Products
              </div>
              <div className="pl-3 space-y-2 border-l border-rose-pastel">
                <Link to="/flush-mount-album" onClick={() => setMobileMenuOpen(false)} className="block text-xs text-charcoal hover:text-black py-1">Flush Mount Albums</Link>
                <Link to="/layflat" onClick={() => setMobileMenuOpen(false)} className="block text-xs text-charcoal hover:text-black py-1">Layflat Albums</Link>
                <Link to="/luxury-albums" onClick={() => setMobileMenuOpen(false)} className="block text-xs text-charcoal hover:text-black py-1">Luxury Albums</Link>
                <Link to="/photo-book" onClick={() => setMobileMenuOpen(false)} className="block text-xs text-charcoal hover:text-black py-1">Photo Books</Link>
                <Link to="/slip-in-albums" onClick={() => setMobileMenuOpen(false)} className="block text-xs text-charcoal hover:text-black py-1">Slip-In Albums</Link>
                <Link to="/box-and-bags" onClick={() => setMobileMenuOpen(false)} className="block text-xs text-charcoal hover:text-black py-1">Boxes & Bags</Link>
              </div>
            </div>

            {/* Services Accordion */}
            <div className="border-b border-charcoal/5 pb-3">
              <div className="text-[10px] uppercase tracking-luxury font-semibold text-secondary mb-2">
                Services
              </div>
              <div className="pl-3 space-y-2 border-l border-rose-pastel">
                <Link to="/album-designing" onClick={() => setMobileMenuOpen(false)} className="block text-xs text-charcoal hover:text-black py-1">Album Designing</Link>
                <Link to="/image-editing" onClick={() => setMobileMenuOpen(false)} className="block text-xs text-charcoal hover:text-black py-1">Image Editing</Link>
                <Link to="/photography" onClick={() => setMobileMenuOpen(false)} className="block text-xs text-charcoal hover:text-black py-1">Wedding Photography</Link>
              </div>
            </div>

            {/* UK Collection Accordion (All 7 links) */}
            <div className="border-b border-charcoal/5 pb-3">
              <div className="text-[10px] uppercase tracking-luxury font-semibold text-secondary mb-2">
                UK Dedicated Collection
              </div>
              <div className="pl-3 space-y-2 border-l border-powder-blue">
                {ukMenuItems.map((ukItem) => (
                  <Link
                    key={ukItem.path}
                    to={ukItem.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-xs text-charcoal hover:text-black py-1"
                  >
                    {ukItem.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/about-us"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-xs uppercase tracking-luxury font-medium text-charcoal py-2 border-b border-charcoal/5"
            >
              About Us
            </Link>

            <Link
              to="/blogs"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-xs uppercase tracking-luxury font-medium text-charcoal py-2 border-b border-charcoal/5"
            >
              Journal
            </Link>

            <Link
              to="/contact-us"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-xs uppercase tracking-luxury font-medium text-charcoal py-2 border-b border-charcoal/5"
            >
              Contact Us
            </Link>

            <div className="pt-2">
              <a
                href={companyDetails.paypalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-xs py-2 text-charcoal font-medium"
              >
                <span>Pay Online (PayPal)</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-secondary" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
