"use client";

import { MessageSquarePlus, ActivitySquare, Check, X, Sparkles, Wand2 } from "lucide-react";

export default function AnnotationPage() {
    return (
        <div className="space-y-6 h-full flex flex-col animate-in fade-in fill-mode-both duration-500">
            <header className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-foreground">阶段四：盲点抽取与语义标注</h1>
                    <p className="text-muted-foreground mt-1">运用大模型思维链 (CoT) 自动提取核心领域词与关系，人机协同审核</p>
                </div>
                <div className="flex gap-3">
                    <button className="px-4 py-2 bg-brand-purple text-white rounded-lg text-sm font-medium hover:bg-brand-purple/90 transition-colors flex items-center gap-2 shadow-[0_0_15px_rgba(168,85,247,0.4)]">
                        <Wand2 className="w-4 h-4" /> 批量启动智能标注
                    </button>
                </div>
            </header>

            <div className="flex gap-6 flex-1 min-h-0">
                {/* 标注工作台左侧：原始文献 */}
                <div className="w-1/2 glass-panel p-6 flex flex-col">
                    <h2 className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wider flex items-center justify-between">
                        待清洗/待确认文本区
                        <span className="bg-white/10 text-xs px-2 py-1 rounded normal-case text-foreground">Doc ID: P-99124A</span>
                    </h2>
                    <div className="flex-1 bg-black/20 border border-white/5 rounded-xl p-6 overflow-y-auto leading-relaxed text-sm text-foreground/90 space-y-4">
                        <h1 className="text-xl font-bold text-foreground mb-4">大规模语言模型的上下文长度扩展：挑战与机遇</h1>
                        <p>
                            近年来，<span className="bg-amber-500/20 border-b border-amber-500 text-amber-200 px-1 rounded cursor-pointer hover:bg-amber-500/30">变压器架构 (Transformer)</span> 已经在自然语言处理领域取得了统治地位。然而，其自注意力机制的计算复杂度随着序列长度呈二次方增长，这严重限制了 <span className="bg-brand-blue/20 border-b border-brand-blue text-brand-blue px-1 rounded cursor-pointer hover:bg-brand-blue/30">大规模语言模型 (LLMs)</span> 处理超长文档或复杂代码库的能力。
                        </p>
                        <p>
                            为了解决这个问题，研究者们提出了多种方法，例如 <span className="bg-brand-cyan/20 border-b border-brand-cyan text-brand-cyan px-1 rounded cursor-pointer hover:bg-brand-cyan/30">稀疏注意力机制 (Sparse Attention)</span> 和 <span className="bg-brand-purple/20 border-b border-brand-purple text-brand-purple px-1 rounded cursor-pointer hover:bg-brand-purple/30">线性注意力机制 (Linear Attention)</span>，以降低计算复杂度。近期，结合 <span className="bg-green-500/20 border-b border-green-500 text-green-200 px-1 rounded cursor-pointer hover:bg-green-500/30">位置编码拓展 (RoPE Scaling)</span> 技术，诸如 Llama-3 已经能够支持长达 128K token 的上下文窗口。尽管取得了这些进展，但在实际的长上下文检索任务中，模型仍然频繁出现 <span className="bg-red-500/20 border-b border-red-500 text-red-200 px-1 rounded cursor-pointer hover:bg-red-500/30">迷失在中间 (Lost in the Middle)</span> 的现象...
                        </p>

                        <div className="my-8 p-4 border border-dashed border-white/20 rounded-lg text-center text-muted-foreground text-xs">
                            - 更多文本内容截断 -
                        </div>
                    </div>
                </div>

                {/* 标注工作台右侧：大模型抽取结果审核 */}
                <div className="flex-1 glass-panel p-6 flex flex-col">
                    <h2 className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wider flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-brand-cyan" /> LLM 智能抽取推荐 (需人工 Check)
                    </h2>

                    <div className="flex-1 overflow-y-auto pr-2 space-y-4">
                        {/* 抽取实体 1 */}
                        <div className="p-4 bg-white/5 border border-brand-blue/30 rounded-xl relative">
                            <div className="absolute top-4 right-4 flex gap-2">
                                <button className="p-1.5 bg-brand-green/20 hover:bg-brand-green/40 text-brand-green rounded-md transition-colors" title="通过"><Check className="w-4 h-4" /></button>
                                <button className="p-1.5 bg-red-500/20 hover:bg-red-500/40 text-red-400 rounded-md transition-colors" title="驳回"><X className="w-4 h-4" /></button>
                            </div>
                            <h3 className="text-sm font-semibold text-brand-blue mb-1">实体概念: 大规模语言模型 (LLMs)</h3>
                            <div className="text-xs text-muted-foreground mb-3">分类标签: 人工智能模型, 前沿技术</div>

                            <div className="p-3 bg-black/40 rounded-lg border border-white/5 text-xs text-foreground/80 leading-relaxed mb-3">
                                <strong>模型释义溯源: </strong>
                                大语言模型（Large Language Model），通常拥有数百亿乃至数千亿的参数，在海量文本上进行预训练。文中指出其核心挑战为处理超长文档。
                            </div>
                            <div className="flex items-center gap-2 text-xs">
                                <span className="text-muted-foreground">提取自信度:</span>
                                <div className="flex-1 h-1.5 bg-black/50 rounded-full overflow-hidden">
                                    <div className="h-full bg-brand-green w-[98%]" />
                                </div>
                                <span className="text-brand-green font-mono">98%</span>
                            </div>
                        </div>

                        {/* 抽取实体 2 */}
                        <div className="p-4 bg-white/5 border border-brand-cyan/30 rounded-xl relative">
                            <div className="absolute top-4 right-4 flex gap-2">
                                <button className="p-1.5 bg-brand-green/20 hover:bg-brand-green/40 text-brand-green rounded-md transition-colors"><Check className="w-4 h-4" /></button>
                                <button className="p-1.5 bg-red-500/20 hover:bg-red-500/40 text-red-400 rounded-md transition-colors"><X className="w-4 h-4" /></button>
                            </div>
                            <h3 className="text-sm font-semibold text-brand-cyan mb-1">技术难点/盲点: 迷失在中间 (Lost in the Middle)</h3>
                            <div className="text-xs text-muted-foreground mb-3">分类标签: 模型缺陷, 技术瓶颈</div>

                            <div className="p-3 bg-black/40 rounded-lg border border-white/5 text-xs text-foreground/80 flex items-start gap-2 mb-3">
                                <MessageSquarePlus className="w-4 h-4 text-brand-purple mt-0.5" />
                                <div>
                                    <strong>大模型思维链 (CoT) 分析: </strong><br />
                                    该现象由论文作者首次提出，指代模型在检索长文档序列时，主要依赖上下文开头和结尾的信息，处于中间的证据常常被模型忽略。标记为<strong>关键技术瓶颈点</strong>可以为后续“技术趋势预测”与“专题产业图谱”提供高价值情报节点。
                                </div>
                            </div>
                            <div className="flex items-center gap-2 text-xs">
                                <span className="text-muted-foreground">提取自信度:</span>
                                <div className="flex-1 h-1.5 bg-black/50 rounded-full overflow-hidden">
                                    <div className="h-full bg-brand-cyan w-[91%]" />
                                </div>
                                <span className="text-brand-cyan font-mono">91%</span>
                            </div>
                        </div>

                        {/* 抽出关系 */}
                        <div className="p-4 bg-amber-500/5 border border-amber-500/20 rounded-xl relative">
                            <div className="absolute top-4 right-4 flex gap-2">
                                <button className="p-1.5 bg-brand-green/20 hover:bg-brand-green/40 text-brand-green rounded-md transition-colors"><Check className="w-4 h-4" /></button>
                                <button className="p-1.5 bg-red-500/20 hover:bg-red-500/40 text-red-400 rounded-md transition-colors"><X className="w-4 h-4" /></button>
                            </div>
                            <h3 className="text-sm font-semibold text-amber-500 mb-1 flex items-center gap-2"><ActivitySquare className="w-4 h-4" /> 隐式关系识别</h3>
                            <div className="text-xs text-muted-foreground mb-3">类型: 解决方案组合</div>

                            <div className="flex items-center justify-between px-4 py-2 bg-black/40 rounded-lg border border-white/5 text-xs text-foreground">
                                <span className="font-medium px-2 py-1 bg-brand-cyan/20 text-brand-cyan rounded">稀疏注意力机制</span>
                                <span className="text-muted-foreground font-mono">---[技术互斥或互补？]--&gt;</span>
                                <span className="font-medium px-2 py-1 bg-green-500/20 text-green-300 rounded">位置编码拓展</span>
                            </div>

                            <p className="text-[11px] text-muted-foreground mt-3 px-1">
                                建议操作：请领域专家评估该关联边是否可入图谱数据库。
                            </p>
                        </div>

                    </div>

                    <div className="mt-4 pt-4 border-t border-white/10 flex justify-between items-center text-xs">
                        <span className="text-muted-foreground">批次完成进度: 14/150</span>
                        <div className="flex gap-2">
                            <button className="px-4 py-2 bg-white/5 hover:bg-white/10 transition-colors rounded-lg text-foreground font-medium">跳过本篇</button>
                            <button className="px-4 py-2 bg-brand-blue/20 text-brand-blue border border-brand-blue/30 hover:bg-brand-blue/30 transition-colors rounded-lg font-medium">全部批准入库</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
