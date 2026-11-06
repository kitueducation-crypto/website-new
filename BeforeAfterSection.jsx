import React, { useState } from 'react';
import { Sparkles, CheckCircle2, ShieldCheck, Award } from 'lucide-react';

export const BeforeAfterSection = () => {
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <section className="py-20 sm:py-24 bg-[#1A1513] text-[#FAF7F5] relative overflow-hidden">
      {/* Background subtle radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-rose-950/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Clinical Stats & Narrative */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-glow-300 text-xs font-bold uppercase tracking-wider mb-3">
                <Award className="w-3.5 h-3.5" />
                <span>Independently Verified Clinical Study</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Transformative Results You Can Measure in Days.
              </h2>
              <p className="text-stone-400 text-sm sm:text-base mt-4 leading-relaxed font-normal">
                Conducted over 8 weeks with 120 diverse participants across all Fitzpatrick skin types. Evaluated by board-certified dermatologists and bio-digital spectrophotometer imaging.
              </p>
            </div>

            {/* Stat Counters */}
            <div className="grid grid-cols-3 gap-6 pt-2 border-t border-stone-800">
              <div>
                <span className="font-serif text-4xl sm:text-5xl font-bold text-glow-300 block">
                  98%
                </span>
                <span className="text-xs text-stone-300 mt-1 block">
                  Noticed a glass-skin bounce & glow in 7 days
                </span>
              </div>
              <div>
                <span className="font-serif text-4xl sm:text-5xl font-bold text-glow-300 block">
                  94%
                </span>
                <span className="text-xs text-stone-300 mt-1 block">
                  Reported deep lipid barrier repair & comfort
                </span>
              </div>
              <div>
                <span className="font-serif text-4xl sm:text-5xl font-bold text-glow-300 block">
                  96%
                </span>
                <span className="text-xs text-stone-300 mt-1 block">
                  Found zero clogging or white residue
                </span>
              </div>
            </div>

            {/* Dermatologist Endorsement */}
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-start gap-4">
              <img
                src="https://images.unsplash.com/photo-1594824813511-382a875a6873?auto=format&fit=crop&w=200&q=80"
                alt="Dr. Camilla Vance"
                className="w-12 h-12 rounded-full object-cover border border-white/20 shrink-0"
              />
              <div>
                <p className="text-xs italic text-stone-300 leading-relaxed">
                  "BeautyGlow bridges pure plant alchemy with biomimetic peptide synthesis. My patients with sensitive skin experience immediate barrier recovery without inflammation."
                </p>
                <div className="mt-2">
                  <span className="text-xs font-bold text-white block">Dr. Camilla Vance, MD, FAAD</span>
                  <span className="text-[10px] text-stone-400">Board-Certified Dermatologist, New York</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Before & After Visual Slider */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl select-none border border-white/10">
              {/* After Image (Background) */}
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=85"
                alt="After BeautyGlow Ritual"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <span className="absolute top-4 right-4 bg-emerald-950/80 backdrop-blur-md text-emerald-300 text-xs font-bold px-3 py-1 rounded-full border border-emerald-500/30">
                Day 14: Luminous Dew
              </span>

              {/* Before Image (Clipped by slider position) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85"
                  alt="Before BeautyGlow Ritual"
                  className="absolute inset-0 w-full h-full object-cover filter saturate-75 brightness-90 max-w-none"
                  style={{ width: '100%', minWidth: '100%' }}
                />
                <span className="absolute top-4 left-4 bg-black/70 backdrop-blur-md text-stone-300 text-xs font-bold px-3 py-1 rounded-full border border-white/20">
                  Day 0: Dull & Tired
                </span>
              </div>

              {/* Slider Divider Line */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)] z-20"
                style={{ left: `${sliderPosition}%` }}
              >
                {/* Center Handle Button */}
                <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white text-black font-bold flex items-center justify-center text-xs shadow-xl cursor-ew-resize">
                  ↔
                </div>
              </div>

              {/* Invisible touch/drag overlay */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={(e) => setSliderPosition(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                aria-label="Before and after comparison slider"
              />
            </div>

            <p className="text-xs text-stone-400 mt-4 flex items-center gap-1.5">
              <span>← Drag slider horizontally to reveal before and after results →</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

