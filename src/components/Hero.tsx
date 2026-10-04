import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Github, Linkedin, Mail, Phone, MapPin, ArrowDown, Sparkles, Terminal, Code2, Cpu } from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
  onExploreProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onExploreProjects }) => {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section className="relative overflow-hidden pt-10 pb-16 md:pt-16 md:pb-24 border-b border-slate-800/60">
      {/* Background radial glow */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[720px] h-[520px] bg-amber-500/10 blur-[130px] rounded-full"
      />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Editorial intro & copy */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Availability Kicker (Unboxed text with subtle dot indicator) */}
            <div className="flex items-center gap-2 text-xs font-medium text-amber-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Internships & Collaborations</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400">Class of 2028</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-display text-balance leading-[1.12]">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">{personal.fullName}</span>.
              <span className="block mt-2 text-slate-200 text-3xl sm:text-4xl lg:text-5xl font-semibold">
                Building AI systems with code, creativity & empathy.
              </span>
            </h1>

            {/* Unboxed Metadata Line */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm text-slate-400 font-medium">
              <span>BE in Artificial Intelligence & Data Science</span>
              <span aria-hidden="true" className="text-slate-600">/</span>
              <span>SMVITM Udupi</span>
              <span aria-hidden="true" className="text-slate-600">/</span>
              <span className="text-amber-400 font-semibold">CGPA 8.2</span>
              <span aria-hidden="true" className="text-slate-600">/</span>
              <span className="flex items-center gap-1 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                Brahmavar, Udupi
              </span>
            </div>

            {/* Subtitle Bio */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Passionate engineer crafting full-stack software and intelligent machine learning models. 
              From developing gamified platforms at 24-hour IEEE hackathons to designing assistive voice tech, 
              I blend technical precision with human-centric solutions.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onExploreProjects}
                className="px-5 py-2.5 text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-md hover:shadow-amber-400/25 transition-all inline-flex items-center gap-2"
              >
                <span>View My Projects</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenResume}
                className="px-5 py-2.5 text-sm font-medium text-slate-200 hover:text-white bg-slate-800/80 hover:bg-slate-700 border border-slate-700 rounded-lg transition-all"
              >
                View Full Resume
              </button>

              <a
                href="#contact"
                className="px-4 py-2.5 text-sm font-medium text-slate-400 hover:text-amber-400 transition-colors"
              >
                Get in touch →
              </a>
            </div>

            {/* Social & Contact Bar */}
            <div className="pt-4 border-t border-slate-800/60 flex flex-wrap items-center gap-4 text-xs text-slate-400">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4 text-slate-300" />
                <span>Sharadhi-654</span>
              </a>

              <span aria-hidden="true" className="text-slate-700">|</span>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
                <span>LinkedIn Profile</span>
              </a>

              <span aria-hidden="true" className="text-slate-700">|</span>

              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-amber-400" />
                <span>{personal.email}</span>
              </a>
            </div>

          </div>

          {/* Right Column: High-Tech Developer Terminal & Engineering Card (No Photo) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Terminal Frame */}
              <div className="relative rounded-2xl bg-[#0d121c] border border-slate-800 shadow-2xl overflow-hidden">
                
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#111726] border-b border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
                    <Terminal className="w-3.5 h-3.5 text-amber-400" />
                    <span>sharadhi@ai-lab:~</span>
                  </div>
                  <div className="text-[10px] font-mono text-emerald-400">
                    Active
                  </div>
                </div>

                {/* Monogram & Title Banner */}
                <div className="p-5 pb-3 border-b border-slate-800/60 bg-gradient-to-br from-slate-900/90 to-[#0d121c]">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-display font-black text-2xl shadow-lg shadow-amber-400/10 shrink-0">
                      SA
                    </div>
                    <div>
                      <h2 className="text-base font-bold text-white font-display">
                        {personal.fullName}
                      </h2>
                      <div className="text-xs text-amber-400 font-mono mt-0.5">
                        AI & Data Science Engineer
                      </div>
                      <div className="text-[11px] text-slate-400 mt-0.5">
                        SMVITM Bantakal · Udupi, Karnataka
                      </div>
                    </div>
                  </div>
                </div>

                {/* Code Terminal Body */}
                <div className="p-4 sm:p-5 font-mono text-xs text-slate-300 space-y-2 overflow-x-auto bg-[#0a0e17]">
                  <div className="text-slate-500">// Profile Invariants & System Config</div>
                  <div>
                    <span className="text-purple-400">const</span>{' '}
                    <span className="text-amber-300">sharadhi</span> = {'{'}
                  </div>
                  <div className="pl-4 space-y-1 text-[11px] sm:text-xs">
                    <div>
                      <span className="text-slate-400">degree:</span>{' '}
                      <span className="text-emerald-300">"BE in AI & Data Science"</span>,
                    </div>
                    <div>
                      <span className="text-slate-400">cgpa:</span>{' '}
                      <span className="text-amber-400 font-bold tabular-nums">8.2</span>,
                    </div>
                    <div>
                      <span className="text-slate-400">languages:</span>{' '}
                      <span className="text-blue-300">["Python", "C", "JS", "SQL"]</span>,
                    </div>
                    <div>
                      <span className="text-slate-400">hackathons:</span>{' '}
                      <span className="text-rose-300">["IEEE ANVESHAN", "IDEATHON 2025"]</span>,
                    </div>
                    <div>
                      <span className="text-slate-400">hobbies:</span>{' '}
                      <span className="text-emerald-300">["Singing", "Reading", "Listening", "Family"]</span>,
                    </div>
                    <div>
                      <span className="text-slate-400">focus:</span>{' '}
                      <span className="text-amber-300">"Agentic AI & Assistive Tech"</span>
                    </div>
                  </div>
                  <div>{'};'}</div>
                  
                  <div className="pt-2 text-[11px] text-slate-500 flex items-center gap-1.5">
                    <span className="text-emerald-400">➜</span>
                    <span>status:</span>
                    <span className="text-emerald-400 font-medium">ready_for_internships_2025</span>
                  </div>
                </div>

              </div>

              {/* Bottom Quick Metrics Bar */}
              <div className="mt-4 grid grid-cols-3 gap-2.5">
                <div className="bg-slate-900/70 border border-slate-800/80 rounded-xl p-3 text-center">
                  <div className="text-lg font-bold text-amber-400 font-mono tabular-nums">8.2</div>
                  <div className="text-[11px] text-slate-400">Current CGPA</div>
                </div>
                <div className="bg-slate-900/70 border border-slate-800/80 rounded-xl p-3 text-center">
                  <div className="text-lg font-bold text-white font-mono tabular-nums">4+</div>
                  <div className="text-[11px] text-slate-400">Core Projects</div>
                </div>
                <div className="bg-slate-900/70 border border-slate-800/80 rounded-xl p-3 text-center">
                  <div className="text-lg font-bold text-emerald-400 font-mono tabular-nums">3</div>
                  <div className="text-[11px] text-slate-400">Hackathons</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

