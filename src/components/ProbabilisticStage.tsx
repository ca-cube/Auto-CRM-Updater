"use client";

import { motion } from "framer-motion";
import { DealStage } from "@/lib/types";

interface Props {
    currentStage: DealStage;
}

const STAGES: DealStage[] = ["Qualification", "Discovery", "Proposal", "Negotiation", "Closing", "Closed Won"];

export default function ProbabilisticStage({ currentStage }: Props) {
    const currentIdx = STAGES.indexOf(currentStage);

    return (
        <div className="flex flex-col gap-4 mt-4">
            <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Inferred Progression Path</p>
            <div className="flex items-center gap-1 h-2">
                {STAGES.map((s, idx) => {
                    let color = "bg-slate-800";
                    let glow = "";

                    if (idx < currentIdx) color = "bg-emerald-500/40";
                    if (idx === currentIdx) {
                        color = "bg-emerald-500";
                        glow = "shadow-[0_0_10px_rgba(16,185,129,0.8)]";
                    }
                    if (idx === currentIdx + 1) color = "bg-slate-700 animate-pulse";

                    return (
                        <div
                            key={s}
                            className={`flex-1 h-full rounded-sm transition-all duration-500 ${color} ${glow}`}
                            title={s}
                        />
                    );
                })}
            </div>
            <div className="flex justify-between text-[8px] text-slate-600 font-mono uppercase">
                <span>Lead</span>
                <span>Closed</span>
            </div>
        </div>
    );
}
