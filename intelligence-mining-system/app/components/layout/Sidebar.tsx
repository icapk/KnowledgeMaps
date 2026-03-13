"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import {
    ActivitySquare,
    Search,
    Network,
    UserCircle2,
    FileText,
    Settings,
    Database
} from "lucide-react";

const mainNavItems = [
    { href: "/", label: "情报概览", icon: ActivitySquare },
    { href: "/search", label: "文献检索中心", icon: Search },
    { href: "/analysis", label: "深度挖掘分析", icon: Network },
    { href: "/scholar/s1", label: "学者画像", icon: UserCircle2 },
    { href: "/report", label: "自动报告生成", icon: FileText },
    { href: "/mining/acquisition", label: "科技情报挖掘与知识服务", icon: Database }, // 新增这行
];

const secondaryNavItems = [
    { href: "#", label: "知识图谱引擎", icon: Database },
    { href: "#", label: "系统设置", icon: Settings },
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="w-64 h-screen border-r border-border bg-card/50 backdrop-blur-xl flex flex-col shrink-0">
            {/* 顶部 Logo 区 */}
            <div className="h-16 flex items-center px-6 border-b border-border/50">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-blue to-brand-cyan flex flex-items-center justify-center shadow-lg shadow-brand-blue/20">
                        <Network className="w-5 h-5 text-white m-auto" />
                    </div>
                    <span className="font-semibold text-lg tracking-wide text-foreground">TIMS 雷达</span>
                </div>
            </div>

            {/* 导航区 */}
            <div className="flex-1 overflow-y-auto py-6 px-4 flex flex-col gap-8">
                <div>
                    <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4 px-2">
                        核心洞察
                    </h4>
                    <nav className="flex flex-col gap-1">
                        {mainNavItems.map((item) => {
                            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                            const Icon = item.icon;

                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={clsx(
                                        "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors duration-200",
                                        isActive
                                            ? "bg-brand-blue/10 text-brand-cyan font-medium border border-brand-blue/20 shadow-inner"
                                            : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                                    )}
                                >
                                    <Icon className={clsx("w-5 h-5", isActive ? "text-brand-cyan" : "")} />
                                    {item.label}
                                </Link>
                            );
                        })}
                    </nav>
                </div>

                <div>
                    <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4 px-2">
                        支撑模块
                    </h4>
                    <nav className="flex flex-col gap-1">
                        {secondaryNavItems.map((item) => {
                            const Icon = item.icon;
                            return (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground transition-colors opacity-60"
                                    title="预留接口，暂未实现"
                                >
                                    <Icon className="w-5 h-5" />
                                    {item.label}
                                </Link>
                            );
                        })}
                    </nav>
                </div>
            </div>

            {/* 底部用户面板 */}
            <div className="p-4 border-t border-border/50">
                <div className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-white/5 cursor-pointer transition-colors">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-brand-purple to-brand-blue flex items-center justify-center text-white font-medium shadow-md">
                        AD
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground truncate">Admin User</p>
                        <p className="text-xs text-muted-foreground truncate">超级管理员</p>
                    </div>
                </div>
            </div>
        </aside>
    );
}
