import React from 'react';
import { Plane, ShieldCheck, Box, Clock, CheckCircle2, Globe, Sparkles } from 'lucide-react';

export const UkShippingAssurance: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Mumbai Atelier Hand-Binding',
      desc: 'Each album is assembled, hand-glued, and cold-pressed by our bookbinding masters in Mumbai using archival substrates.',
      icon: <Box className="w-5 h-5 text-charcoal" />,
    },
    {
      step: '02',
      title: 'Rigid Export Transit Casing',
      desc: 'Wrapped in acid-free tissue, sealed in water-resistant sleeves, and enclosed within reinforced corner-buffered cartons.',
      icon: <ShieldCheck className="w-5 h-5 text-charcoal" />,
    },
    {
      step: '03',
      title: 'Priority Tracked Air Courier',
      desc: 'Dispatched via DHL Express or FedEx International Priority with live end-to-end tracking directly to your UK studio or clients.',
      icon: <Plane className="w-5 h-5 text-charcoal" />,
    },
    {
      step: '04',
      title: 'UK Studio Delivery & Inspection',
      desc: 'Arrives in pristine condition ready for couple unboxing. Backed by our 100% Quality & Craftsmanship Guarantee.',
      icon: <CheckCircle2 className="w-5 h-5 text-charcoal" />,
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-gradient-to-b from-powder-light/30 via-ivory to-powder-light/20 border-t border-b border-charcoal/5">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-charcoal/10 rounded-full text-[10px] uppercase tracking-luxury text-secondary font-medium">
            <Globe className="w-3.5 h-3.5 text-powder-blue-dark" />
            <span>International Logistics & Assurance</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-charcoal leading-tight">
            From Our Mumbai Workshop <br className="hidden sm:inline" />
            <span className="italic font-normal">to Your UK Studio Door</span>
          </h2>

          <p className="text-xs sm:text-base text-secondary font-light max-w-xl mx-auto leading-relaxed">
            Every UK volume undergoes stringent multi-point quality inspection before being sealed in export-grade protective packaging for zero-damage transit across borders.
          </p>
        </div>

        {/* 4-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((st) => (
            <div
              key={st.step}
              className="editorial-card p-6 bg-white flex flex-col justify-between rounded-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-serif text-xl font-medium text-dusty-rose">
                    {st.step}
                  </span>
                  <div className="w-9 h-9 rounded-full bg-powder-light/50 border border-charcoal/10 flex items-center justify-center">
                    {st.icon}
                  </div>
                </div>

                <h3 className="font-serif text-lg font-medium text-charcoal mb-2 leading-snug">
                  {st.title}
                </h3>

                <p className="text-xs text-secondary font-light leading-relaxed">
                  {st.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

