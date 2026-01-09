import { CMSPageSchema, ServicesPageData } from '../types';

export const servicesSchema: CMSPageSchema = {
    pageId: 'services',
    pageName: 'Service Modules',
    sections: [
        {
            id: 'mainPageHeader',
            title: 'Main Page Header',
            icon: 'document',
            fields: [
                { name: 'pageTitle', type: 'text', label: 'Page Title', placeholder: 'OUR EXPERTISE' },
                { name: 'pageAccentText', type: 'text', label: 'Page Accent Text', placeholder: 'SERVICES BUILT FOR IMPACT' },
            ],
        },
        {
            id: 'personalBranding',
            title: 'Personal Branding',
            icon: 'user',
            fields: [
                { name: 'displayTitle', type: 'text', label: 'Display Title', placeholder: 'PERSONAL BRANDING' },
                { name: 'shortPitch', type: 'text', label: 'Short Pitch' },
                { name: 'heroCoverImage', type: 'image', label: 'Hero/Cover Image', specs: 'MAX 2MB • PNG, JPG, WEBP' },
                { name: 'estimatedPricing', type: 'text', label: 'Estimated Pricing', placeholder: '₹15,000 – ₹1,50,000 / MONTH' },
            ],
        },
        {
            id: 'videoEditing',
            title: 'Video Editing',
            icon: 'scissors',
            fields: [
                { name: 'displayTitle', type: 'text', label: 'Display Title', placeholder: 'VIDEO EDITING' },
                { name: 'shortPitch', type: 'text', label: 'Short Pitch' },
                { name: 'heroCoverImage', type: 'image', label: 'Hero/Cover Image', specs: 'MAX 2MB • PNG, JPG, WEBP' },
                { name: 'estimatedPricing', type: 'text', label: 'Estimated Pricing', placeholder: '₹5,000 – ₹1,20,000 / PROJECT' },
            ],
        },
        {
            id: 'websiteDevelopment',
            title: 'Website Development',
            icon: 'target',
            fields: [
                { name: 'displayTitle', type: 'text', label: 'Display Title', placeholder: 'WEBSITE DEVELOPMENT' },
                { name: 'shortPitch', type: 'text', label: 'Short Pitch' },
                { name: 'heroCoverImage', type: 'image', label: 'Hero/Cover Image', specs: 'MAX 2MB • PNG, JPG, WEBP' },
                { name: 'estimatedPricing', type: 'text', label: 'Estimated Pricing', placeholder: '₹40,000 – ₹5,00,000+' },
            ],
        },
    ],
};

export const defaultServicesData: ServicesPageData = {
    mainPageHeader: {
        pageTitle: 'OUR EXPERTISE',
        pageAccentText: 'SERVICES BUILT FOR IMPACT',
    },
    personalBranding: {
        displayTitle: 'PERSONAL BRANDING',
        shortPitch: 'ESTABLISH YOUR AUTHORITY AND BUILD A POWERFUL ONLINE IDENTITY.',
        heroCoverImage: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1200',
        estimatedPricing: '₹15,000 – ₹1,50,000 / MONTH',
    },
    videoEditing: {
        displayTitle: 'VIDEO EDITING',
        shortPitch: 'HIGH-END POST-PRODUCTION THAT KEEPS VIEWERS HOOKED FOR LONGER.',
        heroCoverImage: 'https://images.unsplash.com/photo-1579632652768-6cb9dcf85912?auto=format&fit=crop&q=80&w=1200',
        estimatedPricing: '₹5,000 – ₹1,20,000 / PROJECT',
    },
    websiteDevelopment: {
        displayTitle: 'WEBSITE DEVELOPMENT',
        shortPitch: 'HIGH-PERFORMANCE, CONVERSION-DRIVEN DIGITAL ASSETS BUILT FOR SPEED.',
        heroCoverImage: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=1200',
        estimatedPricing: '₹40,000 – ₹5,00,000+',
    },
};
