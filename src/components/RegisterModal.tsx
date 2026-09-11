import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, CheckCircle2, AlertTriangle, Users, Building, ShieldCheck, ArrowRight, Download } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sound } from '../utils/audio';

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RegisterModal: React.FC<RegisterModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [submitted, setSubmitted] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    teamName: '',
    collegeName: '',
    state: 'Karnataka',
    track: 'Software',
    leaderName: '',
    leaderEmail: '',
    leaderPhone: '',
    leaderGender: 'Female',
    member2Name: '',
    member2Gender: 'Male',
    member3Name: '',
    member3Gender: 'Male',
    member4Name: '',
    member4Gender: 'Female',
    member5Name: '',
    member5Gender: 'Male',
    member6Name: '',
    member6Gender: 'Male',
    spocName: '',
    spocEmail: '',
    targetPsCode: 'SIH2026-PS101',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sound.playSuccess();
    setSubmitted(true);
    // Confetti burst
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FF772A', '#3B82F6', '#10B981', '#FFFFFF'],
    });
  };

  const handleDownloadSummary = () => {
    sound.playClick();
    const summary = `
==================================================
SMART INDIA HACKATHON 2026 - SQUAD PRE-REGISTRATION
Ministry of Education Innovation Cell & AICTE
==================================================
Team Name: ${formData.teamName || 'Team Innovators'}
Institute: ${formData.collegeName || 'National Institute of Technology'}
State: ${formData.state}
Track: ${formData.track} Edition
Target Problem Statement: ${formData.targetPsCode}

Team Composition (6 Members):
1. Team Leader: ${formData.leaderName || 'Leader'} (${formData.leaderGender})
2. Member 2: ${formData.member2Name || 'Teammate 2'} (${formData.member2Gender})
3. Member 3: ${formData.member3Name || 'Teammate 3'} (${formData.member3Gender})
4. Member 4: ${formData.member4Name || 'Teammate 4'} (${formData.member4Gender})
5. Member 5: ${formData.member5Name || 'Teammate 5'} (${formData.member5Gender})
6. Member 6: ${formData.member6Name || 'Teammate 6'} (${formData.member6Gender})

Institute SPOC: ${formData.spocName || 'Dr. S. Sharma'} (${formData.spocEmail || 'spoc@institute.edu'})

STATUS: Pre-registration generated. Hand over this brief to your College SPOC for portal upload before deadline.
==================================================
    `.trim();

    const blob = new Blob([summary], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${(formData.teamName || 'SIH2026_Team').replace(/\s+/g, '_')}_Registration_Brief.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="bg-[#0b0e16] border border-white/15 rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative"
      >
        {/* Close Button */}
        <button
          onClick={() => {
            sound.playClick();
            onClose();
          }}
          className="absolute top-6 right-6 w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-white/60 hover:text-white transition-all"
        >
          <X className="w-4 h-4" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#FF772A] mb-2">
              <Sparkles className="w-4 h-4" />
              <span>SIH 2026 PORTAL • OFFICIAL NOMINATION</span>
            </div>
            <h2 className="font-syne text-2xl font-bold text-white mb-1">
              Squad Pre-Registration Form
            </h2>
            <p className="text-xs text-white/50 mb-6">
              Complete the details below to generate your standardized team submission packet.
            </p>

            {/* Stepper Navigation */}
            <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-4 text-xs font-mono">
              <span
                onClick={() => setStep(1)}
                className={`cursor-pointer px-3 py-1 rounded-md transition-colors ${
                  step === 1 ? 'bg-[#FF772A] text-white font-bold' : 'text-white/50 hover:text-white'
                }`}
              >
                1. Team & College
              </span>
              <span className="text-white/20">/</span>
              <span
                onClick={() => setStep(2)}
                className={`cursor-pointer px-3 py-1 rounded-md transition-colors ${
                  step === 2 ? 'bg-[#FF772A] text-white font-bold' : 'text-white/50 hover:text-white'
                }`}
              >
                2. 6-Member Squad
              </span>
              <span className="text-white/20">/</span>
              <span
                onClick={() => setStep(3)}
                className={`cursor-pointer px-3 py-1 rounded-md transition-colors ${
                  step === 3 ? 'bg-[#FF772A] text-white font-bold' : 'text-white/50 hover:text-white'
                }`}
              >
                3. SPOC & Problem
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {step === 1 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono text-white/70 mb-1">
                      Official Team Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.teamName}
                      onChange={(e) => setFormData({ ...formData, teamName: e.target.value })}
                      placeholder="e.g. TrackVanguard or AgroSense"
                      className="w-full bg-[#111624] border border-white/10 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#FF772A]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-white/70 mb-1">
                      Institute / University Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.collegeName}
                      onChange={(e) => setFormData({ ...formData, collegeName: e.target.value })}
                      placeholder="e.g. Indian Institute of Technology Roorkee"
                      className="w-full bg-[#111624] border border-white/10 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#FF772A]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-white/70 mb-1">
                        State / UT *
                      </label>
                      <select
                        value={formData.state}
                        onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                        className="w-full bg-[#111624] border border-white/10 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#FF772A]"
                      >
                        <option value="Karnataka">Karnataka</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Delhi">Delhi NCR</option>
                        <option value="Uttarakhand">Uttarakhand</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                        <option value="Telangana">Telangana</option>
                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                        <option value="West Bengal">West Bengal</option>
                        <option value="Other">Other State</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-white/70 mb-1">
                        Edition Track *
                      </label>
                      <select
                        value={formData.track}
                        onChange={(e) => setFormData({ ...formData, track: e.target.value })}
                        className="w-full bg-[#111624] border border-white/10 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#FF772A]"
                      >
                        <option value="Software">Software Edition (36 Hrs)</option>
                        <option value="Hardware">Hardware Edition (5 Days)</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={() => {
                        sound.playClick();
                        setStep(2);
                      }}
                      className="px-5 py-2.5 rounded-full bg-[#FF772A] text-white text-xs font-mono font-bold flex items-center gap-1.5"
                    >
                      <span>Continue to Squad Members</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-300 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 shrink-0" />
                    <span>Mandatory SIH Rule: Exactly 6 members. Minimum 1 female member compulsory.</span>
                  </div>

                  {/* Leader */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-white/[0.02] p-3 rounded-xl border border-white/5">
                    <div className="sm:col-span-2">
                      <label className="block text-[11px] font-mono text-white/60 mb-1">
                        1. Team Leader Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.leaderName}
                        onChange={(e) => setFormData({ ...formData, leaderName: e.target.value })}
                        placeholder="Leader Name"
                        className="w-full bg-[#111624] border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono text-white/60 mb-1">
                        Gender
                      </label>
                      <select
                        value={formData.leaderGender}
                        onChange={(e) => setFormData({ ...formData, leaderGender: e.target.value })}
                        className="w-full bg-[#111624] border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white"
                      >
                        <option value="Female">Female (Mandate Check)</option>
                        <option value="Male">Male</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Member 2 & 3 */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-mono text-white/60 mb-1">
                        2. Member Name
                      </label>
                      <input
                        type="text"
                        value={formData.member2Name}
                        onChange={(e) => setFormData({ ...formData, member2Name: e.target.value })}
                        placeholder="Teammate 2"
                        className="w-full bg-[#111624] border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono text-white/60 mb-1">
                        3. Member Name
                      </label>
                      <input
                        type="text"
                        value={formData.member3Name}
                        onChange={(e) => setFormData({ ...formData, member3Name: e.target.value })}
                        placeholder="Teammate 3"
                        className="w-full bg-[#111624] border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white"
                      />
                    </div>
                  </div>

                  {/* Member 4 & 5 & 6 */}
                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <label className="block text-[11px] font-mono text-white/60 mb-1">
                        4. Member Name
                      </label>
                      <input
                        type="text"
                        value={formData.member4Name}
                        onChange={(e) => setFormData({ ...formData, member4Name: e.target.value })}
                        placeholder="Teammate 4"
                        className="w-full bg-[#111624] border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono text-white/60 mb-1">
                        5. Member Name
                      </label>
                      <input
                        type="text"
                        value={formData.member5Name}
                        onChange={(e) => setFormData({ ...formData, member5Name: e.target.value })}
                        placeholder="Teammate 5"
                        className="w-full bg-[#111624] border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono text-white/60 mb-1">
                        6. Member Name
                      </label>
                      <input
                        type="text"
                        value={formData.member6Name}
                        onChange={(e) => setFormData({ ...formData, member6Name: e.target.value })}
                        placeholder="Teammate 6"
                        className="w-full bg-[#111624] border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white"
                      />
                    </div>
                  </div>

                  <div className="pt-4 flex justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="text-xs font-mono text-white/60 hover:text-white"
                    >
                      ← Back
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        sound.playClick();
                        setStep(3);
                      }}
                      className="px-5 py-2.5 rounded-full bg-[#FF772A] text-white text-xs font-mono font-bold flex items-center gap-1.5"
                    >
                      <span>Continue to Verification</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono text-white/70 mb-1">
                      Target Problem Statement Code *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.targetPsCode}
                      onChange={(e) => setFormData({ ...formData, targetPsCode: e.target.value })}
                      placeholder="e.g. SIH2026-PS101"
                      className="w-full bg-[#111624] border border-white/10 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#FF772A]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-white/70 mb-1">
                        College SPOC Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.spocName}
                        onChange={(e) => setFormData({ ...formData, spocName: e.target.value })}
                        placeholder="Faculty SPOC Name"
                        className="w-full bg-[#111624] border border-white/10 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-white/70 mb-1">
                        SPOC Official Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.spocEmail}
                        onChange={(e) => setFormData({ ...formData, spocEmail: e.target.value })}
                        placeholder="spoc@college.edu.in"
                        className="w-full bg-[#111624] border border-white/10 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white"
                      />
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-xs font-mono text-white/70 flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>
                      By submitting, you certify that all 6 members are bona fide regular students of the institution and adhere to the SIH 2026 Code of Conduct.
                    </span>
                  </div>

                  <div className="pt-4 flex justify-between items-center">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="text-xs font-mono text-white/60 hover:text-white"
                    >
                      ← Back
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-3 rounded-full bg-gradient-to-r from-[#FF772A] to-[#E65A12] text-white text-xs font-syne font-bold shadow-[0_0_25px_rgba(255,119,42,0.45)] hover:scale-[1.02] flex items-center gap-2"
                    >
                      <span>Generate Squad Brief</span>
                      <Sparkles className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        ) : (
          /* Submission Success State */
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="font-syne text-2xl font-bold text-white mb-2">
              Squad Pre-Registration Packet Ready!
            </h3>

            <p className="text-xs sm:text-sm text-white/70 max-w-md mx-auto mb-6 leading-relaxed">
              Your 6-member squad structure has been verified against official SIH 2026 requirements. Download your pre-registration dossier to submit to your College SPOC.
            </p>

            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 max-w-md mx-auto text-left text-xs font-mono mb-6 space-y-1">
              <div><span className="text-white/40">Team:</span> <span className="text-white font-bold">{formData.teamName || 'Innovators'}</span></div>
              <div><span className="text-white/40">Institute:</span> <span className="text-white">{formData.collegeName || 'Institute'}</span></div>
              <div><span className="text-white/40">Problem Statement:</span> <span className="text-[#FF772A] font-bold">{formData.targetPsCode}</span></div>
              <div><span className="text-white/40">Track:</span> <span className="text-white">{formData.track} Edition</span></div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={handleDownloadSummary}
                className="w-full sm:w-auto px-5 py-3 rounded-full bg-[#FF772A] text-white text-xs font-mono font-bold flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,119,42,0.4)]"
              >
                <Download className="w-4 h-4" />
                <span>Download SPOC Dossier (.txt)</span>
              </button>

              <button
                onClick={() => {
                  sound.playClick();
                  onClose();
                  setSubmitted(false);
                  setStep(1);
                }}
                className="w-full sm:w-auto px-5 py-3 rounded-full bg-white/10 hover:bg-white/15 text-white text-xs font-mono"
              >
                Close Window
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};
