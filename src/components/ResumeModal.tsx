import React, { useEffect, useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { X, Printer, Download, Copy, Check, ExternalLink, Mail, Phone, MapPin, Globe, Github, Linkedin } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const { personal, education, skills, projects, certificates, participations } = PORTFOLIO_DATA;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const resumeText = `
SHARADHI ACHARYA
AI & Data Science Engineer
Email: ${personal.email} | Phone: +91 ${personal.displayPhone}
Location: ${personal.location}
LinkedIn: ${personal.linkedin} | GitHub: ${personal.github}

EDUCATION:
- BE in Artificial Intelligence and Data Science (2024-2028), CGPA: 8.2
  Shri Madhwa Vadiraja Institute of Technology and Management, Bantakal, Udupi
- PUC (2024): GPUC Brahmavar - 90%
- SSLC (2022): GPUC Brahmavar - 93%

TECHNICAL SKILLS:
- Programming: Python, C
- Web Technologies: HTML, CSS, JavaScript
- Databases: MySQL, MongoDB
- Tools: GitHub, VS Code, Antigravity
- Soft Skills: Communication, Teamwork, Time Management, Problem Solving, Quick Learning
- Languages: English, Kannada, Tulu

PROJECTS:
1. Banking Management System (Python, Flask, MySQL)
   Developed web-based system to manage customer accounts, transactions, and banking data.
2. EduQuest (JavaScript, Gamification UI)
   Gamified learning platform developed in IEEE Bangalore 24-hr Hackathon (Team Yugma).
3. Skill Mapper (Python, Web Technologies)
   Career-readiness platform mapping skill gaps and recommending tailored roadmaps.
4. AI Voice for Mute Mate (Assistive Speech Synthesis)
   Presented at IDEATHON 2025 at CIT Gubbi with Team VocalTech.

CERTIFICATIONS & PARTICIPATION:
- Machine Learning Onramp — MathWorks, 2025
- Artificial Intelligence Beginners Guide — 2026
- Hands-on Workshop on Understanding Agentic AI — ExvisIT 2026
- ANVESHAN 2025 (IEEE Bangalore 24-hr Hackathon)
- IDEATHON 2025 (CIT Gubbi, Tumkur)
- SMVITM Tech Fest
    `.trim();

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-sm animate-in fade-in"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl text-slate-100 p-4 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Floating Controls (Hidden in print) */}
        <div className="no-print flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-white">Curriculum Vitae</span>
            <span className="text-xs text-amber-400 font-mono">(ATS Formatted)</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors border border-slate-700"
              title="Copy plain text resume"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied!' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-sm transition-all"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white bg-slate-800/80 rounded-lg ml-2"
              aria-label="Close resume modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Container (White in print, deep slate in modal) */}
        <div className="print-content bg-white text-slate-900 p-6 sm:p-10 rounded-xl shadow-lg font-sans leading-relaxed selection:bg-amber-100 selection:text-slate-900">
          
          {/* Header Row */}
          <div className="border-b-2 border-slate-900 pb-5 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-950 uppercase font-display">
                {personal.shortName}
              </h1>
              <div className="text-sm font-bold text-amber-700 tracking-wide mt-0.5">
                BE in Artificial Intelligence and Data Science
              </div>
            </div>

            {/* Contact details */}
            <div className="text-xs text-slate-700 space-y-1 sm:text-right font-mono">
              <div>Ph: +91 {personal.displayPhone}</div>
              <div>Email: {personal.email}</div>
              <div>Add: {personal.location}</div>
              <div>
                <a href={personal.linkedin} target="_blank" rel="noreferrer" className="text-blue-700 hover:underline">
                  {personal.linkedinDisplay}
                </a>
              </div>
              <div>
                <a href={personal.github} target="_blank" rel="noreferrer" className="text-blue-700 hover:underline">
                  {personal.githubDisplay}
                </a>
              </div>
            </div>
          </div>

          {/* Two-Column Grid matching Resume design */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-xs sm:text-[13px]">
            
            {/* Left Column: Education & Skills */}
            <div className="md:col-span-5 space-y-6">
              
              {/* EDUCATION */}
              <div>
                <h2 className="text-xs font-black tracking-widest text-slate-900 uppercase border-b border-slate-300 pb-1 mb-3">
                  E D U C A T I O N
                </h2>
                
                <div className="space-y-3">
                  <div>
                    <div className="font-bold text-slate-950 text-sm">
                      BE in Artificial Intelligence and Data Science
                    </div>
                    <div className="text-slate-700 italic">
                      Shri Madhwa Vadiraja Institute of Technology and Management, Bantakal, Udupi
                    </div>
                    <div className="text-slate-900 font-semibold mt-0.5">
                      Year: 2024 – 2028 | CGPA: 8.2
                    </div>
                  </div>

                  <div>
                    <div className="font-bold text-slate-950">PUC</div>
                    <div className="text-slate-700">GPUC Brahmavar | Year: 2024</div>
                    <div className="text-slate-900 font-semibold">Percentage: 90%</div>
                  </div>

                  <div>
                    <div className="font-bold text-slate-950">SSLC</div>
                    <div className="text-slate-700">GPUC Brahmavar | Year: 2022</div>
                    <div className="text-slate-900 font-semibold">Percentage: 93%</div>
                  </div>
                </div>
              </div>

              {/* SKILLS */}
              <div>
                <h2 className="text-xs font-black tracking-widest text-slate-900 uppercase border-b border-slate-300 pb-1 mb-3">
                  S K I L L S
                </h2>

                <div className="space-y-2.5">
                  <div>
                    <span className="font-bold text-slate-950">Technical Skill: </span>
                    <div className="mt-1 space-y-1 text-slate-800">
                      <div><strong className="text-slate-900">Programming:</strong> Python, C</div>
                      <div><strong className="text-slate-900">Web technologies:</strong> HTML, CSS, JavaScript</div>
                      <div><strong className="text-slate-900">Database:</strong> MySQL, MongoDB</div>
                      <div><strong className="text-slate-900">Tools:</strong> Github, VS code, Antigravity</div>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-200">
                    <span className="font-bold text-slate-950">Soft Skill: </span>
                    <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-slate-800">
                      <span>Communication</span>
                      <span>·</span>
                      <span>TeamWork</span>
                      <span>·</span>
                      <span>Time management</span>
                      <span>·</span>
                      <span>Problem Solving</span>
                      <span>·</span>
                      <span>Quick learning</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-200">
                    <span className="font-bold text-slate-950">Languages: </span>
                    <span className="text-slate-800">English, Kannada, Tulu</span>
                  </div>
                </div>
              </div>

              {/* HOBBIES IN RESUME MODAL */}
              <div className="pt-2 border-t border-slate-200">
                <h2 className="text-xs font-black tracking-widest text-slate-900 uppercase pb-1 mb-2">
                  H O B B I E S & I N T E R E S T S
                </h2>
                <div className="text-slate-800 leading-normal">
                  Singing (Vocal & Light Music) · Reading · Active Listening · Spending time with family
                </div>
              </div>

            </div>

            {/* Right Column: Projects, Certifications, Participations */}
            <div className="md:col-span-7 space-y-6">
              
              {/* CERTIFICATE */}
              <div>
                <h2 className="text-xs font-black tracking-widest text-slate-900 uppercase border-b border-slate-300 pb-1 mb-3">
                  C E R T I F I C A T E
                </h2>
                <ul className="space-y-2 text-slate-800">
                  <li>
                    <strong className="text-slate-950">Machine Learning Onramp</strong> — MathWorks, 2025
                  </li>
                  <li>
                    <strong className="text-slate-950">Artificial Intelligence Beginners Guide</strong> — 2026
                  </li>
                  <li>
                    <strong className="text-slate-950">Hands-on Workshop on “Understanding Agentic AI”</strong> — ExvisIT 2026
                  </li>
                </ul>
              </div>

              {/* PARTICIPATION */}
              <div>
                <h2 className="text-xs font-black tracking-widest text-slate-900 uppercase border-b border-slate-300 pb-1 mb-3">
                  P A R T I C I P A T I O N
                </h2>
                <div className="space-y-2.5 text-slate-800">
                  <div>
                    <strong className="text-slate-950">ANVESHAN 2025:</strong> 24-Hour Hackathon, organized by IEEE Bangalore, where I worked in Team Yugma and contributed to developing <em className="text-slate-950">EduQuest</em>, a gamified mobile and web-based learning application.
                  </div>
                  <div>
                    <strong className="text-slate-950">IDEATHON-2025 – General Innovation:</strong> Presenting <em className="text-slate-950">“AI Voice for Mute Mate”</em> as an assistive-technology solution and contributing as a Developer in Team VocalTech at CIT Gubbi, Tumkur.
                  </div>
                  <div>
                    <strong className="text-slate-950">SMVITM Tech Fest:</strong> Presenting <em className="text-slate-950">Skill Mapper</em>, a career-readiness platform that helps students identify skill gaps and plan their career development.
                  </div>
                </div>
              </div>

              {/* PROJECT */}
              <div>
                <h2 className="text-xs font-black tracking-widest text-slate-900 uppercase border-b border-slate-300 pb-1 mb-3">
                  P R O J E C T
                </h2>

                <div className="space-y-3 text-slate-800">
                  <div>
                    <div className="font-bold text-slate-950 text-sm">
                      Banking Management System
                    </div>
                    <p className="mt-0.5">
                      Developed a web-based banking management system to manage customer accounts, transactions, and banking data using Python, Flask, and MySQL.
                    </p>
                  </div>

                  <div>
                    <div className="font-bold text-slate-950 text-sm">
                      EduQuest
                    </div>
                    <p className="mt-0.5">
                      Developed an interactive learning platform that provides engaging learning activities and quizzes to help students learn in an easy and interesting way.
                    </p>
                  </div>

                  <div>
                    <div className="font-bold text-slate-950 text-sm">
                      Skill Mapper
                    </div>
                    <p className="mt-0.5">
                      Developed a skill mapping platform that helps students identify their skills and skill gaps and provides suitable career and learning recommendations.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Footer note in printed CV */}
          <div className="mt-8 pt-4 border-t border-slate-300 text-[10px] text-slate-500 text-center">
            Portfolio & Codebase: {personal.githubDisplay} · Contact: {personal.email}
          </div>

        </div>

      </div>
    </div>
  );
};
