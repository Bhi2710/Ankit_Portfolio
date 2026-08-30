import React from 'react';
import { ArrowUp, Code2 } from 'lucide-react';
import { profileData } from '../data/profileData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-950 text-slate-400 text-xs py-12 border-t border-navy-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center pb-8 border-b border-navy-800/80">
          
          {/* Column 1: Identity & Licensing */}
          <div className="space-y-1 text-center md:text-left">
            <p className="text-sm font-bold text-white font-heading">
              {profileData.name}
            </p>
            <p className="text-slate-400">
              © {profileData.years} • All rights reserved.
            </p>
            <p className="text-[11px] text-slate-500">
              Content licensed under{' '}
              <a
                href="https://creativecommons.org/licenses/by/4.0/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white underline underline-offset-2"
              >
                CC BY 4.0
              </a>
            </p>
          </div>

          {/* Column 2: ORCID Badge Link */}
          <div className="flex flex-col items-center justify-center text-center">
            <a
              href={`https://orcid.org/${profileData.orcid}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-900 hover:bg-navy-800 border border-navy-800 text-slate-200 hover:text-white transition-colors"
            >
              <img src="/images/ORCID_iD.svg" alt="ORCID" className="h-4 w-4" />
              <span className="font-mono text-xs">{profileData.orcid}</span>
            </a>
            <span className="text-[11px] text-slate-500 mt-1">Verified Researcher Profile</span>
          </div>

          {/* Column 3: Tech Stack & Scroll to Top */}
          <div className="flex flex-col items-center md:items-end justify-center space-y-3">
            <div className="flex items-center gap-1.5 text-slate-400">
              <Code2 className="w-3.5 h-3.5 text-teal" />
              <span>Built with React, TypeScript & Tailwind CSS</span>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-navy-900 hover:bg-navy-800 text-slate-300 hover:text-white border border-navy-800 transition-colors"
              title="Back to Top"
            >
              <ArrowUp className="w-3.5 h-3.5 text-gold" />
              <span>Back to top</span>
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-2 text-center sm:text-left">
          <p>
            Department of Physics, Khalifa University of Science and Technology, Abu Dhabi, UAE.
          </p>
          <div className="flex items-center gap-4">
            <a
              href={profileData.kuProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 transition-colors"
            >
              KU Profile
            </a>
            <a
              href={profileData.scholarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 transition-colors"
            >
              Google Scholar
            </a>
            <a
              href={profileData.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${profileData.email.primary}`}
              className="hover:text-slate-300 transition-colors"
            >
              Email
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
