"use client";

import { Search, SlidersHorizontal, ArrowDownWideNarrow } from "lucide-react";
import { FilterPanel } from "../components/search/FilterPanel";
import { AISummary } from "../components/search/AISummary";
import { SearchResultCard } from "../components/search/SearchResultCard";
import { mockPapers } from "../data/mock/papers";

export default function SearchPage() {
    return (
        <div className="flex flex-col h-full space-y-6">
            {/* 顶部大搜索框 */}
            <div className="relative max-w-3xl mx-auto w-full mb-6">
                <div className="relative group shadow-lg shadow-black/20 rounded-full">
                    <Search className="w-5 h-5 absolute left-5 top-1/2 -translate-y-1/2 text-brand-cyan" />
                    <input
                        type="text"
                        defaultValue="大语言模型 Language Models"
                        className="w-full h-14 bg-card border-2 border-brand-cyan/30 focus:border-brand-cyan rounded-full pl-14 pr-32 text-base text-foreground outline-none transition-all placeholder:text-muted-foreground/50 shadow-inner"
                    />
                    <button className="absolute right-2 top-1/2 -translate-y-1/2 h-10 px-6 bg-gradient-to-r from-brand-blue to-brand-cyan text-white text-sm font-medium rounded-full hover:shadow-md hover:shadow-brand-cyan/20 transition-all">
                        二次挖掘
                    </button>
                </div>

                {/* 搜索分类 Tab */}
                <div className="flex items-center justify-center gap-6 mt-4 text-sm font-medium">
                    <button className="text-brand-cyan border-b-2 border-brand-cyan pb-1 px-1">全库情报 (All)</button>
                    <button className="text-muted-foreground hover:text-foreground pb-1 px-1 transition-colors">论文文献 (Papers)</button>
                    <button className="text-muted-foreground hover:text-foreground pb-1 px-1 transition-colors">专利技术 (Patents)</button>
                    <button className="text-muted-foreground hover:text-foreground pb-1 px-1 transition-colors">专家学者 (Scholars)</button>
                </div>
            </div>

            <div className="flex items-start gap-8 flex-1">
                {/* 左侧过滤面板 */}
                <FilterPanel />

                {/* 右侧主内容区 */}
                <div className="flex-1 min-w-0 flex flex-col gap-4 pb-12">
                    {/* AI 综合摘要 */}
                    <AISummary />

                    {/* 结果列表控制栏 */}
                    <div className="flex items-center justify-between mb-2">
                        <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
                            检出结果 <span className="text-sm font-normal text-muted-foreground bg-white/5 px-2 py-0.5 rounded-full">约 15,204 条</span>
                        </h2>
                        <div className="flex items-center gap-4 text-sm">
                            <button className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors">
                                <SlidersHorizontal className="w-4 h-4" /> 高级筛选
                            </button>
                            <button className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors">
                                <ArrowDownWideNarrow className="w-4 h-4" /> 相关性排序
                            </button>
                        </div>
                    </div>

                    {/* 搜索结果卡片列表 */}
                    <div className="space-y-4">
                        {mockPapers.map((paper, index) => (
                            <SearchResultCard key={paper.id} data={paper} delay={index * 150} />
                        ))}

                        <div className="pt-6 pb-20 flex justify-center">
                            <button className="px-6 py-2 rounded-full border border-border text-sm font-medium text-foreground hover:bg-white/5 hover:border-brand-cyan/50 transition-all">
                                加载更多情报
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
