import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export const CustomCursor: React.FC = () => {
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs
  const springX = useSpring(mouseX, { damping: 28, stiffness: 350 });
  const springY = useSpring(mouseY, { damping: 28, stiffness: 350 });

  useEffect(() => {
    // Only enable on pointer fine devices (mouse/trackpad, not touch)
    if (typeof window === 'undefined') return;
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest('button, a, [data-interactive="true"], input, textarea, select');
      const cursorTarget = target.closest('[data-cursor]') as HTMLElement | null;

      if (cursorTarget && cursorTarget.dataset.cursor) {
        setCursorText(cursorTarget.dataset.cursor);
        setIsHovered(true);
      } else if (interactive) {
        setCursorText('');
        setIsHovered(true);
      } else {
        setCursorText('');
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Outer follow ring / capsule */}
      <motion.div
        className="absolute rounded-full border border-[#FF772A]/70 bg-[#FF772A]/10 backdrop-blur-[2px] flex items-center justify-center font-mono text-[10px] font-bold text-white uppercase tracking-widest shadow-[0_0_16px_rgba(255,119,42,0.35)]"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: cursorText ? 72 : isHovered ? 44 : 28,
          height: cursorText ? 72 : isHovered ? 44 : 28,
          scale: isHovered ? 1.15 : 1,
          borderColor: isHovered ? 'rgba(255, 119, 42, 0.9)' : 'rgba(255, 255, 255, 0.35)',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 400 }}
      >
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-white text-[10px] tracking-wider"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>

      {/* Center pinpoint */}
      <motion.div
        className="absolute w-1.5 h-1.5 rounded-full bg-[#FF772A] shadow-[0_0_8px_#FF772A]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovered ? 0 : 1,
          opacity: isHovered ? 0 : 1,
        }}
        transition={{ duration: 0.15 }}
      />
    </div>
  );
};
