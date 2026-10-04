import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GraduationCap, Languages, Sparkles, Award, UserCheck, BookOpen, Clock, Heart } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { education, skills, personal } = PORTFOLIO_DATA;

  return (
    <section id="about" className="py-20 border-b border-slate-800/60 bg-[#0b0f17]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold tracking-wider text-amber-400 uppercase">
            01. Background & Journey
          </div>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white font-display text-balance">
            Academic foundation paired with relentless curiosity.
          </h2>
          <p className="mt-3 text-base text-slate-300">
            A snapshot of my education, linguistic roots in Udupi, and interpersonal strengths that empower my collaborative work in engineering teams.
          </p>
        </div>

        {/* Grid: Story & Education */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Narrative & Languages */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
              <p>
                I am an undergraduate engineer in <strong className="text-white">Artificial Intelligence and Data Science</strong> at 
                Shri Madhwa Vadiraja Institute of Technology and Management (SMVITM) in Bantakal, Udupi. 
                My hometown of <strong className="text-amber-300">Brahmavar</strong> grounds me with a culture of humility, discipline, and community warmth.
              </p>
              <p>
                Throughout my academic journey, I have maintained high academic standing (SSLC 93%, PUC 90%, and current engineering CGPA 8.2), 
                while actively testing my abilities in high-pressure hackathons like IEEE Bangalore's 24-hour ANVESHAN and regional Ideathons.
              </p>
              <p>
                I believe the most impactful technology is that which serves real people: whether it's an assistive voice tool for non-verbal communicators 
                or an interactive gamified platform that makes STEM accessible for kids.
              </p>
            </div>

            {/* Languages Spoken (Unboxed Clean List) */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 space-y-3">
              <div className="flex items-center gap-2 text-sm font-semibold text-white">
                <Languages className="w-4 h-4 text-amber-400" />
                <span>Languages Known</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                {skills.languages.map((lang) => (
                  <div key={lang.name} className="border-l-2 border-amber-400/60 pl-3">
                    <div className="text-sm font-semibold text-white">{lang.name}</div>
                    <div className="text-xs text-slate-400">{lang.proficiency}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills & Working Style */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 space-y-3">
              <div className="flex items-center gap-2 text-sm font-semibold text-white">
                <UserCheck className="w-4 h-4 text-emerald-400" />
                <span>Interpersonal Strengths</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs">
                {skills.soft.map((item) => (
                  <div key={item.name} className="space-y-0.5">
                    <span className="font-semibold text-slate-200">{item.name}: </span>
                    <span className="text-slate-400">{item.description}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Education Timeline */}
          <div className="lg:col-span-6 space-y-5">
            <div className="flex items-center gap-2 text-sm font-semibold text-white pb-2">
              <GraduationCap className="w-5 h-5 text-amber-400" />
              <span>Academic Credentials</span>
            </div>

            <div className="space-y-4">
              {education.map((edu, idx) => (
                <div 
                  key={idx}
                  className="relative bg-slate-900/50 hover:bg-slate-900/80 border border-slate-800 hover:border-slate-700/80 rounded-xl p-5 transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <div>
                      <h3 className="text-base font-semibold text-white">{edu.degree}</h3>
                      <div className="text-xs sm:text-sm text-amber-300/90 font-medium mt-0.5">
                        {edu.institution}
                      </div>
                      <div className="text-xs text-slate-400 mt-0.5">
                        {edu.location}
                      </div>
                    </div>
                    
                    {/* Score badge & period */}
                    <div className="text-left sm:text-right shrink-0">
                      <div className="inline-block sm:block font-mono text-sm font-bold text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded border border-amber-400/20">
                        {edu.scoreLabel}: {edu.score}
                      </div>
                      <div className="text-xs text-slate-400 mt-1">
                        {edu.period}
                      </div>
                    </div>
                  </div>

                  {edu.details && (
                    <p className="mt-3 text-xs sm:text-sm text-slate-400 border-t border-slate-800/80 pt-2.5 leading-relaxed">
                      {edu.details}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Quote on Engineering & Growth */}
            <div className="border border-dashed border-slate-800 rounded-xl p-4 text-xs text-slate-400 italic">
              "Continuous learning is not merely a goal in computer science; it is the fundamental rhythm of how intelligent systems evolve."
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
