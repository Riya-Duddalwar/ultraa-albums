import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ServiceHero } from '../../components/services/ServiceHero';
import { ServiceFeature, ServiceScopeItem } from '../../components/services/ServiceFeature';
import { PhotographyGallery } from '../../components/services/PhotographyGallery';
import { WeddingDayTimeline } from '../../components/services/WeddingDayTimeline';
import { UkShippingAssurance } from '../../components/uk/UkShippingAssurance';
import { SectionHeading } from '../../components/common/SectionHeading';
import {
  Globe,
  ArrowRight,
  Camera,
  Film,
  Users,
  Heart,
  Calendar,
  Sparkles,
  Clock,
  CheckCircle2,
  Mail,
  Video,
} from 'lucide-react';

export const PhotographyUkPage: React.FC = () => {
  useEffect(() => {
    document.title = 'PHOTOGRAPHY For UK | Destination Wedding & Event Cinematography | Ultraa Albums';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Destination wedding photography and cinematic multi-angle video for UK and international events. Team of 15+ skilled photographers. Candid, traditional, proposals, and cultural celebrations with 24-hour response guarantee.'
      );
    }
  }, []);

  const ukPhotoServices: ServiceScopeItem[] = [
    {
      title: 'Candid Wedding Photography (Our Forte)',
      description: 'Our signature specialty: natural, unposed documentary photojournalism capturing unscripted laughter, authentic tears, and stolen glances throughout the wedding celebration.',
      tag: 'SIGNATURE FORTE',
      icon: <Camera className="w-4 h-4 text-secondary" />,
    },
    {
      title: 'Traditional Wedding Photography',
      description: 'Classic formal group portraits of the bride, groom, parents, wedding party, and guests, lit with dignified studio balance to ensure every family member is honored.',
      tag: 'TIMELESS FORMALS',
      icon: <Users className="w-4 h-4 text-secondary" />,
    },
    {
      title: 'Multi-Angle Cinematic Video',
      description: 'Documentary and cinematic multi-angle video coverage. Capturing vows, speeches, and dancefloor celebrations with rich 4K clarity, professional sound recording, and color grading.',
      tag: 'MULTI-ANGLE CINEMA',
      icon: <Film className="w-4 h-4 text-secondary" />,
    },
    {
      title: 'Save-the-Date & Engagement Shoots',
      description: 'Romantic portrait sessions in iconic British cityscapes, manicured country estates, or scenic coastlines to announce your upcoming celebration in style.',
      tag: 'ENGAGEMENTS',
      icon: <Heart className="w-4 h-4 text-secondary" />,
    },
    {
      title: 'Pre-Wedding & Post-Wedding Shoots',
      description: 'Relaxed, fashion-editorial portrait sessions captured before or after the wedding day without time pressure or schedule constraints.',
      tag: 'EDITORIAL PORTRAITS',
      icon: <Sparkles className="w-4 h-4 text-secondary" />,
    },
    {
      title: 'Surprise Proposals',
      description: 'Undercover, discreet photography documenting the raw surprise and joy of the proposal moment as it unfolds in London, Edinburgh, or destination venues.',
      tag: 'SURPRISE PROPOSALS',
      icon: <Sparkles className="w-4 h-4 text-secondary" />,
    },
    {
      title: 'Bar & Bat Mitzvahs and Cultural Ceremonies',
      description: 'Expert, sensitive coverage of religious traditions, ceremonial blessings, and spirited evening celebrations honoring sacred family heritage.',
      tag: 'CULTURAL CEREMONIES',
      icon: <Calendar className="w-4 h-4 text-secondary" />,
    },
    {
      title: 'Outdoor Family Portraits & Events',
      description: 'Generational family milestones, golden anniversaries, and private special events photographed outdoors in natural golden hour light.',
      tag: 'FAMILY MILESTONES',
      icon: <Users className="w-4 h-4 text-secondary" />,
    },
  ];

  return (
    <div className="bg-ivory text-charcoal">
      {/* 1. Region Switcher Banner */}
      <div className="bg-white border-b border-charcoal/5 py-3">
        <div className="section-container flex items-center justify-between text-xs text-secondary">
          <div className="flex items-center gap-2">
            <Globe className="w-3.5 h-3.5 text-secondary" />
            <span>Viewing dedicated <strong>United Kingdom Photography & Cinema</strong> page.</span>
          </div>
          <Link
            to="/photography"
            className="inline-flex items-center gap-1 font-medium text-charcoal hover:underline"
          >
            <span>View India / Global Edition</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>

      {/* 2. Hero */}
      <ServiceHero
        title="PHOTOGRAPHY For UK"
        subtitle="We help people better their wedding experience with great pictures and video. A team of 15+ skilled photographers and videographers traveling across the country and worldwide to document your signature moments."
        categoryTag="UK Destination Wedding Photography & Cinema"
        image="/images/services/wedding-photography-hero.jpg"
        imageAlt="PHOTOGRAPHY For UK Ultraa Albums"
        badges={['15+ Skilled Artists', 'Candid & Multi-Angle Cinema', '24-Hour Response Time']}
        ctaPrimaryText="Book a Consultation"
        ctaPrimaryAnchor="#uk-photo-contact"
        ctaSecondaryText="Explore Photography Services"
        ctaSecondaryAnchor="#uk-photo-services"
      />

      {/* 3. Section: Main Description & Team of 15+ */}
      <section className="py-20 lg:py-28 bg-white border-b border-charcoal/5">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[10px] uppercase tracking-luxury text-secondary font-semibold">
                Our Philosophy & Dedication
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-charcoal leading-tight">
                Documenting Your Wedding as an Artistic Statement
              </h2>
              <p className="text-xs sm:text-sm text-secondary font-light leading-relaxed">
                We travel across the country creating an incredible montage of the most priceless moments of the weddings we cover. We have a team of 15+ skilled photographers and videographers dedicated to capturing your signature moments.
              </p>
              <p className="text-xs sm:text-sm text-secondary font-light leading-relaxed">
                Together with the essential formal portraits of your wedding party, family and friends, you will receive a complete collection of images capturing the signature moments of your day. Enjoy your celebration knowing that your wedding story will be documented as an artistic statement as totally unique as you!
              </p>
              <div className="p-6 bg-ivory border border-charcoal/10 rounded-sm">
                <p className="text-xs text-charcoal font-medium italic leading-relaxed">
                  "We are fortunate to count many of our clients as lifelong friends and look forward to each wedding as a privilege and honor as being part of one of the most important days of your lives."
                </p>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="aspect-[4/3] rounded-sm overflow-hidden bg-ivory border border-charcoal/10 shadow-card">
                <img
                  src="/images/gallery/wedding-1.jpg"
                  alt="Photography Team For UK Ultraa Albums"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Section: Services Scope */}
      <ServiceFeature
        id="uk-photo-services"
        tag="Complete Coverage"
        title="Photography & Film Services"
        subtitle="While candid wedding photography is our forte, we bring click-happy charm to save-the-dates, engagements, and multi-angle cinematic wedding films."
        features={ukPhotoServices}
      />

      {/* 5. Section: Response Time & Custom Packages */}
      <section className="py-20 lg:py-28 bg-white border-b border-charcoal/5">
        <div className="section-container max-w-4xl space-y-12">
          <div className="text-center space-y-4">
            <span className="text-[10px] uppercase tracking-luxury text-secondary font-semibold">
              Our Commitment to You
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-charcoal leading-tight">
              Packages for Every Need & 24-Hour Response
            </h2>
            <p className="text-xs sm:text-base text-secondary font-light leading-relaxed">
              We offer specially designed packages for every need and budget. During an introductory video or in-person meet, we will walk you through sample pictures, full wedding galleries, and cinema highlights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-ivory border border-charcoal/10 rounded-sm space-y-3">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-secondary" />
                <h3 className="font-serif text-xl font-medium text-charcoal">24-Hour Response Time</h3>
              </div>
              <p className="text-xs sm:text-sm text-secondary font-light leading-relaxed">
                We will respond to your inquiry via email and/or a phone call within 24 hours unless photographing a wedding on that day or on holiday, in which case it may take an additional day to get back to you.
              </p>
            </div>

            <div className="p-8 bg-ivory border border-charcoal/10 rounded-sm space-y-3">
              <div className="flex items-center gap-3">
                <Heart className="w-5 h-5 text-secondary" />
                <h3 className="font-serif text-xl font-medium text-charcoal">Bespoke Wedding Packages</h3>
              </div>
              <p className="text-xs sm:text-sm text-secondary font-light leading-relaxed">
                Every wedding is unique. We tailor photography hours, videographer count, drone permits, and heirloom flush mount album inclusions to match your itinerary perfectly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Wedding Day Timeline */}
      <section className="py-20 lg:py-24 bg-beige-warm/20 border-b border-charcoal/5">
        <div className="section-container">
          <WeddingDayTimeline />
        </div>
      </section>

      {/* 6. Section: Photography Portfolio Gallery */}
      <PhotographyGallery />

      {/* International Logistics Assurance */}
      <UkShippingAssurance />

      {/* 7. Section: Contact & Consultation */}
      <section id="uk-photo-contact" className="py-20 lg:py-28 bg-ivory border-t border-charcoal/5">
        <div className="section-container max-w-3xl text-center space-y-6">
          <span className="text-[10px] uppercase tracking-luxury text-secondary font-semibold">
            Reserve Your Date
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-medium text-charcoal leading-tight">
            Let's Discuss Your Wedding Day
          </h2>
          <p className="text-xs sm:text-sm text-secondary font-light max-w-xl mx-auto leading-relaxed">
            Tell us about your wedding date, venue locations, and vision. Our UK and international destination storytelling collective will respond within 24 hours.
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
