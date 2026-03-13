"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import {
    Quote, FileText, Network, Lightbulb,
    MapPin, GraduationCap, Building2,
    Award, ArrowUpRight, Share2, Star
} from "lucide-react";
import clsx from "clsx";
import { mockScholars } from "../../data/mock/scholars";

export default function ScholarProfilePage() {
    const params = useParams();
    const scholarId = params.id as string || "s1";
    const scholar = mockScholars.find(s => s.id === scholarId) || mockScholars[0];

    const [activeTab, setActiveTab] = useState("interests");

    const stats = [
        { label: "发文量", value: scholar.paperCount, icon: FileText, color: "text-brand-blue" },
        { label: "引用数", value: scholar.citationCount.toLocaleString(), icon: Quote, color: "text-brand-cyan" },
        { label: "专利数", value: scholar.patentCount, icon: Lightbulb, color: "text-brand-green" },
        { label: "合作者", value: scholar.collaboratorCount, icon: Network, color: "text-brand-purple" },
    ];

    return (
        <div className="flex flex-col xl:flex-row gap-6 h-full w-full max-w-[1600px] mx-auto">

            {/* 左侧：学者名片与核心指标 */}
            <div className="w-full xl:w-80 shrink-0 flex flex-col gap-6">
                <div className="glass-panel p-6 flex flex-col items-center text-center animate-in fade-in slide-in-from-left-4 fill-mode-both">
                    <div className="relative mb-4 group">
                        <div className="w-24 h-24 rounded-full border-2 border-brand-cyan/30 overflow-hidden bg-white/5 relative z-10">
                            <Image src={scholar.avatar} alt={scholar.name} fill className="object-cover" />
                        </div>
                        {/* 头像发光特效 */}
                        <div className="absolute inset-0 bg-brand-cyan blur-[20px] opacity-20 group-hover:opacity-40 transition-opacity rounded-full z-0"></div>
                        {/* 专家认证徽章 */}
                        <div className="absolute -bottom-2 -right-2 bg-brand-blue text-white w-8 h-8 rounded-full flex items-center justify-center border-2 border-background z-20 shadow-[0_0_10px_rgba(37,99,235,0.4)]">
                            <Award className="w-4 h-4" />
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold text-foreground mb-1">{scholar.name}</h2>
                    <p className="text-sm font-medium text-brand-cyan mb-3">{scholar.title}</p>

                    <div className="w-full space-y-2 mb-6">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground justify-center">
                            <Building2 className="w-4 h-4 shrink-0" />
                            <span className="truncate">{scholar.affiliation}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground justify-center">
                            <MapPin className="w-4 h-4 shrink-0" />
                            <span>中国 · 北京</span>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-2 justify-center mb-6">
                        {scholar.tags.map(tag => (
                            <span key={tag} className="text-xs px-2.5 py-1 bg-white/5 border border-white/10 rounded-full text-foreground/80">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="flex w-full gap-2">
                        <button className="flex-1 bg-brand-cyan/10 hover:bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/30 rounded-lg py-2 text-sm font-medium transition-colors flex items-center justify-center gap-1.5">
                            <Star className="w-4 h-4" /> 关注学者
                        </button>
                        <button className="p-2 border border-border/50 rounded-lg bg-card hover:bg-white/5 text-muted-foreground hover:text-foreground transition-colors">
                            <Share2 className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* H-Index 仪表盘 */}
                <div className="glass-panel p-6 animate-in fade-in slide-in-from-left-4 fill-mode-both" style={{ animationDelay: '100ms' }}>
                    <h3 className="text-sm font-semibold text-foreground mb-4">学术影响力指数 (H-Index)</h3>
                    <div className="flex items-center justify-center py-4">
                        <div className="relative w-32 h-32 flex items-center justify-center">
                            {/* 模拟环形图 */}
                            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                                <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="8" className="text-border" />
                                <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="8"
                                    className="text-brand-cyan drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]"
                                    strokeDasharray={`${scholar.hIndex * 2.8} 280`} strokeLinecap="round"
                                />
                            </svg>
                            <div className="absolute flex flex-col items-center">
                                <span className="text-3xl font-bold text-foreground leading-none mb-1">{scholar.hIndex}</span>
                                <span className="text-[10px] text-brand-cyan uppercase tracking-wider font-semibold bg-brand-cyan/10 px-2 py-0.5 rounded-full">Top 1%</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 核心指标 2x2 网格 */}
                <div className="grid grid-cols-2 gap-3 animate-in fade-in slide-in-from-left-4 fill-mode-both" style={{ animationDelay: '200ms' }}>
                    {stats.map((stat, i) => {
                        const Icon = stat.icon;
                        return (
                            <div key={i} className="glass-panel p-4 flex flex-col hover:border-border/80 transition-colors">
                                <div className="flex items-center gap-2 mb-2">
                                    <Icon className={clsx("w-4 h-4", stat.color)} />
                                    <span className="text-xs text-muted-foreground">{stat.label}</span>
                                </div>
                                <span className="text-xl font-bold text-foreground">{stat.value}</span>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* 中央：图表分析与论文列表 */}
            <div className="flex-1 min-w-0 flex flex-col gap-6">
                <div className="glass-panel flex-1 flex flex-col min-h-[400px] animate-in fade-in slide-in-from-bottom-4 fill-mode-both" style={{ animationDelay: '300ms' }}>
                    <div className="flex items-center gap-6 px-6 pt-6 border-b border-border/50">
                        {[
                            { id: "interests", label: "研究兴趣演化" },
                            { id: "network", label: "学术合作网络" },
                            { id: "citation", label: "引文图谱" },
                        ].map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={clsx(
                                    "px-1 pb-4 text-sm font-medium transition-all relative",
                                    activeTab === tab.id ? "text-brand-cyan" : "text-muted-foreground hover:text-foreground"
                                )}
                            >
                                {tab.label}
                                {activeTab === tab.id && (
                                    <div className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-brand-cyan shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                                )}
                            </button>
                        ))}
                    </div>

                    <div className="flex-1 p-6 relative flex items-center justify-center bg-black/5">
                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                        {/* 基于 activeTab 伪造图表视觉效果 */}
                        {activeTab === "interests" && (
                            <div className="text-center">
                                <p className="text-muted-foreground text-sm font-medium border border-border/50 bg-black/20 px-4 py-2 rounded-lg backdrop-blur-sm">
                                    ECharts 时序气泡图区域：展示学者历年研究话题的变迁轨迹
                                </p>
                                <div className="mt-8 flex items-baseline justify-center gap-8 h-32 relative opacity-60">
                                    <div className="w-16 h-16 rounded-full bg-blue-500 blur-md absolute top-10 left-0"></div>
                                    <div className="w-24 h-24 rounded-full bg-cyan-500 blur-md absolute top-0 left-1/3"></div>
                                    <div className="w-32 h-32 rounded-full bg-purple-500 blur-md absolute top-4 right-1/4"></div>
                                    <div className="w-12 h-12 rounded-full bg-green-500 blur-md absolute bottom-0 right-0"></div>
                                    {/* timeline axis */}
                                    <div className="absolute bottom-[-20px] left-0 right-0 w-full h-px bg-border flex justify-between">
                                        <span className="text-xs text-muted-foreground mt-2">2018</span>
                                        <span className="text-xs text-muted-foreground mt-2">2020</span>
                                        <span className="text-xs text-brand-cyan font-bold mt-2">2024</span>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === "network" && (
                            <div className="text-center">
                                <p className="text-muted-foreground text-sm font-medium border border-border/50 bg-black/20 px-4 py-2 rounded-lg backdrop-blur-sm relative z-10">
                                    力导向图区域：展示学术合作圈及紧密度
                                </p>
                                {/* Fake network nodes */}
                                <div className="absolute border border-brand-cyan/20 w-8 h-8 rounded-full left-[40%] top-[40%]"></div>
                                <div className="absolute border border-brand-blue/30 w-12 h-12 rounded-full left-[55%] top-[30%]"></div>
                                <div className="absolute border border-brand-purple/20 w-6 h-6 rounded-full left-[45%] top-[60%]"></div>
                                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
                                    <line x1="42%" y1="42%" x2="57%" y2="33%" stroke="#06b6d4" strokeWidth="1" />
                                    <line x1="42%" y1="42%" x2="47%" y2="62%" stroke="#8b5cf6" strokeWidth="1" />
                                </svg>
                            </div>
                        )}
                        {activeTab === "citation" && (
                            <div className="text-center">
                                <p className="text-muted-foreground text-sm font-medium border border-border/50 bg-black/20 px-4 py-2 rounded-lg backdrop-blur-sm relative z-10">
                                    溯源树区域：单篇顶会论文的具体引用关联网
                                </p>
                            </div>
                        )}
                    </div>
                </div>

                {/* 代表论文列表 */}
                <div className="glass-panel p-6 animate-in fade-in slide-in-from-bottom-4 fill-mode-both" style={{ animationDelay: '400ms' }}>
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-semibold text-foreground">代表作 (Top Papers)</h3>
                        <button className="text-sm text-brand-cyan hover:underline">查看全部 {scholar.paperCount} 篇</button>
                    </div>
                    <div className="space-y-4">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex gap-4 p-4 rounded-xl bg-black/10 border border-white/5 hover:border-white/10 transition-colors group">
                                <div className="flex-1 min-w-0">
                                    <h4 className="text-base font-semibold text-foreground group-hover:text-brand-cyan transition-colors truncate mb-1.5 flex items-center gap-2">
                                        {i === 1 ? "Large Language Models Self-Compose Reasoning Structures" : `Research Paper Title Example 0${i}`}
                                        {i === 1 && <span className="bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20 px-1.5 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider">Highly Cited</span>}
                                    </h4>
                                    <p className="text-sm text-muted-foreground truncate mb-2">Pei Ke, Bosi Wen, Zhuoer Feng, Minlie Huang</p>
                                    <div className="flex items-center gap-4 text-xs font-medium">
                                        <span className="text-brand-cyan px-2 py-0.5 bg-brand-cyan/10 rounded border border-brand-cyan/20">NeurIPS 2024</span>
                                        <span className="flex items-center gap-1 text-muted-foreground hover:text-foreground cursor-pointer transition-colors"><Quote className="w-3.5 h-3.5" /> 2,45{i} 引用</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 右侧：履历与推荐 */}
            <div className="w-full xl:w-80 shrink-0 flex flex-col gap-6">
                {/* 学术履历 Timeline */}
                <div className="glass-panel p-6 animate-in fade-in slide-in-from-right-4 fill-mode-both" style={{ animationDelay: '500ms' }}>
                    <h3 className="text-sm font-semibold text-foreground mb-6 flex items-center gap-2">
                        <GraduationCap className="w-4 h-4 text-brand-purple" />
                        学术经历
                    </h3>
                    <div className="relative pl-3 border-l-2 border-border/50 space-y-6">
                        <div className="relative">
                            <div className="absolute w-3 h-3 rounded-full bg-brand-cyan -left-[19px] top-1 outline outline-4 outline-background"></div>
                            <p className="text-xs font-semibold text-brand-cyan mb-1">2020 - 至今</p>
                            <p className="text-sm font-medium text-foreground">清华大学 长聘教授</p>
                            <p className="text-xs text-muted-foreground mt-1">计算机科学与技术系</p>
                        </div>
                        <div className="relative">
                            <div className="absolute w-3 h-3 rounded-full bg-border -left-[19px] top-1 outline outline-4 outline-background"></div>
                            <p className="text-xs font-semibold text-muted-foreground mb-1">2015 - 2020</p>
                            <p className="text-sm font-medium text-foreground">麻省理工学院 (MIT)</p>
                            <p className="text-xs text-muted-foreground mt-1">博士后研究员</p>
                        </div>
                        <div className="relative">
                            <div className="absolute w-3 h-3 rounded-full bg-border -left-[19px] top-1 outline outline-4 outline-background"></div>
                            <p className="text-xs font-semibold text-muted-foreground mb-1">2010 - 2015</p>
                            <p className="text-sm font-medium text-foreground">清华大学</p>
                            <p className="text-xs text-muted-foreground mt-1">计算机科学博士学位</p>
                        </div>
                    </div>
                </div>

                {/* 专家精准推荐 */}
                <div className="glass-panel p-6 flex-1 animate-in fade-in slide-in-from-right-4 fill-mode-both" style={{ animationDelay: '600ms' }}>
                    <h3 className="text-sm font-semibold text-foreground mb-6 flex items-center justify-between">
                        相似专家推荐
                        <span className="text-[10px] bg-brand-cyan/20 text-brand-cyan px-2 py-0.5 rounded-full font-medium">AI匹配率 92%+</span>
                    </h3>
                    <div className="space-y-4">
                        {mockScholars.filter(s => s.id !== scholarId).map(s => (
                            <div key={s.id} className="flex gap-3 items-center group cursor-pointer p-2 -mx-2 rounded-lg hover:bg-white/5 transition-colors">
                                <div className="relative w-10 h-10 rounded-full overflow-hidden bg-black/20 shrink-0 border border-white/10 group-hover:border-brand-cyan/50 transition-colors">
                                    <Image src={s.avatar} alt={s.name} fill />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h4 className="text-sm font-medium text-foreground flex items-center justify-between">
                                        {s.name}
                                        <ArrowUpRight className="w-3 h-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </h4>
                                    <p className="text-xs text-muted-foreground truncate">{s.affiliation}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="w-full mt-6 py-2 rounded border border-border/50 text-xs font-medium text-foreground hover:bg-white/5 transition-colors">
                        查看更多推荐
                    </button>
                </div>
            </div>
        </div>
    );
}
