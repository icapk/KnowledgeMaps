"use client";

import { FileText, Award, Lightbulb, Zap } from "lucide-react";

export function NewsFeed() {
    const newsItems = [
        {
            id: 1,
            type: "paper",
            title: "Self-Discover: Large Language Models Self-Compose Reasoning Structures",
            source: "Google DeepMind",
            time: "10 分钟前",
            icon: FileText,
            color: "text-brand-blue",
            bg: "bg-brand-blue/10"
        },
        {
            id: 2,
            type: "patent",
            title: "一种基于混合专家模型的分布式训练方法及装置",
            source: "CN117565XXXA",
            time: "1 小时前",
            icon: Lightbulb,
            color: "text-brand-cyan",
            bg: "bg-brand-cyan/10"
        },
        {
            id: 3,
            type: "alert",
            title: "技术突变预警：固态电池领域专利申请量季度环比上升 340%",
            source: "TIMS 监测系统",
            time: "2 小时前",
            icon: Zap,
            color: "text-red-400",
            bg: "bg-red-400/10"
        },
        {
            id: 4,
            type: "scholar",
            title: "何恺明团队在 ICCV 2025 发表两篇 Spotlight 论文",
            source: "学术动态跟踪",
            time: "4 小时前",
            icon: Award,
            color: "text-brand-purple",
            bg: "bg-brand-purple/10"
        }
    ];

    return (
        <div className="glass-panel p-6 flex flex-col h-[400px]">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-foreground">动态情报推荐</h3>
                <button className="text-xs text-brand-cyan hover:text-brand-cyan/80 font-medium">查看全部</button>
            </div>

            <div className="flex-1 overflow-y-auto pr-2 space-y-4">
                {newsItems.map((item, i) => (
                    <div key={item.id} className="flex gap-4 group cursor-pointer animate-in fade-in slide-in-from-right-4 fill-mode-both" style={{ animationDelay: `${200 + i * 100}ms` }}>
                        <div className="shrink-0 relative">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${item.bg} ${item.color}`}>
                                <item.icon className="w-4 h-4" />
                            </div>
                            {i !== newsItems.length - 1 && (
                                <div className="absolute top-8 left-1/2 -ml-px w-[2px] h-full bg-border -z-10" />
                            )}
                        </div>

                        <div className="pb-4">
                            <p className="text-sm font-medium text-foreground leading-snug group-hover:text-brand-cyan transition-colors line-clamp-2 mb-1.5">
                                {item.title}
                            </p>
                            <div className="flex items-center gap-3 text-xs text-muted-foreground">
                                <span className="bg-white/5 px-2 py-0.5 rounded">{item.source}</span>
                                <span>{item.time}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
