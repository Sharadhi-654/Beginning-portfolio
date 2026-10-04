import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Mic2, BookOpen, Headphones, HeartHandshake, Play, Pause, Volume2, Sparkles, Quote, BookMarked, Users } from 'lucide-react';

export const HobbiesSection: React.FC = () => {
  const { hobbies } = PORTFOLIO_DATA;
  const [activeHobbyId, setActiveHobbyId] = useState<string>('singing');
  const [isPlayingMelody, setIsPlayingMelody] = useState(false);

  // Gentle web audio harmonic melody player for the Singing hobby
  const playHarmonicChords = () => {
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();

      if (isPlayingMelody) {
        setIsPlayingMelody(false);
        return;
      }

      setIsPlayingMelody(true);

      // Notes of a serene pentatonic scale (C4, D4, E4, G4, A4, C5)
      const notes = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25];
      const now = ctx.currentTime;

      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.35);

        gain.gain.setValueAtTime(0, now + idx * 0.35);
        gain.gain.linearRampToValueAtTime(0.12, now + idx * 0.35 + 0.08);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.35 + 1.2);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now + idx * 0.35);
        osc.stop(now + idx * 0.35 + 1.3);
      });

      // Reset state after scale plays
      setTimeout(() => {
        setIsPlayingMelody(false);
      }, (notes.length * 0.35 + 1.2) * 1000);

    } catch (err) {
      console.log('Audio playback initialized', err);
      setIsPlayingMelody(false);
    }
  };

  const activeHobby = hobbies.find(h => h.id === activeHobbyId) || hobbies[0];

  return (
    <section id="hobbies" className="py-20 border-b border-slate-800/60 bg-[#0b0f17]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wider text-amber-400 uppercase">
            05. Personal Passions & Balance
          </div>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white font-display">
            Life beyond the screen: Singing, reading & family.
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Great engineering is nourished by a grounded, creative life. Here is what brings joy, rhythm, and clarity to my everyday journey.
          </p>
        </div>

        {/* Hobby Selection Cards / Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8">
          {hobbies.map((hobby) => {
            const isActive = hobby.id === activeHobbyId;
            return (
              <button
                key={hobby.id}
                onClick={() => setActiveHobbyId(hobby.id)}
                className={`flex flex-col items-start p-4 sm:p-5 rounded-2xl border text-left transition-all ${
                  isActive
                    ? 'bg-slate-900 border-amber-400/80 shadow-lg shadow-amber-400/5 ring-1 ring-amber-400/50'
                    : 'bg-slate-900/40 border-slate-800/80 hover:bg-slate-900/70 hover:border-slate-700'
                }`}
              >
                <div className={`p-2.5 rounded-xl mb-3 ${
                  isActive ? 'bg-amber-400 text-slate-950' : 'bg-slate-800 text-slate-300'
                }`}>
                  {hobby.id === 'singing' && <Mic2 className="w-5 h-5" />}
                  {hobby.id === 'reading' && <BookOpen className="w-5 h-5" />}
                  {hobby.id === 'listening' && <Headphones className="w-5 h-5" />}
                  {hobby.id === 'family' && <HeartHandshake className="w-5 h-5" />}
                </div>

                <div className="text-sm sm:text-base font-bold text-white font-display">
                  {hobby.title}
                </div>
                <div className="text-[11px] text-slate-400 mt-1 line-clamp-1">
                  {hobby.tagline}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Hobby Showcase Area */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-10 relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Narrative & Reflections */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Featured Passion</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
                {activeHobby.title}
              </h3>

              <p className="text-base text-slate-300 leading-relaxed">
                {activeHobby.description}
              </p>

              {/* Quote Block */}
              <div className="relative border-l-2 border-amber-400 pl-4 py-1 italic text-sm text-slate-300">
                <Quote className="w-4 h-4 text-amber-400/40 absolute -top-2 -left-2 fill-current" />
                {activeHobby.quote}
              </div>

              {/* Key Items / Elements */}
              <div>
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Key Dimensions & Highlights
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
                  {activeHobby.items.map((item, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center gap-2 bg-slate-950/60 px-3 py-2 rounded-lg border border-slate-800"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                      <span className="text-slate-300 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Interactive Experiential Widget */}
            <div className="lg:col-span-5 flex justify-center">
              
              {/* SINGING WIDGET */}
              {activeHobby.id === 'singing' && (
                <div className="w-full max-w-sm bg-slate-950/80 border border-slate-800 rounded-2xl p-6 text-center space-y-5">
                  <div className="w-16 h-16 mx-auto rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400">
                    <Mic2 className="w-8 h-8" />
                  </div>

                  <div>
                    <h4 className="text-base font-bold text-white font-display">
                      Harmonic Vocal Scale
                    </h4>
                    <p className="text-xs text-slate-400 mt-1">
                      Play a relaxing pentatonic musical sequence crafted with Web Audio synthesis.
                    </p>
                  </div>

                  {/* Audio Visualizer Waves */}
                  <div className="flex items-center justify-center gap-1.5 h-8">
                    {[16, 28, 20, 32, 24, 18, 30, 14, 22].map((height, i) => (
                      <span
                        key={i}
                        className={`w-1 rounded-full transition-all duration-300 ${
                          isPlayingMelody
                            ? 'bg-amber-400 animate-pulse'
                            : 'bg-slate-700'
                        }`}
                        style={{ height: isPlayingMelody ? `${height}px` : '6px' }}
                      />
                    ))}
                  </div>

                  <button
                    onClick={playHarmonicChords}
                    className="w-full py-2.5 px-4 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    {isPlayingMelody ? (
                      <>
                        <Pause className="w-4 h-4 fill-current" />
                        <span>Playing Peaceful Melody...</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4 fill-current" />
                        <span>Play Melody Chords</span>
                      </>
                    )}
                  </button>

                  <div className="text-[11px] text-slate-400 italic">
                    Inspired by Indian classical ragas & gentle vocal scales.
                  </div>
                </div>
              )}

              {/* READING WIDGET */}
              {activeHobby.id === 'reading' && (
                <div className="w-full max-w-sm bg-slate-950/80 border border-slate-800 rounded-2xl p-6 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-semibold text-amber-300 uppercase">
                    <BookMarked className="w-4 h-4 text-amber-400" />
                    <span>On My Bookshelf</span>
                  </div>

                  <div className="space-y-3">
                    <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
                      <div className="text-xs font-bold text-white">Algorithms to Live By</div>
                      <div className="text-[11px] text-slate-400 mt-0.5">Brian Christian & Tom Griffiths</div>
                      <div className="text-[10px] text-amber-300/80 mt-1">Applying computational concepts to daily decisions.</div>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
                      <div className="text-xs font-bold text-white">Deep Work</div>
                      <div className="text-[11px] text-slate-400 mt-0.5">Cal Newport</div>
                      <div className="text-[10px] text-amber-300/80 mt-1">Focus, undistracted depth, and craft mastery.</div>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
                      <div className="text-xs font-bold text-white">Stories from the Coast (Karavali)</div>
                      <div className="text-[11px] text-slate-400 mt-0.5">Regional Literature & Heritage</div>
                      <div className="text-[10px] text-amber-300/80 mt-1">Cultural roots, storytelling, and local wisdom.</div>
                    </div>
                  </div>
                </div>
              )}

              {/* LISTENING WIDGET */}
              {activeHobby.id === 'listening' && (
                <div className="w-full max-w-sm bg-slate-950/80 border border-slate-800 rounded-2xl p-6 space-y-4 text-center">
                  <div className="w-14 h-14 mx-auto rounded-full bg-blue-400/10 border border-blue-400/30 flex items-center justify-center text-blue-400">
                    <Headphones className="w-7 h-7" />
                  </div>

                  <div>
                    <h4 className="text-base font-bold text-white font-display">
                      The Art of Active Listening
                    </h4>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      "Listening is not waiting for your turn to talk; it is hearing the unspoken needs of users, teammates, and mentors."
                    </p>
                  </div>

                  <div className="bg-slate-900/90 border border-slate-800/80 rounded-xl p-3 text-left space-y-2 text-xs">
                    <div className="font-semibold text-slate-200">How listening shapes my engineering:</div>
                    <ul className="space-y-1.5 text-slate-400 text-[11px]">
                      <li>• Empathizing deeply with end-user pain points</li>
                      <li>• Hearing diverse perspectives in hackathon teams</li>
                      <li>• Learning rapidly from mentors & feedback</li>
                    </ul>
                  </div>
                </div>
              )}

              {/* FAMILY WIDGET */}
              {activeHobby.id === 'family' && (
                <div className="w-full max-w-sm bg-slate-950/80 border border-slate-800 rounded-2xl p-6 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-semibold text-rose-300 uppercase">
                    <Users className="w-4 h-4 text-rose-400" />
                    <span>Grounding Roots in Brahmavar</span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    Growing up in Udupi, family gatherings celebrate unity, kindness, and gratitude. 
                    Whether celebrating traditional coastal festivals, preparing food together, or sharing laughter, family reminds me to stay grounded.
                  </p>

                  <div className="grid grid-cols-2 gap-2 text-center text-xs">
                    <div className="bg-slate-900/90 border border-slate-800 p-2.5 rounded-xl">
                      <div className="font-bold text-white">Unconditional</div>
                      <div className="text-[10px] text-slate-400">Support System</div>
                    </div>
                    <div className="bg-slate-900/90 border border-slate-800 p-2.5 rounded-xl">
                      <div className="font-bold text-white">Cultural Heritage</div>
                      <div className="text-[10px] text-slate-400">Udupi Values</div>
                    </div>
                  </div>

                  <div className="border-t border-slate-800 pt-3 text-[11px] text-amber-300/90 text-center italic">
                    "Success is sweetest when shared with those who believe in you from the start."
                  </div>
                </div>
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
