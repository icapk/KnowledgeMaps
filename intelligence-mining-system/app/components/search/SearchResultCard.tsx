"use client";

import { Paper } from "../../data/mock/papers";
import { Quote, Star, Eye, ExternalLink, Sparkles } from "lucide-react";

interface Props {
    data: Paper;
    delay?: number;
}

export function SearchResultCard({ data, delay = 0 }: Props) {
    return (
        <div
            className="glass-panel p-5 group hover:border-brand-blue/30 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 fill-mode-both"
            style={{ animationDelay: `${delay}ms` }}
        >
            {/* 标题与操作栏 */}
            <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-semibold text-brand-cyan group-hover:text-brand-blue transition-colors cursor-pointer leading-snug pr-4">
                    <span dangerouslySetInnerHTML={{ __html: data.title.replace(/Language Models/g, '<span class="bg-brand-blue/20 text-brand-cyan px-1 rounded">Language Models</span>') }} />
                </h3>
                <div className="flex items-center gap-2 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-1.5 text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-md" title="收藏">
                        <Star className="w-4 h-4" />
                    </button>
                    <button className="p-1.5 text-muted-foreground hover:text-brand-blue hover:bg-brand-blue/10 rounded-md" title="一键翻译阅读">
                        <ExternalLink className="w-4 h-4" />
                    </button>
                </div>
            </div>

            {/* 作者与来源信息 */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-3 text-sm text-foreground/80">
                <div className="flex items-center gap-1.5 flex-wrap">
                    {data.authors.map((author, i) => (
                        <span key={i} className="hover:text-brand-cyan cursor-pointer transition-colors hover:underline decoration-brand-cyan/50 underline-offset-2">
                            {author}{i < data.authors.length - 1 ? "," : ""}
                        </span>
                    ))}
                </div>
                <div className="flex items-center gap-2 text-muted-foreground text-xs font-medium">
                    <span className="bg-white/5 border border-border px-2 py-0.5 rounded text-foreground/70">{data.venue}</span>
                    <span>{data.year}</span>
                </div>
            </div>

            {/* 摘要 */}
            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-4 group-hover:line-clamp-none transition-all duration-500">
                {data.abstract}
            </p>

            {/* 底部指标与标签 */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 flex-wrap">
                    {data.tags.map(tag => (
                        <span key={tag} className="text-xs px-2 py-1 rounded-md bg-accent text-muted-foreground border border-border/50">
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="flex items-center gap-4 text-xs font-medium text-muted-foreground">
                    <div className="flex items-center gap-1 cursor-pointer hover:text-brand-cyan transition-colors">
                        <Quote className="w-3.5 h-3.5" />
                        <span>引用 {data.citations.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Eye className="w-3.5 h-3.5" />
                        <span>阅读 9.4k</span>
                    </div>
                </div>
            </div>

            {/* 模拟AI速读标签 */}
            {data.citations > 10000 && (
                <div className="mt-4 pt-3 border-t border-border/50 flex items-start gap-2 bg-gradient-to-r from-brand-blue/5 to-transparent p-2 rounded-lg">
                    <Sparkles className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                    <p className="text-xs text-foreground/80">
                        <span className="font-semibold text-brand-cyan">AI 一句话总结：</span>
                        提出了破局性的 Transformer 架构，完全基于注意力机制，摒弃了传统的 RNN/CNN 结构，成为现代大模型语言的基础奠基之作。
                    </p>
                </div>
            )}
        </div>
    );
}
