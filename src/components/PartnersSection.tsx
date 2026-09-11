import React from 'react';
import { PARTNERS_AND_MINISTRIES } from '../data/sihData';
import { Building2, Shield, Landmark } from 'lucide-react';

export const PartnersSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#06080e] border-y border-white/[0.08] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#FF772A] mb-3">
          <span>07 / COLLABORATING MINISTRIES & PARTNERS</span>
        </div>
        <h3 className="font-syne text-2xl sm:text-3xl font-bold text-white">
          Backed by Apex Public & Private Tech Leadership
        </h3>
        <p className="text-xs sm:text-sm text-white/50 max-w-lg mx-auto mt-2 font-light">
          Government ministries defining national requirements alongside leading global technology pioneers providing computing infrastructure and grants.
        </p>
      </div>

      {/* Infinite scrolling marquee of logos/badges */}
      <div className="flex overflow-x-hidden whitespace-nowrap select-none">
        <div className="flex animate-[marquee_45s_linear_infinite] gap-4 items-center">
          {PARTNERS_AND_MINISTRIES.concat(PARTNERS_AND_MINISTRIES).map((p, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-[#0d121c]/80 border border-white/10 hover:border-[#FF772A]/40 transition-colors shadow-sm"
            >
              <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#FF772A]">
                <Landmark className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="font-syne text-xs sm:text-sm font-bold text-white leading-tight">
                  {p.name}
                </div>
                <div className="text-[10px] font-mono text-white/40">
                  {p.role}
                </div>
              </div>
              <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/5 text-white/50 border border-white/5 ml-2">
                {p.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
