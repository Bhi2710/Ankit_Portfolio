import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  ExternalLink, 
  GraduationCap, 
  Award, 
  Briefcase, 
  Code, 
  Maximize2, 
  Calendar, 
  BookOpen, 
  Users 
} from 'lucide-react';
import { profileData } from '../data/profileData';
import { researchProjects, publications } from '../data/researchData';
import { awardsData, skillsData, outreachData } from '../data/moreData';

export const CVPage: React.FC = () => {
  const [viewMode, setViewMode] = useState<'overview' | 'embed'>('overview');

  return (
    <div className="py-10 sm:py-14 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-bold text-teal uppercase tracking-wider mb-1">
            <FileText className="w-4 h-4" />
            Curriculum Vitae
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold font-heading text-navy-900">
            Academic Curriculum Vitae
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm mt-1 flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-slate-400" />
            <span>CV last updated: January 16, 2026</span>
          </p>
        </div>

        {/* Download & View Options */}
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="/cv/CV_Ankit_Yadav.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-navy-900 text-white font-semibold text-sm hover:bg-navy-800 shadow-md hover:shadow-lg transition-all"
          >
            <Download className="w-4 h-4 text-gold" />
            <span>Download CV (PDF)</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-70" />
          </a>

          <div className="inline-flex rounded-xl bg-slate-200 p-1 border border-slate-300">
            <button
              onClick={() => setViewMode('overview')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                viewMode === 'overview'
                  ? 'bg-white text-navy-900 shadow-sm'
                  : 'text-slate-600 hover:text-navy-900'
              }`}
            >
              Structured View
            </button>
            <button
              onClick={() => setViewMode('embed')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                viewMode === 'embed'
                  ? 'bg-white text-navy-900 shadow-sm'
                  : 'text-slate-600 hover:text-navy-900'
              }`}
            >
              PDF Document
            </button>
          </div>
        </div>
      </div>

      {/* View Mode 1: Structured On-Page CV */}
      {viewMode === 'overview' ? (
        <div className="space-y-8 animate-fade-in">
          
          {/* Header Summary */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h2 className="text-2xl font-bold font-heading text-navy-900">
                {profileData.name}
              </h2>
              <p className="text-sm font-semibold text-teal">
                {profileData.department}, {profileData.institution}, Abu Dhabi, UAE
              </p>
              <p className="text-xs text-slate-500 mt-1">
                Emails: {profileData.email.institution} | {profileData.email.primary}
              </p>
            </div>
            <div className="text-xs bg-slate-50 p-3 rounded-xl border border-slate-200/80 text-slate-600">
              <div><strong className="text-navy-900">ORCID:</strong> {profileData.orcid}</div>
              <div><strong className="text-navy-900">Focus:</strong> Galactic Cosmic Rays & Bayesian MCMC</div>
            </div>
          </div>

          {/* 1. Education */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <h3 className="text-xl font-bold font-heading text-navy-900 mb-6 flex items-center gap-2 pb-2 border-b border-slate-100">
              <GraduationCap className="w-5 h-5 text-teal" />
              Education
            </h3>
            
            <div className="space-y-6">
              {profileData.education.map((edu, idx) => (
                <div key={idx} className="pb-5 border-b border-slate-100 last:border-0 last:pb-0">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 mb-1">
                    <div>
                      <h4 className="text-base sm:text-lg font-bold font-heading text-navy-900">
                        {edu.degree} in {edu.field}
                      </h4>
                      <p className="text-sm font-semibold text-teal">
                        {edu.institution}, {edu.location}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 self-start">
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
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
                    <div className="mt-2 text-xs sm:text-sm text-slate-700">
                      <span className="font-semibold text-navy-900">Thesis:</span> {edu.thesis}
                      {edu.supervisor && (
                        <span className="block text-slate-500 mt-0.5">Advisor: {edu.supervisor}</span>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 2. Research Experience */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <h3 className="text-xl font-bold font-heading text-navy-900 mb-6 flex items-center gap-2 pb-2 border-b border-slate-100">
              <Briefcase className="w-5 h-5 text-teal" />
              Research Experience & Positions
            </h3>

            <div className="space-y-6">
              {researchProjects.map((proj) => (
                <div key={proj.id} className="pb-5 border-b border-slate-100 last:border-0 last:pb-0">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 mb-1">
                    <h4 className="text-base font-bold font-heading text-navy-900">
                      {proj.title}
                    </h4>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 self-start">
                      {proj.period}
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-teal mb-2">
                    Supervisor: {proj.supervisor} • {proj.institution}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 mb-2">
                    {proj.description}
                  </p>
                  <ul className="space-y-1 text-xs text-slate-500 list-disc list-inside">
                    {proj.highlights.map((hl, hIdx) => (
                      <li key={hIdx}>{hl}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Research Outputs & Publications */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <h3 className="text-xl font-bold font-heading text-navy-900 mb-4 flex items-center gap-2 pb-2 border-b border-slate-100">
              <BookOpen className="w-5 h-5 text-teal" />
              Research Outputs & Publications
            </h3>

            <div className="space-y-4">
              {publications.map((pub, idx) => (
                <div key={pub.id} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-navy-900 bg-white px-2 py-0.5 rounded border border-slate-200">
                      [{idx + 1}]
                    </span>
                    <span className="text-xs font-semibold text-teal">
                      {pub.venue} ({pub.year})
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-navy-900">
                    {pub.title}
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    {pub.authors}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 4. Honors, Awards & Fellowships */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <h3 className="text-xl font-bold font-heading text-navy-900 mb-4 flex items-center gap-2 pb-2 border-b border-slate-100">
              <Award className="w-5 h-5 text-teal" />
              Awards, Honors & Fellowships
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {awardsData.map((award) => (
                <div key={award.id} className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h4 className="font-bold text-sm text-navy-900">{award.title}</h4>
                    {award.badge && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800">
                        {award.badge}
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-teal font-medium">{award.location}</div>
                  <div className="text-xs text-slate-500 mb-1.5">{award.dateDisplay || award.date}</div>
                  <p className="text-xs text-slate-600">{award.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 5. Technical Skills Matrix */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <h3 className="text-xl font-bold font-heading text-navy-900 mb-4 flex items-center gap-2 pb-2 border-b border-slate-100">
              <Code className="w-5 h-5 text-teal" />
              Skills & Scientific Toolsets
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              {skillsData.map((s) => (
                <div key={s.id} className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-sm text-navy-900 mb-2">{s.title}</h4>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {s.skillsList.map((skill, sIdx) => (
                      <span key={sIdx} className="px-2 py-0.5 rounded bg-white text-slate-700 border border-slate-200 font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <ul className="space-y-1 text-slate-600 list-disc list-inside">
                    {s.experience.map((exp, eIdx) => (
                      <li key={eIdx}>{exp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* 6. Outreach & Service */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <h3 className="text-xl font-bold font-heading text-navy-900 mb-4 flex items-center gap-2 pb-2 border-b border-slate-100">
              <Users className="w-5 h-5 text-teal" />
              Teaching, Service & Outreach
            </h3>

            <div className="space-y-4">
              {outreachData.map((item) => (
                <div key={item.id} className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 mb-1">
                    <h4 className="font-bold text-sm text-navy-900">{item.title}</h4>
                    <span className="text-xs font-semibold text-slate-500">{item.dateDisplay || item.date}</span>
                  </div>
                  <div className="text-xs text-teal font-medium mb-1.5">{item.location}</div>
                  <p className="text-xs text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      ) : (
        /* View Mode 2: Interactive PDF Viewer Container */
        <div className="animate-fade-in">
          <div className="block sm:hidden bg-amber-50 border border-amber-200 rounded-xl p-4 mb-4 text-xs text-amber-800">
            <span className="font-bold block mb-1">Mobile Browser Note:</span>
            Embedded PDF viewing is best experienced in desktop mode. Use the download button above or open in full tab below.
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-3 sm:p-4 shadow-xl">
            <div className="flex items-center justify-between px-3 py-2 bg-slate-100 rounded-xl mb-3 text-xs text-slate-600">
              <span className="font-medium">Document: CV_Ankit_Yadav.pdf</span>
              <a
                href="/cv/CV_Ankit_Yadav.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-semibold text-teal hover:underline"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                Open in Full Tab
              </a>
            </div>

            <div className="w-full h-[600px] sm:h-[800px] lg:h-[950px] rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
              <iframe
                src="/cv/CV_Ankit_Yadav.pdf#toolbar=1"
                title="Ankit Yadav - Curriculum Vitae"
                className="w-full h-full border-0"
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
