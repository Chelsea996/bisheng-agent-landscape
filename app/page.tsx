"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { industriesData } from '../data/industries';
import ScenarioModal from '../components/ScenarioModal';
import {
    Building, Activity, Cpu, Landmark, ShoppingCart,
    Briefcase, HardHat, Truck, Rocket, Home as HomeIcon,
    GraduationCap, Laptop, Zap, Globe, ArrowUpRight, ArrowRight,
    Search
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
    Finance: <Landmark size={20} />,
    Healthcare: <Activity size={20} />,
    'Automotive and Manufacturing': <Cpu size={20} />,
    Government: <Building size={20} />,
    Retail: <ShoppingCart size={20} />,
    'Trade and Business Services': <Briefcase size={20} />,
    'Engineering and Infrastructure': <HardHat size={20} />,
    Transportation: <Truck size={20} />,
    Aerospace: <Rocket size={20} />,
    'Real Estate and Property': <HomeIcon size={20} />,
    'Education and Research': <GraduationCap size={20} />,
    'IT and Tech': <Laptop size={20} />,
    Energy: <Zap size={20} />,
    'General Enterprise': <Globe size={20} />
};

const scenarioCategories = [
    { id: 'Review', label: 'Content Moderation' },
    { id: 'Q&A', label: 'Q&A' },
    { id: 'Report', label: 'Report Generation' },
    { id: 'Decision', label: 'Business Decision' }
];

export default function Home() {
    const navigate = useRouter();
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    // Filter states
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);
    const [selectedScenario, setSelectedScenario] = useState<any | null>(null);
    const [filterExpanded, setFilterExpanded] = useState<'topic' | 'industry' | null>(null);

    // BISHENG 14 Core Industries - English labels
    const displayIndustries = [
        { id: 'government', industry: 'Government', icon: 'Government', positioning: 'Digital public services.' },
        { id: 'trade', industry: 'Trade & Business Services', icon: 'Trade and Business Services', positioning: 'Automated commerce & trade.' },
        { id: 'infrastructure', industry: 'Engineering & Infrastructure', icon: 'Engineering and Infrastructure', positioning: 'Smart asset management.' },
        { id: 'transportation', industry: 'Transportation', icon: 'Transportation', positioning: 'Intelligent logistics & routing.' },
        { id: 'aerospace', industry: 'Aerospace', icon: 'Aerospace', positioning: 'Advanced simulations & monitoring.' },
        { id: 'realestate', industry: 'Real Estate & Property', icon: 'Real Estate and Property', positioning: 'Smart buildings & facility ops.' },
        { id: 'education', industry: 'Education & Research', icon: 'Education and Research', positioning: 'Personalized learning.' },
        { id: 'healthcare', industry: 'Healthcare', icon: 'Healthcare', positioning: 'AI-assisted diagnosis & care.' },
        { id: 'manufacturing', industry: 'Automotive & Manufacturing', icon: 'Automotive and Manufacturing', positioning: 'Smart production & supply chain.' },
        { id: 'retail', industry: 'Retail', icon: 'Retail', positioning: 'Personalized shopping experiences.' },
        { id: 'it', industry: 'IT & Tech', icon: 'IT and Tech', positioning: 'Automated software & ops.' },
        { id: 'energy', industry: 'Energy', icon: 'Energy', positioning: 'Grid optimization & ops.' },
        { id: 'general', industry: 'General Enterprise', icon: 'General Enterprise', positioning: 'Horizontal workflows & productivity.' },
        { id: 'finance', industry: 'Finance', icon: 'Finance', positioning: 'Intelligent risk management & analytics.' },
    ];

    const total = displayIndustries.length;

    // Derived Scenarios List for the grid
    const allScenarios = industriesData.flatMap(ind =>
        ind.scenarios.map(s => ({ ...s, industryId: ind.id, industryName: ind.industry }))
    );

    const filteredScenarios = allScenarios.filter(s => {
        const matchesCat = selectedCategory ? s.type === selectedCategory : true;
        const matchesInd = selectedIndustry ? s.industryId === selectedIndustry : true;
        return matchesCat && matchesInd;
    });

    return (
        <div className="flex-1 w-full bg-[#0a0f1c]">
            {/* Hero & Map Section */}
            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-80px)]">

                {/* Left Column: Hero Text */}
                <div className="relative z-10 space-y-8 max-w-xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                        </span>
                        <span>BISHENG Agent Landscape</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight"
                    >
                        AI Agents Across <br />
                        <span className="text-gradient">14+ Industries</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-slate-300 leading-relaxed max-w-lg"
                    >
                        BISHENG empowers enterprises with intelligent, scalable AI Agent solutions across all core industries. Transform your workflows with state-of-the-art multi-agent orchestration.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-wrap gap-4 pt-4"
                    >
                        <button
                            onClick={() => {
                                const el = document.getElementById('scenarios-explorer');
                                if (el) {
                                    const y = el.getBoundingClientRect().top + window.scrollY - 100;
                                    window.scrollTo({ top: y, behavior: 'smooth' });
                                }
                            }}
                            className="btn-primary group"
                        >
                            Explore Scenarios
                            <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </button>

                        <button className="btn-secondary" onClick={() => navigate('/landscape')}>
                            View Landscape Map
                        </button>
                    </motion.div>
                </div>

                {/* Right Column: Interactive Map */}
                <div className="relative h-[600px] w-full flex items-center justify-center lg:right-0 z-30">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        className="relative w-[500px] h-[500px] lg:w-[600px] lg:h-[600px] rounded-full border border-indigo-500/10 flex items-center justify-center bg-surface/30 backdrop-blur-sm"
                    >
                        {/* Inner rings */}
                        <div className="absolute w-[70%] h-[70%] rounded-full border border-indigo-500/20" />
                        <div className="absolute w-[40%] h-[40%] rounded-full border border-indigo-400/30 bg-indigo-500/5 shadow-[0_0_40px_rgba(79,70,229,0.2)] flex items-center justify-center flex-col z-0">
                            <span className="text-indigo-200 font-bold text-lg text-center">BISHENG<br />Agent</span>
                            <span className="text-sm text-slate-400">Core Engine</span>
                        </div>

                        {/* Radial Nodes */}
                        {displayIndustries.map((ind, i) => {
                            // Distribute items along a circle or arc. 
                            const angle = (i / total) * 2 * Math.PI - Math.PI / 2; // Start from top
                            const radius = typeof window !== 'undefined' && window.innerWidth < 1024 ? 200 : 250; // Responsive radius

                            const x = Math.cos(angle) * radius;
                            const y = Math.sin(angle) * radius;

                            const isHovered = hoveredIndex === i;
                            // Only navigate if it's a real item from industriesData
                            const isSelectable = industriesData.some(d => d.id === ind.id);

                            return (
                                <motion.div
                                    key={ind.id}
                                    className={`absolute ${isHovered ? 'z-[999]' : 'z-10'}`}
                                    style={{
                                        x, y,
                                    }}
                                    onHoverStart={() => setHoveredIndex(i)}
                                    onHoverEnd={() => setHoveredIndex(null)}
                                    onClick={() => {
                                        if (isSelectable) {
                                            navigate(`/industry/${ind.id}`);
                                        }
                                    }}
                                >
                                    <div
                                        className={`
                                            relative flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14 rounded-full cursor-pointer
                                            transition-all duration-300 transform 
                                            ${isHovered ? 'scale-125 bg-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.6)] border-none' : 'bg-surface border border-indigo-500/30 hover:border-indigo-400 scale-100'}
                                        `}
                                    >
                                        <span className={`transition-colors ${isHovered ? 'text-white' : 'text-indigo-300'}`}>
                                            {iconMap[ind.icon as string] || <Zap size={20} />}
                                        </span>

                                        {/* Tooltip */}
                                        <AnimatePresence>
                                            {isHovered && (
                                                <motion.div
                                                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                                    exit={{ opacity: 0, scale: 0.9, y: 10 }}
                                                    className={`absolute w-72 p-5 rounded-xl bg-[#0a0f1c] border border-[#034FE5]/50 shadow-[0_0_40px_rgba(3,79,229,0.3)] pointer-events-none z-[999] 
                                                      ${x > 0 ? 'left-full ml-4' : 'right-full mr-4'}
                                                      top-1/2 -translate-y-1/2
                                                    `}
                                                    style={{ transformOrigin: 'top center' }}
                                                >
                                                    <h3 className="font-bold text-white text-lg flex items-center justify-between">
                                                        {ind.industry}
                                                        {isSelectable && <ArrowUpRight size={16} className="text-accent" />}
                                                    </h3>
                                                    <p className="text-xs text-slate-300 mt-2 leading-relaxed whitespace-normal break-words">
                                                        {ind.positioning}
                                                    </p>
                                                    {!isSelectable && (
                                                        <div className="text-[10px] text-indigo-400 mt-2 font-medium uppercase tracking-wider">COMING SOON</div>
                                                    )}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </motion.div>
                </div>
            </div>

            {/* Scenarios Explorer Section */}
            <div id="scenarios-explorer" className="w-full max-w-7xl mx-auto px-6 pb-24 mt-10 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-8"
                >
                    <h2 className="text-3xl font-bold text-white mb-2">Explore Scenarios</h2>
                    <div className="w-12 h-1 bg-indigo-500 rounded mb-8"></div>

                    {/* Filter Panel */}
                    <div className="w-full flex flex-col mt-4">
                        <div className="flex w-full border-b border-t border-white/10 text-[15px]">
                            <div
                                className="flex-1 border-r border-white/10 p-5 cursor-pointer hover:bg-white/5 transition-colors flex items-center group"
                                onClick={() => setFilterExpanded(filterExpanded === 'topic' ? null : 'topic')}
                            >
                                <span className="font-semibold text-slate-200 group-hover:text-white flex items-center">
                                    <span className="text-xl mr-4 font-light w-4 text-center">{filterExpanded === 'topic' ? '−' : '+'}</span> Main Scenarios
                                </span>
                            </div>
                            <div
                                className="flex-1 p-5 cursor-pointer hover:bg-white/5 transition-colors flex items-center group"
                                onClick={() => setFilterExpanded(filterExpanded === 'industry' ? null : 'industry')}
                            >
                                <span className="font-semibold text-slate-200 group-hover:text-white flex items-center">
                                    <span className="text-xl mr-4 font-light w-4 text-center">{filterExpanded === 'industry' ? '−' : '+'}</span> Industry
                                </span>
                            </div>
                        </div>

                        <AnimatePresence>
                            {filterExpanded && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    style={{ overflow: 'hidden' }}
                                    className="w-full"
                                >
                                    <div className="pb-8 pt-6">
                                        {filterExpanded === 'topic' && (
                                            <div className="flex flex-wrap gap-3">
                                                {scenarioCategories.map(cat => (
                                                    <button
                                                        key={cat.id}
                                                        onClick={() => setSelectedCategory(cat.id === selectedCategory ? null : cat.id)}
                                                        className={`px-4 py-2 border rounded-sm text-[13px] transition-colors ${selectedCategory === cat.id ? 'bg-[#034FE5] border-[#034FE5] text-white' : 'bg-transparent border-white/20 text-slate-300 hover:border-white/50 hover:text-white'}`}
                                                    >
                                                        {cat.label}
                                                    </button>
                                                ))}
                                            </div>
                                        )}

                                        {filterExpanded === 'industry' && (
                                            <div className="flex flex-wrap gap-2 md:w-5/6">
                                                {[...displayIndustries].sort((a, b) => a.industry.localeCompare(b.industry)).map(ind => (
                                                    <button
                                                        key={ind.id}
                                                        onClick={() => setSelectedIndustry(ind.id === selectedIndustry ? null : ind.id)}
                                                        className={`px-4 py-2 border rounded-sm text-[13px] transition-colors ${selectedIndustry === ind.id ? 'bg-[#034FE5] border-[#034FE5] text-white' : 'bg-transparent border-white/20 text-slate-300 hover:border-white/50 hover:text-white'}`}
                                                    >
                                                        {ind.industry}
                                                    </button>
                                                ))}
                                            </div>
                                        )}

                                        {/* Bottom Action Bar */}
                                        <div className="flex justify-end items-center mt-6 gap-8 pt-6 w-full">
                                            <button
                                                onClick={() => { setSelectedCategory(null); setSelectedIndustry(null); }}
                                                className="text-sm font-semibold hover:text-white text-slate-300 transition-colors"
                                            >
                                                Clear all
                                            </button>
                                            <button
                                                onClick={() => setFilterExpanded(null)}
                                                className="px-8 py-3 bg-[#034FE5] hover:bg-[#023cae] text-white font-semibold transition-colors flex items-center"
                                            >
                                                Show results
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>

                {/* Scenarios Grid */}
                {filteredScenarios.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredScenarios.map((scenario, i) => (
                            <motion.div
                                key={scenario.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                onClick={() => setSelectedScenario(scenario)}
                                className="glass-card p-5 cursor-pointer group flex flex-col items-start relative overflow-hidden hover:bg-surface"
                            >
                                <div className="absolute top-0 right-0 p-3">
                                    <span className="text-[10px] font-bold px-2 py-1 uppercase rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                                        {scenario.type}
                                    </span>
                                </div>
                                <span className="text-[11px] font-medium text-accent mb-2 uppercase tracking-wide">{scenario.industryName}</span>
                                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-200 transition-colors pr-10 line-clamp-2">
                                    {scenario.name}
                                </h3>
                                <p className="text-sm text-slate-400 line-clamp-3 mt-auto pt-2 border-t border-white/5 w-full">
                                    {scenario.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <div className="glass-card p-12 text-center flex flex-col items-center justify-center">
                        <Search size={40} className="text-slate-500 mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">No Scenarios Found</h3>
                        <p className="text-slate-400">Try adjusting your filters to see more results.</p>
                        <button
                            onClick={() => { setSelectedCategory(null); setSelectedIndustry(null); }}
                            className="mt-6 text-sm text-accent hover:text-indigo-300 transition-colors"
                        >
                            Clear all filters
                        </button>
                    </div>
                )}
            </div>

            {/* Scenario Detail Modal */}
            {selectedScenario && (
                <ScenarioModal
                    isOpen={true}
                    scenario={selectedScenario}
                    onClose={() => setSelectedScenario(null)}
                />
            )}
        </div>
    );
}
