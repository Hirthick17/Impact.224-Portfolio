import { CMSPageSchema, HomePageData } from '../types';

export const homeSchema: CMSPageSchema = {
    pageId: 'home',
    pageName: 'Landing Page',
    sections: [
        {
            id: 'hero',
            title: 'Hero Module',
            icon: 'document',
            fields: [
                { name: 'tagline', type: 'text', label: 'Tagline', placeholder: 'DIGITAL GROWTH AGENCY' },
                { name: 'headline', type: 'text', label: 'Headline', placeholder: 'STOP LOSING LEADS ONLINE.' },
                { name: 'description', type: 'text', label: 'Description' },
                { name: 'backgroundImage', type: 'image', label: 'Background Image', specs: 'MAX 2MB • PNG, JPG, WEBP' },
            ],
        },
        {
            id: 'trustMetrics',
            title: 'Trust Metrics',
            icon: 'chart',
            fields: [
                { name: 'stat1Value', type: 'text', label: 'Stat 1 Value', placeholder: '99' },
                { name: 'stat1Label', type: 'text', label: 'Stat 1 Label', placeholder: 'AVG SPEED SCORE' },
                { name: 'stat2Value', type: 'text', label: 'Stat 2 Value', placeholder: '40%' },
                { name: 'stat2Label', type: 'text', label: 'Stat 2 Label', placeholder: 'BOUNCE RATE REDUCTION' },
                { name: 'stat3Value', type: 'text', label: 'Stat 3 Value', placeholder: '2.5X' },
                { name: 'stat3Label', type: 'text', label: 'Stat 3 Label', placeholder: 'CONVERSION UPLIFT' },
            ],
        },
    ],
};

export const defaultHomeData: HomePageData = {
    hero: {
        tagline: 'DIGITAL GROWTH AGENCY',
        headline: 'STOP LOSING LEADS ONLINE.',
        description: 'WE BUILD HIGH-PERFORMANCE WEBSITES AND AUTOMATED MARKETING SYSTEMS.',
        backgroundImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000',
    },
    trustMetrics: {
        stat1Value: '99',
        stat1Label: 'AVG SPEED SCORE',
        stat2Value: '40%',
        stat2Label: 'BOUNCE RATE REDUCTION',
        stat3Value: '2.5X',
        stat3Label: 'CONVERSION UPLIFT',
    },
};
