import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { servicesData } from '../data/services';
import { PageHeader } from '../components/common/PageHeader';
import { Check, Sparkles, Clock, Palette, ArrowRight } from 'lucide-react';

interface ServiceDetailPageProps {
  explicitSlug?: string;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ explicitSlug }) => {
  const { slug: routeSlug } = useParams<{ slug: string }>();
  const activeSlug = explicitSlug || routeSlug;

  const service = servicesData.find((s) => s.slug === activeSlug);

  if (!service) {
    return <Navigate to="/album-designing" replace />;
  }

  return (
    <div>
      <PageHeader
        category={service.isUkService ? 'UK Services · Post-Production' : 'Artisan Studio Services'}
        title={service.title}
        subtitle={service.subtitle}
      />

      {/* Main Narrative */}
      <section className="py-16 sm:py-20 bg-white border-b border-charcoal/5">
        <div className="section-container max-w-4xl">
          <div className="space-y-6 text-sm sm:text-base text-secondary leading-relaxed font-light">
            {service.description.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Features list */}
          <div className="mt-12 p-8 bg-ivory border border-charcoal/10 rounded-sm">
            <h3 className="font-serif text-2xl font-medium text-charcoal mb-4">
              Scope of Service & Deliverables
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {service.features.map((f, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-charcoal/90">
                  <Check className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                  <span className="leading-snug">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Themes if Album Designing */}
          {service.themesOrStyles && (
            <div className="mt-12">
              <div className="flex items-center gap-2 mb-4">
                <Palette className="w-4 h-4 text-dusty-rose" />
                <h3 className="font-serif text-2xl font-medium text-charcoal">
                  Signature Album Design Themes
                </h3>
              </div>
              <p className="text-xs text-secondary mb-6">
                Unlike generic online software with rigid templates, our designers craft bespoke spreads tailored to your preferred narrative style:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {service.themesOrStyles.map((theme, idx) => (
                  <div key={idx} className="editorial-card p-4 text-center">
                    <span className="text-[10px] uppercase tracking-luxury text-secondary block mb-1">
                      Theme 0{idx + 1}
                    </span>
                    <span className="text-xs font-medium text-charcoal">{theme}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Free sample callout if image editing */}
          {service.id.includes('image-editing') && (
            <div className="mt-12 p-6 bg-rose-light/50 border border-rose-pastel rounded-sm flex items-start gap-4">
              <Sparkles className="w-6 h-6 text-charcoal shrink-0 mt-0.5" />
              <div>
                <h4 className="font-serif text-lg font-medium text-charcoal">Free Trial Retouching Sample</h4>
                <p className="text-xs text-secondary mt-1 leading-relaxed">
                  Send us 1 or 2 test RAW files via WeTransfer or Google Drive with your editing instructions. We will complete and return them free of charge so you can test our skin tone rendering and color accuracy.
                </p>
              </div>
            </div>
          )}

          {/* 24-hr response note if wedding photography */}
          {service.id.includes('photography') && (
            <div className="mt-12 p-6 bg-sage-light/50 border border-sage rounded-sm flex items-start gap-4">
              <Clock className="w-6 h-6 text-charcoal shrink-0 mt-0.5" />
              <div>
                <h4 className="font-serif text-lg font-medium text-charcoal">24-Hour Response Guarantee</h4>
                <p className="text-xs text-secondary mt-1 leading-relaxed">
                  We respond to all photography inquiries within 24 hours (unless actively filming a multi-day wedding on location). Custom coverage packages tailored for Pan-India and global destination celebrations.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-ivory border-t border-charcoal/5">
        <div className="section-container text-center max-w-3xl mx-auto space-y-6">
          <h2 className="font-serif text-3xl sm:text-5xl font-medium text-charcoal leading-tight">
            Inquire for {service.title}
          </h2>
          <p className="text-xs sm:text-sm text-secondary font-light max-w-xl mx-auto leading-relaxed">
            Reach out to discuss your timelines, volume requirements, and custom specifications.
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
