import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Download, 
  Presentation, 
  Mail, 
  Building2, 
  MapPin, 
  Sparkles, 
  Cpu, 
  GraduationCap, 
  Trophy, 
  ArrowRight,
  Atom,
  FileText
} from 'lucide-react';
import { profileData } from '../data/profileData';
import { publications, researchProjects } from '../data/researchData';
import { talksData } from '../data/talksData';

export const HomePage: React.FC = () => {
  const latestPub = publications[0];
  const upcomingTalks = talksData.slice(0, 3);
  const activeProjects = researchProjects.slice(0, 2);

  return (
    <div className="space-y-12 pb-16">
      
      {/* 1. Main Welcome Hero */}
      <section className="relative pt-8 pb-10 sm:pt-12 sm:pb-14 lg:pt-16 lg:pb-16 overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-navy-900 via-navy-900/90 to-transparent -z-10" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200/80 p-6 sm:p-8 lg:p-10">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 lg:gap-10">
              
              {/* Profile Avatar */}
              <div className="flex-shrink-0 flex flex-col items-center">
                <div className="relative group">
                  <div className="w-36 h-36 sm:w-44 sm:h-44 lg:w-48 lg:h-48 rounded-full ring-4 ring-white shadow-2xl overflow-hidden bg-navy-800">
                    <img
                      src={profileData.headshot}
                      alt={profileData.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=400&h=400';
                      }}
                    />
                  </div>
                  <span className="absolute bottom-2 right-2 bg-teal text-white p-2 rounded-full shadow-lg border-2 border-white" title="Active Researcher">
                    <Sparkles className="w-4 h-4" />
                  </span>
                </div>

                <div className="mt-4 flex flex-col items-center text-center">
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                    <Building2 className="w-3.5 h-3.5 text-teal" />
                    <span>{profileData.institution}</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 text-xs text-slate-500 mt-1.5">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    <span>{profileData.location}</span>
                  </div>
                </div>
              </div>

              {/* Bio & Intro */}
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal/10 text-teal text-xs font-semibold uppercase tracking-wider mb-2">
                  Astroparticle Physics Research
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-navy-900 tracking-tight">
                  {profileData.name}
                </h1>

                <p className="text-base sm:text-lg text-slate-600 font-medium mt-1 mb-4">
                  PhD Candidate • Department of Physics, <a href={profileData.kuProfileUrl} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline font-semibold">Khalifa University</a>
                </p>

                <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
                  <p>
                    I am a PhD candidate in the Department of Physics at <strong>Khalifa University</strong>, Abu Dhabi, working under the supervision of <strong>Dr. Satyendra Thoudam</strong> on the origin, acceleration, and propagation of Galactic cosmic rays.
                  </p>
                  <p>
                    My research focuses on Bayesian modeling and numerical simulations (CRPropa) of cosmic-ray transport, combining data from space- and ground-based experiments (AMS-02, CALET, CREAM, DAMPE, Voyager) in high-energy and multi-messenger astrophysics.
                  </p>
                </div>

                {/* CTAs */}
                <div className="mt-6 flex flex-wrap items-center justify-center md:justify-start gap-3">
                  <Link
                    to="/research"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-teal text-white font-medium text-sm hover:bg-teal-dark shadow-sm hover:shadow transition-all"
                  >
                    <BookOpen className="w-4 h-4" />
                    Explore Research
                  </Link>

                  <Link
                    to="/projects"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-navy-900 text-white font-medium text-sm hover:bg-navy-800 shadow-sm transition-all"
                  >
                    <Cpu className="w-4 h-4 text-gold" />
                    Computational Projects
                  </Link>

                  <a
                    href="/cv/CV_Ankit_Yadav.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-100 text-slate-800 font-medium text-sm hover:bg-slate-200 border border-slate-300/80 transition-all"
                  >
                    <Download className="w-4 h-4 text-slate-600" />
                    Download CV
                  </a>

                  <a
                    href={`mailto:${profileData.email.primary}`}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-100 text-slate-800 font-medium text-sm hover:bg-slate-200 border border-slate-300/80 transition-all"
                  >
                    <Mail className="w-4 h-4 text-slate-600" />
                    Contact
                  </a>
                </div>

              </div>

            </div>

            {/* Quick Metrics */}
            <div className="mt-8 pt-6 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              {profileData.stats.map((stat, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200/60">
                  <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">
                    {stat.label}
                  </div>
                  <div className="text-sm sm:text-base font-semibold font-heading text-navy-900 mt-0.5">
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 2. Featured Highlights & Recent Activity */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Latest Publication & Ongoing Research */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Featured Publication */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs font-bold text-teal bg-teal/10 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  Featured Publication
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  {latestPub.venue}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold font-heading text-navy-900 mb-2">
                {latestPub.title}
              </h3>

              <p className="text-xs text-slate-600 font-medium mb-3">
                {latestPub.authors}
              </p>

              <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 mb-4 leading-relaxed">
                {latestPub.abstract}
              </p>

              <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                <a
                  href={latestPub.links[0]?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-teal hover:text-teal-dark"
                >
                  <FileText className="w-3.5 h-3.5" />
                  Read PoS Proceedings PDF
                </a>
                <Link
                  to="/research"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-navy-900"
                >
                  <span>All publications</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Active Research Projects Highlights */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base sm:text-lg font-bold font-heading text-navy-900 flex items-center gap-2">
                  <Atom className="w-4 h-4 text-teal" />
                  Active Research Projects
                </h3>
                <Link to="/research" className="text-xs font-semibold text-teal hover:underline flex items-center gap-1">
                  <span>View details</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

              <div className="space-y-4">
                {activeProjects.map((proj) => (
                  <div key={proj.id} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h4 className="font-bold text-sm text-navy-900">
                        {proj.title}
                      </h4>
                      <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                        {proj.period}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 mt-1">
                      {proj.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Upcoming Events & Quick Navigation Portal */}
          <div className="space-y-6">
            
            {/* Conferences & Talks Widget */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-bold font-heading text-navy-900 flex items-center gap-2">
                  <Presentation className="w-4 h-4 text-teal" />
                  Recent Presentations
                </h3>
                <Link to="/talks" className="text-xs font-semibold text-teal hover:underline">
                  All ({talksData.length})
                </Link>
              </div>

              <div className="space-y-3.5">
                {upcomingTalks.map((talk) => (
                  <div key={talk.id} className="pb-3 border-b border-slate-100 last:border-0 last:pb-0">
                    <span className="text-[11px] font-semibold text-slate-500 block">
                      {talk.date} • {talk.year}
                    </span>
                    <h4 className="text-xs sm:text-sm font-bold text-navy-900 mt-0.5 leading-snug">
                      {talk.title}
                    </h4>
                    <p className="text-[11px] text-slate-600 mt-0.5 line-clamp-1">
                      {talk.location}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Portal Cards */}
            <div className="bg-gradient-to-br from-navy-900 to-navy-950 rounded-2xl p-6 text-white shadow-md">
              <h3 className="text-base font-bold font-heading text-gold mb-3">
                Explore Website
              </h3>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <Link
                  to="/about"
                  className="p-2.5 rounded-lg bg-navy-800/80 hover:bg-navy-800 border border-navy-700 flex flex-col items-center justify-center text-center transition-colors"
                >
                  <GraduationCap className="w-4 h-4 text-teal-light mb-1" />
                  <span>About Bio</span>
                </Link>

                <Link
                  to="/projects"
                  className="p-2.5 rounded-lg bg-navy-800/80 hover:bg-navy-800 border border-navy-700 flex flex-col items-center justify-center text-center transition-colors"
                >
                  <Cpu className="w-4 h-4 text-teal-light mb-1" />
                  <span>Projects</span>
                </Link>

                <Link
                  to="/teaching"
                  className="p-2.5 rounded-lg bg-navy-800/80 hover:bg-navy-800 border border-navy-700 flex flex-col items-center justify-center text-center transition-colors"
                >
                  <BookOpen className="w-4 h-4 text-teal-light mb-1" />
                  <span>Teaching</span>
                </Link>

                <Link
                  to="/more"
                  className="p-2.5 rounded-lg bg-navy-800/80 hover:bg-navy-800 border border-navy-700 flex flex-col items-center justify-center text-center transition-colors"
                >
                  <Trophy className="w-4 h-4 text-teal-light mb-1" />
                  <span>Awards</span>
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
