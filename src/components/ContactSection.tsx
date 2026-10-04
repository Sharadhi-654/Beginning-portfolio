import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Mail, Phone, MapPin, Copy, Check, Linkedin, Github, ExternalLink, Sparkles } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  return (
    <section id="contact" className="py-20 bg-[#090d14]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wider text-amber-400 uppercase">
            06. Connect & Collaborate
          </div>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white font-display">
            Get in touch directly.
          </h2>
          <p className="mt-3 text-base text-slate-300">
            I am always open to discussing new internship opportunities, AI and web projects, or professional networking. Feel free to connect across any of the platforms below.
          </p>
        </div>

        {/* 4-Card Contact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          
          {/* Email Card */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition-all group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-amber-400/10 text-amber-400 border border-amber-400/20">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  onClick={() => handleCopy(personal.email, 'email')}
                  className="p-2 text-slate-400 hover:text-white bg-slate-800/80 rounded-lg transition-colors"
                  title="Copy email to clipboard"
                >
                  {copiedType === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="text-xs text-slate-400 font-medium">Email Address</div>
              <div className="text-sm font-semibold text-white mt-1 break-all group-hover:text-amber-400 transition-colors">
                {personal.email}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80">
              <a
                href={`mailto:${personal.email}`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300"
              >
                <span>Write an email</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Phone Card */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition-all group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-emerald-400/10 text-emerald-400 border border-emerald-400/20">
                  <Phone className="w-5 h-5" />
                </div>
                <button
                  onClick={() => handleCopy(personal.displayPhone, 'phone')}
                  className="p-2 text-slate-400 hover:text-white bg-slate-800/80 rounded-lg transition-colors"
                  title="Copy phone number"
                >
                  {copiedType === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="text-xs text-slate-400 font-medium">Phone & WhatsApp</div>
              <div className="text-sm font-semibold text-white mt-1 group-hover:text-emerald-400 transition-colors">
                +91 {personal.displayPhone}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80">
              <a
                href={`tel:${personal.displayPhone}`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300"
              >
                <span>Call or message</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* GitHub Card */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition-all group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-purple-400/10 text-purple-400 border border-purple-400/20">
                  <Github className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono text-slate-400">@Sharadhi-654</span>
              </div>

              <div className="text-xs text-slate-400 font-medium">GitHub Repositories</div>
              <div className="text-sm font-semibold text-white mt-1 group-hover:text-purple-400 transition-colors">
                github.com/Sharadhi-654
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-400 hover:text-purple-300"
              >
                <span>Explore Code & Commits</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* LinkedIn Card */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition-all group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-blue-400/10 text-blue-400 border border-blue-400/20">
                  <Linkedin className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono text-slate-400">Network</span>
              </div>

              <div className="text-xs text-slate-400 font-medium">LinkedIn Profile</div>
              <div className="text-sm font-semibold text-white mt-1 group-hover:text-blue-400 transition-colors">
                Sharadhi Acharya
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80">
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300"
              >
                <span>Connect on LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Location & Availability Banner */}
        <div className="mt-6 bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-slate-800 text-amber-400">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-slate-400 font-medium">Current Location</div>
              <div className="text-sm font-semibold text-white">{personal.location}</div>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-300 bg-slate-950/60 px-4 py-2 rounded-xl border border-slate-800">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{personal.availability}</span>
          </div>
        </div>

      </div>
    </section>
  );
};

