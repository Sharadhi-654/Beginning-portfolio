import React, { useEffect } from 'react';
import { Project } from '../data/portfolioData';
import { X, Github, ExternalLink, CheckCircle2, Layers, Award, Terminal } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0f1420] border border-slate-700/80 rounded-2xl shadow-2xl text-slate-100 p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 rounded-lg transition-colors z-10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Metadata (Unboxed) */}
        <div className="flex flex-wrap items-center gap-2 text-xs text-amber-400 font-medium mb-2">
          <span>{project.category}</span>
          {project.event && (
            <>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-300">{project.event}</span>
            </>
          )}
          {project.team && (
            <>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-300">{project.team}</span>
            </>
          )}
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span className="text-slate-400">{project.role}</span>
        </div>

        {/* Project Title */}
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
          {project.title}
        </h3>

        {/* High-Fidelity Project Mockup */}
        <div className="mt-5 relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-slate-900 border border-slate-800">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
            referrerPolicy="no-referrer"
            onError={(e) => {
              const target = e.currentTarget;
              target.style.display = 'none';
              const parent = target.parentElement;
              if (parent) {
                parent.classList.add('flex', 'items-center', 'justify-center', 'bg-slate-800', 'text-slate-400');
                parent.innerHTML = `<div class="p-6 text-center"><div class="font-display text-lg text-white">${project.title}</div><div class="text-xs text-amber-400 mt-1">${project.category}</div></div>`;
              }
            }}
          />
        </div>

        {/* Tech Stack Unboxed Row */}
        <div className="mt-5 flex flex-wrap items-center gap-2 text-xs text-slate-300">
          <span className="text-slate-400 font-semibold">Tech Stack:</span>
          {project.techStack.map((tech, i) => (
            <React.Fragment key={tech}>
              <span className="bg-slate-800/80 px-2 py-0.5 rounded text-amber-300 font-mono text-[11px] border border-slate-700">
                {tech}
              </span>
              {i < project.techStack.length - 1 && <span className="text-slate-600">·</span>}
            </React.Fragment>
          ))}
        </div>

        {/* Body Content */}
        <div className="mt-6 space-y-5 text-sm sm:text-base text-slate-300 leading-relaxed">
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider text-slate-400 mb-1">
              Overview & Problem Solved
            </h4>
            <p>{project.fullDescription}</p>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider text-slate-400 mb-2">
              Key Engineering Features
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
              {project.keyFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800/80">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-slate-300">{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Highlights & Impact */}
          {project.highlights && (
            <div className="bg-amber-400/5 border border-amber-400/20 rounded-xl p-4 flex items-start gap-3">
              <Award className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-semibold text-amber-300 uppercase">Impact & Recognition</div>
                <div className="text-xs sm:text-sm text-slate-300 mt-0.5">{project.highlights}</div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="mt-8 pt-5 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-slate-400 font-mono">
            Repository: {project.githubUrl || 'Available on GitHub'}
          </div>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors border border-slate-700"
              >
                <Github className="w-4 h-4" />
                <span>View on GitHub</span>
              </a>
            )}

            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
