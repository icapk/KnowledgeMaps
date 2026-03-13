"use client";

import { useState } from "react";
import { GitGraph, Network, BarChart3, Binary, ChevronDown, ListFilter, Download } from "lucide-react";
import clsx from "clsx";

// 各个 Tab 的占位内容组件，下一步将以具体组件实现替换
function TechnologyPanorama() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full animate-in fade-in fill-mode-both" style={{ animationDelay: '200ms' }}>
            <div className="lg:col-span-2 glass-panel p-6 flex flex-col h-[500px]">
                <h3 className="text-lg font-semibold text-foreground mb-4">技术全景知识图谱</h3>
                <div className="flex-1 bg-black/10 rounded-lg flex items-center justify-center border border-white/5 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-brand-cyan/5"></div>
                    <p className="text-muted-foreground z-10 text-sm">【因无 ECharts 依赖】此处为技术依赖知识图谱的力导向图 (Force-Directed Graph)</p>
                    <div className="absolute center w-32 h-32 rounded-full border-4 border-brand-cyan bg-brand-cyan/20 blur-[1px]"></div>
                    <div className="absolute top-1/3 left-1/4 w-16 h-16 rounded-full border-2 border-brand-blue bg-brand-blue/20 blur-[1px]"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-20 h-20 rounded-full border-2 border-brand-purple bg-brand-purple/20 blur-[1px]"></div>
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="50%" y1="50%" x2="25%" y2="33%" stroke="#3b82f6" strokeWidth="2" strokeOpacity="0.5" strokeDasharray="5,5" />
                        <line x1="50%" y1="50%" x2="75%" y2="75%" stroke="#8b5cf6" strokeWidth="2" strokeOpacity="0.5" />
                    </svg>
                </div>
            </div>
            <div className="glass-panel p-6 flex flex-col h-[500px]">
                <h3 className="text-lg font-semibold text-foreground mb-4">技术溯源路径</h3>
                <div className="flex-1 overflow-y-auto pr-2 space-y-4">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="flex gap-4 group">
                            <div className="shrink-0 relative">
                                <div className="w-8 h-8 rounded-full bg-brand-cyan/10 text-brand-cyan flex items-center justify-center border border-brand-cyan/30 text-sm font-bold">
                                    {5 - i}
                                </div>
                                {i !== 4 && <div className="absolute top-8 left-1/2 -ml-px w-[2px] h-full bg-brand-cyan/20"></div>}
                            </div>
                            <div className="pb-4 pt-1">
                                <p className="text-sm font-medium text-foreground mb-1">
                                    {i === 1 ? "第三代半导体材料制备 (当前)" : i === 2 ? "碳化硅单晶生长技术" : i === 3 ? "高温气相沉积法" : "宽禁带半导体理论基础"}
                                </p>
                                <p className="text-xs text-muted-foreground">追溯至 {2024 - i * 5} 年</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function CollaborationAndTalent() {
    return (
        <div className="grid flex-1 grid-cols-1 lg:grid-cols-2 gap-6 h-full animate-in fade-in fill-mode-both" style={{ animationDelay: '200ms' }}>
            <div className="glass-panel p-6 h-[400px] flex flex-col">
                <h3 className="text-lg font-semibold text-foreground mb-4">全球人才地理分布 (Scholar Map)</h3>
                <div className="flex-1 bg-black/10 rounded-lg flex items-center justify-center border border-white/5 relative bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-center bg-no-repeat bg-contain opacity-60">
                    <div className="absolute w-full h-full bg-background/50"></div>
                    <p className="text-muted-foreground z-10 text-sm relative">【因无地图依赖】此处展示ECharts世界地图热力图结构</p>
                </div>
            </div>
            <div className="glass-panel p-6 h-[400px] flex flex-col">
                <h3 className="text-lg font-semibold text-foreground mb-4">学术水平跨国对比 (散点图)</h3>
                <div className="flex-1 bg-black/10 rounded-lg flex items-center justify-center border border-white/5 relative">
                    <p className="text-muted-foreground text-sm">X:论文量 Y:引用量 气泡:学者数</p>
                    <div className="absolute bottom-10 left-20 w-8 h-8 rounded-full bg-brand-blue/60 mix-blend-screen shadow-[0_0_15px_#3b82f6]"></div>
                    <div className="absolute top-1/4 right-1/4 w-16 h-16 rounded-full bg-brand-cyan/60 mix-blend-screen shadow-[0_0_20px_#06b6d4]"></div>
                    <div className="absolute bottom-1/3 right-1/3 w-12 h-12 rounded-full bg-brand-purple/60 mix-blend-screen shadow-[0_0_15px_#8b5cf6]"></div>
                </div>
            </div>
        </div>
    );
}

function RankAndTopic() {
    return (
        <div className="glass-panel p-6 h-[500px] animate-in fade-in fill-mode-both" style={{ animationDelay: '200ms' }}>
            <h3 className="text-lg font-semibold text-foreground mb-6">领域机构排行榜 (Top Institutions)</h3>
            <div className="space-y-4">
                {["MIT", "Stanford University", "Tsinghua University", "Google DeepMind", "UC Berkeley"].map((inst, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                        <div className="w-8 shrink-0 text-center font-bold text-lg text-muted-foreground group-hover:text-brand-cyan transition-colors">{i + 1}</div>
                        <div className="flex-1">
                            <div className="flex justify-between mb-1.5">
                                <span className="text-sm font-medium text-foreground">{inst}</span>
                                <span className="text-xs text-muted-foreground">综合评分 {(99 - i * 3.5).toFixed(1)}</span>
                            </div>
                            <div className="w-full bg-black/20 rounded-full h-2">
                                <div
                                    className={clsx(
                                        "h-2 rounded-full",
                                        i === 0 ? "bg-brand-cyan" : i === 1 ? "bg-brand-blue" : i === 2 ? "bg-brand-purple" : "bg-muted-foreground"
                                    )}
                                    style={{ width: `${95 - i * 8}%` }}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function RuleDiscovery() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in fill-mode-both" style={{ animationDelay: '200ms' }}>
            <div className="glass-panel p-6 h-[400px] flex flex-col">
                <h3 className="text-lg font-semibold text-foreground mb-4">隐含关联规则发现</h3>
                <p className="text-sm text-muted-foreground mb-6">基于大规模复杂网络分析，挖掘发现的潜在情报规律摘要。</p>

                <div className="space-y-4 overflow-y-auto">
                    <div className="p-4 bg-brand-cyan/5 border border-brand-cyan/20 rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                            <span className="text-xs font-semibold px-2 py-0.5 bg-brand-cyan/20 text-brand-cyan rounded">高置信度 (92%)</span>
                            <span className="text-xs text-muted-foreground">覆盖文献: 1.2M+</span>
                        </div>
                        <p className="text-sm text-foreground/90 font-medium">
                            模型发现：当学者连续3年在"多模态融合"发表顶会后，其后续研究转向"具身智能"的概率超过 68%。
                        </p>
                    </div>

                    <div className="p-4 bg-brand-blue/5 border border-brand-blue/20 rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                            <span className="text-xs font-semibold px-2 py-0.5 bg-brand-blue/20 text-brand-blue rounded">中置信度 (78%)</span>
                            <span className="text-xs text-muted-foreground">覆盖专利: 450K+</span>
                        </div>
                        <p className="text-sm text-foreground/90 font-medium">
                            模型发现：北美地区高校在"固态电池"的基础研究转化至企业专利的平均滞后周期由 4.5 年缩短至 2.8 年。
                        </p>
                    </div>
                </div>
            </div>

            <div className="glass-panel p-6 h-[400px] flex flex-col">
                <h3 className="text-lg font-semibold text-foreground mb-4">抽图任务监控 (Task Monitor)</h3>
                <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-center p-3 rounded-lg bg-black/20 border border-white/5">
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-brand-green animate-pulse"></div>
                            <div>
                                <p className="text-sm font-medium">2024Q1 专利全局图谱重构</p>
                                <p className="text-xs text-muted-foreground mt-0.5">节点: 18.5M / 关系: 42.1M</p>
                            </div>
                        </div>
                        <span className="text-sm font-medium text-brand-green">运行中 65%</span>
                    </div>

                    <div className="flex justify-between items-center p-3 rounded-lg bg-black/20 border border-white/5">
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-brand-cyan"></div>
                            <div>
                                <p className="text-sm font-medium">医疗AI跨模态对齐聚类</p>
                                <p className="text-xs text-muted-foreground mt-0.5">节点: 4.2M / 关系: 11.8M</p>
                            </div>
                        </div>
                        <span className="text-sm font-medium text-brand-cyan">已完成 (12h 前)</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function AnalysisPage() {
    const [activeTab, setActiveTab] = useState("panorama");

    const tabs = [
        { id: "panorama", label: "技术全景", icon: GitGraph },
        { id: "talent", label: "合作与人才", icon: Network },
        { id: "rank", label: "排行与专题", icon: BarChart3 },
        { id: "rules", label: "规则发现", icon: Binary },
    ];

    return (
        <div className="flex flex-col h-full space-y-6 max-w-[1400px] mx-auto w-full">
            {/* 顶部控制栏 */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 glass-panel p-4 z-20">
                <div className="flex items-center gap-4">
                    <div className="relative group min-w-[240px]">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">分析领域:</span>
                        <select className="appearance-none w-full bg-black/20 hover:bg-black/40 border border-border/50 rounded-lg pl-16 pr-10 py-2.5 text-sm font-medium text-brand-cyan outline-none cursor-pointer transition-colors">
                            <option value="llm">大语言模型 (LLMs)</option>
                            <option value="semi">第三代半导体材料</option>
                            <option value="bio">合成生物学底层技术</option>
                        </select>
                        <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none group-hover:text-brand-cyan" />
                    </div>
                    <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground bg-white/5 hover:bg-white/10 border border-transparent hover:border-border/50 px-3 py-2.5 rounded-lg transition-all">
                        <ListFilter className="w-4 h-4" /> 深度过滤
                    </button>
                </div>

                <button className="flex items-center gap-2 text-sm bg-brand-blue/10 text-brand-cyan border border-brand-blue/20 hover:bg-brand-blue/20 px-4 py-2.5 rounded-lg transition-all shadow-inner font-medium">
                    <Download className="w-4 h-4" /> 导出分析洞察
                </button>
            </div>

            {/* 分析视图导航 Tab */}
            <div className="flex items-center gap-2 border-b border-border/50 pb-px">
                {tabs.map((tab) => {
                    const Icon = tab.icon;
                    const isActive = activeTab === tab.id;
                    return (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={clsx(
                                "flex items-center gap-2 px-6 py-3 text-sm font-medium transition-colors relative",
                                isActive ? "text-brand-cyan" : "text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-t-lg"
                            )}
                        >
                            <Icon className="w-4 h-4" />
                            {tab.label}
                            {isActive && (
                                <div className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-brand-cyan shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                            )}
                        </button>
                    );
                })}
            </div>

            {/* 视图内容区 */}
            <div className="flex-1 min-h-[500px] relative">
                {activeTab === "panorama" && <TechnologyPanorama />}
                {activeTab === "talent" && <CollaborationAndTalent />}
                {activeTab === "rank" && <RankAndTopic />}
                {activeTab === "rules" && <RuleDiscovery />}
            </div>
        </div>
    );
}
