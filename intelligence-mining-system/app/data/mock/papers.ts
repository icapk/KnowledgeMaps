import { Paper } from "../types";

export const mockPapers: Paper[] = [
    {
        id: "p1",
        title: "Attention Is All You Need",
        authors: ["Ashish Vaswani", "Noam Shazeer", "Niki Parmar", "Jakob Uszkoreit", "Llion Jones", "Aidan N. Gomez", "Lukasz Kaiser", "Illia Polosukhin"],
        venue: "NeurIPS",
        year: 2017,
        abstract: "The dominant sequence transduction models are based on complex recurrent or convolutional neural networks that include an encoder and a decoder. The best performing models also connect the encoder and decoder through an attention mechanism. We propose a new simple network architecture, the Transformer, based solely on attention mechanisms, dispensing with recurrence and convolutions entirely.",
        citations: 124500,
        tags: ["Natural Language Processing", "Deep Learning", "Transformer"]
    },
    {
        id: "p2",
        title: "Language Models are Few-Shot Learners",
        authors: ["Tom B. Brown", "Benjamin Mann", "Nick Ryder", "Melanie Subbiah", "Jared Kaplan", "Prafulla Dhariwal"],
        venue: "NeurIPS",
        year: 2020,
        abstract: "Recent work has demonstrated substantial gains on many NLP tasks and benchmarks by pre-training on a large corpus of text followed by fine-tuning on a specific task. While typically task-agnostic in architecture, this method still requires task-specific fine-tuning datasets of thousands or tens of thousands of examples. By contrast, humans can generally perform a new language task from only a few examples or from simple instructions.",
        citations: 45210,
        tags: ["Large Language Models", "Zero-shot Learning", "GPT-3"]
    },
    {
        id: "p3",
        title: "Self-Discover: Large Language Models Self-Compose Reasoning Structures",
        authors: ["Pei Ke", "Bosi Wen", "Zhuoer Feng", "Minlie Huang"],
        venue: "ArXiv",
        year: 2024,
        abstract: "We introduce SELF-DISCOVER, a general framework for Large Language Models (LLMs) to self-discover the task-intrinsic reasoning structures to tackle complex reasoning problems that are challenging for typical prompting methods.",
        citations: 85,
        tags: ["LLM", "Reasoning", "Prompt Engineering"]
    }
];
