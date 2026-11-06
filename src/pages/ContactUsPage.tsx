import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { companyDetails } from '../data/company';
import { InquiryForm } from '../components/common/InquiryForm';
import { MapPin, Phone, Mail, Clock, ArrowUpRight, MessageCircle } from 'lucide-react';

export const ContactUsPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const prefilledService = searchParams.get('service') || searchParams.get('product') || '';

  useEffect(() => {
    document.title = "Contact Us | Let's Create Something Beautiful Together | Ultraa Albums";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Connect with Ultraa Albums in Dahisar East, Mumbai. Inquire for custom hand-bound flush mount albums, photo books, luxury wooden caskets, and professional image editing.'
      );
    }
  }, []);

  return (
    <div className="bg-ivory text-charcoal">
      {/* 1. Hero Section */}
      <section className="py-20 lg:py-28 bg-white border-b border-charcoal/5">
        <div className="section-container text-center max-w-3xl space-y-4">
          <span className="text-[10px] uppercase tracking-luxury text-secondary font-semibold">
            Connect With Our Atelier
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-charcoal leading-tight">
            Let's create something beautiful together.
          </h1>
          <p className="text-xs sm:text-sm text-secondary font-light max-w-2xl mx-auto leading-relaxed">
            Whether you are a wedding photographer inquiring for our 10% studio sample, an international studio organizing express delivery to the UK or USA, or a couple creating an heirloom, our team in Mumbai is here to help.
          </p>
        </div>
      </section>

      {/* 2. Main Two-Column Layout */}
      <section className="py-20 lg:py-28 bg-ivory">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* LEFT COLUMN: Contact Details & Google Maps Embed */}
            <div className="lg:col-span-5 space-y-10">
              {/* Brand Logo Presentation */}
              <div className="p-8 bg-white border border-charcoal/10 rounded-sm shadow-soft-sm flex items-center justify-between">
                <div>
                  <img
                    src="/images/logo.webp"
                    alt="Ultraa Albums"
                    className="h-12 sm:h-14 w-auto object-contain"
                  />
                  <span className="block text-[9px] uppercase tracking-luxury text-secondary mt-1">
                    Artisan Heirlooms · Founded 2012 Mumbai
                  </span>
                </div>
                <div className="text-right text-[10px] uppercase tracking-luxury text-secondary">
                  <span>Atelier & Office</span>
                </div>
              </div>

              {/* Address */}
              <div className="p-8 bg-white border border-charcoal/10 rounded-sm shadow-soft-sm space-y-3">
                <div className="flex items-center gap-2.5 text-charcoal font-medium">
                  <MapPin className="w-5 h-5 text-secondary shrink-0" />
                  <h3 className="font-serif text-xl">Atelier & Workshop Address</h3>
                </div>
                <p className="text-xs sm:text-sm text-secondary font-light leading-relaxed pl-7">
                  Shree Krishna Ind. Estate, Near Toll Naka, 211, Western Express Hwy, Dahisar East, Mumbai 400068, India.
                </p>
              </div>

              {/* Direct Phone Lines */}
              <div className="p-8 bg-white border border-charcoal/10 rounded-sm shadow-soft-sm space-y-4">
                <div className="flex items-center gap-2.5 text-charcoal font-medium">
                  <Phone className="w-5 h-5 text-secondary shrink-0" />
                  <h3 className="font-serif text-xl">Call or WhatsApp</h3>
                </div>
                <div className="space-y-3 pl-7 text-xs sm:text-sm text-secondary font-light">
                  <div className="flex items-center justify-between">
                    <a
                      href="tel:+919322254315"
                      className="text-charcoal hover:underline font-normal flex items-center gap-2"
                    >
                      <span>+91-93222 54315</span>
                    </a>
                    <a
                      href="https://wa.me/919322254315"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] text-secondary hover:text-charcoal flex items-center gap-1"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-charcoal/5">
                    <a
                      href="tel:+919320054315"
                      className="text-charcoal hover:underline font-normal flex items-center gap-2"
                    >
                      <span>+91-93200 54315</span>
                    </a>
                    <a
                      href="https://wa.me/919320054315"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] text-secondary hover:text-charcoal flex items-center gap-1"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Studio Emails */}
              <div className="p-8 bg-white border border-charcoal/10 rounded-sm shadow-soft-sm space-y-4">
                <div className="flex items-center gap-2.5 text-charcoal font-medium">
                  <Mail className="w-5 h-5 text-secondary shrink-0" />
                  <h3 className="font-serif text-xl">Studio Emails</h3>
                </div>
                <div className="space-y-2.5 pl-7 text-xs sm:text-sm text-secondary font-light">
                  <div>
                    <a
                      href="mailto:ultraaalbums@gmail.com"
                      className="text-charcoal hover:underline font-normal block"
                    >
                      ultraaalbums@gmail.com
                    </a>
                    <span className="text-[11px] text-secondary/70">General studio inquiries & order processing</span>
                  </div>
                  <div className="pt-2 border-t border-charcoal/5">
                    <a
                      href="mailto:ultraadesignes@gmail.com"
                      className="text-charcoal hover:underline font-normal block"
                    >
                      ultraadesignes@gmail.com
                    </a>
                    <span className="text-[11px] text-secondary/70">Album designing, soft-copy proofs & revisions</span>
                  </div>
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className="p-2 bg-white border border-charcoal/10 rounded-sm shadow-soft-sm">
                <div className="w-full h-72 sm:h-80 rounded-sm overflow-hidden bg-ivory">
                  <iframe
                    title="Ultraa Albums Location - Shree Krishna Ind. Estate, Dahisar East, Mumbai"
                    src="https://maps.google.com/maps?q=Shree+Krishna+Ind.+Estate+Western+Express+Highway+Dahisar+East+Mumbai+400068&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="p-3 text-center">
                  <a
                    href="https://maps.google.com/?q=Shree+Krishna+Ind.+Estate+Western+Express+Highway+Dahisar+East+Mumbai+400068"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-secondary hover:text-charcoal transition-colors underline"
                  >
                    <span>Open in Google Maps Application</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="sticky top-28">
                <InquiryForm
                  title="Send Us Your Project Details"
                  subtitle="Fill in your details below. Rajiv, Mayank, and Bhairavi review every inquiry personally and respond within 24 hours."
                  defaultProductOrService={prefilledService}
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Global Shipping & Studio Hours */}
      <section className="py-16 bg-white border-t border-charcoal/5">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="p-6 bg-ivory/60 border border-charcoal/5 rounded-sm space-y-2">
              <div className="flex items-center justify-center md:justify-start gap-2 text-charcoal font-medium text-xs">
                <Clock className="w-4 h-4 text-secondary" />
                <span>Atelier Hours</span>
              </div>
              <p className="text-xs text-secondary leading-relaxed font-light">
                Monday – Saturday: 10:00 AM – 7:30 PM IST.<br />
                Emails and digital WhatsApp inquiries monitored daily.
              </p>
            </div>

            <div className="p-6 bg-ivory/60 border border-charcoal/5 rounded-sm space-y-2">
              <div className="flex items-center justify-center md:justify-start gap-2 text-charcoal font-medium text-xs">
                <MapPin className="w-4 h-4 text-secondary" />
                <span>Worldwide Delivery</span>
              </div>
              <p className="text-xs text-secondary leading-relaxed font-light">
                Export cartons with moisture-proof wrapping delivered safely to UK, USA, Canada, Europe, NZ & worldwide.
              </p>
            </div>

            <div className="p-6 bg-ivory/60 border border-charcoal/5 rounded-sm space-y-2">
              <div className="flex items-center justify-center md:justify-start gap-2 text-charcoal font-medium text-xs">
                <ArrowUpRight className="w-4 h-4 text-secondary" />
                <span>Pay Online</span>
              </div>
              <p className="text-xs text-secondary leading-relaxed font-light">
                Secure international payment processing via verified PayPal integration.
              </p>
              <div className="pt-1">
                <a
                  href={companyDetails.paypalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-charcoal font-medium underline"
                >
                  <span>Pay Online via PayPal</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
