"use client";

import { motion } from "framer-motion";
import {
    Mail,
    PhoneCall,
    Database,
    CheckCircle2,
    ArrowLeft,
    Settings,
    Zap,
    Lock,
    Globe
} from "lucide-react";
import Link from "next/link";

const INTEGRATIONS = [
    {
        name: "Gmail & Outlook",
        description: "Read email threads and extract intent signals automatically.",
        status: "Connected",
        icon: Mail,
        color: "text-blue-400",
        bg: "bg-blue-400/10"
    },
    {
        name: "Zoom & Google Meet",
        description: "Transcribe sales calls and analyze verbal buying signals.",
        status: "Active",
        icon: PhoneCall,
        color: "text-orange-400",
        bg: "bg-orange-400/10"
    },
    {
        name: "Zoho CRM & Salesforce",
        description: "Automatic stage updates and pipeline synchronization.",
        status: "Pending Setup",
        icon: Database,
        color: "text-emerald-400",
        bg: "bg-emerald-400/10"
    },
    {
        name: "WhatsApp Business",
        description: "Capture chatting patterns and regional B2B intent.",
        status: "Coming Soon",
        icon: Globe,
        color: "text-green-500",
        bg: "bg-green-500/10"
    }
];

export default function IntegrationsPage() {
    return (
        <main className="min-h-screen p-8 lg:p-12">
            <Link href="/" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8 group">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Dashboard
            </Link>

            <div className="max-w-4xl mx-auto">
                <header className="mb-12">
                    <div className="flex items-center gap-3 mb-4">
                        <Zap className="w-6 h-6 text-yellow-500 fill-yellow-500/20" />
                        <span className="text-yellow-500 font-bold uppercase tracking-widest text-sm">Deployment & Connectivity</span>
                    </div>
                    <h1 className="text-4xl font-bold gradient-text mb-4">Integrations Hub</h1>
                    <p className="text-slate-400 max-w-2xl">
                        Connect your communication channels and CRM to activate the AI layer.
                        Behavioral signals are processed locally for privacy before inference.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {INTEGRATIONS.map((app, idx) => (
                        <motion.div
                            key={app.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="glass-card hover:border-slate-700"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className={`p-3 rounded-2xl ${app.bg}`}>
                                    <app.icon className={`w-6 h-6 ${app.color}`} />
                                </div>
                                <span className={`text-[10px] font-bold px-2 py-1 rounded ${app.status === 'Connected' || app.status === 'Active'
                                    ? 'bg-emerald-500/10 text-emerald-500'
                                    : 'bg-slate-800 text-slate-500'
                                    }`}>
                                    {app.status.toUpperCase()}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold mb-2">{app.name}</h3>
                            <p className="text-sm text-slate-400 leading-relaxed mb-6">
                                {app.description}
                            </p>

                            <div className="flex items-center justify-between pt-6 border-t border-slate-800">
                                <div className="flex items-center gap-2 text-xs text-slate-500">
                                    <Lock className="w-3 h-3" />
                                    AES-256 Encrypted
                                </div>
                                <button className={`text-sm font-bold ${app.status === 'Pending Setup' ? 'text-white' : 'text-slate-500 line-through'
                                    }`}>
                                    Configure
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 p-8 glass-card border-dashed border-slate-800 bg-transparent flex flex-col md:flex-row items-center gap-8">
                    <div className="p-6 bg-slate-900 rounded-full border border-slate-800">
                        <Settings className="w-12 h-12 text-slate-400 animate-spin-slow" />
                    </div>
                    <div>
                        <h4 className="text-xl font-bold mb-2 text-slate-200">Custom CRM Sandbox</h4>
                        <p className="text-slate-400 text-sm mb-4">
                            Testing on a custom taxonomy? Use our mapping engine to align AI behavioral states with your specific sales stages.
                        </p>
                        <div className="flex gap-4">
                            <button className="px-6 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-sm font-bold transition-colors">
                                Map Stages
                            </button>
                            <button className="px-6 py-2 border border-slate-800 hover:border-slate-700 rounded-lg text-sm font-bold transition-colors">
                                View API Docs
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    );
}
