import React, { useState } from 'react';
import { motion } from 'motion/react';
import { X, FileText, Download, Check, Copy, Sparkles, Layers, Shield } from 'lucide-react';
import { sound } from '../utils/audio';

interface GuidelinesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GuidelinesModal: React.FC<GuidelinesModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const slides = [
    {
      slideNum: 'Slide 1',
      title: 'Title Slide & Meta Information',
      items: [
        'Team Name, Unique Institute Code & College Name',
        'Official Problem Statement Code & Title',
        'Ministry / Department Name',
        'Names of all 6 team members (with gender identification) and up to 2 mentors',
      ],
    },
    {
      slideNum: 'Slide 2',
      title: 'Proposed Solution & Innovation Narrative',
      items: [
        'Precise, jargon-free summary of the proposed solution (max 150 words)',
        'What makes this solution fundamentally distinct from existing solutions in the market?',
        'High-level user flow diagram or operational schematic',
      ],
    },
    {
      slideNum: 'Slide 3',
      title: 'Technical Architecture & Methodology',
      items: [
        'Software: Block architecture, cloud infrastructure, AI models used, database, security measures',
        'Hardware: Complete Bill of Materials (BOM), sensor circuitry, microcontroller specs, enclosures',
        'Data flow diagrams, API specifications, or communication protocols',
      ],
    },
    {
      slideNum: 'Slide 4',
      title: 'Feasibility, Viability & Adoption Potential',
      items: [
        'Estimated manufacturing / operational cost per unit or transaction',
        'How readily can the commissioning Ministry deploy this across their regional divisions?',
        'Adherence to Indian national standards (e.g. BIS, RDSO, ICMR, ISO)',
      ],
    },
    {
      slideNum: 'Slide 5',
      title: 'Risks, Mitigation & Scalability Roadmap',
      items: [
        'Key technical bottlenecks (e.g. latency, thermal runaway, network outage) and mitigations',
        '6-month post-hackathon roadmap from prototype (TRL 4) to field pilot (TRL 7)',
        'Potential environmental, economic, and societal impact metrics',
      ],
    },
  ];

  const handleCopy = () => {
    sound.playClick();
    const text = slides
      .map(
        (s) =>
          `=== ${s.slideNum}: ${s.title} ===\n` + s.items.map((it) => `• ${it}`).join('\n')
      )
      .join('\n\n');
    navigator.clipboard?.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    sound.playClick();
    const text = `
============================================================
SMART INDIA HACKATHON 2026 - OFFICIAL IDEA SUBMISSION TEMPLATE
Prescribed by Ministry of Education Innovation Cell (MIC) & AICTE
============================================================

NOTE: Adherence to this strict 5-slide presentation format is MANDATORY.
Any proposal exceeding 5 slides will be automatically disqualified during the preliminary screening round.

${slides
  .map(
    (s) =>
      `------------------------------------------------------------\n${s.slideNum}: ${s.title}\n------------------------------------------------------------\n` +
      s.items.map((it) => `[ ] ${it}`).join('\n')
  )
  .join('\n\n')}

============================================================
EVALUATION CRITERIA:
1. Novelty and Originality: 25%
2. Technical Feasibility & Solution Architecture: 25%
3. Clarity and Completeness of Expected Deliverables: 20%
4. Potential Impact & Social/Economic Viability: 20%
5. Adherence to Guidelines & Presentation Quality: 10%
============================================================
    `.trim();

    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'SIH2026_Idea_Submission_Pitch_Template.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="bg-[#0b0e16] border border-white/15 rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative"
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

        {/* Modal Header */}
        <div className="flex items-center gap-2 text-xs font-mono text-[#FF772A] mb-2">
          <FileText className="w-4 h-4" />
          <span>OFFICIAL SIH 2026 GUIDELINES</span>
        </div>

        <h2 className="font-syne text-2xl font-bold text-white mb-2">
          Standardized 5-Slide Pitch Deck Specification
        </h2>

        <p className="text-xs sm:text-sm text-white/60 mb-6 leading-relaxed">
          National screening juries review over 50,000 idea proposals. To ensure fair and impartial evaluation, teams must adhere strictly to the 5-slide structure below.
        </p>

        {/* Slide breakdown list */}
        <div className="space-y-4 mb-8">
          {slides.map((s, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-colors"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-[#FF772A]/15 text-[#FF9254] border border-[#FF772A]/30">
                  {s.slideNum}
                </span>
                <span className="font-syne text-sm font-bold text-white">{s.title}</span>
              </div>
              <ul className="space-y-1.5 mt-3 text-xs text-white/70">
                {s.items.map((it, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#FF772A] mt-0.5">•</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={handleCopy}
            className="px-4 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-mono flex items-center gap-2 transition-all"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-white/60" />
                <span>Copy Slide Outline</span>
              </>
            )}
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={handleDownload}
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#FF772A] to-[#E65A12] text-white text-xs font-syne font-bold shadow-[0_0_20px_rgba(255,119,42,0.4)] flex items-center gap-2"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Template (.txt)</span>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
