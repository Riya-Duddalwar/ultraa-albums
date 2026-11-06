import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { teamMembers } from '../../data/company';
import { Camera, Film, Users, Sparkles } from 'lucide-react';

interface TeamSectionProps {
  showCollectiveNote?: boolean;
  className?: string;
}

export const TeamSection: React.FC<TeamSectionProps> = ({
  showCollectiveNote = true,
  className = '',
}) => {
  const getTeamImage = (name: string) => {
    if (name.includes('Rajiv')) return '/images/team/rajiv-panchal.svg';
    if (name.includes('Mayank')) return '/images/team/mayank-panchal.svg';
    if (name.includes('Bhairavi')) return '/images/team/bhairavi-panchal.svg';
    return '/images/team/rajiv-panchal.svg';
  };

  return (
    <section className={`py-20 lg:py-28 bg-white border-b border-charcoal/5 ${className}`}>
      <div className="section-container">
        <SectionHeading
          tag="Leadership & Atelier"
          title="The Artisan Team Behind Ultraa Albums"
          subtitle="Guided by working photographers and senior album designers dedicated to timeless color reproduction and handcrafted bookbinding."
        />

        {/* 3 Core Leaders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="editorial-card p-6 flex flex-col justify-between bg-ivory/30"
            >
              <div>
                <div className="aspect-[4/3] rounded-sm overflow-hidden mb-6 bg-white border border-charcoal/5">
                  <img
                    src={getTeamImage(member.name)}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <span className="text-[10px] uppercase tracking-luxury text-secondary font-semibold block mb-1">
                  {member.role}
                </span>

                <h3 className="font-serif text-2xl font-medium text-charcoal mb-3">
                  {member.name}
                </h3>

                <p className="text-xs text-secondary leading-relaxed font-light">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 15+ Photographers & Videographers Note */}
        {showCollectiveNote && (
          <div className="p-8 sm:p-10 bg-beige-warm/30 border border-charcoal/10 rounded-sm">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8 space-y-3">
                <div className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-luxury text-secondary font-semibold">
                  <Users className="w-3.5 h-3.5 text-dusty-rose" />
                  <span>Pan-India & Global Coverage</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-charcoal">
                  15+ Seasoned Photographers & Cinematographers
                </h3>

                <p className="text-xs sm:text-sm text-secondary font-light leading-relaxed">
                  Beyond our studio founders, Ultraa Albums coordinates a specialized nationwide collective of 15+ photographers, cinematographers, and drone pilots who travel across India and internationally to document once-in-a-lifetime celebrations.
                </p>
              </div>

              <div className="md:col-span-4 flex flex-col gap-3">
                <div className="p-3.5 bg-white rounded border border-charcoal/5 flex items-center gap-3 text-xs text-charcoal font-medium">
                  <Camera className="w-4 h-4 text-secondary" />
                  <span>Candid photojournalism specialists</span>
                </div>
                <div className="p-3.5 bg-white rounded border border-charcoal/5 flex items-center gap-3 text-xs text-charcoal font-medium">
                  <Film className="w-4 h-4 text-secondary" />
                  <span>4K multi-angle cinematic documentary</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

