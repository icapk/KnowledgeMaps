"use client";

import { useState } from "react";
import {
    Send, Bot, User, Sparkles, FileText,
    Settings2, Download, RefreshCw, FileImage, FileBarChart
} from "lucide-react";

export default function ReportGeneratorPage() {
    const [outline, setOutline] = useState([
        { id: 1, title: "1. 全球大框架模型发展态势", selected: true },
        { id: 2, title: "1.1 核心技术演进路径", selected: true },
        { id: 3, title: "1.2 主要国家研发布局分析", selected: true },
        { id: 4, title: "2. 关键创新主体评估", selected: true },
        { id: 5, title: "2.1 顶尖 AI 实验室竞争力对比", selected: true },
        { id: 6, title: "2.2 核心领军科学家画像扫描", selected: true },
        { id: 7, title: "3. 潜在技术突变预警", selected: true },
        { id: 8, title: "4. 发展策略与研判建议", selected: true },
    ]);

    const [chatHistory, setChatHistory] = useState([
        { role: "assistant", content: "您好，我是 TIMS 智能研究员。请输入您想要生成的报告主题或相关指令（例如：帮我生成一份关于“大语言模型发展演进”的深度洞察报告）。" }
    ]);

    const [inputVal, setInputVal] = useState("");
    const [isGenerating, setIsGenerating] = useState(false);

    const handleSend = () => {
        if (!inputVal.trim()) return;

        // 模拟对话发送
        setChatHistory(prev => [...prev, { role: "user", content: inputVal }]);
        setInputVal("");
        setIsGenerating(true);

        setTimeout(() => {
            setChatHistory(prev => [...prev, {
                role: "assistant",
                content: "收到，已为您在后台全域库（论文 3.2 亿、专利 1.1 亿）中检索“大语言模型发展演进”相关高信度数据，并提取了近三年突破性技术节点。已自动为您生成一份二级大纲（见右侧大纲流），请检查是否需要调整维度？如果确认无误，我将立即开始自动撰写内容正文及匹配可视化图表。"
            }]);
            setIsGenerating(false);
        }, 1500);
    };

    const toggleOutline = (id: number) => {
        setOutline(outline.map(item => item.id === id ? { ...item, selected: !item.selected } : item));
    };

    return (
        <div className="flex flex-col lg:flex-row gap-6 h-[calc(100vh-8rem)] min-h-[600px] w-full max-w-[1600px] mx-auto">

            {/* 聊天会话控制面板 (Agent) */}
            <div className="w-full lg:w-96 flex flex-col glass-panel animate-in fade-in slide-in-from-left-4 fill-mode-both">
                <div className="p-4 border-b border-border/50 flex items-center justify-between bg-card text-foreground">
                    <div className="flex items-center gap-2 font-semibold">
                        <Sparkles className="w-5 h-5 text-brand-purple" />
                        TIMS 智能研究员
                    </div>
                    <button className="text-muted-foreground hover:text-brand-cyan transition-colors" title="模型设置">
                        <Settings2 className="w-4 h-4" />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-6">
                    {chatHistory.map((msg, i) => (
                        <div key={i} className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === "user" ? "bg-white/10" : "bg-gradient-to-tr from-brand-purple to-brand-blue"
                                }`}>
                                {msg.role === "user" ? <User className="w-4 h-4 text-foreground" /> : <Bot className="w-4 h-4 text-white" />}
                            </div>
                            <div className={`p-3 rounded-2xl max-w-[85%] text-sm ${msg.role === "user"
                                    ? "bg-brand-blue/20 border border-brand-blue/30 text-foreground rounded-tr-sm"
                                    : "bg-black/20 border border-border/50 text-foreground/90 rounded-tl-sm leading-relaxed"
                                }`}>
                                {msg.content}
                            </div>
                        </div>
                    ))}
                    {isGenerating && (
                        <div className="flex gap-3 flex-row">
                            <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-gradient-to-tr from-brand-purple to-brand-blue">
                                <Bot className="w-4 h-4 text-white" />
                            </div>
                            <div className="flex gap-1 p-4 rounded-2xl bg-black/20 border border-border/50 rounded-tl-sm">
                                <div className="w-1.5 h-1.5 bg-brand-purple rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
                                <div className="w-1.5 h-1.5 bg-brand-blue rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
                                <div className="w-1.5 h-1.5 bg-brand-cyan rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
                            </div>
                        </div>
                    )}
                </div>

                <div className="p-4 border-t border-border/50 bg-card">
                    <div className="relative flex items-center">
                        <input
                            type="text"
                            value={inputVal}
                            onChange={(e) => setInputVal(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                            placeholder="发送生成指令..."
                            className="w-full bg-black/20 border border-border/50 focus:border-brand-purple focus:ring-1 focus:ring-brand-purple/50 rounded-xl px-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground disabled:opacity-50"
                            disabled={isGenerating}
                        />
                        <button
                            onClick={handleSend}
                            disabled={!inputVal.trim() || isGenerating}
                            className="absolute right-2 p-2 bg-brand-purple hover:bg-brand-purple/80 disabled:bg-muted disabled:text-muted-foreground text-white rounded-lg transition-colors group"
                        >
                            <Send className="w-4 h-4 group-disabled:opacity-50" />
                        </button>
                    </div>
                </div>
            </div>

            {/* 大纲编辑器区 */}
            <div className="w-full lg:w-[320px] flex flex-col glass-panel animate-in fade-in fill-mode-both" style={{ animationDelay: "100ms" }}>
                <div className="p-4 border-b border-border/50 flex justify-between items-center text-foreground font-semibold">
                    <div className="flex items-center gap-2">
                        <FileText className="w-5 h-5 text-brand-cyan" />
                        报告结构大纲
                    </div>
                    <button className="text-muted-foreground hover:text-foreground text-xs font-medium flex items-center gap-1">
                        <RefreshCw className="w-3 h-3" /> 重生大纲
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-2">
                    {outline.map((item) => {
                        const isSub = item.title.startsWith("1.") || item.title.startsWith("2.") || item.title.startsWith("3.") ? item.title.split(".").length > 2 : false;
                        return (
                            <div
                                key={item.id}
                                onClick={() => toggleOutline(item.id)}
                                className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-colors ${item.selected ? "bg-brand-cyan/10 border border-brand-cyan/20" : "bg-white/5 border border-transparent hover:bg-white/10"
                                    } ${isSub ? "ml-6" : ""}`}
                            >
                                <input
                                    type="checkbox"
                                    checked={item.selected}
                                    onChange={() => { }} // dummy onChange to prevent react warning, handled by parent div
                                    className="w-4 h-4 rounded-sm border-border bg-black/20 text-brand-cyan focus:ring-brand-cyan/30"
                                />
                                <span className={`text-sm ${item.selected ? "text-foreground font-medium" : "text-muted-foreground line-through decoration-muted-foreground/50"}`}>
                                    {item.title}
                                </span>
                            </div>
                        );
                    })}
                </div>

                <div className="p-4 border-t border-border/50 mt-auto">
                    <button className="w-full bg-brand-cyan hover:bg-brand-cyan/90 text-white shadow-lg shadow-brand-cyan/20 py-2.5 rounded-lg text-sm font-semibold transition-all flex justify-center items-center gap-2">
                        <Sparkles className="w-4 h-4" /> 一键生成并排版
                    </button>
                </div>
            </div>

            {/* 实时预览区 */}
            <div className="flex-1 flex flex-col glass-panel overflow-hidden animate-in fade-in slide-in-from-right-4 fill-mode-both" style={{ animationDelay: "200ms" }}>
                <div className="p-4 border-b border-border/50 flex justify-between items-center bg-card">
                    <div className="flex gap-4 items-center">
                        <span className="font-semibold text-foreground">实时报告预览</span>
                        <span className="text-xs text-muted-foreground border border-border/50 px-2 py-0.5 bg-black/20 rounded">格式: 智能研究报告模板 V2 (Word/PDF)</span>
                    </div>

                    <div className="flex gap-2">
                        <button className="flex items-center gap-1.5 px-3 py-1.5 border border-border/50 hover:bg-white/5 rounded-md text-sm font-medium text-muted-foreground transition-colors">
                            <FileImage className="w-4 h-4" /> 导出 PPT
                        </button>
                        <button className="flex items-center gap-1.5 px-3 py-1.5 bg-white text-black hover:bg-white/90 rounded-md text-sm font-semibold transition-colors">
                            <Download className="w-4 h-4 text-brand-blue" /> 下载 PDF
                        </button>
                    </div>
                </div>

                {/* 伪造的文档画布 */}
                <div className="flex-1 overflow-y-auto bg-black/5 p-4 lg:p-8 flex justify-center">
                    {/* 文档外边框阴影容器 */}
                    <div className="w-full max-w-[800px] bg-white min-h-[1000px] shadow-2xl rounded-sm p-12 text-black font-serif relative">
                        {/* 文档内容 */}
                        <div className="border-b border-gray-300 pb-8 mb-8">
                            <h1 className="text-3xl font-bold text-center mb-6 leading-tight">全球大语言模型发展演进与创新主体评估报告</h1>
                            <div className="flex justify-between items-end text-sm text-gray-500">
                                <div>
                                    <p>情报生成时间：2024年10月28日</p>
                                    <p>数据源：TIMS 亿级科技知识图谱引擎</p>
                                </div>
                                <p className="font-semibold text-brand-blue flex items-center gap-1">TIMS 生成 <Sparkles className="w-3 h-3" /></p>
                            </div>
                        </div>

                        <div className="space-y-6 prose prose-slate">
                            <h2 className="text-xl font-bold text-gray-900 border-l-4 border-brand-blue pl-3">1. 全球大框架模型发展态势</h2>
                            <p className="text-sm text-gray-700 leading-relaxed indent-8 text-justify">
                                近年来，大语言模型（LLMs）以其卓越的自然语言理解与生成能力，引发了人工智能领域的范式革命。从最初的统计语言模型到深度学习驱动的预训练模型，再到如今以规模化数据和庞大参数量为特征的生成式大模型，其核心技术演进呈现出加速迭代的显著趋势。
                            </p>

                            <h3 className="text-lg font-bold text-gray-900 mt-8 mb-4">1.1 核心技术演进路径</h3>
                            <div className="flex items-center gap-4 bg-gray-50 p-4 border border-gray-200 rounded-lg">
                                <div className="w-16 h-16 shrink-0 bg-blue-100 rounded-full flex items-center justify-center border-2 border-blue-200">
                                    <FileBarChart className="w-6 h-6 text-brand-blue" />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-gray-800 mb-1">【图表 1】大模型参数量与算力需求年度增长率测算散点图</p>
                                    <p className="text-xs text-gray-500 italic">基于平台实时计算的数据绘制，系统自动分析出指数级增长特征。</p>
                                </div>
                            </div>
                            <p className="text-sm text-gray-700 leading-relaxed indent-8 text-justify mt-4">
                                如上图所示，自从 Transformer 架构提出以来，模型参数量呈现明确的 scaling law 趋势，从亿级迈向万亿级别，算力消耗以年均十倍的速度跃升。
                            </p>

                            {/* 增加一个骨架屏表示 AI 正在继续生成的后续部分 */}
                            <div className="mt-12 space-y-4">
                                <div className="h-4 bg-gray-200 rounded w-1/3 animate-pulse"></div>
                                <div className="h-3 bg-gray-100 rounded w-full animate-pulse"></div>
                                <div className="h-3 bg-gray-100 rounded w-full animate-pulse"></div>
                                <div className="h-3 bg-gray-100 rounded w-5/6 animate-pulse"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
