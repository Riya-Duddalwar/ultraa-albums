import React from 'react';
import { Link } from 'react-router-dom';
import { ServiceHero } from '../../components/services/ServiceHero';
import { ProcessTimeline, ProcessStep } from '../../components/services/ProcessTimeline';
import { DesignThemeGallery } from '../../components/services/DesignThemeGallery';
import { ProductGallery } from '../../components/products/ProductGallery';
import { FullBleedSpreadBanner } from '../../components/common/FullBleedSpreadBanner';
import { SectionHeading } from '../../components/common/SectionHeading';
import { ProductAlbumViewer } from '../../components/album/ProductAlbumViewer';
import { designThemesAlbum } from '../../data/albumSpreads';
import { Sparkles, Check, Palette, Award, ShieldCheck, HeartHandshake, ArrowRight } from 'lucide-react';

export const AlbumDesigningPage: React.FC = () => {
  const processSteps: ProcessStep[] = [
    {
      step: '01',
      title: 'Photo Submission',
      description: 'Select your preferred album format and upload your high-resolution images via Google Drive, Dropbox, or WeTransfer in your desired chronological sequence.',
      highlight: 'Secure Cloud Upload',
    },
    {
      step: '02',
      title: 'Theme Selection',
      description: 'Choose from our 10 curated design themes (e.g. Clean Minimalist, Indian Fusion, Contemporary Fine Art) or let our designers recommend the optimal match.',
      highlight: '10 Curated Themes',
    },
    {
      step: '03',
      title: 'Professional Designing',
      description: 'Our senior album designers manually review your photos, select standout storytelling anchors, and craft balanced, bespoke non-template spreads.',
      highlight: 'Human Curated Curation',
    },
    {
      step: '04',
      title: 'Soft-Copy Digital Preview',
      description: 'We generate an online digital flip-book preview link for you and your clients to review each spread in full fidelity from any device.',
      highlight: 'Online Interactive Proofing',
    },
    {
      step: '05',
      title: 'Corrections & Unlimited Revisions',
      description: 'Submit your revision notes with complete peace of mind. Client satisfaction is our priority: we provide unlimited revisions until you are 100% satisfied.',
      highlight: 'Unlimited Free Revisions',
    },
    {
      step: '06',
      title: 'Final Approval & Printing',
      description: 'Once you grant final approval, your album files move seamlessly to our Mumbai workshop for pro-lab silver halide printing and hand-binding.',
      highlight: 'Direct Atelier Hand-Off',
    },
  ];

  const gallerySpreads = [
    {
      title: 'Classic Symmetrical Bridal Spread',
      subtitle: 'Harmonious framing highlighting bridal preparation and jewelry details.',
      image: '/images/gallery/wedding-1.jpg',
    },
    {
      title: 'Indian Fusion Celebration Spread',
      subtitle: 'Dynamic multi-photo narrative capturing the energy of celebration & dancing.',
      image: '/images/services/theme-indian-fusion.jpg',
    },
    {
      title: 'Baby Milestone & Heirloom Spread',
      subtitle: 'Heartwarming story layout recording precious early milestones.',
      image: '/images/services/theme-baby.jpg',
    },
    {
      title: 'Western Cinematic Panoramic Horizon',
      subtitle: 'Edge-to-edge landscape spread opening 180 degrees without gutter cuts.',
      image: '/images/gallery/wedding-2.jpg',
    },
  ];

  return (
    <div className="bg-ivory text-charcoal">
      {/* 1. Hero */}
      <ServiceHero
        title="Beautifully designed, thoughtfully told."
        subtitle="Ultraa Albums provides bespoke, non-template album design crafted by experienced human artists. Enjoy soft-copy digital previews and unlimited revisions until you are completely satisfied."
        categoryTag="Bespoke Album Designing Studio"
        image="/images/services/design-hero.jpg"
        imageAlt="Professional Album Designing Studio Ultraa Albums"
        badges={['Human Curated (No Templates)', 'Unlimited Soft-Copy Revisions', 'Free with Album Printing']}
        ctaPrimaryText="Get Started"
        ctaPrimaryAnchor="#service-inquiry"
        ctaSecondaryText="Explore 10 Themes"
        ctaSecondaryAnchor="#design-themes"
      />

      {/* 2. Free Designing Offer Highlight Banner */}
      <section className="py-6 bg-white border-b border-charcoal/5">
        <div className="section-container">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 bg-beige-warm/30 border border-charcoal/10 rounded-sm">
            <div className="flex items-center gap-3">
              <Award className="w-5 h-5 text-charcoal shrink-0" />
              <div className="text-xs text-charcoal leading-relaxed">
                <strong className="block text-sm font-serif">Yes! It is unbelievable, but true:</strong>
                <span>Our complete bespoke album designing service is provided <strong>completely free</strong> when paired with Ultraa Albums print manufacturing.</span>
              </div>
            </div>
            <a href="#service-inquiry" className="btn-luxury-primary text-[10px] py-2 px-5 shrink-0">
              Claim Free Design
            </a>
          </div>
        </div>
      </section>

      {/* 3. Section A: Why Professional Album Designing? */}
      <section className="py-20 lg:py-28 bg-white border-b border-charcoal/5">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-[10px] uppercase tracking-luxury text-secondary font-semibold">
                Creativity vs Automation
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-charcoal leading-tight">
                Why Professional Album Designing Over Software?
              </h2>

              <p className="text-xs sm:text-sm text-secondary font-light leading-relaxed">
                Thousands of automated online software tools claim you can design an album yourself in minutes. In reality, photographers and couples waste days learning clunky interfaces only to end up with rigid, generic templates with flat placements of photos on a page.
              </p>

              <p className="text-xs sm:text-sm text-secondary font-light leading-relaxed">
                A skilled human album designer does what no algorithm can: they manually look at your photo collection, understand the emotional cadence of the day, pick out the standout moments, and design balanced, bespoke spreads that honor the visual narrative.
              </p>

              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2 text-xs text-charcoal/90">
                  <Check className="w-3.5 h-3.5 text-secondary shrink-0" />
                  <span>Manual selection and artistic hierarchy for every spread</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-charcoal/90">
                  <Check className="w-3.5 h-3.5 text-secondary shrink-0" />
                  <span>Personalized font pairings, micro-margins, and bleed control</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-charcoal/90">
                  <Check className="w-3.5 h-3.5 text-secondary shrink-0" />
                  <span>Saves busy wedding photographers 15+ hours per client project</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="aspect-[4/3] rounded-sm overflow-hidden bg-ivory border border-charcoal/10 shadow-card">
                <img
                  src="/images/services/album-design-hero.svg"
                  alt="Professional Album Designing Process"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Section B: Our Designing Process (6 Stages) */}
      <ProcessTimeline steps={processSteps} />

      {/* 5. Section C: Album Design Themes (10 Themes) */}
      <div id="design-themes">
        <DesignThemeGallery />
      </div>

      {/* 5.5 Interactive Theme Switcher Digital Album */}
      <ProductAlbumViewer
        collection={designThemesAlbum}
        tag="Interactive Design Themes"
        title="Experience Theme Layouts in Real Time"
        subtitle="Toggle between Indian Classic, Clean Minimal, Indian Fusion, Western Editorial, and Baby Keepsake themes to preview how our designers arrange your memories."
        showThemeSelector={true}
        bgClass="bg-beige-warm/20"
      />

      {/* Cinematic Double-Page Spread Horizon */}
      <FullBleedSpreadBanner
        image="/images/services/theme-indian-fusion.jpg"
        tag="Editorial Storytelling"
        title="Double-Page Spreads Designed with Breathing Room"
        subtitle="Every spread is paced like a fine art magazine: establishing wide shots, intimate candid diptychs, and delicate typography."
        quote="Free album designing service included with all Ultraa Albums print manufacturing."
        accentBg="bg-gradient-to-b from-beige-warm/30 via-ivory to-rose-light/20"
      />

      {/* 6. Section D: Album Design Gallery */}
      <ProductGallery
        tag="Visual Gallery"
        title="Spreads From Our Atelier"
        subtitle="Explore sample spreads designed across classic, modern, and Indian fusion ceremonies."
        photos={gallerySpreads}
      />

      {/* 7. Section E: Final CTA */}
      <section id="service-inquiry" className="py-20 lg:py-28 bg-ivory border-t border-charcoal/5">
        <div className="section-container text-center max-w-3xl mx-auto space-y-6">
          <span className="text-[10px] uppercase tracking-luxury text-secondary font-semibold">
            Start Your Project
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-medium text-charcoal leading-tight">
            "Let's design your story."
          </h2>
          <p className="text-xs sm:text-sm text-secondary font-light max-w-xl mx-auto leading-relaxed">
            Upload links can be shared directly with Rajiv, Mayank, and Bhairavi Panchal. Bespoke non-template designs with unlimited soft-copy revisions guaranteed.
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

