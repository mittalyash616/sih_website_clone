import React, { useState } from 'react';
import { motion } from 'motion/react';
import { TIMELINE_MILESTONES } from '../data/sihData';
import { TimelineMilestone } from '../types/sih';
import { Calendar, CheckCircle2, Clock, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { sound } from '../utils/audio';

export const TimelineSection: React.FC = () => {
  const [selectedMilestone, setSelectedMilestone] = useState<TimelineMilestone>(
    TIMELINE_MILESTONES.find((m) => m.status === 'active') || TIMELINE_MILESTONES[1]
  );

  return (
    <section id="timeline" className="py-24 relative overflow-hidden bg-[#06080e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#FF772A] mb-3">
              <span>04 / ROADMAP & CHRONOLOGY</span>
            </div>
            <h2 className="font-syne text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
              The Path to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40">
                National Stage & Incubation
              </span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-white/60 max-w-md font-light leading-relaxed">
            From internal campus screening to the 36-hour non-stop Grand Finale and ministry venture incubation. Follow each milestone carefully.
          </p>
        </div>

        {/* Horizontal Stepper Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-10">
          {TIMELINE_MILESTONES.map((milestone) => {
            const isSelected = selectedMilestone.step === milestone.step;
            const isDone = milestone.status === 'completed';
            const isActive = milestone.status === 'active';

            return (
              <button
                key={milestone.step}
                onClick={() => {
                  sound.playClick();
                  setSelectedMilestone(milestone);
                }}
                onMouseEnter={() => sound.playHover()}
                className={`p-4 rounded-2xl text-left transition-all border relative overflow-hidden flex flex-col justify-between min-h-[140px] ${
                  isSelected
                    ? 'bg-[#121826] border-[#FF772A] shadow-[0_0_25px_rgba(255,119,42,0.2)]'
                    : 'bg-[#0b0e16] border-white/5 hover:border-white/20'
                }`}
              >
                {/* Top line status */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-white/40">
                    PHASE {milestone.step}
                  </span>

                  {isDone ? (
                    <span className="w-5 h-5 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 flex items-center justify-center text-[10px]">
                      ✓
                    </span>
                  ) : isActive ? (
                    <span className="flex h-2.5 w-2.5 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF772A] opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FF772A]" />
                    </span>
                  ) : (
                    <span className="w-2 h-2 rounded-full bg-white/20" />
                  )}
                </div>

                {/* Milestone Short Title */}
                <div className="my-2">
                  <h4 className="font-syne text-xs sm:text-sm font-bold text-white line-clamp-2 leading-snug">
                    {milestone.title}
                  </h4>
                </div>

                {/* Date range */}
                <div className="text-[11px] font-mono text-white/50">
                  {milestone.dateRange}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Phase Deep Dive Display Card */}
        <motion.div
          key={selectedMilestone.step}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left: Overview */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#FF772A]/15 text-[#FF9254] border border-[#FF772A]/30">
                  PHASE {selectedMilestone.step} • {selectedMilestone.status.toUpperCase()}
                </span>
                <span className="text-xs font-mono text-white/50 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {selectedMilestone.dateRange}
                </span>
              </div>

              <h3 className="font-syne text-2xl sm:text-3xl font-bold text-white mb-4">
                {selectedMilestone.title}
              </h3>

              <p className="text-sm sm:text-base text-white/70 leading-relaxed mb-6 font-light">
                {selectedMilestone.description}
              </p>

              {/* Checkpoints list */}
              <div className="space-y-3">
                <h5 className="text-xs font-mono uppercase tracking-widest text-white/40 font-semibold">
                  Critical Requirements & Rubrics
                </h5>
                {selectedMilestone.details.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-white/80">
                    <CheckCircle2 className="w-4 h-4 text-[#FF772A] shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Quick Action Callout */}
            <div className="bg-[#0b0e17] rounded-2xl border border-white/10 p-6 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#FF772A] mb-4">
                  <Sparkles className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-white/40">
                  Portal Milestone Directive
                </span>
                <h4 className="font-syne text-lg font-bold text-white mt-1 mb-2">
                  {selectedMilestone.actionItem}
                </h4>
                <p className="text-xs text-white/60 leading-relaxed">
                  Teams must synchronize with their College SPOC to ensure all verification documents and identity credentials meet national guidelines before deadline expiry.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 text-[11px] font-mono text-white/40 flex items-center justify-between">
                <span>AICTE Evaluation Portal</span>
                <span className="text-[#FF772A]">2026 Season</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
