import { Project, ServiceItem, BlogPost } from './types';
import { Globe, BarChart3, Video, Zap, Users, TrendingUp } from 'lucide-react';

// --- Services Data ---
export const servicesData: ServiceItem[] = [
  {
    id: 'web-development',
    title: 'High-Performance Web Development',
    subtitle: 'We build digital experiences that load instantly and convert visitors into customers.',
    icon: Globe,
    heroImage: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=1200',
    problemTitle: 'Is your website losing you money?',
    problemDescription: 'Most websites are slow, confusing, and unoptimized for mobile. In 2024, a 1-second delay in load time can result in a 7% reduction in conversions. If your site isn\'t performing, your ads are burning cash.',
    solutionTitle: 'Speed, SEO, and Scale.',
    solutionDescription: 'We don\'t use drag-and-drop builders. We engineer custom React and Next.js applications that score 99/100 on Google PageSpeed. Our code is clean, semantic, and built for search engines first.',
    features: ['Next.js / React Architecture', 'Server-Side Rendering (SSR)', 'Headless CMS Integration', 'Advanced Animation & Micro-interactions'],
    stats: [
      { label: 'Avg Speed Score', value: '99' },
      { label: 'Bounce Rate Reduction', value: '40%' },
      { label: 'Conversion Uplift', value: '2.5x' }
    ],
    testimonial: {
      id: 1,
      quote: "Our previous site took 5 seconds to load. Impact 224 got it under 0.8s. Our bounce rate dropped overnight.",
      author: "David Kim",
      role: "CTO, FinTech Global"
    }
  },
  {
    id: 'digital-marketing',
    title: 'Data-Driven Digital Marketing',
    subtitle: 'Stop guessing. Start scaling with precision-targeted campaigns.',
    icon: BarChart3,
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
    problemTitle: 'Are you burning ad budget?',
    problemDescription: 'Clicks are getting expensive. Without a robust data strategy, you are paying for traffic that never converts. Vanity metrics like "likes" don\'t pay the bills.',
    solutionTitle: 'ROAS-Focused User Acquisition.',
    solutionDescription: 'We build full-funnel marketing ecosystems. From high-intent Google Search ads to retargeting flows on Meta, we track every user touchpoint to ensure every dollar spent brings more dollars back.',
    features: ['Multi-Channel Attribution', 'A/B Creative Testing', 'Conversion Rate Optimization (CRO)', 'Automated Email Flows'],
    stats: [
      { label: 'Avg ROAS', value: '4.2x' },
      { label: 'Leads Generated', value: '50k+' },
      { label: 'CPA Reduction', value: '35%' }
    ],
    testimonial: {
      id: 2,
      quote: "They didn't just run ads; they fixed our entire sales funnel. The ROI has been incredible.",
      author: "Sarah Jenkins",
      role: "Founder, StyleHub"
    }
  },
  {
    id: 'video-editing',
    title: 'Visual Storytelling & Video',
    subtitle: 'Capture attention in the first 3 seconds with high-retention video content.',
    icon: Video,
    heroImage: 'https://images.unsplash.com/photo-1579632652768-6cb9dcf85912?auto=format&fit=crop&q=80&w=1200',
    problemTitle: 'Is your content being scrolled past?',
    problemDescription: 'Attention spans are shorter than ever. Generic corporate videos get ignored. To win on social, you need hooks, pacing, and narrative structure.',
    solutionTitle: 'Edits that Retain.',
    solutionDescription: 'Our editors understand the psychology of attention. We use fast-paced cuts, motion graphics, and sound design to keep viewers glued to the screen from start to finish.',
    features: ['Short-Form (Reels/TikTok)', 'Corporate Docuseries', 'Motion Graphics', 'Sound Design & Mixing'],
    stats: [
      { label: 'Avg Retention', value: '65%' },
      { label: 'Organic Views', value: '2M+' },
      { label: 'Click-Through Rate', value: '3.8%' }
    ],
    testimonial: {
      id: 3,
      quote: "The visual quality is Hollywood-level, but the strategy is pure marketing genius.",
      author: "Marcus Reed",
      role: "CMO, TechStream"
    }
  }
];

// --- Projects Data ---
export const projectsData: Project[] = [
  {
    id: 1,
    slug: 'fintech-dashboard',
    title: "FinTech Global Dashboard",
    category: "Website Development",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    stats: "40% Increase in Retention",
    client: "FinFlow Systems",
    duration: "3 Months",
    challenge: "FinFlow's legacy dashboard was sluggish and difficult to navigate, leading to a high churn rate among enterprise clients. They needed a complete overhaul of the UX/UI and a migration to a modern tech stack.",
    solution: "We rebuilt the platform using Next.js for server-side rendering and Recharts for high-performance data visualization. We implemented a modular design system to ensure consistency and speed.",
    results: ["Reduced load time from 4.2s to 0.6s", "Increased daily active users by 40%", "Secured Series B funding post-launch"]
  },
  {
    id: 2,
    slug: 'nike-campaign',
    title: "Nike Summer Campaign",
    category: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1200",
    stats: "3.5x ROAS",
    client: "Nike Regional",
    duration: "6 Weeks",
    challenge: "The goal was to clear seasonal inventory while maintaining brand prestige. Standard discount ads were not performing well with the target demographic.",
    solution: "We launched a 'Limited Edition' narrative campaign using high-energy video assets. We utilized lookalike audiences based on high-LTV customers and implemented a dynamic retargeting strategy.",
    results: ["Generated $1.2M in revenue", "Achieved a 3.5x Return on Ad Spend", "Sold out inventory 2 weeks ahead of schedule"]
  },
  {
    id: 3,
    slug: 'tech-talks',
    title: "TechTalks Docuseries",
    category: "Video Editing",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1200",
    stats: "1M+ Views Organic",
    client: "TechTalks Media",
    duration: "Ongoing",
    challenge: "TechTalks needed to pivot from long-form webinars to engaging social content to attract a younger audience.",
    solution: "We repurposed their archival footage into punchy, 60-second vertical clips with kinetic typography and sound effects. We optimized hooks for TikTok and Instagram algorithms.",
    results: ["Grew Instagram following by 150k", "1M+ organic views across series", "45% increase in webinar signups from social"]
  },
    {
    id: 4,
    slug: 'real-estate-funnel',
    title: "Real Estate Lead Funnel",
    category: "Website Development",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1200",
    stats: "200+ Leads/Month",
    client: "Prime Estates",
    duration: "2 Months",
    challenge: "Prime Estates had a beautiful website but zero leads. Users were browsing but not booking viewings.",
    solution: "We implemented a high-conversion lead capture form with a 'Dream Home Quiz' funnel. We integrated this with their CRM for instant follow-ups.",
    results: ["0 to 200+ qualified leads per month", "Cost per lead dropped by 60%", "Agents reported higher lead quality"]
  },
  {
    id: 5,
    slug: 'skincare-brand',
    title: "Organic Skincare Identity",
    category: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=1200",
    stats: "Brand Awareness +150%",
    client: "Glow & Co.",
    duration: "4 Months",
    challenge: "A new market entrant needed to differentiate themselves in a saturated beauty market.",
    solution: "We developed a 'Transparency First' brand identity, highlighting ingredients. We used influencer seeding campaigns combined with user-generated content ads.",
    results: ["Featured in Vogue Digital", "150% increase in brand search volume", "Profitable from month 1"]
  },
  {
    id: 6,
    slug: 'corporate-event',
    title: "Corporate Event Highlights",
    category: "Video Editing",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1200",
    stats: "Same Day Turnaround",
    client: "Global Summit 2024",
    duration: "3 Days",
    challenge: "The client needed same-day highlight reels to share on social media while the event was still happening.",
    solution: "We deployed an on-site editing team. Footage was ingested, cut, colored, and exported within 2 hours of keynotes finishing.",
    results: ["Real-time trending on Twitter", "Highest engagement rate in event history", "Client renewed contract for 2025"]
  }
];

// --- Blog Data ---
export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: 'seo-2025',
    title: "The Death of Traditional SEO: What's Next in 2025?",
    excerpt: "Search engines are changing. AI overviews are taking over. Here is how your brand can survive the shift.",
    author: "Gunn Malhotra",
    date: "Oct 24, 2024",
    readTime: "6 min read",
    category: "Strategy",
    image: "https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?auto=format&fit=crop&q=80&w=1200",
    content: `
      <p class="mb-6">The era of keyword stuffing and backlink farming is officially over. With the rise of AI Overview (formerly SGE) and Large Language Models, Google is no longer just a search engine—it's an answer engine.</p>
      <h3 class="text-2xl font-bold mb-4">The Shift to Entity-Based Search</h3>
      <p class="mb-6">Search algorithms now understand concepts, not just strings of text. If you want to rank in 2025, you need to establish topical authority. This means covering a subject in its entirety, linking related concepts, and ensuring your brand is recognized as an entity in the Knowledge Graph.</p>
      <h3 class="text-2xl font-bold mb-4">Optimizing for AI Overviews</h3>
      <p class="mb-6">To get featured in AI snapshots, your content needs to be structured for direct answers. Use clear headings, bullet points, and schema markup. The goal is to be the source that the AI cites.</p>
      <div class="bg-neutral-100 dark:bg-neutral-800 p-6 rounded-xl border-l-4 border-yellow-400 my-8">
        <p class="font-bold italic">"Content that adds unique perspective, data, or experience (EEAT) will win. Generic AI-generated slop will be filtered out."</p>
      </div>
      <h3 class="text-2xl font-bold mb-4">Actionable Steps</h3>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>Audit your content for "Experience" - add personal anecdotes and case studies.</li>
        <li>Focus on long-tail, conversational queries that users ask voice assistants.</li>
        <li>Improve technical SEO: Core Web Vitals are non-negotiable.</li>
      </ul>
      <p>The future belongs to brands that build genuine authority, not just those that game the algorithm.</p>
    `
  },
  {
    id: 2,
    slug: 'conversion-rate-optimization',
    title: "Why Your Website Conversion Rate is Low (And How to Fix It)",
    excerpt: "It's not your traffic, it's your funnel. We break down the 5 most common UX mistakes killing your sales.",
    author: "Sarah Jenkins",
    date: "Oct 20, 2024",
    readTime: "8 min read",
    category: "UX/UI Design",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    content: `
      <p class="mb-6">You are driving traffic, but the phone isn't ringing. The checkout cart is abandoned. Why? Conversion Rate Optimization (CRO) is often the missing link between traffic and revenue.</p>
      <h3 class="text-2xl font-bold mb-4">1. The "Above the Fold" Fallacy</h3>
      <p class="mb-6">Users do scroll, but they judge your site in 50 milliseconds. If your Value Proposition isn't clear instantly, they leave. Your hero section must answer: What is it? Who is it for? What do I get?</p>
      <h3 class="text-2xl font-bold mb-4">2. Speed Kills (Conversions)</h3>
      <p class="mb-6">Amazon found that every 100ms of latency cost them 1% in sales. Optimizing your images, lazy-loading assets, and using a modern framework like Next.js can double your conversion rate simply by making the site faster.</p>
      <h3 class="text-2xl font-bold mb-4">3. Trust Signals are Missing</h3>
      <p class="mb-6">In the age of scams, trust is currency. If you lack social proof, security badges, or clear contact info, users will hesitate.</p>
      <h3 class="text-2xl font-bold mb-4">The Fix</h3>
      <p class="mb-6">Start with a heatmap analysis. See where users are clicking and where they drop off. Simplify your forms—ask for the minimum info needed. And test, test, test.</p>
    `
  },
    {
    id: 3,
    slug: 'roas-meta-ads',
    title: "Maximizing ROAS on Meta Ads in a Post-Cookie World",
    excerpt: "Targeting has become harder. Here are the first-party data strategies we use to get 4x returns for clients.",
    author: "Mike Ross",
    date: "Oct 15, 2024",
    readTime: "5 min read",
    category: "Paid Media",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1200",
    content: `
      <p class="mb-6">iOS 14 changed everything. The pixel isn't what it used to be. But that doesn't mean Facebook Ads are dead—it means the strategy has to evolve.</p>
      <h3 class="text-2xl font-bold mb-4">Broad Targeting is the New Lookalike</h3>
      <p class="mb-6">Meta's AI is now smarter than manual targeting. By going broad and letting the algorithm find your customers based on creative engagement, we are seeing lower CPMs and higher scalability.</p>
      <h3 class="text-2xl font-bold mb-4">Creative is the Targeting</h3>
      <p class="mb-6">Your ad creative does the filtering. If you want to target dog owners, show a dog in the first second. The algorithm will serve it to people who stop scrolling.</p>
      <h3 class="text-2xl font-bold mb-4">First-Party Data Integration</h3>
      <p class="mb-6">Upload your customer lists. Use Conversions API (CAPI). Feed the machine with high-quality data so it knows exactly who your best customers are.</p>
    `
  },
  {
    id: 4,
    slug: 'brand-storytelling',
    title: "Brand Storytelling: The Only Moat Left",
    excerpt: "In an age of AI content, human connection is premium. Learn how to craft a narrative that resonates.",
    author: "Gunn Malhotra",
    date: "Oct 10, 2024",
    readTime: "7 min read",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200",
    content: `
      <p class="mb-6">Products can be copied. Features can be cloned. But a story? That belongs to you. In a crowded market, your brand story is the only sustainable competitive advantage.</p>
      <h3 class="text-2xl font-bold mb-4">The Hero's Journey (It's Not You)</h3>
      <p class="mb-6">Your brand is not the hero. Your customer is. You are the guide (Yoda) helping the hero (Luke) achieve their goal. Position your messaging to empower the user.</p>
      <h3 class="text-2xl font-bold mb-4">Consistency Across Touchpoints</h3>
      <p class="mb-6">Your visual identity, tone of voice, and values must align everywhere—from your Instagram bio to your 404 page. Inconsistency breeds distrust.</p>
      <p class="mb-6">Authenticity wins. Show behind the scenes. Admit mistakes. Be human.</p>
    `
  }
];