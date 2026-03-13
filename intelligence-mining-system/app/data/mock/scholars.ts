import { Scholar } from "../types";

export const mockScholars: Scholar[] = [
    {
        id: "s1",
        name: "李建国",
        avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=Janguo",
        affiliation: "清华大学 计算机科学与技术系",
        title: "教授 / 博士生导师",
        tags: ["人工智能", "深度学习", "自然语言处理"],
        hIndex: 85,
        citationCount: 45210,
        paperCount: 320,
        patentCount: 45,
        collaboratorCount: 128
    },
    {
        id: "s2",
        name: "Sarah Chen",
        avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=Sarah",
        affiliation: "MIT CSAIL",
        title: "Professor",
        tags: ["Machine Learning", "Computer Vision", "Robotics"],
        hIndex: 92,
        citationCount: 68900,
        paperCount: 415,
        patentCount: 20,
        collaboratorCount: 205
    },
    {
        id: "s3",
        name: "王海洋",
        avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=Haiyang",
        affiliation: "中国科学院 自动化研究所",
        title: "研究员",
        tags: ["模式识别", "脑机接口", "类脑计算"],
        hIndex: 64,
        citationCount: 18500,
        paperCount: 180,
        patentCount: 68,
        collaboratorCount: 86
    }
];
