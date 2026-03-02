"use client";
import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { industriesEn, industriesZh } from '../../../data/industries';
import type { Scenario } from '../../../data/industries';
import { useLang } from '../../../components/Providers';
import { t } from '../../../data/translations';
import ScenarioModal from '../../../components/ScenarioModal';
import {
    ArrowLeft, ChevronRight, BarChart3,
    Settings, Layers, Zap, Search, FileText, Database, MousePointerClick
} from 'lucide-react';

const capabilityIcons: Record<string, React.ReactNode> = {
    "Intelligent Q&A": <Search size={24} />,
    "Content Review": <FileText size={24} />,
    "Report Generation": <FileText size={24} />,
    "Data Analysis": <BarChart3 size={24} />,
    "Workflow Automation": <Settings size={24} />,
    "Multi-Agent Orchestration": <Layers size={24} />,
    "RAG Knowledge System": <Database size={24} />,
    "API Integration": <Zap size={24} />,
    "Decision": <MousePointerClick size={24} />
};

export default function IndustryDetail() {
    const params = useParams();
    const id = params?.id as string;
    const router = useRouter();
    const { lang } = useLang();
    const [selectedScenario, setSelectedScenario] = useState<Scenario | null>(null);
    const txt = t[lang];

    const currentIndustriesData = lang === 'en' ? industriesEn : industriesZh;
    const industry = currentIndustriesData.find(ind => ind.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!industry) {
        return (
            <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
                <h2 className="text-3xl font-bold mb-4">{txt.notFound}</h2>
                <button onClick={() => router.push('/')} className="btn-primary">
                    {txt.back}
                </button>
            </div>
        );
    }

    return (
        <div className="flex-1 w-full pb-24">

            {/* Top Section - Hero */}
            <section className="relative px-6 py-16 md:py-24 max-w-7xl mx-auto z-10">
                <button
                    onClick={() => router.push('/')}
                    className="inline-flex items-center text-sm font-medium text-indigo-300 hover:text-white transition-colors mb-12 group"
                >
                    <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                    {txt.back}
                </button>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl"
                >
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
                        {industry.industry} <span className="text-gradient">Industry</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed mb-4">
                        {industry.positioning}
                    </p>
                </motion.div>
            </section>

            {/* Main Content Grid */}
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 z-10 relative">

                {/* Left Column: Flow of narrative */}
                <div className="lg:col-span-8 space-y-20">

                    {/* Section 1: Overview */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <h2 className="text-sm font-bold text-indigo-400 uppercase tracking-widest mb-4 flex items-center">
                            <span className="w-8 h-px bg-indigo-500 mr-4"></span> {txt.overview}
                        </h2>
                        <p className="text-lg leading-relaxed text-slate-300 mb-8">
                            {industry.overview}
                        </p>
                    </motion.section>

                    {/* Section 2: Demand Analysis */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h2 className="text-sm font-bold text-indigo-400 uppercase tracking-widest mb-6 flex items-center">
                            <span className="w-8 h-px bg-indigo-500 mr-4"></span> {txt.demand}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {industry.demands.map((demand, idx) => (
                                <div key={idx} className="flex items-start p-4 rounded-xl bg-surface/40 border border-white/5 hover:bg-surface/60 transition-colors">
                                    <div className="mt-1 mr-4 shrink-0 text-accent bg-accent/10 p-1.5 rounded-lg">
                                        <Zap size={16} />
                                    </div>
                                    <p className="text-slate-300 text-sm leading-relaxed">{demand}</p>
                                </div>
                            ))}
                        </div>
                    </motion.section>

                    {/* Section 5: Scenario Breakdown */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <h2 className="text-sm font-bold text-indigo-400 uppercase tracking-widest mb-6 flex items-center">
                            <span className="w-8 h-px bg-indigo-500 mr-4"></span> {txt.scenarioBreakdown}
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {industry.scenarios.map((scenario, idx) => (
                                <div
                                    key={idx}
                                    className="glass-card flex flex-col h-full bg-surface/50 border border-indigo-500/20 hover:border-indigo-400/50 cursor-pointer overflow-hidden group"
                                    onClick={() => setSelectedScenario(scenario)}
                                >
                                    <div className="p-6 flex-grow">
                                        <div className="flex justify-between items-start mb-4">
                                            <span className="inline-block px-2.5 py-1 rounded text-[10px] font-bold tracking-wider uppercase bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                                                {scenario.type}
                                            </span>
                                            <div className="w-8 h-8 rounded-full bg-surface border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                <ArrowLeft size={14} className="text-white rotate-135" style={{ transform: 'rotate(135deg)' }} />
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-200 transition-colors">
                                            {scenario.name}
                                        </h3>
                                        <p className="text-sm text-slate-400 line-clamp-3">
                                            {scenario.description}
                                        </p>
                                    </div>
                                    <div className="px-6 py-4 border-t border-white/5 flex items-center justify-between mt-auto">
                                        <span className="text-sm font-medium text-accent">{txt.viewDetails}</span>
                                        <ChevronRight size={16} className="text-accent" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.section>

                </div>

                {/* Right Column: Key metrics and capabilities stick to top */}
                <div className="lg:col-span-4 space-y-10">

                    {/* Section 4: Value Delivered */}
                    <div className="sticky top-28 space-y-10">
                        <motion.section
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="p-6 rounded-3xl bg-gradient-to-br from-indigo-900/40 to-surface/80 border border-indigo-500/20 backdrop-blur-md relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 blur-3xl rounded-full" />

                            <h2 className="text-sm font-bold text-indigo-300 uppercase tracking-widest mb-6 relative z-10">
                                {txt.value}
                            </h2>

                            <div className="space-y-6 relative z-10">
                                {industry.value.map((val, idx) => (
                                    <div key={idx} className="flex flex-col border-b border-light-40 border-white/10 pb-4 last:border-0 last:pb-0">
                                        <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-indigo-200 mb-1">
                                            {val.metric}
                                        </span>
                                        <span className="text-sm text-slate-400 font-medium">
                                            {val.label}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.section>

                        {/* Section 3: Core Capabilities */}
                        <motion.section
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="p-6 rounded-3xl bg-surface/40 border border-white/5 backdrop-blur-md"
                        >
                            <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">
                                {txt.capabilities}
                            </h2>

                            <div className="grid grid-cols-2 gap-3">
                                {industry.capabilities.map((cap, idx) => (
                                    <div key={idx} className="flex flex-col items-center justify-center p-4 rounded-xl bg-surface/80 border border-white/5 text-center group hover:bg-surface transition-colors">
                                        <div className="mb-2 text-indigo-400 group-hover:text-accent transition-colors">
                                            {capabilityIcons[cap] || <Layers size={20} />}
                                        </div>
                                        <span className="text-xs font-semibold text-slate-300 leading-tight">
                                            {cap}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.section>
                    </div>
                </div>

            </div>

            <ScenarioModal
                isOpen={!!selectedScenario}
                scenario={selectedScenario}
                onClose={() => setSelectedScenario(null)}
            />
        </div>
    );
}
