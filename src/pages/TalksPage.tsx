import React, { useState, useMemo } from 'react';
import { 
  Presentation, 
  Search, 
  Calendar, 
  MapPin, 
  Download, 
  FileText, 
  SlidersHorizontal,
  ExternalLink,
  Clock
} from 'lucide-react';
import { talksData, TalkCategory, categoryLabels, TalkItem } from '../data/talksData';

export const TalksPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<TalkCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedYear, setSelectedYear] = useState<number | 'all'>('all');

  const filteredTalks = useMemo(() => {
    return talksData.filter((talk) => {
      const matchesCategory = selectedCategory === 'all' || talk.category === selectedCategory;
      const matchesYear = selectedYear === 'all' || talk.year === selectedYear;
      const matchesSearch = 
        talk.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        talk.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        talk.description.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesYear && matchesSearch;
    });
  }, [selectedCategory, searchQuery, selectedYear]);

  const talksByYear = useMemo(() => {
    const map = new Map<number, TalkItem[]>();
    for (const talk of filteredTalks) {
      if (!map.has(talk.year)) {
        map.set(talk.year, []);
      }
      map.get(talk.year)!.push(talk);
    }
    return Array.from(map.entries()).sort(([a], [b]) => b - a);
  }, [filteredTalks]);

  const allYears = useMemo(() => {
    const yearsSet = new Set(talksData.map(t => t.year));
    return Array.from(yearsSet).sort((a, b) => b - a);
  }, []);

  const categories: { key: TalkCategory | 'all'; label: string }[] = [
    { key: 'all', label: 'All Items' },
    { key: 'conference', label: 'Conference Talks' },
    { key: 'poster', label: 'Posters' },
    { key: 'seminar', label: 'Seminars' },
    { key: 'training', label: 'Workshops & Training' }
  ];

  const getCategoryBadgeClass = (category: TalkCategory) => {
    switch (category) {
      case 'conference':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'poster':
        return 'bg-purple-50 text-purple-700 border-purple-200';
      case 'seminar':
        return 'bg-teal/10 text-teal border-teal/20';
      case 'training':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  return (
    <div className="py-10 sm:py-14 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 text-xs font-bold text-teal uppercase tracking-wider mb-1">
          <Presentation className="w-4 h-4" />
          Conferences, Seminars & Advanced Workshops
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold font-heading text-navy-900">
          Conferences, Presentations & Training
        </h1>
        <p className="text-slate-600 text-sm sm:text-base mt-1">
          Oral presentations, poster sessions, invited departmental seminars, and international particle astrophysics schools.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search talks by title, venue, city, or topic..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
              >
                Clear
              </button>
            )}
          </div>

          <div className="text-xs font-semibold text-slate-500 flex items-center justify-end gap-1.5 px-1">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Showing {filteredTalks.length} of {talksData.length} entries</span>
          </div>
        </div>

        {/* Categories */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {categories.map(({ key, label }) => {
            const count = key === 'all' 
              ? talksData.length 
              : talksData.filter(t => t.category === key).length;
            const isActive = selectedCategory === key;
            return (
              <button
                key={key}
                onClick={() => setSelectedCategory(key)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-teal text-white shadow-sm'
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <span>{label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  isActive ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-600'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Years */}
        <div className="flex items-center gap-1.5 overflow-x-auto pt-1 border-t border-slate-100">
          <span className="text-xs text-slate-500 font-medium mr-1 flex-shrink-0">Year:</span>
          <button
            onClick={() => setSelectedYear('all')}
            className={`px-2.5 py-0.5 rounded text-xs font-medium transition-colors ${
              selectedYear === 'all'
                ? 'bg-navy-900 text-white font-semibold'
                : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            All Years
          </button>
          {allYears.map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-2.5 py-0.5 rounded text-xs font-medium transition-colors ${
                selectedYear === year
                  ? 'bg-navy-900 text-white font-semibold'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {year}
            </button>
          ))}
        </div>
      </div>

      {/* Talks Output */}
      {talksByYear.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-2xl border border-slate-200">
          <Presentation className="w-10 h-10 text-slate-400 mx-auto mb-3" />
          <h3 className="text-base font-semibold text-navy-900">No presentations match your search</h3>
          <p className="text-sm text-slate-500 mt-1">Try resetting your filter or searching for another keyword.</p>
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSelectedYear('all');
              setSearchQuery('');
            }}
            className="mt-4 px-4 py-2 text-xs font-semibold bg-teal text-white rounded-lg hover:bg-teal-dark transition-colors"
          >
            Reset All Filters
          </button>
        </div>
      ) : (
        <div className="space-y-10">
          {talksByYear.map(([year, yearTalks]) => (
            <div key={year} className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-2 bg-navy-900 text-white px-3.5 py-1 rounded-lg shadow-sm font-heading font-bold text-base">
                  <Calendar className="w-4 h-4 text-gold" />
                  <span>{year}</span>
                </div>
                <div className="h-px bg-slate-200 flex-1" />
              </div>

              <div className="space-y-3.5 pl-2 sm:pl-4 border-l-2 border-slate-200 ml-3 sm:ml-4">
                {yearTalks.map((talk) => (
                  <div
                    key={talk.id}
                    className="bg-white rounded-xl border border-slate-200 p-4 sm:p-5 shadow-sm hover:border-slate-300 hover:shadow-md transition-all relative group"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2.5 mb-2">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-1.5">
                          <span className={`badge-tag border text-[11px] font-semibold ${getCategoryBadgeClass(talk.category)}`}>
                            {categoryLabels[talk.category]}
                          </span>
                          <span className="text-xs text-slate-500 font-medium">
                            {talk.date}
                          </span>
                        </div>

                        <h3 className="text-base sm:text-lg font-bold font-heading text-navy-900 group-hover:text-navy-700 transition-colors">
                          {talk.title}
                        </h3>
                      </div>

                      <div className="flex items-center gap-2 flex-shrink-0">
                        {typeof talk.slides === 'string' && (
                          <a
                            href={talk.slides}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-navy-900 text-white hover:bg-navy-800 transition-colors shadow-sm"
                          >
                            <Download className="w-3.5 h-3.5 text-gold" />
                            <span>Download Slides</span>
                            <ExternalLink className="w-3 h-3 opacity-70" />
                          </a>
                        )}

                        {talk.slides === true && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-500 border border-slate-200">
                            <Clock className="w-3 h-3" />
                            Slides soon
                          </span>
                        )}

                        {talk.poster === true && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium bg-purple-50 text-purple-700 border border-purple-200">
                            <FileText className="w-3 h-3" />
                            Poster
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-600 font-medium mb-2">
                      <MapPin className="w-3.5 h-3.5 text-teal flex-shrink-0" />
                      <span>{talk.location}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-100">
                      {talk.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
};
