-- SQL Migration: Service Detail Pages CMS Data
-- Run this in Supabase SQL Editor to populate service detail page data

-- Web Development Service
INSERT INTO cms_content (page_id, content, created_at, updated_at)
VALUES (
  'service-web-dev',
  '{
    "hero": {
      "title": "High-Performance Web Development",
      "subtitle": "We build digital experiences that load instantly and convert visitors into customers.",
      "heroImage": "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=1200"
    },
    "problem": {
      "problemTitle": "Is your website losing you money?",
      "problemDescription": "Most websites are slow, confusing, and unoptimized for mobile. In 2024, a 1-second delay in load time can result in a 7% reduction in conversions. If your site isn''t performing, your ads are burning cash."
    },
    "solution": {
      "solutionTitle": "Speed, SEO, and Scale.",
      "solutionDescription": "We don''t use drag-and-drop builders. We engineer custom React and Next.js applications that score 99/100 on Google PageSpeed. Our code is clean, semantic, and built for search engines first."
    },
    "features": {
      "feature1": "Next.js / React Architecture",
      "feature2": "Server-Side Rendering (SSR)",
      "feature3": "Headless CMS Integration",
      "feature4": "Advanced Animation & Micro-interactions"
    },
    "stats": {
      "stat1Label": "Avg Speed Score",
      "stat1Value": "99",
      "stat2Label": "Bounce Rate Reduction",
      "stat2Value": "40%",
      "stat3Label": "Conversion Uplift",
      "stat3Value": "2.5x"
    },
    "testimonial": {
      "quote": "Our previous site took 5 seconds to load. Impact 224 got it under 0.8s. Our bounce rate dropped overnight.",
      "author": "David Kim",
      "role": "CTO, FinTech Global"
    }
  }'::jsonb,
  NOW(),
  NOW()
)
ON CONFLICT (page_id) 
DO UPDATE SET 
  content = EXCLUDED.content,
  updated_at = NOW();

-- Digital Marketing Service
INSERT INTO cms_content (page_id, content, created_at, updated_at)
VALUES (
  'service-marketing',
  '{
    "hero": {
      "title": "Data-Driven Digital Marketing",
      "subtitle": "Stop guessing. Start scaling with precision-targeted campaigns.",
      "heroImage": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200"
    },
    "problem": {
      "problemTitle": "Are you burning ad budget?",
      "problemDescription": "Clicks are getting expensive. Without a robust data strategy, you are paying for traffic that never converts. Vanity metrics like \"likes\" don''t pay the bills."
    },
    "solution": {
      "solutionTitle": "ROAS-Focused User Acquisition.",
      "solutionDescription": "We build full-funnel marketing ecosystems. From high-intent Google Search ads to retargeting flows on Meta, we track every user touchpoint to ensure every dollar spent brings more dollars back."
    },
    "features": {
      "feature1": "Multi-Channel Attribution",
      "feature2": "A/B Creative Testing",
      "feature3": "Conversion Rate Optimization (CRO)",
      "feature4": "Automated Email Flows"
    },
    "stats": {
      "stat1Label": "Avg ROAS",
      "stat1Value": "4.2x",
      "stat2Label": "Leads Generated",
      "stat2Value": "50k+",
      "stat3Label": "CPA Reduction",
      "stat3Value": "35%"
    },
    "testimonial": {
      "quote": "They didn''t just run ads; they fixed our entire sales funnel. The ROI has been incredible.",
      "author": "Sarah Jenkins",
      "role": "Founder, StyleHub"
    }
  }'::jsonb,
  NOW(),
  NOW()
)
ON CONFLICT (page_id) 
DO UPDATE SET 
  content = EXCLUDED.content,
  updated_at = NOW();

-- Video Editing Service
INSERT INTO cms_content (page_id, content, created_at, updated_at)
VALUES (
  'service-video',
  '{
    "hero": {
      "title": "Visual Storytelling & Video",
      "subtitle": "Capture attention in the first 3 seconds with high-retention video content.",
      "heroImage": "https://images.unsplash.com/photo-1579632652768-6cb9dcf85912?auto=format&fit=crop&q=80&w=1200"
    },
    "problem": {
      "problemTitle": "Is your content being scrolled past?",
      "problemDescription": "Attention spans are shorter than ever. Generic corporate videos get ignored. To win on social, you need hooks, pacing, and narrative structure."
    },
    "solution": {
      "solutionTitle": "Edits that Retain.",
      "solutionDescription": "Our editors understand the psychology of attention. We use fast-paced cuts, motion graphics, and sound design to keep viewers glued to the screen from start to finish."
    },
    "features": {
      "feature1": "Short-Form (Reels/TikTok)",
      "feature2": "Corporate Docuseries",
      "feature3": "Motion Graphics",
      "feature4": "Sound Design & Mixing"
    },
    "stats": {
      "stat1Label": "Avg Retention",
      "stat1Value": "65%",
      "stat2Label": "Organic Views",
      "stat2Value": "2M+",
      "stat3Label": "Click-Through Rate",
      "stat3Value": "3.8%"
    },
    "testimonial": {
      "quote": "The visual quality is Hollywood-level, but the strategy is pure marketing genius.",
      "author": "Marcus Reed",
      "role": "CMO, TechStream"
    }
  }'::jsonb,
  NOW(),
  NOW()
)
ON CONFLICT (page_id) 
DO UPDATE SET 
  content = EXCLUDED.content,
  updated_at = NOW();

-- Verify the inserts
SELECT page_id, 
       jsonb_pretty(content) as formatted_content,
       updated_at
FROM cms_content
WHERE page_id IN ('service-web-dev', 'service-marketing', 'service-video')
ORDER BY page_id;
