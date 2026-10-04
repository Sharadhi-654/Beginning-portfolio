import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Github, Linkedin, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const { personal } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800 bg-[#070a0f] text-slate-400 py-12 text-xs">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Note */}
          <div className="text-center md:text-left space-y-1">
            <div className="font-bold text-white text-base font-display">
              {personal.fullName.toUpperCase()}
            </div>
            <div className="text-slate-400">
              AI & Data Science Student · SMVITM Bantakal, Udupi
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-5 text-slate-300">
            <a href="#about" className="hover:text-amber-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-amber-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-amber-400 transition-colors">Projects</a>
            <a href="#hackathons" className="hover:text-amber-400 transition-colors">Hackathons</a>
            <a href="#hobbies" className="hover:text-amber-400 transition-colors">Hobbies</a>
            <a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a>
            <button onClick={onOpenResume} className="hover:text-amber-400 transition-colors">Resume</button>
          </div>

          {/* Social Icons & Back to top */}
          <div className="flex items-center gap-4">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-white bg-slate-900 border border-slate-800 rounded-lg transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-white bg-slate-900 border border-slate-800 rounded-lg transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4 text-blue-400" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 text-slate-400 hover:text-amber-400 bg-slate-900 border border-slate-800 rounded-lg transition-colors"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-400 text-[11px]">
          <div>
            © {new Date().getFullYear()} {personal.fullName}. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            Built with React, TypeScript & Vite
          </div>
        </div>
      </div>
    </footer>
  );
};

