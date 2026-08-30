import React from 'react';
import { 
  GraduationCap, 
  MapPin, 
  Mail, 
  Building2, 
  Atom
} from 'lucide-react';
import { profileData } from '../data/profileData';

export const AboutPage: React.FC = () => {
  return (
    <div className="py-10 sm:py-14 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 text-xs font-bold text-teal uppercase tracking-wider mb-1">
          <GraduationCap className="w-4 h-4" />
          Academic Biography & Background
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold font-heading text-navy-900">
          About Me
        </h1>
        <p className="text-slate-600 text-sm sm:text-base mt-1">
          PhD Candidate in Astroparticle Physics at Khalifa University, Abu Dhabi.
        </p>
      </div>

      {/* Bio Overview Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Left column: Profile card */}
        <div className="md:col-span-1 space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm text-center">
            <div className="w-40 h-40 rounded-full mx-auto ring-4 ring-slate-100 overflow-hidden shadow-lg mb-4 bg-navy-800">
              <img
                src={profileData.headshot}
                alt={profileData.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=400&h=400';
                }}
              />
            </div>

            <h2 className="text-xl font-bold font-heading text-navy-900">
              {profileData.name}
            </h2>
            <p className="text-xs text-teal font-semibold mt-0.5">
              {profileData.title}
            </p>

            <div className="mt-4 pt-4 border-t border-slate-100 text-xs text-slate-600 space-y-2 text-left">
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-teal flex-shrink-0" />
                <span>{profileData.department}, {profileData.institution}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <span>{profileData.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <a href={`mailto:${profileData.email.primary}`} className="text-teal hover:underline truncate">
                  {profileData.email.primary}
                </a>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-center gap-2">
              <a
                href={profileData.kuProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                title="Khalifa University Profile"
              >
                <img src="/images/KU_logo.png" alt="KU" className="h-4 w-auto object-contain" />
              </a>
              <a
                href={profileData.scholarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                title="Google Scholar"
              >
                <img src="/images/Google_Scholar_logo.svg" alt="Scholar" className="h-4 w-4" />
              </a>
              <a
                href={`https://orcid.org/${profileData.orcid}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                title="ORCID"
              >
                <img src="/images/ORCID_iD.svg" alt="ORCID" className="h-4 w-4" />
              </a>
              <a
                href={profileData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                title="LinkedIn"
              >
                <img src="/images/LinkedIn_icon.svg" alt="LinkedIn" className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Academic Affiliation Box */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 text-xs text-slate-600 space-y-2">
            <span className="font-bold text-navy-900 uppercase tracking-wider block">Doctoral Fellowship</span>
            <p>
              Supported by the prestigious <strong>Doctoral Research / Teaching Scholarship (DRTS)</strong> at Khalifa University.
            </p>
          </div>
        </div>

        {/* Right column: In-depth Bio & Research Philosophy */}
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
            <h3 className="text-xl font-bold font-heading text-navy-900 border-b border-slate-100 pb-2">
              Background & Scientific Journey
            </h3>

            {profileData.bio.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}

            <div className="pt-3 border-t border-slate-100">
              <h4 className="font-heading font-semibold text-navy-900 text-base mb-2 flex items-center gap-2">
                <Atom className="w-4 h-4 text-teal" />
                Primary Research Topics:
              </h4>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600">
                {profileData.researchInterests.map((interest, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-teal font-bold">•</span>
                    <span>{interest}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>

      {/* Education Timeline */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
        <h3 className="text-xl font-bold font-heading text-navy-900 mb-6 flex items-center gap-2 pb-2 border-b border-slate-100">
          <GraduationCap className="w-5 h-5 text-teal" />
          Education
        </h3>

        <div className="space-y-8 relative pl-4 sm:pl-6 border-l-2 border-slate-200 ml-2 sm:ml-4">
          {profileData.education.map((edu, idx) => (
            <div key={idx} className="relative group">
              {/* Dot */}
              <div className="absolute -left-[23px] sm:-left-[31px] top-1.5 w-4 h-4 rounded-full bg-teal ring-4 ring-white shadow-sm" />

              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1">
                <div>
                  <h4 className="text-base sm:text-lg font-bold font-heading text-navy-900">
                    {edu.degree} in {edu.field}
                  </h4>
                  <p className="text-sm font-semibold text-teal">
                    {edu.institution}, {edu.location}
                  </p>
                </div>
                <div className="flex items-center gap-2 self-start">
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                    {edu.period}
                  </span>
                  {edu.gpaOrCpi && (
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-teal/10 text-teal border border-teal/20">
                      {edu.gpaOrCpi}
                    </span>
                  )}
                </div>
              </div>

              {edu.thesis && (
                <div className="mt-2.5 p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-xs sm:text-sm text-slate-700">
                  <span className="font-bold text-navy-900 block mb-0.5">Thesis:</span>
                  <span>{edu.thesis}</span>
                  {edu.supervisor && (
                    <span className="block text-slate-500 mt-1 font-medium">
                      Advisor: {edu.supervisor}
                    </span>
                  )}
                </div>
              )}

              {edu.notes && (
                <p className="text-xs text-slate-500 mt-1.5 italic">
                  {edu.notes}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
