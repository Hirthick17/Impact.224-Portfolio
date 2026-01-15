-- Update existing home page data to include latestInsights fields
-- Run this to add the new Latest Insights section fields

UPDATE cms_content
SET content = jsonb_set(
    content,
    '{latestInsights}',
    jsonb_build_object(
        'sectionTitle', 'Latest Insights',
        'sectionSubtitle', 'Strategies to dominate your niche.',
        'blog1Category', 'Strategy',
        'blog1Image', 'https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?auto=format&fit=crop&q=80&w=1200',
        'blog1Title', 'The Death of Traditional SEO: What''s Next in 2025?',
        'blog1Date', 'Oct 24, 2024',
        'blog1ReadTime', '6 min read',
        'blog2Category', 'UX/UI Design',
        'blog2Image', 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
        'blog2Title', 'Why Your Website Conversion Rate is Low (And How to Fix It)',
        'blog2Date', 'Oct 20, 2024',
        'blog2ReadTime', '8 min read',
        'blog3Category', 'Paid Media',
        'blog3Image', 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1200',
        'blog3Title', 'Maximizing ROAS on Meta Ads in a Post-Cookie World',
        'blog3Date', 'Oct 15, 2024',
        'blog3ReadTime', '5 min read',
        'blog4Category', 'Branding',
        'blog4Image', 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200',
        'blog4Title', 'Brand Storytelling: The Only Moat Left',
        'blog4Date', 'Oct 10, 2024',
        'blog4ReadTime', '7 min read'
    )
)
WHERE page_id = 'home'
AND NOT content ? 'latestInsights';

-- Verify the update
SELECT page_id, content->'latestInsights' as latest_insights_content
FROM cms_content
WHERE page_id = 'home';
