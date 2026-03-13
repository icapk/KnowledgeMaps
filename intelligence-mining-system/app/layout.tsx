import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppShell } from "./components/layout/AppShell";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "TIMS 科技情报挖掘系统",
  description: "国际科技信息中心 - 基于数据与知识双轮驱动的智能认知架构",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={`${inter.variable} dark`}>
      <body className="antialiased font-sans bg-background text-foreground">
        <AppShell>
          {children}
        </AppShell>
      </body>
    </html>
  );
}
