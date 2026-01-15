-- Reset Pricing Data - Restore Clean Data from Reference Images
-- This script clears test data and inserts pristine pricing data for all 6 services

-- 1. Delete existing pricing data (including test data)
DELETE FROM cms_content WHERE page_id = 'pricing';

-- 2. Insert clean pricing data with nested tier structure
INSERT INTO cms_content (page_id, content)
VALUES ('pricing', '{
  "pageHeader": {
    "pageTitle": "PRICING & PACKAGES",
    "pageSubtitle": "SCALE YOUR BUSINESS PROFITS",
    "description": "TRANSPARENT PRICING FOR WORLD-CLASS DIGITAL EXECUTION. NO HIDDEN FEES, JUST ROI."
  },
  
  "personalBranding": {
    "serviceTitle": "PERSONAL BRANDING",
    "serviceSubtitle": "Establish your authority and build a powerful online identity.",
    "tier1": {
      "name": "BASIC",
      "tagline": "Best for: Beginners, early-stage founders",
      "goal": "GOAL: ESTABLISH A PRESENCE",
      "includes": "LinkedIn & Instagram (2 platforms)\n8 posts/month\nProfile optimization\nContent strategy + calendar\nMonthly report",
      "pricingInIndia": "₹18,000–₹25,000/month",
      "pricingInternational": "$250–$350/month",
      "note": "*Why: Build a credible presence before you can play ''fast'' at personal branding.",
      "popular": false
    },
    "tier2": {
      "name": "STANDARD",
      "tagline": "Best for: Growing founders, startup leaders",
      "goal": "GOAL: CONSISTENT REACH + FOLLOWERS GROWTH",
      "includes": "LinkedIn + Instagram\n12–15 posts/month\n1 video/month\nStorytelling + repurposing\nMonthly analytics",
      "pricingInIndia": "₹40,000–₹60,000/month",
      "pricingInternational": "$600–$900/month",
      "note": "*Why: This is your sweet-spot package — serious results without overinvesting yet becomes one.",
      "popular": true
    },
    "tier3": {
      "name": "PREM IUM",
      "tagline": "Best for: Thought-leaders, founders, exec creators",
      "goal": "GOAL: DOMINATE YOUR NICHE",
      "includes": "3–4 platforms\n20–30 posts/month\n3–5 reels/shorts\nGhostwriting + automation\nWeekly reviews + manager",
      "pricingInIndia": "₹90,000–₹1,50,000/month",
      "pricingInternational": "$1,500–$3,000/month",
      "note": "*Why: Premium-level tools for people with strategy, skin and authority.",
      "popular": false
    }
  },
  
  "socialMediaGrowth": {
    "serviceTitle": "SOCIAL MEDIA GROWTH",
    "serviceSubtitle": "Build engaged communities and drive meaningful connections.",
    "tier1": {
      "name": "BASIC",
      "tagline": "Best for: New brands / creators with limited budgets",
      "goal": "GOAL: NO CONSISTENCY + START ORGANIC REACH",
      "includes": "Profile audit\nOrganic optimization\nPosting schedule optimization\nContent repurposing/curation\nOrganic engagement strategy\nHashtag & keyword optimization\nTravel & format guidance",
      "pricingInIndia": "₹15,000–₹25,000/month",
      "pricingInternational": "$250–$400/month",
      "note": "*Why: Learn foundational structure for social",
      "popular": false
    },
    "tier2": {
      "name": "STANDARD",
      "tagline": "Best for: Accounts & brands ready to accelerate",
      "goal": "GOAL: CONSISTENT REACH + INFLUENCER GROWTH",
      "includes": "Daily engagement actions\nStory distribution strategy\nContent amplification planning\nReels + blog integration\nDM interaction framework\nCTA and conversion planning\nStandardized + reach monitoring",
      "pricingInIndia": "₹35,000–₹55,000/month",
      "pricingInternational": "$600–$850/month",
      "note": "*Why: This is where deep growth starts compounding",
      "popular": true
    },
    "tier3": {
      "name": "PREMIUM",
      "tagline": "Best for: Influencers/Thought-leaders/ founders who need scale",
      "goal": "GOAL: ACCELERATE GROWTH + DOMINATE NICHE",
      "includes": "Advanced distribution systems\nCreative + influencer networks\nTrend-hijacking (tactical)\nMulti-channel coordination\nHigh-volume engagement workflows\nAutomated funnel-building\nPlatform expansion planning",
      "pricingInIndia": "₹70,000–₹1,20,000/month",
      "pricingInternational": "$1,200–$2,000/month",
      "note": "*Why: Scale visibility without diminishing returns.",
      "popular": false
    }
  },
  
  "websiteDevelopment": {
    "serviceTitle": "WEBSITE DEVELOPMENT",
    "serviceSubtitle": "High-Performance, Conversion-Driven Digital Presence For Speed",
    "tier1": {
      "name": "BASIC",
      "tagline": "Best for: Startups & solopreneurs with budgets",
      "goal": "GOAL: ESTABLISH A CREDIBLE ONLINE PRESENCE",
      "includes": "1-5 page website\nMobile-responsive design\nClean UI/UX\nBasic copywriting\nSpeed optimization\nHosting & hosting support",
      "pricingInIndia": "₹40,000–₹1,90,000 [one-time]",
      "pricingInternational": "$700–$3,200",
      "note": "*Why: Essential for assembling a foundational digital home.",
      "popular": false
    },
    "tier2": {
      "name": "STANDARD",
      "tagline": "Best for: Startups, MSMEs building digital businesses",
      "goal": "GOAL: DRIVE LEADS, CONVERSIONS SUCCCESSFULLY",
      "includes": "6–20 pages\nCustom UI/UX\nCMS Integration\nOn-brand UI-focused copywriting\nAdvanced forms\nAnalytics (GA4)\nLead capture systems",
      "pricingInIndia": "₹90,000–₹3,50,000",
      "pricingInternational": "$1,500–$6,000",
      "note": "*Why: Scale without slow recurring performance.",
      "popular": true
    },
    "tier3": {
      "name": "PREMIUM",
      "tagline": "Best for: Scale enterprises, high-volume creators & agencies",
      "goal": "GOAL: HIGH-PERFORMANCE, COMPREHENSIVE CONVERSION DIGITAL",
      "includes": "Unlimited pages\nDynamic CMS / Headless\nCustom dashboards / portals\nIntegration-ready (CRM, payments, SPA)\nEnterprise hosting\nSecurity hardening\n90-day post-launch support",
      "pricingInIndia": "₹2,00,000–₹15,00,000+",
      "pricingInternational": "$4,000–$30,000+",
      "note": "*Why: Enterprise-grade solutions and peak customization.",
      "popular": false
    }
  },
  
  "appDevelopment": {
    "serviceTitle": "APP DEVELOPMENT",
    "serviceSubtitle": "Scalable Mobile And Web Applications Engineered For The Future",
    "tier1": {
      "name": "BASIC",
      "tagline": "Best for: MVP apps, internal prototypes",
      "goal": "GOAL: LAUNCH FAST, VALIDATE QUICKLY",
      "includes": "MVP planning\nUI/UX validation\nCore features only\nAndroid SDK\nBackend integration\nBasics testing",
      "pricingInIndia": "₹2,00,000–₹4,00,000",
      "pricingInternational": "$4,000–$7,000",
      "note": "*Why: Validate ideas affordably before scaling capital.",
      "popular": false
    },
    "tier2": {
      "name": "STANDARD",
      "tagline": "Best for: Startups building platforms",
      "goal": "GOAL: STABLE, SCALABLE APP",
      "includes": "CrossPlatform (Flutter / React Native)\nAuthentificationen\nDatabase + APIs\nAdmin dashboard\nPush notifications\nAnalytics",
      "pricingInIndia": "₹5,00,000–₹10,00,000",
      "pricingInternational": "$9,000–$18,000",
      "note": "*Why: Built for current users and scale.",
      "popular": true
    },
    "tier3": {
      "name": "PREMIUM",
      "tagline": "Best for: Funded startups, robust platforms",
      "goal": "GOAL: HIGH-SCALE, SECURE APPLICATIONS",
      "includes": "Advanced architecture\nEnterprise security\nCloud deployment\nScalability\niOS + Android\nExtensive testing\nPost-warranty support",
      "pricingInIndia": "₹12,00,000–₹25,00,000+",
      "pricingInternational": "$20,000–$60,000+",
      "note": "*Why: Best architecture for high-growth scenarios.",
      "popular": false
    }
  },
  
  "growthMarketing": {
    "serviceTitle": "GROWTH & DIGITAL MARKETING",
    "serviceSubtitle": "Data-Driven Systems For Predictable Revenue Compounding",
    "tier1": {
      "name": "STARTER",
      "tagline": "Best for: Early-stage brands building basics",
      "goal": "GOAL: INCREASE REACH + AWARENESS GENERATE DEMAND",
      "includes": "Profile audit\nOrganic strategies\nAd basics/low ad setup\nLanding/page+conversion\nGoal monitoring\nContinuous targeting",
      "pricingInIndia": "₹25,000–₹40,000/month",
      "pricingInternational": "$350–$600/month",
      "note": "*Why: Start with well-researched + tactical foundation.",
      "popular": false
    },
    "tier2": {
      "name": "GROWTH",
      "tagline": "Best for: Startups, SaaS, growing e-commerce",
      "goal": "GOAL: GENERATE LEADS, NURTURE, MAKE CONVERSIONS",
      "includes": "Funnel strategy (STEPHARD/LION)\nUp to 5 ad campaigns\nAd copywriting\nBasic retargeting\nWeekly analytics\nWeekly performance check",
      "pricingInIndia": "₹60,000–₹1,00,000/month",
      "pricingInternational": "$900–$1,600/month",
      "note": "*Why: Engineered for scaling revenue faster than costs.",
      "popular": true
    },
    "tier3": {
      "name": "SCALE",
      "tagline": "Best for: Enterprises/brands funding growth at scale",
      "goal": "GOAL: BUILD PREDICTABLE REVENUE AT SCALE DRIVING",
      "includes": "Full-suite performance marketing\nConversion Rate Optimization (CRO)\nMulti-channel automation\nMarketing automation\nDedicated account manager",
      "pricingInIndia": "₹1,50,000–₹3,00,000+/month",
      "pricingInternational": "$2,500–$6,000+/month",
      "note": "*Why: Enterprise-caliber tools for high-output growth.",
      "popular": false
    }
  },
  
  "strategyExecution": {
    "serviceTitle": "STRATEGY & EXECUTION",
    "serviceSubtitle": "High-Level Digital Strategy To Execution-Ready Brand",
    "tier1": {
      "name": "STARTER",
      "tagline": "Best for: Early-stage startups, new market entrants",
      "goal": "GOAL: IDENTIFY AND CLARIFY YOUR BRAND AND WHERE TO BEGIN",
      "includes": "Brand & market audit\nICP definition\nCompetition mapping\nCore messaging\n30-day action roadmap",
      "pricingInIndia": "₹25,000–₹40,000 [one-time]",
      "pricingInternational": "$400–$700",
      "note": "*Why: Build trust and analyze where to\n begin.",
      "popular": false
    },
    "tier2": {
      "name": "GROWTH",
      "tagline": "Best for: Teams ready to deploy systems-based execution",
      "goal": "GOAL: BUILD + CONSISTENT, SYSTEMS-DRIVEN LEADS & VISIBILITY",
      "includes": "Full-funnel strategy\nContent marketing roadmap\nLead generation strategy\nChannel prioritization\nKPI tracking\nQuarterly optimization call",
      "pricingInIndia": "₹60,000–₹1,00,000/month",
      "pricingInternational": "$1,000–$2,000/month",
      "note": "*Why: Educate + \"Wedding + planning.\"",
      "popular": true
    },
    "tier3": {
      "name": "PREMIUM",
      "tagline": "Best for: Funded startups, decision-makers who scale executions",
      "goal": "GOAL: WORLD-CLASS EXECUTION, INCLUDING TOOLS FOR STRATEGIC SCALE",
      "includes": "C-suite-OTDR strategy\nMulti-specialist coordination\nDigital + revenue forecasts\nAdvanced product/GTM frameworks\nWeekly growth experiments\nDedicated advisory\nTool & tech optimization",
      "pricingInIndia": "₹1,50,000–₹3,00,000+/month",
      "pricingInternational": "$3,000–$6,000+/month",
      "note": "*Why: Reserve where tools for decisions, not just execution.",
      "popular": false
    }
  }
}'::jsonb)
ON CONFLICT (page_id)
DO UPDATE SET
  content = EXCLUDED.content,
  updated_at = NOW();

-- Verify the insert
SELECT page_id, 
       content->>'pageHeader' as page_header,
       jsonb_object_keys(content) as sections
FROM cms_content
WHERE page_id = 'pricing';
