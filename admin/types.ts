// Admin CMS Types

export interface CMSField {
    name: string;
    type: 'text' | 'html' | 'image' | 'checkbox';
    label: string;
    placeholder?: string;
    specs?: string; // For image fields (e.g., "MAX 2MB • PNG, JPG, WEBP")
}

export interface CMSSection {
    id: string;
    title: string;
    icon: string;
    fields: CMSField[];
}

export interface CMSPageSchema {
    pageId: string;
    pageName: string;
    sections: CMSSection[];
}

// Home Page Data
export interface HomePageData {
    hero: {
        tagline: string;
        headline: string;
        description: string;
        backgroundImage: string;
    };
    trustMetrics: {
        stat1Value: string;
        stat1Label: string;
        stat2Value: string;
        stat2Label: string;
        stat3Value: string;
        stat3Label: string;
    };
}

// About Page Data
export interface AboutPageData {
    narrative: {
        mainHeading: string;
        subHeading: string;
        visionNarrative: string;
        brandImage: string;
    };
    performance: {
        stat1Value: string;
        stat1Label: string;
        stat2Value: string;
        stat2Label: string;
        stat3Value: string;
        stat3Label: string;
    };
    promise: {
        coreQuote: string;
        quoteAuthor: string;
        promiseImage: string;
    };
    personnel: {
        teamHeader: string;
        m1Name: string;
        m1Role: string;
        m1Image: string;
        m2Name: string;
        m2Role: string;
        m2Image: string;
        m3Name: string;
        m3Role: string;
        m3Image: string;
        m4Name: string;
        m4Role: string;
        m4Image: string;
    };
}

// Services Page Data
export interface ServicesPageData {
    mainPageHeader: {
        pageTitle: string;
        pageAccentText: string;
    };
    personalBranding: {
        displayTitle: string;
        shortPitch: string;
        heroCoverImage: string;
        estimatedPricing: string;
    };
    videoEditing: {
        displayTitle: string;
        shortPitch: string;
        heroCoverImage: string;
        estimatedPricing: string;
    };
    websiteDevelopment: {
        displayTitle: string;
        shortPitch: string;
        heroCoverImage: string;
        estimatedPricing: string;
    };
}

// Pricing Page Data
export interface PricingTierData {
    name: string;
    tagline: string;
    goal: string;
    includes: string; // Newline-separated list
    pricingInIndia: string;
    pricingInternational: string;
    note: string;
    popular: boolean;
}

export interface ServicePricingData {
    serviceTitle: string;
    serviceSubtitle: string;
    tier1: PricingTierData;
    tier2: PricingTierData;
    tier3: PricingTierData;
}

export interface PricingPageData {
    pageHeader: {
        pageTitle: string;
        pageSubtitle: string;
    };
    personalBranding: ServicePricingData;
    socialMediaGrowth: ServicePricingData;
    websiteDevelopment: ServicePricingData;
    appDevelopment: ServicePricingData;
    growthMarketing: ServicePricingData;
    strategyExecution: ServicePricingData;
}

// Blog Page Data
export interface BlogPageData {
    pageHeader: {
        badge: string;
        mainHeading: string;
        subHeading: string;
        newsletterHeading: string;
    };
    post1: {
        postTitle: string;
        authorName: string;
        publishDate: string;
        readTime: string;
        featuredImage: string;
    };
}

// Projects Page Data
export interface ProjectsPageData {
    pageHeader: {
        pageTitle: string;
        pageSubtitle: string;
    };
    project1: {
        projectTitle: string;
        headlineResultStat: string;
        featuredImage: string;
        clientName: string;
        projectDuration: string;
        theChallenge: string;
        theSolution: string;
        results: string;
    };
    project2: {
        projectTitle: string;
        headlineResultStat: string;
        featuredImage: string;
        clientName: string;
        projectDuration: string;
        theChallenge: string;
        theSolution: string;
        results: string;
    };
    project3: {
        projectTitle: string;
        headlineResultStat: string;
        featuredImage: string;
        clientName: string;
        projectDuration: string;
        theChallenge: string;
        theSolution: string;
        results: string;
    };
}


// Service Detail Page Data
export interface ServiceDetailData {
    hero: {
        title: string;
        subtitle: string;
        heroImage: string;
    };
    problem: {
        problemTitle: string;
        problemDescription: string;
    };
    solution: {
        solutionTitle: string;
        solutionDescription: string;
    };
    features: {
        feature1: string;
        feature2: string;
        feature3: string;
        feature4: string;
    };
    stats: {
        stat1Label: string;
        stat1Value: string;
        stat2Label: string;
        stat2Value: string;
        stat3Label: string;
        stat3Value: string;
    };
    testimonial: {
        quote: string;
        author: string;
        role: string;
    };
}


// All CMS Data
export interface CMSData {
    home: HomePageData;
    about: AboutPageData;
    services: ServicesPageData;
    pricing: PricingPageData;
    blog: BlogPageData;
    projects: ProjectsPageData;
    serviceWebDev: ServiceDetailData;
    serviceMarketing: ServiceDetailData;
    serviceVideo: ServiceDetailData;
}

// Auth Types
export interface AdminUser {
    email: string;
    securityLevel: string;
    isSandboxMode: boolean;
}
