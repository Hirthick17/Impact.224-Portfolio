import { CMSPageSchema, ServiceDetailData } from '../types';

export const serviceMarketingSchema: CMSPageSchema = {
    pageId: 'service-marketing',
    pageName: 'Service: Digital Marketing',
    sections: [
        {
            id: 'hero',
            title: 'Hero Section',
            icon: 'document',
            fields: [
                { name: 'title', type: 'text', label: 'Service Title', placeholder: 'Data-Driven Digital Marketing' },
                { name: 'subtitle', type: 'text', label: 'Subtitle', placeholder: 'Stop guessing. Start scaling...' },
                { name: 'heroImage', type: 'image', label: 'Hero Background Image', specs: 'MAX 2MB • PNG, JPG, WEBP' },
            ],
        },
        {
            id: 'problem',
            title: 'Problem Section',
            icon: 'target',
            fields: [
                { name: 'problemTitle', type: 'text', label: 'Problem Title', placeholder: 'Are you burning ad budget?' },
                { name: 'problemDescription', type: 'html', label: 'Problem Description' },
            ],
        },
        {
            id: 'solution',
            title: 'Solution Section',
            icon: 'target',
            fields: [
                { name: 'solutionTitle', type: 'text', label: 'Solution Title', placeholder: 'ROAS-Focused User Acquisition.' },
                { name: 'solutionDescription', type: 'html', label: 'Solution Description' },
            ],
        },
        {
            id: 'features',
            title: 'Features (What\'s Included)',
            icon: 'target',
            fields: [
                { name: 'feature1', type: 'text', label: 'Feature 1', placeholder: 'Multi-Channel Attribution' },
                { name: 'feature2', type: 'text', label: 'Feature 2', placeholder: 'A/B Creative Testing' },
                { name: 'feature3', type: 'text', label: 'Feature 3', placeholder: 'Conversion Rate Optimization (CRO)' },
                { name: 'feature4', type: 'text', label: 'Feature 4', placeholder: 'Automated Email Flows' },
            ],
        },
        {
            id: 'stats',
            title: 'Statistics (Data-Driven Results)',
            icon: 'chart',
            fields: [
                { name: 'stat1Label', type: 'text', label: 'Stat 1 - Label', placeholder: 'Avg ROAS' },
                { name: 'stat1Value', type: 'text', label: 'Stat 1 - Value', placeholder: '4.2x' },
                { name: 'stat2Label', type: 'text', label: 'Stat 2 - Label', placeholder: 'Leads Generated' },
                { name: 'stat2Value', type: 'text', label: 'Stat 2 - Value', placeholder: '50k+' },
                { name: 'stat3Label', type: 'text', label: 'Stat 3 - Label', placeholder: 'CPA Reduction' },
                { name: 'stat3Value', type: 'text', label: 'Stat 3 - Value', placeholder: '35%' },
            ],
        },
        {
            id: 'testimonial',
            title: 'Client Testimonial',
            icon: 'users',
            fields: [
                { name: 'quote', type: 'html', label: 'Testimonial Quote' },
                { name: 'author', type: 'text', label: 'Author Name', placeholder: 'Sarah Jenkins' },
                { name: 'role', type: 'text', label: 'Author Role', placeholder: 'Founder, StyleHub' },
            ],
        },
    ],
};

export const defaultServiceMarketingData: ServiceDetailData = {
    hero: {
        title: 'Data-Driven Digital Marketing',
        subtitle: 'Stop guessing. Start scaling with precision-targeted campaigns.',
        heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
    },
    problem: {
        problemTitle: 'Are you burning ad budget?',
        problemDescription: 'Clicks are getting expensive. Without a robust data strategy, you are paying for traffic that never converts. Vanity metrics like "likes" don\'t pay the bills.',
    },
    solution: {
        solutionTitle: 'ROAS-Focused User Acquisition.',
        solutionDescription: 'We build full-funnel marketing ecosystems. From high-intent Google Search ads to retargeting flows on Meta, we track every user touchpoint to ensure every dollar spent brings more dollars back.',
    },
    features: {
        feature1: 'Multi-Channel Attribution',
        feature2: 'A/B Creative Testing',
        feature3: 'Conversion Rate Optimization (CRO)',
        feature4: 'Automated Email Flows',
    },
    stats: {
        stat1Label: 'Avg ROAS',
        stat1Value: '4.2x',
        stat2Label: 'Leads Generated',
        stat2Value: '50k+',
        stat3Label: 'CPA Reduction',
        stat3Value: '35%',
    },
    testimonial: {
        quote: 'They didn\'t just run ads; they fixed our entire sales funnel. The ROI has been incredible.',
        author: 'Sarah Jenkins',
        role: 'Founder, StyleHub',
    },
};
