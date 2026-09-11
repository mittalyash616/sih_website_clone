import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Sparkles, Terminal, Shield, Zap, ChevronRight, Layers, Flame, Trophy } from 'lucide-react';
import { sound } from '../utils/audio';
import { useLenis } from './SmoothScroll';

interface HeroProps {
  onOpenRegister: () => void;
  onOpenGuidelines: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRegister, onOpenGuidelines }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { scrollTo } = useLenis();

  // Finale countdown (Target: Dec 12, 2026)
  const [timeLeft, setTimeLeft] = useState({
    days: 92,
    hours: 14,
    minutes: 38,
    seconds: 45,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          return { ...prev, days: Math.max(0, prev.days - 1), hours: 23, minutes: 59, seconds: 59 };
        }
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Canvas particle constellation representing 108 Nodal Centers across India
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    // Generate node particles
    const particleCount = Math.min(80, Math.floor(width / 18));
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 1.8 + 1,
      color: Math.random() > 0.65 ? '#FF772A' : Math.random() > 0.4 ? '#3B82F6' : '#94A3B8',
      alpha: Math.random() * 0.5 + 0.2,
    }));

    let mouseX = -1000;
    let mouseY = -1000;

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };
    canvas.addEventListener('mousemove', onMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        // Move
        p1.x += p1.vx;
        p1.y += p1.vy;

        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;

        // Interaction with mouse
        const dxMouse = mouseX - p1.x;
        const dyMouse = mouseY - p1.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        if (distMouse < 120) {
          p1.x -= (dxMouse / distMouse) * 0.8;
          p1.y -= (dyMouse / distMouse) * 0.8;
        }

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 255, 255, ${(1 - dist / 110) * 0.12})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }

        // Draw node
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fillStyle = p1.color;
        ctx.globalAlpha = p1.alpha;
        ctx.fill();
        ctx.globalAlpha = 1.0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative min-h-[94vh] pt-32 pb-20 flex flex-col justify-between overflow-hidden bg-radial-gradient">
      {/* Interactive Constellation Background */}
      <div className="absolute inset-0 pointer-events-auto z-0 opacity-70">
        <canvas ref={canvasRef} className="w-full h-full" />
      </div>

      {/* Decorative subtle ambient lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-[#FF772A]/10 to-transparent blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-10 w-[300px] h-[300px] bg-[#3B82F6]/10 blur-[100px] pointer-events-none -z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center">
        {/* Top Tag & Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center gap-3 mb-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            <span className="text-xs font-mono font-medium text-white/90 uppercase tracking-wide">
              Official 2026 Edition Announced
            </span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF772A]/10 border border-[#FF772A]/25 text-[#FF9254] text-xs font-mono">
            <Flame className="w-3.5 h-3.5" />
            <span>36-Hour Non-stop Innovation Marathon</span>
          </div>
        </motion.div>

        {/* Hero Main Headline */}
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-syne text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05]"
          >
            Engineering <br className="hidden sm:block" />
            Solutions for <span className="bg-gradient-to-r from-[#FF772A] via-[#FFA166] to-[#38BDF8] bg-clip-text text-transparent">Viksit Bharat</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-base sm:text-xl text-white/70 max-w-2xl font-light leading-relaxed"
          >
            Smart India Hackathon is the world's biggest open innovation model.
            Connecting 15 Lakh+ student creators with 65+ Central Ministries & PSUs to build
            indigenous, mission-critical digital public goods and hardware breakthroughs.
          </motion.p>
        </div>

        {/* Primary Action Buttons & Countdown Bar */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          {/* Action: Explore Problem Statements */}
          <button
            onClick={() => {
              sound.playClick();
              scrollTo('#problem-statements', { offset: -70 });
            }}
            onMouseEnter={() => sound.playHover()}
            data-cursor="EXPLORE"
            className="px-6 py-3.5 rounded-full bg-gradient-to-r from-[#FF772A] via-[#FF8A3D] to-[#E65A12] text-white font-syne font-bold text-sm tracking-wide shadow-[0_0_30px_rgba(255,119,42,0.45)] hover:shadow-[0_0_45px_rgba(255,119,42,0.65)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2.5 group"
          >
            <span>Explore 520+ Problem Statements</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Action: Register Team Modal */}
          <button
            onClick={() => {
              sound.playClick();
              onOpenRegister();
            }}
            onMouseEnter={() => sound.playHover()}
            data-cursor="REGISTER"
            className="px-6 py-3.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 hover:border-white/30 text-white font-medium text-sm tracking-wide transition-all backdrop-blur-md flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-[#FF772A]" />
            <span>Nominate 6-Member Squad</span>
          </button>

          {/* Guidelines Pitch Deck Template */}
          <button
            onClick={() => {
              sound.playClick();
              onOpenGuidelines();
            }}
            onMouseEnter={() => sound.playHover()}
            className="px-5 py-3.5 text-xs font-mono text-white/60 hover:text-white transition-colors underline-offset-4 hover:underline flex items-center gap-1.5"
          >
            <span>Official PPT Template</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/10 text-white/80">PDF</span>
          </button>
        </motion.div>

        {/* Live Countdown & Interactive Dual-Track Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4 pt-8 border-t border-white/[0.08]"
        >
          {/* Countdown timer module */}
          <div className="glass-panel p-4 rounded-2xl flex flex-col justify-between">
            <div className="flex items-center justify-between text-xs font-mono text-white/60 mb-2">
              <span className="flex items-center gap-1.5 text-white/90 font-medium">
                <span className="w-2 h-2 rounded-full bg-[#FF772A] animate-ping" />
                Grand Finale Countdown
              </span>
              <span>Dec 12, 2026</span>
            </div>
            <div className="grid grid-cols-4 gap-2 text-center">
              {[
                { label: 'DAYS', val: timeLeft.days },
                { label: 'HRS', val: timeLeft.hours },
                { label: 'MIN', val: timeLeft.minutes },
                { label: 'SEC', val: timeLeft.seconds },
              ].map((item, idx) => (
                <div key={idx} className="bg-white/5 rounded-lg py-2 border border-white/5">
                  <div className="font-mono text-lg sm:text-xl font-bold text-white tabular-nums">
                    {String(item.val).padStart(2, '0')}
                  </div>
                  <div className="text-[9px] font-mono text-white/40 tracking-wider">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Software Edition Capsule */}
          <div
            onClick={() => {
              sound.playClick();
              scrollTo('#about');
            }}
            className="glass-panel-interactive p-4 rounded-2xl cursor-pointer group flex flex-col justify-between"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#3B82F6]/20 text-[#60A5FA] border border-[#3B82F6]/30">
                SOFTWARE EDITION
              </span>
              <Terminal className="w-4 h-4 text-[#60A5FA] group-hover:scale-110 transition-transform" />
            </div>
            <div className="my-2">
              <h4 className="font-syne font-bold text-sm text-white group-hover:text-[#60A5FA] transition-colors">
                36-Hour Digital Sprint
              </h4>
              <p className="text-xs text-white/60 line-clamp-1 mt-0.5">
                AI/ML, Web3, Cloud, Indic NLP & Cyber Resilience.
              </p>
            </div>
            <div className="text-[11px] font-mono text-white/40 group-hover:text-white/80 transition-colors flex items-center gap-1">
              <span>View track criteria</span>
              <ChevronRight className="w-3 h-3" />
            </div>
          </div>

          {/* Hardware Edition Capsule */}
          <div
            onClick={() => {
              sound.playClick();
              scrollTo('#about');
            }}
            className="glass-panel-interactive p-4 rounded-2xl cursor-pointer group flex flex-col justify-between"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#FF772A]/20 text-[#FF9254] border border-[#FF772A]/30">
                HARDWARE EDITION
              </span>
              <Zap className="w-4 h-4 text-[#FF772A] group-hover:scale-110 transition-transform" />
            </div>
            <div className="my-2">
              <h4 className="font-syne font-bold text-sm text-white group-hover:text-[#FF772A] transition-colors">
                5-Day Intensive Prototyping
              </h4>
              <p className="text-xs text-white/60 line-clamp-1 mt-0.5">
                Embedded IoT, Robotics, Drones, Clean Energy & MedTech.
              </p>
            </div>
            <div className="text-[11px] font-mono text-white/40 group-hover:text-white/80 transition-colors flex items-center gap-1">
              <span>View lab resources</span>
              <ChevronRight className="w-3 h-3" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Hint */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full flex justify-center mt-6">
        <button
          onClick={() => {
            sound.playClick();
            scrollTo('#about', { offset: -60 });
          }}
          className="text-white/40 hover:text-white transition-colors flex flex-col items-center gap-1 text-[11px] font-mono uppercase tracking-widest group"
        >
          <span>Scroll to Discover</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#FF772A]" />
        </button>
      </div>
    </section>
  );
};
