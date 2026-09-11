import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Users, CheckCircle2, XCircle, AlertTriangle, ShieldCheck, Sparkles, UserCheck } from 'lucide-react';
import { sound } from '../utils/audio';

export const EligibilityChecker: React.FC<{ onOpenRegister: () => void }> = ({ onOpenRegister }) => {
  const [memberCount, setMemberCount] = useState(6);
  const [femaleCount, setFemaleCount] = useState(1);
  const [sameCollege, setSameCollege] = useState(true);
  const [hasSpocApproval, setHasSpocApproval] = useState(true);
  const [mentorCount, setMentorCount] = useState(2);

  // Validation rules
  const isMemberCountValid = memberCount === 6;
  const isFemaleCountValid = femaleCount >= 1;
  const isCollegeValid = sameCollege;
  const isSpocValid = hasSpocApproval;
  const isMentorValid = mentorCount <= 2;

  const isAllValid =
    isMemberCountValid &&
    isFemaleCountValid &&
    isCollegeValid &&
    isSpocValid &&
    isMentorValid;

  return (
    <section id="eligibility" className="py-24 relative overflow-hidden bg-[#080b12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#FF772A] mb-3">
              <span>05 / COMPLIANCE & ELIGIBILITY SIMULATOR</span>
            </div>
            <h2 className="font-syne text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
              Test Your Squad's <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40">
                Official SIH 2026 Compliance
              </span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-white/60 max-w-md font-light leading-relaxed">
            Ensure your 6-member squad meets the statutory AICTE criteria before final college internal nomination.
          </p>
        </div>

        {/* Interactive Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Controls Column */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6">
            <h3 className="font-syne text-lg font-bold text-white mb-2 flex items-center gap-2">
              <Users className="w-5 h-5 text-[#FF772A]" />
              <span>Squad Composition Simulator</span>
            </h3>

            {/* Total Members */}
            <div>
              <div className="flex justify-between items-center text-xs font-mono mb-2">
                <span className="text-white/80">Total Student Members (Exactly 6):</span>
                <span className="font-bold text-white">{memberCount} Members</span>
              </div>
              <div className="flex gap-2">
                {[4, 5, 6, 7].map((num) => (
                  <button
                    key={num}
                    onClick={() => {
                      sound.playClick();
                      setMemberCount(num);
                    }}
                    className={`flex-1 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
                      memberCount === num
                        ? 'bg-[#FF772A] text-white shadow-[0_0_15px_rgba(255,119,42,0.35)]'
                        : 'bg-white/5 hover:bg-white/10 text-white/70 border border-white/5'
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
              {!isMemberCountValid && (
                <p className="text-[11px] text-rose-400 font-mono mt-1.5 flex items-center gap-1">
                  <XCircle className="w-3 h-3" />
                  <span>Rule: A team must have exactly six student members.</span>
                </p>
              )}
            </div>

            {/* Female Members Count */}
            <div>
              <div className="flex justify-between items-center text-xs font-mono mb-2">
                <span className="text-white/80">Female Members (Minimum 1 Mandatory):</span>
                <span className="font-bold text-white">{femaleCount} Members</span>
              </div>
              <div className="flex gap-2">
                {[0, 1, 2, 3, 4].map((num) => (
                  <button
                    key={num}
                    onClick={() => {
                      sound.playClick();
                      setFemaleCount(num);
                    }}
                    className={`flex-1 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
                      femaleCount === num
                        ? 'bg-[#FF772A] text-white shadow-[0_0_15px_rgba(255,119,42,0.35)]'
                        : 'bg-white/5 hover:bg-white/10 text-white/70 border border-white/5'
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
              {!isFemaleCountValid && (
                <p className="text-[11px] text-rose-400 font-mono mt-1.5 flex items-center gap-1">
                  <XCircle className="w-3 h-3" />
                  <span>Strict Mandate: At least one female member is compulsory per team.</span>
                </p>
              )}
            </div>

            {/* Same Institution Check */}
            <div className="pt-2 border-t border-white/5">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold text-white">All Members From Same Institute</div>
                  <div className="text-[11px] text-white/50">Cross-college team compositions are not permitted</div>
                </div>
                <button
                  onClick={() => {
                    sound.playClick();
                    setSameCollege(!sameCollege);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-colors ${
                    sameCollege ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40' : 'bg-rose-500/20 text-rose-400 border border-rose-500/40'
                  }`}
                >
                  {sameCollege ? 'YES' : 'NO'}
                </button>
              </div>
            </div>

            {/* College SPOC Approval */}
            <div className="pt-2 border-t border-white/5">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold text-white">College SPOC Endorsement Letter</div>
                  <div className="text-[11px] text-white/50">Mandatory authorization uploaded by Institute Principal</div>
                </div>
                <button
                  onClick={() => {
                    sound.playClick();
                    setHasSpocApproval(!hasSpocApproval);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-colors ${
                    hasSpocApproval ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40' : 'bg-rose-500/20 text-rose-400 border border-rose-500/40'
                  }`}
                >
                  {hasSpocApproval ? 'VERIFIED' : 'PENDING'}
                </button>
              </div>
            </div>

            {/* Mentors count */}
            <div className="pt-2 border-t border-white/5">
              <div className="flex justify-between items-center text-xs font-mono mb-2">
                <span className="text-white/80">Designated Mentors (Up to 2 Optional):</span>
                <span className="font-bold text-white">{mentorCount} Mentors</span>
              </div>
              <div className="flex gap-2">
                {[0, 1, 2, 3].map((num) => (
                  <button
                    key={num}
                    onClick={() => {
                      sound.playClick();
                      setMentorCount(num);
                    }}
                    className={`flex-1 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all ${
                      mentorCount === num
                        ? 'bg-white/20 text-white border border-white/30'
                        : 'bg-white/5 hover:bg-white/10 text-white/70 border border-white/5'
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Real-time Verdict Result Column */}
          <div className="lg:col-span-5 flex flex-col justify-between glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-white/40">
                  Compliance Status
                </span>
                <ShieldCheck className="w-5 h-5 text-[#FF772A]" />
              </div>

              {/* Status Banner */}
              <div
                className={`p-5 rounded-2xl border mb-6 text-center transition-all ${
                  isAllValid
                    ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                    : 'bg-rose-500/10 border-rose-500/30 text-rose-300'
                }`}
              >
                <div className="font-syne text-xl sm:text-2xl font-bold mb-1">
                  {isAllValid ? 'ELIGIBLE FOR NOMINATION' : 'COMPLIANCE VIOLATIONS DETECTED'}
                </div>
                <p className="text-xs opacity-80">
                  {isAllValid
                    ? 'Your team setup meets 100% of SIH 2026 guidelines. You are ready for SPOC portal upload.'
                    : 'Resolve the highlighted issues to qualify for official evaluation.'}
                </p>
              </div>

              {/* Checklist items */}
              <div className="space-y-2.5 text-xs font-mono">
                <div className="flex items-center justify-between">
                  <span className="text-white/70">Exact 6 student members</span>
                  {isMemberCountValid ? (
                    <span className="text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Passed
                    </span>
                  ) : (
                    <span className="text-rose-400 flex items-center gap-1">
                      <XCircle className="w-3.5 h-3.5" /> Invalid
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-white/70">At least 1 female teammate</span>
                  {isFemaleCountValid ? (
                    <span className="text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Passed
                    </span>
                  ) : (
                    <span className="text-rose-400 flex items-center gap-1">
                      <XCircle className="w-3.5 h-3.5" /> Mandatory
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-white/70">Single Institute Affiliation</span>
                  {isCollegeValid ? (
                    <span className="text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Passed
                    </span>
                  ) : (
                    <span className="text-rose-400 flex items-center gap-1">
                      <XCircle className="w-3.5 h-3.5" /> Invalid
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-white/70">SPOC Authorization Letter</span>
                  {isSpocValid ? (
                    <span className="text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Verified
                    </span>
                  ) : (
                    <span className="text-amber-400 flex items-center gap-1">
                      <AlertTriangle className="w-3.5 h-3.5" /> Pending
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Bottom action */}
            <div className="mt-8 pt-6 border-t border-white/5">
              <button
                onClick={() => {
                  sound.playClick();
                  onOpenRegister();
                }}
                disabled={!isAllValid}
                className={`w-full py-3.5 rounded-full font-syne font-bold text-xs tracking-wider transition-all flex items-center justify-center gap-2 ${
                  isAllValid
                    ? 'bg-gradient-to-r from-[#FF772A] to-[#E65A12] text-white shadow-[0_0_25px_rgba(255,119,42,0.4)] hover:scale-[1.01]'
                    : 'bg-white/5 text-white/30 cursor-not-allowed border border-white/5'
                }`}
              >
                <span>Proceed to Team Pre-Registration</span>
                <Sparkles className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
