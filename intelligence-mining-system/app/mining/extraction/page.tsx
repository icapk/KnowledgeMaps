"use client";

import { Share2, Network, GitGraph, FileSearch, ArrowRightCircle } from "lucide-react";

export default function ExtractionPage() {
    return (
        <div className="space-y-6 h-full flex flex-col animate-in fade-in fill-mode-both duration-500">
            <header className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-foreground">阶段三：实体提取与关系构建</h1>
                    <p className="text-muted-foreground mt-1">发掘科技实体间的合作网络、论文溯源及隐式知识关联</p>
                </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-1 min-h-0">
                {/* 复杂网络可视化 */}
                <div className="glass-panel p-6 flex flex-col group relative overflow-hidden">
                    <div className="flex items-center justify-between mb-4 z-10">
                        <h2 className="text-lg font-semibold flex items-center gap-2">
                            <Network className="w-5 h-5 text-brand-purple" />
                            合作网络与情报关系挖掘
                        </h2>
                        <div className="flex gap-2 text-xs">
                            <span className="px-2 py-1 bg-brand-blue/20 text-brand-blue rounded border border-brand-blue/30">学者关联</span>
                            <span className="px-2 py-1 bg-brand-cyan/20 text-brand-cyan rounded border border-brand-cyan/30">机构关联</span>
                            <span className="px-2 py-1 bg-brand-purple/20 text-brand-purple rounded border border-brand-purple/30">引用关联</span>
                        </div>
                    </div>

                    <div className="flex-1 bg-black/10 rounded-xl border border-white/5 flex items-center justify-center relative z-10">
                        {/* 伪造力导向图视觉 */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-60 pointer-events-none">
                            <svg width="100%" height="100%" viewBox="0 0 400 300">
                                {/* 连线 */}
                                <line x1="200" y1="150" x2="120" y2="80" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                                <line x1="200" y1="150" x2="280" y2="90" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                                <line x1="200" y1="150" x2="150" y2="230" stroke="rgba(59,130,246,0.4)" strokeWidth="2" />
                                <line x1="200" y1="150" x2="260" y2="220" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                                <line x1="120" y1="80" x2="60" y2="120" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                                <line x1="280" y1="90" x2="340" y2="100" stroke="rgba(168,85,247,0.4)" strokeWidth="2" />
                                <line x1="260" y1="220" x2="320" y2="250" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />

                                {/* 节点 */}
                                <circle cx="200" cy="150" r="18" fill="#3b82f6" /> {/* 中心节点 */}
                                <circle cx="120" cy="80" r="10" fill="#06b6d4" />
                                <circle cx="280" cy="90" r="12" fill="#a855f7" />
                                <circle cx="150" cy="230" r="14" fill="#10b981" />
                                <circle cx="260" cy="220" r="10" fill="#2dd4bf" />
                                <circle cx="60" cy="120" r="6" fill="rgba(255,255,255,0.5)" />
                                <circle cx="340" cy="100" r="8" fill="rgba(255,255,255,0.5)" />
                                <circle cx="320" cy="250" r="6" fill="rgba(255,255,255,0.5)" />

                                {/* 标签 */}
                                <text x="180" y="145" fill="white" fontSize="8" fontWeight="bold">核心文献</text>
                                <text x="100" y="75" fill="rgba(255,255,255,0.7)" fontSize="6">清华大学</text>
                                <text x="295" y="85" fill="rgba(255,255,255,0.7)" fontSize="6">DeepMind</text>
                                <text x="135" y="250" fill="rgba(255,255,255,0.7)" fontSize="6">关联学者A</text>
                            </svg>
                        </div>
                        <p className="text-muted-foreground/60 text-sm absolute bottom-4 border-b border-dashed border-muted-foreground/30 pb-1 cursor-pointer hover:text-foreground">
                            大规模复杂图关系交互分析 (Graph Interaction Preview)
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-6">
                    {/* 实体消歧与抽取统计 */}
                    <div className="glass-panel p-6">
                        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                            <GitGraph className="w-5 h-5 text-brand-blue" />
                            大规模实体知识图谱构建概览
                        </h2>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 bg-black/20 rounded-xl border border-white/5">
                                <div className="text-sm text-brand-blue font-semibold mb-1">实体总规模</div>
                                <div className="text-2xl font-bold text-foreground">5.2亿<span className="text-sm font-normal text-muted-foreground ml-1">个节点</span></div>
                                <div className="text-xs text-muted-foreground mt-2">涵盖学者/机构/出版物/技术/基金</div>
                            </div>
                            <div className="p-4 bg-black/20 rounded-xl border border-white/5">
                                <div className="text-sm text-brand-purple font-semibold mb-1">关系总规模</div>
                                <div className="text-2xl font-bold text-foreground">18.6亿<span className="text-sm font-normal text-muted-foreground ml-1">条边</span></div>
                                <div className="text-xs text-muted-foreground mt-2">支持 5跳 深层次图计算</div>
                            </div>
                        </div>
                    </div>

                    {/* 文献溯源分析 */}
                    <div className="glass-panel p-6 flex-1 flex flex-col">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-lg font-semibold flex items-center gap-2">
                                <FileSearch className="w-5 h-5 text-brand-cyan" />
                                论文溯源与脉络分析工具
                            </h2>
                            <button className="text-xs text-brand-cyan hover:underline flex items-center gap-1">
                                打开溯源沙盒 <ArrowRightCircle className="w-3 h-3" />
                            </button>
                        </div>
                        <div className="flex-1 space-y-3 overflow-y-auto pr-2">
                            {[
                                { title: "“Attention Is All You Need” 拓展技术演化", target: "Transformer", edgeCount: "125,430", time: "10分钟前" },
                                { title: "“CRISPR-Cas9 基因编辑” 引用前沿交叉", target: "合成生物学", edgeCount: "89,200", time: "2小时前" },
                                { title: "“固态电池电解质材料” 专利与论文双向推演", target: "新能源技术", edgeCount: "42,105", time: "昨天" },
                            ].map((item, i) => (
                                <div key={i} className="p-4 bg-white/5 border border-white/10 rounded-xl hover:border-brand-cyan/50 hover:bg-brand-cyan/5 transition-all cursor-pointer">
                                    <h3 className="text-sm font-semibold text-foreground mb-2 line-clamp-1">{item.title}</h3>
                                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                                        <span className="flex items-center gap-1">核心标的: <span className="text-brand-cyan font-medium">{item.target}</span></span>
                                        <span>分析触及: <span className="text-brand-purple">{item.edgeCount}</span> 节点</span>
                                        <span>{item.time}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
