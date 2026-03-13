export interface Scholar {
  id: string;
  name: string;
  avatar: string;
  affiliation: string;
  title: string;
  tags: string[];
  hIndex: number;
  citationCount: number;
  paperCount: number;
  patentCount: number;
  collaboratorCount: number;
}

export interface Paper {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  abstract: string;
  citations: number;
  tags: string[];
}

export interface Patent {
  id: string;
  title: string;
  assignees: string[];
  inventors: string[];
  publicationDate: string;
  abstract: string;
  tags: string[];
}

export interface TrendData {
  year: string;
  value: number;
  category: string;
}

export interface GraphNode {
  id: string;
  name: string;
  value: number;
  category: number;
}

export interface GraphEdge {
  source: string;
  target: string;
}

export interface AnalysisRule {
  id: string;
  name: string;
  description: string;
  confidence: number;
  support: number;
  status: 'active' | 'learning' | 'inactive';
}
