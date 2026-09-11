import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, Sparkles, ArrowUpRight, ShieldCheck, ChevronRight } from 'lucide-react';
import { sound } from '../utils/audio';
import { useLenis } from './SmoothScroll';

interface NavbarProps {
  onOpenRegister: () => void;
  onOpenGuidelines: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRegister, onOpenGuidelines }) => {
  const [soundActive, setSoundActive] = useState(sound.isEnabled());
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollTo } = useLenis();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const newState = sound.toggle();
    setSoundActive(newState);
  };

  const navLinks = [
    { label: 'About SIH', target: '#about' },
    { label: 'Themes', target: '#themes' },
    { label: 'Problem Statements', target: '#problem-statements', badge: '520+' },
    { label: 'Timeline', target: '#timeline' },
    { label: 'Eligibility', target: '#eligibility' },
    { label: 'Impact', target: '#impact' },
    { label: 'FAQ', target: '#faq' },
  ];

  const handleNavClick = (target: string) => {
    sound.playClick();
    scrollTo(target, { offset: -80 });
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'py-3 bg-[#07090e]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.6)]'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & National Innovation Emblem */}
            <div
              className="flex items-center gap-3 cursor-pointer group"
              onClick={() => {
                sound.playClick();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              data-cursor="HOME"
            >
              {/* Custom SVG Emblem */}
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#121826] to-[#0A0D14] border border-white/15 flex items-center justify-center overflow-hidden group-hover:border-[#FF772A]/60 transition-colors shadow-[0_0_20px_rgba(255,119,42,0.15)]">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#FF772A]/20 via-transparent to-[#10B981]/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="font-syne font-extrabold text-sm tracking-tighter text-white">
                  SIH
                </span>
                <span className="absolute bottom-1 right-1 w-1.5 h-1.5 rounded-full bg-[#FF772A] animate-pulse" />
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-syne font-bold text-base tracking-tight text-white group-hover:text-[#FF772A] transition-colors">
                    SMART INDIA
                  </span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/10 text-white/90 border border-white/10">
                    2026
                  </span>
                </div>
                <span className="text-[10px] font-mono tracking-wider text-white/50 uppercase">
                  Govt. of India • MIC & AICTE
                </span>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 bg-[#101420]/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 shadow-inner">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.target)}
                  onMouseEnter={() => sound.playHover()}
                  className="relative px-3.5 py-1.5 text-xs font-medium text-white/70 hover:text-white transition-colors rounded-full hover:bg-white/5 flex items-center gap-1.5 group"
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="text-[9px] font-mono px-1.5 py-0.2 rounded-full bg-[#FF772A]/20 text-[#FF9254] border border-[#FF772A]/30">
                      {link.badge}
                    </span>
                  )}
                </button>
              ))}
            </nav>

            {/* Actions: Sound, Guidelines & Register CTA */}
            <div className="hidden sm:flex items-center gap-3">
              {/* Sound toggle button */}
              <button
                onClick={toggleSound}
                onMouseEnter={() => sound.playHover()}
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all"
                title={soundActive ? 'Mute micro-interaction audio' : 'Enable sound feedback'}
                aria-label="Toggle Sound"
              >
                {soundActive ? (
                  <Volume2 className="w-4 h-4 text-[#FF772A]" />
                ) : (
                  <VolumeX className="w-4 h-4 text-white/40" />
                )}
              </button>

              {/* Guidelines Button */}
              <button
                onClick={() => {
                  sound.playClick();
                  onOpenGuidelines();
                }}
                onMouseEnter={() => sound.playHover()}
                className="px-3.5 py-2 text-xs font-medium text-white/80 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all flex items-center gap-1.5"
              >
                <span>Guidelines</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-white/50" />
              </button>

              {/* Primary Register Button */}
              <button
                onClick={() => {
                  sound.playClick();
                  onOpenRegister();
                }}
                onMouseEnter={() => sound.playHover()}
                data-cursor="JOIN"
                className="relative group overflow-hidden px-5 py-2 rounded-full bg-gradient-to-r from-[#FF772A] via-[#FF8A3D] to-[#E65A12] text-white font-medium text-xs tracking-wide shadow-[0_0_25px_rgba(255,119,42,0.4)] hover:shadow-[0_0_35px_rgba(255,119,42,0.6)] transition-all flex items-center gap-1.5"
              >
                <span className="relative z-10 font-semibold">Register Team</span>
                <Sparkles className="w-3.5 h-3.5 relative z-10 text-white/90 group-hover:rotate-12 transition-transform" />
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
            </div>

            {/* Mobile menu toggle */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                onClick={toggleSound}
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70"
                aria-label="Sound"
              >
                {soundActive ? <Volume2 className="w-4 h-4 text-[#FF772A]" /> : <VolumeX className="w-4 h-4 text-white/40" />}
              </button>
              <button
                onClick={() => {
                  sound.playClick();
                  setMobileMenuOpen(!mobileMenuOpen);
                }}
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white"
                aria-label="Menu"
              >
                {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#07090e]/95 backdrop-blur-2xl pt-24 px-6 sm:hidden flex flex-col justify-between pb-8">
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-2">
              Navigation Menu
            </span>
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.target)}
                className="flex items-center justify-between py-3 text-lg font-syne font-semibold text-white/90 hover:text-[#FF772A] border-b border-white/5 text-left"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-white/30" />
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-3 pt-6">
            <button
              onClick={() => {
                sound.playClick();
                setMobileMenuOpen(false);
                onOpenGuidelines();
              }}
              className="w-full py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-medium flex items-center justify-center gap-2"
            >
              <span>Download Pitch Template</span>
              <ArrowUpRight className="w-4 h-4 text-white/60" />
            </button>
            <button
              onClick={() => {
                sound.playClick();
                setMobileMenuOpen(false);
                onOpenRegister();
              }}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#FF772A] to-[#E65A12] text-white text-sm font-bold shadow-[0_0_25px_rgba(255,119,42,0.4)] flex items-center justify-center gap-2"
            >
              <span>Register 6-Member Team</span>
              <Sparkles className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
