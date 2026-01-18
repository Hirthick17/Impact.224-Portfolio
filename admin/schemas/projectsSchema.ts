import { CMSPageSchema } from '../types';

export interface ProjectsPageData {
    pageHeader: {
        pageTitle: string;
        pageSubtitle: string;
    };
    projectInsights: {
        sectionTitle: string;
        insight1Number: string;
        insight1Heading: string;
        insight1Subtitle: string;
        insight2Number: string;
        insight2Heading: string;
        insight2Subtitle: string;
        insight3Number: string;
        insight3Heading: string;
        insight3Subtitle: string;
        insight4Number: string;
        insight4Heading: string;
        insight4Subtitle: string;
    };
    clientReviews: {
        sectionTitle: string;
        sectionSubtitle: string;
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
        testimonialText: string;
        testimonialAuthor: string;
        testimonialRole: string;
        testimonialRating: string;
        testimonialImage: string;
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
        testimonialText: string;
        testimonialAuthor: string;
        testimonialRole: string;
        testimonialRating: string;
        testimonialImage: string;
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
        testimonialText: string;
        testimonialAuthor: string;
        testimonialRole: string;
        testimonialRating: string;
        testimonialImage: string;
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
            id: 'projectInsights',
            title: 'Project Insights Section',
            icon: 'chart',
            fields: [
                { name: 'sectionTitle', type: 'text', label: 'Section Title', placeholder: 'Project Insights' },
                { name: 'insight1Number', type: 'text', label: 'Insight 1 - Number', placeholder: '150+' },
                { name: 'insight1Heading', type: 'text', label: 'Insight 1 - Heading', placeholder: 'Projects Completed' },
                { name: 'insight1Subtitle', type: 'text', label: 'Insight 1 - Subtitle', placeholder: 'Across 3 continents' },
                { name: 'insight2Number', type: 'text', label: 'Insight 2 - Number', placeholder: '4.9' },
                { name: 'insight2Heading', type: 'text', label: 'Insight 2 - Heading', placeholder: 'Overall Rating' },
                { name: 'insight2Subtitle', type: 'text', label: 'Insight 2 - Subtitle', placeholder: 'From 120+ reviews' },
                { name: 'insight3Number', type: 'text', label: 'Insight 3 - Number', placeholder: '6-8' },
                { name: 'insight3Heading', type: 'text', label: 'Insight 3 - Heading', placeholder: 'Weeks Average' },
                { name: 'insight3Subtitle', type: 'text', label: 'Insight 3 - Subtitle', placeholder: 'Project completion time' },
                { name: 'insight4Number', type: 'text', label: 'Insight 4 - Number', placeholder: '85%' },
                { name: 'insight4Heading', type: 'text', label: 'Insight 4 - Heading', placeholder: 'Avg. Retention Rate' },
                { name: 'insight4Subtitle', type: 'text', label: 'Insight 4 - Subtitle', placeholder: 'Audience engagement' },
            ],
        },
        {
            id: 'clientReviews',
            title: 'Client Reviews Section Header',
            icon: 'users',
            fields: [
                { name: 'sectionTitle', type: 'text', label: 'Section Title', placeholder: 'Reviews from Clients' },
                { name: 'sectionSubtitle', type: 'text', label: 'Section Subtitle', placeholder: 'Hear what our clients have to say about their project experience' },
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
                { name: 'testimonialText', type: 'html', label: 'Client Testimonial', placeholder: 'The team delivered exceptional results...' },
                { name: 'testimonialAuthor', type: 'text', label: 'Testimonial Author', placeholder: 'John Smith' },
                { name: 'testimonialRole', type: 'text', label: 'Author Role', placeholder: 'CEO, FinFlow Systems' },
                { name: 'testimonialRating', type: 'text', label: 'Rating (out of 5)', placeholder: '5' },
                { name: 'testimonialImage', type: 'image', label: 'Client Photo', specs: 'MAX 2MB • PNG, JPG, WEBP' },
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
                { name: 'testimonialText', type: 'html', label: 'Client Testimonial', placeholder: 'Outstanding campaign execution...' },
                { name: 'testimonialAuthor', type: 'text', label: 'Testimonial Author', placeholder: 'Sarah Johnson' },
                { name: 'testimonialRole', type: 'text', label: 'Author Role', placeholder: 'Marketing Director, Nike Regional' },
                { name: 'testimonialRating', type: 'text', label: 'Rating (out of 5)', placeholder: '5' },
                { name: 'testimonialImage', type: 'image', label: 'Client Photo', specs: 'MAX 2MB • PNG, JPG, WEBP' },
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
                { name: 'testimonialText', type: 'html', label: 'Client Testimonial', placeholder: 'Incredible content transformation...' },
                { name: 'testimonialAuthor', type: 'text', label: 'Testimonial Author', placeholder: 'Michael Chen' },
                { name: 'testimonialRole', type: 'text', label: 'Author Role', placeholder: 'Content Director, TechTalks Media' },
                { name: 'testimonialRating', type: 'text', label: 'Rating (out of 5)', placeholder: '5' },
                { name: 'testimonialImage', type: 'image', label: 'Client Photo', specs: 'MAX 2MB • PNG, JPG, WEBP' },
            ],
        },
    ],
};

export const defaultProjectsData: ProjectsPageData = {
    pageHeader: {
        pageTitle: 'OUR WORK',
        pageSubtitle: 'A COLLECTION OF PROJECTS THAT HAVE GENERATED MILLIONS IN REVENUE FOR OUR CLIENTS.',
    },
    projectInsights: {
        sectionTitle: 'Project Insights',
        insight1Number: '150+',
        insight1Heading: 'Projects Completed',
        insight1Subtitle: 'Across 3 continents',
        insight2Number: '4.9',
        insight2Heading: 'Overall Rating',
        insight2Subtitle: 'From 120+ reviews',
        insight3Number: '6-8',
        insight3Heading: 'Weeks Average',
        insight3Subtitle: 'Project completion time',
        insight4Number: '85%',
        insight4Heading: 'Avg. Retention Rate',
        insight4Subtitle: 'Audience engagement',
    },
    clientReviews: {
        sectionTitle: 'Reviews from Clients',
        sectionSubtitle: 'Hear what our clients have to say about their project experience',
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
        testimonialText: 'Working with Impact.224 was a game-changer for our fintech platform. We were struggling with a clunky, outdated dashboard that was causing user frustration and high churn rates. The team didn\'t just redesign the interface—they completely reimagined our user experience. The migration to Next.js was seamless, and the performance improvements were immediate. Our load times dropped from over 4 seconds to under a second, which directly translated to better user engagement. What impressed me most was their attention to detail and their commitment to understanding our business goals. They delivered on time, stayed within budget, and the results speak for themselves. We secured our Series B funding largely because investors were blown away by the new platform.',
        testimonialAuthor: 'David Richardson',
        testimonialRole: 'CEO, FinFlow Systems',
        testimonialRating: '5',
        testimonialImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
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
        testimonialText: 'Our summer campaign needed to clear seasonal inventory without diluting our brand value—a delicate balance. Impact.224 approached this challenge with creativity and strategic thinking that exceeded our expectations. Instead of typical discount advertising, they crafted a \'Limited Edition\' narrative that created urgency while maintaining our premium positioning. The video assets they produced were high-energy and perfectly aligned with our brand aesthetic. Their use of lookalike audiences and dynamic retargeting was sophisticated and data-driven. We generated $1.2M in revenue with a 3.5x ROAS, and sold out our inventory two weeks ahead of schedule. The team was responsive, professional, and truly understood the Nike brand. I would absolutely work with them again.',
        testimonialAuthor: 'Sarah Martinez',
        testimonialRole: 'Marketing Director, Nike Regional',
        testimonialRating: '5',
        testimonialImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
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
        testimonialText: 'TechTalks was stuck in the long-form webinar format, and we knew we needed to pivot to short-form social content to reach younger audiences. Impact.224 took our extensive archive of webinar footage and transformed it into engaging 60-second vertical clips optimized for TikTok and Instagram. Their expertise in kinetic typography, sound design, and platform-specific optimization was evident in every piece. The hooks they created were algorithmically optimized and incredibly effective at stopping the scroll. Within three months, we grew our Instagram following by 150,000 and achieved over 1 million organic views. Most importantly, we saw a 45% increase in webinar signups from social channels. The ROI was phenomenal, and the team was a pleasure to work with. They understood our content, our audience, and the platforms better than anyone else we\'ve worked with.',
        testimonialAuthor: 'Michael Chen',
        testimonialRole: 'Content Director, TechTalks Media',
        testimonialRating: '5',
        testimonialImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
    },
};
