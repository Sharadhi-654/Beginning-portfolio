import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Code, Globe, Database, Wrench, Sparkles, CheckCircle2 } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const { skills } = PORTFOLIO_DATA;
  const [activeTab, setActiveTab] = useState<'all' | 'programming' | 'web' | 'databases' | 'tools'>('all');

  const categories = [
    { id: 'all', label: 'All Capabilities' },
    { id: 'programming', label: 'Programming & Core' },
    { id: 'web', label: 'Web Technologies' },
    { id: 'databases', label: 'Databases' },
    { id: 'tools', label: 'Tools & Environments' },
  ];

  return (
    <section id="skills" className="py-20 border-b border-slate-800/60 bg-[#090d14]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-semibold tracking-wider text-amber-400 uppercase">
              02. Technical Toolkit
            </div>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white font-display">
              Skills crafted through coursework & hackathons.
            </h2>
            <p className="mt-2 text-base text-slate-300 max-w-2xl">
              From backend database structures to interactive frontends and AI scripting, here is my hands-on technical stack.
            </p>
          </div>

          {/* Interactive Filter Tabs (Button elements allowed for interactive controls) */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl overflow-x-auto shrink-0 max-w-full">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id as any)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap ${
                  activeTab === cat.id
                    ? 'bg-amber-400 text-slate-950 font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* 1. Programming */}
          {(activeTab === 'all' || activeTab === 'programming') && (
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition-colors">
              <div>
                <div className="flex items-center gap-2 text-sm font-semibold text-white mb-4">
                  <div className="p-2 rounded-lg bg-amber-400/10 text-amber-400 border border-amber-400/20">
                    <Code className="w-4 h-4" />
                  </div>
                  <span>Programming Languages</span>
                </div>

                <div className="space-y-4">
                  {skills.programming.map((prog) => (
                    <div key={prog.name} className="border-b border-slate-800/60 pb-3 last:border-b-0 last:pb-0">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-semibold text-white">{prog.name}</span>
                        <span className="text-xs text-amber-300 font-mono">{prog.level}</span>
                      </div>
                      <p className="text-xs text-slate-400 mt-1">
                        {prog.focus}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-800/80 text-[11px] text-slate-400">
                Applied in Banking System, ML models & algorithms.
              </div>
            </div>
          )}

          {/* 2. Web Technologies */}
          {(activeTab === 'all' || activeTab === 'web') && (
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition-colors">
              <div>
                <div className="flex items-center gap-2 text-sm font-semibold text-white mb-4">
                  <div className="p-2 rounded-lg bg-blue-400/10 text-blue-400 border border-blue-400/20">
                    <Globe className="w-4 h-4" />
                  </div>
                  <span>Web Technologies</span>
                </div>

                <div className="space-y-4">
                  {skills.web.map((item) => (
                    <div key={item.name} className="border-b border-slate-800/60 pb-3 last:border-b-0 last:pb-0">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-semibold text-white">{item.name}</span>
                        <span className="text-xs text-blue-300 font-mono">{item.level}</span>
                      </div>
                      <p className="text-xs text-slate-400 mt-1">
                        {item.focus}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-800/80 text-[11px] text-slate-400">
                Deployed in EduQuest UI, Banking portal & responsive SPAs.
              </div>
            </div>
          )}

          {/* 3. Databases */}
          {(activeTab === 'all' || activeTab === 'databases') && (
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition-colors">
              <div>
                <div className="flex items-center gap-2 text-sm font-semibold text-white mb-4">
                  <div className="p-2 rounded-lg bg-emerald-400/10 text-emerald-400 border border-emerald-400/20">
                    <Database className="w-4 h-4" />
                  </div>
                  <span>Databases & Storage</span>
                </div>

                <div className="space-y-4">
                  {skills.databases.map((db) => (
                    <div key={db.name} className="border-b border-slate-800/60 pb-3 last:border-b-0 last:pb-0">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-semibold text-white">{db.name}</span>
                        <span className="text-xs text-emerald-300 font-mono">{db.level}</span>
                      </div>
                      <p className="text-xs text-slate-400 mt-1">
                        {db.focus}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-800/80 text-[11px] text-slate-400">
                Relational transaction safety & flexible document models.
              </div>
            </div>
          )}

          {/* 4. Tools & Developer Ecosystem */}
          {(activeTab === 'all' || activeTab === 'tools') && (
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition-colors">
              <div>
                <div className="flex items-center gap-2 text-sm font-semibold text-white mb-4">
                  <div className="p-2 rounded-lg bg-purple-400/10 text-purple-400 border border-purple-400/20">
                    <Wrench className="w-4 h-4" />
                  </div>
                  <span>Tools & Environments</span>
                </div>

                <div className="space-y-4">
                  {skills.tools.map((tool) => (
                    <div key={tool.name} className="border-b border-slate-800/60 pb-3 last:border-b-0 last:pb-0">
                      <div className="text-sm font-semibold text-white">{tool.name}</div>
                      <p className="text-xs text-slate-400 mt-1">
                        {tool.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-800/80 text-[11px] text-slate-400">
                Daily driver for coding, git collaboration & rapid builds.
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
