"use client";

import { TriangleAlert, ArrowUpRight } from "lucide-react";

export function AlertCards() {
    const alerts = [
        {
            id: 1,
            title: "【高警示】颠覆性技术识别",
            content: "系统监测到“量子纠错编码”领域的被引频次在近3个月内发生剧烈突变，置信度 94%。建议重点关注相关科研团队动向。",
            time: "今天 10:30",
            level: "high"
        },
        {
            id: 2,
            title: "【中警示】人才异动监控",
            content: "发现 3 名 AI 顶尖人才（H-index > 50）近期从北美高校离职并加入中东地区企业，呈现群体性跨域流动特征。",
            time: "昨天 15:00",
            level: "medium"
        }
    ];

    return (
        <div className="glass-panel p-6 flex flex-col h-[400px]">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                    <TriangleAlert className="w-5 h-5 text-red-400" />
                    <h3 className="text-lg font-semibold text-foreground">主题突变检测预警</h3>
                </div>
                <span className="bg-red-500/10 text-red-400 text-xs px-2 py-1 rounded border border-red-500/20 font-medium">实时扫描中</span>
            </div>

            <div className="flex-1 overflow-y-auto space-y-4 pr-2">
                {alerts.map((alert, i) => (
                    <div
                        key={alert.id}
                        className={`p-4 rounded-xl border animate-in fade-in slide-in-from-right-4 fill-mode-both ${alert.level === 'high'
                                ? 'bg-red-500/5 border-red-500/20 hover:bg-red-500/10 hover:border-red-500/30'
                                : 'bg-orange-500/5 border-orange-500/20 hover:bg-orange-500/10 hover:border-orange-500/30'
                            } transition-colors cursor-pointer group`}
                        style={{ animationDelay: `${400 + i * 150}ms` }}
                    >
                        <div className="flex items-start justify-between mb-2">
                            <h4 className={`font-semibold text-sm ${alert.level === 'high' ? 'text-red-400' : 'text-orange-400'
                                }`}>{alert.title}</h4>
                            <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                        </div>
                        <p className="text-sm text-foreground/80 leading-relaxed mb-3">
                            {alert.content}
                        </p>
                        <div className="text-xs text-muted-foreground flex items-center justify-between">
                            <span>{alert.time}</span>
                            <button className="text-brand-cyan hover:underline">立即研判</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
