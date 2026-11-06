import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ServiceHero } from '../../components/services/ServiceHero';
import { ServiceFeature, ServiceScopeItem } from '../../components/services/ServiceFeature';
import { BeforeAfterSlider } from '../../components/services/BeforeAfterSlider';
import { SectionHeading } from '../../components/common/SectionHeading';
import {
  Globe,
  ArrowRight,
  Scissors,
  Sun,
  Sparkles,
  Sparkle,
  ShoppingBag,
  Film,
  Send,
  CheckCircle2,
  Mail,
  ShieldCheck,
} from 'lucide-react';

export const ImageEditingUkPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Image Editing Work For UK | Retouching & Post-Production | Ultraa Albums';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Professional image editing and retouching services for UK photographers. Lightroom and Photoshop masters with 10+ years experience. 8 core services with a FREE 1-2 RAW test sample for UK studios.'
      );
    }
  }, []);

  const ukEditingServices: ServiceScopeItem[] = [
    {
      title: 'Advanced Image Cutouts & Clipping Paths',
      description: 'Hand-drawn vector pen tool clipping paths, fine feathering, and complex hair masking for clean, artifact-free subject isolation on transparent or colored backdrops.',
      tag: 'PEN TOOL PRECISION',
      icon: <Scissors className="w-4 h-4 text-secondary" />,
    },
    {
      title: 'Balancing Brightness & Contrast',
      description: 'Balancing deep shadows and delicate highlights in challenging outdoor lighting or backlit church interiors without blowing out veil or tuxedo textures.',
      tag: 'EXPOSURE BALANCE',
      icon: <Sun className="w-4 h-4 text-secondary" />,
    },
    {
      title: 'Repair of Scratches, Creases & Dust Removal',
      description: 'Meticulous healing brush restoration for vintage heirloom photos and modern sensor dust spot removal across wide sky wedding panoramas.',
      tag: 'ARCHIVAL HEALING',
      icon: <Sparkles className="w-4 h-4 text-secondary" />,
    },
    {
      title: 'Light & Color Temperature Corrections',
      description: 'Harmonizing mixed ambient lighting (warm tungsten reception bulbs, orange candlelight, cool natural daylight) across full 800+ photo wedding collections.',
      tag: 'COLOR HARMONY',
      icon: <Sun className="w-4 h-4 text-secondary" />,
    },
    {
      title: 'Beauty & Glamour Retouching',
      description: 'Natural frequency separation for silky skin texture without plastic blurring, flyaway hair reduction, subtle teeth brightening, and eye luminance enhancement.',
      tag: 'BEAUTY & GLAMOUR',
      icon: <Sparkle className="w-4 h-4 text-secondary" />,
    },
    {
      title: 'Object & Distraction Removal',
      description: 'Discreet removal of unwanted photobombers, exit signage, microphones, power cords, and background clutter to keep attention purely on the moment.',
      tag: 'OBJECT REMOVAL',
      icon: <Scissors className="w-4 h-4 text-secondary" />,
    },
    {
      title: 'E-Commerce Commercial Editing',
      description: 'High-volume product silo clipping, drop shadow generation, reflection mapping, and color-matching for British commercial brands and online storefronts.',
      tag: 'COMMERCIAL SILOS',
      icon: <ShoppingBag className="w-4 h-4 text-secondary" />,
    },
    {
      title: 'Cinematic Video Editing',
      description: 'Wedding cinema timeline assembly, multi-camera audio synchronization, color grading with cinematic LUTs, and emotional highlight reel editing.',
      tag: 'VIDEO POST-PRODUCTION',
      icon: <Film className="w-4 h-4 text-secondary" />,
    },
  ];

  return (
    <div className="bg-ivory text-charcoal">
      {/* 1. Region Switcher Banner */}
      <div className="bg-white border-b border-charcoal/5 py-3">
        <div className="section-container flex items-center justify-between text-xs text-secondary">
          <div className="flex items-center gap-2">
            <Globe className="w-3.5 h-3.5 text-secondary" />
            <span>Viewing dedicated <strong>United Kingdom Post-Production</strong> page.</span>
          </div>
          <Link
            to="/image-editing"
            className="inline-flex items-center gap-1 font-medium text-charcoal hover:underline"
          >
            <span>View India / Global Edition</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>

      {/* 2. Hero */}
      <ServiceHero
        title="Image Editing Work For UK"
        subtitle="Ultraa Albums is a 10+ years young organization working for studios across the globe. Image correction and enhancement services digitally restore and enhance poor images without harming the original print."
        categoryTag="UK Post-Production & Retouching"
        image="/images/uk/editing-uk.svg"
        imageAlt="Image Editing Work For UK Ultraa Albums"
        badges={['10+ Years Global Experience', 'Photoshop & Lightroom Masters', 'FREE SAMPLE For UK Studios']}
        ctaPrimaryText="Request a Free Sample"
        ctaPrimaryAnchor="#uk-free-sample"
        ctaSecondaryText="Explore 8 Services"
        ctaSecondaryAnchor="#uk-services"
      />

      {/* 3. Section A: Introduction & Studio Expertise */}
      <section className="py-20 lg:py-28 bg-white border-b border-charcoal/5">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[10px] uppercase tracking-luxury text-secondary font-semibold">
                Studio Heritage & Care
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-charcoal leading-tight">
                Every Image Restored Faithfully to Excellent Condition
              </h2>
              <p className="text-xs sm:text-sm text-secondary font-light leading-relaxed">
                Images can be repaired, retouched, copied, enhanced or resized, all without harming the original capture or print. Our skilled artists take utmost care with every detail in your photo and faithfully restore it to pristine condition.
              </p>
              <p className="text-xs sm:text-sm text-secondary font-light leading-relaxed">
                Our designers possess more than 10 years of experience and deep expertise in professional image editing suites like Adobe Lightroom and Photoshop. We provide the highest levels of responsive service, creating great value in technology, communication, and craftsmanship.
              </p>
              <div className="p-6 bg-ivory border border-charcoal/10 rounded-sm">
                <p className="text-xs text-charcoal font-medium italic leading-relaxed">
                  "Fired by a passion for business excellence and driven by sound human values, Ultraa Albums continues to grow based on its capabilities. We deliver on our commitments."
                </p>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="aspect-[4/3] rounded-sm overflow-hidden bg-ivory border border-charcoal/10 shadow-card">
                <img
                  src="/images/uk/editing-uk.svg"
                  alt="Ultraa Albums UK Image Editing Team"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Section B: Interactive Before / After Slider */}
      <section className="py-20 lg:py-28 bg-ivory border-b border-charcoal/5">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <span className="text-[10px] uppercase tracking-luxury text-secondary font-semibold">
              Interactive Comparison
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-charcoal leading-tight">
              See the Quality Difference
            </h2>
            <p className="text-xs sm:text-sm text-secondary font-light leading-relaxed">
              Drag the interactive slider to view raw camera captures transformed by our studio color grading and frequency separation retouching.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <BeforeAfterSlider
              beforeImage="/images/services/before-editing.svg"
              afterImage="/images/services/after-editing.svg"
              beforeLabel="Raw Camera Capture"
              afterLabel="Ultraa Retouched & Graded"
            />
          </div>
        </div>
      </section>

      {/* 5. Section C: 8 Photo Retouching Services */}
      <ServiceFeature
        id="uk-services"
        tag="Comprehensive Post-Production"
        title="Photo Retouching Services"
        subtitle="Eight specialized editing workflows designed for British wedding photographers, portrait artists, and commercial studios."
        features={ukEditingServices}
      />

      {/* 6. Section D: FREE SAMPLE For UK */}
      <section id="uk-free-sample" className="py-20 lg:py-28 bg-charcoal text-ivory">
        <div className="section-container max-w-4xl">
          <div className="text-center space-y-4 mb-12">
            <span className="text-[10px] uppercase tracking-luxury text-dusty-rose font-semibold">
              Studio Test Offer
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-ivory leading-tight">
              FREE SAMPLE For UK
            </h2>
            <p className="text-xs sm:text-base text-ivory/70 font-light max-w-2xl mx-auto leading-relaxed">
              If you want to test our quality of work, please send us one or two RAW files with your styling instructions and we will work for free. You can send images via WeTransfer or email attachment. Our work will speak for itself.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 mb-12">
            <div className="p-6 bg-charcoal-light/30 border border-ivory/10 rounded-sm space-y-2 text-center">
              <span className="text-2xl font-serif text-dusty-rose">01</span>
              <h4 className="font-serif text-lg text-ivory">Send 1-2 RAWs</h4>
              <p className="text-xs text-ivory/70 font-light">
                Provide RAW captures representing your typical lighting challenges.
              </p>
            </div>

            <div className="p-6 bg-charcoal-light/30 border border-ivory/10 rounded-sm space-y-2 text-center">
              <span className="text-2xl font-serif text-dusty-rose">02</span>
              <h4 className="font-serif text-lg text-ivory">Include Notes</h4>
              <p className="text-xs text-ivory/70 font-light">
                Specify your preferred color grade, skin smoothing level, and reference styles.
              </p>
            </div>

            <div className="p-6 bg-charcoal-light/30 border border-ivory/10 rounded-sm space-y-2 text-center">
              <span className="text-2xl font-serif text-dusty-rose">03</span>
              <h4 className="font-serif text-lg text-ivory">Free Delivery</h4>
              <p className="text-xs text-ivory/70 font-light">
                Receive finished layered TIFF/JPEG edits back within 24 to 48 hours at zero cost.
              </p>
            </div>
          </div>

          <div className="bg-charcoal-light/40 border border-ivory/15 p-8 rounded-sm space-y-4 text-center">
            <h3 className="font-serif text-2xl text-ivory">How to Submit Your Free Sample</h3>
            <p className="text-xs sm:text-sm text-ivory/70 font-light max-w-xl mx-auto leading-relaxed">
              Upload your 1-2 sample images to <strong>WeTransfer.com</strong>, <strong>Dropbox</strong>, or <strong>Google Drive</strong> and share the link via the inquiry form below or email us directly at <strong>info@ultraaalbums.com</strong>.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <a
                href="mailto:info@ultraaalbums.com?subject=UK%20Free%20Sample%20Image%20Editing%20Request"
                className="btn-luxury-secondary text-xs"
              >
                <Mail className="w-4 h-4 mr-2" />
                Email info@ultraaalbums.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Section E: CTA */}
      <section className="py-20 lg:py-28 bg-white border-t border-charcoal/5">
        <div className="section-container max-w-3xl text-center space-y-6">
          <span className="text-[10px] uppercase tracking-luxury text-secondary font-semibold">
            UK Studio Inquiries
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-medium text-charcoal leading-tight">
            Submit Your Free Sample Request
          </h2>
          <p className="text-xs sm:text-sm text-secondary font-light max-w-xl mx-auto leading-relaxed">
            Get in touch with our post-production department to test our color grading, culling, and retouching on your RAW files.
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
