"use client";

import { FileText, Lightbulb, Users, Rss, ArrowRight } from "lucide-react";
import { dashboardStats } from "./data/mock/dashboard";
import { StatCard } from "./components/dashboard/StatCard";
import { NewsFeed } from "./components/dashboard/NewsFeed";
import { AlertCards } from "./components/dashboard/AlertCards";

export default function Home() {
  return (
    <div className="space-y-6">
      {/* 顶部简报与主指标 */}
      <div className="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-5 gap-6">
        <StatCard
          title="文献库总量 (篇)"
          value={(dashboardStats.papers / 10000).toFixed(1) + "W"}
          trend={1.2}
          icon={<FileText className="w-5 h-5 text-brand-blue" />}
          colorClass="text-brand-blue"
          delay={0}
        />
        <StatCard
          title="专利库总量 (件)"
          value={(dashboardStats.patents / 10000).toFixed(1) + "W"}
          trend={0.8}
          icon={<Lightbulb className="w-5 h-5 text-brand-cyan" />}
          colorClass="text-brand-cyan"
          delay={100}
        />
        <StatCard
          title="学者画像总量 (人)"
          value={(dashboardStats.scholars / 10000).toFixed(1) + "W"}
          trend={3.5}
          icon={<Users className="w-5 h-5 text-brand-purple" />}
          colorClass="text-brand-purple"
          delay={200}
        />
        <StatCard
          title="科技资讯总量 (条)"
          value={(dashboardStats.news / 10000).toFixed(1) + "W"}
          trend={5.4}
          icon={<Rss className="w-5 h-5 text-brand-green" />}
          colorClass="text-brand-green"
          delay={300}
        />
        {/* 数据接入概览（占据第五列或单独展示） */}
        <div className="glass-panel p-5 hidden xl:flex flex-col justify-between animate-in fade-in slide-in-from-bottom-4 fill-mode-both" style={{ animationDelay: '400ms' }}>
          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-1">今日增量抽取</h3>
            <div className="text-3xl font-bold text-brand-cyan">+{dashboardStats.todayUpdates}</div>
          </div>
          <div className="space-y-2 mt-4">
            <div className="flex justify-between text-xs">
              <span className="text-muted-foreground">多模态解析率</span>
              <span className="text-brand-green">99.2%</span>
            </div>
            <div className="w-full bg-black/20 rounded-full h-1.5 overflow-hidden">
              <div className="bg-gradient-to-r from-brand-blue to-brand-green h-1.5 rounded-full w-[99.2%]" />
            </div>
          </div>
        </div>
      </div>

      {/* 占位图表区（由于没有安装 echarts 等组件，这里用精美的纯 CSS 占位） */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass-panel p-6 h-[350px] flex flex-col group animate-in fade-in fill-mode-both" style={{ animationDelay: '500ms' }}>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-foreground">发展态势与趋势分析</h3>
            <button className="text-xs flex items-center gap-1 text-muted-foreground hover:text-foreground">
              详情 <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="flex-1 bg-black/10 rounded-lg border border-white/5 flex items-center justify-center relative overflow-hidden">
            {/* 伪造一个数据图表的视觉效果 */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/10 to-transparent opacity-50"></div>
            <p className="text-muted-foreground text-sm z-10 font-medium tracking-wide">趋势河流图区域 (ThemeRiver Chart Placeholder)</p>
            {/* 装饰线条 */}
            <svg className="absolute inset-x-0 bottom-0 h-full w-full opacity-20" preserveAspectRatio="none" viewBox="0 0 100 100">
              <path d="M0,100 C20,80 40,90 60,60 C80,30 100,50 100,50 L100,100 Z" fill="url(#grad1)" />
              <path d="M0,100 C30,70 50,80 70,40 C90,10 100,20 100,20 L100,100 Z" fill="url(#grad2)" />
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="1" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#06b6d4" stopOpacity="1" />
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        <div className="glass-panel p-6 h-[350px] flex flex-col group animate-in fade-in fill-mode-both" style={{ animationDelay: '600ms' }}>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-foreground">技术热点分析</h3>
            <button className="text-xs flex items-center gap-1 text-muted-foreground hover:text-foreground">
              详情 <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="flex-1 bg-black/10 rounded-lg border border-white/5 flex items-center justify-center relative overflow-hidden p-6">
            {/* 伪造热词云的视觉效果 */}
            <div className="w-full h-full relative flex flex-wrap items-center justify-center gap-4 align-middle text-center">
              <span className="text-3xl font-bold text-brand-cyan opacity-90 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]">大语言模型</span>
              <span className="text-xl font-medium text-brand-purple opacity-80">具身智能</span>
              <span className="text-2xl font-bold text-brand-blue opacity-85">多模态融合</span>
              <span className="text-lg text-foreground opacity-70">合成生物学</span>
              <span className="text-sm text-brand-green opacity-90">固态电池</span>
              <span className="text-xl font-semibold text-orange-400 opacity-80">量子纠错</span>
              <span className="text-base text-muted-foreground">空间计算</span>
              <span className="text-2xl font-bold text-brand-cyan/70">Agent框架</span>
              <span className="text-[10px] text-muted-foreground/60 w-full mt-4 block">热点词云图区域 (WordCloud Chart Placeholder)</span>
            </div>
          </div>
        </div>
      </div>

      {/* 底部信息流与预警区 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <NewsFeed />
        <AlertCards />
      </div>
    </div>
  );
}
