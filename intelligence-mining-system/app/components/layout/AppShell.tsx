import { ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import { TopBar } from "./TopBar";

interface AppShellProps {
    children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
    return (
        <div className="flex h-screen overflow-hidden bg-background text-foreground">
            <Sidebar />
            <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
                {/* 全局背景环境光装饰 */}
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-brand-blue/10 blur-[120px] rounded-full pointer-events-none" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[40%] bg-brand-cyan/5 blur-[100px] rounded-full pointer-events-none" />

                <TopBar />
                <main className="flex-1 overflow-y-auto overflow-x-hidden relative z-10">
                    <div className="p-6 md:p-8 max-w-[1920px] mx-auto h-full space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
