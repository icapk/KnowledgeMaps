"use client";

import { ChevronDown } from "lucide-react";

export function FilterPanel() {
    const filters = [
        {
            title: "出版年份",
            options: [
                { label: "2024", count: 1250 },
                { label: "2023", count: 4800 },
                { label: "2022", count: 4200 },
                { label: "2021", count: 3900 },
                { label: "2020 及以前", count: 18500 },
            ]
        },
        {
            title: "学科分类 (Top)",
            options: [
                { label: "人工智能", count: 8500 },
                { label: "机器学习", count: 6200 },
                { label: "自然语言处理", count: 4100 },
                { label: "计算机视觉", count: 3800 },
                { label: "数据挖掘", count: 2900 },
            ]
        },
        {
            title: "文献类型",
            options: [
                { label: "期刊论文 (Journal)", count: 18500 },
                { label: "会议论文 (Conference)", count: 12400 },
                { label: "学位论文 (Thesis)", count: 1200 },
                { label: "预印本 (Preprint)", count: 4500 },
            ]
        }
    ];

    return (
        <div className="w-64 shrink-0 flex flex-col gap-6">
            <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-foreground">筛选条件</h3>
                <button className="text-xs text-brand-cyan hover:underline">重置</button>
            </div>

            {filters.map((filter, i) => (
                <div key={i} className="border-b border-border/50 pb-6 last:border-0 animate-in fade-in slide-in-from-left-4 fill-mode-both" style={{ animationDelay: `${i * 100}ms` }}>
                    <button className="flex items-center justify-between w-full mb-3 group">
                        <span className="text-sm font-medium text-foreground group-hover:text-brand-cyan transition-colors">{filter.title}</span>
                        <ChevronDown className="w-4 h-4 text-muted-foreground group-hover:text-brand-cyan transition-colors" />
                    </button>
                    <div className="flex flex-col gap-2.5">
                        {filter.options.map((opt, j) => (
                            <label key={j} className="flex items-center justify-between group cursor-pointer">
                                <div className="flex items-center gap-2">
                                    <input type="checkbox" className="w-3.5 h-3.5 rounded-sm border-border bg-black/20 text-brand-cyan focus:ring-brand-cyan/30 focus:ring-offset-0" />
                                    <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">{opt.label}</span>
                                </div>
                                <span className="text-[10px] text-muted-foreground/50 bg-white/5 px-1.5 py-0.5 rounded">{opt.count}</span>
                            </label>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
