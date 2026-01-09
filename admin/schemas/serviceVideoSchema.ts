import { CMSPageSchema, ServiceDetailData } from '../types';

export const serviceVideoSchema: CMSPageSchema = {
    pageId: 'service-video',
    pageName: 'Service: Video Editing',
    sections: [
        {
            id: 'hero',
            title: 'Hero Section',
            icon: 'document',
            fields: [
                { name: 'title', type: 'text', label: 'Service Title', placeholder: 'Visual Storytelling & Video' },
                { name: 'subtitle', type: 'text', label: 'Subtitle', placeholder: 'Capture attention in the first 3 seconds...' },
                { name: 'heroImage', type: 'image', label: 'Hero Background Image', specs: 'MAX 2MB • PNG, JPG, WEBP' },
            ],
        },
        {
            id: 'problem',
            title: 'Problem Section',
            icon: 'target',
            fields: [
                { name: 'problemTitle', type: 'text', label: 'Problem Title', placeholder: 'Is your content being scrolled past?' },
                { name: 'problemDescription', type: 'html', label: 'Problem Description' },
            ],
        },
        {
            id: 'solution',
            title: 'Solution Section',
            icon: 'target',
            fields: [
                { name: 'solutionTitle', type: 'text', label: 'Solution Title', placeholder: 'Edits that Retain.' },
                { name: 'solutionDescription', type: 'html', label: 'Solution Description' },
            ],
        },
        {
            id: 'features',
            title: 'Features (What\'s Included)',
            icon: 'target',
            fields: [
                { name: 'feature1', type: 'text', label: 'Feature 1', placeholder: 'Short-Form (Reels/TikTok)' },
                { name: 'feature2', type: 'text', label: 'Feature 2', placeholder: 'Corporate Docuseries' },
                { name: 'feature3', type: 'text', label: 'Feature 3', placeholder: 'Motion Graphics' },
                { name: 'feature4', type: 'text', label: 'Feature 4', placeholder: 'Sound Design & Mixing' },
            ],
        },
        {
            id: 'stats',
            title: 'Statistics (Data-Driven Results)',
            icon: 'chart',
            fields: [
                { name: 'stat1Label', type: 'text', label: 'Stat 1 - Label', placeholder: 'Avg Retention' },
                { name: 'stat1Value', type: 'text', label: 'Stat 1 - Value', placeholder: '65%' },
                { name: 'stat2Label', type: 'text', label: 'Stat 2 - Label', placeholder: 'Organic Views' },
                { name: 'stat2Value', type: 'text', label: 'Stat 2 - Value', placeholder: '2M+' },
                { name: 'stat3Label', type: 'text', label: 'Stat 3 - Label', placeholder: 'Click-Through Rate' },
                { name: 'stat3Value', type: 'text', label: 'Stat 3 - Value', placeholder: '3.8%' },
            ],
        },
        {
            id: 'testimonial',
            title: 'Client Testimonial',
            icon: 'users',
            fields: [
                { name: 'quote', type: 'html', label: 'Testimonial Quote' },
                { name: 'author', type: 'text', label: 'Author Name', placeholder: 'Marcus Reed' },
                { name: 'role', type: 'text', label: 'Author Role', placeholder: 'CMO, TechStream' },
            ],
        },
    ],
};

export const defaultServiceVideoData: ServiceDetailData = {
    hero: {
        title: 'Visual Storytelling & Video',
        subtitle: 'Capture attention in the first 3 seconds with high-retention video content.',
        heroImage: 'https://images.unsplash.com/photo-1579632652768-6cb9dcf85912?auto=format&fit=crop&q=80&w=1200',
    },
    problem: {
        problemTitle: 'Is your content being scrolled past?',
        problemDescription: 'Attention spans are shorter than ever. Generic corporate videos get ignored. To win on social, you need hooks, pacing, and narrative structure.',
    },
    solution: {
        solutionTitle: 'Edits that Retain.',
        solutionDescription: 'Our editors understand the psychology of attention. We use fast-paced cuts, motion graphics, and sound design to keep viewers glued to the screen from start to finish.',
    },
    features: {
        feature1: 'Short-Form (Reels/TikTok)',
        feature2: 'Corporate Docuseries',
        feature3: 'Motion Graphics',
        feature4: 'Sound Design & Mixing',
    },
    stats: {
        stat1Label: 'Avg Retention',
        stat1Value: '65%',
        stat2Label: 'Organic Views',
        stat2Value: '2M+',
        stat3Label: 'Click-Through Rate',
        stat3Value: '3.8%',
    },
    testimonial: {
        quote: 'The visual quality is Hollywood-level, but the strategy is pure marketing genius.',
        author: 'Marcus Reed',
        role: 'CMO, TechStream',
    },
};
