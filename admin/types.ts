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
        primaryButtonText: string;
        secondaryButtonText: string;
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
    servicesIntro: {
        sectionTitle: string;
        sectionSubtitle: string;
        service1Heading: string;
        service1Description: string;
        service1Image: string;
        service2Heading: string;
        service2Description: string;
        service2Image: string;
        service3Heading: string;
        service3Description: string;
        service3Image: string;
    };
    whyImpact224: {
        sectionTitle: string;
        feature1Title: string;
        feature1Icon: string;
        feature2Title: string;
        feature2Icon: string;
        feature3Title: string;
        feature3Icon: string;
        feature4Title: string;
        feature4Icon: string;
    };
    projectsShowcase: {
        sectionTitle: string;
        sectionSubtitle: string;
        buttonText: string;
        project1Title: string;
        project1Stats: string;
        project1Image: string;
        project2Title: string;
        project2Stats: string;
        project2Image: string;
        project3Title: string;
        project3Stats: string;
        project3Image: string;
        project4Title: string;
        project4Stats: string;
        project4Image: string;
    };
    latestInsights: {
        sectionTitle: string;
        sectionSubtitle: string;
        blog1Category: string;
        blog1Image: string;
        blog1Title: string;
        blog1Date: string;
        blog1ReadTime: string;
        blog2Category: string;
        blog2Image: string;
        blog2Title: string;
        blog2Date: string;
        blog2ReadTime: string;
        blog3Category: string;
        blog3Image: string;
        blog3Title: string;
        blog3Date: string;
        blog3ReadTime: string;
        blog4Category: string;
        blog4Image: string;
        blog4Title: string;
        blog4Date: string;
        blog4ReadTime: string;
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
        mainHeading: string;
        subHeading: string;
    };
    blog1: {
        category: string;
        title: string;
        excerpt: string;
        author: string;
        date: string;
        readTime: string;
        image: string;
        slug: string;
    };
    blog2: {
        category: string;
        title: string;
        excerpt: string;
        author: string;
        date: string;
        readTime: string;
        image: string;
        slug: string;
    };
    blog3: {
        category: string;
        title: string;
        excerpt: string;
        author: string;
        date: string;
        readTime: string;
        image: string;
        slug: string;
    };
    blog4: {
        category: string;
        title: string;
        excerpt: string;
        author: string;
        date: string;
        readTime: string;
        image: string;
        slug: string;
    };
}

// Blog Detail Page Data
export interface BlogDetailData {
    hero: {
        tagline: string;
        heading: string;
        author: string;
        date: string;
        readTime: string;
        featuredImage: string;
    };
    introduction: {
        introParagraph: string;
    };
    section1: {
        subheading: string;
        content: string;
    };
    section2: {
        subheading: string;
        content: string;
    };
    dialogBox: {
        quoteText: string;
    };
    section3: {
        subheading: string;
        bullet1: string;
        bullet2: string;
        bullet3: string;
        closingParagraph: string;
    };
    cta: {
        ctaHeading: string;
        ctaSubheading: string;
        buttonText: string;
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


// Newsletter CTA Data (Global Component)
export interface NewsletterPageData {
    newsletterCTA: {
        heading: string;
        subheading: string;
        button1Text: string;
        button1Link: string;
        button2Text: string;
        button2Link: string;
    };
}


// Footer Data (Global Component)
export interface FooterPageData {
    branding: {
        brandName: string;
        brandNumber: string;
        description: string;
    };
    socialMedia: {
        linkedinUrl: string;
        instagramUrl: string;
        youtubeUrl: string;
    };
    resources: {
        sectionTitle: string;
    };
    contact: {
        sectionTitle: string;
        email: string;
        phone: string;
        location: string;
    };
    copyright: {
        copyrightText: string;
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
    newsletter: NewsletterPageData;
    footer: FooterPageData;
    blogSeo2025: BlogDetailData;
}

// Auth Types
export interface AdminUser {
    email: string;
    securityLevel: string;
    isSandboxMode: boolean;
}
