import { CMSPageSchema, ServiceDetailData } from '../types';

export const serviceWebDevSchema: CMSPageSchema = {
    pageId: 'service-web-dev',
    pageName: 'Service: Web Development',
    sections: [
        {
            id: 'hero',
            title: 'Hero Section',
            icon: 'document',
            fields: [
                { name: 'title', type: 'text', label: 'Service Title', placeholder: 'High-Performance Web Development' },
                { name: 'subtitle', type: 'text', label: 'Subtitle', placeholder: 'We build digital experiences that load instantly...' },
                { name: 'estimatedPricing', type: 'text', label: 'Estimated Pricing', placeholder: '$3,500' },
                { name: 'heroImage', type: 'image', label: 'Hero Background Image', specs: 'MAX 2MB • PNG, JPG, WEBP' },
            ],
        },
        {
            id: 'problem',
            title: 'Problem Section',
            icon: 'target',
            fields: [
                { name: 'problemTitle', type: 'text', label: 'Problem Title', placeholder: 'Is your website losing you money?' },
                { name: 'problemDescription', type: 'html', label: 'Problem Description', placeholder: 'Most websites are slow, confusing...' },
            ],
        },
        {
            id: 'solution',
            title: 'Solution Section',
            icon: 'target',
            fields: [
                { name: 'solutionTitle', type: 'text', label: 'Solution Title', placeholder: 'Speed, SEO, and Scale.' },
                { name: 'solutionDescription', type: 'html', label: 'Solution Description', placeholder: 'We don\'t use drag-and-drop builders...' },
            ],
        },
        {
            id: 'features',
            title: 'Features (What\'s Included)',
            icon: 'target',
            fields: [
                { name: 'feature1', type: 'text', label: 'Feature 1', placeholder: 'Next.js / React Architecture' },
                { name: 'feature2', type: 'text', label: 'Feature 2', placeholder: 'Server-Side Rendering (SSR)' },
                { name: 'feature3', type: 'text', label: 'Feature 3', placeholder: 'Headless CMS Integration' },
                { name: 'feature4', type: 'text', label: 'Feature 4', placeholder: 'Advanced Animation & Micro-interactions' },
            ],
        },
        {
            id: 'stats',
            title: 'Statistics (Data-Driven Results)',
            icon: 'chart',
            fields: [
                { name: 'stat1Label', type: 'text', label: 'Stat 1 - Label', placeholder: 'Avg Speed Score' },
                { name: 'stat1Value', type: 'text', label: 'Stat 1 - Value', placeholder: '99' },
                { name: 'stat2Label', type: 'text', label: 'Stat 2 - Label', placeholder: 'Bounce Rate Reduction' },
                { name: 'stat2Value', type: 'text', label: 'Stat 2 - Value', placeholder: '40%' },
                { name: 'stat3Label', type: 'text', label: 'Stat 3 - Label', placeholder: 'Conversion Uplift' },
                { name: 'stat3Value', type: 'text', label: 'Stat 3 - Value', placeholder: '2.5x' },
            ],
        },
        {
            id: 'testimonial',
            title: 'Client Testimonial',
            icon: 'users',
            fields: [
                { name: 'quote', type: 'html', label: 'Testimonial Quote', placeholder: 'Our previous site took 5 seconds to load...' },
                { name: 'author', type: 'text', label: 'Author Name', placeholder: 'David Kim' },
                { name: 'role', type: 'text', label: 'Author Role', placeholder: 'CTO, FinTech Global' },
            ],
        },
    ],
};

export const defaultServiceWebDevData: ServiceDetailData = {
    hero: {
        title: 'High-Performance Web Development',
        subtitle: 'We build digital experiences that load instantly and convert visitors into customers.',
        estimatedPricing: '$5,000',
    },
    problem: {
        problemTitle: 'Is your website losing you money?',
        problemDescription: 'Most websites are slow, confusing, and unoptimized for mobile. In 2024, a 1-second delay in load time can result in a 7% reduction in conversions. If your site isn\'t performing, your ads are burning cash.',
    },
    solution: {
        solutionTitle: 'Speed, SEO, and Scale.',
        solutionDescription: 'We don\'t use drag-and-drop builders. We engineer custom React and Next.js applications that score 99/100 on Google PageSpeed. Our code is clean, semantic, and built for search engines first.',
    },
    features: {
        feature1: 'Next.js / React Architecture',
        feature2: 'Server-Side Rendering (SSR)',
        feature3: 'Headless CMS Integration',
        feature4: 'Advanced Animation & Micro-interactions',
    },
    stats: {
        stat1Label: 'Avg Speed Score',
        stat1Value: '99',
        stat2Label: 'Bounce Rate Reduction',
        stat2Value: '40%',
        stat3Label: 'Conversion Uplift',
        stat3Value: '2.5x',
    },
    testimonial: {
        quote: 'Our previous site took 5 seconds to load. Impact 224 got it under 0.8s. Our bounce rate dropped overnight.',
        author: 'David Kim',
        role: 'CTO, FinTech Global',
    },
};
