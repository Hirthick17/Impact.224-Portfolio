-- Update Pricing page data with complete information for all 6 services
-- This ensures all pricing tiers are properly seeded in the database

-- Insert or update the pricing page data
INSERT INTO cms_content (page_id, content, created_at, updated_at)
VALUES (
    'pricing',
    jsonb_build_object(
        'pageHeader', jsonb_build_object(
            'pageTitle', 'Pricing & Packages',
            'pageSubtitle', 'Scale Your Business Profits'
        ),
        'personalBranding', jsonb_build_object(
            'serviceTitle', 'Personal Branding',
            'serviceSubtitle', 'Establish your authority and build a powerful online identity.',
            'tier1', jsonb_build_object(
                'name', 'BASIC',
                'tagline', 'Best for: Beginners, early-stage founders',
                'goal', 'GOAL: ESTABLISH A PRESENCE',
                'includes', E'LinkedIn & Instagram (2 platforms)\n8 posts/month\nProfile optimization\nContent strategy + calendar\nMonthly report',
                'pricingInIndia', '₹18,000–₹25,000/month',
                'pricingInternational', '$250–$350/month',
                'note', '*Why: Build a credible presence before you can play "fast" personal branding.',
                'popular', false
            ),
            'tier2', jsonb_build_object(
                'name', 'STANDARD',
                'tagline', 'Best for: Growing founders, startup leaders',
                'goal', 'GOAL: CONSISTENT REACH + FOLLOWERS GROWTH',
                'includes', E'LinkedIn + Instagram\n12–15 posts/month\n1 video/month\nStorytelling + repurposing\nMonthly analytics',
                'pricingInIndia', '₹40,000–₹60,000/month',
                'pricingInternational', '$600–$900/month',
                'note', '*Why: This is your sweet-spot package — serious results without over-investing.',
                'popular', true
            ),
            'tier3', jsonb_build_object(
                'name', 'PREMIUM',
                'tagline', 'Best for: Thought-leaders, founders, exec creators',
                'goal', 'GOAL: DOMINATE YOUR NICHE',
                'includes', E'3–4 platforms\n20–30 posts/month\n3–5 reels/shorts\nGhostwriting + automation\nWeekly reviews + manager',
                'pricingInIndia', '₹90,000–₹1,50,000/month',
                'pricingInternational', '$1,500–$3,000/month',
                'note', '*Why: Premium-level tools for people with strategy, and authority.',
                'popular', false
            )
        ),
        'socialMediaGrowth', jsonb_build_object(
            'serviceTitle', 'Social Media Growth',
            'serviceSubtitle', 'Build engaged communities and drive meaningful connections.',
            'tier1', jsonb_build_object(
                'name', 'BASIC',
                'tagline', 'Best for: New brands / creators with low-mid budgets',
                'goal', 'GOAL: TAX COMMITMENT + START ORGANIC REACH',
                'includes', E'Growth work\nPlatform optimization\nMonthly outreach optimization\nOrganic engagement strategy\nHashtag + keyword research\nTrend & format guidance',
                'pricingInIndia', '₹15,000–₹25,000/month',
                'pricingInternational', '$200–$350/month',
                'note', '*Why: Builds the foundation for organic growth.',
                'popular', false
            ),
            'tier2', jsonb_build_object(
                'name', 'STANDARD',
                'tagline', 'Best for: Founders & brands ready to scale with paid ads',
                'goal', 'GOAL: CONSISTENT REACH + FOLLOWERS GROWTH',
                'includes', E'Daily engagement outreach\nPaid/Organic strategy\nContent amplification planning\nAutomation framework\nCollaboration & influencer planning\nAutomation & batch monitoring',
                'pricingInIndia', '₹35,000–₹55,000/month',
                'pricingInternational', '$500–$800/month',
                'note', '*Why: Focuses on building real community connections.',
                'popular', true
            ),
            'tier3', jsonb_build_object(
                'name', 'PREMIUM',
                'tagline', 'Best for: Established founders',
                'goal', 'GOAL: ACCELERATE GROWTH + DOMINATE AT NICHE',
                'includes', E'Advanced distribution systems\nCreator & influencer outreach\nTrend hijacking (micro)\nHigh-volume engagement workflows\nAutomation (bots/APIs)\nPlatform expansion planning',
                'pricingInIndia', '₹70,000–₹1,20,000/month',
                'pricingInternational', '$1,200–$2,500/month',
                'note', '*Why: Maximum leverage for brands with high volume.',
                'popular', false
            )
        ),
        'websiteDevelopment', jsonb_build_object(
            'serviceTitle', 'Website Development',
            'serviceSubtitle', 'High-performance, conversion-driven digital assets built for speed.',
            'tier1', jsonb_build_object(
                'name', 'BASIC',
                'tagline', 'Best for: Tryout, brands, startups',
                'goal', 'GOAL: ESTABLISH A CAPABLE + TRUST ONLINE PRESENCE',
                'includes', E'1-3 page website\nMobile-responsive design\nClean UI/UX\nBasic SEO structure\nSpeed optimization\nDomain & hosting support',
                'pricingInIndia', '₹40,000–₹60,000 (one-time)',
                'pricingInternational', '$700–$1,200',
                'note', '*Why: Affordable for launching a professional online.',
                'popular', false
            ),
            'tier2', jsonb_build_object(
                'name', 'STANDARD',
                'tagline', 'Best for: Mid-size service businesses',
                'goal', 'GOAL: DRIVE LEADS, CONVERSIONS & TRUST',
                'includes', E'6+ pages\nCustom UI/UX\nCMS integration\nConversion-focused copywriting\nAnalytics (GA4)\nLead capture system',
                'pricingInIndia', '₹90,000–₹1,50,000',
                'pricingInternational', '$1,500–$3,000',
                'note', '*Why: Turns visitors into recurring customers.',
                'popular', true
            ),
            'tier3', jsonb_build_object(
                'name', 'PREMIUM',
                'tagline', 'Best for: SaaS, enterprise, high-growth brands',
                'goal', 'GOAL: HIGH-PERFORMANCE, SCALE-READY DIGITAL ASSET',
                'includes', E'Unlimited pages\nAdvanced animations\nCustom dashboards / portals\nIntegrations (CRM, payment, APIs)\nSecurity hardening\n30-day post-launch support',
                'pricingInIndia', '₹2,00,000–₹5,00,000+',
                'pricingInternational', '$4,000–$10,000+',
                'note', '*Why: Enterprise-grade speed and reliability.',
                'popular', false
            )
        ),
        'appDevelopment', jsonb_build_object(
            'serviceTitle', 'App Development',
            'serviceSubtitle', 'Scalable mobile and web applications engineered for the future.',
            'tier1', jsonb_build_object(
                'name', 'BASIC',
                'tagline', 'Best for: Startup MVPs, no-frills',
                'goal', 'GOAL: LAUNCH FAST, VALIDATE IDEA',
                'includes', E'MVP planning\nUI/UX wireframes\nCore features only\nAndroid or iOS\nBackend integration\nBasic testing',
                'pricingInIndia', '₹2,00,000–₹4,00,000',
                'pricingInternational', '$4,000–$7,000',
                'note', '*Why: Validates concepts with minimal spend.',
                'popular', false
            ),
            'tier2', jsonb_build_object(
                'name', 'STANDARD',
                'tagline', 'Best for: Growing startups',
                'goal', 'GOAL: STABLE, SCALABLE APP',
                'includes', E'Cross-platform (Flutter / React Native)\nAuthentication\nDatabase + APIs\nAdmin dashboard\nPush notifications\nAnalytics',
                'pricingInIndia', '₹5,00,000–₹10,00,000',
                'pricingInternational', '$8,000–$15,000',
                'note', '*Why: Built for actual users and scale.',
                'popular', true
            ),
            'tier3', jsonb_build_object(
                'name', 'PREMIUM',
                'tagline', 'Best for: Funded startups',
                'goal', 'GOAL: HIGH-SCALE, SECURE APPLICATION',
                'includes', E'Advanced architecture\nRole-based access\nCloud deployment\nSecurity audits\nLoad testing\nMaintenance support',
                'pricingInIndia', '₹12,00,000–₹25,00,000+',
                'pricingInternational', '$20,000–$50,000+',
                'note', '*Why: Zero-compromise on performance and security.',
                'popular', false
            )
        ),
        'growthMarketing', jsonb_build_object(
            'serviceTitle', 'Growth & Digital Marketing',
            'serviceSubtitle', 'Build predictable revenue and scale profitably with full-funnel marketing.',
            'tier1', jsonb_build_object(
                'name', 'STARTER',
                'tagline', 'Best for: Early-stage brands, solopreneurs',
                'goal', 'GOAL: INCREASE REACH + AWARENESS WITH CONTROLLED SPEND',
                'includes', E'Profile audit\nOrganic engagement\nMeta/Google Ad setup\n1 campaign (awareness)\nAudience targeting\nBudget monitoring',
                'pricingInIndia', '₹25,000–₹40,000/month',
                'pricingInternational', '$350–$600/month',
                'note', '*Why: Ideal for establishing a market foothold.',
                'popular', false
            ),
            'tier2', jsonb_build_object(
                'name', 'GROWTH',
                'tagline', 'Best for: Startups, D2C brands',
                'goal', 'GOAL: GENERATE LEADS, INQUIRIES, AND CONVERSIONS',
                'includes', E'Funnel strategy (TOF/MOF/BOF)\nUp to 3 ad campaigns\nAd copywriting\nCreative variations\nRetargeting setup\nWeekly performance check',
                'pricingInIndia', '₹60,000–₹1,00,000/month',
                'pricingInternational', '$900–$1,800/month',
                'note', '*Why: Engineered for scaling revenue profitably.',
                'popular', true
            ),
            'tier3', jsonb_build_object(
                'name', 'SCALE',
                'tagline', 'Best for: High-growth brands, serious founders',
                'goal', 'GOAL: BUILD PREDICTABLE REVENUE & SCALE PROFITABLY',
                'includes', E'Full-funnel performance marketing\nConversion Rate Optimization (CRO)\nAdvanced retargeting\nMarketing automation\nDedicated account manager',
                'pricingInIndia', '₹1,50,000–₹3,00,000+/month',
                'pricingInternational', '$2,500–$6,000+/month',
                'note', '*Why: Dominate the market with high-volume growth.',
                'popular', false
            )
        ),
        'strategyExecution', jsonb_build_object(
            'serviceTitle', 'Strategy & Execution',
            'serviceSubtitle', 'Clarify your direction and grow your growth with high-level advisory.',
            'tier1', jsonb_build_object(
                'name', 'STARTER',
                'tagline', 'Best for: Early-stage startups, new brands',
                'goal', 'GOAL: CLARIFY WHAT TO TARGET AND WHAT TO SAY',
                'includes', E'Brand & market audit\nICP definition\nCompetitor analysis\nCore messaging\n30-day marketing plan',
                'pricingInIndia', '₹25,000–₹40,000 (one-time)',
                'pricingInternational', '$400–$700',
                'note', '*Why: Builds trust and opens doors to resources.',
                'popular', false
            ),
            'tier2', jsonb_build_object(
                'name', 'GROWTH',
                'tagline', 'Best for: Startups & service brands ready to scale',
                'goal', 'GOAL: CREATE CONSISTENT INBOUND LEADS & VISIBILITY',
                'includes', E'Full-funnel strategy\nContent marketing roadmap\nLead generation strategy\nKPI tracking\nMonthly strategic call',
                'pricingInIndia', '₹60,000–₹1,00,000/month',
                'pricingInternational', '$1,000–$2,000/month',
                'note', '*Why: Our most "Wedding + planning" package.',
                'popular', true
            ),
            'tier3', jsonb_build_object(
                'name', 'PREMIUM',
                'tagline', 'Best for: Funded startups, scaling brands',
                'goal', 'GOAL: OWN MARKETING DECISIONS, GROWTH DIRECTION & EXPERIMENTS',
                'includes', E'Go-to-Market (GTM) strategy\nRevenue & growth forecasting\nMulti-channel orchestration\nWeekly growth experiments\nDedicated marketing lead',
                'pricingInIndia', '₹1,50,000–₹3,00,000+/month',
                'pricingInternational', '$3,000–$6,000+/month',
                'note', '*Why: Premium clients pay for dividends, not deliverables.',
                'popular', false
            )
        )
    ),
    NOW(),
    NOW()
)
ON CONFLICT (page_id) 
DO UPDATE SET 
    content = EXCLUDED.content,
    updated_at = NOW();

-- Verify the update
SELECT 
    page_id,
    content->'pageHeader' as page_header,
    jsonb_object_keys(content) as sections,
    updated_at
FROM cms_content
WHERE page_id = 'pricing';
