-- Migration: Blog Listing Page - All 4 Blog Cards
-- This migration adds CMS content for the main blog listing page with 4 blog post cards

-- Delete existing data for this page_id if it exists
DELETE FROM cms_content WHERE page_id = 'blog';

-- Insert blog listing page data with all 4 blog cards
INSERT INTO cms_content (page_id, content, created_at, updated_at)
VALUES (
  'blog',
  '{
    "pageHeader": {
      "mainHeading": "Insights for Your Growth",
      "subHeading": "Our perfect plan from our deep expertise in tech for your personal growth"
    },
    "blog1": {
      "category": "STRATEGY",
      "title": "The Death of Traditional SEO: What''s Next in 2025?",
      "excerpt": "Search engines are changing. AI overviews are taking over. Here is how your brand can survive the shift.",
      "author": "Gunn Malhotra",
      "date": "Oct 24, 2024",
      "readTime": "6 min read",
      "image": "https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?auto=format&fit=crop&q=80&w=1200",
      "slug": "seo-2025"
    },
    "blog2": {
      "category": "UX/UI DESIGN",
      "title": "Why Your Website Conversion Rate is Low (And How to Fix It)",
      "excerpt": "It''s not your traffic, it''s your funnel. We break down the 5 most common UX mistakes killing your sales.",
      "author": "Sarah Jenkins",
      "date": "Oct 20, 2024",
      "readTime": "8 min read",
      "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
      "slug": "conversion-rate-optimization"
    },
    "blog3": {
      "category": "PAID MEDIA",
      "title": "Maximizing ROAS on Meta Ads in a Post-Cookie World",
      "excerpt": "Targeting has become harder. Here are the first-party data strategies we use to get 4x returns for clients.",
      "author": "Mike Ross",
      "date": "Oct 15, 2024",
      "readTime": "5 min read",
      "image": "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1200",
      "slug": "roas-meta-ads"
    },
    "blog4": {
      "category": "BRANDING",
      "title": "Brand Storytelling: The Only Moat Left",
      "excerpt": "In an age of AI content, human connection is premium. Learn how to craft a narrative that resonates.",
      "author": "Gunn Malhotra",
      "date": "Oct 10, 2024",
      "readTime": "7 min read",
      "image": "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200",
      "slug": "brand-storytelling"
    }
  }'::jsonb,
  NOW(),
  NOW()
);

-- Verify insertion
SELECT page_id, content FROM cms_content WHERE page_id = 'blog';
