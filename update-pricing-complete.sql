-- Complete Pricing Page Data Update
-- This script populates all 6 services with their 3 tiers each
-- Based on the pricing images provided

-- First, delete existing pricing data to start fresh
DELETE FROM page_content WHERE page_id = 'pricing';

-- Insert Page Header
INSERT INTO page_content (page_id, section_id, content_data)
VALUES (
  'pricing',
  'pageHeader',
  jsonb_build_object(
    'pageTitle', 'Pricing & Packages',
    'pageSubtitle', 'Scale Your Business Profits'
  )
);

-- ============================================
-- 1. PERSONAL BRANDING
-- ============================================
INSERT INTO page_content (page_id, section_id, content_data)
VALUES (
  'pricing',
  'personalBranding',
  jsonb_build_object(
    'serviceTitle', 'Personal Branding',
    'serviceSubtitle', 'Establish your authority and build a powerful online identity.',
    
    -- Tier 1: BASIC
    'tier1', jsonb_build_object(
      'name', 'BASIC',
      'tagline', 'Best for: Beginners, early-stage founders',
      'goal', 'GOAL: ESTABLISH A PRESENCE',
      'includes', '1 platform (LinkedIn or Instagram)
8 posts/month
Profile optimization
Content strategy + calendar
Monthly report',
      'pricingInIndia', '₹18,000 – ₹25,000 / month',
      'pricingInternational', '$250 – $350 / month',
      'note', '*Why: Entry pricing removes friction and lets clients "test" personal branding.',
      'popular', false
    ),
    
    -- Tier 2: STANDARD
    'tier2', jsonb_build_object(
      'name', 'STANDARD',
      'tagline', 'Best for: growing founders, consultants, startup leaders',
      'goal', 'GOAL: CONSISTENT REACH + FOLLOWER GROWTH',
      'includes', 'LinkedIn + Instagram
4 reels/month
Storytelling + repurposing
Monthly analytics
Pricing',
      'pricingInIndia', '₹40,000 – ₹60,000 / month',
      'pricingInternational', '$600 – $900 / month',
      'note', '*Why: Positioned as your best package — strong results without overwhelming the founder.',
      'popular', true
    ),
    
    -- Tier 3: PREMIUM
    'tier3', jsonb_build_object(
      'name', 'PREMIUM',
      'tagline', 'Best for: Public-facing founders, CEOs, creators',
      'goal', 'GOAL: DOMINATE YOUR NICHE',
      'includes', '2-3 platforms
20-30 posts/month
5-12 reels/month
Ghostwriting + automation
Weekly reviews + manager',
      'pricingInIndia', '₹90,000 – ₹1,50,000 / month',
      'pricingInternational', '$1,500 – $3,000 / month',
      'note', '*Why: Premium clients pay for speed, leverage, and authority, not just-on.',
      'popular', false
    )
  )
);

-- ============================================
-- 2. SOCIAL MEDIA GROWTH
-- ============================================
INSERT INTO page_content (page_id, section_id, content_data)
VALUES (
  'pricing',
  'socialMediaGrowth',
  jsonb_build_object(
    'serviceTitle', 'Social Media growth',
    'serviceSubtitle', 'Build engaged communities and drive meaningful connections.',
    
    -- Tier 1: BASIC
    'tier1', jsonb_build_object(
      'name', 'BASIC',
      'tagline', 'Best for: New brands / creators with low reach',
      'goal', 'GOAL: FIX CONSISTENCY + START ORGANIC REACH',
      'includes', 'Growth audit (profile, content, strategy)
Platform optimization
Posting schedule optimization
Organic engagement strategy
Hashtag + keyword research
Trend & format guidance
Monthly growth guidance',
      'pricingInIndia', '₹15,000 – ₹25,000 / month',
      'pricingInternational', '$200 – $350 / month',
      'note', '',
      'popular', false
    ),
    
    -- Tier 2: STANDARD
    'tier2', jsonb_build_object(
      'name', 'STANDARD',
      'tagline', 'Best for: Founders & brands ready to scale organically',
      'goal', 'GOAL: CONSISTENT REACH + FOLLOWER GROWTH',
      'includes', 'Everything in BASIC, plus:
Daily engagement actions
Real distribution strategy
Content amplification planning
DM (interaction, frequency)
Collaboration & shoutout planning
Weekly report (reach + engagement)',
      'pricingInIndia', '₹35,000 – ₹55,000 / month',
      'pricingInternational', '$500 – $800 / month',
      'note', '',
      'popular', true
    ),
    
    -- Tier 3: PREMIUM
    'tier3', jsonb_build_object(
      'name', 'PREMIUM',
      'tagline', 'Best for: High-visibility founders, creators, funded startups',
      'goal', 'GOAL: ACCELERATED GROWTH + DOMINANCE IN NICHE',
      'includes', 'Everything in STANDARD, plus:
Advanced distribution systems
Creator & influencer outreach
Trend hijacking (ethical)
High-volume engagement workflows
Automation (safe limits)
Community building strategy
Dedicated manager
Weekly reporting + growth calls',
      'pricingInIndia', '₹70,000 – ₹1,20,000 / month',
      'pricingInternational', '$1,200 – $2,500 / month',
      'note', '',
      'popular', false
    )
  )
);

-- ============================================
-- 3. WEBSITE DEVELOPMENT
-- ============================================
INSERT INTO page_content (page_id, section_id, content_data)
VALUES (
  'pricing',
  'websiteDevelopment',
  jsonb_build_object(
    'serviceTitle', 'Website Development',
    'serviceSubtitle', 'High-performance, conversion-driven digital assets built for speed.',
    
    -- Tier 1: WEBSITE BASIC
    'tier1', jsonb_build_object(
      'name', 'WEBSITE BASIC – Launch Ready',
      'tagline', 'Best for: Personal brands, solopreneurs, early startups',
      'goal', 'GOAL: ESTABLISH A CREDIBLE ONLINE PRESENCE THAT CONVERTS',
      'includes', '1-3 pages
Mobile-responsive design
Clean UI/UX
Copy guidance (basic)
Basic SEO structure
Speed optimization
Contact form + email support',
      'pricingInIndia', '₹40,000 – ₹60,000 (one-time)',
      'pricingInternational', '$700 – $1,200',
      'note', '',
      'popular', false
    ),
    
    -- Tier 2: STANDARD
    'tier2', jsonb_build_object(
      'name', 'STANDARD',
      'tagline', 'Best for: Startups, service businesses, funded founders',
      'goal', 'GOAL: DRIVE LEADS, CONVERSIONS & TRUST',
      'includes', 'Everything in BASIC, plus:
6-10 pages
Custom UI/UX
CMS integration
Conversion-focused copywriting
Blog / resources section
On-page SEO basics
Lead capture system',
      'pricingInIndia', '₹90,000 – ₹1,50,000',
      'pricingInternational', '$1,500 – $3,000',
      'note', '',
      'popular', true
    ),
    
    -- Tier 3: PREMIUM
    'tier3', jsonb_build_object(
      'name', 'PREMIUM',
      'tagline', 'Best for: SaaS, personal brands, enterprises',
      'goal', 'GOAL: HIGH-PERFORMANCE, CONVERSION-DRIVEN DIGITAL ASSET',
      'includes', 'Everything in STANDARD, plus:
Unlimited pages
Advanced animations & interactions
Custom dashboards / portals
Integrations (CRM, payment, APIs)
Security hardening
Performance optimization
Dedicated PM
30-day post-launch support',
      'pricingInIndia', '₹2,00,000 – ₹5,00,000+',
      'pricingInternational', '$4,000 – $10,000+',
      'note', '',
      'popular', false
    )
  )
);

-- ============================================
-- 4. APP DEVELOPMENT
-- ============================================
INSERT INTO page_content (page_id, section_id, content_data)
VALUES (
  'pricing',
  'appDevelopment',
  jsonb_build_object(
    'serviceTitle', 'App Development',
    'serviceSubtitle', 'Scalable mobile and web applications engineered for the future.',
    
    -- Tier 1: BASIC
    'tier1', jsonb_build_object(
      'name', 'BASIC',
      'tagline', 'Best for: Startup MVPs, internal tools',
      'goal', 'GOAL: LAUNCH FAST, VALIDATE IDEA',
      'includes', 'MVP planning
UI/UX wireframes
Core features only
Android or iOS
Backend integration
Basic testing',
      'pricingInIndia', '₹2,00,000 – ₹4,00,000',
      'pricingInternational', '$4,000 – $7,000',
      'note', '',
      'popular', false
    ),
    
    -- Tier 2: STANDARD
    'tier2', jsonb_build_object(
      'name', 'STANDARD',
      'tagline', 'Best for: Growing startups',
      'goal', 'GOAL: STABLE, SCALABLE APP',
      'includes', 'Everything in BASIC, plus:
Cross-platform (Flutter / React Native)
Authentication
Database + APIs
Admin dashboard
Push notifications
Analytics',
      'pricingInIndia', '₹5,00,000 – ₹10,00,000',
      'pricingInternational', '$8,000 – $15,000',
      'note', '',
      'popular', true
    ),
    
    -- Tier 3: PREMIUM
    'tier3', jsonb_build_object(
      'name', 'PREMIUM',
      'tagline', 'Best for: Funded startups, enterprises',
      'goal', 'GOAL: HIGH-SCALE, SECURE APPLICATION',
      'includes', 'Everything in STANDARD, plus:
Advanced architecture
Role-based access
Cloud deployment
Security audits
Load testing
Maintenance support',
      'pricingInIndia', '₹12,00,000 – ₹25,00,000+',
      'pricingInternational', '$20,000 – $50,000+',
      'note', '',
      'popular', false
    )
  )
);

-- ============================================
-- 5. SOCIAL MEDIA GROWTH AND DIGITAL MARKETING
-- ============================================
INSERT INTO page_content (page_id, section_id, content_data)
VALUES (
  'pricing',
  'growthMarketing',
  jsonb_build_object(
    'serviceTitle', 'Social Media Growth and digital marketing',
    'serviceSubtitle', 'Build predictable revenue and scale profitably with full-funnel marketing.',
    
    -- Tier 1: STARTER
    'tier1', jsonb_build_object(
      'name', 'STARTER',
      'tagline', 'Best for: Early-stage brands, local businesses, solopreneurs',
      'goal', 'GOAL: INCREASE REACH + AWARENESS WITH CONTROLLED SPEND',
      'includes', 'Social Media Growth
Profile & growth audit
Organic engagement strategy
Content distribution strategy
Community & DM strategy
Collaboration planning
Digital Marketing
Ad account setup (Meta or Google)
1 campaign (awareness)
Basic creatives (static)
Audience targeting (basic)
Budget monitoring
Weekly performance check',
      'pricingInIndia', '₹25,000 – ₹40,000 / month',
      'pricingInternational', '$350 – $600 / month',
      'note', '(Ad spend not included)',
      'popular', false
    ),
    
    -- Tier 2: GROWTH
    'tier2', jsonb_build_object(
      'name', 'GROWTH',
      'tagline', 'Best for: Startups, service businesses, D2C brands',
      'goal', 'GOAL: GENERATE LEADS, INQUIRIES, AND CONVERSIONS',
      'includes', 'Everything in BASIC, plus:
Social Media Growth
Daily engagement actions
Real-time trend monitoring
Community interactions
Influencer outreach
Digital Marketing
Funnel strategy (TOF + MOF + BOF)
Up to 3 ad campaigns
Ad copywriting
Creative variations (static + video)
Retargeting setup
Weekly performance check',
      'pricingInIndia', '₹60,000 – ₹1,00,000 / month',
      'pricingInternational', '$900 – $1,800 / month',
      'note', '(Ad spend not included)',
      'popular', true
    ),
    
    -- Tier 3: SCALE
    'tier3', jsonb_build_object(
      'name', 'SCALE',
      'tagline', 'Best for: Funded startups, high-growth brands, serious founders',
      'goal', 'GOAL: BUILD PREDICTABLE REVENUE & SCALE PROFITABLY',
      'includes', 'Everything in GROWTH, plus:
Advanced growth systems
Influencer & creator outreach
Community building
Automation (safe limits)
Digital Marketing
Full-funnel performance marketing
A/B testing (ads & landing page)
Conversion Rate Optimization (CRO)
Advanced retargeting
Marketing automation
Analytics / reporting
Dedicated account manager
Weekly reporting + strategy calls',
      'pricingInIndia', '₹1,50,000 – ₹3,00,000+ / month',
      'pricingInternational', '$2,500 – $6,000+ / month',
      'note', '(Ad spend not included)',
      'popular', false
    )
  )
);

-- ============================================
-- 6. MARKETING STRATEGY & EXECUTION PACKAGES
-- ============================================
INSERT INTO page_content (page_id, section_id, content_data)
VALUES (
  'pricing',
  'strategyExecution',
  jsonb_build_object(
    'serviceTitle', 'Marketing Strategy & Execution Packages',
    'serviceSubtitle', 'Clarify your direction and accelerate growth with high-level advisory.',
    
    -- Tier 1: STARTER
    'tier1', jsonb_build_object(
      'name', 'STARTER',
      'tagline', 'Best for: Early-stage startups, new brands, solopreneurs',
      'goal', 'GOAL: CLARIFY WHO TO TARGET, WHAT TO SAY, AND WHERE TO SHOW UP',
      'includes', 'Brand & market audit
ICP (Ideal Customer Profile) definition
Competitor analysis
Core messaging & positioning
Channel recommendations - organic + paid
Basic funnel outline
30-day marketing plan',
      'pricingInIndia', '₹25,000 – ₹40,000 (one-time or monthly)',
      'pricingInternational', '$400 – $700',
      'note', '*This is your main "thinking + planning" retainer.',
      'popular', false
    ),
    
    -- Tier 2: GROWTH
    'tier2', jsonb_build_object(
      'name', 'GROWTH',
      'tagline', 'Best for: Startups & service brands ready to grow',
      'goal', 'GOAL: CREATE CONSISTENT INBOUND LEADS & VISIBILITY',
      'includes', 'Everything in BASIC, plus:
Awareness + Conversion
Full-funnel strategy
Content marketing roadmap
Lead generation strategy
Platform-specific marketing plans
KPI tracking & reporting
Monthly strategic call',
      'pricingInIndia', '₹60,000 – ₹1,00,000 / month',
      'pricingInternational', '$1,000 – $2,000 / month',
      'note', '',
      'popular', true
    ),
    
    -- Tier 3: PREMIUM
    'tier3', jsonb_build_object(
      'name', 'PREMIUM',
      'tagline', 'Best for: Funded startups, scaling brands, serious founders',
      'goal', 'GOAL: OWN MARKETING DECISIONS, GROWTH DIRECTION & EXPERIMENTS',
      'includes', 'Everything in GROWTH, plus:
Go-To-Market (GTM) strategy
Revenue & growth forecasting
Multi-channel campaign orchestration
Conversion Rate Optimization (CRO)
A/B testing frameworks
Experimentation roadmap (CRO)
Leadership-level strategy calls
Dedicated marketing lead',
      'pricingInIndia', '₹1,50,000 – ₹3,00,000+ / month',
      'pricingInternational', '$3,000 – $6,000+ / month',
      'note', '*Premium clients pay for decisions, not deliverables.',
      'popular', false
    )
  )
);

-- Verify the data was inserted
SELECT 
  page_id,
  section_id,
  content_data->>'serviceTitle' as service_title,
  jsonb_object_keys(content_data) as keys
FROM page_content 
WHERE page_id = 'pricing'
ORDER BY section_id;
