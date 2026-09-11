import { ProblemStatement } from '../types/sih';

export const COMPREHENSIVE_PROBLEM_STATEMENTS: ProblemStatement[] = [
  // ==========================================
  // THEME 1: Smart Automation & AI
  // ==========================================
  {
    id: 'ps-01',
    code: 'SIH2026-PS101',
    title: 'Autonomous Multi-Lingual Legal Case Summarization & Precedent Citation Engine',
    organization: 'Ministry of Law & Justice / e-Courts Project',
    category: 'Software',
    theme: 'Smart Automation & AI',
    complexity: 'Hard',
    description: 'Build a domain-adapted LLM and retrieval-augmented generation (RAG) pipeline capable of ingesting voluminous High Court and Supreme Court judgment transcripts in English and 10 regional Indian languages, producing actionable headnotes, statute cross-references, and ratio decidendi extractions.',
    expectedOutcome: 'A sub-3-second inference engine with hallucination guardrails, benchmarked against legal bench summaries with ROUGE-L > 0.62 and verifiable citation verification.',
    datasetOrHardware: 'Indian Kanoon public judgments corpus, Supreme Court SCR reports, ONNX / HuggingFace Transformers.',
    submissionCount: 412,
    tags: ['GenAI', 'Indic NLP', 'LegalTech', 'RAG', 'Vector Search']
  },
  {
    id: 'ps-02',
    code: 'SIH2026-PS102',
    title: 'Automated Real-Time Defect Detection for High-Speed Currency Printing & Security Paper',
    organization: 'Security Printing and Minting Corporation of India (SPMCIL)',
    category: 'Hardware',
    theme: 'Smart Automation & AI',
    complexity: 'Hard',
    description: 'Design an ultra-high-speed line-scan camera edge-inspection rig for currency printing presses running at 30 sheets per second to identify micro-printing voids, intaglio alignment misalignments, watermark bleed, and security thread tears.',
    expectedOutcome: 'FPGA or Jetson Orin edge system detecting sub-0.1mm micro defects with zero false rejects, synchronizing with mechanical pneumatic rejection kickers.',
    datasetOrHardware: '12K Line scan CMOS sensor, FPGA image pipeline, high-intensity LED darkfield illumination array.',
    submissionCount: 184,
    tags: ['Computer Vision', 'FPGA', 'Edge AI', 'Industrial Automation', 'Optics']
  },
  {
    id: 'ps-03',
    code: 'SIH2026-PS103',
    title: 'Cognitive Conversational Voice Bot for Pensioners & Jeevan Pramaan Verification',
    organization: 'Department of Pension & Pensioners Welfare (DoPPW)',
    category: 'Software',
    theme: 'Smart Automation & AI',
    complexity: 'Medium',
    description: 'Develop an intuitive, multi-lingual conversational AI voice agent that guides elderly pensioners through Digital Life Certificate (DLC) facial authentication, grievance filing, and PPO status queries over standard IVR and WhatsApp.',
    expectedOutcome: 'High accuracy Indic speech-to-text (ASR) tuned for senior citizen speech patterns, integrated with UIDAI FaceRD biometric verification guidelines.',
    datasetOrHardware: 'Bhashini speech corpus, Coqui TTS, Twilio / Exotel IVR webhooks, WebRTC audio streaming.',
    submissionCount: 320,
    tags: ['Conversational AI', 'Voice AI', 'Elderly Care', 'Bhashini', 'GovTech']
  },

  // ==========================================
  // THEME 2: Clean & Green Technology
  // ==========================================
  {
    id: 'ps-04',
    code: 'SIH2026-PS104',
    title: 'High-Precision Automated Marine Plastic Trash Interceptor for River Estuaries',
    organization: 'Ministry of Jal Shakti / National Mission for Clean Ganga',
    category: 'Hardware',
    theme: 'Clean & Green Technology',
    complexity: 'Hard',
    description: 'Design a self-powered catamaran boom barrier system utilizing solar and micro-hydro kinetic water wheels to autonomously corral, lift, and compress floating plastic debris (polyethylene, PET bottles, thermocol) at urban drain outfalls before entering river deltas.',
    expectedOutcome: 'A 1:5 scale functional prototype with conveyor separator, load-cell bin monitoring, and cellular telemetry reporting recovered tonnage metrics.',
    datasetOrHardware: 'Estuary current velocity charts, floating waste density surveys, solar charge controllers, conveyor actuators.',
    submissionCount: 290,
    tags: ['River Rejuvenation', 'Circular Economy', 'Solar Marine', 'Mechatronics', 'IoT']
  },
  {
    id: 'ps-05',
    code: 'SIH2026-PS105',
    title: 'Blockchain-Audited Carbon Credit Verification for Industrial Fly Ash Utilization',
    organization: 'Ministry of Environment, Forest & Climate Change (MoEFCC)',
    category: 'Software',
    theme: 'Clean & Green Technology',
    complexity: 'Medium',
    description: 'Create an automated carbon credit accounting and smart contract registry tracking fly ash uptake from thermal power plants into green cement and geopolymer brick production, preventing double-counting and falsified emission offset claims.',
    expectedOutcome: 'A decentralized dApp with IoT weighbridge integration, verifiable emission calculation algorithms according to UNFCCC methodologies, and open auditor dashboards.',
    datasetOrHardware: 'NTPC fly ash dispatch logs, Smart contract templates (Solidity/Rust), CPCB emission factors.',
    submissionCount: 245,
    tags: ['Carbon Credits', 'Blockchain', 'Smart Contracts', 'Industrial Ecology', 'FinTech']
  },
  {
    id: 'ps-06',
    code: 'SIH2026-PS106',
    title: 'Smart Decentralized Bio-Methanation & Greywater Nutrient Recirculation Unit',
    organization: 'Ministry of Housing and Urban Affairs (MoHUA)',
    category: 'Hardware',
    theme: 'Clean & Green Technology',
    complexity: 'Medium',
    description: 'Engineer a compact, odor-neutral anaerobic digester coupled with a vermifiltration wetland cell for residential apartment societies, converting 50kg/day wet food waste into pressurized bio-gas and nutrient-rich hydroponic water.',
    expectedOutcome: 'A plug-and-play unit with embedded gas methane sensor, automated slurry pH regulator, and mobile app reporting daily biogas yield and water purity parameters.',
    datasetOrHardware: 'Anaerobic microbial consortia specs, NDIR methane sensors, Arduino/ESP32 PID pump control.',
    submissionCount: 215,
    tags: ['Bio-Gas', 'Urban Sanitation', 'Waste to Energy', 'Embedded Systems']
  },

  // ==========================================
  // THEME 3: Healthcare & Biomedical Devices
  // ==========================================
  {
    id: 'ps-07',
    code: 'SIH2026-PS107',
    title: 'Real-Time Non-Invasive Hemoglobin & Jaundice Screening Device for Rural Anganwadis',
    organization: 'Ministry of Health & Family Welfare / ICMR',
    category: 'Hardware',
    theme: 'Healthcare & Biomedical Devices',
    complexity: 'Hard',
    description: 'Construct an ultra-low-cost, battery-operated optical fingertip spectrometer capable of measuring total hemoglobin (g/dL) and transcutaneous bilirubin without drawing venous or capillary blood, tailored for infants and pregnant women in electricity-scarce villages.',
    expectedOutcome: 'A handheld 3D-printed enclosure with multi-wavelength LED array, photodiode sensor, Bluetooth Low Energy sync to Poshan Tracker app, with accuracy within +/- 0.8 g/dL of lab hematology analyzers.',
    datasetOrHardware: 'Photoplethysmogram (PPG) absorption data, ICMR clinical calibration ranges, Nordic nRF52 / ESP32-S3.',
    submissionCount: 489,
    tags: ['Biomedical', 'Optical Sensing', 'Spectroscopy', 'Maternal Health', 'Embedded C']
  },
  {
    id: 'ps-08',
    code: 'SIH2026-PS108',
    title: 'Edge-AI Portable 12-Lead ECG with Ischemia & STEMI Early Warning System',
    organization: 'All India Institute of Medical Sciences (AIIMS)',
    category: 'Both',
    theme: 'Healthcare & Biomedical Devices',
    complexity: 'Hard',
    description: 'Develop an affordable 12-lead portable ECG diagnostic box with an onboard convolutional neural network (CNN) that detects acute myocardial infarction (STEMI) and lethal arrhythmias in emergency ambulances prior to hospital arrival.',
    expectedOutcome: 'Sub-second interpretation with >96% sensitivity, automated FHIR HL7 packet dispatch to cardiology triage, and low-noise analog frontend.',
    datasetOrHardware: 'PhysioNet PTB-XL ECG dataset, ADS1298 analog front-end, Raspberry Pi / Coral Edge TPU.',
    submissionCount: 378,
    tags: ['ECG', 'Edge AI', 'Emergency Medicine', 'Telecardiology', 'Signal Processing']
  },
  {
    id: 'ps-09',
    code: 'SIH2026-PS109',
    title: 'Ayurvedic Prakriti & Doshic Diagnosis Assistant via Tongue & Facial Image Analysis',
    organization: 'Ministry of Ayush',
    category: 'Software',
    theme: 'Healthcare & Biomedical Devices',
    complexity: 'Easy',
    description: 'Build a smartphone app that uses standardized sub-lingual and facial colorimetric computer vision to assist Ayurvedic practitioners in assessing Vata, Pitta, and Kapha constitution parameters alongside patient questionnaire answers.',
    expectedOutcome: 'An intuitive clinician portal with color-calibrated image normalizer, privacy-preserving client storage, and dietary guideline generation.',
    datasetOrHardware: 'Calibrated tongue image dataset with clinician annotations, React Native, TensorFlow.js.',
    submissionCount: 295,
    tags: ['Computer Vision', 'Ayush', 'Digital Health', 'Mobile App', 'Diagnostics']
  },

  // ==========================================
  // THEME 4: Agriculture, FoodTech & Rural
  // ==========================================
  {
    id: 'ps-10',
    code: 'SIH2026-PS110',
    title: 'Autonomous Multi-Spectral Drone Payload for Pre-Harvest Sugarcane Borer Infestation',
    organization: 'Ministry of Agriculture & Farmers Welfare / ICAR',
    category: 'Both',
    theme: 'Agriculture, FoodTech & Rural',
    complexity: 'Medium',
    description: 'Design a lightweight multi-spectral optical camera payload and edge inference pipeline for UAVs to detect early internode borer pest infestation in standing sugarcane crops with >90% precision before visible canopy necrosis occurs.',
    expectedOutcome: 'A calibrated NDVI & thermal drone camera pipeline + web dashboard visualizing micro-infestation heatmaps with automated drone waypoint mission files.',
    datasetOrHardware: 'Multispectral orthomosaics, leaf spectral reflectances, PyTorch/TensorFlow Lite model files.',
    submissionCount: 320,
    tags: ['Computer Vision', 'Drones', 'Precision Farming', 'NDVI', 'GIS']
  },
  {
    id: 'ps-11',
    code: 'SIH2026-PS111',
    title: 'Smart Decentralized Solar-Powered Cold Storage with Ripening Gas Analytics',
    organization: 'National Agricultural Cooperative Marketing Federation of India (NAFED)',
    category: 'Hardware',
    theme: 'Agriculture, FoodTech & Rural',
    complexity: 'Medium',
    description: 'Create an off-grid 2-metric-ton micro cold room powered by phase change materials (PCM) and solar PV, equipped with NDIR ethylene and carbon dioxide gas monitors to forecast shelf-life and suggest dynamic market liquidation windows for perishable fruits.',
    expectedOutcome: 'Thermal holding time of 36 hours during zero sunlight without lead-acid batteries, with SMS advisories sent to local Farmer Producer Organizations (FPOs).',
    datasetOrHardware: 'PCM thermal conductivity tables, MQ/NDIR gas sensors, GSM/LTE-M telemetry node.',
    submissionCount: 270,
    tags: ['Cold Chain', 'Solar Thermal', 'Post Harvest', 'Food Preservation', 'IoT']
  },
  {
    id: 'ps-12',
    code: 'SIH2026-PS112',
    title: 'AI Crop Damage & Yield Loss Estimation Engine for Pradhan Mantri Fasal Bima Yojana',
    organization: 'Department of Agriculture and Cooperation',
    category: 'Software',
    theme: 'Agriculture, FoodTech & Rural',
    complexity: 'Medium',
    description: 'Implement a satellite remote sensing model fusing Sentinel-2 optical imagery and Sentinel-1 SAR backscatter to compute field-level crop cutting experiment (CCE) proxy indices and automate claim settlements for unseasonal flood and hail disasters.',
    expectedOutcome: 'Automated parcel-level boundary segmentation, drought anomaly vegetation condition index (VCI), and web GIS dashboard for district collectors.',
    datasetOrHardware: 'Google Earth Engine scripts, PMFBY ground truth crop survey records, Copernicus SAR data.',
    submissionCount: 310,
    tags: ['Remote Sensing', 'SAR', 'Crop Insurance', 'GIS', 'Earth Engine']
  },

  // ==========================================
  // THEME 5: Smart Vehicles & EV Ecosystem
  // ==========================================
  {
    id: 'ps-13',
    code: 'SIH2026-PS113',
    title: 'AI-Powered Broken Rail Detection & Track Geometry Diagnostics via Axle Sensors',
    organization: 'Ministry of Railways (RDSO)',
    category: 'Hardware',
    theme: 'Smart Vehicles & EV Ecosystem',
    complexity: 'Hard',
    description: 'Develop an on-board real-time sensor node mounted on locomotive bogies combining high-frequency accelerometers, acoustic emission transducers, and edge AI to detect sub-surface rail fractures, rail weld defects, and ballast settlement at speeds up to 160 km/h.',
    expectedOutcome: 'A ruggedized IoT edge device tested against vibration specs (IEC 61373) transmitting geolocated defect alerts within 2.5 seconds to track maintenance teams.',
    datasetOrHardware: 'Sensor vibration CSV logs, rail acoustic samples, Arduino/STM32/ESP32 or Jetson Orin edge boards.',
    submissionCount: 450,
    tags: ['Edge AI', 'IoT', 'Rail Safety', 'Acoustic Sensors', 'Geofencing']
  },
  {
    id: 'ps-14',
    code: 'SIH2026-PS114',
    title: 'Predictive Thermal Runaway & Cell Degradation BMS for Two-Wheeler EV Batteries',
    organization: 'Ministry of Heavy Industries / ARAI',
    category: 'Both',
    theme: 'Smart Vehicles & EV Ecosystem',
    complexity: 'Hard',
    description: 'Design a battery management system (BMS) controller with real-time electrochemical impedance spectroscopy (EIS) estimation and thermal runaway early warning capable of isolating failing lithium-ion cylindrical cells 120 seconds before fire ignition.',
    expectedOutcome: 'A hardware prototype PCB with CAN bus telemetry, automotive grade micro-controller, and companion smartphone dashboard notifying the rider of anomalous cell impedance.',
    datasetOrHardware: 'Li-ion thermal runaway calorimeter data, ISO 26262 safety guidelines, TI BQ76952 / NXP BMS ICs.',
    submissionCount: 388,
    tags: ['EV', 'Battery Management', 'Thermal Safety', 'CAN Bus', 'Embedded']
  },
  {
    id: 'ps-15',
    code: 'SIH2026-PS115',
    title: 'Vehicle-to-Everything (V2X) Emergency Corridor Preemption for Urban Ambulances',
    organization: 'Ministry of Road Transport and Highways (MoRTH)',
    category: 'Software',
    theme: 'Smart Vehicles & EV Ecosystem',
    complexity: 'Easy',
    description: 'Build a low-latency smart traffic signal preemption platform utilizing DSRC / C-V2X protocols and GPS tracking to create dynamic green wave corridors for emergency service ambulances while minimizing peripheral intersection gridlock.',
    expectedOutcome: 'A simulation testbed in SUMO / CARLA coupled with real-time MQTT message broker clearing emergency transit delays by >40% in dense metropolitan routes.',
    datasetOrHardware: 'SUMO traffic simulation files, OpenStreetMap network graphs, WebSocket MQTT brokers.',
    submissionCount: 312,
    tags: ['V2X', 'Smart Cities', 'Traffic Simulation', 'MQTT', 'Urban Mobility']
  },

  // ==========================================
  // THEME 6: Space Tech & Avionics
  // ==========================================
  {
    id: 'ps-16',
    code: 'SIH2026-PS116',
    title: 'SAR Satellite Target De-speckling & Landslide Creep Forewarning for Himalayan Highways',
    organization: 'ISRO (National Remote Sensing Centre)',
    category: 'Software',
    theme: 'Space Tech & Avionics',
    complexity: 'Hard',
    description: 'Process multi-temporal NISAR and Sentinel-1 Interferometric Synthetic Aperture Radar (InSAR) phase displacement data over the Char Dham Highway to detect sub-millimeter slope creep velocity and trigger automated landslide evacuation advisories.',
    expectedOutcome: 'A high-throughput cloud processing pipeline utilizing deep learning phase unwrapping, delivering 24-hour advance slope failure probability metrics to Border Roads Organisation (BRO).',
    datasetOrHardware: 'ISRO InSAR interferogram SLC pairs, digital elevation models (CartoDEM), AWS/Bhuban GIS layers.',
    submissionCount: 340,
    tags: ['InSAR', 'Deep Learning', 'Disaster Resilience', 'Remote Sensing', 'Geology']
  },
  {
    id: 'ps-17',
    code: 'SIH2026-PS117',
    title: 'Autonomous Optical Star Tracker & Attitude Determination for CubeSat Swarms',
    organization: 'IN-SPACe / NewSpace India Limited',
    category: 'Hardware',
    theme: 'Space Tech & Avionics',
    complexity: 'Hard',
    description: 'Engineer a low-cost, radiation-tolerant CubeSat star tracker payload utilizing an optical camera sensor and Lost-in-Space lost-star identification algorithms to compute satellite celestial attitude with < 5 arcseconds pointing accuracy.',
    expectedOutcome: 'A 0.5U form-factor flight unit with onboard RISC-V or ARM Cortex-M7 microcontroller providing 10 Hz attitude quaternion updates.',
    datasetOrHardware: 'Hipparcos star catalog database, CMOS sensor development board, dark room optical star simulator.',
    submissionCount: 195,
    tags: ['CubeSat', 'Avionics', 'Attitude Control', 'Astrodynamics', 'Embedded']
  },
  {
    id: 'ps-18',
    code: 'SIH2026-PS118',
    title: 'NavIC (IRNSS) Geofenced Maritime Distress Alert Receiver for Deep-Sea Fishermen',
    organization: 'Indian Space Research Organisation (ISRO) Space Applications Centre',
    category: 'Both',
    theme: 'Space Tech & Avionics',
    complexity: 'Medium',
    description: 'Create a rugged, waterproof coastal boat receiver unit capturing NavIC S-band and L5 broadcast messages for potential tsunami alerts, cyclone warnings, and International Maritime Boundary Line (IMBL) geofencing alerts with two-way satellite distress beaconing.',
    expectedOutcome: 'Solar-trickle charged transceiver box with vernacular voice/LED alarms and BLE link to smartphone navigation charts.',
    datasetOrHardware: 'NavIC receiver development modules, NavIC broadcast message formats, IP67 marine enclosure.',
    submissionCount: 260,
    tags: ['NavIC', 'Satellite Communication', 'Maritime Safety', 'Geofencing']
  },

  // ==========================================
  // THEME 7: Cybersecurity, Defense & Quantum
  // ==========================================
  {
    id: 'ps-19',
    code: 'SIH2026-PS119',
    title: 'Decentralized Zero-Trust Verification for Ayurvedic Herb Supply Chain Provenance',
    organization: 'Ministry of Ayush / CDAC',
    category: 'Software',
    theme: 'Cybersecurity, Defense & Quantum',
    complexity: 'Medium',
    description: 'Create an immutable provenance tracking framework using lightweight cryptographic zero-knowledge proofs and decentralized identifiers (DID) to trace endangered medicinal wild herbs from tribal harvesters in Western Ghats to certified GMP manufacturing facilities.',
    expectedOutcome: 'A verifiable credential wallet app for tribal forest societies and public API for consumers to scan bottle QR codes and view lab chemical assay certificates.',
    datasetOrHardware: 'Herbal chemical chromatographic profiles, Geo-tagging logs, Hyperledger/Ethereum testnet.',
    submissionCount: 265,
    tags: ['Blockchain', 'Web3', 'Zero-Knowledge', 'Medicinal Plants', 'Supply Chain']
  },
  {
    id: 'ps-20',
    code: 'SIH2026-PS120',
    title: 'Real-Time Audio-Visual Deepfake & Voice Clone Disinformation Detection Pipeline',
    organization: 'Ministry of Home Affairs / Indian Cyber Crime Coordination Centre (I4C)',
    category: 'Software',
    theme: 'Cybersecurity, Defense & Quantum',
    complexity: 'Hard',
    description: 'Build a high-performance deepfake detection system capable of identifying synthesized facial warping, synthetic eye blinking anomalies, and voice cloning in uploaded social media videos within 15 seconds of ingestion.',
    expectedOutcome: 'A scalable REST API and browser extension with explainability heatmaps pinpointing artifact timestamps and confidence probability score.',
    datasetOrHardware: 'FaceForensics++, Deepfake Detection Challenge (DFDC) dataset, Whisper / WavLM embeddings.',
    submissionCount: 512,
    tags: ['Deepfake Detection', 'Cyber Crime', 'Computer Vision', 'Audio Forensics', 'AI Safety']
  },
  {
    id: 'ps-21',
    code: 'SIH2026-PS121',
    title: 'Post-Quantum Lattice-Based Cryptographic Middleware for SCADA Power Grids',
    organization: 'Defence Research and Development Organisation (DRDO / SAG)',
    category: 'Software',
    theme: 'Cybersecurity, Defense & Quantum',
    complexity: 'Hard',
    description: 'Implement NIST post-quantum cryptographic primitives (ML-KEM / Kyber and ML-DSA / Dilithium) on low-power RTUs and substation controllers to protect national grid telemetry from "harvest now, decrypt later" quantum adversaries.',
    expectedOutcome: 'Sub-50ms key encapsulation and verification runtime on 32-bit ARM microcontrollers with side-channel attack countermeasures.',
    datasetOrHardware: 'NIST PQC reference implementations, IEC 60870-5-104 power telemetry capture files.',
    submissionCount: 168,
    tags: ['Quantum Cryptography', 'SCADA', 'Grid Security', 'PQC', 'Embedded Security']
  },

  // ==========================================
  // THEME 8: Disaster Management & Climate
  // ==========================================
  {
    id: 'ps-22',
    code: 'SIH2026-PS122',
    title: 'Acoustic-Seismic Sensor Array for Glacial Lake Outburst Flood (GLOF) Flash Alert',
    organization: 'National Disaster Management Authority (NDMA)',
    category: 'Hardware',
    theme: 'Disaster Management & Climate',
    complexity: 'Hard',
    description: 'Construct a self-sustaining autonomous sensor station for moraine-dammed Himalayan glacial lakes combining geophones, ultrasonic water level transducers, and solar-supercapacitor power to broadcast flash flood sirens 45 minutes ahead of downstream inundation.',
    expectedOutcome: 'LoRaWAN and satellite burst transmitters surviving sub-zero (-30°C) winter temperatures, triggering automated cellular SMS cell-broadcasts to valley settlements.',
    datasetOrHardware: 'Glacial lake bathymetry records, geophone vibration samples, satellite LoRa modules.',
    submissionCount: 228,
    tags: ['GLOF', 'Early Warning', 'Himalayas', 'Seismic Sensors', 'Resilience']
  },
  {
    id: 'ps-23',
    code: 'SIH2026-PS123',
    title: 'Multi-Agent Disaster Evacuation Simulator with Dynamic Road Inundation Modeling',
    organization: 'State Disaster Management Authorities (SDMA)',
    category: 'Software',
    theme: 'Disaster Management & Climate',
    complexity: 'Medium',
    description: 'Build a high-fidelity geospatial evacuation planning engine simulating human agent movement, bridge washouts, and shelter capacity during urban cloudburst floods like Mumbai or Chennai, dynamically computing the safest citizen routing paths.',
    expectedOutcome: 'An interactive web GIS simulator supporting 500,000 parallel evacuation agents with live road water depth hydrodynamic coupling.',
    datasetOrHardware: 'OpenStreetMap road networks, digital elevation models, census ward population densities.',
    submissionCount: 290,
    tags: ['Disaster Management', 'Agent-Based Simulation', 'Flood Hydrology', 'GIS']
  },
  {
    id: 'ps-24',
    code: 'SIH2026-PS124',
    title: 'Autonomous Life-Detection Drone with UWB Radar for Earthquake Rubble Search',
    organization: 'National Disaster Response Force (NDRF)',
    category: 'Both',
    theme: 'Disaster Management & Climate',
    complexity: 'Hard',
    description: 'Design a tethered or micro quadcopter equipped with an ultra-wideband (UWB) through-wall radar and thermal camera to pinpoint micro-chest respiration movements of trapped human survivors under collapsed concrete slabs.',
    expectedOutcome: 'Detection of breathing through up to 2 meters of concrete and rubble with 3D coordinate localization transmitted to NDRF rescue tablets.',
    datasetOrHardware: 'UWB radar transceiver modules, FLIR Lepton thermal cameras, ROS2 telemetry.',
    submissionCount: 275,
    tags: ['NDRF', 'Search & Rescue', 'UWB Radar', 'Drones', 'Thermal Imaging']
  },

  // ==========================================
  // THEME 9: Smart Education & Skilling
  // ==========================================
  {
    id: 'ps-25',
    code: 'SIH2026-PS125',
    title: 'Multimodal Indic Language Synthetic Voice & Braille Bridge for Blind Students',
    organization: 'Ministry of Social Justice & Empowerment',
    category: 'Software',
    theme: 'Smart Education & Skilling',
    complexity: 'Medium',
    description: 'Engineered speech-to-tactile and OCR-to-voice transformer model converting complex mathematical formulas, STEM textbooks, and geometric diagrams in 12 regional Indian languages into Grade-2 Refreshable Braille ASCII and natural spoken audio.',
    expectedOutcome: 'High-speed browser extension and mobile Progressive Web App with sub-100ms latency on low-end smartphones, offline ONNX runtime support.',
    datasetOrHardware: 'Bhashini language corpus, Braille unicode tables, NCERT STEM diagram datasets.',
    submissionCount: 382,
    tags: ['NLP', 'Bhashini', 'Accessibility', 'Braille', 'Transformer Models']
  },
  {
    id: 'ps-26',
    code: 'SIH2026-PS126',
    title: 'Interactive Augmented Reality (AR) Vernacular Virtual Physics & Chemistry Labs',
    organization: 'Ministry of Education / AICTE',
    category: 'Software',
    theme: 'Smart Education & Skilling',
    complexity: 'Easy',
    description: 'Develop a lightweight WebXR and mobile AR platform that allows rural high school students without access to physical science laboratories to conduct dangerous or expensive physics and chemistry experiments using their standard smartphones.',
    expectedOutcome: 'Accurate real-time fluid dynamics and particle physics engine, voice-guided in Hindi, Tamil, Telugu, Marathi, and Bengali.',
    datasetOrHardware: 'Three.js / WebXR, Cannon.js physics, Bhashini text-to-speech API.',
    submissionCount: 360,
    tags: ['WebXR', 'EdTech', 'Augmented Reality', 'Gamified Learning', 'NEP 2020']
  },
  {
    id: 'ps-27',
    code: 'SIH2026-PS127',
    title: 'AI Proctoring & Continuous Biometric Integrity Verification for Remote ITI Exams',
    organization: 'Directorate General of Training (DGT) / Skill India',
    category: 'Software',
    theme: 'Smart Education & Skilling',
    complexity: 'Medium',
    description: 'Create an ultra-low-bandwidth proctoring engine that performs continuous gaze estimation, secondary person detection, and audio acoustic anomaly detection on 2G/3G network connections without streaming full video feeds to the cloud.',
    expectedOutcome: 'Client-side WebAssembly inference delivering cryptographic event hash logs with < 50 KB/min data consumption.',
    datasetOrHardware: 'MediaPipe face mesh, WebAssembly ONNX runtime, candidate webcam video dataset.',
    submissionCount: 280,
    tags: ['AI Proctoring', 'WebAssembly', 'Low Bandwidth', 'Computer Vision']
  },

  // ==========================================
  // THEME 10: Renewable & Sustainable Energy
  // ==========================================
  {
    id: 'ps-28',
    code: 'SIH2026-PS128',
    title: 'AI Autonomous Soiling Detection & Waterless Robotic Wiper for Solar PV Parks',
    organization: 'Ministry of New and Renewable Energy (MNRE) / SECI',
    category: 'Hardware',
    theme: 'Renewable & Sustainable Energy',
    complexity: 'Hard',
    description: 'Develop a lightweight, track-climbing waterless cleaning robot for utility-scale solar farms in arid regions (Rajasthan/Gujarat) that uses electrostatic dust repulsion and microfiber rollers to restore 98% generation efficiency without consuming groundwater.',
    expectedOutcome: 'A weather-proof autonomous robot capable of cleaning 1,200 panels per battery charge with edge camera identifying hot spots and PID steering across panel gaps.',
    datasetOrHardware: 'Solar panel IV curve datasets, dust optical transmission logs, BLDC motors, ESP32.',
    submissionCount: 310,
    tags: ['Solar Energy', 'Clean Tech', 'Robotics', 'Water Conservation', 'IoT']
  },
  {
    id: 'ps-29',
    code: 'SIH2026-PS129',
    title: 'Peer-to-Peer Rooftop Solar Energy Trading Platform with Smart Microgrid Balancing',
    organization: 'Ministry of Power / Bureau of Energy Efficiency (BEE)',
    category: 'Software',
    theme: 'Renewable & Sustainable Energy',
    complexity: 'Medium',
    description: 'Build a transactive energy marketplace enabling prosumers with rooftop solar and battery storage to trade surplus kilowatt-hours with neighboring consumers in real-time while maintaining local transformer voltage stability.',
    expectedOutcome: 'A high-throughput local blockchain or distributed ledger with automated price discovery auctions, smart meter telemetry integration, and DISCOM wheeling charge accounting.',
    datasetOrHardware: 'Smart meter 15-minute interval load profiles, IEEE 33-bus distribution system model, Ethereum / Polygon testnet.',
    submissionCount: 240,
    tags: ['Smart Grid', 'P2P Energy', 'Blockchain', 'Solar Prosumers', 'Electricity Market']
  },
  {
    id: 'ps-30',
    code: 'SIH2026-PS130',
    title: 'Smart Biomass Pelleting & Gasification Efficiency Optimizer for Rural Mini-Grids',
    organization: 'Renewable Energy Development Agencies (IREDA)',
    category: 'Hardware',
    theme: 'Renewable & Sustainable Energy',
    complexity: 'Medium',
    description: 'Engineer an automated downdraft gasifier controller with lambda sensor feedback and automated grate shaker to convert agricultural crop stubble (parali) into clean syngas for village diesel generator replacement.',
    expectedOutcome: 'Continuous tar-free syngas generation with particulate matter emissions under 30 mg/Nm3 and mobile monitoring of village kilowatt generation.',
    datasetOrHardware: 'Syngas composition chromatography, wideband oxygen sensors, STM32 microcontroller.',
    submissionCount: 175,
    tags: ['Biomass', 'Crop Stubble', 'Clean Air', 'Gasification', 'Rural Electrification']
  },

  // ==========================================
  // THEME 11: Heritage, Culture & Tourism
  // ==========================================
  {
    id: 'ps-31',
    code: 'SIH2026-PS131',
    title: '3D Photogrammetry & LiDAR Digital Twin Platform for Deteriorating Heritage Temples',
    organization: 'Archaeological Survey of India (ASI)',
    category: 'Software',
    theme: 'Heritage, Culture & Tourism',
    complexity: 'Hard',
    description: 'Create an automated cloud pipeline that stitches terrestrial drone photos, laser scans, and smartphone video into millimeter-accurate 3D structural digital twins, automatically detecting structural cracks, water seepage, and stone surface degradation.',
    expectedOutcome: 'A browser-based WebGL 3D viewer rendering gigabyte point clouds with time-series structural displacement comparison and automated heritage restoration reports.',
    datasetOrHardware: 'ASI monument LiDAR point clouds, drone photogrammetry TIFFs, Potree / Three.js.',
    submissionCount: 210,
    tags: ['Digital Heritage', 'Photogrammetry', 'LiDAR', 'WebGL', 'Conservation']
  },
  {
    id: 'ps-32',
    code: 'SIH2026-PS132',
    title: 'AI Epigraphical OCR & Decipherment Tool for Archaic Indic Scripts (Brahmi & Grantha)',
    organization: 'Ministry of Culture / Indira Gandhi National Centre for the Arts',
    category: 'Software',
    theme: 'Heritage, Culture & Tourism',
    complexity: 'Medium',
    description: 'Train a deep learning model to transcribe weathered stone and copper-plate inscriptions in Ashokan Brahmi, Grantha, and early Sharada scripts into modern Devanagari and English with historical semantic search.',
    expectedOutcome: 'High-accuracy character bounding-box segmentation robust to stone surface erosion and lichen growth, with transliteration confidence scores.',
    datasetOrHardware: 'Epigraphia Indica digitized plates, ASI stamped estampages corpus, PyTorch segmentation.',
    submissionCount: 198,
    tags: ['Epigraphy', 'Indic Scripts', 'OCR', 'Cultural Preservation', 'AI']
  },
  {
    id: 'ps-33',
    code: 'SIH2026-PS133',
    title: 'NFC-Cryptographic Provenance & GI Tag Authenticator for Handloom Artisans',
    organization: 'Ministry of Textiles / Development Commissioner (Handlooms)',
    category: 'Both',
    theme: 'Heritage, Culture & Tourism',
    complexity: 'Easy',
    description: 'Design a tamper-proof woven RFID/NFC micro-thread and mobile verification application ensuring the geographical indication (GI) authenticity of Banarasi silk, Pashmina, and Pochampally handlooms, combating power-loom counterfeiting.',
    expectedOutcome: 'Washable RFID thread withstands 50 washing cycles, linking buyer smartphones directly to weaver cooperative geo-profiles and weaving timelapse videos.',
    datasetOrHardware: 'Flexible NFC tags (NTAG213), smartphone NFC SDK, weaver database.',
    submissionCount: 220,
    tags: ['Handlooms', 'NFC', 'Artisans', 'GI Tag', 'Supply Chain']
  },

  // ==========================================
  // THEME 12: Robotics & Drones
  // ==========================================
  {
    id: 'ps-34',
    code: 'SIH2026-PS134',
    title: 'Autonomous Swarm Robotics for Underground Coal Mine Gas Leak & Void Mapping',
    organization: 'Ministry of Coal / Coal India Limited',
    category: 'Hardware',
    theme: 'Robotics & Drones',
    complexity: 'Hard',
    description: 'Develop a team of 3 synchronized amphibious mini-crawlers with SLAM LiDAR and methane/CO sensors that can autonomously navigate unventilated, collapsed mine galleries without GPS or cellular connection and map hazard corridors.',
    expectedOutcome: 'Mesh-radio linked rovers generating 3D point-cloud topological maps of subterranean shafts and pinpointing methane concentration hotspots for rescue planning.',
    datasetOrHardware: 'ROS2 Gazebo simulation environment, 2D/3D LiDAR sensor logs, Sub-GHz mesh transceivers.',
    submissionCount: 198,
    tags: ['ROS2', 'SLAM', 'Mine Safety', 'Autonomous Swarms', 'LiDAR']
  },
  {
    id: 'ps-35',
    code: 'SIH2026-PS135',
    title: 'Robotic Manhole Scavenging Elimination & Sewer Line Desilting Crawler',
    organization: 'Ministry of Social Justice & Empowerment / NAMASTE Scheme',
    category: 'Hardware',
    theme: 'Robotics & Drones',
    complexity: 'Hard',
    description: 'Engineer an IP68 waterproof robotic crawler with expandable multi-axis cutters, slurry pump, and gas detection sensors to eliminate human entry into hazardous municipal sewer manholes and clear concrete-hard fatbergs.',
    expectedOutcome: 'A rugged tethered crawler capable of penetrating 100 meters inside 300mm–900mm diameter municipal sewer conduits, operated safely from an above-ground control console.',
    datasetOrHardware: 'High-torque brushless DC motors, hydraulic actuators, methane/H2S sensors, IP68 cameras.',
    submissionCount: 345,
    tags: ['Swachh Bharat', 'Sewer Robotics', 'Sanitation Safety', 'IP68', 'Mechatronics']
  },
  {
    id: 'ps-36',
    code: 'SIH2026-PS136',
    title: 'Autonomous Drone Swarm for Precision Aerial Seed-Bombing in Deforested Ghats',
    organization: 'Ministry of Environment, Forest and Climate Change',
    category: 'Both',
    theme: 'Robotics & Drones',
    complexity: 'Medium',
    description: 'Design a cooperative swarm of 3 heavy-payload agricultural drones capable of surveying terrain contours, identifying optimal moisture micro-depressions, and pneumatically implanting native seed-balls with GPS precision.',
    expectedOutcome: 'Swarm coordination protocol covering 10 hectares per hour with telemetry tracking seed dispersal coordinates for subsequent drone survival monitoring.',
    datasetOrHardware: 'PX4 autopilot firmware, companion computer (Raspberry Pi 5), seed pneumatic dispenser.',
    submissionCount: 260,
    tags: ['Drone Swarm', 'Reforestation', 'PX4', 'Autonomous Flight', 'Environmental Tech']
  }
];
