import { CMSPageSchema, AboutPageData } from '../types';

export const aboutSchema: CMSPageSchema = {
    pageId: 'about',
    pageName: 'About Section',
    sections: [
        {
            id: 'narrative',
            title: 'Narrative',
            icon: 'target',
            fields: [
                { name: 'mainHeading', type: 'text', label: 'Main Heading', placeholder: 'ABOUT IMPACT 224' },
                { name: 'subHeading', type: 'text', label: 'Sub-Heading' },
                { name: 'visionNarrative', type: 'html', label: 'Vision Narrative' },
                { name: 'brandImage', type: 'image', label: 'Brand Image', specs: 'MAX 2MB • PNG, JPG, WEBP' },
            ],
        },
        {
            id: 'performance',
            title: 'Performance',
            icon: 'trophy',
            fields: [
                { name: 'stat1Value', type: 'text', label: 'Stat 1 Value', placeholder: '80%' },
                { name: 'stat1Label', type: 'text', label: 'Stat 1 Label', placeholder: 'FASTER LOAD TIMES' },
                { name: 'stat2Value', type: 'text', label: 'Stat 2 Value', placeholder: 'NO.1' },
                { name: 'stat2Label', type: 'text', label: 'Stat 2 Label', placeholder: 'IN ROI DESIGN' },
                { name: 'stat3Value', type: 'text', label: 'Stat 3 Value', placeholder: '100%' },
                { name: 'stat3Label', type: 'text', label: 'Stat 3 Label', placeholder: 'CLIENT SUCCESS' },
            ],
        },
        {
            id: 'promise',
            title: 'Promise',
            icon: 'quote',
            fields: [
                { name: 'coreQuote', type: 'text', label: 'Core Quote' },
                { name: 'quoteAuthor', type: 'text', label: 'Quote Author', placeholder: 'GUNN MALHOTRA, FOUNDER' },
                { name: 'promiseImage', type: 'image', label: 'Promise Image', specs: 'MAX 2MB • PNG, JPG, WEBP' },
            ],
        },
        {
            id: 'personnel',
            title: 'Personnel',
            icon: 'users',
            fields: [
                { name: 'teamHeader', type: 'text', label: 'Team Header', placeholder: 'MEET THE EXPERTS' },
                { name: 'm1Name', type: 'text', label: 'M1 Name', placeholder: 'GUNN MALHOTRA' },
                { name: 'm1Role', type: 'text', label: 'M1 Role', placeholder: 'FOUNDER & STRATEGY' },
                { name: 'm1Image', type: 'image', label: 'M1 Image', specs: 'MAX 2MB • PNG, JPG, WEBP' },
                { name: 'm2Name', type: 'text', label: 'M2 Name' },
                { name: 'm2Role', type: 'text', label: 'M2 Role' },
                { name: 'm2Image', type: 'image', label: 'M2 Image', specs: 'MAX 2MB • PNG, JPG, WEBP' },
                { name: 'm3Name', type: 'text', label: 'M3 Name' },
                { name: 'm3Role', type: 'text', label: 'M3 Role' },
                { name: 'm3Image', type: 'image', label: 'M3 Image', specs: 'MAX 2MB • PNG, JPG, WEBP' },
                { name: 'm4Name', type: 'text', label: 'M4 Name' },
                { name: 'm4Role', type: 'text', label: 'M4 Role' },
                { name: 'm4Image', type: 'image', label: 'M4 Image', specs: 'MAX 2MB • PNG, JPG, WEBP' },
            ],
        },
    ],
};

export const defaultAboutData: AboutPageData = {
    narrative: {
        mainHeading: 'ABOUT IMPACT 224',
        subHeading: 'BUILDING DIGITAL EXPERIENCES THAT MATTER',
        visionNarrative: 'We are a collective of digital natives, strategists, and engineers who believe that a website should be your best salesperson.',
        brandImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200',
    },
    performance: {
        stat1Value: '80%',
        stat1Label: 'FASTER LOAD TIMES',
        stat2Value: 'NO.1',
        stat2Label: 'IN ROI DESIGN',
        stat3Value: '100%',
        stat3Label: 'CLIENT SUCCESS',
    },
    promise: {
        coreQuote: "WE DON'T JUST DELIVER A PRODUCT; WE DELIVER A PROMISE OF GROWTH.",
        quoteAuthor: 'GUNN MALHOTRA, FOUNDER',
        promiseImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200',
    },
    personnel: {
        teamHeader: 'MEET THE EXPERTS',
        m1Name: 'GUNN MALHOTRA',
        m1Role: 'FOUNDER & STRATEGY',
        m1Image: 'https://randomuser.me/api/portraits/men/32.jpg',
        m2Name: 'SARAH JENKINS',
        m2Role: 'CREATIVE DIRECTOR',
        m2Image: 'https://randomuser.me/api/portraits/women/44.jpg',
        m3Name: 'MIKE ROSS',
        m3Role: 'LEAD DEVELOPER',
        m3Image: 'https://randomuser.me/api/portraits/men/46.jpg',
        m4Name: 'EMMA WATSON',
        m4Role: 'MARKETING HEAD',
        m4Image: 'https://randomuser.me/api/portraits/women/68.jpg',
    },
};
