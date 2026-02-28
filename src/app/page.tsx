"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    TrendingUp,
    Mail,
    Phone,
    ShieldCheck,
    AlertCircle,
    Clock,
    BarChart3,
    ChevronRight,
    BrainCircuit,
    PieChart,
    ArrowRightLeft,
    Search,
    Grid,
    Settings
} from "lucide-react";
import Link from "next/link";
import { MOCK_DEALS } from "@/lib/mock-data";
import { Deal } from "@/lib/types";
import ProbabilisticStage from "@/components/ProbabilisticStage";

export default function Dashboard() {
    const [deals, setDeals] = useState<Deal[]>([]);
    const [selectedDeal, setSelectedDeal] = useState<Deal | null>(null);

    useEffect(() => {
        setDeals(MOCK_DEALS);
        setSelectedDeal(MOCK_DEALS[0]);
    }, []);

    return (
        <main className="min-h-screen p-8 lg:p-12 pb-32 dashboard-bg">
            {/* Header */}
            <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <div className="p-2 bg-emerald-500/10 rounded-lg">
                            <BrainCircuit className="w-6 h-6 text-emerald-500" />
                        </div>
                        <span className="text-emerald-500 font-semibold tracking-wider text-sm">STATE INFERENCE ENGINE v2.4</span>
                    </div>
                    <h1 className="text-4xl lg:text-5xl font-bold gradient-text">Auto-CRM Updater</h1>
                    <p className="text-slate-400 mt-2">Behavioral intent analysis & automated stage progression</p>
                </div>

                <div className="flex gap-4">
                    <div className="glass-card flex items-center gap-6 py-3 px-6">
                        <div>
                            <p className="text-slate-400 text-xs uppercase tracking-widest font-semibold mb-1">Forecast Variance</p>
                            <div className="flex items-center gap-2">
                                <span className="text-2xl font-bold text-emerald-400">±14%</span>
                                <span className="text-xs text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full">-18% v/s last mon</span>
                            </div>
                        </div>
                        <div className="w-px h-10 bg-slate-800" />
                        <div>
                            <p className="text-slate-400 text-xs uppercase tracking-widest font-semibold mb-1">Auto-Stage Accuracy</p>
                            <span className="text-2xl font-bold">82.4%</span>
                        </div>
                    </div>
                </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left Column - Deal List */}
                <section className="lg:col-span-8 flex flex-col gap-6">
                    <div className="flex justify-between items-center">
                        <h2 className="text-2xl font-bold flex items-center gap-2">
                            <TrendingUp className="w-5 h-5 text-emerald-500" />
                            Active Deal Pipeline
                        </h2>
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                            <input
                                type="text"
                                placeholder="Search deals..."
                                className="bg-slate-900/50 border border-slate-800 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="glass-card p-4 bg-emerald-500/5">
                            <p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Time Saved</p>
                            <div className="text-xl font-bold text-emerald-400">22.4 hrs <span className="text-[10px] text-slate-500 font-normal">/ mo</span></div>
                        </div>
                        <div className="glass-card p-4 bg-indigo-500/5">
                            <p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Close Rate Lift</p>
                            <div className="text-xl font-bold text-indigo-400">+12.5%</div>
                        </div>
                        <div className="glass-card p-4 bg-amber-500/5">
                            <p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Risk Mitigated</p>
                            <div className="text-xl font-bold text-amber-400">4 Deals</div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                        {deals.map((deal) => (
                            <motion.div
                                key={deal.id}
                                layoutId={deal.id}
                                onClick={() => setSelectedDeal(deal)}
                                className={`glass-card cursor-pointer p-6 relative overflow-hidden flex flex-col md:flex-row justify-between items-start md:items-center gap-4 ${selectedDeal?.id === deal.id ? 'border-emerald-500/50 bg-emerald-500/5' : ''
                                    }`}
                            >
                                {selectedDeal?.id === deal.id && (
                                    <motion.div
                                        layoutId="active-indicator"
                                        className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.5)]"
                                    />
                                )}

                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-1">
                                        <h3 className="text-xl font-bold">{deal.company}</h3>
                                        <span className="text-xs font-mono bg-slate-800 text-slate-400 px-2 py-0.5 rounded uppercase">
                                            ID: {deal.id.padStart(4, '0')}
                                        </span>
                                    </div>
                                    <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
                                        <span className="text-emerald-400 font-semibold">${deal.value.toLocaleString()}</span>
                                        <span className="flex items-center gap-1">
                                            <Clock className="w-3.5 h-3.5" />
                                            Updated {new Date(deal.lastUpdate).toLocaleDateString()}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                                            {deal.confidence}% AI Confidence
                                        </span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-6">
                                    <div className="text-right">
                                        <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">CRM Stage</p>
                                        <div className="flex items-center gap-2">
                                            <span className={`px-3 py-1 rounded-full text-xs font-bold ${deal.stage === 'Closed Won' ? 'bg-emerald-500/20 text-emerald-400' :
                                                deal.stage === 'Negotiation' ? 'bg-blue-500/20 text-blue-400' :
                                                    'bg-slate-800 text-slate-300'
                                                }`}>
                                                {deal.stage}
                                            </span>
                                            <ArrowRightLeft className="w-3 h-3 text-slate-600" />
                                        </div>
                                    </div>
                                    <ChevronRight className={`w-5 h-5 text-slate-600 transition-transform ${selectedDeal?.id === deal.id ? 'rotate-90 text-emerald-500' : ''}`} />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Right Column - Deal Analysis & Insights */}
                <section className="lg:col-span-4 gap-8 flex flex-col">
                    <AnimatePresence mode="wait">
                        {selectedDeal ? (
                            <motion.div
                                key={`analysis-${selectedDeal.id}`}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="flex flex-col gap-6"
                            >
                                {/* AI Explanation */}
                                <div className="glass-card border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-transparent">
                                    <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                                        <BrainCircuit className="w-5 h-5 text-emerald-400" />
                                        AI Stage Reasoning
                                    </h3>
                                    <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">
                                        "{selectedDeal.explanation}"
                                    </p>

                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-slate-400">Calibration Score</span>
                                            <span className="text-emerald-400 font-mono">0.92</span>
                                        </div>
                                        <div className="w-full bg-slate-800 rounded-full h-1.5">
                                            <div className="bg-emerald-500 h-1.5 rounded-full w-[92%] shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                                        </div>
                                        <ProbabilisticStage currentStage={selectedDeal.stage} />
                                    </div>
                                </div>

                                {/* Signals Timeline */}
                                <div className="glass-card">
                                    <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                                        <PieChart className="w-5 h-5 text-purple-400" />
                                        Behavioral Signals
                                    </h3>
                                    <div className="space-y-6 relative">
                                        <div className="absolute left-4 top-2 bottom-2 w-px bg-slate-800" />
                                        {selectedDeal.signals.map((signal, idx) => (
                                            <div key={idx} className="relative pl-10">
                                                <div className={`absolute left-2.5 top-1 w-3 h-3 rounded-full border-2 border-slate-900 z-10 ${signal.type === 'email' ? 'bg-blue-500' : 'bg-orange-500'
                                                    }`} />
                                                <div className="flex justify-between items-start mb-1">
                                                    <span className="text-xs font-bold text-slate-500 uppercase tracking-tighter">
                                                        {signal.type === 'email' ? 'EMAIL RECEIVED' : 'CALL ANALYZED'}
                                                    </span>
                                                    <span className="text-[10px] text-slate-600 font-mono">
                                                        {new Date(signal.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                                    </span>
                                                </div>
                                                <h4 className="text-sm font-semibold text-emerald-400 mb-1">{signal.intent}</h4>
                                                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                                                    {signal.content}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Forecast Simulation */}
                                <div className="glass-card bg-gradient-to-br from-indigo-500/5 to-transparent">
                                    <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                                        <BarChart3 className="w-5 h-5 text-indigo-400" />
                                        Monte Carlo Projection
                                    </h3>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-slate-900/50 p-3 rounded-xl border border-slate-800">
                                            <p className="text-[10px] text-slate-500 uppercase font-bold mb-1">P(Won)</p>
                                            <p className="text-xl font-bold">74.2%</p>
                                        </div>
                                        <div className="bg-slate-900/50 p-3 rounded-xl border border-slate-800">
                                            <p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Est. ARR</p>
                                            <p className="text-xl font-bold">${(selectedDeal.value * 0.74).toLocaleString()}</p>
                                        </div>
                                    </div>
                                    <button className="w-full mt-6 py-3 bg-emerald-500 text-slate-900 font-bold rounded-xl hover:bg-emerald-400 transition-colors flex items-center justify-center gap-2 text-sm shadow-[0_10px_20px_rgba(16,185,129,0.2)]">
                                        Sync to Zoho CRM
                                        <ShieldCheck className="w-4 h-4" />
                                    </button>
                                </div>
                            </motion.div>
                        ) : (
                            <div className="h-64 flex flex-col items-center justify-center text-slate-500 border-2 border-dashed border-slate-800 rounded-3xl">
                                <BrainCircuit className="w-12 h-12 mb-4 opacity-20" />
                                <p>Select a deal to view AI analysis</p>
                            </div>
                        )}
                    </AnimatePresence>
                </section>
            </div>

            {/* Floating Action Bar */}
            <div className="fixed bottom-8 left-1/2 -translate-x-1/2 glass flex items-center gap-2 p-2 shadow-2xl border-white/10 z-50">
                <Link href="/" className="px-4 py-2 bg-emerald-500 text-slate-900 rounded-lg text-sm font-bold flex items-center gap-2">
                    <BarChart3 className="w-4 h-4" />
                    Analytics
                </Link>
                <Link href="/integrations" className="px-4 py-2 hover:bg-white/5 rounded-lg text-sm font-bold flex items-center gap-2 transition-colors">
                    <Grid className="w-4 h-4" />
                    Integrations
                </Link>
                <div className="w-px h-6 bg-white/10 mx-2" />
                <button className="px-4 py-2 hover:bg-white/5 rounded-lg text-sm font-bold flex items-center gap-2 transition-colors text-slate-400">
                    <Settings className="w-4 h-4" />
                    Settings
                </button>
            </div>

        </main>
    );
}
