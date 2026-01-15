import { CMSPageSchema, BlogDetailData } from '../types';

export const blogSeo2025Schema: CMSPageSchema = {
    pageId: 'blog-seo-2025',
    pageName: 'Blog: SEO 2025',
    sections: [
        {
            id: 'hero',
            title: 'Hero Section',
            icon: 'document',
            fields: [
                { name: 'tagline', type: 'text', label: 'Category/Tagline', placeholder: 'STRATEGY' },
                { name: 'heading', type: 'text', label: 'Blog Title', placeholder: "The Death of Traditional SEO: What's Next in 2025?" },
                { name: 'author', type: 'text', label: 'Author Name', placeholder: 'Gunn Malhotra' },
                { name: 'date', type: 'text', label: 'Publication Date', placeholder: 'Oct 24, 2024' },
                { name: 'readTime', type: 'text', label: 'Read Time', placeholder: '6 min read' },
                { name: 'featuredImage', type: 'image', label: 'Featured Image', specs: 'MAX 2MB • PNG, JPG, WEBP' },
            ],
        },
        {
            id: 'introduction',
            title: 'Introduction',
            icon: 'document',
            fields: [
                { name: 'introParagraph', type: 'html', label: 'Introduction Paragraph', placeholder: 'The era of keyword stuffing and backlink farming is officially over...' },
            ],
        },
        {
            id: 'section1',
            title: 'Section 1: Entity-Based Search',
            icon: 'document',
            fields: [
                { name: 'subheading', type: 'text', label: 'Subheading', placeholder: 'The Shift to Entity-Based Search' },
                { name: 'content', type: 'html', label: 'Content', placeholder: 'Search algorithms now understand concepts...' },
            ],
        },
        {
            id: 'section2',
            title: 'Section 2: AI Overviews',
            icon: 'document',
            fields: [
                { name: 'subheading', type: 'text', label: 'Subheading', placeholder: 'Optimizing for AI Overviews' },
                { name: 'content', type: 'html', label: 'Content', placeholder: 'To get featured in AI snapshots...' },
            ],
        },
        {
            id: 'dialogBox',
            title: 'Quote/Dialog Box',
            icon: 'target',
            fields: [
                { name: 'quoteText', type: 'html', label: 'Quote Text', placeholder: 'Content that adds unique perspective, data, or experience (EEAT) will win...' },
            ],
        },
        {
            id: 'section3',
            title: 'Section 3: Actionable Steps',
            icon: 'document',
            fields: [
                { name: 'subheading', type: 'text', label: 'Subheading', placeholder: 'Actionable Steps' },
                { name: 'bullet1', type: 'text', label: 'Bullet Point 1', placeholder: 'Audit your content for "Experience"...' },
                { name: 'bullet2', type: 'text', label: 'Bullet Point 2', placeholder: 'Focus on long-tail, conversational queries...' },
                { name: 'bullet3', type: 'text', label: 'Bullet Point 3', placeholder: 'Improve technical SEO: Core Web Vitals...' },
                { name: 'closingParagraph', type: 'html', label: 'Closing Paragraph', placeholder: 'The future belongs to brands...' },
            ],
        },
        {
            id: 'cta',
            title: 'Call to Action',
            icon: 'target',
            fields: [
                { name: 'ctaHeading', type: 'text', label: 'CTA Heading', placeholder: 'Enjoyed this article?' },
                { name: 'ctaSubheading', type: 'text', label: 'CTA Subheading', placeholder: 'Subscribe to our newsletter for more insights...' },
                { name: 'buttonText', type: 'text', label: 'Button Text', placeholder: 'Subscribe Now' },
            ],
        },
    ],
};

export const defaultBlogSeo2025Data: BlogDetailData = {
    hero: {
        tagline: 'STRATEGY',
        heading: "The Death of Traditional SEO: What's Next in 2025?",
        author: 'Gunn Malhotra',
        date: 'Oct 24, 2024',
        readTime: '6 min read',
        featuredImage: 'https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?auto=format&fit=crop&q=80&w=1200',
    },
    introduction: {
        introParagraph: 'The era of keyword stuffing and backlink farming is officially over. With the rise of AI Overview (formerly SGE) and Large Language Models, Google is no longer just a search engine—it\'s an answer engine.',
    },
    section1: {
        subheading: 'The Shift to Entity-Based Search',
        content: 'Search algorithms now understand concepts, not just strings of text. If you want to rank in 2025, you need to establish topical authority. This means covering a subject in its entirety, linking related concepts, and ensuring your brand is recognized as an entity in the Knowledge Graph.',
    },
    section2: {
        subheading: 'Optimizing for AI Overviews',
        content: 'To get featured in AI snapshots, your content needs to be structured for direct answers. Use clear headings, bullet points, and schema markup. The goal is to be the source that the AI cites.',
    },
    dialogBox: {
        quoteText: '"Content that adds unique perspective, data, or experience (EEAT) will win. Generic AI-generated slop will be filtered out."',
    },
    section3: {
        subheading: 'Actionable Steps',
        bullet1: 'Audit your content for "Experience" - add personal anecdotes and case studies.',
        bullet2: 'Focus on long-tail, conversational queries that users ask voice assistants.',
        bullet3: 'Improve technical SEO: Core Web Vitals are non-negotiable.',
        closingParagraph: 'The future belongs to brands that build genuine authority, not just those that game the algorithm.',
    },
    cta: {
        ctaHeading: 'Enjoyed this article?',
        ctaSubheading: 'Subscribe to our newsletter for more insights on digital growth.',
        buttonText: 'Subscribe Now',
    },
};
