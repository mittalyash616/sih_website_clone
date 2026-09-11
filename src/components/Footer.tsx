import React from 'react';
import { ArrowUp, Heart, Shield, Globe, ExternalLink } from 'lucide-react';
import { sound } from '../utils/audio';

export const Footer: React.FC<{
  onOpenRegister: () => void;
  onOpenGuidelines: () => void;
}> = ({ onOpenRegister, onOpenGuidelines }) => {
  const scrollToTop = () => {
    sound.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05070a] border-t border-white/10 pt-20 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/10">
          {/* Col 1 & 2: Branding & Vision */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#121826] to-[#0A0D14] border border-white/15 flex items-center justify-center font-syne font-extrabold text-sm text-white">
                SIH
              </div>
              <div>
                <div className="font-syne font-bold text-base text-white">
                  SMART INDIA HACKATHON 2026
                </div>
                <div className="text-[10px] font-mono text-white/50">
                  Ministry of Education's Innovation Cell (MIC) & AICTE
                </div>
              </div>
            </div>

            <p className="text-xs text-white/60 leading-relaxed max-w-sm">
              Smart India Hackathon is a nationwide initiative to provide students with a platform to solve some of the pressing problems we face in our daily lives, and thus inculcate a culture of product innovation and a mindset of problem-solving.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs font-mono text-white/40">
              <span className="w-2 h-2 rounded-full bg-[#10B981]" />
              <span>Dedicated to Viksit Bharat 2047</span>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-white/40 mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs text-white/70">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  Genesis & Vision
                </a>
              </li>
              <li>
                <a href="#themes" className="hover:text-white transition-colors">
                  12 Priority Themes
                </a>
              </li>
              <li>
                <a href="#problem-statements" className="hover:text-white transition-colors">
                  Problem Statements (520+)
                </a>
              </li>
              <li>
                <a href="#timeline" className="hover:text-white transition-colors">
                  Process & Timeline
                </a>
              </li>
              <li>
                <a href="#eligibility" className="hover:text-white transition-colors">
                  Eligibility Checker
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Resources & Portals */}
          <div>
            <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-white/40 mb-4">
              Portals & Resources
            </h4>
            <ul className="space-y-2.5 text-xs text-white/70">
              <li>
                <button
                  onClick={() => {
                    sound.playClick();
                    onOpenGuidelines();
                  }}
                  className="hover:text-white transition-colors text-left"
                >
                  Official PPT Pitch Template
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    sound.playClick();
                    onOpenRegister();
                  }}
                  className="hover:text-white transition-colors text-left"
                >
                  Institute Pre-Registration
                </button>
              </li>
              <li>
                <a href="https://www.sih.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
                  <span>Legacy Official SIH Portal</span>
                  <ExternalLink className="w-3 h-3 text-white/40" />
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Rules & SPOC Verification FAQ
                </a>
              </li>
              <li>
                <a href="#impact" className="hover:text-white transition-colors">
                  Nodal Centers Directory (108)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Apex Bodies */}
          <div>
            <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-white/40 mb-4">
              Apex Authorities
            </h4>
            <div className="space-y-2 text-xs text-white/60">
              <div>
                <span className="text-white/90 font-medium">Innovation Cell</span>
                <p className="text-[11px] text-white/40">Ministry of Education, Govt. of India</p>
              </div>
              <div>
                <span className="text-white/90 font-medium">AICTE HQ</span>
                <p className="text-[11px] text-white/40">Nelson Mandela Marg, Vasant Kunj, New Delhi 110070</p>
              </div>
              <div className="pt-2 text-[11px] font-mono text-[#FF772A]">
                sih@aicte-india.org
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/40">
          <div>
            © 2026 Smart India Hackathon. Reimagined Next-Gen Experience.
          </div>

          <div className="flex items-center gap-6">
            <span>Frontend Design & Craft Showcase</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-all border border-white/5"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3 h-3 text-[#FF772A]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
