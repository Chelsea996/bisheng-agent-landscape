import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Scenario } from '../data/industries';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';

interface Props {
    scenario: Scenario | null;
    isOpen: boolean;
    onClose: () => void;
}

export default function ScenarioModal({ scenario, isOpen, onClose }: Props) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    if (!isOpen || !scenario) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8">
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-[#0a0f1c]/80 backdrop-blur-sm transition-opacity"
                />

                {/* Modal Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                    className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-card border border-indigo-500/30 rounded-3xl shadow-2xl z-10 p-6 md:p-10"
                >
                    {/* Header */}
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                    >
                        <X size={24} />
                    </button>

                    <div className="mb-8">
                        <span className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-4">
                            {scenario.type} Agent
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                            {scenario.name}
                        </h2>
                        <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
                            {scenario.description}
                        </p>
                    </div>

                    <div className="w-full h-px bg-white/10 mb-8" />

                    {/* Body grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        {/* Left Col: Overview & Impact */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                                    <span className="w-8 h-8 rounded bg-indigo-500/20 text-indigo-400 flex items-center justify-center mr-3 text-sm">1</span>
                                    Overview
                                </h3>
                                <p className="text-slate-300 text-base leading-relaxed p-4 rounded-xl bg-surface/50 border border-white/5">
                                    {scenario.overview}
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                                    <span className="w-8 h-8 rounded bg-accent/20 text-accent flex items-center justify-center mr-3 text-sm">2</span>
                                    Business Impact
                                </h3>
                                <div className="p-4 rounded-xl bg-gradient-to-br from-indigo-500/10 to-accent/10 border border-accent/20 flex items-start space-x-3">
                                    <CheckCircle2 size={24} className="text-accent shrink-0 mt-0.5" />
                                    <p className="text-white font-medium text-lg">
                                        {scenario.impact}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Col: Process flow & Data details */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                                    <span className="w-8 h-8 rounded bg-green-500/20 text-green-400 flex items-center justify-center mr-3 text-sm">3</span>
                                    Process Flow
                                </h3>
                                <div className="p-5 flex flex-col space-y-4 rounded-xl relative">
                                    <div className="absolute left-7 top-10 bottom-8 w-px bg-white/10"></div>
                                    {scenario.process.map((step, idx) => (
                                        <div key={idx} className="flex items-center space-x-4 relative z-10 w-full relative">
                                            <div className="w-4 h-4 rounded-full bg-surface border-2 border-green-500 shadow-[0_0_10px_rgba(74,222,128,0.5)] z-10" />
                                            <div className="flex-1 p-3 rounded-lg bg-surface/80 border border-white/5 shadow-md">
                                                <span className="text-white font-medium tracking-wide text-sm">{step}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 rounded-xl bg-surface border border-white/5">
                                    <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-3">Inputs</h4>
                                    <ul className="space-y-2">
                                        {scenario.inputs.map((inp, idx) => (
                                            <li key={idx} className="flex items-start text-sm text-slate-300">
                                                <ArrowRight size={14} className="text-indigo-400 mr-2 mt-1 shrink-0" />
                                                {inp}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="p-4 rounded-xl bg-surface border border-white/5">
                                    <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-3">Outputs</h4>
                                    <ul className="space-y-2">
                                        {scenario.outputs.map((out, idx) => (
                                            <li key={idx} className="flex items-start text-sm text-slate-300">
                                                <ArrowRight size={14} className="text-accent mr-2 mt-1 shrink-0" />
                                                {out}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}
