import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, Filter, ExternalLink, Bookmark, Check, 
  Tag, Building2, Layers, AlertCircle, Copy, 
  ArrowRight, X, Download, FileText, Sparkles,
  LayoutGrid, ListFilter, SlidersHorizontal, ChevronRight,
  Database, Share2, Eye
} from 'lucide-react';
import { PROBLEM_STATEMENTS, SIH_THEMES } from '../data/sihData';
import { ProblemStatement, TrackType, ComplexityLevel } from '../types/sih';
import { sound } from '../utils/audio';

interface ProblemStatementsSectionProps {
  selectedThemeFilter: string | null;
  onClearThemeFilter: () => void;
  onOpenPitchTemplate: () => void;
}

export const ProblemStatementsSection: React.FC<ProblemStatementsSectionProps> = ({
  selectedThemeFilter,
  onClearThemeFilter,
  onOpenPitchTemplate,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<'All' | TrackType>('All');
  const [complexityFilter, setComplexityFilter] = useState<'All' | ComplexityLevel>('All');
  const [inSectionTheme, setInSectionTheme] = useState<string>('All');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  const [onlyBookmarked, setOnlyBookmarked] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<'default' | 'submissions' | 'complexity'>('default');
  const [showAllVisible, setShowAllVisible] = useState<boolean>(true);
  const [activeModalPS, setActiveModalPS] = useState<ProblemStatement | null>(null);
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  // Synchronize with external selectedThemeFilter if provided
  const effectiveThemeFilter = selectedThemeFilter || (inSectionTheme !== 'All' ? inSectionTheme : null);

  // Filter & Sort logic
  const filteredProblems = useMemo(() => {
    let result = PROBLEM_STATEMENTS.filter((ps) => {
      // Search text match
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        ps.title.toLowerCase().includes(query) ||
        ps.code.toLowerCase().includes(query) ||
        ps.organization.toLowerCase().includes(query) ||
        ps.description.toLowerCase().includes(query) ||
        ps.tags.some((t) => t.toLowerCase().includes(query));

      // Category filter
      const matchesCategory =
        categoryFilter === 'All' || ps.category === categoryFilter || ps.category === 'Both';

      // Complexity filter
      const matchesComplexity =
        complexityFilter === 'All' || ps.complexity === complexityFilter;

      // Theme filter
      const matchesTheme =
        !effectiveThemeFilter ||
        ps.theme.toLowerCase().includes(effectiveThemeFilter.toLowerCase());

      // Bookmarked filter
      const matchesBookmark = !onlyBookmarked || bookmarkedIds.includes(ps.id);

      return matchesSearch && matchesCategory && matchesComplexity && matchesTheme && matchesBookmark;
    });

    // Sorting
    if (sortBy === 'submissions') {
      result = [...result].sort((a, b) => b.submissionCount - a.submissionCount);
    } else if (sortBy === 'complexity') {
      const order: Record<ComplexityLevel, number> = { Hard: 3, Medium: 2, Easy: 1 };
      result = [...result].sort((a, b) => order[b.complexity] - order[a.complexity]);
    }

    return result;
  }, [searchQuery, categoryFilter, complexityFilter, effectiveThemeFilter, onlyBookmarked, bookmarkedIds, sortBy]);

  // Counts
  const totalCount = PROBLEM_STATEMENTS.length;
  const softwareCount = PROBLEM_STATEMENTS.filter(p => p.category === 'Software').length;
  const hardwareCount = PROBLEM_STATEMENTS.filter(p => p.category === 'Hardware').length;
  const bothCount = PROBLEM_STATEMENTS.filter(p => p.category === 'Both').length;

  const handleCopyCode = (code: string, e: React.MouseEvent) => {
    e.stopPropagation();
    sound.playClick();
    navigator.clipboard?.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const handleToggleBookmark = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    sound.playClick();
    setBookmarkedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Export all filtered / all problems to CSV
  const handleExportCSV = () => {
    sound.playSuccess();
    const headers = ['Problem Code', 'Title', 'Ministry / Organization', 'Theme', 'Track', 'Complexity', 'Submissions', 'Description', 'Expected Outcome', 'Dataset & Hardware', 'Tags'];
    const rows = filteredProblems.map(ps => [
      `"${ps.code}"`,
      `"${ps.title.replace(/"/g, '""')}"`,
      `"${ps.organization.replace(/"/g, '""')}"`,
      `"${ps.theme}"`,
      `"${ps.category}"`,
      `"${ps.complexity}"`,
      ps.submissionCount,
      `"${ps.description.replace(/"/g, '""')}"`,
      `"${ps.expectedOutcome.replace(/"/g, '""')}"`,
      `"${ps.datasetOrHardware.replace(/"/g, '""')}"`,
      `"${ps.tags.join(', ')}"`
    ]);

    const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `SIH2026_Problem_Statements_${effectiveThemeFilter ? effectiveThemeFilter.replace(/\s+/g, '_') : 'All'}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Export full Compendium text
  const handleExportCompendiumText = () => {
    sound.playSuccess();
    const compendium = `
================================================================================
SMART INDIA HACKATHON 2026 — OFFICIAL PROBLEM STATEMENTS COMPENDIUM
Ministry of Education's Innovation Cell (MIC) & AICTE, Govt. of India
Total Problem Statements Exported: ${filteredProblems.length}
Generated: ${new Date().toLocaleDateString('en-IN', { dateStyle: 'full' })}
================================================================================

${filteredProblems.map((ps, idx) => `
[#${idx + 1}] CODE: ${ps.code}
TITLE: ${ps.title}
ORGANIZATION / MINISTRY: ${ps.organization}
THEME: ${ps.theme} | TRACK: ${ps.category} | COMPLEXITY: ${ps.complexity}
TAGS: ${ps.tags.join(', ')}
SUBMISSIONS REGISTERED: ${ps.submissionCount}

PROBLEM DESCRIPTION:
${ps.description}

EXPECTED OUTCOME & DELIVERABLES:
${ps.expectedOutcome}

RECOMMENDED HARDWARE & DATASETS:
${ps.datasetOrHardware}
--------------------------------------------------------------------------------
`).join('\n')}

================================================================================
Guidelines: Standard 5-slide pitch presentation mandatory for idea submission.
Visit the official portal or submit via your college SPOC before the deadline.
================================================================================
    `.trim();

    const blob = new Blob([compendium], { type: 'text/plain;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `SIH2026_Problem_Statements_Compendium.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleResetFilters = () => {
    sound.playClick();
    setSearchQuery('');
    setCategoryFilter('All');
    setComplexityFilter('All');
    setInSectionTheme('All');
    setOnlyBookmarked(false);
    setSortBy('default');
    onClearThemeFilter();
  };

  return (
    <section id="problem-statements" className="py-24 relative overflow-hidden bg-[#07090e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#FF772A] mb-3">
              <Database className="w-3.5 h-3.5" />
              <span>03 / CENTRAL PROBLEM STATEMENTS REPOSITORY</span>
            </div>
            <h2 className="font-syne text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
              All Problem Statements <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40">
                From 65+ Ministries & PSUs
              </span>
            </h2>
          </div>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            {/* Quick stats pills */}
            <div className="flex items-center gap-2 bg-[#0c101a] border border-white/10 p-1.5 rounded-xl text-xs font-mono text-white/70">
              <span className="px-2 py-1 rounded bg-[#FF772A]/15 text-[#FF9254] font-bold">
                {totalCount} Active PS
              </span>
              <span className="text-white/30">|</span>
              <span className="px-1.5 py-0.5 text-blue-400">Soft: {softwareCount}</span>
              <span className="px-1.5 py-0.5 text-amber-400">Hard: {hardwareCount}</span>
              <span className="px-1.5 py-0.5 text-purple-400">Both: {bothCount}</span>
            </div>

            {/* Export buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleExportCSV}
                title="Export Filtered / All Problem Statements to CSV spreadsheet"
                className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-mono flex items-center gap-1.5 transition-all shadow-sm"
              >
                <Download className="w-3.5 h-3.5 text-[#FF772A]" />
                <span className="hidden sm:inline">Export CSV</span>
                <span className="sm:hidden">CSV</span>
              </button>

              <button
                onClick={handleExportCompendiumText}
                title="Download full text compendium for offline squad reading"
                className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-mono flex items-center gap-1.5 transition-all shadow-sm"
              >
                <FileText className="w-3.5 h-3.5 text-emerald-400" />
                <span className="hidden sm:inline">Dossier (.txt)</span>
                <span className="sm:hidden">TXT</span>
              </button>
            </div>
          </div>
        </div>

        {/* Primary Controls & Filtering Panel */}
        <div className="glass-panel p-4 sm:p-6 rounded-3xl border border-white/10 mb-8 space-y-4 shadow-xl">
          
          {/* Top Search & High-Level Filters Row */}
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search across all problem statements by code (e.g. PS101), keyword, ministry, or tech stack..."
                className="w-full bg-[#0b0f19] border border-white/10 rounded-xl pl-11 pr-10 py-2.5 text-xs sm:text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[#FF772A] transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Quick Track Category Switcher */}
            <div className="flex flex-wrap items-center gap-1.5 bg-[#090d16] p-1 rounded-xl border border-white/10">
              <span className="text-[10px] font-mono text-white/40 px-2">TRACK:</span>
              {(['All', 'Software', 'Hardware', 'Both'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    sound.playClick();
                    setCategoryFilter(cat);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                    categoryFilter === cat
                      ? 'bg-[#FF772A] text-white font-semibold shadow-[0_0_12px_rgba(255,119,42,0.35)]'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* View Mode & Shortlist Toggles */}
            <div className="flex items-center gap-2">
              {/* Shortlist Tab Button */}
              <button
                onClick={() => {
                  sound.playClick();
                  setOnlyBookmarked(!onlyBookmarked);
                }}
                className={`px-3 py-2 rounded-xl text-xs font-mono flex items-center gap-1.5 border transition-all ${
                  onlyBookmarked
                    ? 'bg-[#FF772A]/20 border-[#FF772A] text-[#FF9254]'
                    : 'bg-white/5 hover:bg-white/10 border-white/10 text-white/70'
                }`}
              >
                <Bookmark className="w-3.5 h-3.5" />
                <span>Shortlist ({bookmarkedIds.length})</span>
              </button>

              {/* View Switcher */}
              <div className="flex items-center bg-[#090d16] p-1 rounded-xl border border-white/10">
                <button
                  onClick={() => {
                    sound.playClick();
                    setViewMode('grid');
                  }}
                  title="Detailed Grid Card View"
                  className={`p-1.5 rounded-lg transition-colors ${
                    viewMode === 'grid' ? 'bg-white/20 text-white' : 'text-white/40 hover:text-white'
                  }`}
                >
                  <LayoutGrid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => {
                    sound.playClick();
                    setViewMode('table');
                  }}
                  title="Compact Table / List View"
                  className={`p-1.5 rounded-lg transition-colors ${
                    viewMode === 'table' ? 'bg-white/20 text-white' : 'text-white/40 hover:text-white'
                  }`}
                >
                  <ListFilter className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Theme Pill Filter Bar (All 12 Themes) */}
          <div className="pt-2 border-t border-white/5">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[11px] font-mono text-white/40 uppercase tracking-wider">
                Filter By Theme ({SIH_THEMES.length} Themes):
              </span>
            </div>
            
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
              <button
                onClick={() => {
                  sound.playClick();
                  setInSectionTheme('All');
                  onClearThemeFilter();
                }}
                className={`px-3 py-1 rounded-full text-xs font-mono shrink-0 transition-all ${
                  effectiveThemeFilter === null || effectiveThemeFilter === 'All'
                    ? 'bg-[#FF772A] text-white font-bold shadow-[0_0_12px_rgba(255,119,42,0.3)]'
                    : 'bg-white/5 hover:bg-white/10 text-white/60 border border-white/5'
                }`}
              >
                All Themes ({totalCount})
              </button>

              {SIH_THEMES.map((theme) => {
                const isSelected = effectiveThemeFilter?.toLowerCase() === theme.title.toLowerCase();
                const countForTheme = PROBLEM_STATEMENTS.filter(p => p.theme.toLowerCase().includes(theme.title.toLowerCase())).length;

                return (
                  <button
                    key={theme.id}
                    onClick={() => {
                      sound.playClick();
                      setInSectionTheme(theme.title);
                      onClearThemeFilter();
                    }}
                    className={`px-3 py-1 rounded-full text-xs font-mono shrink-0 transition-all ${
                      isSelected
                        ? 'bg-[#FF772A] text-white font-bold shadow-[0_0_12px_rgba(255,119,42,0.3)]'
                        : 'bg-white/5 hover:bg-white/10 text-white/60 border border-white/5'
                    }`}
                  >
                    {theme.title} ({countForTheme})
                  </button>
                );
              })}
            </div>
          </div>

          {/* Secondary Sorting & Level Filters */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-white/5 text-xs">
            {/* Complexity Filter */}
            <div className="flex items-center gap-2">
              <span className="text-white/40 font-mono">Complexity:</span>
              {(['All', 'Easy', 'Medium', 'Hard'] as const).map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => {
                    sound.playClick();
                    setComplexityFilter(lvl);
                  }}
                  className={`px-2.5 py-1 rounded-md font-mono text-[11px] transition-all ${
                    complexityFilter === lvl
                      ? 'bg-white/20 text-white font-semibold'
                      : 'text-white/50 hover:text-white'
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>

            {/* Sorting */}
            <div className="flex items-center gap-2">
              <span className="text-white/40 font-mono">Sort By:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-[#0b0f19] border border-white/10 rounded-lg px-2.5 py-1 text-white font-mono text-xs focus:outline-none focus:border-[#FF772A]"
              >
                <option value="default">Default (Code)</option>
                <option value="submissions">Submissions (Highest First)</option>
                <option value="complexity">Complexity (Hard → Easy)</option>
              </select>
            </div>

            {/* Active filters & Reset */}
            {(effectiveThemeFilter || searchQuery || categoryFilter !== 'All' || complexityFilter !== 'All' || onlyBookmarked || sortBy !== 'default') && (
              <button
                onClick={handleResetFilters}
                className="text-[11px] font-mono text-[#FF9254] hover:underline"
              >
                Reset All Filters
              </button>
            )}
          </div>
        </div>

        {/* Results Info Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono text-white/50 mb-6 px-1 gap-2">
          <div className="flex items-center gap-2">
            <span className="text-white font-semibold">
              Showing {filteredProblems.length} of {totalCount} Problem Statements
            </span>
            {effectiveThemeFilter && (
              <span className="px-2 py-0.5 rounded bg-[#FF772A]/15 text-[#FF9254] text-[11px]">
                Theme: {effectiveThemeFilter}
              </span>
            )}
            {onlyBookmarked && (
              <span className="px-2 py-0.5 rounded bg-blue-500/15 text-blue-400 text-[11px]">
                Shortlisted Only
              </span>
            )}
          </div>
          
          <div className="text-[11px] text-white/40">
            Click any problem statement to inspect full specifications & dataset links
          </div>
        </div>

        {/* MAIN LISTINGS: Grid View OR Compact Table View */}
        {viewMode === 'grid' ? (
          /* Detailed Grid Cards View */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredProblems.map((ps) => {
              const isBookmarked = bookmarkedIds.includes(ps.id);

              return (
                <motion.div
                  key={ps.id}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  onClick={() => {
                    sound.playClick();
                    setActiveModalPS(ps);
                  }}
                  data-cursor="VIEW PS"
                  className="group glass-panel-interactive p-5 rounded-2xl flex flex-col justify-between cursor-pointer relative overflow-hidden transition-all duration-300 hover:border-white/20"
                >
                  <div>
                    {/* Top Row: Code, Track & Level */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={(e) => handleCopyCode(ps.code, e)}
                          title="Copy PS Code"
                          className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 font-mono text-[11px] text-white/90 transition-colors"
                        >
                          <span className="font-semibold">{ps.code}</span>
                          {copiedCode === ps.code ? (
                            <Check className="w-3 h-3 text-emerald-400" />
                          ) : (
                            <Copy className="w-3 h-3 text-white/40" />
                          )}
                        </button>

                        <span
                          className={`text-[9px] font-mono px-2 py-0.5 rounded border ${
                            ps.category === 'Hardware'
                              ? 'bg-[#FF772A]/10 text-[#FF9254] border-[#FF772A]/30'
                              : ps.category === 'Software'
                              ? 'bg-[#3B82F6]/10 text-[#60A5FA] border-[#3B82F6]/30'
                              : 'bg-purple-500/10 text-purple-400 border-purple-500/30'
                          }`}
                        >
                          {ps.category}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <span
                          className={`text-[9px] font-mono px-2 py-0.5 rounded ${
                            ps.complexity === 'Hard'
                              ? 'bg-rose-500/10 text-rose-400'
                              : ps.complexity === 'Medium'
                              ? 'bg-amber-500/10 text-amber-400'
                              : 'bg-emerald-500/10 text-emerald-400'
                          }`}
                        >
                          {ps.complexity}
                        </span>

                        <button
                          onClick={(e) => handleToggleBookmark(ps.id, e)}
                          className={`p-1 rounded-lg border transition-colors ${
                            isBookmarked
                              ? 'bg-[#FF772A]/20 border-[#FF772A] text-[#FF772A]'
                              : 'bg-white/5 border-white/10 text-white/40 hover:text-white'
                          }`}
                          title={isBookmarked ? 'Bookmarked' : 'Bookmark to Shortlist'}
                        >
                          <Bookmark className="w-3 h-3" />
                        </button>
                      </div>
                    </div>

                    {/* Ministry / Organization Badge */}
                    <div className="flex items-center gap-1.5 text-xs text-[#FF9254] font-medium mb-1.5">
                      <Building2 className="w-3.5 h-3.5 shrink-0" />
                      <span className="line-clamp-1">{ps.organization}</span>
                    </div>

                    {/* Title */}
                    <h3 className="font-syne text-sm sm:text-base font-bold text-white group-hover:text-[#FF772A] transition-colors leading-snug mb-2.5">
                      {ps.title}
                    </h3>

                    {/* Theme tag */}
                    <div className="text-[10px] font-mono text-white/40 mb-3 line-clamp-1">
                      Theme: <span className="text-white/60">{ps.theme}</span>
                    </div>

                    {/* Description preview */}
                    <p className="text-xs text-white/60 line-clamp-3 leading-relaxed mb-4 font-light">
                      {ps.description}
                    </p>
                  </div>

                  {/* Bottom tags & stats */}
                  <div className="pt-3 border-t border-white/5 flex items-center justify-between gap-2">
                    <div className="flex flex-wrap items-center gap-1">
                      {ps.tags.slice(0, 2).map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-white/50 border border-white/5"
                        >
                          #{tag}
                        </span>
                      ))}
                      {ps.tags.length > 2 && (
                        <span className="text-[9px] font-mono text-white/40">
                          +{ps.tags.length - 2}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-1 text-[10px] font-mono text-white/40 group-hover:text-white transition-colors shrink-0">
                      <span>Inspect</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        ) : (
          /* Compact Table / List View (For rapid scanning of all problem statements) */
          <div className="glass-panel rounded-2xl border border-white/10 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-[#0b0f19] text-white/40 uppercase text-[10px] tracking-wider border-b border-white/10">
                  <tr>
                    <th className="py-3.5 px-4">Code</th>
                    <th className="py-3.5 px-4 font-syne text-xs">Problem Statement & Ministry</th>
                    <th className="py-3.5 px-4">Theme</th>
                    <th className="py-3.5 px-4">Track</th>
                    <th className="py-3.5 px-4">Level</th>
                    <th className="py-3.5 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {filteredProblems.map((ps) => {
                    const isBookmarked = bookmarkedIds.includes(ps.id);

                    return (
                      <tr
                        key={ps.id}
                        onClick={() => {
                          sound.playClick();
                          setActiveModalPS(ps);
                        }}
                        className="hover:bg-white/[0.03] transition-colors cursor-pointer group"
                      >
                        <td className="py-3 px-4 font-bold text-white whitespace-nowrap">
                          <button
                            onClick={(e) => handleCopyCode(ps.code, e)}
                            className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-white/5 hover:bg-white/10 border border-white/10 text-white/90 text-xs"
                          >
                            <span>{ps.code}</span>
                            {copiedCode === ps.code ? (
                              <Check className="w-3 h-3 text-emerald-400" />
                            ) : (
                              <Copy className="w-3 h-3 text-white/40" />
                            )}
                          </button>
                        </td>

                        <td className="py-3 px-4 max-w-md">
                          <div className="font-syne font-bold text-white group-hover:text-[#FF772A] transition-colors line-clamp-1 text-sm mb-0.5">
                            {ps.title}
                          </div>
                          <div className="text-[11px] text-[#FF9254] line-clamp-1">
                            {ps.organization}
                          </div>
                        </td>

                        <td className="py-3 px-4 text-white/70 whitespace-nowrap">
                          {ps.theme}
                        </td>

                        <td className="py-3 px-4 whitespace-nowrap">
                          <span
                            className={`text-[10px] px-2 py-0.5 rounded border ${
                              ps.category === 'Hardware'
                                ? 'bg-[#FF772A]/10 text-[#FF9254] border-[#FF772A]/30'
                                : ps.category === 'Software'
                                ? 'bg-[#3B82F6]/10 text-[#60A5FA] border-[#3B82F6]/30'
                                : 'bg-purple-500/10 text-purple-400 border-purple-500/30'
                            }`}
                          >
                            {ps.category}
                          </span>
                        </td>

                        <td className="py-3 px-4 whitespace-nowrap">
                          <span
                            className={`text-[10px] px-2 py-0.5 rounded ${
                              ps.complexity === 'Hard'
                                ? 'bg-rose-500/10 text-rose-400'
                                : ps.complexity === 'Medium'
                                ? 'bg-amber-500/10 text-amber-400'
                                : 'bg-emerald-500/10 text-emerald-400'
                            }`}
                          >
                            {ps.complexity}
                          </span>
                        </td>

                        <td className="py-3 px-4 text-right whitespace-nowrap">
                          <div className="flex items-center justify-end gap-2">
                            <button
                              onClick={(e) => handleToggleBookmark(ps.id, e)}
                              className={`p-1.5 rounded-lg border transition-colors ${
                                isBookmarked
                                  ? 'bg-[#FF772A]/20 border-[#FF772A] text-[#FF772A]'
                                  : 'bg-white/5 border-white/10 text-white/40 hover:text-white'
                              }`}
                              title={isBookmarked ? 'Bookmarked' : 'Bookmark to Shortlist'}
                            >
                              <Bookmark className="w-3.5 h-3.5" />
                            </button>

                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                sound.playClick();
                                setActiveModalPS(ps);
                              }}
                              className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white text-[11px] font-mono flex items-center gap-1"
                            >
                              <Eye className="w-3 h-3" />
                              <span>View</span>
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Empty state if search returned 0 */}
        {filteredProblems.length === 0 && (
          <div className="text-center py-16 glass-panel rounded-3xl border border-white/10">
            <AlertCircle className="w-8 h-8 text-white/30 mx-auto mb-3" />
            <h4 className="font-syne text-lg font-bold text-white mb-1">No matching problem statements found</h4>
            <p className="text-xs text-white/50 max-w-sm mx-auto mb-4">
              Try relaxing your search terms or clearing the theme and category filters.
            </p>
            <button
              onClick={handleResetFilters}
              className="px-5 py-2.5 rounded-full bg-[#FF772A] text-white text-xs font-mono font-medium"
            >
              Reset All Filters & View All
            </button>
          </div>
        )}

        {/* Bottom Banner with Pitch Template Download & Full Compendium */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#101524] via-[#161e31] to-[#101524] border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#FF772A]/10 border border-[#FF772A]/30 flex items-center justify-center text-[#FF772A] shrink-0">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-syne font-bold text-white text-base sm:text-lg">
                Selected Your Problem Statement? Prepare the Official Pitch Deck
              </h4>
              <p className="text-xs sm:text-sm text-white/60 max-w-xl mt-0.5">
                Download the standardized 5-slide PowerPoint & PDF structure required by the Ministry Innovation Cell (MIC) and screening committees.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={handleExportCSV}
              className="flex-1 sm:flex-none px-4 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white text-xs font-mono font-medium flex items-center justify-center gap-2 transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export Full CSV</span>
            </button>

            <button
              onClick={() => {
                sound.playClick();
                onOpenPitchTemplate();
              }}
              className="flex-1 sm:flex-none px-5 py-3 rounded-full bg-gradient-to-r from-[#FF772A] to-[#E65A12] text-white text-xs font-syne font-bold shadow-[0_0_25px_rgba(255,119,42,0.45)] hover:scale-[1.02] flex items-center justify-center gap-2 transition-all"
            >
              <span>Download 5-Slide Template</span>
              <Sparkles className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Comprehensive Detail Modal for Selected Problem Statement */}
      <AnimatePresence>
        {activeModalPS && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-[#0b0e16] border border-white/15 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative"
            >
              {/* Close button */}
              <button
                onClick={() => {
                  sound.playClick();
                  setActiveModalPS(null);
                }}
                className="absolute top-6 right-6 w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-white/60 hover:text-white transition-all"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal Header */}
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-[#FF772A]/15 text-[#FF9254] border border-[#FF772A]/30">
                  {activeModalPS.code}
                </span>
                <span className="font-mono text-xs px-2.5 py-1 rounded bg-white/5 border border-white/10 text-white/70">
                  {activeModalPS.category} Track
                </span>
                <span className="font-mono text-xs px-2.5 py-1 rounded bg-white/5 border border-white/10 text-white/70">
                  {activeModalPS.complexity} Complexity
                </span>
                <span className="font-mono text-xs px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[#FF9254]">
                  {activeModalPS.theme}
                </span>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-[#FF772A] mb-2">
                <Building2 className="w-3.5 h-3.5" />
                <span>{activeModalPS.organization}</span>
              </div>

              <h2 className="font-syne text-xl sm:text-2xl font-bold text-white mb-6 leading-snug">
                {activeModalPS.title}
              </h2>

              {/* Modal Body */}
              <div className="space-y-6 text-xs sm:text-sm">
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-white/40 mb-2 font-semibold">
                    Comprehensive Problem Description
                  </h4>
                  <p className="text-white/80 leading-relaxed bg-white/[0.03] p-4 rounded-xl border border-white/5">
                    {activeModalPS.description}
                  </p>
                </div>

                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-white/40 mb-2 font-semibold">
                    Expected Functional Outcome & Deliverables
                  </h4>
                  <p className="text-white/80 leading-relaxed bg-white/[0.03] p-4 rounded-xl border border-white/5">
                    {activeModalPS.expectedOutcome}
                  </p>
                </div>

                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-white/40 mb-2 font-semibold">
                    Sample Datasets / Recommended Hardware Platforms
                  </h4>
                  <p className="text-white/80 leading-relaxed bg-white/[0.03] p-4 rounded-xl border border-white/5 font-mono text-xs">
                    {activeModalPS.datasetOrHardware}
                  </p>
                </div>

                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-white/40 mb-2 font-semibold">
                    Domain Tags
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeModalPS.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-white/70"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer Actions */}
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      sound.playSuccess();
                      handleToggleBookmark(activeModalPS.id, { stopPropagation: () => {} } as React.MouseEvent);
                    }}
                    className="px-4 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-mono flex items-center gap-2"
                  >
                    <Bookmark className="w-3.5 h-3.5" />
                    <span>
                      {bookmarkedIds.includes(activeModalPS.id) ? 'Saved in My Shortlist' : 'Bookmark to Shortlist'}
                    </span>
                  </button>

                  <button
                    onClick={(e) => handleCopyCode(activeModalPS.code, e)}
                    className="px-3.5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-mono flex items-center gap-1.5"
                  >
                    {copiedCode === activeModalPS.code ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Code Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-white/40" />
                        <span>Copy Code</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => {
                      sound.playClick();
                      onOpenPitchTemplate();
                    }}
                    className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#FF772A] to-[#E65A12] text-white text-xs font-syne font-bold shadow-[0_0_20px_rgba(255,119,42,0.4)] flex items-center gap-2"
                  >
                    <span>Start Proposal Deck</span>
                    <Sparkles className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
