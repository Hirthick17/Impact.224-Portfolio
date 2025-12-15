import { LucideIcon } from "lucide-react";

export interface Project {
  id: number;
  slug: string;
  title: string;
  category: 'Website Development' | 'Digital Marketing' | 'Video Editing';
  image: string;
  stats: string;
  client: string;
  duration: string;
  challenge: string;
  solution: string;
  results: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  heroImage: string;
  problemTitle: string;
  problemDescription: string;
  solutionTitle: string;
  solutionDescription: string;
  features: string[];
  stats: { label: string; value: string }[];
  testimonial: Testimonial;
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  company?: string;
}

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  content: string; // HTML content
}

export type ColorTheme = 'yellow' | 'blue' | 'emerald' | 'rose';