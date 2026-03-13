"use client";

import { useState, useEffect } from "react";
import { Sparkles, Copy, ThumbsUp, ThumbsDown } from "lucide-react";

export function AISummary() {
    const fullText = "基于为您检索到的 15,204 篇文献，关于「大语言模型 (Large Language Models)」的核心观点总结如下：\n\n1. 基础架构演进：从早期的 RNN/CNN 转向以 Transformer 为基础的注意力机制，显著提升了并行计算能力与长文本表征。\n2. 范式转移：GPT-3 证明了在海量语料上预训练后，通过小样本（Few-Shot）或零样本（Zero-Shot）学习即可在下游任务取得优异表现。\n3. 当前热点：高效微调（LoRA）、与外部知识库结合（RAG）、多模态融合（图文音）、以及安全对齐（RLHF）是当前主要研究攻关方向。\n\n技术路线正在从单纯的规模扩张（Scaling Law）走向高质量数据筛选与推理结构优化（如 Self-Discover）。";
    const [displayedText, setDisplayedText] = useState("");
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        let i = 0;
        const typingInterval = setInterval(() => {
            setDisplayedText(fullText.substring(0, i));
            i++;
            if (i > fullText.length) {
                clearInterval(typingInterval);
                setIsTyping(false);
            }
        }, 20); // 打字速度

        return () => clearInterval(typingInterval);
    }, []);

    return (
        <div className="glass-panel p-6 border-brand-cyan/20 bg-gradient-to-br from-brand-cyan/5 to-transparent relative mb-8 animate-in fade-in slide-in-from-top-4 fill-mode-both">
            <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-brand-cyan hidden sm:block" />
                <h3 className="text-lg font-semibold text-foreground">AI 综合洞察</h3>
                {isTyping && (
                    <span className="flex h-3 w-3 ml-2 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-cyan"></span>
                    </span>
                )}
            </div>

            <div className="prose prose-sm dark:prose-invert max-w-none">
                <p className="text-foreground/90 leading-relaxed whitespace-pre-wrap font-medium">
                    {displayedText}
                    {isTyping && <span className="inline-block w-1.5 h-4 ml-1 bg-brand-cyan animate-pulse align-middle" />}
                </p>
            </div>

            {!isTyping && (
                <div className="flex items-center justify-end gap-2 mt-4 pt-4 border-t border-border/50 animate-in fade-in duration-500">
                    <button className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground px-2 py-1 rounded bg-white/5 hover:bg-white/10 transition-colors">
                        <Copy className="w-3.5 h-3.5" /> 复制摘要
                    </button>
                    <button className="p-1.5 text-muted-foreground hover:text-brand-green bg-white/5 hover:bg-white/10 rounded transition-colors">
                        <ThumbsUp className="w-3.5 h-3.5" />
                    </button>
                    <button className="p-1.5 text-muted-foreground hover:text-red-400 bg-white/5 hover:bg-white/10 rounded transition-colors">
                        <ThumbsDown className="w-3.5 h-3.5" />
                    </button>
                </div>
            )}
        </div>
    );
}
