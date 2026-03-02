import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import { useLang } from './Providers';
import { t } from '../data/translations';
import type { Scenario } from '../data/industries';

interface Props {
    scenario: Scenario | null;
    isOpen: boolean;
    onClose: () => void;
}
export default function ScenarioModal({ scenario, isOpen, onClose }: Props) {
    const { lang } = useLang();
    const txt = t[lang];

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
                    className="relative w-full max-w-4xl max-h-[90vh] flex flex-col glass-card border border-indigo-500/30 rounded-3xl shadow-2xl z-10 overflow-hidden"
                >
                    {/* Fixed Close Button (independent of scroll) */}
                    <div className="absolute top-0 right-0 z-50 p-6 md:p-8 bg-gradient-to-bl from-[#0a0f1c]/80 to-transparent pointer-events-none rounded-tr-3xl">
                        {/* We add a little gradient mask to keep it visible, but pointer events transparent to the container, and re-enable on the button */}
                    </div>

                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 md:top-8 md:right-8 p-2 rounded-full bg-surface/80 hover:bg-indigo-500/20 text-slate-400 hover:text-white transition-colors z-[60] backdrop-blur-md border border-white/5"
                    >
                        <X size={24} />
                    </button>

                    <div className="flex-1 overflow-y-auto w-full h-full p-6 md:p-10">
                        <div className="mb-8 pr-16 md:pr-12">
                            <span className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-4 mt-2">
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
                                        {txt.overviewLabel}
                                    </h3>
                                    <p className="text-slate-300 text-base leading-relaxed p-4 rounded-xl bg-surface/50 border border-white/5">
                                        {scenario.overview}
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                                        <span className="w-8 h-8 rounded bg-accent/20 text-accent flex items-center justify-center mr-3 text-sm">2</span>
                                        {txt.businessImpact}
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
                                        {txt.processFlow}
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
                                        <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-3">{txt.inputs}</h4>
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
                                        <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-3">{txt.outputs}</h4>
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
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}
