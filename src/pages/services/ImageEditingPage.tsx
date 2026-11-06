import React from 'react';
import { Link } from 'react-router-dom';
import { ServiceHero } from '../../components/services/ServiceHero';
import { ServiceFeature, ServiceScopeItem } from '../../components/services/ServiceFeature';
import { BeforeAfterSlider } from '../../components/services/BeforeAfterSlider';
import { SectionHeading } from '../../components/common/SectionHeading';
import { Sparkles, Check, Award, Mail, ArrowUpRight, Scissors, Sun, Sparkle, Film, ShoppingBag, ArrowRight } from 'lucide-react';

export const ImageEditingPage: React.FC = () => {
  const editingServices: ServiceScopeItem[] = [
    {
      title: 'Image Cutouts & Precision Clipping Paths',
      description: 'Hand-drawn vector pen-tool clipping paths and hair masking for clean, artifact-free subject isolation on transparent or solid backgrounds.',
      tag: 'PRECISION PATHS',
      icon: <Scissors className="w-4 h-4 text-secondary" />,
    },
    {
      title: 'Dynamic Brightness & Contrast Balancing',
      description: 'Balancing extreme shadow and highlight detail in backlit bridal portraits or high-contrast outdoor ceremony captures without blowing out highlights.',
      tag: 'DYNAMIC RANGE',
      icon: <Sun className="w-4 h-4 text-secondary" />,
    },
    {
      title: 'Scratch, Crease & Dust Spot Removal',
      description: 'Meticulous healing and sensor dust spot removal, plus restoration of vintage, creased, or damaged archival family photographs.',
      tag: 'RESTORATION',
      icon: <Sparkles className="w-4 h-4 text-secondary" />,
    },
    {
      title: 'Light & Color Temperature Correction',
      description: 'Harmonizing mixed artificial lighting (tungsten, halogens, LED stage lights) with ambient natural daylight across entire wedding galleries.',
      tag: 'COLOR HARMONY',
      icon: <Sun className="w-4 h-4 text-secondary" />,
    },
    {
      title: 'High-End Beauty & Glamour Retouching',
      description: 'Natural frequency separation for clean skin texture, flyaway hair cleanup, blemish reduction, eye brightening, and teeth whitening without a plastic look.',
      tag: 'SKIN RETOUCH',
      icon: <Sparkle className="w-4 h-4 text-secondary" />,
    },
    {
      title: 'Distraction & Object Removal',
      description: 'Seamless removal of background photobombers, exit signs, microphones, wires, and unsightly litter to keep the focus purely on your couple.',
      tag: 'CLEANUP',
      icon: <Scissors className="w-4 h-4 text-secondary" />,
    },
    {
      title: 'E-Commerce Commercial Product Editing',
      description: 'High-volume product silo clipping, drop shadow generation, reflection mapping, and color-matching for commercial catalogs and online stores.',
      tag: 'COMMERCIAL',
      icon: <ShoppingBag className="w-4 h-4 text-secondary" />,
    },
    {
      title: 'Cinematic Video Editing & Color Grading',
      description: 'Documentary timeline assembly, multi-camera audio syncing, cinematic LUT application, and highlight reel generation for wedding filmmakers.',
      tag: 'CINEMATOGRAPHY',
      icon: <Film className="w-4 h-4 text-secondary" />,
    },
  ];

  return (
    <div className="bg-ivory text-charcoal">
      {/* 1. Hero */}
      <ServiceHero
        title="Every image deserves its best."
        subtitle="Ultraa Albums provides master digital image correction, frequency separation skin retouching, and pro-lab color science powered by 10+ years of Adobe Photoshop and Lightroom expertise."
        categoryTag="Post-Production & Retouching Studio"
        image="/images/services/editing-hero.svg"
        imageAlt="Ultraa Albums Professional Image Editing"
        badges={['Photoshop & Lightroom Masters', 'Free 1-2 RAW Test Sample', 'Global Studio Turnarounds']}
        ctaPrimaryText="Request a Free Sample"
        ctaPrimaryAnchor="#free-sample-section"
        ctaSecondaryText="Explore 8 Service Scopes"
        ctaSecondaryAnchor="#editing-scopes"
      />

      {/* 2. Section A: Introduction & Studio Expertise */}
      <section className="py-20 lg:py-28 bg-white border-b border-charcoal/5">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-[10px] uppercase tracking-luxury text-secondary font-semibold">
                Section A · Studio Background
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-charcoal leading-tight">
                10+ Years Dedicated to Photographic Excellence
              </h2>

              <p className="text-xs sm:text-sm text-secondary font-light leading-relaxed">
                Ultraa Albums is a 10+ years young organization serving wedding photographers, portrait studios, and commercial enterprises across India, the United States, the United Kingdom, New Zealand, Canada, and Europe.
              </p>

              <p className="text-xs sm:text-sm text-secondary font-light leading-relaxed">
                Our image correction and enhancement artists digitally restore, repair, retouch, and enhance the quality of imperfect captures — all without harming the original image's authentic soul or texture.
              </p>

              <div className="p-5 bg-ivory border border-charcoal/10 rounded-sm space-y-2">
                <div className="text-[11px] uppercase tracking-luxury font-semibold text-charcoal">
                  Our Software Mastery & Human Values
                </div>
                <p className="text-xs text-secondary leading-relaxed font-light">
                  Our senior retouchers possess more than a decade of mastery in <strong>Adobe Photoshop</strong> and <strong>Lightroom</strong>. Driven by sound human values and responsive communication, Ultraa Albums consistently delivers on our commitments.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="aspect-[4/3] rounded-sm overflow-hidden bg-ivory border border-charcoal/10 shadow-card">
                <img
                  src="/images/services/editing-hero.svg"
                  alt="Adobe Lightroom and Photoshop Color Grading by Ultraa Albums"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Section B: Comprehensive Services Offered (8 Scopes) */}
      <div id="editing-scopes">
        <ServiceFeature
          tag="Complete Menu"
          title="Full Scope of Post-Production Services"
          subtitle="From single high-end portrait frequency separation to volume wedding gallery culling and Lightroom color harmony."
          features={editingServices}
        />
      </div>

      {/* 4. Section C: Before-and-After Interactive Comparison Slider */}
      <BeforeAfterSlider />

      {/* 5. Section E: Free Sample Offer */}
      <section id="free-sample-section" className="py-20 lg:py-28 bg-beige-warm/30 border-b border-charcoal/5">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-white rounded-full text-[10px] uppercase tracking-luxury text-secondary font-semibold border border-charcoal/10">
              <Sparkles className="w-3.5 h-3.5 text-dusty-rose" />
              <span>Risk-Free Studio Evaluation</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-medium text-charcoal leading-tight">
              "Try our work before you decide."
            </h2>

            <p className="text-xs sm:text-base text-secondary font-light leading-relaxed max-w-xl mx-auto">
              If you want to test our editing quality, simply send us 1 or 2 RAW camera files with your specific editing instructions and preferred color profile. We will retouch and return them completely free — our work will speak for itself.
            </p>

            {/* How to submit raw files explanation without fake upload */}
            <div className="p-6 bg-white border border-charcoal/10 rounded-sm text-left max-w-xl mx-auto shadow-soft-sm space-y-3">
              <h4 className="text-xs uppercase tracking-luxury font-semibold text-charcoal">
                How to Submit Your Free Test RAW Files:
              </h4>
              <ol className="list-decimal list-inside text-xs text-secondary space-y-2 font-light">
                <li>Submit the inquiry form below with your contact details and studio profile.</li>
                <li>Share your 1-2 RAW files via <strong>WeTransfer</strong>, <strong>Google Drive</strong>, or <strong>Dropbox</strong> link in the message field.</li>
                <li>Or email your RAW images directly to <span className="font-semibold text-charcoal">ultraaalbums@gmail.com</span> with the subject line <em>"Free RAW Sample Request"</em>.</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA / Free Sample Request */}
      <section className="py-20 bg-ivory border-t border-charcoal/5">
        <div className="section-container text-center max-w-3xl mx-auto space-y-6">
          <span className="text-[10px] uppercase tracking-luxury text-secondary font-semibold">
            Claim Your Free Sample
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-medium text-charcoal leading-tight">
            Ready to test our retouching quality?
          </h2>
          <p className="text-xs sm:text-sm text-secondary font-light max-w-xl mx-auto leading-relaxed">
            Send us 1–2 test RAW files. Our senior colorists will perform a complimentary grade so you can evaluate skin tones, highlights, and shadow recovery firsthand.
          </p>
          <div className="pt-4 flex justify-center">
            <Link to="/contact-us" className="btn-luxury-primary">
              <span>Get in Touch</span>
              <ArrowRight className="w-3.5 h-3.5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

