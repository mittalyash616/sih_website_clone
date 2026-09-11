export type TrackType = 'Software' | 'Hardware' | 'Both';

export type ComplexityLevel = 'Easy' | 'Medium' | 'Hard';

export interface ProblemStatement {
  id: string;
  code: string;
  title: string;
  organization: string;
  category: TrackType;
  theme: string;
  complexity: ComplexityLevel;
  description: string;
  expectedOutcome: string;
  datasetOrHardware: string;
  submissionCount: number;
  tags: string[];
}

export interface ThemeItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  problemCount: number;
  accentColor: string;
  badge: string;
}

export interface TimelineMilestone {
  step: string;
  title: string;
  dateRange: string;
  status: 'completed' | 'active' | 'upcoming';
  description: string;
  actionItem: string;
  details: string[];
}

export interface PastWinnerStory {
  edition: string;
  title: string;
  team: string;
  college: string;
  ministry: string;
  impact: string;
  tags: string[];
  patentOrStartup?: string;
}

export interface FAQItem {
  id: string;
  category: 'General' | 'Team Formation' | 'Problem Statements' | 'Grand Finale' | 'Prizes & IPR';
  question: string;
  answer: string;
}
