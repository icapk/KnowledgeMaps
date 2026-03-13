"use client";

import { CheckCircle2, FileJson, Share2, UploadCloud, MonitorCheck, Database, FileText } from "lucide-react";

export default function PublishingPage() {
    return (
        <div className="space-y-6 h-full flex flex-col animate-in fade-in fill-mode-both duration-500">
            <header className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-foreground">阶段五：成果发布与持续反哺</h1>
                    <p className="text-muted-foreground mt-1">开放图谱查询接口、数据集分享与科研工具生态社区</p>
                </div>
                <div className="flex gap-3">
                    <button className="px-4 py-2 bg-brand-blue text-white rounded-lg text-sm font-medium hover:bg-brand-blue/90 transition-colors flex items-center gap-2">
                        <UploadCloud className="w-4 h-4" /> 发布新资源
                    </button>
                    <button className="px-4 py-2 bg-white/5 border border-white/10 text-foreground rounded-lg text-sm font-medium hover:bg-white/10 transition-colors flex items-center gap-2">
                        <MonitorCheck className="w-4 h-4" /> 运营看板
                    </button>
                </div>
            </header>

            {/* 顶层数据资产大盘 */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="glass-panel p-5 relative overflow-hidden">
                    <div className="absolute -right-4 -top-4 w-20 h-20 bg-brand-cyan/20 blur-2xl rounded-full pointer-events-none" />
                    <p className="text-sm text-brand-cyan mb-1 font-semibold">开放 API 接口</p>
                    <div className="text-3xl font-bold text-foreground">142</div>
                    <div className="text-xs text-muted-foreground mt-2 flex items-center gap-1">
                        <span className="text-brand-green">↑ 12</span> 本月新增
                    </div>
                </div>
                <div className="glass-panel p-5 relative overflow-hidden">
                    <div className="absolute -right-4 -top-4 w-20 h-20 bg-brand-blue/20 blur-2xl rounded-full pointer-events-none" />
                    <p className="text-sm text-brand-blue mb-1 font-semibold">共享数据集</p>
                    <div className="text-3xl font-bold text-foreground">85</div>
                    <div className="text-xs text-muted-foreground mt-2 flex items-center gap-1">
                        <span className="text-brand-green">↑ 3</span> 本周上架
                    </div>
                </div>
                <div className="glass-panel p-5 relative overflow-hidden">
                    <div className="absolute -right-4 -top-4 w-20 h-20 bg-brand-purple/20 blur-2xl rounded-full pointer-events-none" />
                    <p className="text-sm text-brand-purple mb-1 font-semibold">开源计算模型</p>
                    <div className="text-3xl font-bold text-foreground">37</div>
                    <div className="text-xs text-muted-foreground mt-2 flex items-center gap-1">
                        <span className="text-muted-foreground">-</span> 无变化
                    </div>
                </div>
                <div className="glass-panel p-5 relative overflow-hidden">
                    <div className="absolute -right-4 -top-4 w-20 h-20 bg-amber-500/20 blur-2xl rounded-full pointer-events-none" />
                    <p className="text-sm text-amber-500 mb-1 font-semibold">本月 API 调用量</p>
                    <div className="text-3xl font-bold text-foreground">2.4<span className="text-lg text-muted-foreground ml-1">亿次</span></div>
                    <div className="text-xs text-muted-foreground mt-2 flex items-center gap-1">
                        <span className="text-brand-green">↑ 18%</span> 环比增长
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1 min-h-0">
                {/* 资源审批列表 */}
                <div className="lg:col-span-2 glass-panel p-6 flex flex-col">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-lg font-semibold border-b-2 border-brand-blue pb-1">科研产出发布审批</h2>
                        <div className="flex gap-4 text-sm font-medium">
                            <span className="text-foreground border-b border-foreground pb-1 cursor-pointer">待审核 (5)</span>
                            <span className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">已发布 (122)</span>
                            <span className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">被驳回 (12)</span>
                        </div>
                    </div>

                    <div className="flex-1 overflow-y-auto pr-2 space-y-4">
                        {[
                            { name: "2026年新能源汽车固态电池发展评估数据集", type: "数据集", user: "李教授", org: "哈工大", time: "10分钟前", status: "待人工审核" },
                            { name: "基于多模态检索的专利查重算法推断 API", type: "计算工具", user: "Tech Lab", org: "腾讯AI 实验室", time: "2小时前", status: "模型自动化合规检测中" },
                            { name: "CRISPR-Cas9 核心靶点三跳关系子图谱", type: "知识图谱", user: "BioMed_Dev", org: "个人开发者", time: "昨天", status: "待专家委员会确认" },
                        ].map((item, i) => (
                            <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-brand-blue/30 transition-colors flex items-start gap-4">
                                <div className={`p-3 rounded-xl ${item.type === '数据集' ? 'bg-brand-cyan/20 text-brand-cyan' :
                                        item.type === '计算工具' ? 'bg-brand-blue/20 text-brand-blue' :
                                            'bg-brand-purple/20 text-brand-purple'
                                    }`}>
                                    {item.type === '数据集' ? <Database className="w-5 h-5" /> :
                                        item.type === '计算工具' ? <FileJson className="w-5 h-5" /> :
                                            <Share2 className="w-5 h-5" />}
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-semibold text-sm text-foreground mb-1">{item.name}</h3>
                                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                                        <span className="px-2 py-0.5 bg-black/30 rounded">{item.type}</span>
                                        <span>贡献者: {item.user} ({item.org})</span>
                                        <span>提交于: {item.time}</span>
                                    </div>
                                    <p className="text-xs text-amber-500/80 bg-amber-500/10 px-2 py-1 flex inline-flex rounded-md border border-amber-500/20">
                                        状态: {item.status}
                                    </p>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <button className="px-3 py-1 bg-brand-blue/20 hover:bg-brand-blue/40 text-brand-blue rounded text-xs font-medium transition-colors">通过并上架</button>
                                    <button className="px-3 py-1 bg-white/5 hover:bg-white/10 text-muted-foreground rounded text-xs font-medium transition-colors">驳回修改</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 社区问答互动区 */}
                <div className="glass-panel p-6 flex flex-col">
                    <h2 className="text-lg font-semibold mb-6 flex items-center justify-between">
                        一线科研社区问答
                        <span className="text-xs text-brand-cyan hover:underline cursor-pointer">进入大厅 ↗</span>
                    </h2>

                    <div className="flex-1 space-y-4 overflow-y-auto pr-1">
                        {[
                            { title: "请问如何调用此平台的领域指代消解API？", tags: ["API调用", "NLP"], replies: 12, hot: true },
                            { title: "求某篇 Nature 最新材料学论文的高清附录图表解析数据", tags: ["数据求助", "材料学"], replies: 3, hot: false },
                            { title: "开源了我们的实体关系三元组抽取小模型！支持边缘侧部署", tags: ["模型分享", "知识图谱"], replies: 89, hot: true },
                            { title: "【吐槽】近日 arXiv 自动入库的数据似乎缺失了部分分类元数据", tags: ["系统反馈", "BUG修复"], replies: 1, hot: false },
                        ].map((thread, idx) => (
                            <div key={idx} className="p-4 bg-black/20 rounded-xl border border-white/5 cursor-pointer hover:bg-white/5 transition-colors">
                                <h3 className="text-sm font-medium text-foreground mb-2 leading-relaxed">
                                    {thread.hot && <span className="text-[10px] bg-red-500/20 text-red-400 px-1 py-0.5 rounded mr-2 font-bold">HOT</span>}
                                    {thread.title}
                                </h3>
                                <div className="flex items-center justify-between mt-2">
                                    <div className="flex gap-1.5">
                                        {thread.tags.map(tag => (
                                            <span key={tag} className="text-[10px] bg-white/5 text-muted-foreground px-1.5 py-0.5 rounded">{tag}</span>
                                        ))}
                                    </div>
                                    <span className="text-[10px] text-brand-blue bg-brand-blue/10 px-2 py-0.5 rounded-full">{thread.replies} 条讨论</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
