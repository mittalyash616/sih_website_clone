import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Cpu, Leaf, Activity, Sprout, Zap, Rocket, 
  ShieldCheck, AlertTriangle, GraduationCap, Sun, 
  Landmark, Bot, ArrowUpRight, Check 
} from 'lucide-react';
import { SIH_THEMES } from '../data/sihData';
import { sound } from '../utils/audio';
import { useLenis } from './SmoothScroll';

const ICON_MAP: Record<string, React.ElementType> = {
  Cpu, Leaf, Activity, Sprout, Zap, Rocket,
  ShieldCheck, AlertTriangle, GraduationCap, Sun,
  Landmark, Bot
};

export const ThemesSection: React.FC<{ onSelectTheme: (themeTitle: string) => void }> = ({ onSelectTheme }) => {
  const [hoveredTheme, setHoveredTheme] = useState<string | null>(null);
  const { scrollTo } = useLenis();

  const handleCardClick = (themeTitle: string) => {
    sound.playClick();
    onSelectTheme(themeTitle);
    scrollTo('#problem-statements', { offset: -70 });
  };

  return (
    <section id="themes" className="py-24 relative overflow-hidden bg-[#06080e]">
      {/* Background glow spot */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#FF772A]/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#FF772A] mb-3">
              <span>02 / NATIONAL INNOVATION DOMAINS</span>
            </div>
            <h2 className="font-syne text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
              12 Priority Themes for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40">
                Sovereign Technological Leaps
              </span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-white/60 max-w-md font-light leading-relaxed">
            Curated across 65+ Union Ministries to target India's most critical socio-economic imperatives. Select any theme to filter live problem statements.
          </p>
        </div>

        {/* 12 Theme Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {SIH_THEMES.map((theme, idx) => {
            const IconComponent = ICON_MAP[theme.iconName] || Cpu;
            const isHovered = hoveredTheme === theme.id;

            return (
              <motion.div
                key={theme.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
                onMouseEnter={() => {
                  setHoveredTheme(theme.id);
                  sound.playHover();
                }}
                onMouseLeave={() => setHoveredTheme(null)}
                onClick={() => handleCardClick(theme.title)}
                data-cursor="EXPLORE"
                className="group relative p-5 rounded-2xl bg-[#0d121c]/70 hover:bg-[#121826] border border-white/[0.07] hover:border-white/20 transition-all duration-300 flex flex-col justify-between cursor-pointer overflow-hidden shadow-lg"
              >
                {/* Accent ambient glow top-right */}
                <div
                  className="absolute top-0 right-0 w-32 h-32 rounded-full blur-[40px] opacity-0 group-hover:opacity-40 transition-opacity pointer-events-none -mr-8 -mt-8"
                  style={{ backgroundColor: theme.accentColor }}
                />

                <div>
                  {/* Top line with icon and problem count badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: `${theme.accentColor}18`,
                        borderColor: `${theme.accentColor}35`,
                        color: theme.accentColor,
                      }}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>

                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/70 group-hover:text-white">
                      {theme.problemCount} Problems
                    </span>
                  </div>

                  {/* Badge & Title */}
                  <div className="mb-2">
                    <span
                      className="text-[9px] font-mono uppercase tracking-wider font-semibold"
                      style={{ color: theme.accentColor }}
                    >
                      {theme.badge}
                    </span>
                    <h3 className="font-syne text-base font-bold text-white group-hover:text-white transition-colors leading-snug mt-0.5">
                      {theme.title}
                    </h3>
                  </div>

                  {/* Short Tagline / Description */}
                  <p className="text-xs text-white/60 line-clamp-2 leading-relaxed">
                    {theme.description}
                  </p>
                </div>

                {/* Bottom link prompt */}
                <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-white/40 group-hover:text-white transition-colors">
                  <span>Explore challenges</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
