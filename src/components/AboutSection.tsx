import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Terminal, Cpu, CheckCircle2, ShieldCheck, Award, Users, Lightbulb, ArrowRight, Laptop, Wrench } from 'lucide-react';
import { sound } from '../utils/audio';

export const AboutSection: React.FC<{ onExploreClick: () => void }> = ({ onExploreClick }) => {
  const [activeTab, setActiveTab] = useState<'software' | 'hardware'>('software');

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#080b11]">
      {/* Subtle background ambient line */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#FF772A] mb-3">
              <span>01 / GENESIS & VISION</span>
            </div>
            <h2 className="font-syne text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
              A Nationwide Catalyst for <br />
              <span className="text-white/40">Grassroots Technological Autonomy</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-white/60 max-w-md font-light leading-relaxed">
            Conceived by the Ministry of Education's Innovation Cell (MIC) & AICTE, SIH harnesses the raw creativity of India's top student engineers to resolve pressing real-world governance bottlenecks.
          </p>
        </div>

        {/* 3 Core Pillars Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="glass-panel p-6 rounded-2xl relative group overflow-hidden border border-white/10 hover:border-[#FF772A]/40 transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#FF772A]/10 border border-[#FF772A]/20 flex items-center justify-center text-[#FF772A] mb-5">
              <Lightbulb className="w-6 h-6" />
            </div>
            <h3 className="font-syne text-lg font-bold text-white mb-2">Demand-Driven Innovation</h3>
            <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
              Every single problem statement is commissioned directly by Central Ministries, State Governments, and public sector units facing urgent operational hurdles.
            </p>
            <div className="mt-4 pt-4 border-t border-white/5 text-[11px] font-mono text-white/40">
              Zero hypothetical toys • 100% practical deployment
            </div>
          </div>

          <div className="glass-panel p-6 rounded-2xl relative group overflow-hidden border border-white/10 hover:border-[#3B82F6]/40 transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#3B82F6]/10 border border-[#3B82F6]/20 flex items-center justify-center text-[#60A5FA] mb-5">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-syne text-lg font-bold text-white mb-2">Inclusive & Multidisciplinary</h3>
            <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
              Strict mandate: every 6-member squad must feature at least one female engineer. Teams combine hardware specialists, backend architects, and UI craftspeople.
            </p>
            <div className="mt-4 pt-4 border-t border-white/5 text-[11px] font-mono text-white/40">
              Fostering gender parity & collaborative diversity
            </div>
          </div>

          <div className="glass-panel p-6 rounded-2xl relative group overflow-hidden border border-white/10 hover:border-[#10B981]/40 transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#10B981]/10 border border-[#10B981]/20 flex items-center justify-center text-[#10B981] mb-5">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-syne text-lg font-bold text-white mb-2">Pre-Incubation Pipeline</h3>
            <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
              Winning teams don't stop at the podium. AICTE Yukti and Ministry Innovation Funds offer follow-on grants up to ₹10 Lakhs to transition code to market ventures.
            </p>
            <div className="mt-4 pt-4 border-t border-white/5 text-[11px] font-mono text-white/40">
              From hackathon prototype to registered startup
            </div>
          </div>
        </div>

        {/* The Two Parallel Editions: Interactive Comparison Hub */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/10 relative overflow-hidden">
          {/* Header & Tab Selector */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-8 border-b border-white/10">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-white/40">
                Track Architectures
              </span>
              <h3 className="font-syne text-2xl font-bold text-white mt-1">
                Two Tailored Arenas for Problem Solving
              </h3>
            </div>

            {/* Toggle buttons */}
            <div className="flex items-center bg-[#101420] p-1.5 rounded-full border border-white/10">
              <button
                onClick={() => {
                  sound.playClick();
                  setActiveTab('software');
                }}
                onMouseEnter={() => sound.playHover()}
                className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold font-syne transition-all ${
                  activeTab === 'software'
                    ? 'bg-[#3B82F6] text-white shadow-[0_0_20px_rgba(59,130,246,0.4)]'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                <Laptop className="w-3.5 h-3.5" />
                <span>Software Edition</span>
              </button>

              <button
                onClick={() => {
                  sound.playClick();
                  setActiveTab('hardware');
                }}
                onMouseEnter={() => sound.playHover()}
                className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold font-syne transition-all ${
                  activeTab === 'hardware'
                    ? 'bg-[#FF772A] text-white shadow-[0_0_20px_rgba(255,119,42,0.4)]'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                <Wrench className="w-3.5 h-3.5" />
                <span>Hardware Edition</span>
              </button>
            </div>
          </div>

          {/* Tab Content Display */}
          <div className="pt-8">
            {activeTab === 'software' ? (
              <motion.div
                key="software-tab"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
              >
                <div>
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#3B82F6]/10 text-[#60A5FA] border border-[#3B82F6]/30 text-xs font-mono mb-4">
                    <span>36 HOURS NON-STOP HACKING</span>
                  </div>
                  <h4 className="font-syne text-xl sm:text-2xl font-bold text-white mb-3">
                    High-Velocity Cloud & AI Digital Sprint
                  </h4>
                  <p className="text-sm text-white/70 leading-relaxed mb-6">
                    Teams engineer end-to-end software ecosystems spanning cloud microservices, Indic NLP transformers, blockchain zero-knowledge verification, and geospatial visualizers. Evaluated over 3 consecutive jury checkpoints throughout the night.
                  </p>

                  <div className="space-y-3">
                    {[
                      { label: 'Jury Evaluation Rounds', val: 'Round 1 (Approach) • Round 2 (Code/Stress) • Final Pitch' },
                      { label: 'Infrastructure Provided', val: 'High-speed gigabit Wi-Fi, Cloud GPU credits, 24/7 catering' },
                      { label: 'Key Domains', val: 'Generative AI, Web3, FinTech, Cybersecurity, Digital Public Goods' },
                      { label: 'Deliverables', val: 'Production-ready GitHub repo, live deployment link, API documentation' },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-xs">
                        <CheckCircle2 className="w-4 h-4 text-[#3B82F6] shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold text-white/90">{item.label}: </span>
                          <span className="text-white/60">{item.val}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8">
                    <button
                      onClick={() => {
                        sound.playClick();
                        onExploreClick();
                      }}
                      className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-white text-xs font-mono flex items-center gap-2 group transition-all"
                    >
                      <span>Filter 320+ Software Problem Statements</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>

                {/* Right software visual console */}
                <div className="bg-[#05070a] rounded-2xl border border-white/10 p-5 font-mono text-xs shadow-2xl">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4 text-white/40">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                      <span className="ml-2 text-[11px] text-white/60">sih_software_runtime.sh</span>
                    </div>
                    <span>36:00:00 LIVE</span>
                  </div>

                  <div className="space-y-2 text-white/80">
                    <div className="text-emerald-400">$ sih run --edition software --teams 6-squad</div>
                    <div className="text-white/50">&gt; Authenticating College SPOC credentials... [OK]</div>
                    <div className="text-white/50">&gt; Verifying female squad member requirement... [VERIFIED]</div>
                    <div className="text-white/50">&gt; Initializing high-throughput API gateway...</div>
                    <div className="text-[#60A5FA]">&gt; Connected to Nodal Center: IIT Delhi Server Farm</div>
                    <div className="text-white/90 bg-white/5 p-3 rounded-lg border border-white/5 my-2">
                      <div className="text-white font-bold mb-1">Checkpoints Routine:</div>
                      <div>• 08:00 PM: Mentor Synchronization & Feedback</div>
                      <div>• 02:00 AM: Midnight Architecture Stress Test</div>
                      <div>• 08:00 AM: Final Polish & Production Deployment</div>
                    </div>
                    <div className="text-amber-400">&gt; Status: ALL CHECKS PASSING • CODE READY FOR JURY</div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="hardware-tab"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
              >
                <div>
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#FF772A]/10 text-[#FF9254] border border-[#FF772A]/30 text-xs font-mono mb-4">
                    <span>5 DAYS FULL PROTOTYPING MARATHON</span>
                  </div>
                  <h4 className="font-syne text-xl sm:text-2xl font-bold text-white mb-3">
                    Physical Mechatronics, Fabrication & Sensors
                  </h4>
                  <p className="text-sm text-white/70 leading-relaxed mb-6">
                    Unlike software, physical systems demand rigorous machining, PCB milling, thermal stress testing, and mechanical endurance trials. Teams receive dedicated fabrication bays and on-site maker facilities across premier nodal institutes.
                  </p>

                  <div className="space-y-3">
                    {[
                      { label: 'Fabrication Subsidy', val: 'Reimbursement up to ₹50,000 for verified sensors & electronic BOM' },
                      { label: 'Lab Access', val: 'Industrial 3D printers, CNC laser cutters, high-precision multimeters, SMD rework' },
                      { label: 'Key Domains', val: 'Agritech drones, biomedical spectrometers, electric vehicle BMS, mine robots' },
                      { label: 'Deliverables', val: 'Live operational physical prototype demonstrating working sensor & actuation loops' },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-xs">
                        <CheckCircle2 className="w-4 h-4 text-[#FF772A] shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold text-white/90">{item.label}: </span>
                          <span className="text-white/60">{item.val}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8">
                    <button
                      onClick={() => {
                        sound.playClick();
                        onExploreClick();
                      }}
                      className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-white text-xs font-mono flex items-center gap-2 group transition-all"
                    >
                      <span>Filter 180+ Hardware Problem Statements</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>

                {/* Right hardware visual workbench */}
                <div className="bg-[#05070a] rounded-2xl border border-white/10 p-5 font-mono text-xs shadow-2xl">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4 text-white/40">
                    <div className="flex items-center gap-2">
                      <Cpu className="w-3.5 h-3.5 text-[#FF772A]" />
                      <span className="text-[11px] text-white/60">hardware_workbench_telemetry.log</span>
                    </div>
                    <span>120:00:00 DURATION</span>
                  </div>

                  <div className="space-y-2 text-white/80">
                    <div className="text-[#FF9254]">$ sih-lab --station 24 --bay advanced-iot</div>
                    <div className="text-white/50">&gt; Allocating CNC milling slot & 3D resin printer... [ALLOCATED]</div>
                    <div className="text-white/50">&gt; Microcontroller flashed: STM32F401 & ESP32-S3 Dual Core</div>
                    <div className="text-white/50">&gt; Sensor calibration: Optical photodiode SNR at 94.8%</div>
                    <div className="text-emerald-400">&gt; Thermal chamber test: Nominal operation at 45°C ambient</div>
                    <div className="text-white/90 bg-white/5 p-3 rounded-lg border border-white/5 my-2">
                      <div className="text-white font-bold mb-1">Safety & Protocol Specifications:</div>
                      <div>• IEC 61373 Vibration Shock Clearance</div>
                      <div>• Reverse Polarity & Surge Protection Verification</div>
                      <div>• Field demonstration before Senior Scientists</div>
                    </div>
                    <div className="text-emerald-400">&gt; Status: HARDWARE STACK VERIFIED • BENCH READY</div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
