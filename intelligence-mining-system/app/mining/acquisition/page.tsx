"use client";

import { FileText, Database, Globe, Search, Plus, Save, Clock } from "lucide-react";

export default function AcquisitionPage() {
    return (
        <div className="space-y-6 h-full flex flex-col animate-in fade-in fill-mode-both duration-500">
            <header className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-foreground">阶段一：情报发现与数据获取</h1>
                    <p className="text-muted-foreground mt-1">规范化汇聚论文、专利、互联网资讯等海量科技文献</p>
                </div>
                <div className="flex gap-3">
                    <button className="px-4 py-2 bg-brand-blue text-white rounded-lg text-sm font-medium hover:bg-brand-blue/90 transition-colors flex items-center gap-2">
                        <Plus className="w-4 h-4" /> 新建采集任务
                    </button>
                </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatCard title="论文文献库" value="3.1" unit="亿篇" icon={<FileText className="w-5 h-5 text-brand-blue" />} />
                <StatCard title="专利文献库" value="1.2" unit="亿篇" icon={<Database className="w-5 h-5 text-brand-cyan" />} />
                <StatCard title="网络科技资讯" value="256" unit="万篇" icon={<Globe className="w-5 h-5 text-brand-purple" />} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1 min-h-0">
                {/* 采集中台列表 */}
                <div className="lg:col-span-2 glass-panel p-6 flex flex-col">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-lg font-semibold">自动化定时采集中台</h2>
                        <div className="relative">
                            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                            <input
                                type="text"
                                placeholder="搜索采集任务..."
                                className="pl-9 pr-4 py-1.5 bg-black/20 border border-white/10 rounded-full text-sm focus:outline-none focus:border-brand-blue/50 w-64"
                            />
                        </div>
                    </div>

                    <div className="flex-1 overflow-y-auto pr-2 space-y-4">
                        {[
                            { name: "arXiv 计算机科学论文全量拉取", type: "论文", status: "运行中", time: "10 分钟前", progress: 68 },
                            { name: "WIPO 全球专利每周增量同步", type: "专利", status: "已完成", time: "2 小时前", progress: 100 },
                            { name: "AMiner 学者高引论文补充入库", type: "文献", status: "运行中", time: "1 小时前", progress: 45 },
                            { name: "TechCrunch 头条科技新闻采集", type: "资讯", status: "运行中", time: "5 分钟前", progress: 89 },
                            { name: "Nature 往期子刊历史数据回溯", type: "论文", status: "等待中", time: "-", progress: 0 },
                        ].map((task, i) => (
                            <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between gap-4 hover:bg-white/10 transition-colors">
                                <div className="flex items-center gap-4 flex-1">
                                    <div className={`p-2 rounded-lg ${task.type === '论文' ? 'bg-brand-blue/20 text-brand-blue' :
                                            task.type === '专利' ? 'bg-brand-cyan/20 text-brand-cyan' :
                                                'bg-brand-purple/20 text-brand-purple'
                                        }`}>
                                        {task.type === '论文' ? <FileText className="w-4 h-4" /> :
                                            task.type === '专利' ? <Database className="w-4 h-4" /> :
                                                <Globe className="w-4 h-4" />}
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-sm text-foreground">{task.name}</h3>
                                        <div className="flex flex-items-center gap-3 mt-1 text-xs text-muted-foreground">
                                            <span>类型: {task.type}</span>
                                            <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {task.time}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-32">
                                    <div className="flex justify-between text-xs mb-1">
                                        <span className={task.status === '运行中' ? 'text-brand-cyan' : task.status === '已完成' ? 'text-brand-green' : 'text-muted-foreground'}>
                                            {task.status}
                                        </span>
                                        <span className="text-muted-foreground">{task.progress}%</span>
                                    </div>
                                    <div className="w-full h-1.5 bg-black/30 rounded-full overflow-hidden">
                                        <div
                                            className={`h-full rounded-full ${task.progress === 100 ? 'bg-brand-green' : 'bg-brand-cyan'}`}
                                            style={{ width: `${task.progress}%` }}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 手动录入区 */}
                <div className="glass-panel p-6 flex flex-col">
                    <h2 className="text-lg font-semibold mb-6">自有数据结构化录入</h2>
                    <div className="flex-1 space-y-4">
                        <div className="space-y-1.5">
                            <label className="text-xs font-medium text-muted-foreground">标题 / Title</label>
                            <input type="text" className="w-full bg-black/20 border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-brand-blue/50" placeholder="输入文献标题" />
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-xs font-medium text-muted-foreground">作者 / Authors (逗号分隔)</label>
                            <input type="text" className="w-full bg-black/20 border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-brand-blue/50" placeholder="例如: 张三, 李四" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                                <label className="text-xs font-medium text-muted-foreground">DOI</label>
                                <input type="text" className="w-full bg-black/20 border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-brand-blue/50" placeholder="10.1000/xyz123" />
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-xs font-medium text-muted-foreground">发表年份</label>
                                <input type="text" className="w-full bg-black/20 border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-brand-blue/50" placeholder="例如: 2026" />
                            </div>
                        </div>
                        <div className="space-y-1.5 flex-1">
                            <label className="text-xs font-medium text-muted-foreground">摘要概览 / Abstract</label>
                            <textarea className="w-full h-32 bg-black/20 border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-brand-blue/50 resize-none" placeholder="输入科技文献摘要概览..." />
                        </div>
                    </div>
                    <div className="pt-4 border-t border-white/10 flex justify-end">
                        <button className="px-4 py-2 bg-white/10 text-foreground rounded-lg text-sm font-medium hover:bg-white/20 transition-colors flex items-center gap-2">
                            <Save className="w-4 h-4" /> 保存并对齐入库
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function StatCard({ title, value, unit, icon }: { title: string, value: string, unit: string, icon: React.ReactNode }) {
    return (
        <div className="glass-panel p-5 flex items-center gap-4 border-l-4 border-l-brand-blue">
            <div className="p-3 rounded-xl bg-white/5 border border-white/5 shadow-inner">
                {icon}
            </div>
            <div>
                <p className="text-sm text-muted-foreground mb-1 font-medium">{title}</p>
                <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-foreground">{value}</span>
                    <span className="text-sm font-medium text-muted-foreground">{unit}</span>
                </div>
            </div>
        </div>
    );
}
