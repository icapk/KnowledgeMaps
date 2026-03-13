"use client";

import { Bell, Search, Menu } from "lucide-react";
import { usePathname } from "next/navigation";

function getPageInfo(pathname: string) {
    if (pathname === "/") return { title: "情报概览", subtitle: "全域科技态势与实时监控" };
    if (pathname.startsWith("/search")) return { title: "文献检索中心", subtitle: "一站式全库精准检索与协同推荐" };
    if (pathname.startsWith("/analysis")) return { title: "深度挖掘分析", subtitle: "多维图谱与技术演化路径追踪" };
    if (pathname.startsWith("/scholar")) return { title: "学者画像", subtitle: "高精度人才画像与学术网络" };
    if (pathname.startsWith("/report")) return { title: "自动报告生成", subtitle: "AI驱动的专题情报自动提炼" };
    return { title: "科技情报挖掘", subtitle: "TIMS 平台" };
}

export function TopBar() {
    const pathname = usePathname();
    const { title, subtitle } = getPageInfo(pathname);

    return (
        <header className="h-16 flex items-center justify-between px-6 border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-30">
            <div className="flex items-center gap-4">
                <button className="p-2 -ml-2 text-muted-foreground hover:text-foreground md:hidden">
                    <Menu className="w-5 h-5" />
                </button>
                <div>
                    <h1 className="text-lg font-semibold text-foreground leading-tight tracking-tight">
                        {title}
                    </h1>
                    <p className="text-xs text-muted-foreground font-medium">{subtitle}</p>
                </div>
            </div>

            <div className="flex items-center gap-6">
                {/* 全局搜索占位 */}
                <div className="hidden md:flex relative group">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-brand-cyan transition-colors" />
                    <input
                        type="text"
                        placeholder="全文智能搜索 (论文/专利/学者)..."
                        className="w-80 h-9 bg-accent/50 hover:bg-accent/80 focus:bg-accent border border-border/50 focus:border-brand-cyan/50 focus:ring-1 focus:ring-brand-cyan/50 rounded-full pl-9 pr-4 text-sm outline-none transition-all placeholder:text-muted-foreground/70"
                    />
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                        <kbd className="px-1.5 py-0.5 rounded text-[10px] bg-background border border-border text-muted-foreground font-sans">⌘K</kbd>
                    </div>
                </div>

                {/* 顶部工具 */}
                <div className="flex items-center gap-3">
                    <button className="relative p-2 text-muted-foreground hover:text-foreground transition-colors hover:bg-accent rounded-full">
                        <Bell className="w-5 h-5" />
                        <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500 border-2 border-background"></span>
                    </button>
                </div>
            </div>
        </header>
    );
}
