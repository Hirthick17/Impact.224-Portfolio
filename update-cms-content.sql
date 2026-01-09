-- SQL Script to Update CMS Content with Complete Default Data
-- Run this in your Supabase SQL Editor to populate all missing fields

-- Update Projects Page with Complete Data
UPDATE cms_content
SET content = '{
  "pageHeader": {
    "pageTitle": "OUR WORK",
    "pageSubtitle": "A COLLECTION OF PROJECTS THAT HAVE GENERATED MILLIONS IN REVENUE FOR OUR CLIENTS."
  },
  "project1": {
    "projectTitle": "FINTECH GLOBAL DASHBOARD",
    "headlineResultStat": "40% INCREASE IN RETENTION",
    "featuredImage": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    "clientName": "FINFLOW SYSTEMS",
    "projectDuration": "3 MONTHS",
    "theChallenge": "FinFlow''s legacy dashboard was sluggish and difficult to navigate, leading to a high churn rate among enterprise clients. They needed a complete overhaul of the UX/UI and a migration to a modern tech stack.",
    "theSolution": "We rebuilt the platform using Next.js for server-side rendering and Recharts for high-performance data visualization. We implemented a modular design system to ensure consistency and speed.",
    "results": "Reduced load time from 4.2s to 0.6s\nIncreased daily active users by 40%\nSecured Series B funding post-launch"
  },
  "project2": {
    "projectTitle": "NIKE SUMMER CAMPAIGN",
    "headlineResultStat": "3.5X ROAS",
    "featuredImage": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1200",
    "clientName": "NIKE REGIONAL",
    "projectDuration": "6 WEEKS",
    "theChallenge": "The goal was to clear seasonal inventory while maintaining brand prestige. Standard discount ads were not performing well with the target demographic.",
    "theSolution": "We launched a ''Limited Edition'' narrative campaign using high-energy video assets. We utilized lookalike audiences based on high-LTV customers and implemented a dynamic retargeting strategy.",
    "results": "Generated $1.2M in revenue\nAchieved a 3.5x Return on Ad Spend\nSold out inventory 2 weeks ahead of schedule"
  },
  "project3": {
    "projectTitle": "TECHTALKS DOCUSERIES",
    "headlineResultStat": "1M+ VIEWS ORGANIC",
    "featuredImage": "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1200",
    "clientName": "TECHTALKS MEDIA",
    "projectDuration": "ONGOING",
    "theChallenge": "TechTalks needed to pivot from long-form webinars to engaging social content to attract a younger audience.",
    "theSolution": "We repurposed their archival footage into punchy, 60-second vertical clips with kinetic typography and sound effects. We optimized hooks for TikTok and Instagram algorithms.",
    "results": "Grew Instagram following by 150k\n1M+ organic views across series\n45% increase in webinar signups from social"
  }
}'::jsonb,
updated_at = NOW()
WHERE page_id = 'projects';

-- Update Home Page with Complete Data
UPDATE cms_content
SET content = '{
  "hero": {
    "tagline": "Digital Growth Agency",
    "headline": "Stop Losing",
    "description": "We build high-performance websites and automated marketing systems that turn silent visitors into loyal customers.",
    "backgroundImage": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000"
  }
}'::jsonb,
updated_at = NOW()
WHERE page_id = 'home';

-- Update About Page with Complete Data
UPDATE cms_content
SET content = '{
  "pageHeader": {
    "pageTitle": "ABOUT IMPACT 224",
    "pageSubtitle": "We are a team of strategists, designers, and engineers who believe that digital presence should drive real business results."
  },
  "missionStatement": {
    "missionTitle": "Our Mission",
    "missionText": "To eliminate the gap between marketing spend and measurable revenue. We don''t do vanity metrics—we do growth."
  },
  "founderStory": {
    "founderName": "Gunn Malhotra",
    "founderRole": "Founder & CEO",
    "founderImage": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
    "founderBio": "After spending years in the agency world watching clients burn budgets on ineffective campaigns, I founded Impact 224 with one goal: build a performance-first agency that treats client revenue like our own."
  },
  "teamSection": {
    "teamTitle": "The Team",
    "teamDescription": "A collective of specialists who have worked with Fortune 500 brands and high-growth startups."
  }
}'::jsonb,
updated_at = NOW()
WHERE page_id = 'about';

-- Update Services Page with Complete Data
UPDATE cms_content
SET content = '{
  "pageHeader": {
    "pageTitle": "SERVICES BUILT FOR IMPACT",
    "pageSubtitle": "We don''t do cookie-cutter solutions. Every engagement is custom-tailored to your growth goals."
  }
}'::jsonb,
updated_at = NOW()
WHERE page_id = 'services';

-- Update Pricing Page with Complete Data
UPDATE cms_content
SET content = '{
  "pageHeader": {
    "pageTitle": "TRANSPARENT PRICING",
    "pageSubtitle": "No hidden fees. No surprise charges. Just clear, performance-based pricing."
  },
  "tier1": {
    "tierName": "STARTER",
    "tierPrice": "$2,500",
    "tierDuration": "/month",
    "tierDescription": "Perfect for startups and small businesses looking to establish their digital presence.",
    "tierFeatures": "Custom Website Design\nBasic SEO Setup\nMonthly Analytics Report\n2 Revision Rounds\nEmail Support"
  },
  "tier2": {
    "tierName": "GROWTH",
    "tierPrice": "$5,000",
    "tierDuration": "/month",
    "tierDescription": "For businesses ready to scale with data-driven marketing and advanced web solutions.",
    "tierFeatures": "Everything in Starter\nPaid Ad Management (Google/Meta)\nAdvanced SEO Strategy\nConversion Rate Optimization\nWeekly Performance Calls\nPriority Support"
  },
  "tier3": {
    "tierName": "ENTERPRISE",
    "tierPrice": "Custom",
    "tierDuration": "",
    "tierDescription": "Full-service digital transformation for established brands with aggressive growth targets.",
    "tierFeatures": "Everything in Growth\nDedicated Account Manager\nCustom Tech Stack Development\nMulti-Channel Attribution\nQuarterly Strategy Sessions\n24/7 Support"
  }
}'::jsonb,
updated_at = NOW()
WHERE page_id = 'pricing';

-- Update Blog Page with Complete Data
UPDATE cms_content
SET content = '{
  "pageHeader": {
    "pageTitle": "INSIGHTS & RESOURCES",
    "pageSubtitle": "Actionable strategies, case studies, and industry insights to help you grow."
  }
}'::jsonb,
updated_at = NOW()
WHERE page_id = 'blog';

-- Verify the updates
SELECT page_id, 
       jsonb_pretty(content) as formatted_content,
       updated_at
FROM cms_content
ORDER BY page_id;
