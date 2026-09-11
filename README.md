# Smart India Hackathon 2026 — Next-Gen Redesign

A motion-rich, frontend-only reimagining of the **Smart India Hackathon (SIH)** portal — the world's largest open innovation initiative organized by the Ministry of Education's Innovation Cell (MIC) and AICTE, Government of India.

---

## 1. Design Philosophy & Inspiration References

Rather than a conventional government portal with clunky nested tables and static pdf links, this remake treats SIH as a **world-class technological movement**. It celebrates the creative energy of over 1.5 million student innovators and provides an editorial, architectural, and tactile experience.

### Design Inspirations
- **[Khanh Nguyen Portfolio](https://khanhnguyen.design/)**: Refined pacing, kinetic typography, and balanced negative space.
- **[Nixtio](https://nixtio.com/)**: Sophisticated dark palette, subtle particle dynamics, and deep contrast.
- **[Grigoletti](https://grigoletti.ch/en/)**: Fluid micro-interactions and smooth scroll physics.
- **[Noxe Diem](https://noxediem.ch/en/)**: Tactile cursor tracking, delicate borders, and clean typographic rhythm.

---

## 2. Tools & Tech Stack Used

- **Framework & Runtime:** React 19, TypeScript, Vite 6
- **Styling:** Tailwind CSS v4 with custom glassmorphic layer styling and CSS variable typography
- **Smooth Scrolling:** `lenis` for inertial, momentum-based wheel and trackpad scrolling
- **Animation & Motion:** `motion/react` (Framer Motion v12) + GSAP for responsive transitions
- **Audio Micro-Interactions:** Custom Web Audio API synthesizer (`SoundEngine`) providing zero-latency acoustic click and hover feedback without external MP3 files
- **Canvas Visuals:** HTML5 2D Canvas rendering an interactive constellation mesh representing the 108 Nodal centers across India
- **Icons:** `lucide-react`
- **Celebration Effects:** `canvas-confetti`
- **AI Coding Assistant:** Google AI Studio Build (powered by Gemini models and Antigravity agent)

---

## 3. Key Functional Modules

1. **Kinetic Hero & Live Countdown:**
   - Real-time countdown to the December 12, 2026 Grand Finale.
   - Interactive 108-node particle network responsive to mouse cursor velocity.
   - Live metrics marquee ticker broadcasting ministry updates.

2. **Dual-Track Deep Dive (Software vs Hardware):**
   - Interactive comparison showcasing the differences between the 36-hour digital coding sprint and the 5-day physical hardware fabrication marathon.
   - Terminal console simulation displaying build telemetry and test criteria.

3. **12 Priority Innovation Themes:**
   - Visual cards with custom accent glows for AI & Automation, Green Tech, Healthcare, Agritech, Space Tech, EV Ecosystem, etc.
   - Clicking any theme filters the live problem statements catalog below.

4. **Live Problem Statements Explorer:**
   - Real-world challenges from Ministry of Railways, ISRO, DRDO, Ministry of Ayush, Coal India, etc.
   - Instant search by code (`SIH2026-PS101`), ministry, or keyword.
   - Track filters (Software, Hardware, Both) and Complexity filters (Easy, Medium, Hard).
   - Modal drawer with full problem specifications, datasets, and rubric breakdown.
   - One-click copy for PS codes and bookmarking capability.

5. **Roadmap & Process Timeline:**
   - 5-stage interactive journey from campus internal screening to SPOC submission, nationwide screening, 36-hour grand finale, and ministry venture incubation.

6. **Squad Compliance & Eligibility Simulator:**
   - Real-time statutory checker testing mandatory SIH criteria (exact 6 members, compulsory minimum 1 female member, single-institute affiliation, and SPOC approval).

7. **Impact, Stats & Hall of Fame:**
   - Milestones and real success stories (winning solutions deployed in Indian Railways, Food Corporation of India, and FSSAI).
   - Interactive 108 Nodal centers directory (IIT Roorkee, IIT Delhi, NIT Trichy, etc.).

8. **Pre-Registration & Official Pitch Deck Generator:**
   - Multi-step squad registration form that generates an exportable SPOC packet (`.txt`).
   - Official 5-slide standardized PPT pitch deck guidelines modal with clipboard copy and export.

---

## 4. What Was Explored & Learned

- **Web Audio API Synthesis for UI:** Implemented clean, synthetic sine/triangle micro-tones directly in code, eliminating network requests and asset loading lag.
- **Lenis + Canvas Optimization:** Synced smooth scrolling with a persistent background constellation canvas without dropping frames on high-refresh monitors.
- **Information Architecture Modernization:** Transformed a dense administrative government portal into an inspiring, scannable product interface without sacrificing factual accuracy or statutory guidelines.

---

## 5. Running the Application Locally

```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev

# 3. Build for production (Vercel ready)
npm run build
```
