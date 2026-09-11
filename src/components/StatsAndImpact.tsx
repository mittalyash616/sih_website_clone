import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SIH_STATS, PAST_WINNERS } from '../data/sihData';
import { Award, MapPin, Building, Trophy, ExternalLink, ChevronRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { sound } from '../utils/audio';

const NODAL_HUBS = [
  { name: 'IIT Roorkee', state: 'Uttarakhand', domain: 'Railways & Drone Telemetry', teamsHosted: 36 },
  { name: 'IIT Delhi', state: 'New Delhi', domain: 'AI & Indic NLP', teamsHosted: 42 },
  { name: 'COEP Tech University', state: 'Maharashtra', domain: 'Biomedical & Sensors', teamsHosted: 30 },
  { name: 'NIT Trichy', state: 'Tamil Nadu', domain: 'Smart Vehicles & EV', teamsHosted: 28 },
  { name: 'IIT Kharagpur', state: 'West Bengal', domain: 'Space & Ocean Tech', teamsHosted: 34 },
  { name: 'MANIT Bhopal', state: 'Madhya Pradesh', domain: 'Disaster Resilience', teamsHosted: 25 },
];

export const StatsAndImpact: React.FC = () => {
  const [activeStoryIdx, setActiveStoryIdx] = useState(0);
  const activeStory = PAST_WINNERS[activeStoryIdx] || PAST_WINNERS[0];

  return (
    <section id="impact" className="py-24 relative overflow-hidden bg-[#07090f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#FF772A] mb-3">
              <span>06 / TANGIBLE NATIONAL FOOTPRINT</span>
            </div>
            <h2 className="font-syne text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
              Scale That Matters: <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40">
                From Prototype to Mission Production
              </span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-white/60 max-w-md font-light leading-relaxed">
            SIH has evolved into India's premier testing ground for technological self-reliance, with winning solutions deployed by ministries in real-world governance.
          </p>
        </div>

        {/* 6 Key Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {SIH_STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="glass-panel p-5 rounded-2xl border border-white/10 flex flex-col justify-between"
            >
              <div className="text-[10px] font-mono uppercase tracking-wider text-white/40 mb-3">
                {stat.label}
              </div>
              <div className="font-syne text-2xl sm:text-3xl font-extrabold text-white tracking-tight text-glow-saffron">
                {stat.value}
              </div>
              <div className="text-[10px] text-white/50 mt-2 line-clamp-1">
                {stat.desc}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Real Success Stories / Hall of Fame Showcase */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/10 mb-16 relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#FF772A] mb-1">
                <Trophy className="w-4 h-4" />
                <span>SIH HALL OF FAME • PROVEN IMPACT</span>
              </div>
              <h3 className="font-syne text-xl sm:text-2xl font-bold text-white">
                Winning Innovations Serving the Nation
              </h3>
            </div>

            {/* Story selector tabs */}
            <div className="flex flex-wrap gap-2">
              {PAST_WINNERS.map((story, sIdx) => (
                <button
                  key={sIdx}
                  onClick={() => {
                    sound.playClick();
                    setActiveStoryIdx(sIdx);
                  }}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                    activeStoryIdx === sIdx
                      ? 'bg-[#FF772A] text-white font-bold shadow-[0_0_15px_rgba(255,119,42,0.3)]'
                      : 'bg-white/5 hover:bg-white/10 text-white/60'
                  }`}
                >
                  {story.team}
                </button>
              ))}
            </div>
          </div>

          {/* Active Story Details */}
          <motion.div
            key={activeStoryIdx}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="pt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-white/10 text-white/90">
                  {activeStory.edition}
                </span>
                <span className="text-xs font-mono text-[#FF9254]">
                  Adopted by {activeStory.ministry}
                </span>
              </div>

              <h4 className="font-syne text-xl sm:text-2xl font-bold text-white mb-3 leading-snug">
                {activeStory.title}
              </h4>

              <div className="text-xs font-mono text-white/50 mb-4">
                Developed by <span className="text-white font-medium">{activeStory.team}</span> ({activeStory.college})
              </div>

              <div className="bg-white/[0.03] p-4 rounded-xl border border-white/5 mb-4">
                <div className="text-xs font-mono text-emerald-400 font-semibold mb-1 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Real-World Deployment & Impact:</span>
                </div>
                <p className="text-sm text-white/80 leading-relaxed">
                  {activeStory.impact}
                </p>
              </div>

              {activeStory.patentOrStartup && (
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#FF772A]/15 border border-[#FF772A]/30 text-xs font-mono text-[#FF9254]">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{activeStory.patentOrStartup}</span>
                </div>
              )}
            </div>

            {/* Right decorative visual box */}
            <div className="lg:col-span-5 bg-[#05070a] p-6 rounded-2xl border border-white/10 font-mono text-xs">
              <div className="text-white/40 uppercase tracking-widest text-[10px] mb-3">
                Deployment Telemetry
              </div>
              <div className="space-y-3">
                <div>
                  <div className="text-white/40 text-[10px]">ADOPTING ENTITY</div>
                  <div className="text-white font-semibold">{activeStory.ministry}</div>
                </div>
                <div>
                  <div className="text-white/40 text-[10px]">RESEARCH INSTITUTION</div>
                  <div className="text-white font-semibold">{activeStory.college}</div>
                </div>
                <div>
                  <div className="text-white/40 text-[10px]">TECHNOLOGY PILLARS</div>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {activeStory.tags.map((t, i) => (
                      <span key={i} className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] text-white/70">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-emerald-400">
                  <span>TRL LEVEL 8 → 9 DEPLOYED</span>
                  <span>Active Operation</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 108 Nodal Centers Network Showcase */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-xs font-mono text-[#FF772A] uppercase tracking-widest">
                Across India's Premier Hubs
              </span>
              <h3 className="font-syne text-xl sm:text-2xl font-bold text-white mt-1">
                Featured Nodal Centers
              </h3>
            </div>
            <span className="text-xs font-mono text-white/50">
              108 Centers Simultaneously Live
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {NODAL_HUBS.map((hub, idx) => (
              <div
                key={idx}
                className="glass-panel p-5 rounded-2xl border border-white/5 hover:border-white/20 transition-colors"
              >
                <div className="flex items-center justify-between text-xs text-white/40 mb-2">
                  <span className="flex items-center gap-1 font-mono">
                    <MapPin className="w-3.5 h-3.5 text-[#FF772A]" />
                    {hub.state}
                  </span>
                  <span className="font-mono text-[10px]">{hub.teamsHosted} Squads Hosted</span>
                </div>
                <h4 className="font-syne text-base font-bold text-white mb-1">
                  {hub.name}
                </h4>
                <p className="text-xs text-white/60 font-mono">
                  Specialization: {hub.domain}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
