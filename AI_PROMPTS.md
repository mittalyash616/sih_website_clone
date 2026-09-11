# AI Prompts & Engineering Log — Smart India Hackathon (SIH) Remake

This log documents the prompt evolution, architectural planning, and design thinking applied during the rebuild of the Smart India Hackathon portal.

---

### Prompt 1: Project Initiation & Architectural Calibration
**Prompt:**
> "Remake the Smart India Hackathon (SIH) official website (https://www.sih.gov.in/) into a high-craft, motion-rich, frontend-only experience. Calibrate visual design and motion quality to benchmarks like khanhnguyen.design, nixtio.com, grigoletti.ch, and noxediem.ch. Structure the codebase cleanly with smooth scrolling (Lenis), interactive GSAP/Motion micro-interactions, dark editorial aesthetics, and high-fidelity typography."

**Outcome:**
- Established an obsidian/slate dark aesthetic (`#07090e`) with sovereign tri-color micro-accents (saffron `#FF772A`, electric blue `#3B82F6`, emerald `#10B981`).
- Installed Lenis smooth scroll provider, Web Audio API micro-sound synthesizer, and customized mouse-follower cursor.
- Outlined 8 distinct core feature modules: Hero with interactive constellation canvas, Live Ticker, Track Architectures (Software vs Hardware), 12 National Themes, Real-time Problem Statements Filterable Catalog, 5-Stage Roadmap, Squad Compliance Simulator, Tangible Impact & Hall of Fame, and standardized Pitch Deck generator.

---

### Prompt 2: Design Language & Motion System
**Prompt:**
> "Configure typography pairing featuring Syne for editorial display headings, Plus Jakarta Sans for body legibility, Space Grotesk for technical metrics, and JetBrains Mono for problem statement codes. Replace static government tables with interactive glass cards, particle constellation canvas representing the 108 Nodal centers across India, and zero-latency audio tactile clicks."

**Outcome:**
- Configured dynamic canvas node network responding to mouse velocity.
- Added live countdown timer to the December 2026 Grand Finale.
- Built self-contained Web Audio API synthesizer for clean, subtle click/hover audio with toggleable header control.

---

### Prompt 3: Functional Feature Depth & Ministry Problem Statements
**Prompt:**
> "Build an authentic, searchable, and filterable Problem Statements Explorer containing real challenges from Union Ministries (Ministry of Railways, ISRO, DRDO, Ministry of Ayush, Ministry of Jal Shakti, Coal India). Include filters for Software vs Hardware track, complexity level, instant search, copyable PS codes, and a detailed specification modal drawer with dataset links and evaluation rubrics."

**Outcome:**
- Created `ProblemStatementsSection.tsx` with multi-facet filtering, bookmarking, and modal inspection.
- Linked theme selection in `ThemesSection.tsx` to automatically filter the problem statement catalog and scroll smoothly to results.

---

### Prompt 4: Compliance Engine & Pre-Registration Dossier
**Prompt:**
> "Implement an interactive squad compliance calculator that tests statutory SIH rules: exactly 6 members, mandatory minimum of 1 female member, single institute affiliation, and SPOC approval. Create a 3-step registration walkthrough that outputs an exportable text dossier for college SPOCs and triggers a celebratory particle burst upon completion."

**Outcome:**
- Developed `EligibilityChecker.tsx` and `RegisterModal.tsx` with instant compliance feedback and downloadable registration brief.
- Implemented `GuidelinesModal.tsx` specifying the official 5-slide SIH pitch deck structure with one-click copy and text export.
