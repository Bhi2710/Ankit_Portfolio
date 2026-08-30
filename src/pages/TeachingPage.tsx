import React from 'react';
import { 
  BookOpen, 
  CheckCircle2, 
  Calendar, 
  MapPin, 
  GraduationCap, 
  Users,
  Telescope
} from 'lucide-react';
import { teachingExperience } from '../data/teachingData';

export const TeachingPage: React.FC = () => {
  return (
    <div className="py-10 sm:py-14 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 text-xs font-bold text-teal uppercase tracking-wider mb-1">
          <BookOpen className="w-4 h-4" />
          Higher Education & Laboratory Instruction
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold font-heading text-navy-900">
          Teaching & Mentorship
        </h1>
        <p className="text-slate-600 text-sm sm:text-base mt-1">
          Undergraduate physics recitations, observational astronomy laboratory instruction, and scientific mentoring.
        </p>
      </div>

      {/* Teaching Overview Card */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-xl bg-teal/10 border border-teal/20 text-teal flex-shrink-0">
            <Telescope className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-bold font-heading text-navy-900 mb-2">
              Teaching Philosophy & Practical Pedagogy
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              My teaching approach combines rigorous foundational physics with hands-on computational data analysis and observational experiments. Having guided numerous undergraduate students through laboratory physics and telescope observation sessions at Khalifa University, I strive to make complex concepts in astrophysics and mechanics intuitive and engaging.
            </p>
          </div>
        </div>
      </div>

      {/* Structured Courses Taught */}
      <div className="space-y-6">
        <h2 className="text-xl font-bold font-heading text-navy-900 flex items-center gap-2 pb-2 border-b border-slate-200">
          <GraduationCap className="w-5 h-5 text-teal" />
          Courses & Laboratory Instruction
        </h2>

        <div className="space-y-6">
          {teachingExperience.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                <div>
                  <div className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-teal/10 text-teal mb-1.5">
                    {item.role}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold font-heading text-navy-900">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-teal" />
                    <span>{item.institution}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-xs font-medium text-slate-600 bg-slate-100 px-3 py-1 rounded-md self-start">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>{item.period}</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
                {item.description}
              </p>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <span className="text-xs font-bold text-navy-900 block mb-2">Key Instruction Areas & Responsibilities:</span>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                  {item.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Educational Outreach Highlight */}
      <div className="bg-gradient-to-r from-navy-900 to-navy-950 rounded-2xl p-6 sm:p-8 text-white shadow-md">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-xl bg-teal text-white flex-shrink-0">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs uppercase font-bold tracking-wider text-teal-light">
              High School & Public Engagement
            </span>
            <h3 className="text-lg sm:text-xl font-bold font-heading text-white mt-1 mb-2">
              KU–CERN International Masterclass & Astronomy Days
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Mentored high-school students through particle reconstruction in the HYPATIA event display, introducing fundamental ideas in high-energy physics, collider searches, and observational astronomy.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};
