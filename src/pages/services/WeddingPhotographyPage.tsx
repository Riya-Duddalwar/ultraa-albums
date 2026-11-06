import React from 'react';
import { Link } from 'react-router-dom';
import { ServiceHero } from '../../components/services/ServiceHero';
import { ServiceFeature, ServiceScopeItem } from '../../components/services/ServiceFeature';
import { PhotographyGallery } from '../../components/services/PhotographyGallery';
import { TeamSection } from '../../components/services/TeamSection';
import { WeddingDayTimeline } from '../../components/services/WeddingDayTimeline';
import { SectionHeading } from '../../components/common/SectionHeading';
import { Camera, Film, Sparkles, Heart, Users, Clock, Check, Calendar, ArrowRight } from 'lucide-react';

export const WeddingPhotographyPage: React.FC = () => {
  const photoServices: ServiceScopeItem[] = [
    {
      title: 'Candid Wedding Photography',
      description: 'Our signature forte: unobtrusive documentary photojournalism capturing unscripted laughter, emotional glances, and joyful tears as they organically unfold.',
      tag: 'SIGNATURE FORTE',
      icon: <Camera className="w-4 h-4 text-secondary" />,
    },
    {
      title: 'Traditional Wedding Photography',
      description: 'Dignified, beautifully lit formal portraits of the bride, groom, parents, wedding party, and guests ensuring every family member is honored.',
      tag: 'TIMELESS FORMALS',
      icon: <Users className="w-4 h-4 text-secondary" />,
    },
    {
      title: 'Engagement & Save-the-Date Shoots',
      description: 'Relaxed lifestyle portrait sessions designed to help couples get comfortable before the camera while creating stunning announcements.',
      tag: 'ANNOUNCEMENTS',
      icon: <Sparkles className="w-4 h-4 text-secondary" />,
    },
    {
      title: 'Pre-Wedding & Post-Wedding Shoots',
      description: 'Destination fashion-forward portraits in dream scenic locations — from Goa beaches to Rajasthan heritage palaces — without wedding day rush.',
      tag: 'DESTINATION',
      icon: <Heart className="w-4 h-4 text-secondary" />,
    },
    {
      title: 'Cinematic Wedding Films',
      description: 'Multi-angle 4K cinematography with documentary pacing, professional aerial drone perspectives, and custom audio soundscapes.',
      tag: 'CINEMATOGRAPHY',
      icon: <Film className="w-4 h-4 text-secondary" />,
    },
    {
      title: 'Outdoor Family Portraits',
      description: 'Generational ancestral photography celebrating anniversaries, golden milestones, and family reunions bathed in natural golden hour light.',
      tag: 'GENERATIONAL',
      icon: <Users className="w-4 h-4 text-secondary" />,
    },
    {
      title: 'Surprise Proposals & Anniversaries',
      description: 'Discrete undercover coverage of surprise marriage proposals and intimate private milestone celebrations.',
      tag: 'INTIMATE VOWS',
      icon: <Sparkles className="w-4 h-4 text-secondary" />,
    },
    {
      title: 'Special Events & Bar/Bat Mitzvahs',
      description: 'Comprehensive photography and video for milestone cultural ceremonies, galas, birthdays, and high-profile private events.',
      tag: 'SPECIAL CEREMONIES',
      icon: <Calendar className="w-4 h-4 text-secondary" />,
    },
  ];

  return (
    <div className="bg-ivory text-charcoal">
      {/* 1. Hero */}
      <ServiceHero
        title="Your story, captured beautifully."
        subtitle="We help people elevate their wedding experience with breathtaking photography and cinematic videography. Our team of 15+ seasoned storytellers travels pan-India and globally."
        categoryTag="Pan-India & Destination Wedding Studio"
        image="/images/services/wedding-photography-hero.jpg"
        imageAlt="Ultraa Albums Wedding Photography and Cinema"
        badges={['15+ Skilled Photographers & Videographers', 'Pan-India & Destination Travel', '24-Hour Inquiry Response']}
        ctaPrimaryText="Let's capture your story"
        ctaPrimaryAnchor="#service-inquiry"
        ctaSecondaryText="Explore Services"
        ctaSecondaryAnchor="#photo-services"
      />

      {/* 2. Section A: Introduction */}
      <section className="py-20 lg:py-28 bg-white border-b border-charcoal/5">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-[10px] uppercase tracking-luxury text-secondary font-semibold">
                Section A · The Heart of the Wedding
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-charcoal leading-tight">
                An Incredible Montage of Your Most Priceless Moments
              </h2>

              <p className="text-xs sm:text-sm text-secondary font-light leading-relaxed">
                Capture the essence of your wedding with our stunning videography and photography, as it is the heart of any unforgettable wedding ceremony.
              </p>

              <p className="text-xs sm:text-sm text-secondary font-light leading-relaxed">
                We travel across the country, creating an incredible montage of the most priceless moments of the weddings we cover. Together with essential formal portraits of your wedding party, family, and friends, you will receive a complete collection of signature frames.
              </p>

              <div className="p-5 bg-ivory border border-charcoal/10 rounded-sm space-y-2">
                <div className="text-[11px] uppercase tracking-luxury font-semibold text-charcoal">
                  Lifelong Friendships & Client Honor
                </div>
                <p className="text-xs text-secondary leading-relaxed font-light">
                  We are fortunate to count many of our clients as lifelong friends and look forward to each wedding as a privilege and an honor to be part of one of the most important days of your lives.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="aspect-[4/3] rounded-sm overflow-hidden bg-ivory border border-charcoal/10 shadow-card">
                <img
                  src="/images/gallery/wedding-1.jpg"
                  alt="Wedding photography team Ultraa Albums"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Section B: Photography Services (All 9 Services) */}
      <div id="photo-services">
        <ServiceFeature
          tag="Photography Services"
          title="Complete Coverage Menu"
          subtitle="From candid photojournalism and pre-wedding destination shoots to multi-angle cinematics and proposals."
          features={photoServices}
        />
      </div>

      {/* 4. Section C: Our Photography Style */}
      <section className="py-20 lg:py-28 bg-beige-warm/30 border-b border-charcoal/5">
        <div className="section-container">
          <SectionHeading
            tag="Artistic Signature"
            title="Our Photography Philosophy"
            subtitle="How our collective balances emotional discretion with cinematic framing."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="editorial-card p-8 bg-white">
              <h3 className="font-serif text-2xl font-medium text-charcoal mb-3">
                Click-Happy Charm
              </h3>
              <p className="text-xs sm:text-sm text-secondary leading-relaxed font-light">
                While candid wedding photojournalism is our forte, we bring a warm, click-happy charm to save-the-dates, engagements, and formal portraits that puts everyone at ease.
              </p>
            </div>

            <div className="editorial-card p-8 bg-white">
              <h3 className="font-serif text-2xl font-medium text-charcoal mb-3">
                Cinematics with Multi-Angles
              </h3>
              <p className="text-xs sm:text-sm text-secondary leading-relaxed font-light">
                We capture wedding films in traditional and cinematic styles using synchronized multi-camera setups, capturing the vows from both the groom's and bride's perspectives simultaneously.
              </p>
            </div>

            <div className="editorial-card p-8 bg-white">
              <h3 className="font-serif text-2xl font-medium text-charcoal mb-3">
                24-Hour Response Pledge
              </h3>
              <p className="text-xs sm:text-sm text-secondary leading-relaxed font-light">
                We respond to every client inquiry via email or phone call within 24 hours (unless actively filming a multi-day wedding on location, where we reply within 48 hours).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Interactive Wedding Day Timeline */}
      <section className="py-20 lg:py-24 bg-white border-b border-charcoal/5">
        <div className="section-container">
          <WeddingDayTimeline />
        </div>
      </section>

      {/* 5. Section D: Photography Gallery with Lightbox */}
      <PhotographyGallery />

      {/* 6. Section E: Our Team (Preserving 15+ Photographers Claim) */}
      <TeamSection showCollectiveNote={true} />

      {/* 7. Section F: Final CTA */}
      <section id="service-inquiry" className="py-20 lg:py-28 bg-ivory border-t border-charcoal/5">
        <div className="section-container text-center max-w-3xl mx-auto space-y-6">
          <span className="text-[10px] uppercase tracking-luxury text-secondary font-semibold">
            Reserve Your Date
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-medium text-charcoal leading-tight">
            "Let's capture your story."
          </h2>
          <p className="text-xs sm:text-sm text-secondary font-light max-w-xl mx-auto leading-relaxed">
            Allow us to tell your love story through our lens. Tell us about your wedding dates, ceremony venues, and vision. We will present sample pictures and video highlights during our initial meeting.
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

