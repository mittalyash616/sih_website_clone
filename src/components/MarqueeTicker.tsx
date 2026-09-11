import React from 'react';
import { AlertCircle, Radio, Sparkles, Building, ArrowUpRight } from 'lucide-react';

export const MarqueeTicker: React.FC<{ onExploreClick: () => void }> = ({ onExploreClick }) => {
  const announcements = [
    '• LATEST: Ministry of Railways released 12 new IoT track telemetry problem statements',
    '• PORTAL UPDATE: Institute SPOC nomination window extended till Oct 15, 2026',
    '• HARDWARE TRACK: Free ₹50,000 fabrication component grant for qualified finalists',
    '• ISRO CHALLENGE: InSAR satellite landslide creep models open for student submissions',
    '• MANDATORY: Every 6-member squad must have at least 1 female team member',
    '• INCUBATION: AICTE & MIC allocate ₹10 Lakhs seed grants for top 50 Grand Finale winners',
  ];

  return (
    <div className="relative border-y border-white/[0.08] bg-[#0c101a] py-2.5 overflow-hidden select-none z-20">
      <div className="flex items-center">
        {/* Left Sticky Badge */}
        <div className="hidden sm:flex items-center gap-2 pl-6 pr-4 bg-[#0c101a] border-r border-white/10 z-10 shrink-0">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF772A] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF772A]" />
          </span>
          <span className="font-mono text-xs font-semibold text-white/90 uppercase tracking-wider">
            LIVE BULLETIN
          </span>
        </div>

        {/* Scrolling text marquee */}
        <div className="flex overflow-x-hidden whitespace-nowrap">
          <div className="flex animate-[marquee_35s_linear_infinite] gap-8 items-center text-xs font-mono text-white/70">
            {announcements.concat(announcements).map((item, idx) => (
              <span
                key={idx}
                onClick={onExploreClick}
                className="hover:text-[#FF772A] transition-colors cursor-pointer inline-flex items-center gap-2"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
