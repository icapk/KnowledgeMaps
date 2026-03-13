import { ReactNode } from "react";
import Link from "next/link";
import clsx from "clsx";
import { DownloadCloud, Filter, Network, Tags, Share2 } from "lucide-react";

export default function MiningLayout({ children }: { children: ReactNode }) {
    return (
        <div className="flex h-full gap-6">
            {/* 内部导航侧边栏 */}
            <aside className="w-64 glass-panel flex flex-col p-4 shrink-0 overflow-y-auto">
                <div className="mb-6 px-2">
                    <h2 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan">
                        科技情报挖掘
                    </h2>
                    <p className="text-xs text-muted-foreground mt-1">全生命周期管理</p>
                </div>

                <nav className="flex flex-col gap-2">
                    <NavItem
                        href="/mining/acquisition"
                        icon={<DownloadCloud className="w-4 h-4" />}
                        label="阶段一：情报发现与数据获取"
                        number="01"
                        isActive
                    />
                    <NavItem
                        href="/mining/cleaning"
                        icon={<Filter className="w-4 h-4" />}
                        label="阶段二：数据清洗与质量验证"
                        number="02"
                    />
                    <NavItem
                        href="/mining/extraction"
                        icon={<Network className="w-4 h-4" />}
                        label="阶段三：实体提取与关系构建"
                        number="03"
                    />
                    <NavItem
                        href="/mining/annotation"
                        icon={<Tags className="w-4 h-4" />}
                        label="阶段四：盲点抽取与语义标注"
                        number="04"
                    />
                    <NavItem
                        href="/mining/publishing"
                        icon={<Share2 className="w-4 h-4" />}
                        label="阶段五：成果发布与持续反哺"
                        number="05"
                    />
                </nav>
            </aside>

            {/* 内容区 */}
            <main className="flex-1 min-w-0">
                {children}
            </main>
        </div>
    );
}

// 提取的内部导航组件，此处伪代码先不根据路由高亮，统一用链接跳转体验，待后续可以结合 usePathname 处理
function NavItem({ href, icon, label, number, isActive = false }: { href: string, icon: ReactNode, label: string, number: string, isActive?: boolean }) {
    return (
        <Link
            href={href}
            className={clsx(
                "flex items-start gap-3 p-3 rounded-lg transition-all text-sm",
                "hover:bg-white/5 hover:text-foreground group cursor-pointer border border-transparent",
                isActive ? "bg-brand-blue/10 text-brand-cyan border-brand-blue/20" : "text-muted-foreground"
            )}
        >
            <div className="mt-0.5 opacity-60 font-mono text-xs">{number}</div>
            <div className="flex-1 flex flex-col gap-1">
                <div className="flex items-center gap-2 font-medium">
                    {icon}
                    <span className="leading-snug">{label}</span>
                </div>
            </div>
        </Link>
    );
}
