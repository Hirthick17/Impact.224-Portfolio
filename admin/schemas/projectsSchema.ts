import { CMSPageSchema } from '../types';

export interface ProjectsPageData {
    pageHeader: {
        pageTitle: string;
        pageSubtitle: string;
    };
    project1: {
        projectTitle: string;
        headlineResultStat: string;
        featuredImage: string;
        clientName: string;
        projectDuration: string;
        theChallenge: string;
        theSolution: string;
        results: string;
    };
    project2: {
        projectTitle: string;
        headlineResultStat: string;
        featuredImage: string;
        clientName: string;
        projectDuration: string;
        theChallenge: string;
        theSolution: string;
        results: string;
    };
    project3: {
        projectTitle: string;
        headlineResultStat: string;
        featuredImage: string;
        clientName: string;
        projectDuration: string;
        theChallenge: string;
        theSolution: string;
        results: string;
    };
}

export const projectsSchema: CMSPageSchema = {
    pageId: 'projects',
    pageName: 'Project Portfolio',
    sections: [
        {
            id: 'pageHeader',
            title: 'Page Header',
            icon: 'document',
            fields: [
                { name: 'pageTitle', type: 'text', label: 'Page Title', placeholder: 'OUR WORK' },
                { name: 'pageSubtitle', type: 'text', label: 'Page Subtitle', placeholder: 'A COLLECTION OF PROJECTS...' },
            ],
        },
        {
            id: 'project1',
            title: 'Project: FinTech Global Dashboard',
            icon: 'target',
            fields: [
                { name: 'projectTitle', type: 'text', label: 'Project Title', placeholder: 'FINTECH GLOBAL DASHBOARD' },
                { name: 'headlineResultStat', type: 'text', label: 'Headline Result/Stat', placeholder: '40% INCREASE IN RETENTION' },
                { name: 'featuredImage', type: 'image', label: 'Featured Image', specs: 'MAX 2MB • PNG, JPG, WEBP' },
                { name: 'clientName', type: 'text', label: 'Client Name', placeholder: 'FINFLOW SYSTEMS' },
                { name: 'projectDuration', type: 'text', label: 'Project Duration', placeholder: '3 MONTHS' },
                { name: 'theChallenge', type: 'html', label: 'The Challenge', placeholder: "FinFlow's legacy dashboard was sluggish..." },
                { name: 'theSolution', type: 'html', label: 'The Solution', placeholder: 'We rebuilt the platform using Next.js...' },
                { name: 'results', type: 'html', label: 'Results (New Line for Each Point)', placeholder: 'Reduced load time from 4.2s to 0.6s\nIncreased daily active users by 40%' },
            ],
        },
        {
            id: 'project2',
            title: 'Project: Nike Summer Campaign',
            icon: 'target',
            fields: [
                { name: 'projectTitle', type: 'text', label: 'Project Title', placeholder: 'NIKE SUMMER CAMPAIGN' },
                { name: 'headlineResultStat', type: 'text', label: 'Headline Result/Stat', placeholder: '3.5X ROAS' },
                { name: 'featuredImage', type: 'image', label: 'Featured Image', specs: 'MAX 2MB • PNG, JPG, WEBP' },
                { name: 'clientName', type: 'text', label: 'Client Name', placeholder: 'NIKE REGIONAL' },
                { name: 'projectDuration', type: 'text', label: 'Project Duration', placeholder: '6 WEEKS' },
                { name: 'theChallenge', type: 'html', label: 'The Challenge', placeholder: 'The goal was to clear seasonal inventory...' },
                { name: 'theSolution', type: 'html', label: 'The Solution', placeholder: "We launched a 'Limited Edition' narrative campaign..." },
                { name: 'results', type: 'html', label: 'Results (New Line for Each Point)', placeholder: 'Generated $1.2M in revenue\nAchieved a 3.5x Return on Ad Spend' },
            ],
        },
        {
            id: 'project3',
            title: 'Project: TechTalks Docuseries',
            icon: 'target',
            fields: [
                { name: 'projectTitle', type: 'text', label: 'Project Title', placeholder: 'TECHTALKS DOCUSERIES' },
                { name: 'headlineResultStat', type: 'text', label: 'Headline Result/Stat', placeholder: '1M+ VIEWS ORGANIC' },
                { name: 'featuredImage', type: 'image', label: 'Featured Image', specs: 'MAX 2MB • PNG, JPG, WEBP' },
                { name: 'clientName', type: 'text', label: 'Client Name', placeholder: 'TECHTALKS MEDIA' },
                { name: 'projectDuration', type: 'text', label: 'Project Duration', placeholder: 'ONGOING' },
                { name: 'theChallenge', type: 'html', label: 'The Challenge', placeholder: 'TechTalks needed to pivot from long-form webinars...' },
                { name: 'theSolution', type: 'html', label: 'The Solution', placeholder: 'We repurposed their archival footage into punchy...' },
                { name: 'results', type: 'html', label: 'Results (New Line for Each Point)', placeholder: 'Grew Instagram following by 150k\n1M+ organic views across series' },
            ],
        },
    ],
};

export const defaultProjectsData: ProjectsPageData = {
    pageHeader: {
        pageTitle: 'OUR WORK',
        pageSubtitle: 'A COLLECTION OF PROJECTS THAT HAVE GENERATED MILLIONS IN REVENUE FOR OUR CLIENTS.',
    },
    project1: {
        projectTitle: 'FINTECH GLOBAL DASHBOARD',
        headlineResultStat: '40% INCREASE IN RETENTION',
        featuredImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
        clientName: 'FINFLOW SYSTEMS',
        projectDuration: '3 MONTHS',
        theChallenge: "FinFlow's legacy dashboard was sluggish and difficult to navigate, leading to a high churn rate among enterprise clients. They needed a complete overhaul of the UX/UI and a migration to a modern tech stack.",
        theSolution: 'We rebuilt the platform using Next.js for server-side rendering and Recharts for high-performance data visualization. We implemented a modular design system to ensure consistency and speed.',
        results: 'Reduced load time from 4.2s to 0.6s\nIncreased daily active users by 40%\nSecured Series B funding post-launch',
    },
    project2: {
        projectTitle: 'NIKE SUMMER CAMPAIGN',
        headlineResultStat: '3.5X ROAS',
        featuredImage: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1200',
        clientName: 'NIKE REGIONAL',
        projectDuration: '6 WEEKS',
        theChallenge: 'The goal was to clear seasonal inventory while maintaining brand prestige. Standard discount ads were not performing well with the target demographic.',
        theSolution: "We launched a 'Limited Edition' narrative campaign using high-energy video assets. We utilized lookalike audiences based on high-LTV customers and implemented a dynamic retargeting strategy.",
        results: 'Generated $1.2M in revenue\nAchieved a 3.5x Return on Ad Spend\nSold out inventory 2 weeks ahead of schedule',
    },
    project3: {
        projectTitle: 'TECHTALKS DOCUSERIES',
        headlineResultStat: '1M+ VIEWS ORGANIC',
        featuredImage: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1200',
        clientName: 'TECHTALKS MEDIA',
        projectDuration: 'ONGOING',
        theChallenge: 'TechTalks needed to pivot from long-form webinars to engaging social content to attract a younger audience.',
        theSolution: 'We repurposed their archival footage into punchy, 60-second vertical clips with kinetic typography and sound effects. We optimized hooks for TikTok and Instagram algorithms.',
        results: 'Grew Instagram following by 150k\n1M+ organic views across series\n45% increase in webinar signups from social',
    },
};
