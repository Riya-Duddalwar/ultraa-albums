import React from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
  Award,
  ShieldCheck,
  Globe,
  MessageCircle,
} from 'lucide-react';
import { companyDetails } from '../data/company';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-ivory border-t border-charcoal/10 text-charcoal">
      {/* 1. Upper Trust & Guarantee Bar */}
      <div className="border-b border-charcoal/5 py-8 bg-beige-warm/20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-4">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-soft-sm text-charcoal shrink-0">
              <Award className="w-5 h-5 text-secondary" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-luxury font-semibold">100% Quality Guarantee</div>
              <div className="text-xs text-secondary mt-0.5">Master artisan hand-bound bookbinding</div>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-4">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-soft-sm text-charcoal shrink-0">
              <Globe className="w-5 h-5 text-secondary" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-luxury font-semibold">Worldwide Delivery</div>
              <div className="text-xs text-secondary mt-0.5">Intact arrival assurance across UK, US, NZ, CA & EU</div>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-4">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-soft-sm text-charcoal shrink-0">
              <ShieldCheck className="w-5 h-5 text-secondary" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-luxury font-semibold">Privacy & Security</div>
              <div className="text-xs text-secondary mt-0.5">Strict confidentiality for all client photographs</div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Footer Links Grid */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          
          {/* Col 1 & 2: Brand, Studio Info & Verified Contact Channels */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block" aria-label="Ultraa Albums Home">
              <img
                src="/images/logo.webp"
                alt="Ultraa Albums"
                className="h-10 sm:h-12 w-auto object-contain mb-2"
              />
              <span className="block text-[9px] uppercase tracking-luxury text-secondary">
                Artisan Heirlooms · Founded 2012 Mumbai
              </span>
            </Link>
            <p className="text-xs text-secondary leading-relaxed max-w-sm font-light">
              India’s premier artisan wedding photo album book designer and manufacturer. We specialize in archival Fuji Crystal Archive silver halide prints, hand-bound panoramic spreads, and tailored presentation packaging for professional studios worldwide.
            </p>

            <div className="pt-2">
              <div className="inline-block bg-white border border-charcoal/10 p-3.5 rounded-sm text-xs text-charcoal/90 shadow-soft-sm">
                <span className="font-medium text-charcoal">"We Invest In You"</span>
                <span className="block text-[11px] text-secondary mt-0.5 font-light">
                  10% studio sample discount for professional wedding photographers.
                </span>
              </div>
            </div>

            {/* Verified Direct Communication Channels */}
            <div className="pt-2">
              <span className="block text-[10px] uppercase tracking-luxury text-secondary font-semibold mb-2">
                Direct Communication Channels
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href="https://wa.me/919322254315"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-sm bg-white border border-charcoal/10 text-charcoal hover:bg-charcoal hover:text-white transition-colors text-xs flex items-center gap-1.5 shadow-soft-sm"
                  aria-label="Ultraa Albums WhatsApp Line 1"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-secondary group-hover:text-white" />
                  <span>WhatsApp Line 1</span>
                </a>
                <a
                  href="https://wa.me/919320054315"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-sm bg-white border border-charcoal/10 text-charcoal hover:bg-charcoal hover:text-white transition-colors text-xs flex items-center gap-1.5 shadow-soft-sm"
                  aria-label="Ultraa Albums WhatsApp Line 2"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-secondary group-hover:text-white" />
                  <span>WhatsApp Line 2</span>
                </a>
              </div>
            </div>
          </div>

          {/* Col 3: Products */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-luxury font-semibold text-charcoal">Products</h4>
            <ul className="space-y-2 text-xs text-secondary font-light">
              <li><Link to="/flush-mount-album" className="hover:text-charcoal transition-colors">Flush Mount Albums</Link></li>
              <li><Link to="/layflat" className="hover:text-charcoal transition-colors">Layflat Albums</Link></li>
              <li><Link to="/photo-book" className="hover:text-charcoal transition-colors">Photo Books</Link></li>
              <li><Link to="/luxury-albums" className="hover:text-charcoal transition-colors">Luxury Albums</Link></li>
              <li><Link to="/box-and-bags" className="hover:text-charcoal transition-colors">Boxes & Bags</Link></li>
              <li><Link to="/slip-in-albums" className="hover:text-charcoal transition-colors">Slip-In Albums</Link></li>
            </ul>
          </div>

          {/* Col 4: Studio Services */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-luxury font-semibold text-charcoal">Services</h4>
            <ul className="space-y-2 text-xs text-secondary font-light">
              <li><Link to="/album-designing" className="hover:text-charcoal transition-colors">Album Designing</Link></li>
              <li><Link to="/image-editing" className="hover:text-charcoal transition-colors">Image Editing (Free RAW)</Link></li>
              <li><Link to="/photography" className="hover:text-charcoal transition-colors">Wedding Photography</Link></li>
              <li><Link to="/blogs" className="hover:text-charcoal transition-colors">Journal & Stories</Link></li>
              <li><Link to="/about-us" className="hover:text-charcoal transition-colors">About Our Atelier</Link></li>
              <li><Link to="/contact-us" className="hover:text-charcoal transition-colors">Request a Consultation</Link></li>
            </ul>
          </div>

          {/* Col 5: UK Specific Collection */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-luxury font-semibold text-charcoal">UK Collection</h4>
            <ul className="space-y-2 text-xs text-secondary font-light">
              <li><Link to="/flush-mount-album-for-uk" className="hover:text-charcoal transition-colors">Flush Mount (UK)</Link></li>
              <li><Link to="/luxury-albums-for-uk" className="hover:text-charcoal transition-colors">Luxury Albums (UK)</Link></li>
              <li><Link to="/box-and-bags-for-uk" className="hover:text-charcoal transition-colors">Box and Bags (UK)</Link></li>
              <li><Link to="/slip-in-albums-for-uk" className="hover:text-charcoal transition-colors">Slip-In Albums (UK)</Link></li>
              <li><Link to="/image-editing-for-uk" className="hover:text-charcoal transition-colors">Image Editing (UK)</Link></li>
              <li><Link to="/photo-book-for-uk" className="hover:text-charcoal transition-colors">Photo Book (UK)</Link></li>
              <li><Link to="/photography-for-uk" className="hover:text-charcoal transition-colors">Photography (UK)</Link></li>
            </ul>
          </div>

          {/* Col 6: Workshop Address, Phones & PayPal */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-luxury font-semibold text-charcoal">Atelier & Contact</h4>
            <div className="space-y-2.5 text-xs text-secondary font-light">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 mt-0.5 text-charcoal shrink-0" />
                <span className="leading-snug">
                  Shree Krishna Ind. Estate, Near Toll Naka, 211, Western Express Hwy, Dahisar East, Mumbai 400068, India.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-3.5 h-3.5 mt-0.5 text-charcoal shrink-0" />
                <div className="flex flex-col space-y-0.5">
                  <a href="tel:+919322254315" className="hover:text-charcoal transition-colors">
                    +91-93222 54315
                  </a>
                  <a href="tel:+919320054315" className="hover:text-charcoal transition-colors">
                    +91-93200 54315
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-3.5 h-3.5 mt-0.5 text-charcoal shrink-0" />
                <div className="flex flex-col space-y-0.5">
                  <a href="mailto:ultraaalbums@gmail.com" className="hover:text-charcoal transition-colors">
                    ultraaalbums@gmail.com
                  </a>
                  <a href="mailto:ultraadesignes@gmail.com" className="hover:text-charcoal transition-colors">
                    ultraadesignes@gmail.com
                  </a>
                </div>
              </div>

              {/* Verified PayPal Payment Link */}
              <div className="pt-2 border-t border-charcoal/10">
                <a
                  href={companyDetails.paypalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-charcoal font-medium hover:underline"
                >
                  <span>Pay Online (PayPal)</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
                <span className="block text-[10px] text-secondary/70 mt-0.5">
                  Verified PayPal destination for international orders
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* 3. Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-charcoal/10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-secondary gap-4">
          <p>© {new Date().getFullYear()} Ultraa Albums. All rights reserved. Handcrafted Heirlooms in Dahisar East, Mumbai.</p>
          <div className="flex items-center gap-6">
            <Link to="/about-us" className="hover:text-charcoal transition-colors">About Us</Link>
            <Link to="/contact-us" className="hover:text-charcoal transition-colors">Contact Us</Link>
            <Link to="/blogs" className="hover:text-charcoal transition-colors">Journal</Link>
            <a
              href={companyDetails.paypalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-charcoal transition-colors inline-flex items-center gap-0.5"
            >
              <span>Pay Online</span>
              <ArrowUpRight className="w-2.5 h-2.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
