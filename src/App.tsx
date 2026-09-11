import React, { useState } from 'react';
import { SmoothScroll } from './components/SmoothScroll';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MarqueeTicker } from './components/MarqueeTicker';
import { AboutSection } from './components/AboutSection';
import { ThemesSection } from './components/ThemesSection';
import { ProblemStatementsSection } from './components/ProblemStatementsSection';
import { TimelineSection } from './components/TimelineSection';
import { EligibilityChecker } from './components/EligibilityChecker';
import { StatsAndImpact } from './components/StatsAndImpact';
import { PartnersSection } from './components/PartnersSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { RegisterModal } from './components/RegisterModal';
import { GuidelinesModal } from './components/GuidelinesModal';

export default function App() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isGuidelinesOpen, setIsGuidelinesOpen] = useState(false);
  const [selectedThemeFilter, setSelectedThemeFilter] = useState<string | null>(null);

  const handleSelectTheme = (themeTitle: string) => {
    setSelectedThemeFilter(themeTitle);
  };

  const handleClearThemeFilter = () => {
    setSelectedThemeFilter(null);
  };

  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-[#07090e] text-[#e2e8f0] selection:bg-[#FF772A] selection:text-white">
        {/* Subtle noise texture layer */}
        <div className="noise-overlay" />

        {/* Custom interactive cursor */}
        <CustomCursor />

        {/* Floating Top Navigation */}
        <Navbar
          onOpenRegister={() => setIsRegisterOpen(true)}
          onOpenGuidelines={() => setIsGuidelinesOpen(true)}
        />

        {/* Main Sections Flow */}
        <main>
          {/* Hero Section */}
          <Hero
            onOpenRegister={() => setIsRegisterOpen(true)}
            onOpenGuidelines={() => setIsGuidelinesOpen(true)}
          />

          {/* Live Bulletin Ticker */}
          <MarqueeTicker
            onExploreClick={() => {
              const el = document.getElementById('problem-statements');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
          />

          {/* Section 01: About SIH & The 2 Editions */}
          <AboutSection
            onExploreClick={() => {
              const el = document.getElementById('problem-statements');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
          />

          {/* Section 02: 12 Priority Themes */}
          <ThemesSection onSelectTheme={handleSelectTheme} />

          {/* Section 03: Live Problem Statements Explorer */}
          <ProblemStatementsSection
            selectedThemeFilter={selectedThemeFilter}
            onClearThemeFilter={handleClearThemeFilter}
            onOpenPitchTemplate={() => setIsGuidelinesOpen(true)}
          />

          {/* Section 04: Process Roadmap & Timeline */}
          <TimelineSection />

          {/* Section 05: Squad Eligibility Simulator */}
          <EligibilityChecker onOpenRegister={() => setIsRegisterOpen(true)} />

          {/* Section 06: Impact, Stats & Hall of Fame */}
          <StatsAndImpact />

          {/* Section 07: Apex Partners & Ministries */}
          <PartnersSection />

          {/* Section 08: Frequently Asked Questions */}
          <FAQSection onOpenGuidelines={() => setIsGuidelinesOpen(true)} />
        </main>

        {/* Editorial Footer */}
        <Footer
          onOpenRegister={() => setIsRegisterOpen(true)}
          onOpenGuidelines={() => setIsGuidelinesOpen(true)}
        />

        {/* Modals */}
        <RegisterModal
          isOpen={isRegisterOpen}
          onClose={() => setIsRegisterOpen(false)}
        />

        <GuidelinesModal
          isOpen={isGuidelinesOpen}
          onClose={() => setIsGuidelinesOpen(false)}
        />
      </div>
    </SmoothScroll>
  );
}
