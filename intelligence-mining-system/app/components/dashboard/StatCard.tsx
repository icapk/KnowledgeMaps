"use client";

import { ReactNode } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";
import clsx from "clsx";

interface StatCardProps {
    title: string;
    value: string;
    trend?: number;
    icon: ReactNode;
    colorClass?: string;
    delay?: number;
}

export function StatCard({ title, value, trend, icon, colorClass = "text-brand-cyan", delay = 0 }: StatCardProps) {
    return (
        <div
            className="glass-panel p-5 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300 animate-in fade-in slide-in-from-bottom-4 fill-mode-both"
            style={{ animationDelay: `${delay}ms` }}
        >
            <div className="flex justify-between items-start mb-4">
                <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
                <div className={clsx("p-2 rounded-lg bg-white/5", colorClass)}>
                    {icon}
                </div>
            </div>

            <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-foreground tracking-tight">{value}</span>
                {trend !== undefined && (
                    <div className={clsx(
                        "flex items-center text-xs font-semibold px-1.5 py-0.5 rounded-full",
                        trend > 0 ? "text-brand-green bg-brand-green/10" : "text-red-400 bg-red-400/10"
                    )}>
                        {trend > 0 ? <TrendingUp className="w-3 h-3 mr-1" /> : <TrendingDown className="w-3 h-3 mr-1" />}
                        {Math.abs(trend)}%
                    </div>
                )}
            </div>

            {/* 装饰发光效果 */}
            <div className={clsx(
                "absolute -bottom-4 -right-4 w-24 h-24 rounded-full blur-[40px] opacity-0 group-hover:opacity-40 transition-opacity duration-500",
                colorClass === "text-brand-cyan" ? "bg-brand-cyan" :
                    colorClass === "text-brand-blue" ? "bg-brand-blue" :
                        colorClass === "text-brand-green" ? "bg-brand-green" : "bg-brand-purple"
            )} />
        </div>
    );
}
