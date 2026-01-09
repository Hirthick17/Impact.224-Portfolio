import { CMSPageSchema, BlogPageData } from '../types';

export const blogSchema: CMSPageSchema = {
    pageId: 'blog',
    pageName: 'Growth Blog',
    sections: [
        {
            id: 'pageHeader',
            title: 'Page Header',
            icon: 'document',
            fields: [
                { name: 'badge', type: 'text', label: 'Badge (e.g. Our Thoughts)', placeholder: 'OUR THOUGHTS' },
                { name: 'mainHeading', type: 'text', label: 'Main Heading', placeholder: 'INSIGHTS FOR GROWTH' },
                { name: 'subHeading', type: 'text', label: 'Sub-Heading' },
                { name: 'newsletterHeading', type: 'text', label: 'Newsletter Heading', placeholder: 'SUBSCRIBE TO OUR NEWSLETTER' },
            ],
        },
        {
            id: 'post1',
            title: 'Post: 1',
            icon: 'tag',
            fields: [
                { name: 'postTitle', type: 'text', label: 'Post Title' },
                { name: 'authorName', type: 'text', label: 'Author Name', placeholder: 'GUNN MALHOTRA' },
                { name: 'publishDate', type: 'text', label: 'Publish Date', placeholder: 'OCT 24, 2024' },
                { name: 'readTime', type: 'text', label: 'Read Time', placeholder: '6 MIN READ' },
                { name: 'featuredImage', type: 'image', label: 'Featured Image', specs: 'MAX 2MB • PNG, JPG, WEBP' },
            ],
        },
    ],
};

export const defaultBlogData: BlogPageData = {
    pageHeader: {
        badge: 'OUR THOUGHTS',
        mainHeading: 'INSIGHTS FOR GROWTH',
        subHeading: 'ACTIONABLE STRATEGIES, TECHNICAL DEEP DIVES, AND MARKETING TRENDS.',
        newsletterHeading: 'SUBSCRIBE TO OUR NEWSLETTER',
    },
    post1: {
        postTitle: "THE DEATH OF TRADITIONAL SEO: WHAT'S NEXT IN 2025?",
        authorName: 'GUNN MALHOTRA',
        publishDate: 'OCT 24, 2024',
        readTime: '6 MIN READ',
        featuredImage: 'https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?auto=format&fit=crop&q=80&w=1200',
    },
};
