import React, { useState } from 'react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { ArrowUpRight, Github, ExternalLink, Sparkles, Layers } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const { projects } = PORTFOLIO_DATA;
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ['All', 'Web Systems', 'AI & ML', 'Assistive Tech'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 border-b border-slate-800/60 bg-[#0b0f17]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-semibold tracking-wider text-amber-400 uppercase">
              03. Featured Projects
            </div>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white font-display">
              Applied engineering & hackathon prototypes.
            </h2>
            <p className="mt-2 text-base text-slate-300 max-w-2xl">
              Real-world systems designed with functional backends, intuitive user experiences, and societal impact.
            </p>
          </div>

          {/* Interactive Category Filter Buttons */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl overflow-x-auto shrink-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-amber-400 text-slate-950 font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-slate-900/50 hover:bg-slate-900/80 border border-slate-800 hover:border-slate-700/80 transition-all duration-300"
            >
              <div>
                {/* Visual Thumbnail */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f1420] via-transparent to-transparent opacity-80" />
                  
                  {/* Subtle top metadata */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-[11px] text-white bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-md border border-slate-700/60">
                    <span className="font-semibold text-amber-300">{project.category}</span>
                    <span className="text-slate-400">{project.event || 'Core Project'}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  {/* Unboxed Metadata (NO PILLS) */}
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 font-medium mb-2.5">
                    <span>{project.role}</span>
                    {project.team && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span className="text-amber-400/90">{project.team}</span>
                      </>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white font-display group-hover:text-amber-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="mt-2.5 text-sm text-slate-300 leading-relaxed line-clamp-3">
                    {project.shortDescription}
                  </p>

                  {/* Unboxed Tech List */}
                  <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-400 font-mono">
                    <span className="text-slate-500 font-sans">Stack:</span>
                    {project.techStack.map((tech, i) => (
                      <React.Fragment key={tech}>
                        <span className="text-slate-300">{tech}</span>
                        {i < project.techStack.length - 1 && <span className="text-slate-600">·</span>}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 pb-6 pt-2 border-t border-slate-800/80 flex items-center justify-between">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors"
                >
                  <span>View Details & Architecture</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 text-slate-400 hover:text-white transition-colors"
                    title="View GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Deep Dive Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
