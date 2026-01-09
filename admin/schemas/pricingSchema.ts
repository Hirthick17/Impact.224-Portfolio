import { CMSPageSchema, PricingPageData, PricingTierData, ServicePricingData } from '../types';

// Helper function to create tier fields
const createTierFields = (tierNumber: number, tierName: string) => [
    { name: `tier${tierNumber}Name`, type: 'text' as const, label: `${tierName} - Tier Name`, placeholder: 'BASIC' },
    { name: `tier${tierNumber}Tagline`, type: 'text' as const, label: `${tierName} - Tagline`, placeholder: 'Best for: Beginners, early-stage founders' },
    { name: `tier${tierNumber}Goal`, type: 'text' as const, label: `${tierName} - Goal`, placeholder: 'GOAL: ESTABLISH A PRESENCE' },
    { name: `tier${tierNumber}Includes`, type: 'html' as const, label: `${tierName} - Features (New Line Each)`, placeholder: 'Feature 1\nFeature 2\nFeature 3' },
    { name: `tier${tierNumber}PricingInIndia`, type: 'text' as const, label: `${tierName} - Pricing (India)`, placeholder: '₹18,000–₹25,000/month' },
    { name: `tier${tierNumber}PricingInternational`, type: 'text' as const, label: `${tierName} - Pricing (International)`, placeholder: '$250–$350/month' },
    { name: `tier${tierNumber}Note`, type: 'text' as const, label: `${tierName} - Note`, placeholder: '*Why: Build a credible presence...' },
    { name: `tier${tierNumber}Popular`, type: 'text' as const, label: `${tierName} - Popular Badge`, placeholder: 'true or false' },
];

export const pricingSchema: CMSPageSchema = {
    pageId: 'pricing',
    pageName: 'Pricing Engine',
    sections: [
        {
            id: 'pageHeader',
            title: 'Page Header',
            icon: 'document',
            fields: [
                { name: 'pageTitle', type: 'text', label: 'Page Title', placeholder: 'Pricing & Packages' },
                { name: 'pageSubtitle', type: 'text', label: 'Page Subtitle', placeholder: 'Scale Your Business Profits' },
            ],
        },

        // 1. Personal Branding
        {
            id: 'personalBranding',
            title: '1. Personal Branding',
            icon: 'users',
            fields: [
                { name: 'serviceTitle', type: 'text', label: 'Service Title', placeholder: 'Personal Branding' },
                { name: 'serviceSubtitle', type: 'text', label: 'Service Subtitle', placeholder: 'Establish your authority and build a powerful online identity.' },
                ...createTierFields(1, 'Tier 1'),
                ...createTierFields(2, 'Tier 2'),
                ...createTierFields(3, 'Tier 3'),
            ],
        },

        // 2. Social Media Growth
        {
            id: 'socialMediaGrowth',
            title: '2. Social Media Growth',
            icon: 'chart',
            fields: [
                { name: 'serviceTitle', type: 'text', label: 'Service Title', placeholder: 'Social Media Growth' },
                { name: 'serviceSubtitle', type: 'text', label: 'Service Subtitle', placeholder: 'Build engaged communities and drive meaningful connections.' },
                ...createTierFields(1, 'Tier 1'),
                ...createTierFields(2, 'Tier 2'),
                ...createTierFields(3, 'Tier 3'),
            ],
        },

        // 3. Website Development
        {
            id: 'websiteDevelopment',
            title: '3. Website Development',
            icon: 'target',
            fields: [
                { name: 'serviceTitle', type: 'text', label: 'Service Title', placeholder: 'Website Development' },
                { name: 'serviceSubtitle', type: 'text', label: 'Service Subtitle', placeholder: 'High-performance, conversion-driven digital assets built for speed.' },
                ...createTierFields(1, 'Tier 1'),
                ...createTierFields(2, 'Tier 2'),
                ...createTierFields(3, 'Tier 3'),
            ],
        },

        // 4. App Development
        {
            id: 'appDevelopment',
            title: '4. App Development',
            icon: 'target',
            fields: [
                { name: 'serviceTitle', type: 'text', label: 'Service Title', placeholder: 'App Development' },
                { name: 'serviceSubtitle', type: 'text', label: 'Service Subtitle', placeholder: 'Scalable mobile and web applications engineered for the future.' },
                ...createTierFields(1, 'Tier 1'),
                ...createTierFields(2, 'Tier 2'),
                ...createTierFields(3, 'Tier 3'),
            ],
        },

        // 5. Growth & Digital Marketing
        {
            id: 'growthMarketing',
            title: '5. Growth & Digital Marketing',
            icon: 'chart',
            fields: [
                { name: 'serviceTitle', type: 'text', label: 'Service Title', placeholder: 'Growth & Digital Marketing' },
                { name: 'serviceSubtitle', type: 'text', label: 'Service Subtitle', placeholder: 'Build predictable revenue and scale profitably with full-funnel marketing.' },
                ...createTierFields(1, 'Tier 1'),
                ...createTierFields(2, 'Tier 2'),
                ...createTierFields(3, 'Tier 3'),
            ],
        },

        // 6. Strategy & Execution
        {
            id: 'strategyExecution',
            title: '6. Strategy & Execution',
            icon: 'target',
            fields: [
                { name: 'serviceTitle', type: 'text', label: 'Service Title', placeholder: 'Strategy & Execution' },
                { name: 'serviceSubtitle', type: 'text', label: 'Service Subtitle', placeholder: 'Clarify your direction and grow your growth with high-level advisory.' },
                ...createTierFields(1, 'Tier 1'),
                ...createTierFields(2, 'Tier 2'),
                ...createTierFields(3, 'Tier 3'),
            ],
        },
    ],
};

// Helper to create tier data
const createTierData = (
    name: string,
    tagline: string,
    goal: string,
    includes: string,
    pricingInIndia: string,
    pricingInternational: string,
    note: string,
    popular: boolean = false
): PricingTierData => ({
    name,
    tagline,
    goal,
    includes,
    pricingInIndia,
    pricingInternational,
    note,
    popular,
});

// Helper to create service data
const createServiceData = (
    serviceTitle: string,
    serviceSubtitle: string,
    tier1: PricingTierData,
    tier2: PricingTierData,
    tier3: PricingTierData
): ServicePricingData => ({
    serviceTitle,
    serviceSubtitle,
    tier1,
    tier2,
    tier3,
});

export const defaultPricingData: PricingPageData = {
    pageHeader: {
        pageTitle: 'Pricing & Packages',
        pageSubtitle: 'Scale Your Business Profits',
    },

    // 1. Personal Branding
    personalBranding: createServiceData(
        'Personal Branding',
        'Establish your authority and build a powerful online identity.',
        createTierData(
            'BASIC',
            'Best for: Beginners, early-stage founders',
            'GOAL: ESTABLISH A PRESENCE',
            'LinkedIn & Instagram (2 platforms)\n8 posts/month\nProfile optimization\nContent strategy + calendar\nMonthly report',
            '₹18,000–₹25,000/month',
            '$250–$350/month',
            '*Why: Build a credible presence before you can play "fast" personal branding.'
        ),
        createTierData(
            'STANDARD',
            'Best for: Growing founders, startup leaders',
            'GOAL: CONSISTENT REACH + FOLLOWERS GROWTH',
            'LinkedIn + Instagram\n12–15 posts/month\n1 video/month\nStorytelling + repurposing\nMonthly analytics',
            '₹40,000–₹60,000/month',
            '$600–$900/month',
            '*Why: This is your sweet-spot package — serious results without over-investing.',
            true
        ),
        createTierData(
            'PREMIUM',
            'Best for: Thought-leaders, founders, exec creators',
            'GOAL: DOMINATE YOUR NICHE',
            '3–4 platforms\n20–30 posts/month\n3–5 reels/shorts\nGhostwriting + automation\nWeekly reviews + manager',
            '₹90,000–₹1,50,000/month',
            '$1,500–$3,000/month',
            '*Why: Premium-level tools for people with strategy, and authority.'
        )
    ),

    // 2. Social Media Growth
    socialMediaGrowth: createServiceData(
        'Social Media Growth',
        'Build engaged communities and drive meaningful connections.',
        createTierData(
            'BASIC',
            'Best for: New brands / creators with low-mid budgets',
            'GOAL: TAX COMMITMENT + START ORGANIC REACH',
            'Growth work\nPlatform optimization\nMonthly outreach optimization\nOrganic engagement strategy\nHashtag + keyword research\nTrend & format guidance',
            '₹15,000–₹25,000/month',
            '$200–$350/month',
            '*Why: Builds the foundation for organic growth.'
        ),
        createTierData(
            'STANDARD',
            'Best for: Founders & brands ready to scale with paid ads',
            'GOAL: CONSISTENT REACH + FOLLOWERS GROWTH',
            'Daily engagement outreach\nPaid/Organic strategy\nContent amplification planning\nAutomation framework\nCollaboration & influencer planning\nAutomation & batch monitoring',
            '₹35,000–₹55,000/month',
            '$500–$800/month',
            '*Why: Focuses on building real community connections.',
            true
        ),
        createTierData(
            'PREMIUM',
            'Best for: Established founders',
            'GOAL: ACCELERATE GROWTH + DOMINATE AT NICHE',
            'Advanced distribution systems\nCreator & influencer outreach\nTrend hijacking (micro)\nHigh-volume engagement workflows\nAutomation (bots/APIs)\nPlatform expansion planning',
            '₹70,000–₹1,20,000/month',
            '$1,200–$2,500/month',
            '*Why: Maximum leverage for brands with high volume.'
        )
    ),

    // 3. Website Development
    websiteDevelopment: createServiceData(
        'Website Development',
        'High-performance, conversion-driven digital assets built for speed.',
        createTierData(
            'BASIC',
            'Best for: Tryout, brands, startups',
            'GOAL: ESTABLISH A CAPABLE + TRUST ONLINE PRESENCE',
            '1-3 page website\nMobile-responsive design\nClean UI/UX\nBasic SEO structure\nSpeed optimization\nDomain & hosting support',
            '₹40,000–₹60,000 (one-time)',
            '$700–$1,200',
            '*Why: Affordable for launching a professional online.'
        ),
        createTierData(
            'STANDARD',
            'Best for: Mid-size service businesses',
            'GOAL: DRIVE LEADS, CONVERSIONS & TRUST',
            '6+ pages\nCustom UI/UX\nCMS integration\nConversion-focused copywriting\nAnalytics (GA4)\nLead capture system',
            '₹90,000–₹1,50,000',
            '$1,500–$3,000',
            '*Why: Turns visitors into recurring customers.',
            true
        ),
        createTierData(
            'PREMIUM',
            'Best for: SaaS, enterprise, high-growth brands',
            'GOAL: HIGH-PERFORMANCE, SCALE-READY DIGITAL ASSET',
            'Unlimited pages\nAdvanced animations\nCustom dashboards / portals\nIntegrations (CRM, payment, APIs)\nSecurity hardening\n30-day post-launch support',
            '₹2,00,000–₹5,00,000+',
            '$4,000–$10,000+',
            '*Why: Enterprise-grade speed and reliability.'
        )
    ),

    // 4. App Development
    appDevelopment: createServiceData(
        'App Development',
        'Scalable mobile and web applications engineered for the future.',
        createTierData(
            'BASIC',
            'Best for: Startup MVPs, no-frills',
            'GOAL: LAUNCH FAST, VALIDATE IDEA',
            'MVP planning\nUI/UX wireframes\nCore features only\nAndroid or iOS\nBackend integration\nBasic testing',
            '₹2,00,000–₹4,00,000',
            '$4,000–$7,000',
            '*Why: Validates concepts with minimal spend.'
        ),
        createTierData(
            'STANDARD',
            'Best for: Growing startups',
            'GOAL: STABLE, SCALABLE APP',
            'Cross-platform (Flutter / React Native)\nAuthentication\nDatabase + APIs\nAdmin dashboard\nPush notifications\nAnalytics',
            '₹5,00,000–₹10,00,000',
            '$8,000–$15,000',
            '*Why: Built for actual users and scale.',
            true
        ),
        createTierData(
            'PREMIUM',
            'Best for: Funded startups',
            'GOAL: HIGH-SCALE, SECURE APPLICATION',
            'Advanced architecture\nRole-based access\nCloud deployment\nSecurity audits\nLoad testing\nMaintenance support',
            '₹12,00,000–₹25,00,000+',
            '$20,000–$50,000+',
            '*Why: Zero-compromise on performance and security.'
        )
    ),

    // 5. Growth & Digital Marketing
    growthMarketing: createServiceData(
        'Growth & Digital Marketing',
        'Build predictable revenue and scale profitably with full-funnel marketing.',
        createTierData(
            'STARTER',
            'Best for: Early-stage brands, solopreneurs',
            'GOAL: INCREASE REACH + AWARENESS WITH CONTROLLED SPEND',
            'Profile audit\nOrganic engagement\nMeta/Google Ad setup\n1 campaign (awareness)\nAudience targeting\nBudget monitoring',
            '₹25,000–₹40,000/month',
            '$350–$600/month',
            '*Why: Ideal for establishing a market foothold.'
        ),
        createTierData(
            'GROWTH',
            'Best for: Startups, D2C brands',
            'GOAL: GENERATE LEADS, INQUIRIES, AND CONVERSIONS',
            'Funnel strategy (TOF/MOF/BOF)\nUp to 3 ad campaigns\nAd copywriting\nCreative variations\nRetargeting setup\nWeekly performance check',
            '₹60,000–₹1,00,000/month',
            '$900–$1,800/month',
            '*Why: Engineered for scaling revenue profitably.',
            true
        ),
        createTierData(
            'SCALE',
            'Best for: High-growth brands, serious founders',
            'GOAL: BUILD PREDICTABLE REVENUE & SCALE PROFITABLY',
            'Full-funnel performance marketing\nConversion Rate Optimization (CRO)\nAdvanced retargeting\nMarketing automation\nDedicated account manager',
            '₹1,50,000–₹3,00,000+/month',
            '$2,500–$6,000+/month',
            '*Why: Dominate the market with high-volume growth.'
        )
    ),

    // 6. Strategy & Execution
    strategyExecution: createServiceData(
        'Strategy & Execution',
        'Clarify your direction and grow your growth with high-level advisory.',
        createTierData(
            'STARTER',
            'Best for: Early-stage startups, new brands',
            'GOAL: CLARIFY WHAT TO TARGET AND WHAT TO SAY',
            'Brand & market audit\nICP definition\nCompetitor analysis\nCore messaging\n30-day marketing plan',
            '₹25,000–₹40,000 (one-time)',
            '$400–$700',
            '*Why: Builds trust and opens doors to resources.'
        ),
        createTierData(
            'GROWTH',
            'Best for: Startups & service brands ready to scale',
            'GOAL: CREATE CONSISTENT INBOUND LEADS & VISIBILITY',
            'Full-funnel strategy\nContent marketing roadmap\nLead generation strategy\nKPI tracking\nMonthly strategic call',
            '₹60,000–₹1,00,000/month',
            '$1,000–$2,000/month',
            '*Why: Our most "Wedding + planning" package.',
            true
        ),
        createTierData(
            'PREMIUM',
            'Best for: Funded startups, scaling brands',
            'GOAL: OWN MARKETING DECISIONS, GROWTH DIRECTION & EXPERIMENTS',
            'Go-to-Market (GTM) strategy\nRevenue & growth forecasting\nMulti-channel orchestration\nWeekly growth experiments\nDedicated marketing lead',
            '₹1,50,000–₹3,00,000+/month',
            '$3,000–$6,000+/month',
            '*Why: Premium clients pay for dividends, not deliverables.'
        )
    ),
};
