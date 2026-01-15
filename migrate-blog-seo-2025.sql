-- Migration: Blog Detail Page for SEO 2025
-- This migration adds content for the individual blog detail page "The Death of Traditional SEO: What's Next in 2025?"

-- Delete existing data for this page_id if it exists
DELETE FROM content WHERE page_id = 'blog-seo-2025';

-- Insert blog SEO 2025 detail page data
INSERT INTO content (page_id, content_data, created_at, updated_at)
VALUES (
  'blog-seo-2025',
  '{
    "hero": {
      "tagline": "STRATEGY",
      "heading": "The Death of Traditional SEO: What''s Next in 2025?",
      "author": "Gunn Malhotra",
      "date": "Oct 24, 2024",
      "readTime": "6 min read",
      "featuredImage": "https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?auto=format&fit=crop&q=80&w=1200"
    },
    "introduction": {
      "introParagraph": "The era of keyword stuffing and backlink farming is officially over. With the rise of AI Overview (formerly SGE) and Large Language Models, Google is no longer just a search engine—it''s an answer engine."
    },
    "section1": {
      "subheading": "The Shift to Entity-Based Search",
      "content": "Search algorithms now understand concepts, not just strings of text. If you want to rank in 2025, you need to establish topical authority. This means covering a subject in its entirety, linking related concepts, and ensuring your brand is recognized as an entity in the Knowledge Graph."
    },
    "section2": {
      "subheading": "Optimizing for AI Overviews",
      "content": "To get featured in AI snapshots, your content needs to be structured for direct answers. Use clear headings, bullet points, and schema markup. The goal is to be the source that the AI cites."
    },
    "dialogBox": {
      "quoteText": "\"Content that adds unique perspective, data, or experience (EEAT) will win. Generic AI-generated slop will be filtered out.\""
    },
    "section3": {
      "subheading": "Actionable Steps",
      "bullet1": "Audit your content for \"Experience\" - add personal anecdotes and case studies.",
      "bullet2": "Focus on long-tail, conversational queries that users ask voice assistants.",
      "bullet3": "Improve technical SEO: Core Web Vitals are non-negotiable.",
      "closingParagraph": "The future belongs to brands that build genuine authority, not just those that game the algorithm."
    },
    "cta": {
      "ctaHeading": "Enjoyed this article?",
      "ctaSubheading": "Subscribe to our newsletter for more insights on digital growth.",
      "buttonText": "Subscribe Now"
    }
  }'::jsonb,
  NOW(),
  NOW()
);

-- Verify insertion
SELECT page_id, content_data FROM content WHERE page_id = 'blog-seo-2025';
