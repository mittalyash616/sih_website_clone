import { ProblemStatement, ThemeItem, TimelineMilestone, PastWinnerStory, FAQItem } from '../types/sih';
import { COMPREHENSIVE_PROBLEM_STATEMENTS } from './problemStatementsData';

export const SIH_STATS = [
  { label: 'Registered Innovators', value: '15,40,000+', rawNum: 1540000, suffix: '+', desc: 'From across 28 States & 8 UTs' },
  { label: 'Nodal Centers Across India', value: '108', rawNum: 108, suffix: '', desc: 'Top IITs, NITs & Central Universities' },
  { label: 'Problem Statements', value: '520+', rawNum: 520, suffix: '+', desc: 'From 65 Ministries & 85 PSUs' },
  { label: 'Cash Prizes & Grants', value: '₹2.8 Cr', rawNum: 2.8, suffix: ' Cr', desc: 'Direct ministry incubation funds' },
  { label: 'Startups Incubated', value: '340+', rawNum: 340, suffix: '+', desc: 'Active ventures backed by MIC' },
  { label: 'Non-stop Marathon', value: '36 Hrs', rawNum: 36, suffix: ' Hrs', desc: 'Continuous coding & prototyping' },
];

export const SIH_THEMES: ThemeItem[] = [
  {
    id: 'ai-automation',
    title: 'Smart Automation & AI',
    tagline: 'Autonomous systems, generative models & cognitive robotics',
    description: 'Transforming industrial workflows, public governance, and citizen delivery through adaptive intelligence and autonomous processing.',
    iconName: 'Cpu',
    problemCount: 84,
    accentColor: '#FF772A',
    badge: 'High Demand',
  },
  {
    id: 'clean-green-tech',
    title: 'Clean & Green Technology',
    tagline: 'Circular economy, carbon capture & sustainable zero-waste',
    description: 'Engineering scalable solutions for municipal solid waste segregation, industrial effluent neutralization, and lifecycle emission tracking.',
    iconName: 'Leaf',
    problemCount: 62,
    accentColor: '#10B981',
    badge: 'Viksit Bharat',
  },
  {
    id: 'healthcare-biomed',
    title: 'Healthcare & Biomedical Devices',
    tagline: 'Point-of-care diagnostics, telesurgery & indigenous implants',
    description: 'Pioneering affordable diagnostic medical devices, AI triage for primary health centers, and assistive rehabilitation systems.',
    iconName: 'Activity',
    problemCount: 58,
    accentColor: '#EC4899',
    badge: 'Mission Ayushman',
  },
  {
    id: 'agritech-rural',
    title: 'Agriculture, FoodTech & Rural',
    tagline: 'Precision agronomy, automated harvest & cold chain analytics',
    description: 'Empowering farmer collectives with multispectral drone soil analysis, post-harvest yield preservation, and decentralized solar cold storage.',
    iconName: 'Sprout',
    problemCount: 71,
    accentColor: '#F59E0B',
    badge: 'Kisan Tech',
  },
  {
    id: 'smart-vehicles-ev',
    title: 'Smart Vehicles & EV Ecosystem',
    tagline: 'Next-gen battery management, telemetry & connected V2X',
    description: 'Optimizing thermal runaway detection in high-ambient temperatures, smart swappable battery networks, and autonomous fleet routing.',
    iconName: 'Zap',
    problemCount: 46,
    accentColor: '#3B82F6',
    badge: 'Mission E-Mobility',
  },
  {
    id: 'space-defense',
    title: 'Space Tech & Avionics',
    tagline: 'Small satellite payload architectures & LEO telemetry',
    description: 'Debris mitigation algorithms, synthetic aperture radar (SAR) target de-noising, and indigenous GNSS/NavIC sensor integration.',
    iconName: 'Rocket',
    problemCount: 39,
    accentColor: '#8B5CF6',
    badge: 'ISRO / IN-SPACe',
  },
  {
    id: 'cybersecurity-blockchain',
    title: 'Cybersecurity, Defense & Quantum',
    tagline: 'Air-gapped telemetry security, zero-trust & quantum crypto',
    description: 'Securing critical national infrastructure, SCADA systems, post-quantum cryptographic primitives, and deepfake detection pipelines.',
    iconName: 'ShieldCheck',
    problemCount: 52,
    accentColor: '#6366F1',
    badge: 'National Security',
  },
  {
    id: 'disaster-resilience',
    title: 'Disaster Management & Climate',
    tagline: 'Flash flood early warning, seismic telemetry & SAR robotics',
    description: 'Real-time multi-hazard risk assessment models, acoustic avalanche detection, and autonomous life-detection swarm drones.',
    iconName: 'AlertTriangle',
    problemCount: 35,
    accentColor: '#EF4444',
    badge: 'NDMA Initiative',
  },
  {
    id: 'smart-education',
    title: 'Smart Education & Skilling',
    tagline: 'Vernacular pedagogy, AR laboratory twins & adaptive tutoring',
    description: 'Democratizing STEM education across regional languages with lightweight browser neural synthesis, tactile braille interfaces, and VR lab simulators.',
    iconName: 'GraduationCap',
    problemCount: 44,
    accentColor: '#14B8A6',
    badge: 'NEP 2020',
  },
  {
    id: 'renewable-energy',
    title: 'Renewable & Sustainable Energy',
    tagline: 'Microgrid load balancing, green hydrogen & floating solar',
    description: 'Grid synchronization of distributed rooftop solar arrays, electrolyzer efficiency enhancement, and wind turbine predictive maintenance.',
    iconName: 'Sun',
    problemCount: 40,
    accentColor: '#EAB308',
    badge: 'Panchamrit Goal',
  },
  {
    id: 'heritage-culture',
    title: 'Heritage, Culture & Tourism',
    tagline: '3D LiDAR temple reconstruction & linguistic preservation',
    description: 'Immersive digital twins of ancient archaeological monuments, epigraphical OCR translation for archaic scripts, and artisanal handicraft provenance.',
    iconName: 'Landmark',
    problemCount: 28,
    accentColor: '#D97706',
    badge: 'Ek Bharat Shreshtha Bharat',
  },
  {
    id: 'robotics-drones',
    title: 'Robotics & Unmanned Systems',
    tagline: 'Sub-surface inspection, micro-UAV swarms & industrial manipulators',
    description: 'Manhole cleaning robotic systems eliminating manual scavenging, tunnel inspection crawling rovers, and payload delivery quadcopters.',
    iconName: 'Bot',
    problemCount: 49,
    accentColor: '#06B6D4',
    badge: 'Swachh Bharat 2.0',
  }
];

export const PROBLEM_STATEMENTS: ProblemStatement[] = COMPREHENSIVE_PROBLEM_STATEMENTS;

export const TIMELINE_MILESTONES: TimelineMilestone[] = [
  {
    step: '01',
    title: 'College Internal Hackathon & SPOC Verification',
    dateRange: 'August 1 – September 5, 2026',
    status: 'completed',
    description: 'Colleges across India host internal screening hackathons. Single Point of Contact (SPOC) nominates top teams (max 30 software + 15 hardware per institute).',
    actionItem: 'Institute SPOC Approval Required',
    details: [
      'Mandatory minimum of 1 female member in every 6-member squad',
      'Institute Principal endorsement letter uploaded on SIH portal',
      'Interdisciplinary team formulation strongly encouraged'
    ]
  },
  {
    step: '02',
    title: 'Idea Submission & Problem Statement Selection',
    dateRange: 'September 6 – October 15, 2026',
    status: 'active',
    description: 'Nominated teams analyze official Ministry problem statements, formulate architectural blueprints, and submit structured PPT/PDF proposal documents.',
    actionItem: 'Submissions Open on Portal',
    details: [
      'Adhere strictly to official 5-slide SIH idea pitch deck template',
      'Specify hardware BOM or software system architecture clearly',
      'Selection of up to 3 preferred problem statement codes'
    ]
  },
  {
    step: '03',
    title: 'Nationwide Expert Evaluation & Grand Finale Shortlisting',
    dateRange: 'October 20 – November 10, 2026',
    status: 'upcoming',
    description: 'Over 2,000 senior scientists, defense officers, and industry CTOs conduct rigorous double-blind screening to select final finalists for nodal centers.',
    actionItem: 'Results Announcement on Portal',
    details: [
      'Top 5 to 7 teams per problem statement selected for on-ground finale',
      'Travel allowances and nodal center allotment letters issued',
      'Preliminary mentor synchronization rounds'
    ]
  },
  {
    step: '04',
    title: 'The Grand Finale: 36-Hour Non-stop National Marathon',
    dateRange: 'December 12 – 14, 2026',
    status: 'upcoming',
    description: 'Finalists assemble at 108 prestigious nodal centers across India for a non-stop 36-hour coding marathon (Software) or 5-day build (Hardware).',
    actionItem: 'Nationwide Live Webcast',
    details: [
      'Continuous three-phase jury evaluations with midnight code review',
      'Live interaction with Union Ministers and Chief Guests',
      'Immediate results and grand prize distribution ceremony'
    ]
  },
  {
    step: '05',
    title: 'Viksit Bharat Incubation & Ministry Deployment',
    dateRange: 'January 2027 Onwards',
    status: 'upcoming',
    description: 'Winners transition prototypes to production. Ministry grants up to ₹10 Lakhs and AICTE TRL accelerators support patenting and commercialization.',
    actionItem: 'Incubation Grant Onboarding',
    details: [
      'Deployment in real government departments (e.g. Indian Railways, ICMR)',
      'Free cloud credits ($25,000+) from partner tech giants',
      'Support for national patent filing through Cell for IPR Promotion (CIPAM)'
    ]
  }
];

export const PAST_WINNERS: PastWinnerStory[] = [
  {
    edition: 'SIH 2024 Winner',
    title: 'AI Automated Vision System for High-Speed Pantograph Spark Detection',
    team: 'Team TrackVanguard',
    college: 'IIT Roorkee',
    ministry: 'Ministry of Railways',
    impact: 'Deployed across Northern Railway electrified corridors, reducing overhead line snap incidents by 74%.',
    tags: ['Computer Vision', 'High-Speed Cameras', 'Railways'],
    patentOrStartup: 'Indian Patent Granted #418291'
  },
  {
    edition: 'SIH 2024 Winner',
    title: 'Thermal Imaging & Acoustical Early Pest Infestation Detector for Grain Silos',
    team: 'Team AgroSense',
    college: 'PSG College of Technology, Coimbatore',
    ministry: 'Food Corporation of India (FCI)',
    impact: 'Installed across 18 major FCI warehouse complexes in Punjab and Haryana, protecting 45,000 MT of stored wheat.',
    tags: ['Acoustic IoT', 'Thermal Imaging', 'AgriTech'],
    patentOrStartup: 'Incubated at PSG-STEP with ₹15L Grant'
  },
  {
    edition: 'SIH 2023 Winner',
    title: 'Rapid Portable Electrochemical Sensor for Adulteration in Liquid Milk',
    team: 'Team PureDrop',
    college: 'COEP Technological University, Pune',
    ministry: 'FSSAI (Food Safety and Standards Authority of India)',
    impact: 'Handheld device gives test results in 45 seconds with 98.4% accuracy against synthetic detergents and urea.',
    tags: ['Biochemistry', 'Microfluidics', 'Food Safety'],
    patentOrStartup: 'Commercialized as PureSense Technologies Pvt Ltd'
  }
];

export const PARTNERS_AND_MINISTRIES = [
  { name: 'Ministry of Education', role: 'Apex Organizing Body', badge: 'Govt. of India' },
  { name: 'AICTE', role: 'Co-Organizer & Technical Host', badge: 'Statutory Body' },
  { name: 'Innovation Cell (MIC)', role: 'Execution & Incubation Wing', badge: 'Innovation Cell' },
  { name: 'Ministry of Railways', role: 'Problem Statement Partner', badge: 'Govt. of India' },
  { name: 'ISRO / IN-SPACe', role: 'Space & Avionics Partner', badge: 'Space Tech' },
  { name: 'DRDO', role: 'Defense & Quantum Partner', badge: 'Defense Research' },
  { name: 'Ministry of Health & ICMR', role: 'Biomedical Partner', badge: 'Healthcare' },
  { name: 'Ministry of Jal Shakti', role: 'Namami Gange Partner', badge: 'Water & Environment' },
  { name: 'Amazon Web Services', role: 'Cloud Computing Partner', badge: 'Technology Partner' },
  { name: 'Google Cloud India', role: 'AI & Developer Partner', badge: 'Technology Partner' },
  { name: 'Cisco Systems India', role: 'Networking & Security Partner', badge: 'Technology Partner' },
  { name: 'Intel Technology', role: 'Edge & Hardware Acceleration', badge: 'Silicon Partner' }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Team Formation',
    question: 'What is the mandatory composition of an SIH team?',
    answer: 'Every team must consist of exactly six (6) student members enrolled in an AICTE/UGC recognized higher education institution in India. As per strict SIH guidelines, at least one (1) team member MUST be female. Teams are strongly advised to include diverse engineering and design skills.'
  },
  {
    id: 'faq-2',
    category: 'General',
    question: 'Can a college submit unlimited teams for the hackathon?',
    answer: 'No. Every institution can nominate a maximum of 30 teams for the Software Edition and 15 teams for the Hardware Edition through their officially designated College SPOC (Single Point of Contact) after hosting an internal college hackathon.'
  },
  {
    id: 'faq-3',
    category: 'Problem Statements',
    question: 'Can teams propose an idea for a "Student Innovation" category without a Ministry PS?',
    answer: 'Yes! While most teams select specific Ministry/Department Problem Statements, SIH also features a dedicated "Student Innovation Track" where teams can submit proprietary breakthrough solutions solving critical national challenges.'
  },
  {
    id: 'faq-4',
    category: 'Prizes & IPR',
    question: 'Who owns the Intellectual Property (IPR) of the project developed during SIH?',
    answer: 'The Intellectual Property Rights (IPR) remain entirely with the student team and their institution. Ministries and sponsoring organizations retain the first right of refusal to adopt, test, or pilot the solution with the team under incubation grants.'
  },
  {
    id: 'faq-5',
    category: 'Grand Finale',
    question: 'Are travel and accommodation provided for the Grand Finale?',
    answer: 'Yes! The organizing committee and designated Nodal Centers provide subsidized or reimbursed round-trip sleeper/3AC train travel, along with complimentary on-campus accommodation, high-speed 24/7 gigabit internet, continuous meals, and hardware fabrication lab access during the finale.'
  }
];
