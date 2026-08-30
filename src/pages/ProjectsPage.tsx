import React, { useState } from 'react';
import { 
  Cpu, 
  Atom, 
  Binary, 
  Globe2, 
  Compass, 
  Telescope, 
  Code2, 
  CheckCircle2,
  Terminal
} from 'lucide-react';
import { computationalProjects } from '../data/projectsData';

export const ProjectsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    'all',
    'Astrophysics Code',
    'Bayesian Inference',
    'Cosmology',
    'Data Pipeline'
  ];

  const filteredProjects = selectedCategory === 'all'
    ? computationalProjects
    : computationalProjects.filter(p => p.category === selectedCategory);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Atom':
        return <Atom className="w-5 h-5 text-teal" />;
      case 'Binary':
        return <Binary className="w-5 h-5 text-teal" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-teal" />;
      case 'Globe2':
        return <Globe2 className="w-5 h-5 text-teal" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-teal" />;
      case 'Telescope':
        return <Telescope className="w-5 h-5 text-teal" />;
      default:
        return <Code2 className="w-5 h-5 text-teal" />;
    }
  };

  return (
    <div className="py-10 sm:py-14 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 text-xs font-bold text-teal uppercase tracking-wider mb-1">
          <Terminal className="w-4 h-4" />
          Computational Astrophysics & Software Tools
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold font-heading text-navy-900">
          Projects & Code
        </h1>
        <p className="text-slate-600 text-sm sm:text-base mt-1">
          Numerical solvers, high-performance computing pipelines, and statistical modeling toolsets developed for research.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none border-b border-slate-200">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 py-2 rounded-t-lg text-xs font-semibold whitespace-nowrap transition-all border-b-2 ${
              selectedCategory === cat
                ? 'border-teal text-teal font-bold bg-white'
                : 'border-transparent text-slate-500 hover:text-navy-900'
            }`}
          >
            {cat === 'all' ? 'All Projects' : cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-teal/10 border border-teal/20">
                  {getIcon(project.iconName)}
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                  {project.category}
                </span>
              </div>

              <h2 className="text-lg font-bold font-heading text-navy-900 mb-2">
                {project.title}
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Key Features */}
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 mb-4">
                <span className="text-xs font-bold text-navy-900 block mb-2">Capabilities:</span>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  {project.keyFeatures.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              {/* Tech Stack Chips */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100">
                {project.techStack.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2 py-0.5 rounded-md text-[11px] font-semibold bg-navy-900 text-slate-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
