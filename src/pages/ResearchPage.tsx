import React, { useState } from 'react';
import { 
  Atom, 
  FileText, 
  ExternalLink, 
  Copy, 
  Check, 
  ChevronDown, 
  ChevronUp, 
  Layers, 
  BookOpen, 
  Calendar,
  Tag
} from 'lucide-react';
import { researchProjects, publications } from '../data/researchData';

export const ResearchPage: React.FC = () => {
  const [expandedAbstracts, setExpandedAbstracts] = useState<Record<string, boolean>>({
    'icrc2025-bayesian-gcr': true
  });
  const [copiedBibtex, setCopiedBibtex] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string>('all');

  const toggleAbstract = (id: string) => {
    setExpandedAbstracts(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedBibtex(id);
    setTimeout(() => setCopiedBibtex(null), 2500);
  };

  const allTags = Array.from(new Set(researchProjects.flatMap(p => p.tags)));

  const filteredProjects = selectedTag === 'all'
    ? researchProjects
    : researchProjects.filter(p => p.tags.includes(selectedTag));

  return (
    <div className="py-10 sm:py-14 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 text-xs font-bold text-teal uppercase tracking-wider mb-1">
          <Atom className="w-4 h-4" />
          Astroparticle Physics & Multi-Messenger Astronomy
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold font-heading text-navy-900">
          Research Experience & Projects
        </h1>
        <p className="text-slate-600 text-sm sm:text-base mt-1">
          Investigating cosmic-ray transport, weak-shock reacceleration, Bayesian inference, and high-energy multi-messenger data.
        </p>
      </div>

      {/* Publications & Proceedings Section */}
      <section className="space-y-6">
        <div className="flex items-center justify-between pb-2 border-b border-slate-200">
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-navy-900 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-teal" />
            Publications & Preprints
          </h2>
          <span className="text-xs font-semibold text-slate-500">
            {publications.length} Record{publications.length > 1 ? 's' : ''}
          </span>
        </div>

        <div className="space-y-4">
          {publications.map((pub, idx) => (
            <div 
              key={pub.id}
              className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm hover:border-slate-300 transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span className="text-xs font-bold text-navy-900 bg-slate-100 px-2.5 py-0.5 rounded">
                      [{idx + 1}] {pub.year}
                    </span>
                    {pub.status === 'conference_proceedings' && (
                      <span className="text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200 px-2 py-0.5 rounded">
                        Conference Proceedings
                      </span>
                    )}
                    {pub.status === 'in_prep' && (
                      <span className="text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200 px-2 py-0.5 rounded">
                        In Preparation
                      </span>
                    )}
                    <span className="text-xs text-slate-500 font-medium italic">
                      {pub.venue}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold font-heading text-navy-900">
                    {pub.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-700 mt-1 font-medium">
                    {pub.authors}
                  </p>
                </div>

                {/* Actions / Links */}
                <div className="flex flex-wrap items-center gap-2 flex-shrink-0">
                  {pub.links.map((link, lIdx) => (
                    <a
                      key={lIdx}
                      href={link.url}
                      target={link.url.startsWith('http') ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-navy-900 text-white hover:bg-navy-800 transition-colors shadow-sm"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      {link.name}
                      {link.url.startsWith('http') && <ExternalLink className="w-3 h-3 ml-0.5 opacity-70" />}
                    </a>
                  ))}

                  <button
                    onClick={() => toggleAbstract(pub.id)}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
                    aria-expanded={expandedAbstracts[pub.id]}
                  >
                    <span>Abstract</span>
                    {expandedAbstracts[pub.id] ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>

                  {pub.bibtex && (
                    <button
                      onClick={() => copyToClipboard(pub.bibtex!, pub.id)}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                        copiedBibtex === pub.id
                          ? 'bg-teal text-white border-teal'
                          : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
                      }`}
                      title="Copy BibTeX Citation"
                    >
                      {copiedBibtex === pub.id ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-slate-500" />
                          <span>BibTeX</span>
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>

              {/* Collapsible Abstract & Citation View */}
              {expandedAbstracts[pub.id] && (
                <div className="mt-4 pt-4 border-t border-slate-100 animate-fade-in space-y-3">
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <span className="font-semibold text-navy-900 block mb-1">Abstract:</span>
                    {pub.abstract}
                  </p>

                  {pub.bibtex && (
                    <div>
                      <div className="flex items-center justify-between text-xs text-slate-500 font-semibold mb-1">
                        <span>BibTeX Citation</span>
                        <button
                          onClick={() => copyToClipboard(pub.bibtex!, pub.id)}
                          className="text-teal hover:underline text-[11px]"
                        >
                          {copiedBibtex === pub.id ? 'Copied to clipboard' : 'Click to copy'}
                        </button>
                      </div>
                      <pre className="text-xs bg-navy-950 text-slate-200 p-3.5 rounded-xl overflow-x-auto font-mono leading-tight">
                        {pub.bibtex}
                      </pre>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Comprehensive Research Projects Section */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-slate-200">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-navy-900 flex items-center gap-2">
              <Layers className="w-5 h-5 text-teal" />
              Detailed Research Projects
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Doctoral investigations at Khalifa University and master's research at IISER Mohali.
            </p>
          </div>

          {/* Topic Filter Chips */}
          <div className="flex items-center gap-1 overflow-x-auto pb-1">
            <button
              onClick={() => setSelectedTag('all')}
              className={`px-2.5 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                selectedTag === 'all'
                  ? 'bg-navy-900 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              All Topics
            </button>
            {allTags.slice(0, 4).map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                  selectedTag === tag
                    ? 'bg-teal text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    {project.status === 'active' && (
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                        Current Investigation
                      </span>
                    )}
                    {project.status === 'in_preparation' && (
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200">
                        Manuscript in Prep
                      </span>
                    )}
                    <span className="text-xs text-slate-500 font-semibold flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {project.period}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold font-heading text-navy-900">
                    {project.title}
                  </h3>
                  <p className="text-xs text-teal font-semibold mt-0.5">
                    Supervisor: {project.supervisor} • {project.institution}
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mt-2 mb-4">
                {project.description}
              </p>

              {/* Highlights */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 mb-4">
                <span className="text-xs font-bold text-navy-900 block mb-2">Key Methodologies & Findings:</span>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  {project.highlights.map((hl, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2">
                      <span className="text-teal font-bold">•</span>
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-100">
                <Tag className="w-3 h-3 text-slate-400 mr-1" />
                {project.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    onClick={() => setSelectedTag(tag)}
                    className="px-2 py-0.5 rounded-md text-[11px] font-semibold bg-slate-100 text-slate-600 hover:bg-slate-200 cursor-pointer transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
