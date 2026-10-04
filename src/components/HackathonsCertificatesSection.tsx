import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Trophy, Award, Calendar, CheckCircle2, Flame, Sparkles } from 'lucide-react';

export const HackathonsCertificatesSection: React.FC = () => {
  const { participations, certificates } = PORTFOLIO_DATA;

  return (
    <section id="hackathons" className="py-20 border-b border-slate-800/60 bg-[#090d14]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold tracking-wider text-amber-400 uppercase">
            04. Hackathons & Honors
          </div>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white font-display">
            High-intensity hackathons & certified credentials.
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Pushing boundaries in 24-hour sprints, collaborating across cross-functional teams, and pursuing specialized AI certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Hackathons & Presentations */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-sm font-semibold text-white">
              <Trophy className="w-4 h-4 text-amber-400" />
              <span>Competitions & Presentations</span>
            </div>

            <div className="space-y-4">
              {participations.map((item, idx) => (
                <div 
                  key={idx}
                  className="bg-slate-900/50 hover:bg-slate-900/80 border border-slate-800 hover:border-slate-700/80 rounded-2xl p-6 transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                    <h3 className="text-base sm:text-lg font-bold text-white font-display">
                      {item.title}
                    </h3>
                    <div className="text-xs font-mono text-amber-400 font-medium">
                      {item.year}
                    </div>
                  </div>

                  {/* Unboxed Metadata (NO PILLS) */}
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 mb-3">
                    <span className="text-slate-300 font-medium">{item.organizer}</span>
                    {item.team && (
                      <>
                        <span aria-hidden="true" className="text-slate-600">·</span>
                        <span className="text-amber-300/90">{item.team}</span>
                      </>
                    )}
                    <span aria-hidden="true" className="text-slate-600">·</span>
                    <span className="text-slate-400">{item.role}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Professional Certifications */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 text-sm font-semibold text-white">
              <Award className="w-4 h-4 text-amber-400" />
              <span>Verified Certifications</span>
            </div>

            <div className="space-y-4">
              {certificates.map((cert, idx) => (
                <div 
                  key={idx}
                  className="bg-slate-900/50 border border-slate-800 rounded-2xl p-5 hover:border-slate-700 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h4 className="text-sm font-bold text-white">
                          {cert.title}
                        </h4>
                        <div className="text-xs text-amber-400 font-medium mt-0.5">
                          {cert.issuer}
                        </div>
                      </div>
                      <span className="text-xs font-mono text-slate-400 shrink-0">
                        {cert.year}
                      </span>
                    </div>

                    <p className="mt-2.5 text-xs text-slate-300 leading-relaxed">
                      {cert.description}
                    </p>
                  </div>

                  {/* Unboxed tag separator */}
                  <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                    <span>Discipline: <span className="text-slate-200">{cert.tag}</span></span>
                    <span className="text-emerald-400 flex items-center gap-1 font-mono">
                      <CheckCircle2 className="w-3 h-3" /> Verified
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Agentic AI Note */}
            <div className="bg-amber-400/5 border border-amber-400/20 rounded-2xl p-5">
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Next-Gen AI Focus</span>
              </div>
              <p className="mt-1.5 text-xs text-slate-300 leading-relaxed">
                Actively exploring Agentic AI workflows, tool calling, and autonomous execution pipelines through continuous practical experimentation.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
