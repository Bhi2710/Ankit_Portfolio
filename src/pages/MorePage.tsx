import React, { useState } from 'react';
import { 
  Trophy, 
  Wrench, 
  Users, 
  ChevronDown, 
  ChevronUp, 
  Award, 
  MapPin, 
  Calendar,
  CheckCircle2
} from 'lucide-react';
import { awardsData, skillsData, outreachData } from '../data/moreData';

export const MorePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'awards' | 'skills' | 'outreach'>('awards');
  const [expandedSkills, setExpandedSkills] = useState<Record<string, boolean>>({
    'computational': true,
    'programming': true,
    'frameworks': true,
    'hpc': true,
  });

  const toggleSkillExperience = (id: string) => {
    setExpandedSkills(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="py-10 sm:py-14 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 text-xs font-bold text-teal uppercase tracking-wider mb-1">
          <Trophy className="w-4 h-4" />
          Fellowships, Toolsets & Departmental Service
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold font-heading text-navy-900">
          Awards, Skills & Outreach
        </h1>
        <p className="text-slate-600 text-sm sm:text-base mt-1">
          Academic honors, computational physics tools, and university leadership activities.
        </p>
      </div>

      {/* Tab Navigation Controls */}
      <div className="flex items-center gap-2 border-b border-slate-200 overflow-x-auto">
        <button
          onClick={() => setActiveTab('awards')}
          className={`flex items-center gap-2 px-4 py-2.5 font-heading text-sm font-semibold border-b-2 whitespace-nowrap transition-all ${
            activeTab === 'awards'
              ? 'border-teal text-teal'
              : 'border-transparent text-slate-500 hover:text-navy-900'
          }`}
        >
          <Trophy className="w-4 h-4" />
          <span>Awards & Honors ({awardsData.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('skills')}
          className={`flex items-center gap-2 px-4 py-2.5 font-heading text-sm font-semibold border-b-2 whitespace-nowrap transition-all ${
            activeTab === 'skills'
              ? 'border-teal text-teal'
              : 'border-transparent text-slate-500 hover:text-navy-900'
          }`}
        >
          <Wrench className="w-4 h-4" />
          <span>Technical Skills ({skillsData.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('outreach')}
          className={`flex items-center gap-2 px-4 py-2.5 font-heading text-sm font-semibold border-b-2 whitespace-nowrap transition-all ${
            activeTab === 'outreach'
              ? 'border-teal text-teal'
              : 'border-transparent text-slate-500 hover:text-navy-900'
          }`}
        >
          <Users className="w-4 h-4" />
          <span>Outreach & Service ({outreachData.length})</span>
        </button>
      </div>

      {/* TAB 1: Awards & Honors */}
      {activeTab === 'awards' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 animate-fade-in">
          {awardsData.map((award) => (
            <div
              key={award.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-amber-50 text-gold-dark border border-amber-200">
                    <Award className="w-5 h-5" />
                  </div>
                  {award.badge && (
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-100/80 text-amber-800 border border-amber-200">
                      {award.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-base sm:text-lg font-bold font-heading text-navy-900 mb-1">
                  {award.title}
                </h3>

                <div className="flex flex-col gap-1 text-xs text-slate-500 mb-3">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-teal" />
                    <span>{award.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{award.dateDisplay || award.date}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                  {award.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* TAB 2: Skills Matrix */}
      {activeTab === 'skills' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
          {skillsData.map((group) => {
            const isExpanded = expandedSkills[group.id];
            return (
              <div
                key={group.id}
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:border-slate-300 transition-all"
              >
                <h3 className="text-base sm:text-lg font-bold font-heading text-navy-900 mb-1">
                  {group.title}
                </h3>

                {group.description && (
                  <p className="text-xs text-slate-500 mb-3">
                    {group.description}
                  </p>
                )}

                {/* Skill Badge Pills */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {group.skillsList.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Collapsible Experience Section */}
                <div className="pt-3 border-t border-slate-100">
                  <button
                    onClick={() => toggleSkillExperience(group.id)}
                    className="flex items-center justify-between w-full text-xs font-semibold text-teal hover:text-teal-dark transition-colors py-1"
                  >
                    <span>Applied Research Experience</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>

                  {isExpanded && (
                    <ul className="mt-2 space-y-1.5 text-xs text-slate-600 bg-slate-50 p-3.5 rounded-xl border border-slate-100 animate-fade-in">
                      {group.experience.map((exp, eIdx) => (
                        <li key={eIdx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal flex-shrink-0 mt-0.5" />
                          <span>{exp}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Certifications */}
                {group.certifications && (
                  <div className="mt-3 pt-2 border-t border-slate-100 flex items-center gap-1.5 text-xs text-slate-500">
                    <span className="font-semibold">Certification:</span>
                    {group.certifications.map((c, cIdx) => (
                      <span key={cIdx} className="text-slate-700 font-medium">
                        {c.name}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* TAB 3: Outreach & Leadership */}
      {activeTab === 'outreach' && (
        <div className="space-y-4 animate-fade-in">
          {outreachData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:border-slate-300 transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    {item.roleType && (
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-teal/10 text-teal border border-teal/20">
                        {item.roleType}
                      </span>
                    )}
                    <span className="text-xs text-slate-500 font-medium">
                      {item.dateDisplay || item.date}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold font-heading text-navy-900">
                    {item.title}
                  </h3>
                </div>

                <div className="flex items-center gap-1 text-xs text-slate-500 flex-shrink-0">
                  <MapPin className="w-3.5 h-3.5 text-teal" />
                  <span>{item.location}</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100 mt-2">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      )}

    </div>
  );
};
