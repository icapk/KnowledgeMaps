"use client";

import { CheckCircle2, AlertTriangle, Layers, Type, Combine, Webhook, Settings2 } from "lucide-react";

export default function CleaningPage() {
    return (
        <div className="space-y-6 h-full flex flex-col animate-in fade-in fill-mode-both duration-500">
            <header className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-foreground">阶段二：数据清洗与质量验证</h1>
                    <p className="text-muted-foreground mt-1">跨语言翻译、多模态解析及 5000 万学者实体消歧处理</p>
                </div>
                <div className="flex gap-3">
                    <button className="px-4 py-2 bg-white/5 border border-white/10 text-foreground rounded-lg text-sm font-medium hover:bg-white/10 transition-colors flex items-center gap-2">
                        <Settings2 className="w-4 h-4" /> 清洗规则配置
                    </button>
                </div>
            </header>

            {/* Pipeline 可视化 */}
            <div className="glass-panel p-6">
                <h2 className="text-lg font-semibold mb-6">智能化预处理流水线 (Pipeline)</h2>
                <div className="flex items-center justify-between relative">
                    {/* 连接线 */}
                    <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/10 -translate-y-1/2 z-0" />

                    {[
                        { step: "信息智能筛选", icon: <FilterIcon />, status: "active", desc: "去重验证、乱码清洗", value: "过滤 1.2M 异常" },
                        { step: "跨语言自动翻译", icon: <Type className="w-5 h-5" />, status: "active", desc: "支持 40+ 语种对齐", value: "翻译 890K 篇" },
                        { step: "多模态解析", icon: <Layers className="w-5 h-5" />, status: "processing", desc: "图表/公式提取", value: "处理中 65%" },
                        { step: "实体消歧", icon: <Combine className="w-5 h-5" />, status: "pending", desc: "同名学者消歧", value: "等待处理" },
                        { step: "对齐入库", icon: <Webhook className="w-5 h-5" />, status: "pending", desc: "统一知识空间", value: "-" },
                    ].map((node, i) => (
                        <div key={i} className="relative z-10 flex flex-col items-center gap-3 w-40">
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border-2 shadow-xl ${node.status === 'active' ? 'bg-brand-blue/20 border-brand-blue text-brand-blue' :
                                    node.status === 'processing' ? 'bg-brand-cyan/20 border-brand-cyan text-brand-cyan shadow-brand-cyan/20 animate-pulse' :
                                        'bg-black/40 border-white/10 text-muted-foreground'
                                }`}>
                                {node.icon}
                            </div>
                            <div className="text-center">
                                <h3 className={`font-semibold text-sm ${node.status === 'pending' ? 'text-muted-foreground' : 'text-foreground'}`}>{node.step}</h3>
                                <p className="text-xs text-muted-foreground mt-1">{node.desc}</p>
                                <span className={`inline-block mt-2 text-[10px] px-2 py-0.5 rounded-full ${node.status === 'active' ? 'bg-brand-green/20 text-brand-green' :
                                        node.status === 'processing' ? 'bg-brand-cyan/20 text-brand-cyan' :
                                            'bg-white/5 text-muted-foreground'
                                    }`}>
                                    {node.value}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-1 min-h-0">
                {/* 消歧处理面板 */}
                <div className="glass-panel p-6 flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-semibold">学者消歧决策介入 (Human-in-the-Loop)</h2>
                        <span className="text-xs bg-orange-500/20 text-orange-400 px-2 py-1 rounded-full border border-orange-500/30 flex items-center gap-1">
                            <AlertTriangle className="w-3 h-3" /> 待人工确认 12 项
                        </span>
                    </div>
                    <div className="flex-1 overflow-y-auto pr-2 space-y-4">
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-brand-blue/50 transition-colors">
                                <div className="flex justify-between items-start mb-3">
                                    <div>
                                        <h3 className="font-semibold text-foreground text-sm flex items-center gap-2">
                                            学者: Wei Wang (王伟)
                                            <span className="bg-brand-purple/20 text-brand-purple text-[10px] px-2 rounded font-medium">相似度 85%</span>
                                        </h3>
                                        <p className="text-xs text-muted-foreground mt-1">发现两篇新采集论文，存在机构变动，请确认是否为同一实体。</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4 text-xs">
                                    <div className="p-3 bg-black/20 rounded-lg border border-brand-cyan/30">
                                        <div className="font-medium text-brand-cyan mb-2">已有实体档案 (ID: SCH-2891)</div>
                                        <p className="text-muted-foreground">机构: 清华大学计算机系</p>
                                        <p className="text-muted-foreground mt-1">领域: 深度学习, 知识图谱</p>
                                    </div>
                                    <div className="p-3 bg-black/20 rounded-lg border border-dashed border-white/20">
                                        <div className="font-medium text-amber-500 mb-2">新提取实体 (待定)</div>
                                        <p className="text-muted-foreground">机构: 麻省理工学院 CSAIL (疑似访学)</p>
                                        <p className="text-muted-foreground mt-1">领域: 图神经网络, 知识计算</p>
                                    </div>
                                </div>
                                <div className="mt-4 flex gap-2">
                                    <button className="flex-1 py-1.5 bg-brand-blue/20 hover:bg-brand-blue/30 text-brand-blue rounded-lg text-xs font-medium border border-brand-blue/30 transition-colors">确认关联合并</button>
                                    <button className="flex-1 py-1.5 bg-white/5 hover:bg-white/10 text-foreground rounded-lg text-xs font-medium border border-white/10 transition-colors">创建独立学者</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 数据质量报告 */}
                <div className="glass-panel p-6 flex flex-col">
                    <h2 className="text-lg font-semibold mb-6">实时数据质量监控</h2>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="p-4 bg-black/20 rounded-xl border border-white/5">
                            <div className="text-xs text-muted-foreground mb-2 flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-brand-green" /> 综合质量得分
                            </div>
                            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-brand-cyan">98.5</div>
                            <div className="text-xs text-brand-green mt-1">+0.2% 较上周</div>
                        </div>
                        <div className="p-4 bg-black/20 rounded-xl border border-white/5">
                            <div className="text-xs text-muted-foreground mb-2 flex items-center gap-2">
                                <Type className="w-4 h-4 text-brand-purple" /> 翻译对齐率
                            </div>
                            <div className="text-3xl font-bold text-foreground">99.1<span className="text-xl">%</span></div>
                            <div className="text-xs text-muted-foreground mt-1">覆盖 42 个语种</div>
                        </div>
                    </div>

                    <h3 className="text-sm font-medium text-muted-foreground mb-3">质量拦截拦截分布 (本周)</h3>
                    <div className="space-y-4 flex-1">
                        {[
                            { label: "标题/摘要缺失", count: "12,450", percent: 45, color: "bg-red-400" },
                            { label: "语义乱码 / 编码错误", count: "8,210", percent: 30, color: "bg-orange-400" },
                            { label: "极其低俗或无关广告", count: "4,105", percent: 15, color: "bg-amber-400" },
                            { label: "结构解析失败", count: "2,730", percent: 10, color: "bg-brand-cyan" },
                        ].map((item, idx) => (
                            <div key={idx}>
                                <div className="flex justify-between text-xs mb-1">
                                    <span className="text-foreground">{item.label}</span>
                                    <span className="text-muted-foreground">{item.count} 条</span>
                                </div>
                                <div className="w-full bg-black/30 h-2 rounded-full overflow-hidden">
                                    <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.percent}%` }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

function FilterIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
        </svg>
    );
}
