import { CMSPageSchema } from '../types';

export const newsletterSchema: CMSPageSchema = {
    pageId: 'newsletter',
    pageName: 'Newsletter CTA (Global)',
    sections: [
        {
            id: 'newsletterCTA',
            title: 'Newsletter Call-to-Action',
            icon: 'mail',
            fields: [
                { name: 'heading', type: 'text', label: 'Heading', placeholder: 'Subscribe to our newsletter' },
                { name: 'subheading', type: 'text', label: 'Subheading', placeholder: 'Stay updated with our latest insights and exclusive content.' },
                { name: 'button1Text', type: 'text', label: 'Button 1 Text', placeholder: 'Case Studies' },
                { name: 'button1Link', type: 'text', label: 'Button 1 Link', placeholder: '/projects' },
                { name: 'button2Text', type: 'text', label: 'Button 2 Text', placeholder: 'Scale Your Business' },
                { name: 'button2Link', type: 'text', label: 'Button 2 Link', placeholder: '/contact' },
            ],
        },
    ],
};

export const defaultNewsletterData = {
    newsletterCTA: {
        heading: 'Subscribe to our newsletter',
        subheading: 'Stay updated with our latest insights and exclusive content.',
        button1Text: 'Case Studies',
        button1Link: '/projects',
        button2Text: 'Scale Your Business',
        button2Link: '/contact',
    },
};
