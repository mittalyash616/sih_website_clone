import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQ_ITEMS } from '../data/sihData';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';
import { sound } from '../utils/audio';

export const FAQSection: React.FC<{ onOpenGuidelines: () => void }> = ({ onOpenGuidelines }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [openIds, setOpenIds] = useState<string[]>(['faq-1']);

  const categories = ['All', 'Team Formation', 'General', 'Problem Statements', 'Grand Finale', 'Prizes & IPR'];

  const filteredFaqs = activeCategory === 'All'
    ? FAQ_ITEMS
    : FAQ_ITEMS.filter((f) => f.category === activeCategory);

  const toggleFaq = (id: string) => {
    sound.playClick();
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-[#07090e]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#FF772A] mb-3">
            <span>08 / FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="font-syne text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Rules, Criteria & Protocols
          </h2>
          <p className="text-xs sm:text-sm text-white/60 max-w-md mx-auto mt-3 font-light">
            Everything you need to know about team formations, SPOC approvals, traveling allowances, and intellectual property.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                sound.playClick();
                setActiveCategory(cat);
              }}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                activeCategory === cat
                  ? 'bg-[#FF772A] text-white font-semibold shadow-[0_0_15px_rgba(255,119,42,0.3)]'
                  : 'bg-white/5 hover:bg-white/10 text-white/60 border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordions */}
        <div className="space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = openIds.includes(faq.id);

            return (
              <div
                key={faq.id}
                className="glass-panel rounded-2xl border border-white/10 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  onMouseEnter={() => sound.playHover()}
                  className="w-full p-5 text-left flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-4 h-4 text-[#FF772A] shrink-0" />
                    <span className="font-syne font-bold text-sm sm:text-base text-white">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-white/50 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#FF772A]' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-white/70 leading-relaxed border-t border-white/5">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Still have questions prompt */}
        <div className="mt-12 text-center p-6 glass-panel rounded-2xl border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-syne text-sm font-bold text-white">
              Looking for institutional guidelines or SPOC nomination forms?
            </h4>
            <p className="text-xs text-white/50 mt-0.5">
              Read the full AICTE Smart India Hackathon Process Manual (PDF format).
            </p>
          </div>
          <button
            onClick={() => {
              sound.playClick();
              onOpenGuidelines();
            }}
            className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/15 text-xs font-mono text-white border border-white/15 shrink-0 transition-all"
          >
            Open Process Manual
          </button>
        </div>
      </div>
    </section>
  );
};
