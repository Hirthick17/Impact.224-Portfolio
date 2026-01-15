import { CMSPageSchema } from '../types';

export const footerSchema: CMSPageSchema = {
    pageId: 'footer',
    pageName: 'Footer (Global)',
    sections: [
        {
            id: 'branding',
            title: 'Branding & Description',
            icon: 'badge',
            fields: [
                { name: 'brandName', type: 'text', label: 'Brand Name', placeholder: 'Impact' },
                { name: 'brandNumber', type: 'text', label: 'Brand Number', placeholder: '224' },
                { name: 'description', type: 'text', label: 'Description', placeholder: 'Empowering students to craft their careers...' },
            ],
        },
        {
            id: 'socialMedia',
            title: 'Social Media Links',
            icon: 'share',
            fields: [
                { name: 'linkedinUrl', type: 'text', label: 'LinkedIn URL', placeholder: 'https://linkedin.com/company/impact224' },
                { name: 'instagramUrl', type: 'text', label: 'Instagram URL', placeholder: 'https://instagram.com/impact224' },
                { name: 'youtubeUrl', type: 'text', label: 'YouTube URL', placeholder: 'https://youtube.com/@impact224' },
            ],
        },
        {
            id: 'resources',
            title: 'Resources Section',
            icon: 'book',
            fields: [
                { name: 'sectionTitle', type: 'text', label: 'Section Title', placeholder: 'Resources' },
            ],
        },
        {
            id: 'contact',
            title: 'Contact Information',
            icon: 'phone',
            fields: [
                { name: 'sectionTitle', type: 'text', label: 'Section Title', placeholder: 'Contact Us' },
                { name: 'email', type: 'text', label: 'Email Address', placeholder: 'hello@impact.224@gmail.com' },
                { name: 'phone', type: 'text', label: 'Phone Number', placeholder: '+91 99880 66050' },
                { name: 'location', type: 'text', label: 'Location', placeholder: 'Ludhiana, Punjab' },
            ],
        },
        {
            id: 'copyright',
            title: 'Copyright & Legal',
            icon: 'shield',
            fields: [
                { name: 'copyrightText', type: 'text', label: 'Copyright Text', placeholder: '© 2025 Impact.224. All rights reserved.' },
            ],
        },
    ],
};

export const defaultFooterData = {
    branding: {
        brandName: 'Impact',
        brandNumber: '224',
        description: 'Empowering students to craft their careers, build skills, and connect with opportunities that matter.',
    },
    socialMedia: {
        linkedinUrl: 'https://linkedin.com/company/impact224',
        instagramUrl: 'https://instagram.com/impact224',
        youtubeUrl: 'https://youtube.com/@impact224',
    },
    resources: {
        sectionTitle: 'Resources',
    },
    contact: {
        sectionTitle: 'Contact Us',
        email: 'hello@impact.224@gmail.com',
        phone: '+91 99880 66050',
        location: 'Ludhiana, Punjab',
    },
    copyright: {
        copyrightText: '© 2025 Impact.224. All rights reserved.',
    },
};
